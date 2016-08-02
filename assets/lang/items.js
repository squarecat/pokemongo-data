export default {
  "ITEM_INFORMATION": {
    "INCUBATOR_DISTANCE": {
      "name": {
        "en": "distance"
      }
    },
    "INCREASE_ITEM_STORAGE": {
      "name": {
        "en": "increase item storage"
      }
    },
    "INCREASE_POKEMON_STORAGE": {
      "name": {
        "en": "increase pokémon storage"
      }
    }
  },
  "CATEGORIES": {
    "ITEM_CATEGORY_POWER_MANAGEMENT": {
      "name": {
        "en": "power management"
      },
      "order": 3
    },
    "ITEM_CATEGORY_UTILITIES": {
      "name": {
        "en": "utilities"
      },
      "order": 7
    },
    "ITEM_CATEGORY_FOOD": {
      "name": {
        "en": "food"
      },
      "order": 2
    },
    "ITEM_CATEGORY_POKEBALL": {
      "name": {
        "en": "poké ball"
      },
      "order": 1
    },
    "ITEM_CATEGORY_MEDICINE": {
      "name": {
        "en": "medicine"
      },
      "order": 4
    },
    "ITEM_CATEGORY_INCENSE": {
      "name": {
        "en": "incense"
      },
      "order": 5
    },
    "ITEM_CATEGORY_INCUBATOR": {
      "name": {
        "en": "incubator"
      },
      "order": 6
    },
    "ITEM_CATEGORY_INVENTORY_UPGRADE": {
      "name": {
        "en": "inventory upgrade"
      },
      "order": 8
    },
    "ITEM_CATEGORY_XP_BOOST": {
      "name": {
        "en": "xp boost"
      },
      "order": 9
    },
    "ITEM_CATEGORY_CAMERA": {
      "name": {
        "en": "camera"
      },
      "order": 10
    },
    "ITEM_CATEGORY_DISK": {
      "name": {
        "en": "disk"
      },
      "order": 12
    },
    "ITEM_CATEGORY_BOOST": {
      "name": {
        "en": "disk"
      },
      "order": 11
    }
  },
  "PAGE_DESCRIPTION": {
    "en": ""
  },
  "LOCATIONS": {
    "UNKNOWN": "This item has not yet been discovered",
    "POKESTOP": "PokéStops",
    "SHOP": "Shop"
  },
  "ITEM_HYPER_POTION": {
    "name": {
      "en": "hyper potion"
    },
    "description": {
      "en": (info) => `Heals Pokémon by ${info.sta_amount} HP.`
    }
  },
  // CAMERA
  "ITEM_SPECIAL_CAMERA": {
    "name": {
      "en": "special camera",
      "it": "fotocamera"
    },
    "description": {
      "en": "Used within battle to take pictures of wild Pokémon."
    }
  },
  // DISKS
  "ITEM_TROY_DISK": {
    "name": {
      "en": "troy disk"
    },
    "description": {
      "en": "Not yet discovered and not seen in any other existing Pokémon game."
    }
  },
  "ITEM_X_ATTACK": {
    "name": {
      "en": "x attack",
      "it": "attacco x"
    },
    "description": {
      "en": "Not yet discovered. As in other Pokémon games, we expect this to be used in battle to increase the attack stat of a single Pokémon."
    }
  },
  "ITEM_X_DEFENSE": {
    "name": {
      "en": "x defense",
      "it": "difesa x"
    },
    "description": {
      "en": "Not yet discovered. As in other Pokémon games, we expect this to be used in battle to increase the defense stat of a single Pokémon."
    }
  },
  "ITEM_X_MIRACLE": {
    "name": {
      "en": "x miracle",
      "it": "miracolo x"
    },
    "description": {
      "en": "Not yet discovered and not seen in any other existing Pokémon game. We expect that this will be used in battle to increase the Stamina stat of a single Pokémon."
    }
  },
  // FOOD
  "ITEM_RAZZ_BERRY": {
    "name": {
      "en": "razz berry"
    },
    "description": {
      "en": "Makes it so the next Poké Ball has a higher rate of capture."
    },
    order: 1
  },
  "ITEM_BLUK_BERRY": {
    "name": {
      "en": "bluk berry"
    },
    "description": {
      "en": "Use unknown. Traditionally a rare berry used in Poffin creation. We expect that this item will become available at a certain level and will make it easier to catch Pokémon."
    },
    order: 2
  },
  "ITEM_NANAB_BERRY": {
    "name": {
      "en": "nanab berry"
    },
    "description": {
      "en": "Use unknown. Traditionally a rare berry used in Poffin creation. We expect that this item will become available at a certain level and will make it easier to catch Pokémon."
    },
    order: 3
  },
  "ITEM_PINAP_BERRY": {
    "name": {
      "en": "pinap berry"
    },
    "description": {
      "en": "Use unknown. Traditionally a rare berry used in Poffin creation. We expect that this item will become available at a certain level and will make it easier to catch Pokémon."
    },
    order: 4
  },
  "ITEM_WEPAR_BERRY": {
    "name": {
      "en": "wepar berry"
    },
    "description": {
      "en": "Use unknown. Traditionally a rare berry used in Poffin creation. We expect that this item will become available at a certain level and will make it easier to catch Pokémon."
    },
    order: 5
  },
  // INCENSE
  "ITEM_INCENSE_ORDINARY": {
    "name": {
      "en": "incense ordinary"
    },
    "description": {
      "en": (info) => `
        Attracts wild Pokémon to your location for ${info.incense_lifetime_seconds / 60} minutes.
        A Pokémon will be encountered every ${info.standing_time_between_encounters_seconds / 60} minutes while standing,
        every ${info.moving_time_between_encounter_seconds / 60} minute while travelling, or once
        every ${info.distance_required_for_shorter_interval_meters} meters travelled.
      `
    }
  },
  // INCUBATOR
  "ITEM_INCUBATOR_BASIC": {
    "name": {
      "en": "incubator basic",
      "it": "incubatrice uova"
    },
    "description": {
      "en": (info) => `Used to hatch Pokémon Eggs. Each one can hatch ${info.uses || 'unlimited'} eggs.`
    },
    order: 1
  },
  "ITEM_INCUBATOR_BASIC_UNLIMITED": {
    "name": {
      "en": "incubator basic unlimited",
      "it": "incubatrice uova ∞"
    },
    "description": {
      "en": (info) => `Used to hatch Pokémon Eggs. Each one can hatch ${info.uses || 'unlimited'} eggs.`
    },
    order: 2
  },
  // INVENTORY UPGRADE
  "ITEM_ITEM_STORAGE_UPGRADE": {
    "name": {
      "en": "item storage upgrade",
      "it": "ampliamento spazio borsa"
    },
    "description": {
      "en": (info) => `Each use increases capacity by ${info.additional_storage} to a max of 1000.`
    },
    order: 1
  },
  "ITEM_POKEMON_STORAGE_UPGRADE": {
    "name": {
      "en": "pokémon storage upgrade",
      "it": "ampliamento spazio pokémon"
    },
    "description": {
      "en": (info) => `Each use increases capacity by ${info.additional_storage} to a max of 1000.`
    },
    order: 2
  },
    // MEDICINE
  "ITEM_POTION": {
    "name": {
      "en": "potion",
      "it": "pozione"
    },
    "description": {
      "en": (info) => `Heals Pokémon by ${info.sta_amount} HP.`
    },
    order: 1
  },
  "ITEM_SUPER_POTION": {
    "name": {
      "en": "super potion",
      "it": "superpozione"
    },
    "description": {
      "en": (info) => `Heals Pokémon by ${info.sta_amount} HP.`
    },
    order: 2
  },
  "ITEM_MAX_POTION": {
    "name": {
      "en": "max potion"
    },
    "description": {
      "en": (info) => `Heals Pokémon ${info.sta_percent * 100}%.`
    },
    order: 3
  },
  "ITEM_REVIVE": {
    "name": {
      "en": "revive",
      "it": "revitalizzante"
    },
    "description": {
      "en": (info) => `Revives a fainted Pokémon to ${info.sta_percent * 100}% HP.`
    },
    order: 4
  },
  "ITEM_MAX_REVIVE": {
    "name": {
      "en": "max revive"
    },
    "description": {
      "en": (info) => `Revives a fainted Pokémon and restores to ${info.sta_percent * 100}% HP.`
    },
    order: 5
  },
  // BALLS
  "ITEM_POKE_BALL": {
    "name": {
      "en": "poké ball",
      "it": "poké ball"
    },
    "description": {
      "en": "A ball used for catching Pokémon."
    },
    order: 1
  },
  "ITEM_GREAT_BALL": {
    "name": {
      "en": "great ball"
    },
    "description": {
      "en": "A ball used for catching Pokémon. Has a higher chance of capture than a Poké Ball."
    },
    order: 2
  },
  "ITEM_ULTRA_BALL": {
    "name": {
      "en": "ultra ball",
      "it": "ultra ball"
    },
    "description": {
      "en": "A ball used for catching Pokémon. Has a higher chance of capture then  Has a higher chance of capture than a Great Ball."
    },
    order: 3
  },
  "ITEM_MASTER_BALL": {
    "name": {
      "en": "master ball",
      "it": "master ball"
    },
    "description": {
      "en": "Not yet discovered. A ball used for catching Pokémon. This ball is guaranteed to catch whatever Pokémon it is thrown at."
    },
    order: 4
  },
  // XP BOOST
  "ITEM_LUCKY_EGG": {
    "name": {
      "en": "lucky egg",
      "it": "fortunuovo"
    },
    "description": {
      "en": (info) => `Increases experience gain by x${info.xp_multiplier} for ${(info.boost_duration_ms / 1000) / 60 } minutes.`
    }
  }
}