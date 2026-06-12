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
        cover: 'https://static.wixstatic.com/media/64b604_776ab6a1bcd14db2b95703e59632b2b4~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_d45d7d1b651f4f339354e09b1b8b75e4~mv2.jpeg','https://static.wixstatic.com/media/64b604_7e69189496cb483a88b2fd7d2419e140~mv2.jpeg','https://static.wixstatic.com/media/64b604_c32f41e5fbaa4e15a5f38da992a36361~mv2.jpeg','https://static.wixstatic.com/media/64b604_eaa88410706049f8a17b6e19d0775459~mv2.jpeg','https://static.wixstatic.com/media/64b604_b2164cded752477394856636186071f7~mv2.jpeg','https://static.wixstatic.com/media/64b604_776ab6a1bcd14db2b95703e59632b2b4~mv2.jpeg','https://static.wixstatic.com/media/64b604_d4e4c8eb50c54647ad6959b900233e3f~mv2.jpeg','https://static.wixstatic.com/media/64b604_3a5d5314ec8c4a7bb34168fc038ecfc0~mv2.jpeg','https://static.wixstatic.com/media/64b604_dfed9aa1122e44049b18d2c812dd04d0~mv2.jpeg']
      },
      {
        address: '1012 28th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_f5a8ead372e44655b39aaacd298b3ef3~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_c24ebff2e9654ddba286a8d1052099c2~mv2.jpeg','https://static.wixstatic.com/media/64b604_664c5132febf46ad8a4081d2a2ac3111~mv2.jpeg','https://static.wixstatic.com/media/64b604_c24ebff2e9654ddba286a8d1052099c2~mv2.jpeg','https://static.wixstatic.com/media/64b604_31446e4c190d42e49772f4b7a184d266~mv2.jpeg','https://static.wixstatic.com/media/64b604_5c5b56e25cd7470aadefab25a238f353~mv2.jpeg','https://static.wixstatic.com/media/64b604_5870762dabc645cca5811d0835df1e78~mv2.jpeg','https://static.wixstatic.com/media/64b604_779da713f0214c2daffe552a50164136~mv2.jpeg','https://static.wixstatic.com/media/64b604_8905cb9457e74e328ecbdc90f033c3e4~mv2.jpeg','https://static.wixstatic.com/media/64b604_4983b50e50dc4aceb8d9393fd4c195d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_cd353ab715e4426fb26338d92ff99158~mv2.jpeg','https://static.wixstatic.com/media/64b604_5b29b45bfecb4443a9723e7be11eb1e8~mv2.jpeg','https://static.wixstatic.com/media/64b604_950a1942367f41408050c59d5d21b983~mv2.jpeg','https://static.wixstatic.com/media/64b604_3491e4b32b7049e4b06c7500e99dd708~mv2.jpeg','https://static.wixstatic.com/media/64b604_a3719cb97a304413a72040bc53a26b9a~mv2.jpeg','https://static.wixstatic.com/media/64b604_ae773d9a6ce64266980afd8754f2f431~mv2.jpeg','https://static.wixstatic.com/media/64b604_47f99eedecdd4d05a1e24f7ac8c8d190~mv2.jpeg','https://static.wixstatic.com/media/64b604_21b66ed645eb41738ff2fab4e7174efe~mv2.jpeg','https://static.wixstatic.com/media/64b604_e11623211d08446e8d2ce03562723dda~mv2.jpeg','https://static.wixstatic.com/media/64b604_ead68d8063b44e9ea50e60f4fdd1594a~mv2.jpeg','https://static.wixstatic.com/media/64b604_27e1547f1d684ddeb0088b553dca50b1~mv2.jpeg','https://static.wixstatic.com/media/64b604_1e6ac3899ebf42a6bb1c82e6c16b2d11~mv2.jpeg']
      },
      {
        address: '1203 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_d85ebb0a791444d2bf066d66b56cc28d~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_5ecd9b24cfa6498985a0d6711a4afbac~mv2.jpeg','https://static.wixstatic.com/media/64b604_7592074fd5414681bc950a87fc3dc3e9~mv2.jpeg','https://static.wixstatic.com/media/64b604_7982c7b02a2243f29af4cda85c268891~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d7eedfb251d43d09f30e4261d1e6f10~mv2.jpeg','https://static.wixstatic.com/media/64b604_2028de1882f043fa91166b7e23bd908a~mv2.jpeg','https://static.wixstatic.com/media/64b604_991e93b8a9b0418aa21e979a4e87e0de~mv2.jpeg','https://static.wixstatic.com/media/64b604_a66232b75259403291116b29e1265a2c~mv2.jpeg','https://static.wixstatic.com/media/64b604_c2849d451176447fba24d7aaae738227~mv2.jpeg','https://static.wixstatic.com/media/64b604_2d309e15dfa64a43a76ea438580fdfea~mv2.jpeg','https://static.wixstatic.com/media/64b604_f4d1c71906af464ab459bb70d6707381~mv2.jpeg','https://static.wixstatic.com/media/64b604_6818bf4f5c2647ccbe1ff1840b6bf041~mv2.jpeg','https://static.wixstatic.com/media/64b604_66700e97923748cbb1d2377a91547982~mv2.jpeg','https://static.wixstatic.com/media/64b604_d4349d84b35f4ccb86d8f6fe09826566~mv2.jpeg','https://static.wixstatic.com/media/64b604_41c77bf910f04d44b4f823cf57a2ad4e~mv2.jpeg','https://static.wixstatic.com/media/64b604_3eccaeb9326f452888801c0096871f19~mv2.jpeg','https://static.wixstatic.com/media/64b604_7f71141f5aad485a8a9039db22a59d5e~mv2.jpeg','https://static.wixstatic.com/media/64b604_5ecd9b24cfa6498985a0d6711a4afbac~mv2.jpeg']
      },
      {
        address: '1206 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/64b604_3fd8475e03c14f498b65cf38a78c1830~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_efe4b857d803449c94972b038618a968~mv2.jpeg','https://static.wixstatic.com/media/64b604_7153a376d00d49319bff5c57c38763ac~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b9c907a1c80450aad28522350ee2939~mv2.jpeg','https://static.wixstatic.com/media/64b604_698e57af75fd476191e4a59f64192454~mv2.jpeg','https://static.wixstatic.com/media/64b604_49ea229e25f7463bbbbf17b163f7db98~mv2.jpeg','https://static.wixstatic.com/media/64b604_e7c8d6130e694bb8933cdc992f1f9ae2~mv2.jpeg','https://static.wixstatic.com/media/64b604_1639ab7513c74eef84f11e0c5cca9d10~mv2.jpeg','https://static.wixstatic.com/media/64b604_82207e4a391141eca701104aeb131c05~mv2.jpeg','https://static.wixstatic.com/media/64b604_18bb2d5c3f16494e856ce9bfcdc650ae~mv2.jpeg','https://static.wixstatic.com/media/64b604_132bea1bd9ac4f81844f3cd51c06ba95~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5ee92dd6fe6429286c975ada6a29d3f~mv2.jpeg','https://static.wixstatic.com/media/64b604_567be9a8e8d241a1b122db9444e29e00~mv2.jpeg','https://static.wixstatic.com/media/64b604_008e8d0fd270468d930926d548614c7b~mv2.jpeg','https://static.wixstatic.com/media/64b604_458e1c76dc6f4f399a93df96f6c64ea6~mv2.jpeg','https://static.wixstatic.com/media/64b604_4bdce4b851ff484ba2671dac38e0d28e~mv2.jpeg','https://static.wixstatic.com/media/64b604_fb7df5043c48499c87ed898a7d010566~mv2.jpeg','https://static.wixstatic.com/media/64b604_869c688f63bf45ae9cbb6b77a7c1830e~mv2.jpeg','https://static.wixstatic.com/media/64b604_3805e15881d54a7ead19e33412d84712~mv2.jpeg','https://static.wixstatic.com/media/64b604_57aab92adcae4d3999e764b8efa57552~mv2.jpeg','https://static.wixstatic.com/media/64b604_263e68b26bbd4c3fb223f4f8628d784f~mv2.jpeg','https://static.wixstatic.com/media/64b604_b52336d3404e4ad899f5a142c234605c~mv2.jpeg']
      },
      {
        address: '1207 Colonial Blvd NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_4205f0e960d94555857430409d7a840d~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_f6552d5c217d4942bc9e38906427b48b~mv2.jpeg','https://static.wixstatic.com/media/64b604_9ca1ad9b3aab479bb7961398911bff36~mv2.jpeg','https://static.wixstatic.com/media/64b604_8d2eeb078c5c4b25ae557caa392357ac~mv2.jpeg','https://static.wixstatic.com/media/64b604_891a6e14226249a0847377875b3d46b1~mv2.jpeg','https://static.wixstatic.com/media/64b604_c8f6f31cab474ddaa20bf3e062981dc2~mv2.jpeg','https://static.wixstatic.com/media/64b604_98a37e816a8b43409034006501a4ea76~mv2.jpeg','https://static.wixstatic.com/media/64b604_c65965cb59564166b4b31fbfec860103~mv2.jpeg','https://static.wixstatic.com/media/64b604_4205f0e960d94555857430409d7a840d~mv2.jpeg','https://static.wixstatic.com/media/64b604_976b964871324f1091bc70a4cdcdd74b~mv2.jpeg','https://static.wixstatic.com/media/64b604_49777594743747b285c6f1dd92003057~mv2.jpeg','https://static.wixstatic.com/media/64b604_c16da1107bd840309d3cd5fa1a8351ba~mv2.jpeg','https://static.wixstatic.com/media/64b604_ef38e9f4076e4210b977651f2ec6d30d~mv2.jpeg','https://static.wixstatic.com/media/64b604_a781c941afe14cd18c27ef1acfbbc6c5~mv2.jpeg','https://static.wixstatic.com/media/64b604_e74d3da0aa9b438eb028a890fdc67342~mv2.jpeg','https://static.wixstatic.com/media/64b604_7ba498a2073b45e0a5a191b7c8769cf9~mv2.jpeg','https://static.wixstatic.com/media/64b604_de434389df924983b80eaddd69d6f9d6~mv2.jpeg','https://static.wixstatic.com/media/64b604_19cdfcf1ee374c179067ed73d03dec74~mv2.jpeg','https://static.wixstatic.com/media/64b604_488b84c4a44e4aabb6951aa6e48dc57c~mv2.jpeg','https://static.wixstatic.com/media/64b604_31090b4ccfd34deaa6ff04b2b3e9019b~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5b691f1f8ef433dad4b5f594b9dd022~mv2.jpeg']
      },
      {
        address: '1210 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_39e32df33f1f47e9939fc964478ac57b~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_97aa47ba6f914882aabfbb4f33821fac~mv2.jpeg','https://static.wixstatic.com/media/d9828b_fa6c6118906a425fb5f8b2c5a3774f80~mv2.jpg','https://static.wixstatic.com/media/64b604_23891df26c6b4c978367673b8c9ac502~mv2.jpeg','https://static.wixstatic.com/media/64b604_8b294b60c5594365871b64ce490351c4~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ef9c4c5a5eb4c2099e1726d344d1677~mv2.jpeg','https://static.wixstatic.com/media/64b604_6567b2a995fa45ac99ada5767663b902~mv2.jpeg','https://static.wixstatic.com/media/64b604_2aac2492161d4ebda7f7986881f19cdd~mv2.jpeg','https://static.wixstatic.com/media/64b604_baa563c73588424f9d6c705558ed3efe~mv2.jpeg','https://static.wixstatic.com/media/64b604_adfe5be6812144119147ed681c90afa0~mv2.jpeg','https://static.wixstatic.com/media/64b604_687510cb69744ddb9453b0d49a6d74ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_994bf82ab95e406484fa8e0f09986226~mv2.jpeg','https://static.wixstatic.com/media/64b604_97aa47ba6f914882aabfbb4f33821fac~mv2.jpeg','https://static.wixstatic.com/media/64b604_f178358244df4894bd6440bfb897b8c3~mv2.jpeg','https://static.wixstatic.com/media/64b604_d8be43685e4e4bb79c152b359bd06e46~mv2.jpeg','https://static.wixstatic.com/media/64b604_a77808a9e62b4eb38d13b5b9360ab825~mv2.jpeg','https://static.wixstatic.com/media/64b604_efeac8a1070d4ab38e4853aeb6e4dc1c~mv2.jpeg','https://static.wixstatic.com/media/64b604_65676048f3da40fd9d675061bd7843ba~mv2.jpeg','https://static.wixstatic.com/media/64b604_8552ba370a8544619aa10a55dc19d768~mv2.jpeg','https://static.wixstatic.com/media/64b604_720c2044fb3c4c789fdf9c609f430c48~mv2.jpeg','https://static.wixstatic.com/media/64b604_918cd3c3a9e14de3bc4550c0cc167a0a~mv2.jpeg','https://static.wixstatic.com/media/64b604_3c76c56308e0489e86df04ec26d54930~mv2.jpeg','https://static.wixstatic.com/media/64b604_f27a0a6ae61d4117ad0905c21db54987~mv2.jpeg','https://static.wixstatic.com/media/64b604_0ca865503ee640e5b15143144bab0559~mv2.jpeg','https://static.wixstatic.com/media/64b604_7bfd4e5289d447fb9dda9a51cce09f4e~mv2.jpeg','https://static.wixstatic.com/media/64b604_072e7a8c054a466a8d448387d2551387~mv2.jpeg','https://static.wixstatic.com/media/64b604_6b727273c8ea44d0bbd95920f8393ac0~mv2.jpeg','https://static.wixstatic.com/media/64b604_1f9488ac94d44c69a799c1406c9690b3~mv2.jpeg','https://static.wixstatic.com/media/64b604_a1bbac68f28f42908878404aeab36c4f~mv2.jpeg']
      },
      {
        address: '1219 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_8f2c3ebd9b634367984a41fc52d1e85b~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_0abd18b6b05d4fed9c545ebd95ada002~mv2.jpeg','https://static.wixstatic.com/media/64b604_8b930b793eb1427eb7f09fa35ef9f526~mv2.jpeg','https://static.wixstatic.com/media/64b604_1357bfb1d53d4a6dbbe8fc4ad71bd937~mv2.jpeg','https://static.wixstatic.com/media/64b604_a0d2cdfe76454b3eb0556f3cfb1738eb~mv2.jpeg','https://static.wixstatic.com/media/64b604_69919d655207423ba3b1ce17bb1e5914~mv2.jpeg','https://static.wixstatic.com/media/64b604_8f4fdc28bfd04029bf67c429020bdc85~mv2.jpeg','https://static.wixstatic.com/media/64b604_7db565f786a6462184fb61e6964209d6~mv2.jpeg','https://static.wixstatic.com/media/64b604_0abd18b6b05d4fed9c545ebd95ada002~mv2.jpeg','https://static.wixstatic.com/media/64b604_12eab369c69648b8ab5ea9b6233e667d~mv2.jpeg','https://static.wixstatic.com/media/64b604_81963db5c04543fb92bf6d3ba6f775c2~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ff11a8e160340ff9cbb448f6f43491f~mv2.jpeg','https://static.wixstatic.com/media/64b604_7e4dcff60e4147bd9f56e7c9aa6ed831~mv2.jpeg','https://static.wixstatic.com/media/64b604_84c1481aa5d942c785d307ad90874282~mv2.jpeg','https://static.wixstatic.com/media/64b604_d2fa26e38014418db23c70f3c71c9716~mv2.jpeg']
      },
      {
        address: '1306 22nd St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/64b604_e8e26f04f0c244898fc80b18746dacbb~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_b10e615ab17d4b0e849d4d67429aa7c6~mv2.jpeg','https://static.wixstatic.com/media/64b604_2107fd01e80e434fba814187c80704fc~mv2.jpeg','https://static.wixstatic.com/media/64b604_9c74c6ac159a4c87a7e216c740674cc3~mv2.jpeg','https://static.wixstatic.com/media/64b604_b9b742c3d8264fddbaa21369086df5f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_436cee6d24ab49b981214ad4ceb0cc91~mv2.jpeg','https://static.wixstatic.com/media/64b604_17e3b3e3f4844a67a8046e32f142c666~mv2.jpeg','https://static.wixstatic.com/media/64b604_8841907fd98244a89eabc25f1a53e272~mv2.jpeg','https://static.wixstatic.com/media/64b604_c6fe2a48f9ab4a62890df3d6361c7e75~mv2.jpeg','https://static.wixstatic.com/media/64b604_209923ce11914a6682ff9df0ecd9020a~mv2.jpeg','https://static.wixstatic.com/media/64b604_d0b79a20e72c484a900f91ff6740d818~mv2.jpeg','https://static.wixstatic.com/media/64b604_3f38d09232de4a56a49c83234a585369~mv2.jpeg','https://static.wixstatic.com/media/64b604_03458c1996a846129c4bfe39bc6d7438~mv2.jpeg','https://static.wixstatic.com/media/64b604_8ccd2ce624504c8ba2205523e13cef21~mv2.jpeg','https://static.wixstatic.com/media/64b604_d0f8e444a1784f16b7ee35aff8743ff1~mv2.jpeg','https://static.wixstatic.com/media/64b604_4c322156535d49cc89a10723368351a1~mv2.jpeg','https://static.wixstatic.com/media/64b604_058ce6f13ac94e368ad05d3e714bdebd~mv2.jpeg','https://static.wixstatic.com/media/64b604_76a6d79870ce4cd5ae73380b7a0c9ea0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2376e50597d46368e8f00f5ed75d5fc~mv2.jpeg','https://static.wixstatic.com/media/64b604_22d9cb4feeae4b83b4f722f7eed9b821~mv2.jpeg','https://static.wixstatic.com/media/64b604_57a625b9bd544b80a8c10332cabafd7e~mv2.jpeg','https://static.wixstatic.com/media/64b604_c048f156d317416eaf1036729aae00b5~mv2.jpeg','https://static.wixstatic.com/media/64b604_9afdefe9cb8541c191420adee0ba005e~mv2.jpeg','https://static.wixstatic.com/media/64b604_df017c438b664f72bcde7aa881314e82~mv2.jpeg','https://static.wixstatic.com/media/64b604_3e88dac293c9419788de918fddba21f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_cd5ad2955703456eba1459f6f003407c~mv2.jpeg','https://static.wixstatic.com/media/64b604_bdd3339d85b04bbfabf69e87d41ba7cf~mv2.jpeg','https://static.wixstatic.com/media/64b604_821bd8c8c66f4cd6a5836be7d6caa63e~mv2.jpeg','https://static.wixstatic.com/media/64b604_5b51fe8e3ad34e64989453790bc041d4~mv2.jpeg','https://static.wixstatic.com/media/64b604_ac7b034a765048dbb13378a4538505e5~mv2.jpeg','https://static.wixstatic.com/media/64b604_4b0cf96cd5c14b6d881e7954bc03be2f~mv2.jpeg','https://static.wixstatic.com/media/64b604_fda4bd1790a84f81b6aa7b96cfddb786~mv2.jpeg','https://static.wixstatic.com/media/64b604_bd4751e070cd47fab5da1b3775fe86f7~mv2.jpeg','https://static.wixstatic.com/media/64b604_927efa317e8249078e7217a0f5d58914~mv2.jpeg','https://static.wixstatic.com/media/64b604_b9182f8bce454ec297f4834020f99cbd~mv2.jpeg','https://static.wixstatic.com/media/64b604_3878eb1a190f45f39ad3439a8b646a48~mv2.jpeg','https://static.wixstatic.com/media/64b604_83b8b1c17cc841d480c0087c8b8a1b93~mv2.jpeg']
      },
      {
        address: '1326 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_42982546e42842bda85b0ca6bbcaf941~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_2cdd4587044a4e9c88458324a42a98a6~mv2.jpeg','https://static.wixstatic.com/media/64b604_bc2806c15c8f4cd1ac171bb8a0cb998c~mv2.jpeg','https://static.wixstatic.com/media/64b604_ec585eeb88b64928ae6c7bed20a000b5~mv2.jpeg','https://static.wixstatic.com/media/64b604_94638c32df66416ebf3163673576a79d~mv2.jpeg','https://static.wixstatic.com/media/64b604_42982546e42842bda85b0ca6bbcaf941~mv2.jpeg','https://static.wixstatic.com/media/64b604_43fe5c4925814d26b65905534aa71e63~mv2.jpeg','https://static.wixstatic.com/media/64b604_a686370bc0f64759b10af21598702f72~mv2.jpeg','https://static.wixstatic.com/media/64b604_ab16dc0882a6435b901dd5979b0f33a7~mv2.jpeg','https://static.wixstatic.com/media/64b604_a81a995b4e4a49b0a977218b470f8daf~mv2.jpeg','https://static.wixstatic.com/media/64b604_47905cad925e4f1caa45d1ad81079e52~mv2.jpeg','https://static.wixstatic.com/media/64b604_06fcf6e294cf40488a4c966965e5761a~mv2.jpeg','https://static.wixstatic.com/media/64b604_394691f42ee24044ac8aba902fe04fad~mv2.jpeg','https://static.wixstatic.com/media/64b604_4e1ad8df35944e988bbd304641cd023c~mv2.jpeg','https://static.wixstatic.com/media/64b604_924ad40d69254b89b550bed165ea0caa~mv2.jpeg','https://static.wixstatic.com/media/64b604_bcc3f995250f481e86f84420d174a4da~mv2.jpeg','https://static.wixstatic.com/media/64b604_54862e85055b4993880eaafeb25d19e0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a6865622dbfd4126a4f98968574cccbe~mv2.jpeg','https://static.wixstatic.com/media/64b604_24c3a7b04df14c15ad8c1de63a37ce1c~mv2.jpeg']
      },
      {
        address: '1330 24th St NE', city: 'Canton, OH 44714', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_b0cc918ddd644adba6f403392c2cf8c6~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_77ca4dfeabac4d27af3de47d388f81c9~mv2.jpeg','https://static.wixstatic.com/media/64b604_fcf24f7e0fb745419a421ea3c0a73638~mv2.jpeg','https://static.wixstatic.com/media/64b604_9b0957fc432f4e6c983a666cf22c9d2d~mv2.jpeg','https://static.wixstatic.com/media/64b604_dabee52338ba4003918e9e1a8dffadc4~mv2.jpeg','https://static.wixstatic.com/media/64b604_8d23014785c24088b15a9ce3e60f151f~mv2.jpeg','https://static.wixstatic.com/media/64b604_08e3c64ad1c54f2fab1fb8d547826841~mv2.jpeg','https://static.wixstatic.com/media/64b604_451941d03dbe47da8d382a75c71a82b0~mv2.jpeg','https://static.wixstatic.com/media/64b604_fce82bc63f8e42f494e3fecd5062564b~mv2.jpeg','https://static.wixstatic.com/media/64b604_50f8d0b3586243da99326fe3fa20507c~mv2.jpeg','https://static.wixstatic.com/media/64b604_72d163ec8f8a417fbb0ddfffe59cfdfb~mv2.jpeg','https://static.wixstatic.com/media/64b604_3c04dc65bbdc4f90a8ead6a5bb0d748e~mv2.jpeg','https://static.wixstatic.com/media/64b604_877e785e7dc54216aeab8070a64033dd~mv2.jpeg','https://static.wixstatic.com/media/64b604_6e6c6e258a0f415da14e814d953b21db~mv2.jpeg','https://static.wixstatic.com/media/64b604_03eecaa120dd4116a5187c751e91e119~mv2.jpeg','https://static.wixstatic.com/media/64b604_500be10e39144bc48f95aa9a40a39891~mv2.jpeg','https://static.wixstatic.com/media/64b604_96d507e9557b4d14806a8fa65120c5f4~mv2.jpeg','https://static.wixstatic.com/media/64b604_8893e83ec2fe479ab2f9e37c537ad397~mv2.jpeg','https://static.wixstatic.com/media/64b604_14162a411fa446409d913390b144d2f1~mv2.jpeg','https://static.wixstatic.com/media/64b604_27cce962f2dc43fdbdb606c1257ed6c4~mv2.jpeg','https://static.wixstatic.com/media/64b604_eed3dcc7e4fa4c8a9cb47ae779e423d2~mv2.jpeg','https://static.wixstatic.com/media/64b604_af376c0188a049998870751dfd8b199b~mv2.jpeg','https://static.wixstatic.com/media/64b604_f67b677d50834c778f473b521cc7da00~mv2.jpeg','https://static.wixstatic.com/media/64b604_78b583bc265d4a5487722c4432158860~mv2.jpeg','https://static.wixstatic.com/media/64b604_6b7066de087042208f5efcfed8c93b61~mv2.jpeg','https://static.wixstatic.com/media/64b604_972335dc7bb5489384289f24ab543322~mv2.jpeg','https://static.wixstatic.com/media/64b604_1cae7764f8c94ec9b9ecfc9b8f92ad41~mv2.jpeg','https://static.wixstatic.com/media/64b604_2cdecfe6f141479ba1979a1c03cf4f66~mv2.jpeg','https://static.wixstatic.com/media/64b604_98175397cb7543cd97b1e51d684bd438~mv2.jpeg','https://static.wixstatic.com/media/64b604_91fa341c0f694996ba982b834fea28f4~mv2.jpeg','https://static.wixstatic.com/media/64b604_1ff01b1be91c45b586c7f02b202f6796~mv2.jpeg','https://static.wixstatic.com/media/64b604_61cf59268f2940fcbf60267d5faa5f48~mv2.jpeg']
      },
      {
        address: '1335 22nd St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/64b604_0acd871923c148fc9ac34669bba9d555~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_ab9effe1c846454e9f815a0b0b244afa~mv2.jpeg','https://static.wixstatic.com/media/64b604_0a41664ee9de493d9406eb8de0137e4b~mv2.jpeg','https://static.wixstatic.com/media/64b604_3481bfac8a5e4193abdebf38db3b8b0d~mv2.jpeg','https://static.wixstatic.com/media/64b604_31d43e469fb24e829f042038cd8c7051~mv2.jpeg','https://static.wixstatic.com/media/64b604_b3cd486bbba14662824b7181ba692dd0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a5454592e11149638b248519e3cc4cef~mv2.jpeg','https://static.wixstatic.com/media/64b604_2eb9ee81fc7e4357ab705f5ba81bb7f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_91649c751d474747b1d0ba7c0b02dea8~mv2.jpeg','https://static.wixstatic.com/media/64b604_b74b9055d43740c5a95ac309082c131c~mv2.jpeg','https://static.wixstatic.com/media/64b604_d625caddfa3f474fadf462e59e003ea9~mv2.jpeg','https://static.wixstatic.com/media/64b604_22159d00804142bdbb12fadf21bf8fab~mv2.jpeg','https://static.wixstatic.com/media/64b604_4288b039074b445ca7d3f43578495e28~mv2.jpeg','https://static.wixstatic.com/media/64b604_f5bd546167d64dde9014fa90839e1209~mv2.jpeg','https://static.wixstatic.com/media/64b604_c40e638c5a1146f5a911cebf1874446b~mv2.jpeg','https://static.wixstatic.com/media/64b604_f9eabb30b1934ac49409d1fc7d8a92e1~mv2.jpeg','https://static.wixstatic.com/media/64b604_4b9cdeed94464bc2af63ede625a517d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_7ce70a731e8e4a1fb55c227873fd010e~mv2.jpeg','https://static.wixstatic.com/media/64b604_30266c5034114e1a973f314e68fc07bf~mv2.jpeg','https://static.wixstatic.com/media/64b604_a8cad9bf8a1b40128fb9badd764c355b~mv2.jpeg','https://static.wixstatic.com/media/64b604_28ba25f57cf34c74989e31146d2c7db8~mv2.jpeg']
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