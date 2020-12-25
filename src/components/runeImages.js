var preContext = require.context('../assets/SubIcons/Precision/', false, /\.png$/);
var domContext = require.context('../assets/SubIcons/Domination/', false, /\.png$/);
var sorContext = require.context('../assets/SubIcons/Sorcery/', false, /\.png$/);
var resContext = require.context('../assets/SubIcons/Resolve/', false, /\.png$/);
var insContext = require.context('../assets/SubIcons/Inspiration/', false, /\.png$/);

var statContext = require.context('../assets/StatMods', false, /\.png$/);

export default {
    Precision: {
        Precision: require.context('../assets/', false, /\.png$/)("./Precision.png"),
        PressTheAttack: preContext('./PressTheAttack.png'),
        Conqueror: preContext('./Conqueror.png'),
        CoupDeGrace: preContext('./CoupDeGrace.png'),
        CutDown: preContext('./CutDown.png'),
        FleetFootwork: preContext('./FleetFootwork.png'),
        LastStand: preContext('./LastStand.png'),
        LegendAlacrity: preContext('./LegendAlacrity.png'),
        LegendBloodline: preContext('./LegendBloodline.png'),
        LegendTenacity: preContext('./LegendTenacity.png'),
        LethalTempo: preContext('./LethalTempo.png'),
        Overheal: preContext('./Overheal.png'),
        PresenceOfMind: preContext('./PresenceOfMind.png'),
        Triumph: preContext('./Triumph.png')
    },
    Domination: {
        Domination: require.context('../assets/', false, /\.png$/)("./Domination.png"),
        CheapShot: domContext('./CheapShot.png'),
        DarkHarvest: domContext('./DarkHarvest.png'),
        Electrocute: domContext('./Electrocute.png'),
        EyeballCollection: domContext('./EyeballCollection.png'),
        GhostPoro: domContext('./GhostPoro.png'),
        HailOfBlades: domContext('./HailOfBlades.png'),
        IngeniousHunter: domContext('./IngeniousHunter.png'),
        Predator: domContext('./Predator.png'),
        RavenousHunter: domContext('./RavenousHunter.png'),
        RelentlessHunter: domContext('./RelentlessHunter.png'),
        SuddenImpact: domContext('./SuddenImpact.png'),
        TasteOfBlood: domContext('./TasteOfBlood.png'),
        UltimateHunter: domContext('./UltimateHunter.png'),
        ZombieWard: domContext('./ZombieWard.png')
    },
    Sorcery: {
        Sorcery: require.context('../assets/', false, /\.png$/)("./Sorcery.png"),
        AbsoluteFocus: sorContext('./AbsoluteFocus.png'),
        ArcaneComet: sorContext('./ArcaneComet.png'),
        Celerity: sorContext('./Celerity.png'),
        GatheringStorm: sorContext('./GatheringStorm.png'),
        ManaflowBand: sorContext('./ManaflowBand.png'),
        NimbusCloak: sorContext('./NimbusCloak.png'),
        NullifyingOrb: sorContext('./NullifyingOrb.png'),
        PhaseRush: sorContext('./PhaseRush.png'),
        Scorch: sorContext('./Scorch.png'),
        SummonAery: sorContext('./SummonAery.png'),
        TheUltimateHat: sorContext('./TheUltimateHat.png'),
        Transcendence: sorContext('./Transcendence.png'),
        Waterwalking: sorContext('./Waterwalking.png')
    },
    Resolve: {
        Resolve: require.context('../assets/', false, /\.png$/)("./Resolve.png"),
        BonePlating: resContext('./BonePlating.png'),
        Chrysalis: resContext('./Chrysalis.png'),
        Conditioning: resContext('./Conditioning.png'),
        Demolish: resContext('./Demolish.png'),
        FontOfLife: resContext('./FontOfLife.png'),
        GraspOfTheUndying: resContext('./GraspOfTheUndying.png'),
        Guardian: resContext('./Guardian.png'),
        IronSkin: resContext('./IronSkin.png'),
        ShieldBash: resContext('./ShieldBash.png'),
        Overgrowth: resContext('./Overgrowth.png'),
        Revitalize: resContext('./Revitalize.png'),
        SecondWind: resContext('./SecondWind.png'),
        Unflinching: resContext('./Unflinching.png'),
        Aftershock: resContext('./Aftershock.png')
    },
    Inspiration: {
        Inspiration: require.context('../assets/', false, /\.png$/)("./Inspiration.png"),
        ApproachVelocity: insContext('./ApproachVelocity.png'),
        BiscuitDelivery: insContext('./BiscuitDelivery.png'),
        CelestialBody: insContext('./CelestialBody.png'),
        CosmicInsight: insContext('./CosmicInsight.png'),
        FuturesMarket: insContext('./FuturesMarket.png'),
        GlacialAugment: insContext('./GlacialAugment.png'),
        HextechFlashtraption: insContext('./HextechFlashtraption.png'),
        Kleptomancy: insContext('./Kleptomancy.png'),
        MagicalFootwear: insContext('./MagicalFootwear.png'),
        MinionDematerializer: insContext('./MinionDematerializer.png'),
        PerfectTiming: insContext('./PerfectTiming.png'),
        PrototypeOmnistone: insContext('./PrototypeOmnistone.png'),
        TimeWarpTonic: insContext('./TimeWarpTonic.png'),
        UnsealedSpellbook: insContext('./UnsealedSpellbook.png')
    },
    StatMods: {
        AdaptiveForceIcon: statContext('./AdaptiveForceIcon.png'),
        ArmorIcon: statContext('./ArmorIcon.png'),
        AttackSpeedIcon: statContext('./AttackSpeedIcon.png'),
        CDRScalingIcon: statContext('./CDRScalingIcon.png'),
        HealthScalingIcon: statContext('./HealthScalingIcon.png'),
        MagicResIcon: statContext('./MagicResIcon.png')
    },
    
}