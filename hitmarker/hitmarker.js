//region ui (thank apwil)
function Get(element) {
    return UI.GetValue.apply(null, element);
}

function GetColor(element) {
    return UI.GetColor.apply(null, element);
}

function GetHotkey(element) {
    return UI.IsHotkeyActive.apply(null, element);
}

function Set(element, value) {
    const safe_concat = function(a, b) {
    
        const arr = [];

        for (var i = 0; i < a.length; i++)
            arr.push(a[i]);
       
        arr.push(b);
       
        return arr;
    }

    UI.SetValue.apply(null, safe_concat(element, value));
}
//endregion

//vars
var queue = [];

//menu controls
const enabled = UI.AddCheckbox("Custom hitmarkers");
const size = UI.AddSliderInt("Hitmarker size", 1, 14);
const color = UI.AddColorPicker("Hitmarker color");
const hit = UI.AddCheckbox("Hitmarker on hit only")

//menu handle
function handle_menu() {
    var script_state = Get(enabled);

    UI.SetEnabled(("Script items", "Hitmarker size"), script_state);
    UI.SetEnabled(("Script items", "Hitmarker color"), script_state);
    UI.SetEnabled(("Script items", "Hitmarker on hit only"), script_state);
}
handle_menu();

//region events
function ragebot_fire_handler() {
    if (Get(hit))
        return;

    var ragebot_target = Event.GetInt("target_index");
    var ragebot_target_hitbox = Event.GetInt("hitbox");
    var hitbox_position = Entity.GetHitboxPosition(ragebot_target, ragebot_target_hitbox);

    queue[Globals.Tickcount()] = [hitbox_position[0], hitbox_position[1], hitbox_position[2], Globals.Curtime() + 2];
}

function player_hurt_handler() {
    if (!Get(hit))
        return;

    var player_hurt_userid = Event.GetInt("userid");
    var player_hurt_attackerid = Event.GetInt("attacker");
    var player_hurt_hitbox = Event.GetInt("hitgroup");

    var player_hurt_victim = Entity.GetEntityFromUserID(player_hurt_userid);
    var player_hurt_attacker = Entity.GetEntityFromUserID(player_hurt_attackerid);

    var hitbox_position = Entity.GetHitboxPosition(player_hurt_victim, player_hurt_hitbox);

    if (player_hurt_victim != Entity.GetLocalPlayer() && player_hurt_attacker == Entity.GetLocalPlayer())
        queue[Globals.Tickcount()] = [hitbox_position[0], hitbox_position[1], hitbox_position[2], Globals.Curtime() + 2];
}

function draw_handler() {
    handle_menu();

    if (!Get(enabled))
        return;

    for (var i in queue) {
        if (Globals.Curtime() <= queue[i][3]) {
            var pos_2d = Render.WorldToScreen([queue[i][0], queue[i][1], queue[i][2]]);

            if (pos_2d[0] != null && pos_2d[1] != null) {
                const hm_color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hitmarker color")

                Render.Line(pos_2d[0] - Get(size), pos_2d[1], pos_2d[0] + Get(size), pos_2d[1], hm_color);
                Render.Line(pos_2d[0], pos_2d[1] - Get(size), pos_2d[0], pos_2d[1] + Get(size), hm_color);
            }
        }
    }
}

function reset_queue() {
    queue = [];
}
//endregion

//initialize
function init() {
    Cheat.RegisterCallback("Draw", "draw_handler");

    if (!Get(enabled))
        return;

    Set(size, 7);
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Hitmarker color", [255, 255, 255, 255]);
    
    Cheat.RegisterCallback("ragebot_fire", "ragebot_fire_handler");
    Cheat.RegisterCallback("player_hurt", "player_hurt_handler");
    Cheat.RegisterCallback("round_prestart", "reset_queue");
    Cheat.RegisterCallback("cs_game_disconnected", "reset_queue");
    Cheat.RegisterCallback("game_newmap", "reset_queue");
}
init();