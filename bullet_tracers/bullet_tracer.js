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
const enabled = UI.AddCheckbox("Local bullet tracers");
const time = UI.AddSliderInt("Bullet tracer duration", 1, 14);
const color = UI.AddColorPicker("Bullet tracer color");

//menu handle
function handle_menu() {
    var script_state = Get(enabled);

    UI.SetEnabled(("Script items", "Bullet tracer duration"), script_state);
    UI.SetEnabled(("Script items", "Bullet tracer color"), script_state);
}
handle_menu();

//region events
function bullet_impact_handler() {
    var bullet_impact_userid = Event.GetInt("userid");
    var bullet_impact_user = Entity.GetEntityFromUserID(bullet_impact_userid);
    var bullet_impact_xyz = [Event.GetInt("x"),  Event.GetInt("y"), Event.GetInt("z")];

    if (bullet_impact_user != Entity.GetLocalPlayer())
        return;

    var client_eye_xyz = Entity.GetEyePosition(bullet_impact_user);

    queue[Globals.Tickcount()] = [client_eye_xyz[0], client_eye_xyz[1], client_eye_xyz[2], bullet_impact_xyz[0], bullet_impact_xyz[1], bullet_impact_xyz[2], Globals.Curtime() + Get(time)];
}

function draw_handler() {
    handle_menu();

    if (!Get(enabled))
        return;

    for (var i in queue) {
        var pos_2d = Render.WorldToScreen([queue[i][0], queue[i][1], queue[i][2]]);
        var e_pos_2d = Render.WorldToScreen([queue[i][3], queue[i][4], queue[i][5]]);

        if (e_pos_2d[2] === 1 && pos_2d[2] === 1 && (Globals.Curtime() <= queue[i][6])) {
            const bt_color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Bullet tracer color")
            Render.Line(pos_2d[0], pos_2d[1], e_pos_2d[0], e_pos_2d[1], bt_color);
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

    Set(time, 2);
    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Bullet tracer color", [255, 255, 255, 255]);
    
    Cheat.RegisterCallback("bullet_impact", "bullet_impact_handler");
    Cheat.RegisterCallback("round_prestart", "reset_queue");
    Cheat.RegisterCallback("cs_game_disconnected", "reset_queue");
    Cheat.RegisterCallback("game_newmap", "reset_queue");
}
init();