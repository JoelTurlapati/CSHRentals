// @ts-nocheck
class CshPortfolioHighend extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    var PORTFOLIO = 'Portfolio 4 — High-End Portfolio';

    // ── QuickBooks-style P&L (properties as columns) ──
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['1103 22nd St NW','225 Grandview Ave NW','244 Harter Ave NW','2631 Demington Ave NW','300 Montrose Ave NW','426 Vince Ave NW','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[21400,13500,17510,0,18920,11985,83315]},
          {t:'item',       label:'Late Fee collected',     v:[0,0,0,0,0,60,60]},
          {t:'item',       label:'LTR Cash Receipts',      v:[0,2750,0,2800,3756.67,1344,10650.67]},
          {t:'item',       label:'Security Deposit Income',v:[0,1600,0,1750,2300,2000,7650]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[21400,17850,17510,4550,24976.67,15389,101675.67]},
          {t:'total',      label:'Total for Income',       v:[21400,17850,17510,4550,24976.67,15389,101675.67]},
          {t:'total',      label:'Gross Profit',           v:[21400,17850,17510,4550,24976.67,15389,101675.67]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Advertising',            v:[0,0,0,0,0,100,100]},
          {t:'item',       label:'Repair Labor',           v:[748,1688.52,125,22149.13,1882.82,2717.83,29311.30]},
          {t:'item',       label:'Repair Materials',       v:[0,0,0,0,0,0,0]},
          {t:'item',       label:'Taxes - Real Estate',    v:[2370.24,3083.49,2246.60,2267.90,2127.06,2136.58,14231.87]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[3118.24,4772.01,2371.60,24417.03,4009.88,4954.41,43643.17]},
          {t:'total',      label:'Total for Expenses',     v:[3118.24,4772.01,2371.60,24417.03,4009.88,4954.41,43643.17]},
          {t:'noi',        label:'Net Operating Income',   v:[18281.76,13077.99,15138.40,-19867.03,20966.79,10434.59,58032.50]},
          {t:'noi',        label:'Net Income',             v:[18281.76,13077.99,15138.40,-19867.03,20966.79,10434.59,58032.50]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['1103 22nd St NW','225 Grandview Ave NW','244 Harter Ave NW','2631 Demington Ave NW','300 Montrose Ave NW','426 Vince Ave NW','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[19800,19420,16260,55200,27800,18600,157080]},
          {t:'item',       label:'Late Fee collected',     v:[0,0,50,0,50,150,250]},
          {t:'item',       label:'LTR Cash Receipts',      v:[1800,0,3280,0,0,0,5080]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[21600,19420,19590,55200,27850,18750,162410]},
          {t:'total',      label:'Total for Income',       v:[21600,19420,19590,55200,27850,18750,162410]},
          {t:'total',      label:'Gross Profit',           v:[21600,19420,19590,55200,27850,18750,162410]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Pest Control',           v:[511.20,0,0,42.60,0,0,553.80]},
          {t:'item',       label:'Repair & Maintenance',   v:[0,0,0,0,0,144.98,144.98]},
          {t:'item',       label:'Repair Labor',           v:[1876.73,1912.95,2279.61,7695.72,3235.10,0,17000.11]},
          {t:'item',       label:'Repair Materials',       v:[1467.42,0,0,665.05,0,0,2132.47]},
          {t:'item',       label:'Taxes - Real Estate',    v:[2434.08,1688.86,2383.58,2823.44,2305.42,2240.94,13876.32]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[6289.43,3601.81,4663.19,11226.81,5540.52,2385.92,33707.68]},
          {t:'total',      label:'Total for Expenses',     v:[6289.43,3601.81,4663.19,11226.81,5540.52,2385.92,33707.68]},
          {t:'noi',        label:'Net Operating Income',   v:[15310.57,15818.19,14926.81,43973.19,22309.48,16364.08,128702.32]},
          {t:'noi',        label:'Net Income',             v:[15310.57,15818.19,14926.81,43973.19,22309.48,16364.08,128702.32]}
        ]
      }
    };

    // ── Rent Roll ──
    var RENT_ROLL = [
      {address:'426 Vince Ave NW',       value:160000,  monthlyRent:1550, annualizedRent:18600},
      {address:'244 Harter Ave NW',      value:199000,  monthlyRent:1640, annualizedRent:19680},
      {address:'300 Montrose Ave NW',    value:225000,  monthlyRent:2330, annualizedRent:27960},
      {address:'2631 Demington Ave NW',  value:210000,  monthlyRent:2100, annualizedRent:25200},
      {address:'1103 22nd St NW',        value:210000,  monthlyRent:1850, annualizedRent:22200},
      {address:'225 Grandview Ave NW',   value:176300,  monthlyRent:1600, annualizedRent:19200}
    ];

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=1fXnVqpz8f8t9n940tE2uN4vGxvLXMGc&ehbc=2E312F&noprof=1';

    var MAP_PROPS = [
      {label:'426 Vince Ave NW',      addr:'426 Vince Ave NW, Canton, OH'},
      {label:'244 Harter Ave NW',     addr:'244 Harter Ave NW, Canton, OH'},
      {label:'300 Montrose Ave NW',   addr:'300 Montrose Ave NW, Canton, OH'},
      {label:'2631 Demington Ave NW', addr:'2631 Demington Ave NW, Canton, OH'},
      {label:'1103 22nd St NW',       addr:'1103 22nd St NW, Canton, OH'},
      {label:'225 Grandview Ave NW',  addr:'225 Grandview Ave NW, Canton, OH'}
    ];

    // ── EXISTING property data preserved exactly ──
    var PROPERTIES = [
      {
        address: '426 Vince Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_3ac1ab9c458848ff8a621af4c3385070~mv2.jpg',
        photos: [
          'https://static.wixstatic.com/media/d9828b_3ac1ab9c458848ff8a621af4c3385070~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_91181a946ee7448fb5525cc2baee3f8b~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9ab220a06f1346d6b909584eeca402d4~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_720a6e9a74154ccaa5bbaede9136e421~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_eb8e0337c9074bedb72058772e70186d~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_af4cc8b943e54faebece087a5a3d154c~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_f6f3dd53068e4e98879eb6e225caf644~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_fcca44ebd6fe4fafb80ea0ac6f79e0a6~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_9e62b2e28fff4e1c88ad3389894d08ef~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_892736adbb4f43349ba517a30b0e2221~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_5ecb84710ce04142bf64b5153840e602~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_349a755f695d40059ee6441da9bd0424~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_eec40946a4ce4df7ae4e7a7cfdcafafe~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_1aeab20eb7014eafa683790790910a39~mv2.jpg',
          'https://static.wixstatic.com/media/d9828b_c8cfe8d505a6465fa8fe69400f93e5fe~mv2.jpg'
        ]
      },
      {
        address: '244 Harter Ave NW', city: 'Canton, OH 44709', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_efba128250fb46a1bc057711831a345a~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_648f327a4a1f498286de9944091cd332~mv2.jpg','https://static.wixstatic.com/media/d9828b_64c39f05353f44bf9375108d72e54049~mv2.jpg','https://static.wixstatic.com/media/d9828b_efba128250fb46a1bc057711831a345a~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ee9e7cb6291446496a26e8a70a470f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_1b4c41145eae4514b55b56467aae3818~mv2.jpg','https://static.wixstatic.com/media/d9828b_47500c0237fe463e9a5effe7905584a7~mv2.jpg','https://static.wixstatic.com/media/d9828b_06275a48b7c44ddcb68c2548a658da06~mv2.jpg','https://static.wixstatic.com/media/d9828b_5b79f3bfccd84256bf8d0844e2c0048c~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf46db9379434a55bedce7d8b5158c0b~mv2.jpg','https://static.wixstatic.com/media/d9828b_891dffc139ba4ef985475e15e5781f41~mv2.jpg','https://static.wixstatic.com/media/d9828b_bc9b0087dc1343b7936fb1a73257eb78~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc0f7f9c6290426b92c575c031de96e5~mv2.jpg','https://static.wixstatic.com/media/d9828b_eb0256858ce94ef19a908dccf9bf10f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9399560250a49e59901e4a46b87f8c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_ef4b64b1276f4866acd383e434309f73~mv2.jpg','https://static.wixstatic.com/media/d9828b_cb51d4667e9d41edb456b89e7e6d37ac~mv2.jpg','https://static.wixstatic.com/media/d9828b_8b9193148a5f43e8b5f1be926e3a994d~mv2.jpg','https://static.wixstatic.com/media/d9828b_4eba7d74f2fc4d5eb4814a9ca550095d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c1c207bb96094d7ab766da130d4eb54e~mv2.jpg','https://static.wixstatic.com/media/d9828b_4a53b506c638428494a92388c490f515~mv2.jpg','https://static.wixstatic.com/media/d9828b_9347c8866e1749958cf01c071b3512ad~mv2.jpg','https://static.wixstatic.com/media/d9828b_95c97edbbe9b4af6b2efc8d23d1f9ff4~mv2.jpg','https://static.wixstatic.com/media/d9828b_9215064a1b4f4c2e9788ecaa985cc370~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a03d7ab7f364f168ef9c370c03a969d~mv2.jpg','https://static.wixstatic.com/media/d9828b_3f46d72c33784cf1b20eef2ac8b43b63~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9a74a566544411e996472184ffbab26~mv2.jpg']
      },
      {
        address: '300 Montrose Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_b2ee301072d545a0b45f36d81a9abb46~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_b2ee301072d545a0b45f36d81a9abb46~mv2.jpg','https://static.wixstatic.com/media/d9828b_665144c36b43441788b8d08109e77aec~mv2.jpg','https://static.wixstatic.com/media/d9828b_787b0cec2bd84ae6a37b445a1fb3c326~mv2.jpg','https://static.wixstatic.com/media/d9828b_8805201b774a4bcb88b92cf83733b395~mv2.jpg','https://static.wixstatic.com/media/d9828b_f98d3bdcf53a425e8da821dcd0f75fbd~mv2.jpg','https://static.wixstatic.com/media/d9828b_74c084fd5280497a975cb116d7cfa8be~mv2.jpg','https://static.wixstatic.com/media/d9828b_8170026ee9c64e369fc57d37af29e02c~mv2.jpg']
      },
      {
        address: '2631 Demington Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_88702235d5204eb8a2062465eceac5f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_f8f0a11cb1c7467fa8dc8331962c0a88~mv2.jpg','https://static.wixstatic.com/media/d9828b_72f0431cf10b4593b579924de6b36c34~mv2.jpg','https://static.wixstatic.com/media/d9828b_ccaf87b6733f476e81372e810e924a4b~mv2.jpg','https://static.wixstatic.com/media/d9828b_464d877f650d4a1eb025cecd0e66c08d~mv2.jpg','https://static.wixstatic.com/media/d9828b_7147464688fc42de96d874c72a167c6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c54592dea6684f10bed556f353837a6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6bac556c9184109a493e123efae98fa~mv2.jpg','https://static.wixstatic.com/media/d9828b_267a37a567a54dc283a11cf9da243555~mv2.jpg','https://static.wixstatic.com/media/d9828b_c59158f9271c4497a3024de73b44c9ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_45740064921c4ec88df2219008df6eda~mv2.jpg','https://static.wixstatic.com/media/d9828b_4916395697d64c599fc610663bc68a48~mv2.jpg','https://static.wixstatic.com/media/d9828b_8f277d048e404f0a818d4e257de8cd1a~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f98d257421640a4b9c771d859eab93e~mv2.jpg','https://static.wixstatic.com/media/d9828b_e73a21e2ec4c4dc9917cd65a8d3bb62b~mv2.jpg','https://static.wixstatic.com/media/d9828b_74162ffc3e8b431c8b14254aee25ef71~mv2.jpg','https://static.wixstatic.com/media/d9828b_f9b9250c154d451b8f1dbdccd42f062c~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d3bfddd5b4741adbd7396696e7d0a9a~mv2.jpg','https://static.wixstatic.com/media/d9828b_795f15ea9c2442dfbd16bf06c1f743d0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8560fb4ea56c4b25b8551220f8b67ba5~mv2.jpg','https://static.wixstatic.com/media/d9828b_9625b1b5eb004118b087c1453eabf856~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0111508ee804ea1ad3fbcfe690b95c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_10b0b23bc159436dac64204e2a2e02bf~mv2.jpg','https://static.wixstatic.com/media/d9828b_3518999290d0444dac4b4337738e20e0~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6daf260ec0348d588816030ac681297~mv2.jpg','https://static.wixstatic.com/media/d9828b_544633d33bb641ad9c0ffa241ecac34c~mv2.jpg','https://static.wixstatic.com/media/d9828b_13451ed4cda542c1a8f48287b551b930~mv2.jpg','https://static.wixstatic.com/media/d9828b_1e080b62ad954b2685be55165ccc5450~mv2.jpg','https://static.wixstatic.com/media/d9828b_b74c87ba04534f4cbe2df8f9c403efb5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2c5527cb00c4a19bd5ce79edec4b317~mv2.jpg']
      },
      {
        address: '1103 22nd St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_71a3b74d3b3d442aae281f58680e4cb2~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_71a3b74d3b3d442aae281f58680e4cb2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d65632d575ba4edd94330d02a736c424~mv2.jpg','https://static.wixstatic.com/media/d9828b_448bdb62e8fb43f78cbfab44290feab0~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f10fb333a6e404f9a4c7f48cf3d5dbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ad2066f1fb24c0293bec63db1a9257e~mv2.jpg','https://static.wixstatic.com/media/d9828b_84e8bfd031914903aeeffd1ad6a481be~mv2.jpg','https://static.wixstatic.com/media/d9828b_4b883df4b50c424eaff1b7c533c830c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_72da6f1bcf634408b0292130940c59fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_50767d449dee4ef3a7a3a2ff8ff002ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_92a4ca6e1c284bddb0ad18003de9c79b~mv2.jpg','https://static.wixstatic.com/media/d9828b_5220d652148e4bf0b45fb64e7c240061~mv2.jpg','https://static.wixstatic.com/media/d9828b_653253c032074c9db91203a2b3f3787d~mv2.jpg','https://static.wixstatic.com/media/d9828b_75727159a300441487bfd6a827efed78~mv2.jpg','https://static.wixstatic.com/media/d9828b_303d376c4bf54e3b880b2fcfcb4cef30~mv2.jpg','https://static.wixstatic.com/media/d9828b_799aa977c3f2402c808e76139b42c48f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b237ec795718450bbd52bff29b9d2174~mv2.jpg','https://static.wixstatic.com/media/d9828b_82aaf11ab79a460bacc7bcd3520ebd59~mv2.jpg','https://static.wixstatic.com/media/d9828b_c48c597fd2c74c578671dab233d341f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_f9900bcf255247d8aa93117dca41fb41~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c6205f54d45448584e95d28159c0fec~mv2.jpg','https://static.wixstatic.com/media/d9828b_a22e9b9c9ab4416b8243789ba9d48b40~mv2.jpg','https://static.wixstatic.com/media/d9828b_6234c0dad7fc4e169f99517d84b51125~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2cd9607fcca41fba499882584075db1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7d8caecbe2648ceb39e751fb4ae6a55~mv2.jpg','https://static.wixstatic.com/media/d9828b_03a0230f31954871b4ecfe86fb454f18~mv2.jpg','https://static.wixstatic.com/media/d9828b_cdb7994f5c984fe0b36bbe285d9d691c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e99c11e9436045ae9ad1324b8a3b65c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_f384fc42037c4ad4aaf809de34283b7d~mv2.jpg','https://static.wixstatic.com/media/d9828b_5607c830172d439da27deb563cd66d83~mv2.jpg','https://static.wixstatic.com/media/d9828b_b33feb8eb1eb4a1586d41b61f54c76e2~mv2.jpg','https://static.wixstatic.com/media/d9828b_93de23d06d284763a39098dd5882424c~mv2.jpg','https://static.wixstatic.com/media/d9828b_93f07a243a954938953503403361b269~mv2.jpg','https://static.wixstatic.com/media/d9828b_0a517ff7a03744f8822d8b3dc885f8ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_07da0bd6bce9433ba9e962dcd262aae9~mv2.jpg']
      },
      {
        address: '225 Grandview Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad8affc5ad544ca6b4841c18b1a0578b~mv2.jpg','https://static.wixstatic.com/media/d9828b_d07307a9b1e24bdd8db8181aefd8ff48~mv2.jpg','https://static.wixstatic.com/media/d9828b_7157b6d373b2424e9314024e213616d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_198ed9a80d124cd38aea6e7b94d35d1a~mv2.jpg','https://static.wixstatic.com/media/d9828b_2d4f2849e1f849f193293ebbc54eccb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_94c0f98e9d54433ebf1abf65ba232f52~mv2.jpg','https://static.wixstatic.com/media/d9828b_1aa312035d1c4e5a838470a769d2fdd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_947e41d8301d475595cb0c651bf563f3~mv2.jpg','https://static.wixstatic.com/media/d9828b_8a800582e11b4a62bf56ddb4495a7622~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4b538fa7a1b48228d6f1be0798e8b7e~mv2.jpg','https://static.wixstatic.com/media/d9828b_afaab7537d504f499583f4808742f66d~mv2.jpg','https://static.wixstatic.com/media/d9828b_405af1fe0db44c1d93410f62e2ec8326~mv2.jpg','https://static.wixstatic.com/media/d9828b_905b5b6ff8e24e4c9691d4651d4efa86~mv2.jpg','https://static.wixstatic.com/media/d9828b_89521d82ccee46b088071c3037c66632~mv2.jpg','https://static.wixstatic.com/media/d9828b_b32f3036844a46dc8101ad0ea5f82e88~mv2.jpg','https://static.wixstatic.com/media/d9828b_8bbe903330924bff8efc47de35f55d6e~mv2.jpg','https://static.wixstatic.com/media/d9828b_460da68c701948dcb98e0b43edd07412~mv2.jpg','https://static.wixstatic.com/media/d9828b_b256564b75ba438baccd946069aed89f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9f0dde5d3d84987a033a0f9e1a3e38a~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb5f8ccedf974e5ba2721856abb32bdf~mv2.jpg','https://static.wixstatic.com/media/d9828b_b7b68fcb17bc439e97e5f80e26128f47~mv2.jpg','https://static.wixstatic.com/media/d9828b_efac8046b8d54a50919dbc37895f3b8e~mv2.jpg','https://static.wixstatic.com/media/d9828b_b1ae5b7fab084c6293519e4f4230cf62~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a20681c35b8479aa930f4b87d929d3a~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5d5fd9dcaaf429bad6f55c460a2ec88~mv2.jpg','https://static.wixstatic.com/media/d9828b_4280f4a06a024704b09e1f926e4abd49~mv2.jpg','https://static.wixstatic.com/media/d9828b_eefa96ac1fd0435a916b3b8360ad6704~mv2.jpg','https://static.wixstatic.com/media/d9828b_b38d08347f574d9ca885416b5df893d9~mv2.jpg','https://static.wixstatic.com/media/d9828b_b858002e5e5144e8b722bca7f2b1aa06~mv2.jpg','https://static.wixstatic.com/media/d9828b_90fc4e5e9cf7413e8de93edc4eb1ad39~mv2.jpg','https://static.wixstatic.com/media/d9828b_9f28af2a5c7641e3b9f1ae4803ed3f5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c2d0342af9bf40ab8558a719e52796ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c40b48e43d842819e38ad85c4282f6d~mv2.jpg','https://static.wixstatic.com/media/d9828b_e4bad68ae7234a40b5b061ffbae0de90~mv2.jpg','https://static.wixstatic.com/media/d9828b_5c68b6eb3ead477ca616d1588fda2709~mv2.jpg','https://static.wixstatic.com/media/d9828b_42730e5381814043b258c3a22b85b83d~mv2.jpg','https://static.wixstatic.com/media/d9828b_9861388d24f24d02b940467962b795ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_6e0fcc6850a748ec81cfb07f4f63896c~mv2.jpg','https://static.wixstatic.com/media/d9828b_993166ca24274a8b80e6d1a943cb351d~mv2.jpg','https://static.wixstatic.com/media/d9828b_a3afd9c8f8d64e6aaa3d83096734a13b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7d0ed0c91cb141b9b505e9ed758b2bda~mv2.jpg','https://static.wixstatic.com/media/d9828b_7d3cf061cd5d48c1a11b71f5c3298b05~mv2.jpg','https://static.wixstatic.com/media/d9828b_15e5bc6ee5904890b5637787f22fdbdb~mv2.jpg','https://static.wixstatic.com/media/d9828b_3943275f75e8452d973a26c9577ae081~mv2.jpg','https://static.wixstatic.com/media/d9828b_7222951b5f354b288fb0ebb28392811b~mv2.jpg','https://static.wixstatic.com/media/d9828b_182f94ca46684c16bb25674b71457430~mv2.jpg','https://static.wixstatic.com/media/d9828b_f933ee0ad3494687a53196063bfea3b3~mv2.jpg']
      }
    ];

    var RENTS = {'426 Vince Ave NW':'$1,550','244 Harter Ave NW':'$1,640','300 Montrose Ave NW':'$2,330','2631 Demington Ave NW':'$2,100','1103 22nd St NW':'$1,850','225 Grandview Ave NW':'$1,600'};

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
      lines.push('"Portfolio 4 Total",' + tv + ',' + tm + ',' + ty);
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
csh-portfolio-highend{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
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

/* ── FINANCIAL REPORTS ── */
.reports-section{background:#fff;border-bottom:2px solid rgba(10,30,60,.08);padding:32px 36px}
.reports-section__inner{max-width:900px;margin:0 auto}
.reports-section__label{font-size:11px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:#5a6b85;margin-bottom:18px}
.reports-section__btns{display:flex;gap:14px;flex-wrap:wrap}
.report-btn{flex:1;min-width:200px;padding:18px 22px;background:#0d1f35;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;font-family:'Inter','Segoe UI',Arial,sans-serif;transition:background .2s,transform .15s;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 2px 10px rgba(10,30,60,.18)}
.report-btn:hover{background:#1a3557;transform:translateY(-2px)}

/* ── MAP ── */
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

/* ── PROPERTY GRID ── */
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

/* ── P&L MODAL (wide QuickBooks table) ── */
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:12px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:16px;width:100%;max-width:1100px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:16px 56px 14px 22px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.3}
.pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:4px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:13px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow:auto;padding:18px;flex:1}
.pl-modal__foot{padding:12px 22px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 16px 16px;display:flex;justify-content:flex-end;flex-shrink:0}

/* ── QuickBooks P&L Table ── */
.pl-class-table{width:100%;border-collapse:collapse;font-size:12.5px;font-family:'Inter','Segoe UI',Arial,sans-serif}
.pl-class-table thead tr{background:#0a1628}
.pl-ct-th-lbl{text-align:left;padding:9px 10px;color:rgba(255,255,255,.7);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;min-width:140px;position:sticky;left:0;background:#0a1628;z-index:2}
.pl-ct-th-val{text-align:right;padding:9px 8px;color:rgba(255,255,255,.7);font-size:11px;font-weight:700;letter-spacing:.08em;white-space:nowrap;min-width:110px}
.pl-ct-th-tot{text-align:right;padding:9px 10px;color:#c8962a;font-size:11px;font-weight:800;letter-spacing:.08em;white-space:nowrap;min-width:110px}
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

/* ── RENT ROLL MODAL ── */
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

/* ── DOWNLOAD BUTTON ── */
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
    <a class="csh-hdr__email" href="mailto:customstarkhomes@gmail.com" title="Email Us">&#9993;</a>
  </nav>
  <button class="csh-hdr__burger" id="csh-burger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</header>
<div class="csh-mob-nav" id="csh-mob-nav">
  <div class="csh-mob-nav__inner">
    <a class="csh-mob-nav__link" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-mob-nav__link csh-mob-nav__link--gold" href="/contact">Contact</a>
    <a class="csh-mob-nav__link" href="mailto:customstarkhomes@gmail.com">&#9993;&nbsp; Email Us</a>
  </div>
</div>

<a class="csh-back" href="/">&larr; Back to All Portfolios</a>

<section class="hero">
  <div class="hero__badge">Portfolio 4 &mdash; High-End</div>
  <h1 class="hero__title">Portfolio 4 &mdash; High-End Portfolio</h1>
  <p class="hero__sub">6 premium rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
</section>

<!-- ══ FINANCIAL REPORTS ══ -->
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

<!-- ══ MAP ══ -->
<section class="map-wrap">
  <div class="map-container">
    <div class="map-header">
      <div class="map-header__title">Portfolio 4 &mdash; High-End Portfolio &mdash; Property Locations</div>
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

<div class="section-head"><h2>Properties</h2><span>6 homes &middot; $11,070/mo &middot; $132,840 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>

<!-- ══ P&L MODAL ══ -->
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

<!-- ══ RENT ROLL MODAL ══ -->
<div id="rr-modal" class="rr-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="rr-modal__overlay" id="rr-modal-overlay"></div>
  <div class="rr-modal__box">
    <div class="rr-modal__head">
      <div class="rr-modal__title">Portfolio 4 &mdash; High-End Portfolio &mdash; Rent Roll</div>
      <div class="rr-modal__sub">High-End Portfolio &mdash; 6 Properties</div>
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
        self.querySelectorAll('.map-prop-item').forEach(function(x) { x.classList.remove('active'); });
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
      for (var ci = 0; ci < propCount; ci++) {
        html += '<th class="pl-ct-th-val">' + d.cols[ci] + '</th>';
      }
      html += '<th class="pl-ct-th-tot">Total</th></tr></thead><tbody>';

      d.rows.forEach(function(row) {
        var t = row.t;
        var cls = {'section':'pl-ct-section','group-hdr':'pl-ct-group-hdr','group':'pl-ct-group','item':'pl-ct-item','subtotal':'pl-ct-subtotal','total':'pl-ct-total','noi':'pl-ct-noi'}[t] || 'pl-ct-item';
        var isIndent = (t === 'item' || t === 'subtotal');
        var isForce  = (t !== 'item' && t !== 'group-hdr' && t !== 'section');
        var isDolTot = (t !== 'item');

        html += '<tr class="' + cls + '"><td class="pl-ct-lbl' + (isIndent ? ' pl-ct-ind' : '') + '">' + row.label + '</td>';
        if (row.v) {
          for (var vi = 0; vi < propCount; vi++) {
            html += '<td class="pl-ct-val">' + fv(row.v[vi], false, isForce) + '</td>';
          }
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
      if (_currentPlYear) downloadCSV('Portfolio4_PL_' + _currentPlYear + '.csv', buildPLCsv(_currentPlYear));
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
      var html = '<div class="rr-portfolio-badge">Portfolio 4 &mdash; 6 Properties</div><div class="rr-table-wrap"><table class="rr-table">' +
        '<thead><tr><th>Property</th><th>Property Value</th><th>Monthly Rent</th><th>Annualized Rent</th></tr></thead><tbody>';
      RENT_ROLL.forEach(function(r) {
        html += '<tr><td>' + r.address + '</td>' +
          '<td>$' + r.value.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.monthlyRent.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.annualizedRent.toLocaleString('en-US') + '</td></tr>';
      });
      html += '</tbody><tfoot><tr><td>Portfolio 4 Total</td>' +
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
      downloadCSV('Portfolio4_RentRoll.csv', buildRRCsv());
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
customElements.define('csh-portfolio-highend', CshPortfolioHighend);
