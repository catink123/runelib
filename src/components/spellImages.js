var context = require.context("../assets/Spells", false, /\.png$/);

export default {
    Barrier: context('./Barrier.png'),
    Clarity: context('./Clarity.png'),
    Cleanse: context('./Cleanse.png'),
    Dash: context('./Dash.png'),
    Exhaust: context('./Exhaust.png'),
    Flash: context('./Flash.png'),
    Ghost: context('./Ghost.png'),
    Heal: context('./Heal.png'),
    Ignite: context('./Ignite.png'),
    Mark: context('./Mark.png'),
    Smite: context('./Smite.png'),
    Teleport: context('./Teleport.png')
}