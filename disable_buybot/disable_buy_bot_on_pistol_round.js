//menu
const enabled = UI.AddCheckbox("Disable buy bot")
const max_money = UI.AddSliderInt("Trigger amount", 0, 16000)

function handle_menu() {
    var script_state = UI.GetValue("Script items", "Disable buy bot")

    UI.SetEnabled(("Script items", "Trigger amount"), script_state)
}
handle_menu()

//callbacks
function paint_handler() {
    var buybot_ref = ("Misc", "GENERAL", "Buybot", "Enable")
    var script_state = UI.GetValue("Script items", "Disable buy bot")
    var trigger_amount = UI.GetValue("Script items", "Trigger amount")
    
    if (!script_state)
        return

    const lp = Entity.GetLocalPlayer()

    if (!lp || !Entity.IsAlive(lp))
        return

    handle_menu()

    var lp_money = Entity.GetProp(lp, "CCSPlayer", "m_iAccount")

    if (lp_money <= trigger_amount) 
        UI.SetValue(buybot_ref, false)
    else
        UI.SetValue(buybot_ref, true)
}

//initialization
UI.SetValue(("Script items", "Trigger amount"), 1000)

Cheat.RegisterCallback("Draw", "paint_handler")