//#region api
const global = [], globals = [], sound = [], cheat = [], local = [], world = [], input = [], render = [], ui = [], convar = [], event = [], entity = [], trace = [], usercmd = [], antiaim = [], exploit = [], ragebot = [], material = []; global.print = Global.Print, global.print_chat = Global.PrintChat, global.print_color = Global.PrintColor, global.register_callback = Global.RegisterCallback, global.execute_command = Global.ExecuteCommand, global.frame_stage = Global.FrameStage, global.tickcount = Global.Tickcount, global.tickrate = Global.Tickrate, global.tick_interval = Global.TickInterval, global.curtime = Global.Curtime, global.realtime = Global.Realtime, global.frametime = Global.Frametime, global.latency = Global.Latency, global.get_view_angles = Global.GetViewAngles, global.set_view_angles = Global.SetViewAngles, global.get_map_name = Global.GetMapName, global.is_key_pressed = Global.IsKeyPressed, global.get_screen_size = Global.GetScreenSize, global.get_cursor_position = Global.GetCursorPosition, global.play_sound = Global.PlaySound, global.play_microphone = Global.PlayMicrophone, global.stop_microphone = Global.StopMicrophone, global.get_username = Global.GetUsername, global.set_clan_tag = Global.SetClanTag, globals.tickcount = Globals.Tickcount, globals.tickrate = Globals.Tickrate, globals.tick_interval = Globals.TickInterval, globals.curtime = Globals.Curtime, globals.realtime = Globals.Realtime, globals.frametime = Globals.Frametime, sound.play = Sound.Play, sound.play_microphone = Sound.PlayMicrophone, sound.stop_microphone = Sound.StopMicrophone, cheat.get_username = Cheat.GetUsername, cheat.register_callback = function(c, f) { switch (c) { case 'create_move': Cheat.RegisterCallback("CreateMove", f); break; case 'paint': Cheat.RegisterCallback("Draw", f); break; case 'fsn': Cheat.RegisterCallback("FrameStageNotify", f); break; case 'shutdown': Cheat.RegisterCallback("Unload", f); break; default: Cheat.RegisterCallback(c, f); break; } }, cheat.execute_command = Cheat.ExecuteCommand, cheat.frame_stage = Cheat.FrameStage, cheat.print = Cheat.Print, cheat.print_chat = Cheat.PrintChat, cheat.print_color = Cheat.PrintColor, local.latency = Local.Latency, local.get_view_angles = Local.GetViewAngles, local.set_view_angles = Local.SetViewAngles, local.set_clan_tag = Local.SetClanTag, local.get_real_yaw = Local.GetRealYaw, local.get_fake_yaw = Local.GetFakeYaw, local.get_spread = Local.GetSpread, local.get_inaccuracy = Local.GetInaccuracy, world.get_map_name = World.GetMapName, world.get_server_string = World.GetServerString, input.get_cursor_position = Input.GetCursorPosition, input.is_key_pressed = Input.IsKeyPressed, render.string = Render.String, render.text_size = Render.TextSize, render.line = Render.Line, render.rect = Render.Rect, render.filled_rect = Render.FilledRect, render.gradient_rect = Render.GradientRect, render.circle = Render.Circle, render.filled_circle = Render.FilledCircle, render.polygon = Render.Polygon, render.world_to_screen = Render.WorldToScreen, render.add_font = Render.AddFont, render.find_font = Render.FindFont, render.string_custom = Render.StringCustom, render.textured_rect = Render.TexturedRect, render.add_texture = Render.AddTexture, render.text_size_custom = Render.TextSizeCustom, render.get_screen_size = Render.GetScreenSize, ui.get_value = UI.GetValue, ui.set_value = UI.SetValue, ui.add_checkbox = UI.AddCheckbox, ui.add_slider_int = UI.AddSliderInt, ui.add_slider_float = UI.AddSliderFloat, ui.add_hotkey = UI.AddHotkey, ui.add_label = UI.AddLabel, ui.add_dropdown = UI.AddDropdown, ui.add_multi_dropdown = UI.AddMultiDropdown, ui.add_color_picker = UI.AddColorPicker, ui.add_textbox = UI.AddTextbox, ui.set_enabled = UI.SetEnabled, ui.get_string = UI.GetString, ui.get_color = UI.GetColor, ui.set_color = UI.SetColor, ui.is_hotkey_active = UI.IsHotkeyActive, ui.toggle_hotkey = UI.ToggleHotkey, ui.is_menu_open = UI.IsMenuOpen, convar.get_int = Convar.GetInt, convar.set_int = Convar.SetInt, convar.get_float = Convar.GetFloat, convar.set_float = Convar.SetFloat, convar.get_string = Convar.GetString, convar.set_string = Convar.SetString, event.get_int = Event.GetInt, event.get_float = Event.GetFloat, event.get_string = Event.GetString, entity.get_entities = Entity.GetEntities, entity.get_entities_by_class_i_d = Entity.GetEntitiesByClassID, entity.get_players = Entity.GetPlayers, entity.get_enemies = Entity.GetEnemies, entity.get_teammates = Entity.GetTeammates, entity.get_local_player = Entity.GetLocalPlayer, entity.get_game_rules_proxy = Entity.GetGameRulesProxy, entity.get_entity_from_user_i_d = Entity.GetEntityFromUserID, entity.is_teammate = Entity.IsTeammate, entity.is_enemy = Entity.IsEnemy, entity.is_bot = Entity.IsBot, entity.is_local_player = Entity.IsLocalPlayer, entity.is_valid = Entity.IsValid, entity.is_alive = Entity.IsAlive, entity.is_dormant = Entity.IsDormant, entity.get_class_i_d = Entity.GetClassID, entity.get_class_name = Entity.GetClassName, entity.get_name = Entity.GetName, entity.get_weapon = Entity.GetWeapon, entity.get_weapons = Entity.GetWeapons, entity.get_render_origin = Entity.GetRenderOrigin, entity.get_render_box = Entity.GetRenderBox, entity.get_prop = Entity.GetProp, entity.set_prop = Entity.SetProp, entity.get_hitbox_position = Entity.GetHitboxPosition, entity.get_eye_position = Entity.GetEyePosition, trace.line = Trace.Line, trace.bullet = Trace.Bullet, usercmd.set_movement = UserCMD.SetMovement, usercmd.get_movement = UserCMD.GetMovement, usercmd.set_angles = UserCMD.SetAngles, usercmd.force_jump = UserCMD.ForceJump, usercmd.force_crouch = UserCMD.ForceCrouch, antiaim.get_override = AntiAim.GetOverride, antiaim.set_override = AntiAim.SetOverride, antiaim.set_real_offset = AntiAim.SetRealOffset, antiaim.set_fake_offset = AntiAim.SetFakeOffset, antiaim.set_l_b_y_offset = AntiAim.SetLBYOffset, exploit.get_charge = Exploit.GetCharge, exploit.recharge = Exploit.Recharge, exploit.disable_recharge = Exploit.DisableRecharge, exploit.enable_recharge = Exploit.EnableRecharge, ragebot.get_target = Ragebot.GetTarget, ragebot.ignore_target = Ragebot.IgnoreTarget, ragebot.force_target = Ragebot.ForceTarget, ragebot.force_target_safety = Ragebot.ForceTargetSafety, ragebot.force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot.force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot.force_hitbox_safety = Ragebot.ForceHitboxSafety, material.create = Material.Create, material.destroy = Material.Destroy, material.get = Material.Get, material.set_key_value = Material.SetKeyValue, material.refresh = Material.Refresh
//#endregion

//#region betterui.js
/**
 * @title BetterUI
 * @version 2.1.0
 * @description A better UI system for Onetap
 */

var menu = {};
const menu_spacer = "                                                                                  ";

/**
 * Concats two elements into an array without increasing the array length.
 * Prevents the memory leak in 2.0.0 from happening
 *
 * @param a {array}
 * @param b {any}
 */
menu.concat = function(a, b)
{
    // Creates a new array.
    var arr = [];

    // Push all items from the array 'a' into our array.
    for (var c in a)
    {
        arr.push(a[c]);
    }

    // Push the value 'b' into our array.
    arr.push(b);

    // Return the new array.
    return arr;
}

/**
 * Creates a new menu label
 *
 * @param label {string}
 */
menu.label = function(label)
{
    // Creates the label
    UI.AddLabel(label);
};

/**
 * Creates a new menu element
 *
 * @param func {function}
 * @param name {string}
 * @param label {string},
 * @param properties {array}
 */
menu.new = function(func, name, label, properties)
{
    // Get properties
    const final_name = name + menu_spacer + label;
    var final_props = [final_name];
    const element_info_t = {
        path: ["Misc", "JAVASCRIPT", "Script items", final_name]
    };

    // If our properties aren't null, then pack them together.
    if (properties != null)
    {
        for (var i = 0; i < properties.length; i++)
        {
            final_props.push(properties[i]);
        }
    }

    // Create our menu element and return properties
    func.apply(null, final_props);
    return element_info_t;
};

/**
 * Creates a new menu reference
 *
 * @param path {array}
 */
menu.reference = function(path)
{
    return {
        path: path
    };
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get = function(elem)
{
    // If the element doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetValue.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_hotkey = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.IsHotkeyActive.apply(null, elem.path);
};

/**
 * Gets the value of a menu element
 *
 * @param elem {array}
 * @return {*}
 */
menu.get_color = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Returns the element's value
    return UI.GetColor.apply(null, elem.path);
};

/**
 * Sets the value of a menu element
 *
 * @param elem {array}
 * @param value {*}
 */
menu.set = function(elem, value)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetValue.apply(null, this.concat(properties.path, value));
};

/**
 * Sets the value of a color picker
 *
 * @param elem {array}
 * @param color {array|Color}
 */
menu.set_color = function(elem, color)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Set the element's value
    UI.SetColor.apply(null, this.concat(properties.path, color));
};

/**
 * Toggles a hotkey
 *
 * @param elem {array}
 */
menu.toggle = function(elem)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Set the element's value
    UI.ToggleHotkey.apply(null, elem.path);
};

/**
 * Changes the visibility of a menu elements
 *
 * @param elem {array}
 * @param visible {boolean}
 */
menu.visibility = function(elem, visible)
{
    // If the label doesn't exist
    if (!(elem.path))
        throw new Error("[Menu] This element doesn't exist!");

    // Get properties
    const properties = elem;

    // Change the element's visibility
    UI.SetEnabled.apply(null, this.concat(properties.path, visible));
};
//#endregion

const enabled = menu.new(ui.add_checkbox, "Enable manual", "enabled", []);

const inactive_color = menu.new(ui.add_color_picker, "Inactive color", "inactive_color", []);
const active_color = menu.new(ui.add_color_picker, "Active color", "active_color", []);

const left_hotkey = menu.new(ui.add_hotkey, "Left hotkey", "manual_left", []);
const right_hotkey = menu.new(ui.add_hotkey, "Right hotkey", "manual_right", []);
const back_hotkey = menu.new(ui.add_hotkey, "Back hotkey", "manual_back", []);

const indicators = menu.new(ui.add_checkbox, "Draw indicators", "indicators", []);

const manual_state = menu.new(ui.add_slider_int, "Manual state", "manual_state", [0, 3, 0]);

//#region functions

var bind_system = {
    left: false,
    right: false,
    back: false
};

bind_system.handle_visibility = function()
{
    const script_state = !menu.get(enabled)

    menu.visibility(inactive_color, !script_state);
    menu.visibility(active_color, !script_state);
    menu.visibility(left_hotkey, !script_state);
    menu.visibility(right_hotkey, !script_state);
    menu.visibility(back_hotkey, !script_state);
    menu.visibility(indicators, !script_state);

    menu.visibility(manual_state, false);
}

bind_system.handle_visibility();

bind_system.update = function()
{
    const m_state = menu.get(manual_state);

    const left_state = menu.get_hotkey(left_hotkey);
    const right_state = menu.get_hotkey(right_hotkey);
    const back_state = menu.get_hotkey(back_hotkey);

    if(left_state == this.left && right_state == this.right && back_state == this.back)
        return;

    this.left = left_state, this.right = right_state, this.back == back_state;

    if(left_state && m_state == 1 || right_state && m_state == 2 || back_state && m_state == 3)
    {
        menu.set(manual_state, 0);
        return;
    }

    if(left_state && m_state != 1) 
        menu.set(manual_state, 1);

    if(right_state && m_state != 2) 
        menu.set(manual_state, 2);
    
    if(back_state && m_state != 3) 
        menu.set(manual_state, 3);
}

//#endregion

//#region callbacks

/**
 * Paint event.
 * 
 * @callback Draw
 */
function on_paint()
{
    bind_system.handle_visibility();

    if(!menu.get(enabled))
        return;

    const me = entity.get_local_player()

    if (!me || !entity.is_alive(me))
        return;

    bind_system.update();

    if(!menu.get(indicators))
        return;

    const w = render.get_screen_size()[0], h = render.get_screen_size()[1];
    const ri = menu.get_color(inactive_color)[0], gi = menu.get_color(inactive_color)[1], bi = menu.get_color(inactive_color)[2], ai = menu.get_color(inactive_color)[3];
    const r = menu.get_color(active_color)[0], g = menu.get_color(active_color)[1], b = menu.get_color(active_color)[2], a = menu.get_color(active_color)[3];

    const m_state = menu.get(manual_state);
    const font = Render.AddFont("Arrows", 14, 400);

    if(m_state != 1)
        Render.StringCustom(w/2 - (w/2) / 210 * 20, h/2 - 9, 0, "A", [ ri, gi, bi, ai ], font );

    if(m_state != 2)
        Render.StringCustom(w/2 + (w/2) / 210 * 15, h/2 - 9, 0, "B", [ ri, gi, bi, ai ], font );

    if(m_state == 1 || m_state == 2)
        Render.StringCustom(w/2 - 9, h/2 + 52, 0, "C", [ ri, gi, bi, ai ], font );

    if(m_state == 1)
        Render.StringCustom(w/2 - (w/2) / 210 * 20, h/2 - 9, 0, "A", [ r, g, b, a ], font );

    if(m_state == 2)
        Render.StringCustom(w/2 + (w/2) / 210 * 15, h/2 - 9, 0, "B", [ r, g, b, a ], font );

    if(m_state == 3 || m_state == 0)
        Render.StringCustom(w/2 - 9, h/2 + 52, 0, "C", [ r, g, b, a ], font );
}

/**
 * Handles the yaw direction.
 * 
 * @callback CreateMove
 */
function on_create_move()
{
    const me = entity.get_local_player()

    if (!me || !entity.is_alive(me))
        return;

    const direction = menu.get(manual_state)
    const manual_yaw = [
        [0],
        [-90],
        [90],
        [0]
    ];

    const at_targets = menu.reference(["Anti-Aim", "Rage Anti-Aim", "At targets"]);

    if(direction == 1 || direction == 2)
        menu.set(at_targets, false);
    else
        menu.set(at_targets, true);

    const yaw = menu.reference(["Anti-Aim", "Rage Anti-Aim", "Yaw offset"]);
    menu.set(yaw, manual_yaw[direction]);
}

cheat.register_callback("paint", "on_paint");
cheat.register_callback("create_move", "on_create_move");
//#endregion