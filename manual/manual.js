//#region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh

//#endregion

//#region ui (thanks apwil)
function UiGet(element) {
    return UI.GetValue.apply(null, element);
}

function UiGetColor(element) {
    return UI.GetColor.apply(null, element);
}

function UiGetHotkey(element) {
    return UI.IsHotkeyActive.apply(null, element);
}

function UiSet(element, value) {
    const safe_concat = function(a, b) {
    
        const arr = [];

        for (var i = 0; i < a.length; i++)
            arr.push(a[i]);
       
        arr.push(b);
       
        return arr;
    }

    UI.SetValue.apply(null, safe_concat(element, value));
}

//#endregion

//#region script
///controls
const enabled = ui.add_checkbox('Enable manual anti-aim');

const inactive_color = ui.add_color_picker('Manual inactive color');
const active_color = ui.add_color_picker('Manual active color');

const left_hotkey = ui.add_hotkey('Manual left hotkey');
const right_hotkey = ui.add_hotkey('Manual right hotkey');
const back_hotkey = ui.add_hotkey('Manual back hotkey');
const auto_hotkey = ui.add_hotkey('Auto direction hotkey');

const indicate = ui.add_checkbox('Draw manual indicators');

///vars
var manual_state = 0;

var script = {
    left: false,
    right: false,
    back: false
}

var alpha = 255;
var add = 5;
var reduce = false;

//#region menu handle
script.handle_visibility = function() {
    const script_state = UiGet(enabled);

    ui.set_enabled(('Script items', 'Manual inactive color'), script_state);
    ui.set_enabled(('Script items', 'Manual active color'), script_state);

    ui.set_enabled(('Script items', 'Manual left hotkey'), script_state);
    ui.set_enabled(('Script items', 'Manual right hotkey'), script_state);
    ui.set_enabled(('Script items', 'Manual back hotkey'), script_state);
    ui.set_enabled(('Script items', 'Auto direction hotkey'), script_state);

    ui.set_enabled(('Script items', 'Draw manual indicators'), script_state);
}
script.handle_visibility();

//#endregion

//#region func
script.update = function() {
    if (UiGetHotkey(auto_hotkey))
        return;

    const left_state = UiGetHotkey(left_hotkey);
    const right_state = UiGetHotkey(right_hotkey);
    const back_state = UiGetHotkey(back_hotkey);

    if(left_state == this.left && right_state == this.right && back_state == this.back)
        return;

    this.left = left_state, this.right = right_state, this.back == back_state;

    if(left_state && manual_state == 1 || right_state && manual_state == 2 || back_state && manual_state == 3)
    {
        manual_state = 0;
        return;
    }

    if(left_state && manual_state != 1) 
        manual_state = 1;

    if(right_state && manual_state != 2) 
        manual_state = 2;
    
    if(back_state && manual_state != 3) 
        manual_state = 3;
}

//#endregion

//#region events
function on_paint() {
    script.handle_visibility();

    if (!UiGet(enabled))
        return;

    const me = entity.get_local_player();

    if(!me || !entity.is_alive(me))
         return;

    script.update();

    if (!UiGet(indicate))
        return;

    const w = render.get_screen_size()[0], h = render.get_screen_size()[1];
    const ri = UiGetColor(inactive_color)[0], gi = UiGetColor(inactive_color)[1], bi = UiGetColor(inactive_color)[2], ai = UiGetColor(inactive_color)[3];
    const r = UiGetColor(active_color)[0], g = UiGetColor(active_color)[1], b = UiGetColor(active_color)[2], a = UiGetColor(active_color)[3];

    const auto_state = UiGetHotkey(auto_hotkey);
    const font = Render.AddFont('Arrows', 14, 400);

    if (alpha >= 255)
        reduce = true;
    else if (alpha <= 100 && reduce)
        reduce = false;

    add = reduce && -5 || 5;
    alpha = alpha + add;

    if (a == 0)
        alpha = 0;

    if (auto_state) {
        Render.StringCustom(w/2 - (w/2) / 210 * 20, h/2 - 9, 0, 'A', [ r, g, b, alpha ], font );
        Render.StringCustom(w/2 + (w/2) / 210 * 15, h/2 - 9, 0, 'B', [ r, g, b, alpha ], font );
        Render.StringCustom(w/2 - 9, h/2 + 52, 0, 'C', [ ri, gi, bi, ai ], font );

        return;
    }

    if(manual_state != 1)
        Render.StringCustom(w/2 - (w/2) / 210 * 20, h/2 - 9, 0, 'A', [ ri, gi, bi, ai ], font );

    if(manual_state != 2)
        Render.StringCustom(w/2 + (w/2) / 210 * 15, h/2 - 9, 0, 'B', [ ri, gi, bi, ai ], font );

    if(manual_state == 1 || manual_state == 2)
        Render.StringCustom(w/2 - 9, h/2 + 52, 0, 'C', [ ri, gi, bi, ai ], font );

    if(manual_state == 1)
        Render.StringCustom(w/2 - (w/2) / 210 * 20, h/2 - 9, 0, 'A', [ r, g, b, alpha ], font );

    if(manual_state == 2)
        Render.StringCustom(w/2 + (w/2) / 210 * 15, h/2 - 9, 0, 'B', [ r, g, b, alpha ], font );

    if(manual_state == 3 || manual_state == 0)
        Render.StringCustom(w/2 - 9, h/2 + 52, 0, 'C', [ r, g, b, alpha ], font );

}

function on_create_move() {
    if (!UiGet(enabled))
        return;

    const me = entity.get_local_player();

    if (!me || !entity.is_alive(me))
        return;

    const auto_state = UiGetHotkey(auto_hotkey);
    
    const auto_direction = ['Anti-Aim', 'Rage Anti-Aim', 'Auto direction'];
    const at_targets = ['Anti-Aim', 'Rage Anti-Aim', 'At targets'];
    const yaw = ['Anti-Aim', 'Rage Anti-Aim', 'Yaw offset'];

    if (auto_state) {
        UiSet(yaw, 0);
        UiSet(at_targets, true);
        UiSet(auto_direction, true);

        return;
    }

    UiSet(auto_direction, false);

    const manual_yaw = [
        [0],
        [-90],
        [90],
        [0]
    ];

    if(manual_state == 1 || manual_state == 2)
        UiSet(at_targets, false);
    else 
        UiSet(at_targets, true);

    UiSet(yaw, manual_yaw[manual_state]);
}

//#endregion

cheat.register_callback('paint', 'on_paint');
cheat.register_callback('create_move', 'on_create_move');
//#endregion