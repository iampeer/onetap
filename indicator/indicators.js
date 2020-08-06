//#region API
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh

//#endregion

//#region UI
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

//#region SCRIPT
///CONTROLS
const enabled = ui.add_checkbox('Enable indicators');
const active_color = ui.add_color_picker('Active indicator color');
const y_offset_slider = ui.add_slider_int('Indicator y-offset', 0, 120, 84);
const using_dmg = ui.add_checkbox('Using damage script');

///REFERENCE
const ref_resolver = ['Rage', 'GENERAL', 'General', 'Resolver override'];
const ref_forcebaim = ['Rage', 'GENERAL', 'General', 'Force body aim'];
const ref_forcesafe = ['Rage', 'GENERAL', 'General', 'Force safe point'];
const ref_doubletap = ['Rage', 'GENERAL', 'Exploits', 'Doubletap'];
const ref_hideshots = ['Rage', 'GENERAL', 'Exploits', 'Hide shots'];
const ref_fakeduck = ['Anti-Aim', 'Extra', 'Fake duck'];
const ref_damage = ['Misc', 'JAVASCRIPT', 'Script items', 'Override damage hotkey'] || null;
const ref_minimum_damage = ['Rage', ''];
const ref_auto_scope = ['Rage', 'GENERAL', 'General', 'Auto scope'];

///VARS
var script = {
    dist: 9
};

//#region VISIBILITY
script.handle_visibility = function() {
    const script_state = UiGet(enabled);

    ui.set_enabled(('Script items', 'Active indicator color'), script_state);
    ui.set_enabled(('Script items', 'Indicator y-offset'), script_state);
    ui.set_enabled(('Script items', 'Using damage script'), script_state);
}
script.handle_visibility();

//#endregion

//#region FUNCTIONALITY
function get_weapon_name() {
    const name = entity.get_name(entity.get_weapon(entity.get_local_player()))

    if (name == 'r8 revolver' || name == 'desert eagle') {
        return 'HEAVY PISTOL';
    } else if (name == 'scar 20' || name == 'g3sg1') {
        return 'AUTOSNIPER';
    } else if (name == 'ssg 08') {
        return 'SCOUT';
    } else if (name == 'awp') {
        return 'AWP';
    } else if (name == 'usp s' || name == 'cz75 auto' || name ==  'dual berettas' || name ==  'dual berettas' || name ==  'five seven' || name ==  'glock 18' || name ==  'p200' || name ==  'p250' || name ==  'tec 9') {
        return 'PISTOL';
    } else {
        return 'GENERAL';
    }
}

function get_current_damage() {
    return UiGet(['Rage', get_weapon_name(), 'Targeting', 'Minimum damage'])
}

//#endregion

//#region EVENTS
function on_paint() {
    script.handle_visibility();

    if (!UiGet(enabled))
        return;

    const me = entity.get_local_player();

    if (!me || !entity.is_alive(me))
        return;

    var screen_size = render.get_screen_size();
    var y_offset = UiGet(y_offset_slider);

    const safe = UiGetHotkey(ref_forcesafe);
    const baim = UiGetHotkey(ref_forcebaim);
    const res = UiGetHotkey(ref_resolver);
    const duck = UiGetHotkey(ref_fakeduck);
    const dt = UiGet(ref_doubletap) && UiGetHotkey(ref_doubletap);
    const os = UiGet(ref_hideshots) && UiGetHotkey(ref_hideshots);

    if (UiGet(using_dmg))
        const dmg = UiGetHotkey(ref_damage);

    const r = UiGetColor(active_color)[0], g = UiGetColor(active_color)[1], b = UiGetColor(active_color)[2], a = UiGetColor(active_color)[3];

    if (dt) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'DOUBLE TAP', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'DOUBLE TAP', [ r, g, b, a ], 3);
    } 

    if (os) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'HIDE SHOTS', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'HIDE SHOTS', [ r, g, b, a ], 3);
    } 
        
    if (UiGet(using_dmg) && dmg) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'DAMAGE', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'DAMAGE', [ r, g, b, a ], 3);
    } 
        
    if (safe) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'SAFE POINT', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'SAFE POINT', [ r, g, b, a ], 3);
    } 
        
    if (baim) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'BODY AIM', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'BODY AIM', [ r, g, b, a ], 3);
    }

    if (duck) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'FAKE DUCK', [ 0, 0, 0, a ],3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'FAKE DUCK', [ r, g, b, a ],3);
    } 

    if (res) {
        y_offset = y_offset + script.dist;
        Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'RESOLVER', [ 0, 0, 0, a ], 3);
        Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'RESOLVER', [ r, g, b, a ], 3);
    }

    Render.String(screen_size[0] - screen_size[0] + 16, screen_size[1] / 2 + 121, 0, 'DMG ' + get_current_damage(), [ 0, 0, 0, 255 ] , 4);
    Render.String(screen_size[0] - screen_size[0] + 15, screen_size[1] / 2 + 120, 0, 'DMG ' + get_current_damage(), [ 255, 255, 255, 255 ] , 4);

    if (!UiGet(ref_auto_scope)) {
        Render.String(screen_size[0] - screen_size[0] + 16, screen_size[1] / 2 + 151, 0, 'NOSCOPE', [ 0, 0, 0, 255 ] , 4);
        Render.String(screen_size[0] - screen_size[0] + 15, screen_size[1] / 2 + 150, 0, 'NOSCOPE', [ 255, 255, 255, 255 ] , 4);
    
        //y_offset = y_offset + script.dist;
        //Render.String(screen_size[0] /2 + 2, screen_size[1] /2 + y_offset + 1, 0, 'NOSCOPE', [ 0, 0, 0, a ], 3);
        //Render.String(screen_size[0] /2 + 1, screen_size[1] /2 + y_offset, 0, 'NOSCOPE', [ r, g, b, a ], 3);

    }
}

//#endregion

cheat.register_callback('paint', 'on_paint');
//#endregion