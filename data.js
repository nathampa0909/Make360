var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0067128048153630715,
        "pitch": -0.21386482208065516,
        "fov": 1.431249193924321
      },
      "linkHotspots": [
        {
          "yaw": 0.5154006922230661,
          "pitch": 0.043083424378222546,
          "rotation": 12.566370614359176,
          "target": "1-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-recepo",
      "name": "Recepção",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.15866622997596913,
        "pitch": 0.13079890985403253,
        "fov": 1.431249193924321
      },
      "linkHotspots": [
        {
          "yaw": -3.1030346303010568,
          "pitch": 0.040001966558321556,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -1.2355802969507046,
          "pitch": 0.00373291911100182,
          "rotation": 10.995574287564278,
          "target": "4-bar"
        },
        {
          "yaw": 0.12280327594317875,
          "pitch": 0.030846196391642877,
          "rotation": 0,
          "target": "2-trreo"
        },
        {
          "yaw": 0.5272677238503256,
          "pitch": 0.006196514075167414,
          "rotation": 1.5707963267948966,
          "target": "6-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-trreo",
      "name": "Térreo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.22878267011888198,
        "pitch": 0.0672388388802716,
        "fov": 1.431249193924321
      },
      "linkHotspots": [
        {
          "yaw": 1.6439760700537933,
          "pitch": 0.23003293121313462,
          "rotation": 1.5707963267948966,
          "target": "1-recepo"
        },
        {
          "yaw": 1.607630630001462,
          "pitch": -0.03377589961141325,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.6201207551306585,
          "pitch": 0.025349585174769373,
          "rotation": 5.497787143782138,
          "target": "6-sute"
        },
        {
          "yaw": 1.201909036397609,
          "pitch": 0.009705644297710592,
          "rotation": 10.995574287564278,
          "target": "6-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.016092020751434788,
          "pitch": 0.1484715568023809,
          "rotation": 0,
          "target": "5-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.17727322590643269,
        "pitch": 0.05144922652555195,
        "fov": 1.431249193924321
      },
      "linkHotspots": [
        {
          "yaw": -2.785114485202527,
          "pitch": 0.027558454226774387,
          "rotation": 1.5707963267948966,
          "target": "0-entrada"
        },
        {
          "yaw": 2.5108016388032617,
          "pitch": -0.0076406732754854545,
          "rotation": 4.71238898038469,
          "target": "1-recepo"
        },
        {
          "yaw": 2.145290938187184,
          "pitch": -0.07546568510628582,
          "rotation": 4.71238898038469,
          "target": "2-trreo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2252935325491698,
          "pitch": 0.05063034887324491,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sute",
      "name": "Suíte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7437217833399572,
          "pitch": -0.011229136380807248,
          "rotation": 1.5707963267948966,
          "target": "7-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banheiro",
      "name": "Banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8020631027916121,
          "pitch": 0.011246518991317345,
          "rotation": 0,
          "target": "6-sute"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Biss Inn Hotel",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
