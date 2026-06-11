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
        cover: 'https://static.wixstatic.com/media/d9828b_3ffcd9422a4b4a168faafcddc8fca915~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_3ffcd9422a4b4a168faafcddc8fca915~mv2.jpg','https://static.wixstatic.com/media/d9828b_cd3a356d6925476986fa32125ee1f715~mv2.jpg','https://static.wixstatic.com/media/d9828b_946db911f5854acf98d9945616b1702b~mv2.jpg','https://static.wixstatic.com/media/d9828b_23da1c2552c6437eb66222ffbfbb73d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_064c133466734212ba0153b2db7d1fab~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9c0e622862e4347bc0f2ff45daa5b2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_c17d107a12e844e1b8db08a0cc11b514~mv2.jpg','https://static.wixstatic.com/media/d9828b_3400137e85c947159c6bf4aba96b4e71~mv2.jpg','https://static.wixstatic.com/media/d9828b_83a446fb796e49339f061709f5bbfed4~mv2.jpg','https://static.wixstatic.com/media/d9828b_f2f4633249504b5f896d908dca4691b8~mv2.jpg','https://static.wixstatic.com/media/d9828b_8ae90511b312453e8b1732c252094803~mv2.jpg','https://static.wixstatic.com/media/d9828b_c3a6a65784fb461caeb94cc2bbe90297~mv2.jpg','https://static.wixstatic.com/media/d9828b_792354b773fc4626808800d787a0f198~mv2.jpg','https://static.wixstatic.com/media/d9828b_8fcf9630ab394c05972eef556e2f7721~mv2.jpg','https://static.wixstatic.com/media/d9828b_9144a61ee67c4a238c99043261074f7a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d2b5f784da94dbd9a6f5ffe0c96d5c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_56a5ba3ffeaf4df9b1bf19cc31b8bdb9~mv2.jpg','https://static.wixstatic.com/media/d9828b_b6f0750b4e5b4b488fc609b0e2432307~mv2.jpg','https://static.wixstatic.com/media/d9828b_4407e04acd61475caac0c94a96b303c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_176b2da33c214ddd98a843e15794e7aa~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3b42866c5d7402cbc1e08fae1274f1a~mv2.jpg']
      },
      {
        address: '1344 24th St NW', city: 'Canton, OH 44709', beds: 3, baths: 3,
        cover: 'https://static.wixstatic.com/media/d9828b_648f327a4a1f498286de9944091cd332~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_3b91dd78d36944dea63b4ee903e94071~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b91dd78d36944dea63b4ee903e94071~mv2.jpg','https://static.wixstatic.com/media/d9828b_66cc08c529ae49d29ba1acf113eb0dd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_81d3c5bccc7a4f6f975fd3a5b4ce03bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0d539a02c96408a98a7a0784df7cffc~mv2.jpg','https://static.wixstatic.com/media/d9828b_0c26666bf12548968f2e75e87415d05f~mv2.jpg','https://static.wixstatic.com/media/d9828b_201bf2f480b04f24bc9193bcf7041522~mv2.jpg','https://static.wixstatic.com/media/d9828b_274508ba42a74e96b2838f2f96396b47~mv2.jpg','https://static.wixstatic.com/media/d9828b_a63d0741f564479b9253ead7b53768f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0bf46a5ecfa4a198d715a1bb6bd6857~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4591933ffbb4d73bed0597ef6e78b36~mv2.jpg','https://static.wixstatic.com/media/d9828b_334cf3c28fd94c54ba69df14166aae60~mv2.jpg','https://static.wixstatic.com/media/d9828b_94c155a21a0a4fdeadce4c26bea6bc5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0bd8ab10a9c64d30875592f32ba8ff45~mv2.jpg','https://static.wixstatic.com/media/d9828b_620a33aee54840ef918020fb7765cace~mv2.jpg','https://static.wixstatic.com/media/d9828b_679f8b4caadd42378be28229ffe2d712~mv2.jpg','https://static.wixstatic.com/media/d9828b_93f66492ff60445aaa2bd8a05c14bcb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_063a4c82ac584b21bf73a2a87f4af450~mv2.jpg','https://static.wixstatic.com/media/d9828b_dbed66ddc50e4feb950561eb23ca7ae1~mv2.jpg','https://static.wixstatic.com/media/d9828b_991a5cb34a8042788e7da226fbce7365~mv2.jpg','https://static.wixstatic.com/media/d9828b_a153fdee2e9c47818f8fe247f6029d9b~mv2.jpg','https://static.wixstatic.com/media/d9828b_5fabbb0d79eb4504a6b3b8d79ed1c679~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c38001509724112aba3c97aa16854a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_1afd315e6297401c8e7a145e3a1eecea~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a3bb9e0bfda44ddabef34cdbc8dc89b~mv2.jpg','https://static.wixstatic.com/media/d9828b_82b1b8bb91344a4b8d7194a0cde59875~mv2.jpg']
      },
      {
        address: '1540 Norwood Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_9a2dd8d6ab744124b24a5874644e9226~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_01644bc90254440f817a801e0691ebf4~mv2.jpg','https://static.wixstatic.com/media/d9828b_94f19659fa6a401b9b1cc48440a29f61~mv2.jpg','https://static.wixstatic.com/media/d9828b_b24937d0bcf24215beb7b2d78d59cdbf~mv2.jpg','https://static.wixstatic.com/media/d9828b_972fc43de93547e594ece91e6bf35506~mv2.jpg','https://static.wixstatic.com/media/d9828b_f1cbe5e4abd049ef96e875a9f60593ce~mv2.jpg','https://static.wixstatic.com/media/d9828b_c89a5e9a6ea2478186bcbba7c4843e55~mv2.jpg','https://static.wixstatic.com/media/d9828b_5807b2bc0c9f402398cb524dec4ef05b~mv2.jpg','https://static.wixstatic.com/media/d9828b_64fd9148f12c412e917135647f324a38~mv2.jpg','https://static.wixstatic.com/media/d9828b_17bb58da5764443f82f3ee1ced6fbee3~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6fa3a1e986d478abb7919ea0106c638~mv2.jpg','https://static.wixstatic.com/media/d9828b_10ff7a967f564de3a4c27c01a16dd1da~mv2.jpg','https://static.wixstatic.com/media/d9828b_099a197094784b3583f2e7e6d69b56ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9bef72d949e4fc0ab5822e3f4507ece~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a2dd8d6ab744124b24a5874644e9226~mv2.jpg','https://static.wixstatic.com/media/d9828b_3eac5a42d3da4aa481050c4d3d28b69d~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc546ae222a44d449937a018f938d94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_9786cd9b838a4f38bf2a53f9df41d02f~mv2.jpg','https://static.wixstatic.com/media/d9828b_243b20e1cd1e402ebcee2fa078561a2a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b18544ca24c7411da3f3741454bdbc2a~mv2.jpg','https://static.wixstatic.com/media/d9828b_d466f714fec64c7f8d19b157e7f7f0c3~mv2.jpg']
      },
      {
        address: '1507 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg','https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg','https://static.wixstatic.com/media/d9828b_1fff20fd36134829aa06d83d5e0f1ac7~mv2.jpg','https://static.wixstatic.com/media/d9828b_85b1b4c51b8a48a9b9819dff953be0e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0af7394aec940f99129fc0e62455d97~mv2.jpg','https://static.wixstatic.com/media/d9828b_309569caf91a46dcae8e0102e26edad5~mv2.jpg','https://static.wixstatic.com/media/d9828b_057825d0fa9b4b749e4265cf0474c194~mv2.jpg','https://static.wixstatic.com/media/d9828b_fba1a8f2c85f446bab71e23f85682b72~mv2.jpg','https://static.wixstatic.com/media/d9828b_436586c8bb854297a07f78c8db7e3580~mv2.jpg','https://static.wixstatic.com/media/d9828b_24b66a265be14b0f9cac9105bcb88db9~mv2.jpg','https://static.wixstatic.com/media/d9828b_482c3513e6f44b13a518a5dd9c9a7213~mv2.jpg','https://static.wixstatic.com/media/d9828b_bdcfefa0639e4f6dabc72aaaf12547fa~mv2.jpg','https://static.wixstatic.com/media/d9828b_74358afc5d9949edbd81c5e9b8e3d917~mv2.jpg','https://static.wixstatic.com/media/d9828b_27b18ab11ce1490fb7ad169cfd6dc0c0~mv2.jpg','https://static.wixstatic.com/media/d9828b_b64f4443195541cca66e8a49c52dda6e~mv2.jpg','https://static.wixstatic.com/media/d9828b_3df69482899444c4a391c9dd17034226~mv2.jpg','https://static.wixstatic.com/media/d9828b_40970457b07047898f99cd5507269b26~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a02eaa4512746138581042f90338edc~mv2.jpg','https://static.wixstatic.com/media/d9828b_76e99ee3548c47b1bd7ad3caba339bbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_69bb6a44b2bb47ce9813234351047089~mv2.jpg','https://static.wixstatic.com/media/d9828b_185d9f8281294854aa4126f42eeeb29c~mv2.jpg','https://static.wixstatic.com/media/d9828b_4e80b94124a646cfa6bb012c2e8c8bf2~mv2.jpg','https://static.wixstatic.com/media/d9828b_707e6c1867c144f08c100e543d613096~mv2.jpg','https://static.wixstatic.com/media/d9828b_4e4f204f94e04fa9988a8a43ae293e49~mv2.jpg','https://static.wixstatic.com/media/d9828b_91eb414b0c8546b18e5597a734cecb86~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebe6aa0d0c71473d881a75c8ec0201c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_1d0e88b9a2794b6fa95a3ad96fcdc37d~mv2.jpg']
      },
      {
        address: '1569 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_8aafa731b69c4b3a88d442102767effa~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_885cf9e3032147588f2689dfac2755f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_6d1323047ab94763991a94dfd5257868~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf33fed73aab4efe85671eb54fa6ac27~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd89e6b90ea74fa8a63b78f888c3b7b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_885cf9e3032147588f2689dfac2755f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_90f0116bb8134bcba347e73ee434a189~mv2.jpg','https://static.wixstatic.com/media/d9828b_b6e4d73df7c248e5a8d6e54a3b0504cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc5424f53a0a48228406858abf015bfb~mv2.jpg','https://static.wixstatic.com/media/d9828b_d26af80bcc4940db863a0ecfd3dafe44~mv2.jpg','https://static.wixstatic.com/media/d9828b_25765bfed7f045e99d27a67db991126e~mv2.jpg','https://static.wixstatic.com/media/d9828b_21f91fe062d944c28c2356218df34d3d~mv2.jpg','https://static.wixstatic.com/media/d9828b_077a3a166d6c431ea1a92d4ae9476d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d7a5b74fb5949eb8ff69b01c5bdcede~mv2.jpg','https://static.wixstatic.com/media/d9828b_34f3d316ab77475abbd824adf21f8f2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_bcdab1627ac744bf8d5e1d145103b7d1~mv2.jpg','https://static.wixstatic.com/media/d9828b_1189f9070c694bdd9220149baa9745d0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7b29a6438dc5421cbc5897f53c3e4944~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7bf9d30afa64876a63534cee7a5e0bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_aab0e206963a4cd69306495c83776e1b~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b3cfcf2ce1b45858906bd7ab95d890d~mv2.jpg','https://static.wixstatic.com/media/d9828b_05510262e0c14ae693bd5d0b0cf1a7a0~mv2.jpg']
      },
      {
        address: '1600 27th St NW', city: 'Canton, OH 44709', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_c37896be6b8c4f929ec7eca159fbd4fc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_023b78c0d63b4711964575e67762f01e~mv2.jpg','https://static.wixstatic.com/media/d9828b_f43e108bf7264d33b90362a5af8b4240~mv2.jpg','https://static.wixstatic.com/media/d9828b_f23e603043774e93b2f96c6ba92c9adc~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc31263ac224653a66f437b333aa783~mv2.jpg','https://static.wixstatic.com/media/d9828b_515edb7efd304ac99c2323fc0a46fb08~mv2.jpg','https://static.wixstatic.com/media/d9828b_a65c1bd189444475b5afda9be09a5644~mv2.jpg','https://static.wixstatic.com/media/d9828b_5d62cb10ab784148bac30918682ee656~mv2.jpg','https://static.wixstatic.com/media/d9828b_aadfd3d6b6d049e8a7c4000f0960bb7c~mv2.jpg','https://static.wixstatic.com/media/d9828b_f2cb8bf88f5a49e28564ee4a184eaca0~mv2.jpg','https://static.wixstatic.com/media/d9828b_e0d9b6a7e643439b92d43d2c6b4111e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_c8221277ae3f41b795b74ff734480105~mv2.jpg','https://static.wixstatic.com/media/d9828b_f8d07a224c6047e0a6399c19084b2187~mv2.jpg','https://static.wixstatic.com/media/d9828b_025296d583e74af7ac8a65df4988b3fc~mv2.jpg','https://static.wixstatic.com/media/d9828b_95129f968fd740119c628ab969128e6e~mv2.jpg','https://static.wixstatic.com/media/d9828b_789dd30718b047b48a017e99c029f615~mv2.jpg','https://static.wixstatic.com/media/d9828b_73719ffbf21144ab9284d72aee1ecd64~mv2.jpg','https://static.wixstatic.com/media/d9828b_82f9e35074634ca4b17bd452984f1ba4~mv2.jpg','https://static.wixstatic.com/media/d9828b_023b78c0d63b4711964575e67762f01e~mv2.jpg','https://static.wixstatic.com/media/d9828b_1421de1eaa624872826ddf8b5ffbe94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_817354fce8aa4d61bc797ecb1e639809~mv2.jpg','https://static.wixstatic.com/media/d9828b_082b9802ca7047bba2e8a44fc7f394d8~mv2.jpg']
      },
      {
        address: '1701 27th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_7f5cd7a5a7a54526b5deac6063ede291~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_2822522851e240599541658734bfc88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_858509336eca473e84667ad080ca4522~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2c829e9a6d74aa483d1c11a737978a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_50cc3d8abd1047ca81141f68eaffd990~mv2.jpg','https://static.wixstatic.com/media/d9828b_66fbd9cc90724c839d3cb6704a7ef0b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_9afe149394594f31b9199cb2a925bd7e~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0a6ff38b2854f51b94dd382c543eadc~mv2.jpg','https://static.wixstatic.com/media/d9828b_87b2a351600349dca4fe3d3fd7b2e25d~mv2.jpg','https://static.wixstatic.com/media/d9828b_a5c4f5a481fb47098703d735fb694ff9~mv2.jpg','https://static.wixstatic.com/media/d9828b_bfec9101870049a1b5d6b4b1c994799d~mv2.jpg','https://static.wixstatic.com/media/d9828b_62a71228e83f485b8db3cc08d023a99c~mv2.jpg','https://static.wixstatic.com/media/d9828b_7061fbfc48c348c087825af0184023cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_25e695ca76a2469780359a3ed4e568a4~mv2.jpg','https://static.wixstatic.com/media/d9828b_701cb0e6c9da4c1a854a588bd210d492~mv2.jpg','https://static.wixstatic.com/media/d9828b_35ed385ac03e4e9ea71ef614a89ba94a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dc02f282885e43e7ac96231fdb21a3cc~mv2.jpg','https://static.wixstatic.com/media/d9828b_2875f1317572426fb6aa6127d21aff14~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f5cd7a5a7a54526b5deac6063ede291~mv2.jpg','https://static.wixstatic.com/media/d9828b_2822522851e240599541658734bfc88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5000b0f562d439e8099b38343cec546~mv2.jpg','https://static.wixstatic.com/media/d9828b_045363138ce2426e89a800c8e2114e94~mv2.jpg']
      },
      {
        address: '1341 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_35aee13db7ca44508dc3f7b2f8571b7a~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_3484c11b88334bb0be1efebcb06bdee0~mv2.jpg','https://static.wixstatic.com/media/d9828b_3484c11b88334bb0be1efebcb06bdee0~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b79e1ad7f2643868cdfc31a62db4687~mv2.jpg','https://static.wixstatic.com/media/d9828b_17b9678080f64d8f91db5cf9f785f211~mv2.jpg','https://static.wixstatic.com/media/d9828b_fce057e1234747c29345c7c9e70a2229~mv2.jpg','https://static.wixstatic.com/media/d9828b_879d1d31cdff4553a3c8aab9a5cf0957~mv2.jpg','https://static.wixstatic.com/media/d9828b_1010597882cf46a2b5e71ae50bbaecaa~mv2.jpg','https://static.wixstatic.com/media/d9828b_78077e15cbb449ebab4996aa19c352ce~mv2.jpg','https://static.wixstatic.com/media/d9828b_a341409b3d9c41b2bd9f83efd3b154af~mv2.jpg','https://static.wixstatic.com/media/d9828b_50a9d7c7b87a4ba0af9141d2ff0cb436~mv2.jpg','https://static.wixstatic.com/media/d9828b_e42908806f734cfe92c7c46533326401~mv2.jpg','https://static.wixstatic.com/media/d9828b_07563371c1964c51ab9cb113f331e58c~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e560f7bce244dc29c4c6cf8b1f9ea2d~mv2.jpg','https://static.wixstatic.com/media/d9828b_482400bc269a40438056db8a14a6e84a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e1ecaf61cfe040ef853683c459f45ae3~mv2.jpg']
      },
      {
        address: '1611 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_7f1a32a8fe10427cafbe647d9c3edc53~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_5db8f85940e8419faa8cbc243ae88e67~mv2.jpg','https://static.wixstatic.com/media/d9828b_84f3732225644f5bb417827eec03a7b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_671b2353ab2f4da488a477815e2a2807~mv2.jpg','https://static.wixstatic.com/media/d9828b_94b9e7004b0e41ca9808c17e785046d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_d4faa349c73a4b01937df955a210af60~mv2.jpg','https://static.wixstatic.com/media/d9828b_78ec78703c6044ff82e31647930535a7~mv2.jpg','https://static.wixstatic.com/media/d9828b_5db8f85940e8419faa8cbc243ae88e67~mv2.jpg','https://static.wixstatic.com/media/d9828b_772bb615a58645a1aa6c15236a318ac2~mv2.jpg','https://static.wixstatic.com/media/d9828b_438306ed67424885aff854698aac5bc4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7751757251cc478bab08c91164a00a06~mv2.jpg','https://static.wixstatic.com/media/d9828b_2162090d5f5e4f60a5a579bcfb20ef26~mv2.jpg','https://static.wixstatic.com/media/d9828b_16d66f9d80f5419d89883ec32e45eec0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7fcdd3b4ad1a4a6fa54b3cabc102ae5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_9f3773b449cf4f11b700fa466d61b15f~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad349809aadf467fa84a25cfdc58dadc~mv2.jpg','https://static.wixstatic.com/media/d9828b_d62e1249de88439ea548ae08fca84922~mv2.jpg','https://static.wixstatic.com/media/d9828b_6ff3bb7c8a3d41718b6f5a0ce33c98e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_63ea380ecfcb45fd9658b0b4ec1862e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a47877b794e4d8d919186e3f674adfd~mv2.jpg','https://static.wixstatic.com/media/d9828b_e89c6a5e9a5f40ec863fa1c696b8491d~mv2.jpg','https://static.wixstatic.com/media/d9828b_44d8daca04ce43e2bd162e23dcd0ea0f~mv2.jpg']
      },
      {
        address: '1502 37th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a792dcdfa4054c8fbdf8859a4a1c10df~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_50f39add199343f2915ea4fc271cf138~mv2.jpg','https://static.wixstatic.com/media/d9828b_3072b0dad7a649bc82343da044a59137~mv2.jpg','https://static.wixstatic.com/media/d9828b_a792dcdfa4054c8fbdf8859a4a1c10df~mv2.jpg','https://static.wixstatic.com/media/d9828b_ecdb47fe297f46339eb5787dd3adae3b~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1278cf62e7b4d3aae4ae6d90803522f~mv2.jpg','https://static.wixstatic.com/media/d9828b_d408f12e46714a748e3e2a06e6138876~mv2.jpg','https://static.wixstatic.com/media/d9828b_e277279db9624b4cb3141ad4d04f4fc0~mv2.jpg','https://static.wixstatic.com/media/d9828b_05b2e800c75146f39a2873e569872fa5~mv2.jpg','https://static.wixstatic.com/media/d9828b_4bbf9a42e8f84666accb2dfc127f1778~mv2.jpg','https://static.wixstatic.com/media/d9828b_e320f285c9cb4ca49e8c92b9cf25487d~mv2.jpg','https://static.wixstatic.com/media/d9828b_a937545e787049c080dcc6a24cc9cf99~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a395e2841014836bc36cf55c7566acc~mv2.jpg','https://static.wixstatic.com/media/d9828b_f626e1b504264f0c9904f58125e0e8ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_1af085b70b7c4019b7a0084401208432~mv2.jpg','https://static.wixstatic.com/media/d9828b_4628bda3de78430885bcd4a7c0d00f1a~mv2.jpg','https://static.wixstatic.com/media/d9828b_88134200bf77414ea6d62b3f7ed9a1b4~mv2.jpg','https://static.wixstatic.com/media/d9828b_9734538a094e40e38a785c02d1306eeb~mv2.jpg','https://static.wixstatic.com/media/d9828b_4bf1de351ae5448f845f70d323f2a50c~mv2.jpg','https://static.wixstatic.com/media/d9828b_b5f0e57058c44864a38e79f128d7c60c~mv2.jpg','https://static.wixstatic.com/media/d9828b_bba4cd0e8bd34504b02fe52cbc002be5~mv2.jpg','https://static.wixstatic.com/media/d9828b_4a9425f992194d9f9f90ae057729a85f~mv2.jpg','https://static.wixstatic.com/media/d9828b_f256ca58bcc544d98e5e3be53c631dac~mv2.jpg','https://static.wixstatic.com/media/d9828b_08c75705d2dc4578bf306df07fea5267~mv2.jpg','https://static.wixstatic.com/media/d9828b_e171f073ddcc49569ec48928d57be27e~mv2.jpg','https://static.wixstatic.com/media/d9828b_5bac12486dbc468bab0e7163bcfc16e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_50f39add199343f2915ea4fc271cf138~mv2.jpg','https://static.wixstatic.com/media/d9828b_3a6d2742564f4f0b949fb11a6820618b~mv2.jpg','https://static.wixstatic.com/media/d9828b_712297dc15564257b5102c3ad41152f3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f4003f1740b4437903b8873093f9a1c~mv2.jpg','https://static.wixstatic.com/media/d9828b_995808959b704303b917dd78c89b1899~mv2.jpg','https://static.wixstatic.com/media/d9828b_ab303144fe734f7ca833db0219d80e52~mv2.jpg','https://static.wixstatic.com/media/d9828b_52fa3d6a43ce4bb99e97c759a671843c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5d9d0e20e5c4a8ba2d0377193f2c9d2~mv2.jpg','https://static.wixstatic.com/media/d9828b_740f1aa9952e41afb61bb218d70daa8b~mv2.jpg','https://static.wixstatic.com/media/d9828b_e4f34455bbf4462983813de9255c8cc1~mv2.jpg','https://static.wixstatic.com/media/d9828b_8d41af0aa23d410398b75e7abfb18f27~mv2.jpg','https://static.wixstatic.com/media/d9828b_50e24a113db14c9cb0f5ba762c67a569~mv2.jpg','https://static.wixstatic.com/media/d9828b_03a48834fa684edd9196e84fdb2b8e58~mv2.jpg']
      },
      {
        address: '1511 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_933450b3dd3348208f95c3e33cd88a82~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_4558f9c93d274b4d89ea312e340c8167~mv2.jpg','https://static.wixstatic.com/media/d9828b_0c5369f1a6824e5492591c604db19b2d~mv2.jpg','https://static.wixstatic.com/media/d9828b_38a8971d5f824ee6b023129b0b8184b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4dbf68abaff4818bc8b18de2adec119~mv2.jpg','https://static.wixstatic.com/media/d9828b_5e63c23b371f4962b1476108342b4950~mv2.jpg','https://static.wixstatic.com/media/d9828b_2338cfc4683342e0a78a256db9e53094~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd36b52fc52a485fa1d65752ea45c417~mv2.jpg','https://static.wixstatic.com/media/d9828b_36d918052ee44fcc84b734db21ea010f~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0352348b28b4ddb847457e57e8c91e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7842d1955f3f436baaa164b4c958f94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9eddd97876c4698a837c8f44d0282a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_7dac1566ed2841d08062b33df7fa821d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c123cb6842f74cf996c13cd0b582a056~mv2.jpg','https://static.wixstatic.com/media/d9828b_581545a0cfaf4ad9b1bce31d94deaad0~mv2.jpg','https://static.wixstatic.com/media/d9828b_2b817f0f71874bc1a52f8e08a2e841c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_36f9a16eb39a4ae89e2448d4c01748f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_e31c536137ee4ae49f988394bc841701~mv2.jpg','https://static.wixstatic.com/media/d9828b_5e251cc8400248e7a1085e1ddaef7921~mv2.jpg','https://static.wixstatic.com/media/d9828b_7ffce4bbd75b4bb284e5be200e6f5364~mv2.jpg','https://static.wixstatic.com/media/d9828b_ba16b2129b294cd5b651861d89195327~mv2.jpg','https://static.wixstatic.com/media/d9828b_d131085041e74538a2ca846712921e5a~mv2.jpg']
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
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
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
