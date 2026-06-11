// @ts-nocheck
class CshPortfolioNe extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    var PORTFOLIO = 'Portfolio 3 — Colonial Heights';

    // ── QuickBooks-style P&L (properties as columns) ──
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['1012 28th St NE','1203 25th St NE','1206 24th St NE','1207 Colonial Blvd NE','1210 25th St NE','1219 24th St NE','1306 22nd St NE','1326 24th St NE','1330 24th St NE','1335 22nd St NE','804 29th St NE','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[17200,11700,19250,16200,16520,15440,16130,13680,13745,13420,16650,169935]},
          {t:'item',       label:'Late Fee collected',     v:[30,30,0,940,350,740,60,150,150,0,110,2560]},
          {t:'item',       label:'LTR Cash Receipts',      v:[0,958,0,0,0,0,0,0,2429,0,0,3387]},
          {t:'item',       label:'Security Deposit Income',v:[0,2550,0,0,0,0,0,0,1800,0,0,4350]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[17230,15238,19250,17140,16870,16180,16190,13830,18124,13420,16760,180232]},
          {t:'total',      label:'Total for Income',       v:[17230,15238,19250,17140,16870,16180,16190,13830,18124,13420,16760,180232]},
          {t:'total',      label:'Gross Profit',           v:[17230,15238,19250,17140,16870,16180,16190,13830,18124,13420,16760,180232]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Repair Labor',           v:[1575,3362.23,150,449,4904.23,0,2075,300,1760,1035.07,1245.40,16855.93]},
          {t:'item',       label:'Repair Materials',       v:[0,1013.81,0,0,0,0,0,0,0,0,617.68,1631.49]},
          {t:'item',       label:'Taxes - Real Estate',    v:[1881.84,2024.92,1990.84,1809.34,1583.88,1948.64,1671.12,1788.48,959.12,1600.52,1608.68,18867.38]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[3456.84,6400.96,2140.84,2258.34,6488.11,1948.64,3746.12,2088.48,2719.12,2635.59,3471.76,37354.80]},
          {t:'total',      label:'Total for Expenses',     v:[3456.84,6400.96,2140.84,2258.34,6488.11,1948.64,3746.12,2088.48,2719.12,2635.59,3471.76,37354.80]},
          {t:'noi',        label:'Net Operating Income',   v:[13773.16,8837.04,17109.16,14881.66,10381.89,14231.36,12443.88,11741.52,15404.88,10784.41,13288.24,142877.20]},
          {t:'noi',        label:'Net Income',             v:[13773.16,8837.04,17109.16,14881.66,10381.89,14231.36,12443.88,11741.52,15404.88,10784.41,13288.24,142877.20]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['1012 28th St NE','1203 25th St NE','1206 24th St NE','1207 Colonial Blvd NE','1210 25th St NE','1219 24th St NE','1306 22nd St NE','1326 24th St NE','1330 24th St NE','1335 22nd St NE','804 29th St NE','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[10734,14343.20,21365,16950,16680,14700,12080,12870,11905,14840,11620,158087.20]},
          {t:'item',       label:'Late Fee collected',     v:[100,50,0,400,50,330,0,650,200,50,370,2200]},
          {t:'item',       label:'LTR Cash Receipts',      v:[2658,0,0,0,0,1340,0,0,1325,0,5800,11123]},
          {t:'item',       label:'Security Deposit Income',v:[1700,0,0,0,0,0,500,0,1920,0,0,4120]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[15192,14393.20,21365,17350,16730,16370,12580,13520,15350,14890,17790,175530.20]},
          {t:'total',      label:'Total for Income',       v:[15192,14393.20,21365,17350,16730,16370,12580,13520,15350,14890,17790,175530.20]},
          {t:'total',      label:'Gross Profit',           v:[15192,14393.20,21365,17350,16730,16370,12580,13520,15350,14890,17790,175530.20]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Lawncare',               v:[0,0,0,0,0,0,480,0,0,0,0,480]},
          {t:'item',       label:'Pest Control',           v:[169.34,47.93,0,0,0,0,0,0,0,0,0,217.27]},
          {t:'item',       label:'Repair & Maintenance',   v:[1012.72,325,0,2261.79,0,0,350,0,60,0,0,4009.51]},
          {t:'item',       label:'Repair Labor',           v:[1691.45,772.47,744,3344.82,601,2025.36,0,0,1774.76,683.89,2011.02,13648.77]},
          {t:'item',       label:'Repair Materials',       v:[0,0,519.61,0,0,997.69,0,0,349.50,0,28.69,1895.49]},
          {t:'item',       label:'Taxes - Real Estate',    v:[1682.70,1886.86,2058.86,1640.08,1307.69,1801.30,1830.30,1904.50,1705.10,1574.32,2081.36,19473.07]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[4556.21,3032.26,3322.47,7246.69,1908.69,4824.35,2660.30,1904.50,3889.36,2258.21,4121.07,39724.11]},
          {t:'total',      label:'Total for Expenses',     v:[4556.21,3032.26,3322.47,7246.69,1908.69,4824.35,2660.30,1904.50,3889.36,2258.21,4121.07,39724.11]},
          {t:'noi',        label:'Net Operating Income',   v:[10635.79,11360.94,18042.53,10103.31,14821.31,11545.65,9919.70,11615.50,11460.64,12631.79,13668.93,135806.09]},
          {t:'noi',        label:'Net Income',             v:[10635.79,11360.94,18042.53,10103.31,14821.31,11545.65,9919.70,11615.50,11460.64,12631.79,13668.93,135806.09]}
        ]
      }
    };

    // ── Rent Roll ──
    var RENT_ROLL = [
      {address:'1210 25th St NE',        value:150000, monthlyRent:1430, annualizedRent:17160},
      {address:'1207 Colonial Blvd NE',  value:160000, monthlyRent:1400, annualizedRent:16800},
      {address:'1335 22nd St NE',        value:145000, monthlyRent:1200, annualizedRent:14400},
      {address:'1206 24th St NE',        value:160000, monthlyRent:1645, annualizedRent:19740},
      {address:'1012 28th St NE',        value:164000, monthlyRent:1545, annualizedRent:18540},
      {address:'1219 24th St NE',        value:182000, monthlyRent:1320, annualizedRent:15840},
      {address:'1330 24th St NE',        value:140000, monthlyRent:1400, annualizedRent:16800},
      {address:'804 29th St NE',         value:175000, monthlyRent:1450, annualizedRent:17400},
      {address:'1326 24th St NE',        value:150000, monthlyRent:1550, annualizedRent:18600},
      {address:'1203 25th St NE',        value:140000, monthlyRent:1200, annualizedRent:14400},
      {address:'1306 22nd St NE',        value:150000, monthlyRent:1515, annualizedRent:18180}
    ];

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=12Bp_xXe_PNGF2XpCulohuskkvzkRGxA&ehbc=2E312F&noprof=1';

    var MAP_PROPS = [
      {label:'1012 28th St NE',       addr:'1012 28th St NE, Canton, OH'},
      {label:'1203 25th St NE',       addr:'1203 25th St NE, Canton, OH'},
      {label:'1206 24th St NE',       addr:'1206 24th St NE, Canton, OH'},
      {label:'1207 Colonial Blvd NE', addr:'1207 Colonial Blvd NE, Canton, OH'},
      {label:'1210 25th St NE',       addr:'1210 25th St NE, Canton, OH'},
      {label:'1219 24th St NE',       addr:'1219 24th St NE, Canton, OH'},
      {label:'1306 22nd St NE',       addr:'1306 22nd St NE, Canton, OH'},
      {label:'1326 24th St NE',       addr:'1326 24th St NE, Canton, OH'},
      {label:'1330 24th St NE',       addr:'1330 24th St NE, Canton, OH'},
      {label:'1335 22nd St NE',       addr:'1335 22nd St NE, Canton, OH'},
      {label:'804 29th St NE',        addr:'804 29th St NE, Canton, OH'}
    ];

    // ── EXISTING property data preserved exactly ──
    var PROPERTIES = [
      {
        address: '804 29th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_e43dcc10c9fc49b48abc62fb376f697c~mv2.jpg','https://static.wixstatic.com/media/d9828b_340eb52bca374f1b8f3bee12bf708b43~mv2.jpg','https://static.wixstatic.com/media/d9828b_0615d1021d124ecbabd381beeff07cbf~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff68a188e0e4e66bf6c49e16d0bd761~mv2.jpg','https://static.wixstatic.com/media/d9828b_85709788878a4ea7a7971af7420cb7e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_61019c0fbd3049349c2611a482d47643~mv2.jpg','https://static.wixstatic.com/media/d9828b_74008132f63d4471930ac7ddfecaac72~mv2.jpg','https://static.wixstatic.com/media/d9828b_0bbf9e3da64f46f996c1f7dc083409ed~mv2.jpg']
      },
      {
        address: '1012 28th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_6b5322c3ac554fa38fc6e44617621092~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_0386534e6ce74270956bb843454646c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9974ad55756436e8048731ed96bd547~mv2.jpg','https://static.wixstatic.com/media/d9828b_0386534e6ce74270956bb843454646c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_606643630a2a4bfa9d479db6c22023f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6007ecca713404ea3c948463d44b8df~mv2.jpg','https://static.wixstatic.com/media/d9828b_cdd2b0ad726c40a5bb6fe9b50534ac81~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2b82eb3f064a74b71d9afbd4151cab~mv2.jpg','https://static.wixstatic.com/media/d9828b_41b4c9e7b6764f5b99aad67400f3bcbd~mv2.jpg','https://static.wixstatic.com/media/d9828b_080ec504af5f4b4a98311d4363df63d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_e1d4aaf47bc64d728afff9708aba0063~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa3c302cf47f47c6b72fa144ec98688b~mv2.jpg','https://static.wixstatic.com/media/d9828b_c54608f242294cd0bf4d56849926d67c~mv2.jpg','https://static.wixstatic.com/media/d9828b_8005085f6ca041b3875184d04c3725f5~mv2.jpg','https://static.wixstatic.com/media/d9828b_7af5275536754e18bc38d1177bf6cb58~mv2.jpg','https://static.wixstatic.com/media/d9828b_f85a1ce5682443eea3b519b008baf321~mv2.jpg','https://static.wixstatic.com/media/d9828b_291040edcd48400e93c44f2c63e1a70d~mv2.jpg','https://static.wixstatic.com/media/d9828b_04291b783c8248798a3bf06e244f1882~mv2.jpg','https://static.wixstatic.com/media/d9828b_238f3083474c476aa23627bb496c28ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6032a644762491e81014c296654f88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_58169544afd640ae873b236c6bac92d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_23633a1a37854a4ebd5307a6fc77be89~mv2.jpg']
      },
      {
        address: '1203 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_801cf90ba5e04c7bb182cc61e542e4d5~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_0e456d8fce82487d865db7d5f91cc73d~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a2e739b80d94fccb9d43e85f587addc~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b7dfec1f88e48cba26c3e184f8c0f34~mv2.jpg','https://static.wixstatic.com/media/d9828b_7500b7899ac54ac2b0b04ac3e17888f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_05ad58532e27485ca8d346b546c9e42c~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb13465edfd44efa8ff61c06ba845f00~mv2.jpg','https://static.wixstatic.com/media/d9828b_9460ffa1c0b549edb81a474d33bbe5df~mv2.jpg','https://static.wixstatic.com/media/d9828b_6766275ea06b45c4a1ade9b54de92126~mv2.jpg','https://static.wixstatic.com/media/d9828b_2e573ba1bea249dabbced89100d288af~mv2.jpg','https://static.wixstatic.com/media/d9828b_251d73599b3349c98263851ccb8446a4~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a5c7ff4bc3147a694acecca74cd4b9f~mv2.jpg','https://static.wixstatic.com/media/d9828b_fc4be8886b9c4dd3b3d83d101c16fd4b~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2b1989bb512423f8236aba06412265f~mv2.jpg','https://static.wixstatic.com/media/d9828b_8387a41552c54c4e96ebe0ffd0c631b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_43297e95b66541129c88a4946eecb93b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a098781651c48c6a4f095706aee8680~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e456d8fce82487d865db7d5f91cc73d~mv2.jpg']
      },
      {
        address: '1206 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_7a3674529d954a239ebcdf86611c115c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_d5791b39fa014d3199d294c929e790c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_320a3860aaff484aae55e7fb64ad4be2~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2b28703c8034a42ad921e06782882ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c22f88e531b440db140d14f0b0af809~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b3e1832d5cd4526b5ce8bbc0a4c16ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_60a295bd891e4c8f84cf7b6d895513ba~mv2.jpg','https://static.wixstatic.com/media/d9828b_79e4032989ba4ebc904872ffd5162cb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7fd8eb20a06471d8c02745b136253bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_0056bff3d32f4db2a46f43d8b7b63d55~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e1857ebaa3d40a291e1b6235823be5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e3288b50f60f43dfbc91595aca1b978d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7f50ecaa4884d87b2aae14617d821cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_7041db6f4dad4a238f9987887a8233ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_e46c7d7883e24abe802da734dda4bb83~mv2.jpg','https://static.wixstatic.com/media/d9828b_1af8c95210e4422d99f1e836972335e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_be996a40fe354cb4bab495e1de605967~mv2.jpg','https://static.wixstatic.com/media/d9828b_1678b9ddf7ef4f6ba5584ee6d2eb9de5~mv2.jpg','https://static.wixstatic.com/media/d9828b_8ea2834be9644d0cb81f17a27aaad3f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_80e85a3c5fb04e7c8f27eac20d7a6a5d~mv2.jpg','https://static.wixstatic.com/media/d9828b_4604c748064d4ed0b8ccd9c59dfa0054~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad1af40daf1e4287af48359dcdb0b526~mv2.jpg']
      },
      {
        address: '1207 Colonial Blvd NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_577c9c84ca604395b42763c082e0fe44~mv2.jpg','https://static.wixstatic.com/media/d9828b_c8b8160c965b46e786570aaa4c0e5067~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c9a2b3342284f868eafde03d51b4c5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f98683ca720a4f9b83813e3504485cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_df9ffc08cb4d446b825261c3c14923a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7118c7c7f5d48f39881710ed0f063bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_1b8c021139304b70b5ad712797ef552c~mv2.jpg','https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg','https://static.wixstatic.com/media/d9828b_b0597321bc514be085d0f416c662f910~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb905ca0c7594ab084d2fa8b91a2bf6b~mv2.jpg','https://static.wixstatic.com/media/d9828b_38e48530067742c9b58d869494be1485~mv2.jpg','https://static.wixstatic.com/media/d9828b_2c22e547ed374c4fb5c5ca41e344f580~mv2.jpg','https://static.wixstatic.com/media/d9828b_10be6e16920f4ec492f9098eba977f9c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e82f6a1f606b46478afd37626d22943c~mv2.jpg','https://static.wixstatic.com/media/d9828b_b7bfb622767b4d3b87f911cbbd427b83~mv2.jpg','https://static.wixstatic.com/media/d9828b_b139f601d96d4922a406e4fd2db93b5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd2b7545865645a78d8295c27459989e~mv2.jpg','https://static.wixstatic.com/media/d9828b_8c85e085fb964d7cadfed896a6b0184e~mv2.jpg','https://static.wixstatic.com/media/d9828b_a1e21bbffcc240b99413d5a96f063966~mv2.jpg','https://static.wixstatic.com/media/d9828b_11f4d32902944520932fc1d15eb7649a~mv2.jpg']
      },
      {
        address: '1210 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_c2a3ce875fc04ddab5c5fc09a45b230e~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_5b19a78f3ca0437d93be1700a6570d04~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa6c6118906a425fb5f8b2c5a3774f80~mv2.jpg','https://static.wixstatic.com/media/d9828b_8c3338a76b954b64addc299c6d8244e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e015ee7966844ffb93b20f40bf6d923~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf573dd52e0d4ee9b785b000e52bced1~mv2.jpg','https://static.wixstatic.com/media/d9828b_28bdd1966af7403c9fdf52f701a68bd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a7ab4aa1b1bf43729ada95824bd0a385~mv2.jpg','https://static.wixstatic.com/media/d9828b_3fd36f67b07348af925cfaa4a28d0431~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5546adb9b824bd0b5287101b4439702~mv2.jpg','https://static.wixstatic.com/media/d9828b_4140bbceef944c7d86ec39531785ff55~mv2.jpg','https://static.wixstatic.com/media/d9828b_7817de29a1484a4da77d1beb03e3a7d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_5b19a78f3ca0437d93be1700a6570d04~mv2.jpg','https://static.wixstatic.com/media/d9828b_9cc8365ec37943239dca06be5c9ca13a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dbb5bb704c844d368b7249fd78889aca~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f44cc0bb59046469a910ca905cac869~mv2.jpg','https://static.wixstatic.com/media/d9828b_01b94cbe3c0842ccbb173fe1f976f179~mv2.jpg','https://static.wixstatic.com/media/d9828b_03ca04e83eca4ac3b0bea8b650001d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_d222852f106c4a0bb3a07aa73da3dda2~mv2.jpg','https://static.wixstatic.com/media/d9828b_80ca34fb1d194a28b206775672b28111~mv2.jpg','https://static.wixstatic.com/media/d9828b_6aba341c09c74a21a02b091b20e2725e~mv2.jpg','https://static.wixstatic.com/media/d9828b_9120be5f891f4098815ecc2902b7d6fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_8d83e03534264c2d8c682b10b2e28afa~mv2.jpg','https://static.wixstatic.com/media/d9828b_e55786d128fa4d38a7e5bf499c297d9e~mv2.jpg','https://static.wixstatic.com/media/d9828b_84ffb142ab25466c8aad939ed48193ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_eb0c501caf4743f5892122b4ff31b58d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1bbc51bdb31744bf96500a43534c3d4c~mv2.jpg','https://static.wixstatic.com/media/d9828b_23af165e7bf94230b05cf9f072f8b758~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f8d6303053045849e21dfa87af27047~mv2.jpg']
      },
      {
        address: '1219 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_73730af40c8b485aba9b625fff3d6335~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_b53d1f7ccbd14352b9ecc82e59485e96~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d773ec2199b4c699935bbe7f32bdf08~mv2.jpg','https://static.wixstatic.com/media/d9828b_a9059d7289b845b096a6500bfe7e35e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_94e18ec033f54128bbf44e9dfc91d74b~mv2.jpg','https://static.wixstatic.com/media/d9828b_a3bf1a7d87154c4cb96aa1fffee30009~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6709a78b95442baa72f071aaea1f3e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_cb6dbd8f08c84c9a8958372f1df95c33~mv2.jpg','https://static.wixstatic.com/media/d9828b_b53d1f7ccbd14352b9ecc82e59485e96~mv2.jpg','https://static.wixstatic.com/media/d9828b_3517e5582b3a4520ae58d0c9c5e75282~mv2.jpg','https://static.wixstatic.com/media/d9828b_23b23b8fddc4476fb9e013af1d08a24e~mv2.jpg','https://static.wixstatic.com/media/d9828b_86b022f58d5447738a0e3dc22f2481ad~mv2.jpg','https://static.wixstatic.com/media/d9828b_8285eef36797448b820ef3531d532451~mv2.jpg','https://static.wixstatic.com/media/d9828b_efcf046be2454b7da1aba7a025df7719~mv2.jpg','https://static.wixstatic.com/media/d9828b_991e8ab13e4b4c3e81a77c0c0cad34f9~mv2.jpg']
      },
      {
        address: '1306 22nd St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_d87f143bc3574c599e9a94c33a08f68f~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8638409eaea24ce7a4b47c00506e707c~mv2.jpg','https://static.wixstatic.com/media/d9828b_556ddc390cd14b609888cd5d76268b5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ea67c586b9d434494ee87993a9d9c9a~mv2.jpg','https://static.wixstatic.com/media/d9828b_44ababb0185844599578a9eef3713b6c~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4f7f926890f47328179cb48b2902f7a~mv2.jpg','https://static.wixstatic.com/media/d9828b_032f9a1600254d6088b0b2508004a788~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4882338ffd74b93846d2eeb78e6f28d~mv2.jpg','https://static.wixstatic.com/media/d9828b_8b0d2f7f36ae4c9f94cf72df8696302b~mv2.jpg','https://static.wixstatic.com/media/d9828b_983b37f7a4964fa5bd17b8c445af5054~mv2.jpg','https://static.wixstatic.com/media/d9828b_b16676927ee34dd9a1f78643de2b6738~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6821297b7fe462992d4844270d028db~mv2.jpg','https://static.wixstatic.com/media/d9828b_2cd3b83b7f974e43aa81e6bf86c4c58e~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd82917f8e2042bab65ccf6f8428051d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f766235b70c44c7ca2649ff417707a0a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b28f346ff04743d7ad61a86024b67d59~mv2.jpg','https://static.wixstatic.com/media/d9828b_6b199aa530cd4648aaad6584a8f8baf5~mv2.jpg','https://static.wixstatic.com/media/d9828b_c4da33e12e8648b69302dd040f3ae4da~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7295eef8b7a4f3fa00737065438cb63~mv2.jpg','https://static.wixstatic.com/media/d9828b_5256d744a95747ffbcc661b6b12d156e~mv2.jpg','https://static.wixstatic.com/media/d9828b_acf32c6783ea4cb48b4b3cf021e9f490~mv2.jpg','https://static.wixstatic.com/media/d9828b_a90bc2c9a04949bcb4f0708561314862~mv2.jpg','https://static.wixstatic.com/media/d9828b_e255186a998245feb11b03584cb13f57~mv2.jpg','https://static.wixstatic.com/media/d9828b_db960dc53f6c4d308ae4da6aa0dc7035~mv2.jpg','https://static.wixstatic.com/media/d9828b_fed71e897cb8406c943c35eea6dbc192~mv2.jpg','https://static.wixstatic.com/media/d9828b_fe2cf39101754c4492d9aa5d0993785c~mv2.jpg','https://static.wixstatic.com/media/d9828b_43b0bde644ce40dd823ed3d4a16567da~mv2.jpg','https://static.wixstatic.com/media/d9828b_db76395f3a1042a1aebf16da348f2355~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a3824882ba1417d94a6dec31536db5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_52aaf4c1aff84d99989e3cd54e2c8a5a~mv2.jpg','https://static.wixstatic.com/media/d9828b_54bc60ecb4e844e8921ea56350173ed3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ef36c4d3e874fb1a48e4f91ae6500c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_676f1226f88445cf830b8e3a65c9c86f~mv2.jpg','https://static.wixstatic.com/media/d9828b_588d16e9896442e08ae5037d48fcdf96~mv2.jpg','https://static.wixstatic.com/media/d9828b_f720005ace1544549c98cc41fa45385b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4301c5e681e24c9db2b02bc244b506ba~mv2.jpg','https://static.wixstatic.com/media/d9828b_cbf1c1b055ff43e1902b4f07642dc742~mv2.jpg']
      },
      {
        address: '1326 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_156f374e7ab54675a7bb2680b21121b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_02f08a8aa68c41b1bc124e8650c5b0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e08866f292246639cf037cdf86206d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_173602d244544b4dba40ea66bd6e3d2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg','https://static.wixstatic.com/media/d9828b_d40f5294bfae4a4d83b3410bd466268c~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad704b7fecd84cf0909a31f5026e2054~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2762ab82bd8403dbb5fea1928499365~mv2.jpg','https://static.wixstatic.com/media/d9828b_7d242996e89f4f12bdb696f93810fb3d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7bcfaab4b7a4a0db6013baaa507b686~mv2.jpg','https://static.wixstatic.com/media/d9828b_3439cc0c510047f2901ca3601c3898c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_c33379ca53274a9989c4d58d6dda3fa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d330ce6672141dba6fc42e56879bdbb~mv2.jpg','https://static.wixstatic.com/media/d9828b_22d75194d1ec430fa67926f88a8366eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ac385d0257a4e3087304d25e0e2ecf3~mv2.jpg','https://static.wixstatic.com/media/d9828b_38bcea7395bc49eda7808cb609054247~mv2.jpg','https://static.wixstatic.com/media/d9828b_e85f0df3dec740a8bc824d5b9aa46c13~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf8c62c3cf9a4ce5a99bfc37f77a295c~mv2.jpg']
      },
      {
        address: '1330 24th St NE', city: 'Canton, OH 44714', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_19f40f3c1faa4237ba63d5fe42b70647~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_afd8a8227569496592e8a72c72b0d76f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b95285ecb60b4d1ca4cc586900bb6465~mv2.jpg','https://static.wixstatic.com/media/d9828b_f5a665e109d94e9c9342e9ac20868da3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a0ca1af03ef749d7950f1793b6b984d8~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc48e8f6bb7418f9bb88e9ae99ef11c~mv2.jpg','https://static.wixstatic.com/media/d9828b_ca4eaee37ed84618ba188aa6e6183fd4~mv2.jpg','https://static.wixstatic.com/media/d9828b_57e99a4af002400789d3cba65367c364~mv2.jpg','https://static.wixstatic.com/media/d9828b_b15f62e3b06d40f091901b1642432aec~mv2.jpg','https://static.wixstatic.com/media/d9828b_a940cbd4026244c591064195c44f75e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_6ef518db2ece4124ad3c91f20cc92ee4~mv2.jpg','https://static.wixstatic.com/media/d9828b_d74d699cc18e4b128fb91d1c7a9cdf3f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c237d4eee0594badac0673e43a33a3f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f46ca3857dcd42fe930f2b1e38843a95~mv2.jpg','https://static.wixstatic.com/media/d9828b_9182f6c64f75438799d7e4d6d3217785~mv2.jpg','https://static.wixstatic.com/media/d9828b_12f9ec1e50524770b3af947fe6ae3f66~mv2.jpg','https://static.wixstatic.com/media/d9828b_65e5b14f81b34b0c856dd9e7cf9abe05~mv2.jpg','https://static.wixstatic.com/media/d9828b_ac1a8edb421f4234995a584f81595603~mv2.jpg','https://static.wixstatic.com/media/d9828b_7c58c584f7a347859633ab71411a21f5~mv2.jpg','https://static.wixstatic.com/media/d9828b_15ad8c4a4f2a49899386a4d34ba1a8c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f25016d85cfa4ec78bb660656dc68a4a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b1bda3aa8b52475e8b74098ef11e17b0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8a45b554c823477385923a29b2df062e~mv2.jpg','https://static.wixstatic.com/media/d9828b_c138a11bfab84f5a8d8b4da75af2d29b~mv2.jpg','https://static.wixstatic.com/media/d9828b_2d042bf8426546098f1a34ffcae268c2~mv2.jpg','https://static.wixstatic.com/media/d9828b_13d46c916ea8459bb4b54c914d03479b~mv2.jpg','https://static.wixstatic.com/media/d9828b_29aff06d39884dca9b3c88a38b405804~mv2.jpg','https://static.wixstatic.com/media/d9828b_04b0ed448dd743c8ad251ab412aefcfe~mv2.jpg','https://static.wixstatic.com/media/d9828b_69d6adbd10334f4c927b85bf0cada6de~mv2.jpg','https://static.wixstatic.com/media/d9828b_3058d28ef3d649caa21225e06d971c3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_0930d65a6b3a41e183767bf9dd63842e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0aca94d372fb4ca3933399860350bca1~mv2.jpg']
      },
      {
        address: '1335 22nd St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a6544565e6a948228e0fc5f558cf334b~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_99f314828c5e42c692fc0be3e63c8d9c~mv2.jpg','https://static.wixstatic.com/media/d9828b_aec477e104a14605b01da381e8459be2~mv2.jpg','https://static.wixstatic.com/media/d9828b_8813d069576f419fb69d5a10c83ff521~mv2.jpg','https://static.wixstatic.com/media/d9828b_b986f1912f604a36b81faaeadd3df36a~mv2.jpg','https://static.wixstatic.com/media/d9828b_259aec8e046e444aa87315d18c2e9a8a~mv2.jpg','https://static.wixstatic.com/media/d9828b_93a99f4d67264bd1ba45b2c7f3c8220d~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebd9b03f5cbe4b4e813797598274564c~mv2.jpg','https://static.wixstatic.com/media/d9828b_4824f7ef70ff4a3fb717badeacd5c40b~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec50795bef68459c86ce679cb50b475b~mv2.jpg','https://static.wixstatic.com/media/d9828b_058e61ed16f94ee9a9575001d3006eee~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd4b243141aa4345b96f100441dc2a06~mv2.jpg','https://static.wixstatic.com/media/d9828b_8f74ee4f93504391a55a3ed62cc2f3c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_3a0d26bf255f4649800da6af48de1537~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0f2a6b6faef4f97ab83d169350f1d34~mv2.jpg','https://static.wixstatic.com/media/d9828b_07ba3359a2ac44529e1b1af1ebeb4f73~mv2.jpg','https://static.wixstatic.com/media/d9828b_5fbbc249c5f042d0820c394ae0a5bad9~mv2.jpg','https://static.wixstatic.com/media/d9828b_b04e14fad28f41bfb192717aafb9118f~mv2.jpg','https://static.wixstatic.com/media/d9828b_5f42be1db408400ca885db76770699b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_44c8bc3efd76487591517896803433d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_98fc0bebc79145629e7097f2901b025e~mv2.jpg']
      }
    ];

    var RENTS = {'804 29th St NE':'$1,450','1012 28th St NE':'$1,545','1203 25th St NE':'$1,200','1206 24th St NE':'$1,645','1207 Colonial Blvd NE':'$1,400','1210 25th St NE':'$1,430','1219 24th St NE':'$1,320','1306 22nd St NE':'$1,515','1326 24th St NE':'$1,550','1330 24th St NE':'$1,400','1335 22nd St NE':'$1,200'};

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
      lines.push('"Portfolio 3 Total",' + tv + ',' + tm + ',' + ty);
      return lines.join('\r\n');
    }

    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '<span class="prop-card__badge">For Rent</span>' +
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
csh-portfolio-ne{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
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
  <div class="hero__badge">Portfolio 3 &mdash; Colonial Heights</div>
  <h1 class="hero__title">Portfolio 3 &mdash; Colonial Heights</h1>
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
      <div class="map-header__title">Portfolio 3 &mdash; Colonial Heights &mdash; Property Locations</div>
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

<div class="section-head"><h2>Properties</h2><span>11 homes &middot; $15,655/mo &middot; $187,860 Annual</span></div>
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
      <div class="rr-modal__title">Portfolio 3 &mdash; Colonial Heights &mdash; Rent Roll</div>
      <div class="rr-modal__sub">Colonial Heights &mdash; 11 Properties</div>
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
      if (_currentPlYear) downloadCSV('Portfolio3_ColonialHeights_PL_' + _currentPlYear + '.csv', buildPLCsv(_currentPlYear));
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
      var html = '<div class="rr-portfolio-badge">Portfolio 3 &mdash; Colonial Heights &mdash; 11 Properties</div><div class="rr-table-wrap"><table class="rr-table">' +
        '<thead><tr><th>Property</th><th>Property Value</th><th>Monthly Rent</th><th>Annualized Rent</th></tr></thead><tbody>';
      RENT_ROLL.forEach(function(r) {
        html += '<tr><td>' + r.address + '</td>' +
          '<td>$' + r.value.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.monthlyRent.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.annualizedRent.toLocaleString('en-US') + '</td></tr>';
      });
      html += '</tbody><tfoot><tr><td>Portfolio 3 Total</td>' +
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
      downloadCSV('Portfolio3_ColonialHeights_RentRoll.csv', buildRRCsv());
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
customElements.define('csh-portfolio-ne', CshPortfolioNe);