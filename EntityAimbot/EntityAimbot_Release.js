//#region Dependencies
//#region UI library by April & Rory
const binlib = {};

function DictLength(dict)
{
    var count = 0;

    for(var i in dict)
        count++;

    return count;
}

function Get(elem)
{
    return UI.GetValue.apply(null, elem);
}

function GetColor(elem)
{
    return UI.GetColor.apply(null, elem);
}

function GetHotkey(elem)
{
    return UI.IsHotkeyActive.apply(null, elem);
}

function Set(elem, val)
{
    const safe_concat = function(a, b)
    {
        const arr = [];

        for (var i in a)
        {
            arr.push(a[i]);
        }

        arr.push(b);
        return arr;
    }

    UI.SetValue(null, safe_concat(elem, val));
}

function CreateDropdown(name, values, multi)
{
    UI[multi ? "AddMultiDropdown" : "AddDropdown"](name, values);
   
    binlib[name] = {"multi": multi, "values": {}};

    multi && values.reverse();

    var i = 0; for (value in values) {
        var index = multi ? (1 << (values.length-(i+1))) : i;
        binlib[name].values[index] = values[value];
        i++;
    }
}

function FetchDropdown(name)
{
    var selection = (name ? [] : {})
    var bin = UI.GetValue("Misc", name);

    !name && function() {for (dropdown in binlib) selection[dropdown] = fetchDropdown(dropdown) }();

    if (name) {
        !binlib[name].multi && bin == 0 && selection.push(binlib[name].values[0]) && function() { return selection; }();
        for (var i = DictLength(binlib[name].values)-1; i >= 0; i--) {
            if (!binlib[name].multi && i == 0) continue;

            var index = binlib[name].multi ? (1 << i) : i;
            if (bin-index >= 0) {
                bin -= (index);
                selection.push(binlib[name].values[index]);
            }
        }
    }

    return selection;
}
//#endregion
//#region Logging
const LOG_COLOR = {
    WHITE: '\x01',
    RED: '\x02',
    LIGHT_PURPLE: '\x03',
    GREEN: '\x04',
    LIGHT_GREEN: '\x05',
    LIME: '\x06',
    GRAY: '\x08',
    YELLOW: '\x09',
    LIGHT_BLUE: '\x0A',
    CYAN: '\x0B',
    BLUE: '\x0C',
    MAGENTA: '\x0D',
    PINK: '\x0E',
    LIGHT_RED: '\x0F',
    GOLD: '\x10',
};

const LogChat = Cheat.PrintChat;
const LogConsole =  Cheat.Print;

function Log(message, type)
{
    if (type == null)
        type = 1;

    switch(type)
    {
        case 1:
            LogChat(" " + LOG_COLOR.GRAY + "[" + LOG_COLOR.MAGENTA + "EntityAimbot.js" + LOG_COLOR.GRAY + "] " + message);
            return;
        case 2:
            LogConsole(message);
            return;
        case 3:
            LogChat(" " + LOG_COLOR.GRAY + "[" + LOG_COLOR.MAGENTA + "EntityAimbot.js" + LOG_COLOR.GRAY + "] " + message);
            LogConsole(message + "\n");
            return;
        default:
            return;
    }
        
}
//#endregion
//#endregion
//#region Helpers
function Rad2Deg(rad)
{
    return rad * 180 / Math.PI;
}

function GetObjectValues(obj)
{
    const values = [];

    for (var i in obj)
    {
        values.push(obj[i]);
    }

    return values;
}

function GetObjectKeyByValue(obj, value)
{
    for (var i in obj)
    {
        if (obj[i] == value)
            return i;
    }

    return;
}
//#endregion
//#region Variables & Constants
const TargetList = {
    36: "Chicken",
    49: "Drone",
    75: "Fish"
};
//#endregion
//#region Menu & References
const Master = UI.AddCheckbox("EntityAimbot");
const Aimkey = UI.AddHotkey("Aimbot hotkey");
const Targets = CreateDropdown("Targets", GetObjectValues(TargetList), true);
const Autofire = UI.AddCheckbox("Automatic fire")
const Silent = UI.AddCheckbox("Silent aimbot");

function HandleMenu()
{
    const State = Get(Master);

    UI.SetEnabled(("Script items", "Targets"), State);
    UI.SetEnabled(("Script items", "Automatic fire"), State);
    UI.SetEnabled(("Script items", "Aimbot hotkey"), State);
    UI.SetEnabled(("Script items", "Silent aimbot"), State);
} 
HandleMenu();
//#endregion
//#region Main
function CalculateAngles(from, to)
{
    const sub = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2]
    ];

    var Hyp = Math.sqrt((sub[0]*sub[0])+(sub[1]*sub[1]));
    var Pitch = Rad2Deg(Math.atan2(-sub[2], Hyp));
    var Yaw = Rad2Deg(Math.atan2(sub[1], sub[0]));

    return [Pitch, Yaw, 0];
}

function CalculateDistance(from, to)
{
    const sub = [
        to[0] - from[0],
        to[1] - from[1],
        to[2] - from[2]
    ];

    return Math.sqrt(sub[0]**2 + sub[1]**2 + sub[2]**2);
}

function GetClosestEntity(type)
{
    const LocalPlayer = Entity.GetLocalPlayer();

    var Target = null,
        MinimumDistance = 8192,
        Entities = Entity.GetEntitiesByClassID(type),
        LocalOrigin = Entity.GetRenderOrigin(LocalPlayer);
    
    for (var i in Entities)
    {
        
        var TargetOrigin = Entity.GetRenderOrigin(Entities[i]);
        var DistanceToEntity = CalculateDistance(LocalOrigin, TargetOrigin);
        var DistanceTrace = Trace.Line(LocalPlayer, LocalOrigin, TargetOrigin);

        if (DistanceToEntity < MinimumDistance && (DistanceTrace[1] < 1 & DistanceTrace[1] > 0.9))
        {
            MinimumDistance = DistanceToEntity;
            Target = DistanceTrace[0];
        }
    }

    return Target;
}
//#endregion
//#region Callbacks
function OnCreateMove()
{
    const LocalPlayer = Entity.GetLocalPlayer();
    const Buttons = UserCMD.GetButtons();

    if (!Get(Master) || !Entity.IsValid(LocalPlayer) || !Entity.IsAlive(LocalPlayer))
        return;

    var EntitiesToTarget = FetchDropdown("Targets");

    for (var i in EntitiesToTarget)
    {
        var ClassID = parseInt(GetObjectKeyByValue(TargetList, EntitiesToTarget[i]));    
        var EntityToTarget = GetClosestEntity(parseInt(ClassID));

        if (EntityToTarget)
        {
            var LocalOrigin = Entity.GetEyePosition(LocalPlayer);
            var EntityOrigin = Entity.GetRenderOrigin(EntityToTarget);
            var EntityPos = CalculateAngles(LocalOrigin, EntityOrigin);
           
            if (GetHotkey(Aimkey))
            {
                UserCMD.SetButtons(Buttons | Get(Autofire) ? (1 << 0) : Buttons)
                UserCMD.SetViewAngles(EntityPos, Get(Silent) ? true : false);
                
                if (!Entity.IsAlive(EntityToTarget) || !Entity.IsValid(EntityToTarget)) 
                    EntityToTarget = null;
            }
        }
    }
}

function OnDraw()
{
    HandleMenu();

    if (!Get(Master))
        return;
}
//#endregion
//#region Initialize
function Main()
{
    Cheat.RegisterCallback("CreateMove", "OnCreateMove");
    Cheat.RegisterCallback("Draw", "OnDraw");
}

Main();
//#endregion