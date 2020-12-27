var context = require.context("../assets/Lanes", false, /\.png$/);

export default {
    Top: context('./Top.png'),
    Middle: context('./Middle.png'),
    Bottom: context('./Bottom.png'),
    Support: context('./Support.png'),
    Jungle: context('./Jungle.png')
}