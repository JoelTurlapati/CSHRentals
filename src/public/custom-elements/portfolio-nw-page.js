// @ts-nocheck
class CshPortfolioNw extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    if (!document.getElementById('csh-inter-font')) {
      var l = document.createElement('link');
      l.id = 'csh-inter-font'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      document.head.appendChild(l);
    }

    var PORTFOLIO = 'Portfolio 1 — Malone University / Pro Football Hall of Fame Area 1';

    // ── QuickBooks-style P&L (properties as columns) ──
    var PL_TABLE = {
      '2024': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2024',
        cols: ['1430 19th St NW','1708 18th St NW','1734 Woodland Ave NW','1919 Frazer Ave NW','2007 Kirk Ct NW','2211 Myrtle Ave NW','519 21st St NW','523 21st St NW','725 22nd St NW','800 22nd St NW','806 23rd St NW','818 25th St NW','2923 Helen Pl NW','2945 15th St NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',             v:[11890.25,10685,11580,12534,14310,4684,16270,14400,11750,2750,10800,12240,16200,9180,16850,3400,179523.25]},
          {t:'item',       label:'Late Fee collected',    v:[135,30,215,0,0,0,0,90,418.59,90,440,0,260,130,150,60,2018.59]},
          {t:'item',       label:'LTR Cash Receipts',     v:[962,1175,0,140.37,0,1743,0,0,0,13150,1006,1458,0,4413,0,9983.39,34030.76]},
          {t:'item',       label:'Security Deposit Income',v:[1325,1300,0,2900,0,2550,0,0,0,0,2400,1250,0,1300,0,0,13025]},
          {t:'subtotal',   label:'Total for LTR Rents',   v:[14312.25,13190,11795,15574.37,14310,8977,16270,14490,12168.59,15990,14646,14948,16460,15023,17000,13443.39,228597.60]},
          {t:'total',      label:'Total for Income',      v:[14312.25,13190,11795,15574.37,14310,8977,16270,14490,12168.59,15990,14646,14948,16460,15023,17000,13443.39,228597.60]},
          {t:'total',      label:'Gross Profit',          v:[14312.25,13190,11795,15574.37,14310,8977,16270,14490,12168.59,15990,14646,14948,16460,15023,17000,13443.39,228597.60]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'QuickBooks Payments Fees',v:[0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,30]},
          {t:'item',       label:'Repair Labor',          v:[2342.5,2506.4,3224.67,1079,866.14,4027.61,535,1749.98,549.21,2854,1770.88,1845.54,1761.83,5673.54,3618.36,2220,36624.66]},
          {t:'item',       label:'Repair Materials',      v:[0,7.99,0,0,0,248.94,0,471.77,0,0,3.2,0,0,0,0,0,731.90]},
          {t:'item',       label:'Taxes - Real Estate',   v:[1217.48,1739.76,460.54,1146.8,1683.94,1308.8,1882.26,1421.94,1568.84,1327.68,1867.22,1400.6,2470.19,2433.41,1196.14,750.40,23876]},
          {t:'subtotal',   label:'Total for LTR Expenses',v:[3559.98,4254.15,3685.21,2225.8,2550.08,5585.35,2417.26,3643.69,2118.05,4181.68,3641.3,3246.14,4232.02,8136.95,4814.50,2970.40,61262.56]},
          {t:'total',      label:'Total for Expenses',    v:[3559.98,4254.15,3685.21,2225.8,2550.08,5585.35,2417.26,3643.69,2118.05,4181.68,3641.3,3246.14,4232.02,8136.95,4814.50,2970.40,61262.56]},
          {t:'noi',        label:'Net Operating Income',  v:[10752.27,8935.85,8109.79,13348.57,11759.92,3391.65,13852.74,10846.31,10050.54,11808.32,11004.7,11701.86,12227.98,6886.05,12185.50,10472.99,167335.04]},
          {t:'noi',        label:'Net Income',            v:[10752.27,8935.85,8109.79,13348.57,11759.92,3391.65,13852.74,10846.31,10050.54,11808.32,11004.7,11701.86,12227.98,6886.05,12185.50,10472.99,167335.04]}
        ]
      },
      '2025': {
        co: 'SAL Investment Properties',
        subtitle: 'Profit and Loss by Class',
        period: 'January-December, 2025',
        cols: ['1430 19th St NW','1708 18th St NW','1734 Woodland Ave NW','1919 Frazer Ave NW','2007 Kirk Ct NW','2211 Myrtle Ave NW','519 21st St NW','523 21st St NW','725 22nd St NW','800 22nd St NW','806 23rd St NW','818 25th St NW','2923 Helen Pl NW','2945 15th St NW','307 Bellflower','635 Greenfield','Total'],
        rows: [
          {t:'section',    label:'Income'},
          {t:'group',      label:'LTR Rents',             v:[16120,13000,12100,11720,13500,1250,16620,13200,0,0,2400,15000,16230,15600,7075,0,153815]},
          {t:'item',       label:'Late Fee collected',    v:[0,0,150,0,0,2500,0,60,1350,380,500,1550,10,0,530,0,7030]},
          {t:'item',       label:'LTR Cash Receipts',     v:[0,1540,0,1640,0,11549.08,0,1200.4,6865,17400,12000,0,0,0,5500,14500,72194.48]},
          {t:'item',       label:'Security Deposit Income',v:[0,1100,0,1200,0,500,0,0,1150,0,0,0,0,0,0,0,3950]},
          {t:'subtotal',   label:'Total for LTR Rents',   v:[16120,15640,12250,14560,13500,15799.08,16620,14460.4,9365,17780,14900,16550,16240,15600,13105,14500,236989.48]},
          {t:'total',      label:'Total for Income',      v:[16120,15640,12250,14560,13500,15799.08,16620,14460.4,9365,17780,14900,16550,16240,15600,13105,14500,236989.48]},
          {t:'total',      label:'Gross Profit',          v:[16120,15640,12250,14560,13500,15799.08,16620,14460.4,9365,17780,14900,16550,16240,15600,13105,14500,236989.48]},
          {t:'section',    label:'Expenses'},
          {t:'group-hdr',  label:'LTR Expenses'},
          {t:'item',       label:'Lawncare',              v:[0,325,0,375,0,0,0,0,230,0,0,0,0,0,0,0,930]},
          {t:'item',       label:'Pest Control',          v:[0,0,0,138.45,0,0,0,0,0,0,0,0,0,0,0,0,138.45]},
          {t:'item',       label:'Repair & Maintenance',  v:[0,300,300,1206.33,0,598.02,0,696.72,581.52,0,0,0,696.86,0,736.84,0,5116.29]},
          {t:'item',       label:'Repair Labor',          v:[0,1586.11,475.74,3067.92,408,437,1734.32,696.72,3330.91,3164.76,0,1137,150,0,900,229,17317.48]},
          {t:'item',       label:'Repair Materials',      v:[0,12.25,0,0,38.97,0,0,0,0,0,0,0,0,0,0,0,51.22]},
          {t:'item',       label:'Taxes - Real Estate',   v:[1251.76,1388.2,1221.3,713.74,1499.9,853.9,1828.3,1224.94,1582.16,1425.06,1872.98,1178.92,2820.30,2416.96,1906.92,1769.82,24955.16]},
          {t:'subtotal',   label:'Total for LTR Expenses',v:[1251.76,3611.56,1997.04,5501.44,1946.87,1888.92,3562.62,2618.38,5724.59,4589.82,1872.98,2315.92,3667.16,2416.96,3543.76,1998.82,48508.60]},
          {t:'total',      label:'Total for Expenses',    v:[1251.76,3611.56,1997.04,5501.44,1946.87,1888.92,3562.62,2618.38,5724.59,4589.82,1872.98,2315.92,3667.16,2416.96,3543.76,1998.82,48508.60]},
          {t:'noi',        label:'Net Operating Income',  v:[14868.24,12028.44,10252.96,9058.56,11553.13,13910.16,13057.38,11842.02,3640.41,13190.18,13027.02,14234.08,12572.84,13183.04,9561.24,12501.18,188480.88]},
          {t:'noi',        label:'Net Income',            v:[14868.24,12028.44,10252.96,9058.56,11553.13,13910.16,13057.38,11842.02,3640.41,13190.18,13027.02,14234.08,12572.84,13183.04,9561.24,12501.18,188480.88]}
        ]
      }
    };

    // ── Rent Roll ──
    var RENT_ROLL = [
      {address:'806 23rd St NW',      value:131000, monthlyRent:1200,  annualizedRent:14400},
      {address:'2007 Kirk Ct NW',     value:140000, monthlyRent:1350,  annualizedRent:16200},
      {address:'818 25th St NW',      value:150000, monthlyRent:1250,  annualizedRent:15000},
      {address:'519 21st St NW',      value:140000, monthlyRent:1385,  annualizedRent:16620},
      {address:'523 21st St NW',      value:135000, monthlyRent:1200,  annualizedRent:14400},
      {address:'1430 19th St NW',     value:139500, monthlyRent:1325,  annualizedRent:15900},
      {address:'1919 Frazer Ave NW',  value:150000, monthlyRent:1200,  annualizedRent:14400},
      {address:'1708 18th St NW',     value:160000, monthlyRent:1100,  annualizedRent:13200},
      {address:'1734 Woodland Ave NW',value:90000,  monthlyRent:1055,  annualizedRent:12660},
      {address:'2211 Myrtle Ave NW',  value:134500, monthlyRent:1250,  annualizedRent:15000},
      {address:'800 22nd St NW',      value:150000, monthlyRent:1450,  annualizedRent:17400},
      {address:'725 22nd St NW',      value:125000, monthlyRent:1150,  annualizedRent:13800},
      {address:'635 Greenfield Ave SW', value:95000,  monthlyRent:1200, annualizedRent:14400},
      {address:'2923 Helen Pl NW',      value:175000, monthlyRent:1350, annualizedRent:16200},
      {address:'307 Bellflower Ave NW', value:160000, monthlyRent:1375, annualizedRent:16500},
      {address:'2945 15th St NW',       value:160000, monthlyRent:1300, annualizedRent:15600}
    ];

    var MAP_DEFAULT = 'https://www.google.com/maps/d/embed?mid=1M9A4m9qZKIT60ybVrkdDyCk87Xhjt08&ehbc=2E312F&noprof=1';

    var MAP_PROPS = [
      {label:'806 23rd St NW',       addr:'806 23rd St NW, Canton, OH'},
      {label:'2007 Kirk Ct NW',      addr:'2007 Kirk Ct NW, Canton, OH'},
      {label:'818 25th St NW',       addr:'818 25th St NW, Canton, OH'},
      {label:'519 21st St NW',       addr:'519 21st St NW, Canton, OH'},
      {label:'523 21st St NW',       addr:'523 21st St NW, Canton, OH'},
      {label:'1430 19th St NW',      addr:'1430 19th St NW, Canton, OH'},
      {label:'1919 Frazer Ave NW',   addr:'1919 Frazer Ave NW, Canton, OH'},
      {label:'1708 18th St NW',      addr:'1708 18th St NW, Canton, OH'},
      {label:'1734 Woodland Ave NW', addr:'1734 Woodland Ave NW, Canton, OH'},
      {label:'2211 Myrtle Ave NW',   addr:'2211 Myrtle Ave NW, Canton, OH'},
      {label:'800 22nd St NW',       addr:'800 22nd St NW, Canton, OH'},
      {label:'725 22nd St NW',         addr:'725 22nd St NW, Canton, OH'},
      {label:'635 Greenfield Ave SW',  addr:'635 Greenfield Ave SW, Canton, OH'},
      {label:'2923 Helen Pl NW',       addr:'2923 Helen Pl NW, Canton, OH'},
      {label:'307 Bellflower Ave NW',  addr:'307 Bellflower Ave NW, Canton, OH'},
      {label:'2945 15th St NW',        addr:'2945 15th St NW, Canton, OH'}
    ];

    function fmt(n) {
      if (n === null || n === undefined || n === '') return '—';
      var num = Math.round(Number(n));
      if (isNaN(num)) return String(n);
      var s = '$' + Math.abs(num).toLocaleString('en-US');
      return num < 0 ? '(' + s + ')' : s;
    }
    function fmtFull(n) {
      if (n === null || n === undefined || n === '') return '—';
      var num = Number(n);
      if (isNaN(num)) return String(n);
      var abs = Math.abs(num);
      var s = abs.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
      return (num < 0 ? '(' : '') + s + (num < 0 ? ')' : '');
    }

    var PROPERTIES = [
      {address:'806 23rd St NW',city:'Canton, OH 44708',beds:2,baths:1,cover:'https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_6be40f64a2de453484382ec7f20d89ef~mv2.jpg','https://static.wixstatic.com/media/d9828b_558ebde4146b433a988f575c6e2e9752~mv2.jpg','https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg','https://static.wixstatic.com/media/d9828b_0ff07cb2e9b342969e528ef0f014acd2~mv2.jpg','https://static.wixstatic.com/media/d9828b_e11019144a96401ebbe72e57a5c64659~mv2.jpg','https://static.wixstatic.com/media/d9828b_04c804fbbfe245fda20fe7b9f50c84e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_8abf24fbabcd4444a2670f37abbcb0a9~mv2.jpg','https://static.wixstatic.com/media/d9828b_5f2a09967b5a4f18b0715e47f734e249~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7278f7201834cc5ab2979f274b059e5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4ee87ea194c44ef9f7c493dab6a3c6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d488f0320df4914ab8c7476c4d16fe4~mv2.jpg','https://static.wixstatic.com/media/d9828b_cec56acee666435d965bf5a77414642e~mv2.jpg','https://static.wixstatic.com/media/d9828b_dedef0dc4e0d4175b28c1f0abdf40e49~mv2.jpg','https://static.wixstatic.com/media/d9828b_7fd78d333d58490e93fd3c5bffe1a047~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f209ce8a5404569bdadd56685be0488~mv2.jpg','https://static.wixstatic.com/media/d9828b_86c3dc0b1edb44bca57fc411399884d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1480d3bbaab4a769da11b87ba9a0a45~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9af6b16b1b44e288260d4aad13f1cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_091a27f145224f20a2c943abfcb46cb0~mv2.jpg','https://static.wixstatic.com/media/d9828b_9ae359a9c80e498294c0d688c7d970c3~mv2.jpg']},
      {address:'2007 Kirk Ct NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_a3f1b8fe26ca497aae692326ef428623~mv2.jpg','https://static.wixstatic.com/media/d9828b_7aba94f5a0994b8299fdf12ba3c5dbaa~mv2.jpg','https://static.wixstatic.com/media/d9828b_80ef7b47cf114f8da0dba2efa93ef0b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg','https://static.wixstatic.com/media/d9828b_bde14c4b6a104f0b8eaae98c9d43ce75~mv2.jpg','https://static.wixstatic.com/media/d9828b_5660d011886d4025be71cd95c893adc4~mv2.jpg','https://static.wixstatic.com/media/d9828b_15061a07e3a44120831f1ae5134c083d~mv2.jpg','https://static.wixstatic.com/media/d9828b_88b526fb445544c58350648aa73af21a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dfe81723f16548b79fed1163188e25e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7bff44ccb0e46a8b312bb75f1cd49b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_3739d8d7628c45f2af7a70c91952c39d~mv2.jpg','https://static.wixstatic.com/media/d9828b_fbc37a1f66bb4a0c8df5fbbb3d2836a2~mv2.jpg','https://static.wixstatic.com/media/d9828b_088161bda5214f48acd4ab57b7096275~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1ade30b09d74bd991d00bf452d0f21e~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e29ccbbc3a401b8bc19be80d4a53de~mv2.jpg']},
      {address:'818 25th St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_2d552cf9168f4741b747927451fcf538~mv2.jpg','https://static.wixstatic.com/media/d9828b_ccf98a0e23944898846af9a30f0b9384~mv2.jpg','https://static.wixstatic.com/media/d9828b_c44a1f6320604ceca7f6de34f53c07b0~mv2.jpg','https://static.wixstatic.com/media/d9828b_83190796e1794c13b72740a895ff985f~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cb3b9d67606410194e02ae036154093~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e6be6cf61949439db2b94ca6fcebf5~mv2.jpg','https://static.wixstatic.com/media/d9828b_3dec0b76e8b147deb44ea82c5848c8d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb67d592d9114021889c8c7fd3899427~mv2.jpg','https://static.wixstatic.com/media/d9828b_fdaae49535444d428939da6d0f5652f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_65765707b5e0446b8ef8bcba6bce9827~mv2.jpg','https://static.wixstatic.com/media/d9828b_4da54f97ff5c4f8487452ed57dbff9a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4cab9396762044a69f1b468b53eda60a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg']},
      {address:'519 21st St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_aeaa9243b88049f1b91625261782e32a~mv2.jpg','https://static.wixstatic.com/media/d9828b_48e820ffdd1d4ba2a50337b1c77cd284~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed54a63873eb429d84f81bbc576109ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0072de36d7e4cfc96b7a6ddd32541f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0321c07d9f14b1da7dad0736b05cc66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a21a12c038840fd87251fee0ce12ca7~mv2.jpg','https://static.wixstatic.com/media/d9828b_16f5e16ef3e748d6974a9dca3ce70d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_46dbd0170fa64b47ab669baa8c1971e8~mv2.jpg']},
      {address:'523 21st St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg','https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0072de36d7e4cfc96b7a6ddd32541f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0321c07d9f14b1da7dad0736b05cc66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a21a12c038840fd87251fee0ce12ca7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f66794b9795c42d987d74351295ccbb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_aeaa9243b88049f1b91625261782e32a~mv2.jpg','https://static.wixstatic.com/media/d9828b_48e820ffdd1d4ba2a50337b1c77cd284~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed54a63873eb429d84f81bbc576109ec~mv2.jpg']},
      {address:'1430 19th St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_25565b9a221b43e299eb89176d40b856~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_1a759132191d45808ff36146d8d70658~mv2.jpg','https://static.wixstatic.com/media/d9828b_83954cb5091b4baa85375ce5d16eebf0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cc81e4690f2411ca550c9b857a72ade~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed540304c07b4728aea597314ffb8aca~mv2.jpg','https://static.wixstatic.com/media/d9828b_840d67cf25da4662b82d315528e5c91f~mv2.jpg','https://static.wixstatic.com/media/d9828b_969b6ee3036a4587b176209b7b2a8421~mv2.jpg','https://static.wixstatic.com/media/d9828b_c548321f5a53437996e4773d981aa1e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff5ff4fb87a4201bf2c1503c418f271~mv2.jpg','https://static.wixstatic.com/media/d9828b_c985e3bf73d34a05a4d39934086398bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b557c7c2173245ccab336eabc7938435~mv2.jpg']},
      {address:'1919 Frazer Ave NW',city:'Canton, OH 44709',beds:3,baths:2,cover:'https://static.wixstatic.com/media/d9828b_29642d903cff43bea796e1f479afb749~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_cc62349453604b258759e7968967f78f~mv2.jpg','https://static.wixstatic.com/media/d9828b_68cc2bcbc5ca495c8af5e70722ecf6c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_55623abf26b646f0acf5ac105640eb98~mv2.jpg','https://static.wixstatic.com/media/d9828b_6971f7d2c9b2496e86820c435b2b60f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a86e1ed6ebfe4061a8b03f4ff1424709~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d3b0e25b9a64e029d5ca303d73452eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b44206a3b69045ada56499ef3c3cc30b~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a967defc22f4dbea0c2e30e94aa0f4a~mv2.jpg']},
      {address:'1708 18th St NW',city:'Canton, OH 44703',beds:3,baths:2,cover:'https://static.wixstatic.com/media/d9828b_59ded53a340e4c799b7cd5fd05869b79~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_f96c8a42f8a94cea8e66092e74bfe1d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4478974a66244efa6ebc3ac70762d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_71b3e32c25434012912df3b992993cd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2af6f49f545d46098eaca3a9968df487~mv2.jpg','https://static.wixstatic.com/media/d9828b_6adc3bc4cc7248daafbcbdc9c68d899a~mv2.jpg','https://static.wixstatic.com/media/d9828b_abe25b7efee54e16a4cf5c1af741e32f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b390fe2121d54d1abd18b441e59132ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_45c15d15fc7c4364bc5620dccf33dc6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_df2706e8b74a4625ab71c8ed3726e60f~mv2.jpg']},
      {address:'1734 Woodland Ave NW',city:'Canton, OH 44703',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_3fbb3a3fc5ec49b7865011d0ca482bc3~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg','https://static.wixstatic.com/media/d9828b_615742817b6a49f0a7107459b590b5eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_ef25a5b593214153bbdfb69c5fc5451a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d693844ecc2444697a612dc70b6b71d~mv2.jpg','https://static.wixstatic.com/media/d9828b_aef5e35cf6594b868a68c2f2067b63a6~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e8e339d238541de9eb6ac9f00adf9bd~mv2.jpg']},
      {address:'2211 Myrtle Ave NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_63db1c3664b0443eb97a7c7886eb0561~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_63db1c3664b0443eb97a7c7886eb0561~mv2.jpg','https://static.wixstatic.com/media/d9828b_f13c62cbd51e4c38978b0d2d65e6a715~mv2.jpg','https://static.wixstatic.com/media/d9828b_1e2ed7da484b4c888725dec274c1ec8d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f3c5f8428de8419981a806fa474d8b67~mv2.jpg','https://static.wixstatic.com/media/d9828b_1fb8366800754ac99360d42115394eea~mv2.jpg','https://static.wixstatic.com/media/d9828b_210bfccb93144c5b8661e37e42788362~mv2.jpg','https://static.wixstatic.com/media/d9828b_bafdebe8b9cf46d5ba298daeb0f220d1~mv2.jpg','https://static.wixstatic.com/media/d9828b_be267fd9fed14b7bbe6562b909faf6f4~mv2.jpg','https://static.wixstatic.com/media/d9828b_979dcc1222634670a20a364373bd1350~mv2.jpg','https://static.wixstatic.com/media/d9828b_1457747c0e1c41e493c590415ec33b90~mv2.jpg','https://static.wixstatic.com/media/d9828b_b686370dfc4c45d39fb60035d009c80a~mv2.jpg','https://static.wixstatic.com/media/d9828b_eee6fba011b046c3b04d2ccc3498f23e~mv2.jpg','https://static.wixstatic.com/media/d9828b_c02b89a78599421cb2c2000008ad9ea9~mv2.jpg','https://static.wixstatic.com/media/d9828b_6202b37f5e68479aa08e9204df8ae539~mv2.jpg','https://static.wixstatic.com/media/d9828b_5150f46cc69448dc8a545584980e7bd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_464bbb2066d54efba87ed4c53fc64038~mv2.jpg','https://static.wixstatic.com/media/d9828b_378485bac40b4b568822bf221c205703~mv2.jpg','https://static.wixstatic.com/media/d9828b_d2aa076d68c74ba1ac0a5450bfafdba9~mv2.jpg','https://static.wixstatic.com/media/d9828b_87015797adc94b07bad19f2709b879cf~mv2.jpg','https://static.wixstatic.com/media/d9828b_8fb78000457e48ae9bd7fb264eee71d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_dba3238fb947478e8010e75b6f5e12c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_eba87cba809346dcb71ac1caa5aa9d43~mv2.jpg','https://static.wixstatic.com/media/d9828b_477eea86df1344b6a0cf305892b02a82~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc69a7684e0b488b9b4372df229601a8~mv2.jpg']},
      {address:'800 22nd St NW',city:'Canton, OH 44709',beds:4,baths:1.5,cover:'https://static.wixstatic.com/media/d9828b_f8f1cd124e0c44e2a09c7faaf202d162~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_60f51d826bd3462081e8c1feb3140546~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c51f1c90f5742189ac87d2aa597629e~mv2.jpg','https://static.wixstatic.com/media/d9828b_12b24248d0d543028e3b5714f9f3ae6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0b8a91bfcc64b499e53784c39f56945~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9f2f12b91da4c7d8a48595b83316cd3~mv2.jpg','https://static.wixstatic.com/media/d9828b_737b964dc109434b8ed7b4d608211dd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd7a6a06d50442ecb4efe5e0c48379c0~mv2.jpg','https://static.wixstatic.com/media/d9828b_a04abac593c04774ae2b3db7bf1a5d38~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3607eb119aa4e6ba618ee62084830d6~mv2.jpg']},
      {address:'725 22nd St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_1b0cc28b25534bf2b516b270b3ed6e17~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_0b7b81d68b67485d81bf5b0bb473eb6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_eef32763b2e74befa508a15f195b6520~mv2.jpg','https://static.wixstatic.com/media/d9828b_da3b37fafb8f43eead0e3d9b3dea6f4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c681bb5e225040d1bff1a0e068c84b58~mv2.jpg','https://static.wixstatic.com/media/d9828b_3607df5543aa4aa8a3e23249b0ed43a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4868b92d0bca4586b020894027ab8e82~mv2.jpg','https://static.wixstatic.com/media/d9828b_b013d1e5a5964e63b831c4d882c568e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_2b6f3e31df714b23bb76a6c51c8260e1~mv2.jpg']},
      {address:'635 Greenfield Ave SW',city:'Canton, OH 44706',beds:2,baths:2,cover:'https://static.wixstatic.com/media/d9828b_fdbe800b3cf640c3bb5de8f0cd051ef8~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_e39f74ab87be4f4a99d60f5e87b8db1e~mv2.jpg','https://static.wixstatic.com/media/d9828b_05174e141cef4bf081405497fdf8dc25~mv2.jpg','https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d93a7d364ced411d845d18e6c4e3db07~mv2.jpg','https://static.wixstatic.com/media/d9828b_15fe66da9f8b4c8bb2c443a8b52632c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_ea975df7804a49759c36b42b963cdd85~mv2.jpg','https://static.wixstatic.com/media/d9828b_0cd71d00ed2c48bda6277b0b91d564ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_cd263b3d33974eefbddaeb45bfcd8800~mv2.jpg','https://static.wixstatic.com/media/d9828b_a5122ffc4b0d40fda62e77cb194de2f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f3e126afb8774447b5211d02e23a78fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_764d1cd6e1eb404a903b3f4e5278720b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f363e69a8a1b4d82b465f491afd83cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f6010c8b20e140e4a1b9dcaed82ce838~mv2.jpg','https://static.wixstatic.com/media/d9828b_9861f469d7394bf2aae288c525c0995a~mv2.jpg','https://static.wixstatic.com/media/d9828b_248ea9c13ea04e10935fe4aa7be3a0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f5cedd6e07d410fb8bbcce212bb6ff0~mv2.jpg','https://static.wixstatic.com/media/d9828b_460cf0a9f2ac457fb82507a07a148ac1~mv2.jpg','https://static.wixstatic.com/media/d9828b_0a218d30146247deaa6841152dd6a651~mv2.jpg','https://static.wixstatic.com/media/d9828b_b68cee567d464fb6b637bc81157d4737~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb2e7b405eed4fa78fb9703082bae5ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_434fd3c4bd014cb38fde0f665b957053~mv2.jpg','https://static.wixstatic.com/media/d9828b_870d50def00c4445945d5958d2d2033b~mv2.jpg','https://static.wixstatic.com/media/d9828b_1e9773ad803e4ccb8ac4d1b81f25e5b8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4dca5948ca4f403ab19de8501a195f45~mv2.jpg','https://static.wixstatic.com/media/d9828b_8171ad6b905b49118931d3e8b7d92b04~mv2.jpg']},
      {address:'2923 Helen Pl NW',city:'Canton, OH 44708',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_ff8a7a91e8d54815bdb4ecff04240cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_43748fc2834b46a4bc025cad544a1cc6~mv2.jpg','https://static.wixstatic.com/media/d9828b_aaccf35afe8043858b5ccf94928272c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_322546c5040b4b549c7e68652ee6ffc5~mv2.jpg','https://static.wixstatic.com/media/d9828b_617b3e8c5d314989bd0ee51a4203f426~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7b6b74955b941c582cf600d323d7610~mv2.jpg','https://static.wixstatic.com/media/d9828b_5d92b423a9f94b0eb8bd59fad17c6bbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_06a44a5bbcd446b7ab70236926430763~mv2.jpg','https://static.wixstatic.com/media/d9828b_4af4aac2bab64f36bf9df62e3df4c309~mv2.jpg','https://static.wixstatic.com/media/d9828b_ab17eaa87a444b01953d9c044f1759e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg','https://static.wixstatic.com/media/d9828b_6d17e9470641437f8635ca8e9f688ed6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2d0e91fd3cd404db69b3ccdfdc09fa4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fde2ad6a0bc6410c84a901cac231a50d~mv2.jpg','https://static.wixstatic.com/media/d9828b_08f08d2c92e549cf944b0fd700b45541~mv2.jpg']},
      {address:'307 Bellflower Ave NW',city:'Canton, OH 44708',beds:3,baths:1.5,cover:'https://static.wixstatic.com/media/d9828b_54c7dbff12b54ba295aa04eb7bcf09ac~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_ff31d3cd5b5e4b22b516cbdf409cc963~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d92a9b6f6f0423c94bd3e7c1e791913~mv2.jpg','https://static.wixstatic.com/media/d9828b_dce0e3a56f1447ac8743c1d92e6dd080~mv2.jpg','https://static.wixstatic.com/media/d9828b_507a57c23b234d4bab9526552c3c2e46~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d4f38184b604a2b8beff132fb80f505~mv2.jpg','https://static.wixstatic.com/media/d9828b_57071b4d4e5e4b8aa79c660fd65b00e6~mv2.jpg','https://static.wixstatic.com/media/d9828b_8e928772af27403ba3407299ed51234b~mv2.jpg','https://static.wixstatic.com/media/d9828b_622b6bae6e7c4bb5a21682057a682d19~mv2.jpg','https://static.wixstatic.com/media/d9828b_96c375243afd473dbf3986b24fa6fc4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_728a161265c24fdfa9d76e65298856a1~mv2.jpg','https://static.wixstatic.com/media/d9828b_b171c3bedf424de78bfa1f5702321a77~mv2.jpg','https://static.wixstatic.com/media/d9828b_ffc118cb9624455d830554cf4f7ffd02~mv2.jpg','https://static.wixstatic.com/media/d9828b_34b05b96be1c4621aad66c580663efa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_acdc9480bc914dd9af86d1a5028f52b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2088ce6169a4737a7832f2675d5f0db~mv2.jpg','https://static.wixstatic.com/media/d9828b_89a7fb9f3c58461c806b8da7bd68db63~mv2.jpg','https://static.wixstatic.com/media/d9828b_281c7199a5454d70a728139f8812fbf4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fcccc37e40834103aabe6cfdcf98c1c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_44610d4e2c1943b292ebf38ebb46f499~mv2.jpg','https://static.wixstatic.com/media/d9828b_8306e160b4c94e5ea0cb1b285419a7df~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd6a9810870c45248ce23edc5ac62b04~mv2.jpg']},
      {address:'2945 15th St NW',city:'Canton, OH 44708',beds:3,baths:1,cover:'https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg',photos:['https://static.wixstatic.com/media/d9828b_8ad572acd9534fde971928bf4dfd845b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2d0b1522354f43b4af160ada13b862~mv2.jpg','https://static.wixstatic.com/media/d9828b_c34dac640c54422a961384cf4bedc6ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_12c020938651419ab6cda114ac0f6067~mv2.jpg','https://static.wixstatic.com/media/d9828b_d23a71ddecf3498bbc70b5f710852617~mv2.jpg','https://static.wixstatic.com/media/d9828b_0db2c8ebfef24bf4be09ee1fa3eefcb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f5e669fee0404368911dbbd13d08b1eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4af34dd916a4306ad037a14c9a34089~mv2.jpg','https://static.wixstatic.com/media/d9828b_925183fcdb4d45268dfa99770e00a5d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_35ac8afe070a4201b2b21524f02dc1c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_5986bd983bef4aeabfcc49a58afd6af3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f53f35d8875e4829b75e4c22119207c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_6c27d24e8a81457dae6e8f440f1afe8d~mv2.jpg','https://static.wixstatic.com/media/d9828b_3031fe0345cf455aa9edb0c155113245~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8a348608cfe4098875e9c25d18b18b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f6f2d7bbc0e42abaa2b5bbc34f05fb1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d00f65a8cfce4d5e9e5427011a88173b~mv2.jpg','https://static.wixstatic.com/media/d9828b_72422342fc204f0da5ec0a9926a014ae~mv2.jpg','https://static.wixstatic.com/media/d9828b_b76779870d434c0e9c928bddc37de2b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_a68e168f50b046f8a162de91f552bdf9~mv2.jpg']}
    ];

    var RENTS = {'806 23rd St NW':'$1,200','2007 Kirk Ct NW':'$1,350','818 25th St NW':'$1,250','519 21st St NW':'$1,385','523 21st St NW':'$1,200','1430 19th St NW':'$1,325','1919 Frazer Ave NW':'$1,200','1708 18th St NW':'$1,100','1734 Woodland Ave NW':'$1,055','2211 Myrtle Ave NW':'$1,250','800 22nd St NW':'$1,450','725 22nd St NW':'$1,150','635 Greenfield Ave SW':'$1,200','2923 Helen Pl NW':'$1,350','307 Bellflower Ave NW':'$1,375','2945 15th St NW':'$1,300'};

    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy"/>' +
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
csh-portfolio-nw{display:block;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}

/* ── HEADER ── */
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:88px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:52px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:10px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:10px 18px;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s,border-color .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:background .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}
.csh-hdr__burger{display:none;flex-direction:column;justify-content:space-between;width:26px;height:19px;background:none;border:none;cursor:pointer;padding:0;margin-left:auto;flex-shrink:0}
.csh-hdr__burger span{display:block;width:100%;height:2px;background:rgba(255,255,255,.85);border-radius:2px;transition:transform .25s,opacity .25s}
.csh-hdr__burger.open span:nth-child(1){transform:translateY(8.5px) rotate(45deg)}
.csh-hdr__burger.open span:nth-child(2){opacity:0}
.csh-hdr__burger.open span:nth-child(3){transform:translateY(-8.5px) rotate(-45deg)}
.csh-mob-nav{display:none;position:absolute;top:88px;left:0;right:0;background:#0a1628;border-top:1px solid rgba(255,255,255,.08);z-index:199;box-shadow:0 8px 32px rgba(0,0,0,.35)}
.csh-mob-nav.open{display:block}
.csh-mob-nav__inner{display:flex;flex-direction:column;padding:8px 0 16px}
.csh-mob-nav__link{padding:15px 20px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.85);text-decoration:none;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}
.csh-mob-nav__link:hover{background:rgba(255,255,255,.06)}
.csh-mob-nav__link:last-child{border-bottom:none}
.csh-mob-nav__link--gold{color:#c8962a}
@media(max-width:768px){.csh-hdr{padding:0 16px}.csh-hdr__nav{display:none}.csh-hdr__burger{display:flex}}

/* ── BACK + HERO ── */
.csh-back{display:block;padding:10px 28px;font-size:13px;font-weight:700;color:#5a6b85;text-decoration:none;letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid #e0e4ea;background:#fff}
.csh-back:hover{color:#0d1f35}
.hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:52px 32px 48px;text-align:center}
.hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(22px,4.4vw,44px);font-weight:900;margin-bottom:8px}
.hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}

/* ── FINANCIAL REPORTS SECTION ── */
.reports-section{background:#fff;border-bottom:2px solid rgba(10,30,60,.08);padding:32px 36px}
.reports-section__inner{max-width:900px;margin:0 auto}
.reports-section__label{font-size:11px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;color:#5a6b85;margin-bottom:18px}
.reports-section__btns{display:flex;gap:14px;flex-wrap:wrap}
.report-btn{flex:1;min-width:200px;padding:18px 22px;background:#0d1f35;color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;font-family:'Inter','Segoe UI',Arial,sans-serif;transition:background .2s,transform .15s;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 2px 10px rgba(10,30,60,.18)}
.report-btn:hover{background:#1a3557;transform:translateY(-2px)}
.report-btn--gold{background:linear-gradient(135deg,#c8962a,#dba83a);color:#0a1628}
.report-btn--gold:hover{background:linear-gradient(135deg,#dba83a,#c8962a)}

/* ── MAP SECTION ── */
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
.map-frame-wrap{position:relative;padding-bottom:0;height:580px}
.map-frame-wrap iframe{width:100%;height:100%;border:0;display:block}
@media(max-width:680px){.map-layout{grid-template-columns:1fr}.map-list{max-height:220px}.map-frame-wrap{height:420px}.map-wrap{padding:20px 16px}}

/* ── PROPERTY GRID ── */
.section-head{max-width:1040px;margin:48px auto 20px;padding:0 24px;display:flex;align-items:baseline;justify-content:space-between}
.section-head h2{font-size:22px;font-weight:800;color:#0D1F35;text-transform:uppercase;letter-spacing:.08em}
.section-head span{font-size:16px;color:#888}
.prop-grid{max-width:1040px;margin:0 auto 64px;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:24px}
.prop-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08);transition:transform .22s,box-shadow .22s;display:flex;flex-direction:column;cursor:pointer}
.prop-card:hover{transform:translateY(-5px);box-shadow:0 12px 32px rgba(0,0,0,.16)}
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

/* ── P&L MODAL (wide for 12 columns) ── */
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:12px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:16px;width:100%;max-width:1200px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:18px 52px 16px 22px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.3}
.pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:4px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:13px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow:auto;padding:18px;flex:1}

/* ── QuickBooks P&L Table ── */
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

/* ── RENT ROLL MODAL ── */
.rr-modal{position:fixed;inset:0;z-index:1001;display:flex;align-items:center;justify-content:center;padding:16px}
.rr-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.rr-modal__box{position:relative;background:#fff;border-radius:16px;max-width:780px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.rr-modal__head{padding:18px 52px 16px 22px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.rr-modal__title{font-size:15px;font-weight:800;color:#fff}
.rr-modal__sub{font-size:11px;color:#c8962a;font-weight:700;margin-top:4px;letter-spacing:.1em;text-transform:uppercase}
.rr-modal__close{position:absolute;top:13px;right:15px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.rr-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.rr-modal__body{overflow-y:auto;padding:20px 22px 24px;flex:1}
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
  <div class="hero__badge">Portfolio 1 &mdash; Malone Area 1</div>
  <h1 class="hero__title">Portfolio 1: Malone University / Pro Football Hall of Fame Area 1</h1>
  <p class="hero__sub">16 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
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
      <div class="map-header__title">Portfolio 1 — Property Locations</div>
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

<div class="section-head"><h2>Properties</h2><span>16 homes &middot; $20,140/mo &middot; $241,680 Annual</span></div>
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
  </div>
</div>

<!-- ══ RENT ROLL MODAL ══ -->
<div id="rr-modal" class="rr-modal" style="display:none" role="dialog" aria-modal="true">
  <div class="rr-modal__overlay" id="rr-modal-overlay"></div>
  <div class="rr-modal__box">
    <div class="rr-modal__head">
      <div class="rr-modal__title">Portfolio 1 &mdash; Rent Roll</div>
      <div class="rr-modal__sub">Malone University / Pro Football Hall of Fame Area 1</div>
      <button class="rr-modal__close" id="rr-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="rr-modal__body" id="rr-modal-body"></div>
  </div>
</div>
`;

    // ── Hamburger ──
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

    function openPLByProp(year) {
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
      var propCount = d.cols.length - 1;
      var html = '<div style="overflow-x:auto"><table class="pl-class-table"><thead><tr>';
      html += '<th class="pl-ct-th-lbl"></th>';
      for (var ci = 0; ci < propCount; ci++) { html += '<th class="pl-ct-th-val">' + d.cols[ci] + '</th>'; }
      html += '<th class="pl-ct-th-tot">Total</th></tr></thead><tbody>';
      d.rows.forEach(function(row) {
        var t = row.t;
        var cls = {'section':'pl-ct-section','group-hdr':'pl-ct-group-hdr','group':'pl-ct-group','item':'pl-ct-item','subtotal':'pl-ct-subtotal','total':'pl-ct-total','noi':'pl-ct-noi'}[t] || 'pl-ct-item';
        var isIndent = (t === 'item' || t === 'subtotal');
        var isForce  = (t !== 'item' && t !== 'group-hdr' && t !== 'section');
        var isDolTot = (t !== 'item');
        html += '<tr class="' + cls + '"><td class="pl-ct-lbl' + (isIndent ? ' pl-ct-ind' : '') + '">' + row.label + '</td>';
        if (row.v) {
          for (var vi = 0; vi < propCount; vi++) { html += '<td class="pl-ct-val">' + fv(row.v[vi], false, isForce) + '</td>'; }
          html += '<td class="pl-ct-tot-col">' + fv(row.v[propCount], isDolTot, true) + '</td>';
        } else {
          for (var ei = 0; ei < propCount + 1; ei++) { html += '<td class="pl-ct-val"></td>'; }
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

    // ── Rent Roll Modal ──
    var rrModal   = self.querySelector('#rr-modal');
    var rrBody    = self.querySelector('#rr-modal-body');
    var rrClose   = self.querySelector('#rr-modal-close');
    var rrOverlay = self.querySelector('#rr-modal-overlay');

    function openRentRoll() {
      var totalVal = RENT_ROLL.reduce(function(s,r){return s+r.value;},0);
      var totalMo  = RENT_ROLL.reduce(function(s,r){return s+r.monthlyRent;},0);
      var totalYr  = RENT_ROLL.reduce(function(s,r){return s+r.annualizedRent;},0);
      var html = '<div class="rr-portfolio-badge">Portfolio 1 &mdash; 16 Properties</div><div class="rr-table-wrap"><table class="rr-table">' +
        '<thead><tr><th>Property</th><th>Property Value</th><th>Monthly Rent</th><th>Annualized Rent</th></tr></thead><tbody>';
      RENT_ROLL.forEach(function(r) {
        html += '<tr><td>' + r.address + '</td>' +
          '<td>$' + r.value.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.monthlyRent.toLocaleString('en-US') + '</td>' +
          '<td class="rr-rent-val">$' + r.annualizedRent.toLocaleString('en-US') + '</td></tr>';
      });
      html += '</tbody><tfoot><tr><td>Portfolio 1 Total</td>' +
        '<td>$' + totalVal.toLocaleString('en-US') + '</td>' +
        '<td>$' + totalMo.toLocaleString('en-US') + '</td>' +
        '<td>$' + totalYr.toLocaleString('en-US') + '</td></tr></tfoot></table></div>';
      rrBody.innerHTML = html;
      rrModal.style.display = 'flex';
    }

    function closeRR() { rrModal.style.display = 'none'; }
    if (rrClose)   rrClose.addEventListener('click', closeRR);
    if (rrOverlay) rrOverlay.addEventListener('click', closeRR);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { closePL(); closeRR(); }
    });

    // ── Navigation ──
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
customElements.define('csh-portfolio-nw', CshPortfolioNw);
