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

    var PORTFOLIO = 'Portfolio 4 — Individual Home Sale Opportunities';

    // ── QuickBooks-style P&L (properties as columns) ──
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['1103 22nd St NE','225 Grandview Ave NW','244 Harter Ave NW','2631 Demington Ave NW','300 Montrose Ave NW','426 Vince Ave NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[21400,13500,17510,0,18920,11985,16850,3400,103565]},
          {t:'item',       label:'Late Fee collected',     v:[0,0,0,0,0,60,150,60,270]},
          {t:'item',       label:'LTR Cash Receipts',      v:[0,2750,0,2800,3756.67,1344,0,9983.39,20634.06]},
          {t:'item',       label:'Security Deposit Income',v:[0,1600,0,1750,2300,2000,0,0,7650]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[21400,17850,17510,4550,24976.67,15389,17000,13443.39,132119.06]},
          {t:'total',      label:'Total for Income',       v:[21400,17850,17510,4550,24976.67,15389,17000,13443.39,132119.06]},
          {t:'total',      label:'Gross Profit',           v:[21400,17850,17510,4550,24976.67,15389,17000,13443.39,132119.06]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Advertising',            v:[0,0,0,0,0,100,0,0,100]},
          {t:'item',       label:'Repair Labor',           v:[748,1688.52,125,22149.13,1882.82,2717.83,3618.36,2220,35149.66]},
          {t:'item',       label:'Repair Materials',       v:[0,0,0,0,0,0,0,0,0]},
          {t:'item',       label:'Taxes - Real Estate',    v:[2370.24,3083.49,2246.6,2267.9,2127.06,2136.58,1196.14,750.4,16178.41]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[3118.24,4772.01,2371.6,24417.03,4009.88,4954.41,4814.5,2970.4,51428.07]},
          {t:'total',      label:'Total for Expenses',     v:[3118.24,4772.01,2371.6,24417.03,4009.88,4954.41,4814.5,2970.4,51428.07]},
          {t:'noi',        label:'Net Operating Income',   v:[18281.76,13077.99,15138.4,-19867.03,20966.79,10434.59,12185.5,10472.99,80690.99]},
          {t:'noi',        label:'Net Income',             v:[18281.76,13077.99,15138.4,-19867.03,20966.79,10434.59,12185.5,10472.99,80690.99]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['1103 22nd St NE','225 Grandview Ave NW','244 Harter Ave NW','2631 Demington Ave NW','300 Montrose Ave NW','426 Vince Ave NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',              v:[19800,19420,16260,55200,27800,18600,7075,0,164155]},
          {t:'item',       label:'Late Fee collected',     v:[0,0,50,0,50,150,530,0,780]},
          {t:'item',       label:'LTR Cash Receipts',      v:[1800,0,3280,0,0,0,5500,14500,25080]},
          {t:'subtotal',   label:'Total for LTR Rents',    v:[21600,19420,19590,55200,27850,18750,13105,14500,190015]},
          {t:'total',      label:'Total for Income',       v:[21600,19420,19590,55200,27850,18750,13105,14500,190015]},
          {t:'total',      label:'Gross Profit',           v:[21600,19420,19590,55200,27850,18750,13105,14500,190015]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Pest Control',           v:[511.2,0,0,42.6,0,0,0,0,553.8]},
          {t:'item',       label:'Repair & Maintenance',   v:[0,0,0,0,0,144.98,736.84,0,881.82]},
          {t:'item',       label:'Repair Labor',           v:[1876.73,1912.95,2279.61,7695.72,3235.1,0,900,229,18129.11]},
          {t:'item',       label:'Repair Materials',       v:[1467.42,0,0,665.05,0,0,0,0,2132.47]},
          {t:'item',       label:'Taxes - Real Estate',    v:[2434.08,1688.86,2383.58,2823.44,2305.42,2240.94,1906.92,1769.82,17553.06]},
          {t:'subtotal',   label:'Total for LTR Expenses', v:[6289.43,3601.81,4663.19,11226.81,5540.52,2385.92,3543.76,1998.82,39250.26]},
          {t:'total',      label:'Total for Expenses',     v:[6289.43,3601.81,4663.19,11226.81,5540.52,2385.92,3543.76,1998.82,39250.26]},
          {t:'noi',        label:'Net Operating Income',   v:[15310.57,15818.19,14926.81,43973.19,22309.48,16364.08,9561.24,12501.18,150764.74]},
          {t:'noi',        label:'Net Income',             v:[15310.57,15818.19,14926.81,43973.19,22309.48,16364.08,9561.24,12501.18,150764.74]}
        ]
      }
    };

    // ── Rent Roll ──
    var RENT_ROLL = [
      {address:'426 Vince Ave NW',      value:185000, monthlyRent:1550, annualizedRent:18600},
      {address:'244 Harter Ave NW',     value:199000, monthlyRent:1640, annualizedRent:19680},
      {address:'300 Montrose Ave NW',   value:225000, monthlyRent:2310, annualizedRent:27720},
      {address:'2631 Demington Ave NW', value:204200, monthlyRent:2110, annualizedRent:25320},
      {address:'1103 22nd St NE',       value:215000, monthlyRent:1860, annualizedRent:22320},
      {address:'225 Grandview Ave NW',  value:180000, monthlyRent:1610, annualizedRent:19320},
      {address:'307 Bellflower Ave NW', value:165000, monthlyRent:1385, annualizedRent:16620},
      {address:'635 Greenfield Ave SW', value:122000, monthlyRent:1200, annualizedRent:14400}
    ];

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=1fXnVqpz8f8t9n940tE2uN4vGxvLXMGc&ehbc=2E312F&noprof=1';

    var MAP_PROPS = [
      {label:'426 Vince Ave NW',      addr:'426 Vince Ave NW, Canton, OH'},
      {label:'244 Harter Ave NW',     addr:'244 Harter Ave NW, Canton, OH'},
      {label:'300 Montrose Ave NW',   addr:'300 Montrose Ave NW, Canton, OH'},
      {label:'2631 Demington Ave NW', addr:'2631 Demington Ave NW, Canton, OH'},
      {label:'1103 22nd St NE',       addr:'1103 22nd St NE, Canton, OH'},
      {label:'225 Grandview Ave NW',  addr:'225 Grandview Ave NW, Canton, OH'},
      {label:'307 Bellflower Ave NW', addr:'307 Bellflower Ave NW, Canton, OH'},
      {label:'635 Greenfield Ave SW', addr:'635 Greenfield Ave SW, Canton, OH'}
    ];

    // ── EXISTING property data preserved exactly ──
    var PROPERTIES = [
      {
        address: '426 Vince Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_eba12b8701834579ba2a30b2bd122351~mv2.jpeg',
        photos: [
          'https://static.wixstatic.com/media/64b604_eba12b8701834579ba2a30b2bd122351~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_5c5ba752ff4646c6b00fc6dd89827b1c~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_c4ec0dc7cb38446f86df138a9c6a0f5a~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_51089ed1600a482cb87702f0ec07fed8~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_7355c96a38494f5796e0648481079f88~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_591d030d29f44f9e983b360e6f762205~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_db2ab02acb934c71a2cdd3fd72a9042d~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_9583e178a1f7447f923a4bfeef8cb902~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_1d92a913c57e48baa6bca58fcaed03fb~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_ed656dc3a4534e89b2a10b97225b9ec1~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_806eb427a203434f9cc21de9d6439071~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_34a224d1aa814281b0629bb25cbfcea2~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_40d7ef8b35484172b643ef296459b7b1~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_56d50afcf2504c01aa6c71dce792af91~mv2.jpeg',
          'https://static.wixstatic.com/media/64b604_2123278d7bf34b8dbdd44d0dc5d17728~mv2.jpeg'
        ]
      },
      {
        address: '244 Harter Ave NW', city: 'Canton, OH 44709', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/64b604_6f3b13e8bbd349f08d4d4cf641557285~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_90ef583aa5e84c388a54b1091014dae0~mv2.jpeg','https://static.wixstatic.com/media/64b604_00822bc3cdfc40ab81d2d003a24ccc08~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f3b13e8bbd349f08d4d4cf641557285~mv2.jpeg','https://static.wixstatic.com/media/64b604_3114d327b72645fa97eab03f94ebde26~mv2.jpeg','https://static.wixstatic.com/media/64b604_e7fd5bfc373042898b4fe3a1ad55ed40~mv2.jpeg','https://static.wixstatic.com/media/64b604_5ae14b86a4d84d0c930c721065a884cd~mv2.jpeg','https://static.wixstatic.com/media/64b604_d50486bd39f541d0829ad48d9624fc36~mv2.jpeg','https://static.wixstatic.com/media/64b604_6b6f48bfd41543eaae782ea6e1c36053~mv2.jpeg','https://static.wixstatic.com/media/64b604_69fbb18c527340c79538499f98f49c23~mv2.jpeg','https://static.wixstatic.com/media/64b604_37fa4f4a86b8432b8b85f7918984bd2d~mv2.jpeg','https://static.wixstatic.com/media/64b604_c24bfd4ec12b41fe84991bc3e63ee8d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_1b974879b77c43b6b06136ec35d6edf1~mv2.jpeg','https://static.wixstatic.com/media/64b604_37994c15069a49d1981d0ecaff7ad416~mv2.jpeg','https://static.wixstatic.com/media/64b604_c84bfd630ae144fc936e489eee06ca00~mv2.jpeg','https://static.wixstatic.com/media/64b604_1ae25194343c4c298c3a09dabe3a9ead~mv2.jpeg','https://static.wixstatic.com/media/64b604_1445e5a43fe74937b49dafbaeee196e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_1f9363c3b2e5456da9045656101ebaab~mv2.jpeg','https://static.wixstatic.com/media/64b604_64ebf62cc8dc48f2bf8f852251b48e5e~mv2.jpeg','https://static.wixstatic.com/media/64b604_20e9eb2188dc4c2ab118474ba0281394~mv2.jpeg','https://static.wixstatic.com/media/64b604_b21c5ff551424a0e88d4ac6649f68caa~mv2.jpeg','https://static.wixstatic.com/media/64b604_962bb5ba3b2a48b5912c88c1089e48ff~mv2.jpeg','https://static.wixstatic.com/media/64b604_f3bad1f041024f1a892d16646e2c8f50~mv2.jpeg','https://static.wixstatic.com/media/64b604_0e149eee9b8046fe8c7b60ca68fecb70~mv2.jpeg','https://static.wixstatic.com/media/64b604_c1904fa4e5f94047899694037fd3bffc~mv2.jpeg','https://static.wixstatic.com/media/64b604_23b197297ed447dcb2caeb7664845b25~mv2.jpeg','https://static.wixstatic.com/media/64b604_13a8df72f8cb4d78be6e0cc7cd7c4900~mv2.jpeg']
      },
      {
        address: '300 Montrose Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_43a78491c2fa4ae6a3f188962f2f050f~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_43a78491c2fa4ae6a3f188962f2f050f~mv2.jpeg','https://static.wixstatic.com/media/64b604_baf3ce80c20e49ffb217beffa610303d~mv2.jpeg','https://static.wixstatic.com/media/64b604_4e170876d7fe4455970a45edd7b24c4e~mv2.jpeg','https://static.wixstatic.com/media/64b604_420c5ea37894491aa1268955b4dbe477~mv2.jpeg','https://static.wixstatic.com/media/64b604_e54c559ccf1d473ebfd96d132b5c9f49~mv2.jpeg','https://static.wixstatic.com/media/64b604_88544770cdcd4d34b365148e73983bed~mv2.jpeg','https://static.wixstatic.com/media/64b604_d2d4fa86ea5249d4b872e1d5bac28794~mv2.jpeg']
      },
      {
        address: '2631 Demington Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_61fe0a5189f846eeba8977684cf0e234~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_61fe0a5189f846eeba8977684cf0e234~mv2.jpeg','https://static.wixstatic.com/media/64b604_0069c2873a524bc89cd1aea42b2980b5~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ad766a98dd9407dbb83a13b6d1fd184~mv2.jpeg','https://static.wixstatic.com/media/64b604_40c9bf393b3d4f749a44e931410e0c78~mv2.jpeg','https://static.wixstatic.com/media/64b604_bcca1d2e5c964859a8b5fd3b6d3cba01~mv2.jpeg','https://static.wixstatic.com/media/64b604_d3893dbdd5c34f91befaac34f0639893~mv2.jpeg','https://static.wixstatic.com/media/64b604_73c8a1bcc39442e693557bc1e255cdc9~mv2.jpeg','https://static.wixstatic.com/media/64b604_78d8a86ab6f14291af3907a3eb60179b~mv2.jpeg','https://static.wixstatic.com/media/64b604_e65785ef782d4d5a8a85e894959c12f9~mv2.jpeg','https://static.wixstatic.com/media/64b604_9aba48b8e95349ae8d617be0564895e1~mv2.jpeg','https://static.wixstatic.com/media/64b604_75788068be8e4414aa197fcbce6e2a29~mv2.jpeg','https://static.wixstatic.com/media/64b604_b9b8c35ea2364e4f9404b276796e8796~mv2.jpeg','https://static.wixstatic.com/media/64b604_fb03804ca5a74a239c03d0ac37065302~mv2.jpeg','https://static.wixstatic.com/media/64b604_f945bf0a34a64955b771c19507397c7a~mv2.jpeg','https://static.wixstatic.com/media/64b604_c72b1c3a4001490f93d0b7827b7e32ff~mv2.jpeg','https://static.wixstatic.com/media/64b604_e370f5616b354597a355f02ff5ab505e~mv2.jpeg','https://static.wixstatic.com/media/64b604_89949cc0cdbf4464a24e406de4038e03~mv2.jpeg','https://static.wixstatic.com/media/64b604_5471b913b90941ebbaa20125a61f1111~mv2.jpeg','https://static.wixstatic.com/media/64b604_2d809c18ba9d45679e6a3f8e21260b21~mv2.jpeg','https://static.wixstatic.com/media/64b604_9e961241e5d94972840742d28bd17444~mv2.jpeg','https://static.wixstatic.com/media/64b604_60d0af617484453a80aa9009226a1f30~mv2.jpeg','https://static.wixstatic.com/media/64b604_26184d57ed1e448aa03efe3f5a7940c0~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d383140cfa24d1fbeebf4b9f5ce5f00~mv2.jpeg','https://static.wixstatic.com/media/64b604_8b3b5b88f8f344c0827f6866ad79ea0f~mv2.jpeg']
      },
      {
        address: '1103 22nd St NE', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_76bbff0a2dd4455c926fc452585bde1e~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_76bbff0a2dd4455c926fc452585bde1e~mv2.jpeg','https://static.wixstatic.com/media/64b604_a21b55c6f877419786e840f45bf95572~mv2.jpeg','https://static.wixstatic.com/media/64b604_4158aa31afc24ad09ae12a938f99708d~mv2.jpeg','https://static.wixstatic.com/media/64b604_952be5d06ea04a69bc9932917a74d19c~mv2.jpeg','https://static.wixstatic.com/media/64b604_bbfaa84d83bf4e4fbc97b5a799f76d18~mv2.jpeg','https://static.wixstatic.com/media/64b604_25fde7f6758a49dd851071c9abd87170~mv2.jpeg','https://static.wixstatic.com/media/64b604_858943598a854afb9c8425a4d8cbf989~mv2.jpeg','https://static.wixstatic.com/media/64b604_5e1df9eb46c64a41b3f2611a74ffad51~mv2.jpeg','https://static.wixstatic.com/media/64b604_e2bd4ec4dfae416990a86602eb2ff1c6~mv2.jpeg','https://static.wixstatic.com/media/64b604_e35f9b98ece94f1982d7694839202499~mv2.jpeg','https://static.wixstatic.com/media/64b604_18c42f4ccd5542ecb9786f8e560de303~mv2.jpeg','https://static.wixstatic.com/media/64b604_653141e385664a22be517652a43bd2c8~mv2.jpeg','https://static.wixstatic.com/media/64b604_b72220dcdd1044ce9240db2afd3e8382~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5043b2fe8b64d6d80038f6ecbbbba21~mv2.jpeg','https://static.wixstatic.com/media/64b604_7f48637281c241469793bf02f0db2ce3~mv2.jpeg','https://static.wixstatic.com/media/64b604_55596bcc1f0047c2a8aec1729bde4e2f~mv2.jpeg','https://static.wixstatic.com/media/64b604_881b7744532f4dec9d1e1e3c77ae4895~mv2.jpeg','https://static.wixstatic.com/media/64b604_0d5e591a641446a499455d0585d48156~mv2.jpeg','https://static.wixstatic.com/media/64b604_4e558446595b45a0af73e4b76e70c52f~mv2.jpeg','https://static.wixstatic.com/media/64b604_e80fbedcc339475ebb405330d6b74ca0~mv2.jpeg','https://static.wixstatic.com/media/64b604_b37e33f5a0e9416bb3137b40e8e0805a~mv2.jpeg','https://static.wixstatic.com/media/64b604_e516178e38854a49a7f042dd4e13a49c~mv2.jpeg','https://static.wixstatic.com/media/64b604_3c55d63f4a7b4319b594d20b039b8db6~mv2.jpeg','https://static.wixstatic.com/media/64b604_dd00f679c8c9445f94ec47894a019dcb~mv2.jpeg','https://static.wixstatic.com/media/64b604_cd008bba65e24dd8872741a62163c56f~mv2.jpeg','https://static.wixstatic.com/media/64b604_b9e77a3f82114c5c8c7cfb97a73d614c~mv2.jpeg','https://static.wixstatic.com/media/64b604_4b6a317be8a4484d8492b4a1e17b771e~mv2.jpeg','https://static.wixstatic.com/media/64b604_c29086b2c47b415da31cccfd859bf630~mv2.jpeg','https://static.wixstatic.com/media/64b604_649ef8e05c0747b5b8f189cd1b615c0e~mv2.jpeg','https://static.wixstatic.com/media/64b604_c4a7357abb0040f5a6f04d9a6515daca~mv2.jpeg','https://static.wixstatic.com/media/64b604_3906ed17f5224d9fa1c8f9861e81a0f3~mv2.jpeg','https://static.wixstatic.com/media/64b604_231bbe11af204d2c84c6d8ee21942bd2~mv2.jpeg','https://static.wixstatic.com/media/64b604_9201bcf6490b49a69b2e653e38353ffe~mv2.jpeg','https://static.wixstatic.com/media/64b604_91b6e1c18d8a46cc85a483e5a1241a70~mv2.jpeg','https://static.wixstatic.com/media/64b604_f062d7adfd6845ae924de98893a0b232~mv2.jpeg','https://static.wixstatic.com/media/64b604_c40922155ac94e0599282de399bb8d7a~mv2.jpeg','https://static.wixstatic.com/media/64b604_c55fd3a9c1dc4c539ecd6c8fd122b8ef~mv2.jpeg','https://static.wixstatic.com/media/64b604_a7838173795244158e24820624faab35~mv2.jpeg','https://static.wixstatic.com/media/64b604_7dd1ee048f4a4f4da03929684c10f0df~mv2.jpeg','https://static.wixstatic.com/media/64b604_969b03153ead4c8aa08023963bc2cd41~mv2.jpeg','https://static.wixstatic.com/media/64b604_afe397eeb85c4b3aa60cc7a6bfb012a6~mv2.jpeg','https://static.wixstatic.com/media/64b604_1e6e8549af8943e8b5befb43f2897f08~mv2.jpeg','https://static.wixstatic.com/media/64b604_cc0a3462b8f84d09b56fab988b4596e6~mv2.jpeg','https://static.wixstatic.com/media/64b604_16a58ea46a7c45ada89f8289eeead560~mv2.jpeg','https://static.wixstatic.com/media/64b604_2c39b2f476b148d8a0c844951df2b93f~mv2.jpeg','https://static.wixstatic.com/media/64b604_0fe6d94bd58d405492ebf6031a7d86b9~mv2.jpeg','https://static.wixstatic.com/media/64b604_497da841561245b499e741aa3644281a~mv2.jpeg','https://static.wixstatic.com/media/64b604_910c301d13d84764bd60dfb6daa6c688~mv2.jpeg','https://static.wixstatic.com/media/64b604_3512b28a4de94d2e945acb112bdc814e~mv2.jpeg','https://static.wixstatic.com/media/64b604_eb4da5f61a704c79a3342d1545060d6e~mv2.jpeg','https://static.wixstatic.com/media/64b604_3946fac899f44200b42d3200d44dd6a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_99efbbc4ccac41e38ba8453262e4bcdd~mv2.jpeg','https://static.wixstatic.com/media/64b604_fbcfe09e11f646d6835681bad275e5ed~mv2.jpeg','https://static.wixstatic.com/media/64b604_6686006d805c43ca8145dfd97881a8e5~mv2.jpeg','https://static.wixstatic.com/media/64b604_cb0a8265fe0c4420b0a1ad624b0abed1~mv2.jpeg','https://static.wixstatic.com/media/64b604_05cb01c05e594b8b90dc9c121d3e2046~mv2.jpeg','https://static.wixstatic.com/media/64b604_3a8de9c0522f41b89d9d7f2d79b23c5c~mv2.jpeg','https://static.wixstatic.com/media/64b604_64b30ea300bc4f64bdde90927e911300~mv2.jpeg']
      },
      {
        address: '225 Grandview Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_4eebe50b98154767a4488689fc84477b~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_4eebe50b98154767a4488689fc84477b~mv2.jpeg','https://static.wixstatic.com/media/64b604_f49f94829a794373940073ba4bd4b744~mv2.jpeg','https://static.wixstatic.com/media/64b604_d387b51836ad4ec79c63ffc02666c3a9~mv2.jpeg','https://static.wixstatic.com/media/64b604_b6f688912dd544689f42e586c94bda6b~mv2.jpeg','https://static.wixstatic.com/media/64b604_fd3bcb8da39140ea9bff08efa0a77f45~mv2.jpeg','https://static.wixstatic.com/media/64b604_40faa1ee4a06425a95495d674320adc3~mv2.jpeg','https://static.wixstatic.com/media/64b604_4ef0b87e1e2645f38f49d757dccdc75a~mv2.jpeg','https://static.wixstatic.com/media/64b604_b0cab118c114438d809c1404d4dbf051~mv2.jpeg','https://static.wixstatic.com/media/64b604_15d2dde4b1744cd69fd59d909a844e8a~mv2.jpeg','https://static.wixstatic.com/media/64b604_eedc0bff02424094b8f6663a89081673~mv2.jpeg','https://static.wixstatic.com/media/64b604_4a49adab34be41b98645aa475bcddfa5~mv2.jpeg','https://static.wixstatic.com/media/64b604_3a571a259c5941f296bca56bca73be6e~mv2.jpeg','https://static.wixstatic.com/media/64b604_727dd17c911f440ead4f40801f3d87e1~mv2.jpeg','https://static.wixstatic.com/media/64b604_1c4f379bc58f4e7088b0bee7ace38766~mv2.jpeg','https://static.wixstatic.com/media/64b604_6cc0f5ef38cb437798a4345f1dfa25c1~mv2.jpeg','https://static.wixstatic.com/media/64b604_366e0a03372e4ddaa8848126ddd25c05~mv2.jpeg','https://static.wixstatic.com/media/64b604_38666275954c40cf93c1f9b295fb152d~mv2.jpeg','https://static.wixstatic.com/media/64b604_69879f6429b6444d8ad491636721691a~mv2.jpeg','https://static.wixstatic.com/media/64b604_aafbf6180299480abc88b62fbe6f8e9b~mv2.jpeg','https://static.wixstatic.com/media/64b604_0c06f32cabe64258b2b6e3a02b7efe1d~mv2.jpeg','https://static.wixstatic.com/media/64b604_e8a474f13d5b4f66bf5feb94dd0713e6~mv2.jpeg','https://static.wixstatic.com/media/64b604_ba862daf50264670ac24458a92dd843d~mv2.jpeg','https://static.wixstatic.com/media/64b604_71f2d7f601c84f2485f0b88957f6881d~mv2.jpeg','https://static.wixstatic.com/media/64b604_cf256d55bfb1466ca04e43f6174a13d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_dfe30bf75e0a47619f76aa5efc864aad~mv2.jpeg','https://static.wixstatic.com/media/64b604_68d4d02bf63e454e9db2f18e646cc573~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ba6861541784057a70655e945c4c840~mv2.jpeg','https://static.wixstatic.com/media/64b604_5cbc5cba2e5d45b99fc6ccf20260d28d~mv2.jpeg','https://static.wixstatic.com/media/64b604_a159273bfcc8402ebb9e7d69ffa45c87~mv2.jpeg','https://static.wixstatic.com/media/64b604_f18fddd3af8540c18a24c0faf25f39bb~mv2.jpeg','https://static.wixstatic.com/media/64b604_d9ce56c013bf40479c0d6986b5e53f40~mv2.jpeg','https://static.wixstatic.com/media/64b604_9557437739674e04a46472635be2b371~mv2.jpeg','https://static.wixstatic.com/media/64b604_a259e265fda94a599c7707f059d6f854~mv2.jpeg','https://static.wixstatic.com/media/64b604_1c018447db2d473394eab43860599cd9~mv2.jpeg','https://static.wixstatic.com/media/64b604_6d73a46f2efb403986541ecb89bb187d~mv2.jpeg','https://static.wixstatic.com/media/64b604_095b77f5ee8d4fd89029cff311ddc373~mv2.jpeg','https://static.wixstatic.com/media/64b604_e65fc250bbbc4ebab0a7df7ad6df5907~mv2.jpeg','https://static.wixstatic.com/media/64b604_e4360e673fe84b65ba0995a9ce8a3288~mv2.jpeg','https://static.wixstatic.com/media/64b604_51a90576d3f14d758517c44ba490fe76~mv2.jpeg','https://static.wixstatic.com/media/64b604_a88e848b991844a2a01ed4c4d90ca13e~mv2.jpeg','https://static.wixstatic.com/media/64b604_6d7234a8440e4efc8c736259042333f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_3e44605129fe4dad99035d3f33584a9b~mv2.jpeg','https://static.wixstatic.com/media/64b604_bc2ad695774e480391db52ab703103b8~mv2.jpeg','https://static.wixstatic.com/media/64b604_197d16a1a1354cfbae3635430d5c32f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_db61c9afea164c29b66adffbaed35aba~mv2.jpeg','https://static.wixstatic.com/media/64b604_1d63e261cfff4cd3bf69aaaa1603d44c~mv2.jpeg','https://static.wixstatic.com/media/64b604_bc41c000832947e8a056f9091bcb7714~mv2.jpeg','https://static.wixstatic.com/media/64b604_b20a449df93b4e848d61f4086d925705~mv2.jpeg']
      },
      {
        address: '307 Bellflower Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_0f7be59ea6f6404d9993facda7f4bf56~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa41f41c304d407fb746142e781d74a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_24d8159ca79847e6b29019c6147c8361~mv2.jpeg','https://static.wixstatic.com/media/64b604_46d27b8f8ae742a3a8ffede925513281~mv2.jpeg','https://static.wixstatic.com/media/64b604_41fa6309ea914a0db241e8d0232ee6c0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a1ec155490534718a58cabea27e85959~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d6f2b98de84d1291461f03902e4668~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce72d6b8c30d4ad7adec8ae026b5c423~mv2.jpeg','https://static.wixstatic.com/media/64b604_11829af3dc624c2b96e53e9d8b76f732~mv2.jpeg','https://static.wixstatic.com/media/64b604_57b22e0b87b54f92ad87344fec65494e~mv2.jpeg','https://static.wixstatic.com/media/64b604_2b09c12635344d8eb3f20726cadcc416~mv2.jpeg','https://static.wixstatic.com/media/64b604_64341f46689f47f8b036a214bad02813~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d05ff1703fe4131b56602f57f6a3846~mv2.jpeg','https://static.wixstatic.com/media/64b604_67d1162df55748898f0bd74acabd4f83~mv2.jpeg','https://static.wixstatic.com/media/64b604_358e87e9f268476f85d02a9ebed0a4ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa724bfdcbda4cc7a628394e98f872e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_3843517fb0ac4df69b122df8465cf7f9~mv2.jpeg','https://static.wixstatic.com/media/64b604_fb0cc83f894944a98681c06cd5039ef1~mv2.jpeg','https://static.wixstatic.com/media/64b604_eed72c1637af44c2b596fe78c9e21732~mv2.jpeg','https://static.wixstatic.com/media/64b604_78356ee58e7a44b39cedbcee486aa5ec~mv2.jpeg','https://static.wixstatic.com/media/64b604_adc759c5f63d4e3d8ed352839df99ea4~mv2.jpeg']
      },
      {
        address: '635 Greenfield Ave SW', city: 'Canton, OH 44706', beds: 2, baths: 2,
        cover: 'https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg',
        photos: ['https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_b667e6f4d0c1425aa80d0fbac20c3b93~mv2.jpeg','https://static.wixstatic.com/media/64b604_e1f81fb0d29549e4bb66e822ab5ec4dc~mv2.jpeg','https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_db13505dabef4c27b4130edc03d526e7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce4ffabcfa754ddf829e6773bf293a15~mv2.jpeg','https://static.wixstatic.com/media/64b604_989c3c702a384553869441e0c6798675~mv2.jpeg','https://static.wixstatic.com/media/64b604_e7f2e0d66f6c49e599ee1f433aa20fff~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b46acc41c384ef284d592a891a2cf5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_668b074364c34ded882d300406fb5ed3~mv2.jpeg','https://static.wixstatic.com/media/64b604_2fcb74e2925a47f587bbcc82d91e5cfe~mv2.jpeg','https://static.wixstatic.com/media/64b604_0cc6d76060324c8aba0ea98ead379253~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d977d85141442f88c9e1df86554aed~mv2.jpeg','https://static.wixstatic.com/media/64b604_8ff9de41d9d64055bca0cdf3bb190729~mv2.jpeg','https://static.wixstatic.com/media/64b604_73990df58e124fe292128da0f8f5466f~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce7bc681d40f440ea823300c44d65709~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7ca473d42df48ff8a3d787bddf37656~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2d9dfd891624456a7e72cdce2188566~mv2.jpeg','https://static.wixstatic.com/media/64b604_204a0bb2c592496e90b58d9eaca2e431~mv2.jpeg','https://static.wixstatic.com/media/64b604_dbf870f3b32c46fb8c5821ea831f3505~mv2.jpeg','https://static.wixstatic.com/media/64b604_fe0f540f908a493fbc785bad211774f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_c889ce7e527040ba971e0f30a1510f57~mv2.jpeg','https://static.wixstatic.com/media/64b604_b659f4932b1647b89e6ebd8eeb3ffa5b~mv2.jpeg','https://static.wixstatic.com/media/64b604_81496074fd2e4e369cb065f9388dd19e~mv2.jpeg','https://static.wixstatic.com/media/64b604_aade381e30de47389a03f18650b18686~mv2.jpeg','https://static.wixstatic.com/media/64b604_f4370a409240435593a6b827d59c360e~mv2.jpeg']
      }
    ];

    var RENTS = {'426 Vince Ave NW':'$1,550','244 Harter Ave NW':'$1,640','300 Montrose Ave NW':'$2,310','2631 Demington Ave NW':'$2,110','1103 22nd St NE':'$1,860','225 Grandview Ave NW':'$1,610','307 Bellflower Ave NW':'$1,385','635 Greenfield Ave SW':'$1,200'};

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
.hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:40px 32px 36px;text-align:center}
.hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:12px}
.hero__title{font-size:clamp(24px,4.8vw,46px);font-weight:900;margin-bottom:8px}
.hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}
.hero__desc{font-size:17px;color:rgba(255,255,255,.88);line-height:1.55;max-width:760px;margin:12px auto 0}

/* ── FINANCIAL REPORTS ── */
.reports-section{background:#fff;border-bottom:2px solid rgba(10,30,60,.08);padding:24px 36px}
.reports-section__inner{max-width:900px;margin:0 auto}
.reports-section__label{font-size:11px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:#5a6b85;margin-bottom:12px}
.reports-section__btns{display:flex;gap:14px;flex-wrap:wrap}
.report-btn{flex:1;min-width:200px;padding:18px 22px;background:#0d1f35;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;font-family:'Inter','Segoe UI',Arial,sans-serif;transition:background .2s,transform .15s;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 2px 10px rgba(10,30,60,.18)}
.report-btn:hover{background:#1a3557;transform:translateY(-2px)}

/* ── MAP ── */
.map-wrap{background:#f0f4fa;border-top:2px solid rgba(10,30,60,.08);border-bottom:2px solid rgba(10,30,60,.08);padding:28px 36px}
.map-container{max-width:1100px;margin:0 auto}
.map-header{margin-bottom:12px}
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
.section-head{max-width:1040px;margin:36px auto 16px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between}
.section-head h2{font-size:22px;font-weight:800;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em}
.section-head span{font-size:21px;font-weight:800;color:#c8962a}
.prop-grid{max-width:1040px;margin:0 auto 44px;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:24px}
.prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,0.16)}
.prop-card__img-wrap{position:relative;height:220px;overflow:hidden}
.prop-card__cover{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s}
.prop-card:hover .prop-card__cover{transform:scale(1.06)}
.prop-card__badge{position:absolute;top:12px;left:12px;background:#C8962A;color:#fff;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:12px}
.prop-card__info{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1}
.prop-card__address{font-size:20px;font-weight:800;color:#0D1F35;margin-bottom:4px;line-height:1.3}
.prop-card__city{font-size:14px;color:#999;margin-bottom:6px}
.prop-card__specs{font-size:16px;color:#555;font-weight:600;margin-bottom:12px;flex:1}
.prop-card__rent{font-size:18px;font-weight:800;color:#c8962a;margin-bottom:12px}
.prop-card__btn{width:100%;padding:12px;background:#1A3557;color:#fff;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-align:center}
.prop-card:hover .prop-card__btn{background:#0D1F35}

/* ── P&L MODAL (wide QuickBooks table) ── */
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:10px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:12px;width:100%;max-width:none;max-height:calc(100vh - 20px);display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:9px 48px 8px 18px;background:#0a1628;border-radius:12px 12px 0 0;flex-shrink:0}
.pl-modal__title{font-size:13px;font-weight:800;color:#fff;line-height:1.3}
.pl-modal__period{font-size:10px;color:#c8962a;font-weight:700;margin-top:2px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:6px;right:10px;background:none;border:none;font-size:22px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow:auto;padding:6px 12px 8px;flex:1;min-height:0}
.pl-modal__foot{padding:6px 16px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 12px 12px;display:flex;justify-content:flex-end;flex-shrink:0}

/* ── QuickBooks P&L Table ── */
.pl-class-table{width:100%;border-collapse:collapse;font-size:11px;font-family:'Inter','Segoe UI',Arial,sans-serif}
.pl-class-table thead tr{background:#0a1628}
.pl-ct-th-lbl{text-align:left;padding:5px 8px;color:rgba(255,255,255,.7);font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;min-width:120px;position:sticky;left:0;background:#0a1628;z-index:2}
.pl-ct-th-val{text-align:right;padding:5px 6px;color:rgba(255,255,255,.7);font-size:10px;font-weight:700;letter-spacing:.04em;white-space:nowrap;min-width:78px}
.pl-ct-th-tot{text-align:right;padding:5px 8px;color:#c8962a;font-size:10px;font-weight:800;letter-spacing:.04em;white-space:nowrap;min-width:86px}
.pl-ct-section td{background:#1e3f68;color:#fff;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;padding:4px 8px}
.pl-ct-section .pl-ct-lbl{position:sticky;left:0;background:#1e3f68;z-index:1}
.pl-ct-group-hdr td{background:#f0f4fa;color:#5a6b85;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 8px;border-bottom:1px solid rgba(10,30,60,.08)}
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
.pl-ct-noi .pl-ct-tot-col{color:#c8962a;font-size:12px;font-weight:900}
.pl-ct-lbl{padding:3px 8px;text-align:left;white-space:nowrap;font-size:11px}
.pl-ct-ind{padding-left:20px!important}
.pl-ct-val{padding:3px 6px;text-align:right;white-space:nowrap;color:#0d1f35;font-variant-numeric:tabular-nums;font-size:11px}
.pl-ct-tot-col{padding:3px 8px;text-align:right;white-space:nowrap;font-weight:800;font-variant-numeric:tabular-nums;font-size:11px;color:#0d1f35}
/* P&L horizontal scrollbar shown above the table */
.pl-hscroll-top{overflow-x:auto;overflow-y:hidden;position:sticky;top:0;z-index:3;background:#fff;margin-bottom:4px;scrollbar-width:auto;scrollbar-color:#c8962a #e4ecf7}
.pl-hscroll-top__inner{height:1px}
.pl-hscroll-top::-webkit-scrollbar{height:14px}
.pl-hscroll-top::-webkit-scrollbar-track{background:#e4ecf7;border-radius:7px}
.pl-hscroll-top::-webkit-scrollbar-thumb{background:#c8962a;border-radius:7px;border:2px solid #e4ecf7}
.pl-hscroll-top::-webkit-scrollbar-thumb:hover{background:#a67820}
.pl-hscroll{overflow-x:auto;scrollbar-width:none}
.pl-hscroll::-webkit-scrollbar{display:none}

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
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/64b604_4ea6080e0e5c4c62892adb131d8d6c09~mv2.jpeg" alt="CSH Rentals"/>
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
  <div class="hero__badge">Portfolio 4</div>
  <h1 class="hero__title">Portfolio 4 &mdash; Individual Home Sale Opportunities</h1>
  <p class="hero__sub">8 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
  <p class="hero__desc">These homes, with the exception of 635 Greenfield Ave., represent some of the highest-value properties in our portfolio. Given the value of these homes and the anticipated interest from individual buyers, they will be offered through a multi-parcel combination auction.</p>
  <p class="hero__desc">Each home will first be auctioned individually, allowing buyers to bid on the specific property or properties they wish to purchase. The highest individual bids will then be combined to establish an aggregate sale price for the portfolio.</p>
  <p class="hero__desc">The entire group of properties will then be offered together as a single package. To purchase the portfolio as a whole, a package bidder must exceed the combined value of the winning individual bids. Whichever method produces the highest total sale proceeds &mdash; the combined individual bids or the portfolio package bid &mdash; will determine how the properties are sold.</p>
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

<div class="section-head"><span>8 homes &middot; $13,665/mo &middot; $163,980 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>

<!-- ══ MAP ══ -->
<section class="map-wrap">
  <div class="map-container">
    <div class="map-header">
      <div class="map-header__title">Portfolio 4 &mdash; Individual Home Sale Opportunities &mdash; Property Locations</div>
      <div class="map-header__sub">Select a property to view its location.</div>
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
      <div class="rr-modal__title">Portfolio 4 &mdash; Individual Home Sale Opportunities &mdash; Rent Roll</div>
      <div class="rr-modal__sub">Individual Home Sale Opportunities &mdash; 8 Properties</div>
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

    function syncPlScroll() {
      var top = plBody.querySelector('#pl-hscroll-top');
      var wrap = plBody.querySelector('#pl-hscroll');
      if (!top || !wrap) return;
      top.firstChild.style.width = wrap.scrollWidth + 'px';
      top.style.display = wrap.scrollWidth > wrap.clientWidth + 1 ? 'block' : 'none';
      top.scrollLeft = wrap.scrollLeft;
      top.onscroll = function() { if (wrap.scrollLeft !== top.scrollLeft) wrap.scrollLeft = top.scrollLeft; };
      wrap.onscroll = function() { if (top.scrollLeft !== wrap.scrollLeft) top.scrollLeft = wrap.scrollLeft; };
    }
    window.addEventListener('resize', function() { if (plModal.style.display === 'flex') syncPlScroll(); });

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

      var html = '<div class="pl-hscroll-top" id="pl-hscroll-top"><div class="pl-hscroll-top__inner"></div></div><div class="pl-hscroll" id="pl-hscroll"><table class="pl-class-table"><thead><tr>';
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
      syncPlScroll();
    }

    function closePL() { plModal.style.display = 'none'; }
    if (plClose)   plClose.addEventListener('click', closePL);
    if (plOverlay) plOverlay.addEventListener('click', closePL);
    if (plDlBtn)   plDlBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (_currentPlYear) downloadCSV('Portfolio4_IndividualHomeSale_PL_' + _currentPlYear + '.csv', buildPLCsv(_currentPlYear));
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
      var html = '<div class="rr-portfolio-badge">Portfolio 4 &mdash; 8 Properties</div><div class="rr-table-wrap"><table class="rr-table">' +
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
      downloadCSV('Portfolio4_IndividualHomeSale_RentRoll.csv', buildRRCsv());
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
