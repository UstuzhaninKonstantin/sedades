export const areas = [
    {
        name: 'Area 1',
        fullZone: {x: 0, y: 0, w: 1000, h: 600, c: '#200040'},
        enemiesZone: {x: 200, y: 0, w: 600, h: 600, c: '#000000'},
        enemies: [
            {
                type: "ResizingEnemy",
                amount: 5,
                speed: 7,
                r: 18
            },

            {
                type: "DasherEnemy",
                amount: 5,
                speed: 7,
                r: 18
            },

            {
                type: "BorderEnemy",
                amount: 1,
                speed: 5,
                r: 18
            },

            {
                type: "RedAuraEnemy",
                amount: 2,
                speed: 5,
                r: 85
            }
        ],
        portals: [
            {
                x: 950,
                y: 0,
                w: 50,
                h: 600,
                c: 'yellow',
                teleportsTo: 2,
                playerX: 100
            }
        ]
    },
    
    {
        name: 'Area 2',
        fullZone: {x: 0, y: 0, w: 1000, h: 600, c: '#200040'},
        enemiesZone: {x: 200, y: 0, w: 600, h: 600, c: '#000000'},
        enemies: [
            {
                type: "DasherEnemy",
                amount: 8,
                speed: 7,
                r: 18
            },

            {
                type: "BasicEnemy",
                amount: 5,
                speed: 7,
                r: 18
            },

            {
                type: "BorderEnemy",
                amount: 1,
                speed: 5,
                r: 18
            },

            {
                type: "RedAuraEnemy",
                amount: 5,
                speed: 5,
                r: 85
            }
        ],
        portals: [
            {
                x: 0,
                y: 0,
                w: 50,
                h: 600,
                c: 'yellow',
                teleportsTo: 1,
                playerX: 900 
            },

            {
                x: 950,
                y: 0,
                w: 50,
                h: 600,
                c: 'yellow',
                teleportsTo: 3,
                playerX: 100
            }
        ]
    },

    {
        name: 'Area 3',
        fullZone: {x: 0, y: 0, w: 1000, h: 600, c: '#200040'},
        enemiesZone: {x: 200, y: 0, w: 600, h: 600, c: '#000000'},
        enemies: [
            {
                type: "DasherEnemy",
                amount: 10,
                speed: 7,
                r: 18
            },

            {
                type: "BasicEnemy",
                amount: 10,
                speed: 7,
                r: 18
            },

            {
                type: "BorderEnemy",
                amount: 2,
                speed: 5,
                r: 18
            },

            {
                type: "RedAuraEnemy",
                amount: 7,
                speed: 5,
                r: 85
            }
        ],
        portals: [
            {
                x: 0,
                y: 0,
                w: 50,
                h: 600,
                c: 'yellow',
                teleportsTo: 2,
                playerX: 900
            },
        ]
    }
]