// @ts-nocheck
class CshPortfolioCentral extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    var PORTFOLIO = 'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 2';

    // ── QuickBooks-style P&L (properties as columns) ──
    // Column order: 1338 25th | 1341 Ridgeway | 1344 24th | 1502 37th | 1507 Ridgeway | 1511 23rd | 1540 Norwood | 1569 25th | 1600 27th | 1611 25th | 1701 27th | Total
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['1338 25th St NW','1341 Ridgeway Pl NW','1344 24th St NW','1502 37th St NW','1507 Ridgeway Pl NW','1511 23rd St NW','1540 Norwood Pl NW','1569 25th St NW','1600 27th St NW','1611 25th St NW','1701 27th St NW','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',                  v:[16420,2510,15595.88,13800,8160,15180,13724,14985,16125,10800,15000,142299.88]},
          {t:'item',       label:'Late Fee collected',         v:[120,55,160,215,180,50,30,0,160,70,0,1040]},
          {t:'item',       label:'LTR Cash Receipts',          v:[0,9120,0,0,0,0,0,0,0,1200,0,10320]},
          {t:'item',       label:'Security Deposit Income',    v:[0,4465,0,0,0,0,0,0,0,1650,0,6115]},
          {t:'subtotal',   label:'Total for LTR Rents',        v:[16540,16150,15755.88,14015,8340,15230,13754,14985,16285,13720,15000,159774.88]},
          {t:'total',      label:'Total for Income',           v:[16540,16150,15755.88,14015,8340,15230,13754,14985,16285,13720,15000,159774.88]},
          {t:'total',      label:'Gross Profit',               v:[16540,16150,15755.88,14015,8340,15230,13754,14985,16285,13720,15000,159774.88]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'QuickBooks Payments Fees',   v:[0,0,10,1150,500,50,0,0,10,0,0,1720]},
          {t:'item',       label:'Repair Labor',               v:[121.46,2579.32,924.07,1130,8916.27,298.65,1628.75,155,1018,1793.14,1392.27,19956.93]},
          {t:'item',       label:'Repair Materials',           v:[0,0,0,0,0,0,0,0,0,18.35,0,18.35]},
          {t:'item',       label:'Taxes - Real Estate',        v:[1400.16,1820.32,1511.64,1185.08,990.94,1464.70,1457.98,961.70,1519.52,1457.98,1662.58,15432.60]},
          {t:'subtotal',   label:'Total for LTR Expenses',     v:[1521.62,4399.64,2445.71,3465.08,10407.21,1813.35,3086.73,1116.70,2547.52,3269.47,3054.85,37127.88]},
          {t:'total',      label:'Total for Expenses',         v:[1521.62,4399.64,2445.71,3465.08,10407.21,1813.35,3086.73,1116.70,2547.52,3269.47,3054.85,37127.88]},
          {t:'noi',        label:'Net Operating Income',       v:[15018.38,11750.36,13310.17,10549.92,-2067.21,13416.65,10667.27,13868.30,13737.48,10450.53,11945.15,122647.00]},
          {t:'noi',        label:'Net Income',                 v:[15018.38,11750.36,13310.17,10549.92,-2067.21,13416.65,10667.27,13868.30,13737.48,10450.53,11945.15,122647.00]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['1338 25th St NW','1341 Ridgeway Pl NW','1344 24th St NW','1502 37th St NW','1507 Ridgeway Pl NW','1511 23rd St NW','1540 Norwood Pl NW','1569 25th St NW','1600 27th St NW','1611 25th St NW','1701 27th St NW','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',                  v:[17020,0,10740,11250,0,15600,10080,15300,16800,8900,15175,120865]},
          {t:'item',       label:'Late Fee collected',         v:[250,310,150,475,150,50,150,0,150,320,0,2005]},
          {t:'item',       label:'LTR Cash Receipts',          v:[0,15120,0,2250,14638,0,5040,0,0,2500,0,39548]},
          {t:'item',       label:'Security Deposit Income',    v:[0,0,2560,0,1250,0,0,0,0,0,0,3810]},
          {t:'subtotal',   label:'Total for LTR Rents',        v:[17270,15430,13450,13975,16038,15650,15270,15300,16950,11720,15175,166228]},
          {t:'total',      label:'Total for Income',           v:[17270,15430,13450,13975,16038,15650,15270,15300,16950,11720,15175,166228]},
          {t:'total',      label:'Gross Profit',               v:[17270,15430,13450,13975,16038,15650,15270,15300,16950,11720,15175,166228]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Lawncare',                   v:[0,0,275,0,0,0,0,0,0,165,0,440]},
          {t:'item',       label:'Repair & Maintenance',       v:[0,3946.06,1568.32,0,175,0,0,0,0,652.89,0,6342.27]},
          {t:'item',       label:'Repair Labor',               v:[0,3186.95,1058.66,0,2067.93,3589.43,360.85,1421.75,0,2153.02,0,13838.59]},
          {t:'item',       label:'Repair Materials',           v:[0,0,0,0,0,0,0,0,0,68.95,0,68.95]},
          {t:'item',       label:'Taxes - Real Estate',        v:[1613.96,1717.54,1344.48,1096.92,689.36,1598.72,1311,1248.74,1550.40,1196.48,1860.80,15228.40]},
          {t:'subtotal',   label:'Total for LTR Expenses',     v:[1613.96,8850.55,4246.46,1096.92,2932.29,5188.15,1671.85,2670.49,1550.40,4236.34,1860.80,35918.21]},
          {t:'total',      label:'Total for Expenses',         v:[1613.96,8850.55,4246.46,1096.92,2932.29,5188.15,1671.85,2670.49,1550.40,4236.34,1860.80,35918.21]},
          {t:'noi',        label:'Net Operating Income',       v:[15656.04,6579.45,9203.54,12878.08,13105.71,10461.85,13598.15,12629.51,15399.60,7483.66,13314.20,130309.79]},
          {t:'noi',        label:'Net Income',                 v:[15656.04,6579.45,9203.54,12878.08,13105.71,10461.85,13598.15,12629.51,15399.60,7483.66,13314.20,130309.79]}
        ]
      }
    };

    // ── Rent Roll ──
    var RENT_ROLL = [
      {address:'1338 25th St NW',       value:148000, monthlyRent:1400, annualizedRent:16800},
      {address:'1344 24th St NW',       value:135000, monthlyRent:1150, annualizedRent:13800},
      {address:'1540 Norwood Pl NW',    value:130000, monthlyRent:1260, annualizedRent:15120},
      {address:'1507 Ridgeway Pl NW',   value:125000, monthlyRent:1300, annualizedRent:15600},
      {address:'1569 25th St NW',       value:145000, monthlyRent:1275, annualizedRent:15300},
      {address:'1600 27th St NW',       value:140900, monthlyRent:1400, annualizedRent:16800},
      {address:'1701 27th St NW',       value:153000, monthlyRent:1300, annualizedRent:15600},
      {address:'1341 Ridgeway Pl NW',   value:151000, monthlyRent:1450, annualizedRent:17400},
      {address:'1611 25th St NW',       value:140000, monthlyRent:1300, annualizedRent:15600},
      {address:'1502 37th St NW',       value:160000, monthlyRent:1150, annualizedRent:13800},
      {address:'1511 23rd St NW',       value:125000, monthlyRent:1300, annualizedRent:15600}
    ];

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=1Hz5pboINJedil-qGmu8HEj_EfkOM_bs&ehbc=2E312F&noprof=1';

    var MAP_PROPS = [
      {label:'1338 25th St NW',       addr:'1338 25th St NW, Canton, OH'},
      {label:'1341 Ridgeway Pl NW',   addr:'1341 Ridgeway Pl NW, Canton, OH'},
      {label:'1344 24th St NW',       addr:'1344 24th St NW, Canton, OH'},
      {label:'1502 37th St NW',       addr:'1502 37th St NW, Canton, OH'},
      {label:'1507 Ridgeway Pl NW',   addr:'1507 Ridgeway Pl NW, Canton, OH'},
      {label:'1511 23rd St NW',       addr:'1511 23rd St NW, Canton, OH'},
      {label:'1540 Norwood Pl NW',    addr:'1540 Norwood Pl NW, Canton, OH'},
      {label:'1569 25th St NW',       addr:'1569 25th St NW, Canton, OH'},
      {label:'1600 27th St NW',       addr:'1600 27th St NW, Canton, OH'},
      {label:'1611 25th St NW',       addr:'1611 25th St NW, Canton, OH'},
      {label:'1701 27th St NW',       addr:'1701 27th St NW, Canton, OH'}
    ];

    // ── EXISTING property data preserved exactly ──
    var PROPERTIES = [
      {
        address: '1338 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_9225bf5be3764aff89bdf709ab0c474e~mv2.jpeg','https://static.wixstatic.com/media/64b604_6ef9441ec6684d4c81ee95a591d44175~mv2.jpeg','https://static.wixstatic.com/media/64b604_3136d22896d946458df6af5286a5a0ed~mv2.jpeg','https://static.wixstatic.com/media/64b604_e45ad05d4d884167993324dd9608ecd5~mv2.jpeg','https://static.wixstatic.com/media/64b604_b13f68bcb3db4f7a9b09e4b26b3a15e7~mv2.jpeg','https://static.wixstatic.com/media/64b604_4ccb5da049f7440b9a1d3f86869d31da~mv2.jpeg','https://static.wixstatic.com/media/64b604_c6de139e4bac4f5384c2dc237f29c67e~mv2.jpeg','https://static.wixstatic.com/media/64b604_48f621b5ab38484bb65b3102e531a121~mv2.jpeg','https://static.wixstatic.com/media/64b604_0b0c253a3e8549e6a0fec7628c7769b5~mv2.jpeg','https://static.wixstatic.com/media/64b604_2f8ed0f51326402da7c7d7289870d2bd~mv2.jpeg','https://static.wixstatic.com/media/64b604_7649706394e24d82bbd8fb25fa1ab36c~mv2.jpeg','https://static.wixstatic.com/media/64b604_5fdbc913893a478c9abbc972ba7dfe5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_5cb915a33ab64475900e865f44485495~mv2.jpeg','https://static.wixstatic.com/media/64b604_125af7ebd760456c9c981c7f01413dec~mv2.jpeg','https://static.wixstatic.com/media/64b604_fa93f8cd29cb46579a5357b8e67bba8c~mv2.jpeg','https://static.wixstatic.com/media/64b604_f7a10a88435e49cf859122956c1a071a~mv2.jpeg','https://static.wixstatic.com/media/64b604_f9a0ec1f5fcf4a528d20deca22f2c2c7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ac0a0260175b40acb4916a9550de48dc~mv2.jpeg','https://static.wixstatic.com/media/64b604_ff92a74486c848218252d10186c60efc~mv2.jpeg','https://static.wixstatic.com/media/64b604_3728148fe314442fb17ce5b6b4eec86f~mv2.jpeg','https://static.wixstatic.com/media/64b604_51e8fbfd348648edaeda578981ee3d07~mv2.jpeg']
      },
      {
        address: '1344 24th St NW', city: 'Canton, OH 44709', beds: 3, baths: 3,
        cover: 'https://static.wixstatic.com/media/64b604_90ef583aa5e84c388a54b1091014dae0~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_6b74a2d8a81d4b01a229bd7af291f036~mv2.jpeg','https://static.wixstatic.com/media/64b604_6b74a2d8a81d4b01a229bd7af291f036~mv2.jpeg','https://static.wixstatic.com/media/64b604_2409b1ddba4e4522bbc9a1c48af0ef51~mv2.jpeg','https://static.wixstatic.com/media/64b604_0d8038d3a3024644af7421376cd261f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_06b6234567f745efbf15784c32173f3e~mv2.jpeg','https://static.wixstatic.com/media/64b604_78abccc1e2ce48bab3a612b8dfb23c74~mv2.jpeg','https://static.wixstatic.com/media/64b604_ec66adb6cd3244bdb5d1c60827c09d03~mv2.jpeg','https://static.wixstatic.com/media/64b604_b97a9a4fecb4480db89795e1eca24969~mv2.jpeg','https://static.wixstatic.com/media/64b604_daa59c9763a0457b895bb8b091d29cb5~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2041a53c52542bfa13929ac8a3d99ce~mv2.jpeg','https://static.wixstatic.com/media/64b604_ac42df7b7d04456f8e2280e8eb0a9947~mv2.jpeg','https://static.wixstatic.com/media/64b604_e844e60cdc64471aaf739afdb3dfc286~mv2.jpeg','https://static.wixstatic.com/media/64b604_1aa52871eba0430f9fb189fb97666614~mv2.jpeg','https://static.wixstatic.com/media/64b604_03e54f828cf9460f8f88c424b6a978ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_a66c70d927884f89bcb984c3718fb3b2~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f3da223525649a28de8caa05eb8899d~mv2.jpeg','https://static.wixstatic.com/media/64b604_741a06c5a9884549b2b3a53cf4e1ff33~mv2.jpeg','https://static.wixstatic.com/media/64b604_490bd06df24643f7b3ffb7208c97ef59~mv2.jpeg','https://static.wixstatic.com/media/64b604_28852cfb0f4b422887799dc80c91d0f3~mv2.jpeg','https://static.wixstatic.com/media/64b604_4c84dc89b8f14f039eb2274b709eac4a~mv2.jpeg','https://static.wixstatic.com/media/64b604_fede9606d3444ef3a1768118caf1e6c5~mv2.jpeg','https://static.wixstatic.com/media/64b604_8349899d44274b7ea55c24ae74aabfb1~mv2.jpeg','https://static.wixstatic.com/media/64b604_0b7abf1f701f48ba81f29398e6198169~mv2.jpeg','https://static.wixstatic.com/media/64b604_d67029194afb4b59bdb03c8167912fcb~mv2.jpeg','https://static.wixstatic.com/media/64b604_2d8f665d8ad34b4197000d83e6f399b1~mv2.jpeg','https://static.wixstatic.com/media/64b604_f318ff7507b947aabee4fa362f6b4342~mv2.jpeg']
      },
      {
        address: '1540 Norwood Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_6d787ec44dd14bb5820d300ba95679dd~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_5a3357e7101e43e99316bfa0598e2280~mv2.jpeg','https://static.wixstatic.com/media/64b604_86c7241479a5459ca636f59011f92a2c~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7fc07de7c1d442eb398cd36336cc52a~mv2.jpeg','https://static.wixstatic.com/media/64b604_1c7a6f5934a94c3db696e6ae8d264266~mv2.jpeg','https://static.wixstatic.com/media/64b604_30133db266c54ce2a2f0a2e6d9b51cc3~mv2.jpeg','https://static.wixstatic.com/media/64b604_88d9447d5a7248099fdd7c6246c646a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_ccd8234b2f374a9080bea6d691c352a2~mv2.jpeg','https://static.wixstatic.com/media/64b604_69fd9a39e6f14fc7a3b5d4589d0b49ea~mv2.jpeg','https://static.wixstatic.com/media/64b604_8e7fb6aeba6f42a1bae14e884ca86cec~mv2.jpeg','https://static.wixstatic.com/media/64b604_40ee1b05b5d34801a0ff42326b8be165~mv2.jpeg','https://static.wixstatic.com/media/64b604_cf7cb51b1d9548a99a5bb008ac6941c9~mv2.jpeg','https://static.wixstatic.com/media/64b604_83668c1736094ee18ffd217d351946a3~mv2.jpeg','https://static.wixstatic.com/media/64b604_c47c507e661340a8a2996c3a6b4c6c9c~mv2.jpeg','https://static.wixstatic.com/media/64b604_6d787ec44dd14bb5820d300ba95679dd~mv2.jpeg','https://static.wixstatic.com/media/64b604_4ff85b52980c4b688f19ddb961166fdf~mv2.jpeg','https://static.wixstatic.com/media/64b604_cbd4b6984fb847e2a2a3ae3061db781c~mv2.jpeg','https://static.wixstatic.com/media/64b604_19bb6c7c2752453bb9e2e841f8c6d9f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_315d397a2bfb4d448de6d1852b065cee~mv2.jpeg','https://static.wixstatic.com/media/64b604_43f6240ff3ba422d92ac8e4461d83a2d~mv2.jpeg','https://static.wixstatic.com/media/64b604_0627415752264cb780bc3b30042c6e72~mv2.jpeg']
      },
      {
        address: '1507 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_a8cfba711da0401491558d7b672900a3~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_a8cfba711da0401491558d7b672900a3~mv2.jpeg','https://static.wixstatic.com/media/64b604_a8cfba711da0401491558d7b672900a3~mv2.jpeg','https://static.wixstatic.com/media/64b604_581bca2917a84a489d8e5a7dc36f0b53~mv2.jpeg','https://static.wixstatic.com/media/64b604_f6c46eeb95d64ad19b7a4a03f9ffe6fb~mv2.jpeg','https://static.wixstatic.com/media/64b604_e89bd1a0195a4ea0873d9b5abb548a40~mv2.jpeg','https://static.wixstatic.com/media/64b604_a7f3e7dd91634e57b6772053ca87c054~mv2.jpeg','https://static.wixstatic.com/media/64b604_55fc9e47502d413ebaafc30933dc4b9c~mv2.jpeg','https://static.wixstatic.com/media/64b604_31205cb49072420faded2f80448aa75a~mv2.jpeg','https://static.wixstatic.com/media/64b604_f8debd99736e4ca9aeb644667c82f2a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_52218d72029043619a6d628b2d8d5f1a~mv2.jpeg','https://static.wixstatic.com/media/64b604_c7621e3d79d5498db21c000fab6132ac~mv2.jpeg','https://static.wixstatic.com/media/64b604_d9c45fce361a4192b7345e9247cd0e07~mv2.jpeg','https://static.wixstatic.com/media/64b604_99b47dbfb52346f880bd4808cff95db2~mv2.jpeg','https://static.wixstatic.com/media/64b604_d72d69b61e5f4c4aa5e126c38a8ebfd1~mv2.jpeg','https://static.wixstatic.com/media/64b604_f7344898597f4d26ae0a16d25e6097d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_390e592548894c33acfe0bf253d5325e~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b9770d5cb86407fbf721d3f7cb1b2d9~mv2.jpeg','https://static.wixstatic.com/media/64b604_b2ad22d60fe348d78ff4d3f5408eaa2f~mv2.jpeg','https://static.wixstatic.com/media/64b604_eb94268921f34588877701379161499b~mv2.jpeg','https://static.wixstatic.com/media/64b604_cfc59285a1384bb289ad2c229f6e0bd0~mv2.jpeg','https://static.wixstatic.com/media/64b604_90097da633c1447e9bb9479e77d5f243~mv2.jpeg','https://static.wixstatic.com/media/64b604_ac523efb272340a290c95c700fe47d3a~mv2.jpeg','https://static.wixstatic.com/media/64b604_5353f8ce75d949c5bb42c57add11be62~mv2.jpeg','https://static.wixstatic.com/media/64b604_9b0e273359fc4b499b548bea1d7872c3~mv2.jpeg','https://static.wixstatic.com/media/64b604_b0623dfd0b6d47e5b72f5b2daee21c54~mv2.jpeg','https://static.wixstatic.com/media/64b604_252ec4a6bc584c48b06f685af3db954a~mv2.jpeg','https://static.wixstatic.com/media/64b604_859495edc14c4b53ae8e574c6b473ce6~mv2.jpeg']
      },
      {
        address: '1569 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_143fe9a153144f17965e3966f2919892~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_90986e62d1bf4e17ba6ba004718bf7f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_1a419b83aef44576ba276811b86fbd6a~mv2.jpeg','https://static.wixstatic.com/media/64b604_05a0a295f29c41729c0b41494d2f1fe0~mv2.jpeg','https://static.wixstatic.com/media/64b604_713c3c7573a440848d4d475526deee03~mv2.jpeg','https://static.wixstatic.com/media/64b604_90986e62d1bf4e17ba6ba004718bf7f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_756a7b8e0f3d4585bc0c148d1b67e702~mv2.jpeg','https://static.wixstatic.com/media/64b604_5901ab94f08146c5bca216a0e3886e44~mv2.jpeg','https://static.wixstatic.com/media/64b604_16875229862046178a62ea42f6ceb122~mv2.jpeg','https://static.wixstatic.com/media/64b604_1c016dc508bf4bf296f81b9e7bb5a250~mv2.jpeg','https://static.wixstatic.com/media/64b604_c784d7e88b5446f295e0a60b5a791d25~mv2.jpeg','https://static.wixstatic.com/media/64b604_500ba122d0fd4eafbba476bf5cb8d7a1~mv2.jpeg','https://static.wixstatic.com/media/64b604_369a2d3cbcc84dff8b822dba176119d8~mv2.jpeg','https://static.wixstatic.com/media/64b604_b85922d417ff49178210aa90447eba83~mv2.jpeg','https://static.wixstatic.com/media/64b604_2d4c8667c76b42f484146b967613b641~mv2.jpeg','https://static.wixstatic.com/media/64b604_b00d375a623f40aabb655336620ff2d6~mv2.jpeg','https://static.wixstatic.com/media/64b604_251410c6b4e44dbeaae55a3a6ec3961d~mv2.jpeg','https://static.wixstatic.com/media/64b604_b63b0fd001124b49986a0946aa250065~mv2.jpeg','https://static.wixstatic.com/media/64b604_43e9ac1f8c5145bfb6678970779cdd3c~mv2.jpeg','https://static.wixstatic.com/media/64b604_00736cc750ae4bc380a72f86fb4355e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7b8010e70244b46b7156a193b0f9f00~mv2.jpeg','https://static.wixstatic.com/media/64b604_7c6405bee4d746bba68229ba22e6d761~mv2.jpeg']
      },
      {
        address: '1600 27th St NW', city: 'Canton, OH 44709', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_7d8fdac44e8643f6a717cf071077bf7c~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_4fd2c4003a3b4d7f99f1cc7c3ba22195~mv2.jpeg','https://static.wixstatic.com/media/64b604_40c3d0ef6fca402c85dfb29a9328f26a~mv2.jpeg','https://static.wixstatic.com/media/64b604_ae07fcb2e77b4174ab7cdc88d3eebccf~mv2.jpeg','https://static.wixstatic.com/media/64b604_97ba447ad9434f84b6cba823d6186b71~mv2.jpeg','https://static.wixstatic.com/media/64b604_7d280042f2974c4ba7f21c3de03dae1d~mv2.jpeg','https://static.wixstatic.com/media/64b604_bbf15270902e4faf920129c32ed6b067~mv2.jpeg','https://static.wixstatic.com/media/64b604_11e66244edc443ee9a61bf10fea30aad~mv2.jpeg','https://static.wixstatic.com/media/64b604_1d389f48a4a44a888ea229cd6ad48154~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d0c3ff261b5476d97d2873ecabe1de9~mv2.jpeg','https://static.wixstatic.com/media/64b604_a81210ebdfad4cd38ffebfda25fcabf7~mv2.jpeg','https://static.wixstatic.com/media/64b604_bb247195d2f44fa885884e2ef5a53e0c~mv2.jpeg','https://static.wixstatic.com/media/64b604_a6eddcf85e7a440eafd27a4c078212dd~mv2.jpeg','https://static.wixstatic.com/media/64b604_36956581c39349e79c8cf1be3783dccf~mv2.jpeg','https://static.wixstatic.com/media/64b604_7a21b556567043b9ba79488aff45d90a~mv2.jpeg','https://static.wixstatic.com/media/64b604_37e224b00c8947159d1c331749c28b7f~mv2.jpeg','https://static.wixstatic.com/media/64b604_561bf56e162c40708125aa4457fe86af~mv2.jpeg','https://static.wixstatic.com/media/64b604_c6b8425097a54d0cbab7e592b0814ac5~mv2.jpeg','https://static.wixstatic.com/media/64b604_4fd2c4003a3b4d7f99f1cc7c3ba22195~mv2.jpeg','https://static.wixstatic.com/media/64b604_8920c0d5939c4df1865dd9736b4fc153~mv2.jpeg','https://static.wixstatic.com/media/64b604_6461f03ca130470994a3a50cc2b4a80f~mv2.jpeg','https://static.wixstatic.com/media/64b604_21432030b0ac4124890db74176045bdd~mv2.jpeg']
      },
      {
        address: '1701 27th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_426d1c2e3a334b448db0c5afffc78885~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_3b988ccafe3d47e1933398c44bb65ece~mv2.jpeg','https://static.wixstatic.com/media/64b604_5ab9707e6eb14cb79acfe100f15e2310~mv2.jpeg','https://static.wixstatic.com/media/64b604_5e12de3c1c7548fa89052ebcd3730e91~mv2.jpeg','https://static.wixstatic.com/media/64b604_7de006521cd3431198ca4af50747f11a~mv2.jpeg','https://static.wixstatic.com/media/64b604_a559d8e562ee484da26ed051b377eee3~mv2.jpeg','https://static.wixstatic.com/media/64b604_cb6b43234e004431bfadedb3faa4c16b~mv2.jpeg','https://static.wixstatic.com/media/64b604_d8e4ed2bb7ec40a5b9ed40d59ebce732~mv2.jpeg','https://static.wixstatic.com/media/64b604_b65a542a7db040d5b8bbc22ca9080bf2~mv2.jpeg','https://static.wixstatic.com/media/64b604_96237e4c6a244948b99942c6f7c43614~mv2.jpeg','https://static.wixstatic.com/media/64b604_b5bdc2d2067a49d1a6d531a84fa66f33~mv2.jpeg','https://static.wixstatic.com/media/64b604_7810695d04274f1e919a127a09bd3032~mv2.jpeg','https://static.wixstatic.com/media/64b604_85779b7b556b416f9e952ff6438af45d~mv2.jpeg','https://static.wixstatic.com/media/64b604_4650779cf7744bb0a03fca2020ff839b~mv2.jpeg','https://static.wixstatic.com/media/64b604_ef20601ac11a40799f971b9c85ee4a18~mv2.jpeg','https://static.wixstatic.com/media/64b604_872804aef5c74c18834274b6df2f8f8f~mv2.jpeg','https://static.wixstatic.com/media/64b604_f769a0cdb73847059581b19126fda697~mv2.jpeg','https://static.wixstatic.com/media/64b604_b8952b92abe44c7083fdb32a9874fe7c~mv2.jpeg','https://static.wixstatic.com/media/64b604_426d1c2e3a334b448db0c5afffc78885~mv2.jpeg','https://static.wixstatic.com/media/64b604_3b988ccafe3d47e1933398c44bb65ece~mv2.jpeg','https://static.wixstatic.com/media/64b604_3fc0571b62c24f54b65e9c122aaa1a1a~mv2.jpeg','https://static.wixstatic.com/media/64b604_ac41dce8b4064e25a1ffa6aef6459acd~mv2.jpeg']
      },
      {
        address: '1341 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_d8710688375f47928e359dc9b936e689~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_868c0ac1a60e4a87baf2e46428481c8a~mv2.jpeg','https://static.wixstatic.com/media/64b604_868c0ac1a60e4a87baf2e46428481c8a~mv2.jpeg','https://static.wixstatic.com/media/64b604_167d55345f60451f853b6df5129a3822~mv2.jpeg','https://static.wixstatic.com/media/64b604_31fefb5624a54cf68d1995996fbfac89~mv2.jpeg','https://static.wixstatic.com/media/64b604_4aebc3d3546348cfbd73d9b83a4b6302~mv2.jpeg','https://static.wixstatic.com/media/64b604_d583e276eb7049b58fdfef43b0c60da8~mv2.jpeg','https://static.wixstatic.com/media/64b604_a1a05f6016f84944a87009b265fce3a3~mv2.jpeg','https://static.wixstatic.com/media/64b604_7c374dcbf2cb4c0d97e271a8a34c99a5~mv2.jpeg','https://static.wixstatic.com/media/64b604_7e138abb6fee495db0f94f908516c085~mv2.jpeg','https://static.wixstatic.com/media/64b604_5c836cdb6939467d99035a9ec85b2222~mv2.jpeg','https://static.wixstatic.com/media/64b604_a9c3caa32ae1424fba08bcb275ed21d6~mv2.jpeg','https://static.wixstatic.com/media/64b604_632e0ac1f40e4d93891ebb44133646cd~mv2.jpeg','https://static.wixstatic.com/media/64b604_34b9cf198fae4c72b3eba1106fc607a5~mv2.jpeg','https://static.wixstatic.com/media/64b604_daff19b2a2d745d4bb8676c5094c3d30~mv2.jpeg','https://static.wixstatic.com/media/64b604_66fb369b621c49df9a9f5daa964c8e33~mv2.jpeg']
      },
      {
        address: '1611 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_911989f2e7ec40449e3af16ec76df729~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_07a3bb857db84f1a89e366aec89af01a~mv2.jpeg','https://static.wixstatic.com/media/64b604_becae9405c98438e90da8cab01915ea3~mv2.jpeg','https://static.wixstatic.com/media/64b604_db155cf83fe24e00b6096525d8e3e3d5~mv2.jpeg','https://static.wixstatic.com/media/64b604_ba805f0efaaf4d1fa2f8145346e2512c~mv2.jpeg','https://static.wixstatic.com/media/64b604_fe9e288a532c471c9d5994b8030407fe~mv2.jpeg','https://static.wixstatic.com/media/64b604_f7381573b84b44dcb1894d87b78de92e~mv2.jpeg','https://static.wixstatic.com/media/64b604_07a3bb857db84f1a89e366aec89af01a~mv2.jpeg','https://static.wixstatic.com/media/64b604_7c0846b75ea244ec955edd65a1406b00~mv2.jpeg','https://static.wixstatic.com/media/64b604_6651a8ddb82549b1b641c4763f435e75~mv2.jpeg','https://static.wixstatic.com/media/64b604_418419f92c3a44589d0dd1ae3c1385ba~mv2.jpeg','https://static.wixstatic.com/media/64b604_ec4cd01867174e7096565f7b6bba1c92~mv2.jpeg','https://static.wixstatic.com/media/64b604_4af61f93e86542dfb91dac6ad0d0992a~mv2.jpeg','https://static.wixstatic.com/media/64b604_ea9df0de66b94be1b5939a7b49fbed94~mv2.jpeg','https://static.wixstatic.com/media/64b604_bab7bd5e4e2b4813bdf73c31583a3709~mv2.jpeg','https://static.wixstatic.com/media/64b604_6aebd8023adc451d9b52bb8fba1e4777~mv2.jpeg','https://static.wixstatic.com/media/64b604_c127f7a3a78041d884d1068c0626021b~mv2.jpeg','https://static.wixstatic.com/media/64b604_b901490b113d473aa2fd8344c3d896c9~mv2.jpeg','https://static.wixstatic.com/media/64b604_204c07ab89464d75a4c04cabfd3a1c2b~mv2.jpeg','https://static.wixstatic.com/media/64b604_507e75ade4724454a996cb6be75dabd4~mv2.jpeg','https://static.wixstatic.com/media/64b604_38cacfa536974beb98f68bd49c603a6f~mv2.jpeg','https://static.wixstatic.com/media/64b604_92d82f69d114419e8a881b35fed8a98e~mv2.jpeg']
      },
      {
        address: '1502 37th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_aed71c0306ba4bd08be44753dc10a836~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_d44c99215bcc442abe52167e9533c4f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_83ea123e449341278fa57603023d6dd9~mv2.jpeg','https://static.wixstatic.com/media/64b604_aed71c0306ba4bd08be44753dc10a836~mv2.jpeg','https://static.wixstatic.com/media/64b604_a9fb08a50c404074a9c4a460033e1399~mv2.jpeg','https://static.wixstatic.com/media/64b604_d69d08097b9d4233b7dc62e802b58638~mv2.jpeg','https://static.wixstatic.com/media/64b604_270762ef04fa44a995412c7a7ea3d5e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_348f4a5cc55d4383b321e28548997b51~mv2.jpeg','https://static.wixstatic.com/media/64b604_9166eaab765148018452bbb78c48336e~mv2.jpeg','https://static.wixstatic.com/media/64b604_80e7e9e9dd2f4363aa6c8eb7620d636b~mv2.jpeg','https://static.wixstatic.com/media/64b604_24a355f7fa9d415ab086c797acf6faab~mv2.jpeg','https://static.wixstatic.com/media/64b604_b709433a2bde4a8ebbc27ff98621c03f~mv2.jpeg','https://static.wixstatic.com/media/64b604_8e405d4fd08946d7a0bb6ea2e202281d~mv2.jpeg','https://static.wixstatic.com/media/64b604_527d68eb8b0c4841bf34fbe3368a8628~mv2.jpeg','https://static.wixstatic.com/media/64b604_d8a38f33b0324527b2aebd08f9159390~mv2.jpeg','https://static.wixstatic.com/media/64b604_e3d2a0939e04453eacbed031c428bf64~mv2.jpeg','https://static.wixstatic.com/media/64b604_c32c9fc758544b9d96c236c7caf030b2~mv2.jpeg','https://static.wixstatic.com/media/64b604_0d3a7de7e0b848faaaf6a25c921063bf~mv2.jpeg','https://static.wixstatic.com/media/64b604_0447568924a54a50b28a9255d2b38cb0~mv2.jpeg','https://static.wixstatic.com/media/64b604_da81738efd314bf3b9d8816d34633518~mv2.jpeg','https://static.wixstatic.com/media/64b604_f205fbcc112c485889cf916980e5fc23~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5616585c2c541fd9d7cab52ee27b85d~mv2.jpeg','https://static.wixstatic.com/media/64b604_5631b5612377414ab784253c4d0f8ba1~mv2.jpeg','https://static.wixstatic.com/media/64b604_d82c429578a84cabac3d9d466c7c6a7e~mv2.jpeg','https://static.wixstatic.com/media/64b604_af15380fcee246a7876652328b27c211~mv2.jpeg','https://static.wixstatic.com/media/64b604_a20a0b88df32474d871e71cf81f5b25e~mv2.jpeg','https://static.wixstatic.com/media/64b604_d44c99215bcc442abe52167e9533c4f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_7c9a442c01b04b6490cf8d471d433f73~mv2.jpeg','https://static.wixstatic.com/media/64b604_8e2e0948ece34c5ba2f1bb4cd595e27a~mv2.jpeg','https://static.wixstatic.com/media/64b604_eb8d687cdcfa44d2ad25dccd60c5d815~mv2.jpeg','https://static.wixstatic.com/media/64b604_1d2b013ec0484cc9886237f57f23874e~mv2.jpeg','https://static.wixstatic.com/media/64b604_fabd84874c454389a1316ecfff42b14a~mv2.jpeg','https://static.wixstatic.com/media/64b604_fd0c2dd976324ddf97e38d88200b1c66~mv2.jpeg','https://static.wixstatic.com/media/64b604_43fe4fcac06c4543a75da785894fc282~mv2.jpeg','https://static.wixstatic.com/media/64b604_084fb8beecfa456db2135761567319a3~mv2.jpeg','https://static.wixstatic.com/media/64b604_8b1d1a1f05a14dd5afac84e71719dff4~mv2.jpeg','https://static.wixstatic.com/media/64b604_6d73135b52a0420a866655081484ae0d~mv2.jpeg','https://static.wixstatic.com/media/64b604_ffc87749db5245f5aa01470a945ed1da~mv2.jpeg','https://static.wixstatic.com/media/64b604_d30b82c8883f4362b84501e993efbe46~mv2.jpeg']
      },
      {
        address: '1511 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_2fadc168b10c4853b32cb35c72fc023b~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_5d5045dbbfa74a518e09b97ed0b12ff3~mv2.jpeg','https://static.wixstatic.com/media/64b604_49ff04def6064f378f3041c856ae54b2~mv2.jpeg','https://static.wixstatic.com/media/64b604_e22b1831d3d34d9cae534c2d285606f9~mv2.jpeg','https://static.wixstatic.com/media/64b604_bc9ca55dd8cb49cdb5799e84801c76e6~mv2.jpeg','https://static.wixstatic.com/media/64b604_12c73cf568694082b8392ef8c438c657~mv2.jpeg','https://static.wixstatic.com/media/64b604_0160deacd6bc4cd7879a3070531761d7~mv2.jpeg','https://static.wixstatic.com/media/64b604_b0062023c56c468a9476c313bdb9d755~mv2.jpeg','https://static.wixstatic.com/media/64b604_378a4fd93ca040a09e6dd879c988d07b~mv2.jpeg','https://static.wixstatic.com/media/64b604_f840a7b9e0b1433889ed1a6e634445cd~mv2.jpeg','https://static.wixstatic.com/media/64b604_b19a505b00a14ef0998377219f4944ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_16d6bb3c24ec49eba27a69b6242453cc~mv2.jpeg','https://static.wixstatic.com/media/64b604_2522f11df9e940e6a3b4b01b36104255~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2debb5b90fb4f669a1f2560254a6c89~mv2.jpeg','https://static.wixstatic.com/media/64b604_0da48ac37e4249f886942ae12e4e3947~mv2.jpeg','https://static.wixstatic.com/media/64b604_aedd660a547c4bd0b38aef1bddbccc58~mv2.jpeg','https://static.wixstatic.com/media/64b604_68689a5e13914f03961a53107ca7d632~mv2.jpeg','https://static.wixstatic.com/media/64b604_7bbf4ff2be934f2483a903571df59261~mv2.jpeg','https://static.wixstatic.com/media/64b604_1fc2f4762bcc4cd4a3192d03ebfb0d65~mv2.jpeg','https://static.wixstatic.com/media/64b604_d4ea44296fd646b0b6080cc5871d62f7~mv2.jpeg','https://static.wixstatic.com/media/64b604_2587f30ba6484bf68be8c787f089e595~mv2.jpeg','https://static.wixstatic.com/media/64b604_99fc21ef18974a268d31544799d293a6~mv2.jpeg']
      }
    ];

    var RENTS = {'1338 25th St NW':'$1,400','1344 24th St NW':'$1,150','1540 Norwood Pl NW':'$1,260','1507 Ridgeway Pl NW':'$1,300','1569 25th St NW':'$1,275','1600 27th St NW':'$1,400','1701 27th St NW':'$1,300','1341 Ridgeway Pl NW':'$1,450','1611 25th St NW':'$1,300','1502 37th St NW':'$1,150','1511 23rd St NW':'$1,300'};

    function downloadCSV(filename, csvContent) {
      var blob = new Blob(['﻿' + csvContent], {type:'text/csv;charset=utf-8;'});
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
    }

    function buildPLCsv(year) {
      var d = PL_TABLE[year];
      if (!d) return '';
      var lines = [d.co, d.subtitle, d.period, ''];
      lines.push([''].concat(d.cols).map(function(c){ return '"'+c+'"'; }).join(','));
      d.rows.forEach(function(row) {
        if (!row.v) { lines.push('"' + row.label + '"'); return; }
        var cells = ['"' + row.label + '"'];
        row.v.forEach(function(v){ cells.push(v === 0 ? '' : v); });
        lines.push(cells.join(','));
      });
      return lines.join('\r\n');
    }

    function buildRRCsv() {
      var lines = ['"Property","Property Value","Monthly Rent","Annualized Rent"'];
      RENT_ROLL.forEach(function(r) {
        lines.push('"' + r.address + '",' + r.value + ',' + r.monthlyRent + ',' + r.annualizedRent);
      });
      var tv = RENT_ROLL.reduce(function(s,r){return s+r.value;},0);
      var tm = RENT_ROLL.reduce(function(s,r){return s+r.monthlyRent;},0);
      var ty = RENT_ROLL.reduce(function(s,r){return s+r.annualizedRent;},0);
      lines.push('"Portfolio 2 Total",' + tv + ',' + tm + ',' + ty);
      return lines.join('\r\n');
    }

    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '</div><div class="prop-card__info">' +
        '<div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +
        (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') +
        '<div class="prop-card__btn">View Property Images &rarr;</div>' +
        '</div></div>';
    }).join('');

    var mapListHtml = '<div class="map-prop-item map-prop-item--all active" data-map-default="1"><span class="map-prop-item__label">All Properties</span></div>' +
      MAP_PROPS.map(function(p) {
        return '<div class="map-prop-item" data-map-addr="' + p.addr + '">' +
          '<span class="map-prop-item__addr">' + p.label + '</span>' +
          '<span class="map-prop-item__city">Canton, OH</span></div>';
      }).join('');

    var self = this;

    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
csh-portfolio-central{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:88px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:52px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:10px 18px;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:background .2s,border-color .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}
.csh-hdr__burger{display:none;flex-direction:column;justify-content:space-between;width:26px;height:19px;background:none;border:none;cursor:pointer;padding:0;margin-left:auto;flex-shrink:0}
.csh-hdr__burger span{display:block;width:100%;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:transform .25s,opacity .25s}
.csh-hdr__burger.open span:nth-child(1){transform:translateY(8.5px) rotate(45deg)}
.csh-hdr__burger.open span:nth-child(2){opacity:0}
.csh-hdr__burger.open span:nth-child(3){transform:translateY(-8.5px) rotate(-45deg)}
.csh-mob-nav{display:none;position:absolute;top:94px;left:0;right:0;background:#0a1628;border-top:1px solid rgba(255,255,255,.08);z-index:199;box-shadow:0 8px 32px rgba(0,0,0,.35)}
.csh-mob-nav.open{display:block}
.csh-mob-nav__inner{display:flex;flex-direction:column;padding:8px 0 16px}
.csh-mob-nav__link{padding:15px 20px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.85);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}
.csh-mob-nav__link:hover{background:rgba(255,255,255,.06)}
.csh-mob-nav__link:last-child{border-bottom:none}
.csh-mob-nav__link--gold{color:#c8962a}
@media(max-width:768px){.csh-hdr{padding:0 16px}.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}
.csh-back{display:block;padding:10px 28px;font-size:13px;font-weight:700;color:#5a6b85;text-decoration:none;letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid #e0e4ea;background:#fff}
.csh-back:hover{color:#0d1f35}
.hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:52px 32px 48px;text-align:center}
.hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(24px,4.8vw,46px);font-weight:900;margin-bottom:8px}
.hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}
.reports-section{background:#fff;border-bottom:2px solid rgba(10,30,60,.08);padding:32px 36px}
.reports-section__inner{max-width:900px;margin:0 auto}
.reports-section__label{font-size:11px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:#5a6b85;margin-bottom:18px}
.reports-section__btns{display:flex;gap:14px;flex-wrap:wrap}
.report-btn{flex:1;min-width:200px;padding:18px 22px;background:#0d1f35;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;font-family:'Inter','Segoe UI',Arial,sans-serif;transition:background .2s,transform .15s;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 2px 10px rgba(10,30,60,.18)}
.report-btn:hover{background:#1a3557;transform:translateY(-2px)}
.map-wrap{background:#f0f4fa;border-bottom:2px solid rgba(10,30,60,.08);padding:36px}
.map-container{max-width:1100px;margin:0 auto}
.map-header{margin-bottom:18px}
.map-header__title{font-size:20px;font-weight:800;color:#0d1f35;margin-bottom:4px}
.map-header__sub{font-size:14px;color:#5a6b85}
.map-layout{display:grid;grid-template-columns:220px 1fr;gap:0;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(10,30,60,.14);border:1px solid rgba(10,30,60,.1)}
.map-list{background:#0a1628;overflow-y:auto;max-height:580px}
.map-list__hdr{padding:12px 14px;font-size:10px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.4);border-bottom:1px solid rgba(255,255,255,.08)}
.map-prop-item{padding:11px 14px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.06);transition:background .18s}
.map-prop-item:hover{background:rgba(200,150,42,.18)}
.map-prop-item.active{background:rgba(200,150,42,.25);border-left:3px solid #c8962a}
.map-prop-item--all{padding:12px 14px}
.map-prop-item__label{font-size:12px;font-weight:700;color:#fff;display:block}
.map-prop-item__addr{font-size:12px;font-weight:700;color:rgba(255,255,255,.9);display:block;line-height:1.3}
.map-prop-item__city{font-size:11px;color:rgba(255,255,255,.45);margin-top:2px;display:block}
.map-frame-wrap{height:580px}
.map-frame-wrap iframe{width:100%;height:100%;border:0;display:block}
@media(max-width:680px){.map-layout{grid-template-columns:1fr}.map-list{max-height:220px}.map-frame-wrap{height:420px}.map-wrap{padding:20px 16px}}
.section-head{max-width:1040px;margin:48px auto 20px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between}
.section-head h2{font-size:22px;font-weight:800;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em}
.section-head span{font-size:16px;color:#888}
.prop-grid{max-width:1040px;margin:0 auto 64px;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:24px}
.prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,0.16)}
.prop-card__img-wrap{position:relative;height:220px;overflow:hidden}
.prop-card__cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}
.prop-card:hover .prop-card__cover{transform:scale(1.06)}
.prop-card__badge{position:absolute;top:12px;left:12px;background:#C8962A;color:#fff;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:12px}
.prop-card__info{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1}
.prop-card__address{font-size:20px;font-weight:800;color:#0D1F35;margin-bottom:4px;line-height:1.3}
.prop-card__city{font-size:14px;color:#999;margin-bottom:10px}
.prop-card__specs{font-size:16px;color:#555;font-weight:600;margin-bottom:18px;flex:1}
.prop-card__rent{font-size:18px;font-weight:800;color:#c8962a;margin-bottom:12px}
.prop-card__btn{width:100%;padding:12px;background:#1A3557;color:#fff;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-align:center}
.prop-card:hover .prop-card__btn{background:#0D1F35}
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:12px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:16px;width:100%;max-width:1200px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:16px 56px 14px 22px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.3}
.pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:4px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:13px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow:auto;padding:18px;flex:1}
.pl-modal__foot{padding:12px 22px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 16px 16px;display:flex;justify-content:flex-end;flex-shrink:0}
.pl-class-table{width:100%;border-collapse:collapse;font-size:12.5px;font-family:'Inter','Segoe UI',Arial,sans-serif}
.pl-class-table thead tr{background:#0a1628}
.pl-ct-th-lbl{text-align:left;padding:9px 10px;color:rgba(255,255,255,.7);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;min-width:130px;position:sticky;left:0;background:#0a1628;z-index:2}
.pl-ct-th-val{text-align:right;padding:9px 8px;color:rgba(255,255,255,.7);font-size:11px;font-weight:700;letter-spacing:.08em;white-space:nowrap;min-width:90px}
.pl-ct-th-tot{text-align:right;padding:9px 10px;color:#c8962a;font-size:11px;font-weight:800;letter-spacing:.08em;white-space:nowrap;min-width:100px}
.pl-ct-section td{background:#1e3f68;color:#fff;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;padding:8px 10px}
.pl-ct-section .pl-ct-lbl{position:sticky;left:0;background:#1e3f68;z-index:1}
.pl-ct-group-hdr td{background:#f0f4fa;color:#5a6b85;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:7px 10px;border-bottom:1px solid rgba(10,30,60,.08)}
.pl-ct-group-hdr .pl-ct-lbl{position:sticky;left:0;background:#f0f4fa;z-index:1}
.pl-ct-group td,.pl-ct-group .pl-ct-lbl{background:#fff}
.pl-ct-group .pl-ct-lbl{position:sticky;left:0;z-index:1;font-weight:700;color:#0d1f35}
.pl-ct-item td{background:#fff}
.pl-ct-item .pl-ct-lbl{position:sticky;left:0;background:#fff;z-index:1}
.pl-ct-item:nth-child(even) td{background:#f9fafc}
.pl-ct-item:nth-child(even) .pl-ct-lbl{background:#f9fafc}
.pl-ct-subtotal td{background:#eef2f7;font-weight:700}
.pl-ct-subtotal .pl-ct-lbl{position:sticky;left:0;background:#eef2f7;z-index:1}
.pl-ct-total td{background:#e4ecf7;font-weight:800}
.pl-ct-total .pl-ct-lbl{position:sticky;left:0;background:#e4ecf7;z-index:1}
.pl-ct-noi td{background:#0a1628;color:#fff;font-weight:800}
.pl-ct-noi .pl-ct-lbl{position:sticky;left:0;background:#0a1628;z-index:1;color:#fff}
.pl-ct-noi .pl-ct-tot-col{color:#c8962a;font-size:14px;font-weight:900}
.pl-ct-lbl{padding:7px 10px;text-align:left;white-space:nowrap;font-size:12.5px}
.pl-ct-ind{padding-left:26px!important}
.pl-ct-val{padding:7px 8px;text-align:right;white-space:nowrap;color:#0d1f35;font-variant-numeric:tabular-nums;font-size:12px}
.pl-ct-tot-col{padding:7px 10px;text-align:right;white-space:nowrap;font-weight:800;font-variant-numeric:tabular-nums;font-size:12.5px;color:#0d1f35}
.rr-modal{position:fixed;inset:0;z-index:1001;display:flex;align-items:center;justify-content:center;padding:16px}
.rr-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.rr-modal__box{position:relative;background:#fff;border-radius:16px;max-width:780px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.rr-modal__head{padding:18px 52px 16px 22px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.rr-modal__title{font-size:15px;font-weight:800;color:#fff}
.rr-modal__sub{font-size:11px;color:#c8962a;font-weight:700;margin-top:4px;letter-spacing:.1em;text-transform:uppercase}
.rr-modal__close{position:absolute;top:13px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.rr-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.rr-modal__body{overflow-y:auto;padding:20px 22px 8px;flex:1}
.rr-modal__foot{padding:12px 22px 16px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 16px 16px;display:flex;justify-content:flex-end;flex-shrink:0}
.rr-portfolio-badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:rgba(10,30,60,.06);border:1px solid rgba(10,30,60,.12);border-radius:6px;padding:5px 12px;color:#0d1f35;margin-bottom:14px}
.rr-table-wrap{overflow-x:auto}
.rr-table{width:100%;border-collapse:collapse;font-size:13.5px}
.rr-table th{background:#0a1628;color:rgba(255,255,255,.75);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:10px 12px;text-align:left}
.rr-table th:not(:first-child){text-align:right}
.rr-table td{padding:10px 12px;border-bottom:1px solid rgba(10,30,60,.07);color:#0d1f35;font-size:13px}
.rr-table td:not(:first-child){text-align:right}
.rr-table tbody tr:nth-child(even) td{background:#f9fafc}
.rr-table tbody tr:hover td{background:#f0f4fa}
.rr-table tfoot td{background:#0a1628;color:#fff;font-weight:800;padding:12px 12px;font-size:13.5px}
.rr-table tfoot td:not(:first-child){text-align:right}
.rr-rent-val{color:#c8962a;font-weight:800}
.dl-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:#c8962a;color:#0a1628;border:none;border-radius:8px;font-size:13px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;font-family:'Inter','Segoe UI',Arial,sans-serif;transition:background .2s,transform .15s}
.dl-btn:hover{background:#dba83a;transform:translateY(-1px)}
</style>

<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/64b604_4ea6080e0e5c4c62892adb131d8d6c09~mv2.jpeg" alt="CSH Rentals"/>
    <span class="csh-hdr__logo-text">CSH RENTALS</span>
  </a>
  <nav class="csh-hdr__nav">
    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>
    <a class="csh-hdr__email" href="mailto:customstarkhomes@gmail.com,ScottPrivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
  <button class="csh-hdr__burger" id="csh-burger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>
<div class="csh-mob-nav" id="csh-mob-nav">
  <div class="csh-mob-nav__inner">
    <a class="csh-mob-nav__link" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-mob-nav__link csh-mob-nav__link--gold" href="/contact">Contact</a>
    <a class="csh-mob-nav__link" href="mailto:customstarkhomes@gmail.com,ScottPrivate@tagplanning.com">&#9993;&nbsp; Email Us</a>
  </div>
</div>

<a class="csh-back" href="/">&larr; Back to All Portfolios</a>

<section class="hero">
  <div class="hero__badge">Portfolio 2 &mdash; Malone / Pro Football Hall of Fame</div>
  <h1 class="hero__title">Portfolio 2 &mdash; Malone University / Pro Football Hall of Fame Area 2</h1>
  <p class="hero__sub">11 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
</section>

<section class="reports-section">
  <div class="reports-section__inner">
    <div class="reports-section__label">&#128202; Financial Reports</div>
    <div class="reports-section__btns">
      <button class="report-btn" type="button" data-report="pl-2024">&#128202; 2024 P&amp;L by Property</button>
      <button class="report-btn" type="button" data-report="pl-2025">&#128202; 2025 P&amp;L by Property</button>
      <button class="report-btn" type="button" data-report="rent-roll">&#128196; Rent Roll</button>
    </div>
  </div>
</section>

<section class="map-wrap">
  <div class="map-container">
    <div class="map-header">
      <div class="map-header__title">Portfolio 2 &mdash; Malone University / Pro Football Hall of Fame Area 2 &mdash; Property Locations</div>
      <div class="map-header__sub">Every portfolio is geographically tight, reducing travel time and management overhead.</div>
    </div>
    <div class="map-layout">
      <div class="map-list">
        <div class="map-list__hdr">Properties</div>
        ${mapListHtml}
      </div>
      <div class="map-frame-wrap">
        <iframe id="map-iframe" src="${MAP_DEFAULT}" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  </div>
</section>

<div class="section-head"><h2>Properties</h2><span>11 homes &middot; $14,285/mo &middot; $171,420 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>

<div id="pl-modal" class="pl-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="pl-modal__overlay" id="pl-modal-overlay"></div>
  <div class="pl-modal__box">
    <div class="pl-modal__head">
      <div class="pl-modal__title" id="pl-modal-title"></div>
      <div class="pl-modal__period" id="pl-modal-period"></div>
      <button class="pl-modal__close" id="pl-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="pl-modal__body" id="pl-modal-body"></div>
    <div class="pl-modal__foot">
      <button class="dl-btn" id="pl-download-btn" type="button">&#8595; Download CSV</button>
    </div>
  </div>
</div>

<div id="rr-modal" class="rr-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="rr-modal__overlay" id="rr-modal-overlay"></div>
  <div class="rr-modal__box">
    <div class="rr-modal__head">
      <div class="rr-modal__title">Portfolio 2 &mdash; Malone University / Pro Football Hall of Fame Area 2 &mdash; Rent Roll</div>
      <div class="rr-modal__sub">Malone Area 2 &mdash; 11 Properties</div>
      <button class="rr-modal__close" id="rr-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="rr-modal__body" id="rr-modal-body"></div>
    <div class="rr-modal__foot">
      <button class="dl-btn" id="rr-download-btn" type="button">&#8595; Download CSV</button>
    </div>
  </div>
</div>
`;

    // ── Hamburger (preserved) ──
    var burger = self.querySelector('#csh-burger');
    var mobNav = self.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // ── Map ──
    var mapIframe = self.querySelector('#map-iframe');
    self.querySelectorAll('.map-prop-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        self.querySelectorAll('.map-prop-item').forEach(function(x){ x.classList.remove('active'); });
        item.classList.add('active');
        if (item.dataset.mapDefault) {
          mapIframe.src = MAP_DEFAULT;
        } else {
          mapIframe.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(item.dataset.mapAddr) + '&z=17&output=embed';
        }
      });
    });

    // ── P&L Modal ──
    var plModal   = self.querySelector('#pl-modal');
    var plTitle   = self.querySelector('#pl-modal-title');
    var plPeriod  = self.querySelector('#pl-modal-period');
    var plBody    = self.querySelector('#pl-modal-body');
    var plClose   = self.querySelector('#pl-modal-close');
    var plOverlay = self.querySelector('#pl-modal-overlay');
    var plDlBtn   = self.querySelector('#pl-download-btn');
    var _currentPlYear = null;

    function openPLByProp(year) {
      _currentPlYear = year;
      var d = PL_TABLE[year];
      if (!d) return;
      plTitle.textContent  = d.co;
      plPeriod.textContent = d.subtitle + '  |  ' + d.period;

      function fv(n, isDollarCol, forceShow) {
        var num = Number(n);
        if (isNaN(num)) return '';
        if (!forceShow && num === 0) return '';
        var abs = Math.abs(num);
        var s = abs.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        if (isDollarCol) s = '$' + s;
        return num < 0 ? '(' + s + ')' : s;
      }

      var colCount  = d.cols.length;
      var propCount = colCount - 1;
      var html = '<div style="overflow-x:auto"><table class="pl-class-table"><thead><tr>';
      html += '<th class="pl-ct-th-lbl"></th>';
      for (var ci = 0; ci < propCount; ci++) html += '<th class="pl-ct-th-val">' + d.cols[ci] + '</th>';
      html += '<th class="pl-ct-th-tot">Total</th></tr></thead><tbody>';

      d.rows.forEach(function(row) {
        var t = row.t;
        var cls = {'section':'pl-ct-section','group-hdr':'pl-ct-group-hdr','group':'pl-ct-group','item':'pl-ct-item','subtotal':'pl-ct-subtotal','total':'pl-ct-total','noi':'pl-ct-noi'}[t] || 'pl-ct-item';
        var isIndent = (t === 'item' || t === 'subtotal');
        var isForce  = (t !== 'item' && t !== 'group-hdr' && t !== 'section');
        var isDolTot = (t !== 'item');
        html += '<tr class="' + cls + '"><td class="pl-ct-lbl' + (isIndent ? ' pl-ct-ind' : '') + '">' + row.label + '</td>';
        if (row.v) {
          for (var vi = 0; vi < propCount; vi++) html += '<td class="pl-ct-val">' + fv(row.v[vi], false, isForce) + '</td>';
          html += '<td class="pl-ct-tot-col">' + fv(row.v[propCount], isDolTot, true) + '</td>';
        } else {
          for (var ei = 0; ei < propCount + 1; ei++) html += '<td class="pl-ct-val"></td>';
        }
        html += '</tr>';
      });
      html += '</tbody></table></div>';
      plBody.innerHTML = html;
      plModal.style.display = 'flex';
    }

    function closePL() { plModal.style.display = 'none'; }
    if (plClose)   plClose.addEventListener('click', closePL);
    if (plOverlay) plOverlay.addEventListener('click', closePL);
    if (plDlBtn)   plDlBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (_currentPlYear) downloadCSV('Portfolio2_Malone_PL_' + _currentPlYear + '.csv', buildPLCsv(_currentPlYear));
    });

    // ── Rent Roll Modal ──
    var rrModal   = self.querySelector('#rr-modal');
    var rrBody    = self.querySelector('#rr-modal-body');
    var rrClose   = self.querySelector('#rr-modal-close');
    var rrOverlay = self.querySelector('#rr-modal-overlay');
    var rrDlBtn   = self.querySelector('#rr-download-btn');

    function openRentRoll() {
      var totalVal = RENT_ROLL.reduce(function(s,r){return s+r.value;},0);
      var totalMo  = RENT_ROLL.reduce(function(s,r){return s+r.monthlyRent;},0);
      var totalYr  = RENT_ROLL.reduce(function(s,r){return s+r.annualizedRent;},0);
      var html = '<div class="rr-portfolio-badge">Portfolio 2 &mdash; Malone University / Pro Football Hall of Fame Area 2 &mdash; 11 Properties</div><div class="rr-table-wrap"><table class="rr-table">' +
        '<thead><tr><th>Property</th><th>Property Value</th><th>Monthly Rent</th><th>Annualized Rent</th></tr></thead><tbody>';
      RENT_ROLL.forEach(function(r) {
        html += '<tr><td>' + r.address + '</td>' +
          '<td>$' + r.value.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.monthlyRent.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.annualizedRent.toLocaleString('en-US') + '</td></tr>';
      });
      html += '</tbody><tfoot><tr><td>Portfolio 2 Total</td>' +
        '<td>$' + totalVal.toLocaleString('en-US') + '</td>' +
        '<td>$' + totalMo.toLocaleString('en-US') + '</td>' +
        '<td>$' + totalYr.toLocaleString('en-US') + '</td></tr></tfoot></table></div>';
      rrBody.innerHTML = html;
      rrModal.style.display = 'flex';
    }

    function closeRR() { rrModal.style.display = 'none'; }
    if (rrClose)   rrClose.addEventListener('click', closeRR);
    if (rrOverlay) rrOverlay.addEventListener('click', closeRR);
    if (rrDlBtn)   rrDlBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      downloadCSV('Portfolio2_Malone_RentRoll.csv', buildRRCsv());
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closePL(); closeRR(); }
    });

    // ── Navigation (preserved) ──
    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';

    self.addEventListener('click', function(e) {
      var rBtn = e.target.closest('.report-btn');
      if (rBtn) {
        e.preventDefault(); e.stopPropagation();
        var r = rBtn.dataset.report;
        if (r === 'pl-2024') openPLByProp('2024');
        else if (r === 'pl-2025') openPLByProp('2025');
        else if (r === 'rent-roll') openRentRoll();
        return;
      }
      var link = e.target.closest('a');
      if (link) {
        var href = link.getAttribute('href');
        if (href && href.startsWith('/')) { e.preventDefault(); e.stopPropagation(); window.location.assign(window.location.origin + _b + href); }
        return;
      }
      var card = e.target.closest('.prop-card');
      if (!card) return;
      var idx = parseInt(card.dataset.idx, 10);
      var p = PROPERTIES[idx];
      try { localStorage.setItem('csh_prop', JSON.stringify({address:p.address,city:p.city,portfolio:PORTFOLIO,beds:p.beds,baths:p.baths,photos:p.photos})); } catch(err) {}
      window.location.assign(window.location.origin + _b + '/property-detail');
    });
  }
}
customElements.define('csh-portfolio-central', CshPortfolioCentral);
