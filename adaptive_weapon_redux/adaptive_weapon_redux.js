//region helpers

function GetObjectKeys(obj)
{
    const arr = [];
    for (var i in obj)
    {
        if (obj.hasOwnProperty(i))
            arr.push(i);
    }
    return arr;
}
//endregion

//region weapons

const WeaponGroups = {
    "Autosnipers":      [ "scar 20", "g3sg1" ],
    "Heavy pistols":    [ "desert eagle", "r8 revolver" ],
    "Pistols":          [ "usp s", "tec 9", "glock 18", "cz75 auto", "five seven", "p250", "p2000", "dual berettas" ],
    "AWP":              [ "awp" ],
    "Scout":            [ "ssg 08" ],
    "Rifles":           [ "galil ar", "ak 47", "m4a4", "m4a1 s", "sg 553", "famas", "aug" ],
    "Shotguns":         [ "nova", "xm1014", "sawed off", "mag 7" ],
    "SMGs":             [ "mac 10", "mp9", "mp7", "ump 45", "pp bizon", "p90" ],
    "Heavy":            [ "m249", "negev" ],
    "Other":            []
};

const WeaponData = [];
const Hitboxes = [ "Head", "Upper chest", "Chest", "Lower chest", "Stomach", "Pelvis", "Legs", "Feet" ];
const Autostops = [ "Duck", "Early", "On center only", "Lethal only", "Visible only", "In air", "Between shots", "Force accuracy" ];
const AdaptivePath = [ "Rage", "Adaptive weapons", "Adaptive weapons" ];

const Paths = {
    "Damage":       ["Rage", "Target", "General", "Minimum damage"],
    "Hitboxes":     ["Rage", "Target", "General", "Hitboxes"],
    "Multipoint":   ["Rage", "Target", "General", "Multipoint hitboxes"],
    "Head":         ["Rage", "Target", "General", "Head pointscale"],
    "Body":         ["Rage", "Target", "General", "Body pointscale"],

    "Hitchance":    ["Rage", "Accuracy", "General", "Hitchance"],
    "Scope":        ["Rage", "Accuracy", "General", "Auto scope"],
    "Stop":         ["Rage", "Accuracy", "General", "Auto stop"],
    "Mode":         ["Rage", "Accuracy", "General", "Auto stop mode"],
    "Safe":         ["Rage", "Accuracy", "General", "Prefer safe point"],
    "Baim":         ["Rage", "Accuracy", "General", "Prefer body aim"]
};
//endregion

//region vars

var ActiveSelection;
var ActiveWeaponGroup;
var font;

var Exceptions = [ "knife", "zeus x27", "high explosive grenade", "smoke grenade", "flashbang", "decoy grenade", "molotov", "c4", "incendiary" ];
//endregion

//region interface

function HandleVisibility()
{
    ActiveSelection = UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "Weapon groups"]);
    const keys = GetObjectKeys(WeaponGroups);

    ActiveWeaponGroup = keys[ActiveSelection];

    for (var i in keys)
    {
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Enabled"], i == ActiveSelection ? 1 : 0);

        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Minimum damage"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Minimum damage override"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Hitboxes"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Multipoint hitboxes"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Head pointscale"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Body pointscale"], i == ActiveSelection ? 1 : 0);

        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Hitchance"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Auto scope"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Auto stop"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Auto stop mode"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Prefer safe point"], i == ActiveSelection ? 1 : 0);
        UI.SetEnabled(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + keys[i] + "] Prefer body aim"], i == ActiveSelection ? 1 : 0);
    }
}

function SetupUI()
{
    UI.AddSubTab(["Rage", "SUBTAB_MGR"], "Adaptive weapons");

    const keys = GetObjectKeys(WeaponGroups);
    UI.AddHotkey(["Config", "Scripts", "JS Keybinds"], "Damage override key", "Damage override");
    UI.AddDropdown(["Rage", "Adaptive weapons", "Adaptive weapons"], "Weapon groups", keys, 1);

    for (var i in keys)
    {
        UI.AddCheckbox(AdaptivePath, "[" +  keys[i] + "] Enabled");

        UI.AddSliderInt(AdaptivePath, "[" + keys[i] + "] Minimum damage", 0, 130);
        UI.AddSliderInt(AdaptivePath, "[" + keys[i] + "] Minimum damage override", 0, 130);
        UI.AddMultiDropdown(AdaptivePath, "[" + keys[i] + "] Hitboxes", Hitboxes);
        UI.AddMultiDropdown(AdaptivePath, "[" + keys[i] + "] Multipoint hitboxes", Hitboxes);
        UI.AddSliderInt(AdaptivePath, "[" + keys[i] + "] Head pointscale", 0, 100);
        UI.AddSliderInt(AdaptivePath, "[" + keys[i] + "] Body pointscale", 0, 100);

        UI.AddSliderInt(AdaptivePath, "[" + keys[i] + "] Hitchance", 0, 100);
        UI.AddCheckbox(AdaptivePath, "[" + keys[i] + "] Auto scope");
        UI.AddCheckbox(AdaptivePath, "[" + keys[i] + "] Auto stop");
        UI.AddMultiDropdown(AdaptivePath, "[" + keys[i] + "] Auto stop mode", Autostops);
        UI.AddCheckbox(AdaptivePath, "[" + keys[i] + "] Prefer safe point");
        UI.AddCheckbox(AdaptivePath, "[" + keys[i] + "] Prefer body aim");
    }

    HandleVisibility();
}
//endregion

//region utility

function GetPlayerWeaponGroup()
{
    const me = Entity.GetLocalPlayer(); 
    const wpn = Entity.GetWeapon(me);
    const wpnName = Entity.GetName(wpn);

    for (var i in WeaponGroups)
    {
        for (var j in WeaponGroups[i])
        {
            if (WeaponGroups[i][j] == wpnName)
            {
                return i;
            }
        }
    } 
}

function SetGeneralConfig()
{
    const me = Entity.GetLocalPlayer(); 
    const wpn = Entity.GetWeapon(me);
    const wpnName = Entity.GetName(wpn);

    for (var i in Exceptions)
    {
        if (Exceptions[i] == wpnName)
            return;
    }

    if (UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Enabled"]) == 0)
        ActiveWeaponGroup = "Other";

    if (UI.GetValue(["Config", "Scripts", "JS Keybinds", "Damage override key"]) == 1)
        UI.SetValue(Paths.Damage, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Minimum damage override"]));
    else
        UI.SetValue(Paths.Damage, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Minimum damage"]));

    UI.SetValue(Paths.Hitboxes, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Hitboxes"]));
    UI.SetValue(Paths.Multipoint, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Multipoint hitboxes"]));
    UI.SetValue(Paths.Head, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Head pointscale"]));
    UI.SetValue(Paths.Body, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Body pointscale"]));

    UI.SetValue(Paths.Hitchance, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Hitchance"]));
    UI.SetValue(Paths.Scope, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Auto scope"]));
    UI.SetValue(Paths.Stop, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Auto stop"]));
    UI.SetValue(Paths.Mode, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Auto stop mode"]));
    UI.SetValue(Paths.Safe, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Prefer safe point"]));
    UI.SetValue(Paths.Baim, UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Prefer body aim"]));
}
//endregion

//region callbacks

function DrawHandler()
{
    if (font == null)
        font = Render.AddFont("Arial.ttf", 12, 800)

    if (UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "Weapon groups"]) != ActiveSelection) 
        HandleVisibility();

    const me = Entity.GetLocalPlayer();

    if (!Entity.IsValid(me) || !Entity.IsAlive(me))
        return;

    const Size = Render.GetScreenSize();

    if (UI.GetValue(["Rage", "Adaptive weapons", "Adaptive weapons", "[" + ActiveWeaponGroup + "] Enabled"]) != 0)
    {
        if (UI.GetValue(["Config", "Scripts", "JS Keybinds", "Damage override key"]) == 1)
        {
            Render.String(Size[0]/2 + 20, Size[1]/2 + 5, 1, "DMG", [255, 255, 255, 255], font);
        }
    }   
}

function CommandHandler()
{  
    const me = Entity.GetLocalPlayer();

    if (!Entity.IsValid(me) || !Entity.IsAlive(me))
        return;

    const WeaponGroup = GetPlayerWeaponGroup();

    ActiveWeaponGroup = WeaponGroup;

    if (ActiveWeaponGroup == null)
        ActiveWeaponGroup = "Other";

    SetGeneralConfig();
}
//endregion

//region init

function Initialize()
{
    SetupUI();

    Cheat.RegisterCallback("Draw", "DrawHandler");
    Cheat.RegisterCallback("CreateMove", "CommandHandler");
}

Initialize();
//endregion