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
      lines.push('"Portfolio 1 Total",' + tv + ',' + tm + ',' + ty);
      return lines.join('\r\n');
    }

    var PROPERTIES = [
      {address:'806 23rd St NW',city:'Canton, OH 44708',beds:2,baths:1,cover:'https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_6d6a969cc2894dbbb8465ddc399aa4e7~mv2.jpeg','https://static.wixstatic.com/media/64b604_27044adb4e5d4ac29036dd3404b640c1~mv2.jpeg','https://static.wixstatic.com/media/64b604_e54c155ba0154360b5f6da668c16b252~mv2.jpeg','https://static.wixstatic.com/media/64b604_a834953ee696493a821e56610b3d429e~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f7b936188c14465aed8f2459be69c9f~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f4b7569354f439ba8d809464d31a91f~mv2.jpeg','https://static.wixstatic.com/media/64b604_43750dbf67bf47b4b8cbeb9e8948e1f5~mv2.jpeg','https://static.wixstatic.com/media/64b604_dfda84de557e42678397ea338645a39f~mv2.jpeg','https://static.wixstatic.com/media/64b604_d4ccfb0749d94caeb2c0ec0dac27e781~mv2.jpeg','https://static.wixstatic.com/media/64b604_2af9a93b9f704350856502042a50ddd5~mv2.jpeg','https://static.wixstatic.com/media/64b604_e8b01f7396d043c88a588e863aee0a04~mv2.jpeg','https://static.wixstatic.com/media/64b604_84abd1b21db54edf89414b5b9cca9168~mv2.jpeg','https://static.wixstatic.com/media/64b604_c1ee663fd4e7478bb5e45a3bfbc27e88~mv2.jpeg','https://static.wixstatic.com/media/64b604_142716bdaf4e49f1a742c025381516ac~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa9f58cdcbb0453ea1b8359b2eff11b5~mv2.jpeg','https://static.wixstatic.com/media/64b604_8dd071597a3a45fb815c810ba22f8d28~mv2.jpeg','https://static.wixstatic.com/media/64b604_db2d6beaf4a7462b97957bac214abaf9~mv2.jpeg','https://static.wixstatic.com/media/64b604_97c81f5cc1fb468a9c5d92083ca4e5c7~mv2.jpeg','https://static.wixstatic.com/media/64b604_e77a1f89e7a444849f7229989ae18d81~mv2.jpeg','https://static.wixstatic.com/media/64b604_bee98d3f79f64d6fbd0946e1e81ded1f~mv2.jpeg']},
      {address:'2007 Kirk Ct NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_932f794976474b779eaf5d47aa58498a~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_2504daa3317a459788b9dce4f0cd9520~mv2.jpeg','https://static.wixstatic.com/media/64b604_ee4cd7deebd34178906632201892e758~mv2.jpeg','https://static.wixstatic.com/media/64b604_77bd1897c0db41a69b17689da2560683~mv2.jpeg','https://static.wixstatic.com/media/64b604_932f794976474b779eaf5d47aa58498a~mv2.jpeg','https://static.wixstatic.com/media/64b604_cbb980ba39c141a18f81696dbabc5404~mv2.jpeg','https://static.wixstatic.com/media/64b604_06fcf5b102b04b2bb499eeab635b1b4c~mv2.jpeg','https://static.wixstatic.com/media/64b604_5334e68d6aad42728ac068319151a2de~mv2.jpeg','https://static.wixstatic.com/media/64b604_c400de75afd14b4ead494f334ea03209~mv2.jpeg','https://static.wixstatic.com/media/64b604_df369aa5d1e44167a35c1ad03ff0a9cc~mv2.jpeg','https://static.wixstatic.com/media/64b604_45ea774010324d0eae746d5fd7b7c008~mv2.jpeg','https://static.wixstatic.com/media/64b604_d057830f13ea4249ae3676830f42f2d1~mv2.jpeg','https://static.wixstatic.com/media/64b604_1f35a96a6a754e6499de0bbab1fce0ed~mv2.jpeg','https://static.wixstatic.com/media/64b604_dba72948e94947c8aac30e35ef65dd30~mv2.jpeg','https://static.wixstatic.com/media/64b604_37097af78bac4ab19f4e757eb1819fcc~mv2.jpeg','https://static.wixstatic.com/media/64b604_05a88b6c74864824a2b02f3b17900e42~mv2.jpeg']},
      {address:'818 25th St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_81981028778342cabb18f06bbfbd7355~mv2.jpeg','https://static.wixstatic.com/media/64b604_3f1046e0d3374fd3a8d9da757411e32f~mv2.jpeg','https://static.wixstatic.com/media/64b604_a35a4eb7f0d149919bf119eeb0fc6a39~mv2.jpeg','https://static.wixstatic.com/media/64b604_4de0d42528e44abc8561b8d648912bb0~mv2.jpeg','https://static.wixstatic.com/media/64b604_78623150e7124358b608c33f6828d991~mv2.jpeg','https://static.wixstatic.com/media/64b604_1969193a41fe48e4913d9cc9c946d8d0~mv2.jpeg','https://static.wixstatic.com/media/64b604_5e3a54bb8ea4404b984a5931343c5005~mv2.jpeg','https://static.wixstatic.com/media/64b604_815535bf840446379a082730852c0456~mv2.jpeg','https://static.wixstatic.com/media/64b604_54fe0fcd78a04af297542037dec8ccc5~mv2.jpeg','https://static.wixstatic.com/media/64b604_c9c3d3b25cda4519a004c1605221c7db~mv2.jpeg','https://static.wixstatic.com/media/64b604_beb676c99cf24b46bacaca02c1586752~mv2.jpeg','https://static.wixstatic.com/media/64b604_239569968b79481389e47a2d7abc859e~mv2.jpeg','https://static.wixstatic.com/media/64b604_262b6026b9d3450d8d956c2873ff0df8~mv2.jpeg']},
      {address:'519 21st St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_9848993bc0ac462ebc34dfaf46c27e15~mv2.jpeg','https://static.wixstatic.com/media/64b604_c4b62f75b10646f8940e05c9c97f1012~mv2.jpeg','https://static.wixstatic.com/media/64b604_1dae6eee675641cb8016f846e7412085~mv2.jpeg','https://static.wixstatic.com/media/64b604_b0b336524f0a49828964ad84efd99c2a~mv2.jpeg','https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg','https://static.wixstatic.com/media/64b604_9d4ae4aa91644d74b4c09effe6613ef5~mv2.jpeg','https://static.wixstatic.com/media/64b604_9e25bd4511af44dcb88e89a124519cde~mv2.jpeg','https://static.wixstatic.com/media/64b604_d3a2d2b29f2b4944a65f9531a9fe79d7~mv2.jpeg','https://static.wixstatic.com/media/64b604_99259d40c0c1416ca7a2e39dc1f7276a~mv2.jpeg','https://static.wixstatic.com/media/64b604_c9c2ef836b5147778c0593aa728b5fa1~mv2.jpeg']},
      {address:'523 21st St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_94899323bf7a406ca740eb8d0c9385a1~mv2.jpeg','https://static.wixstatic.com/media/64b604_5849d546b0c34c91ac87049e3cd2c186~mv2.jpeg','https://static.wixstatic.com/media/64b604_9d4ae4aa91644d74b4c09effe6613ef5~mv2.jpeg','https://static.wixstatic.com/media/64b604_9e25bd4511af44dcb88e89a124519cde~mv2.jpeg','https://static.wixstatic.com/media/64b604_d3a2d2b29f2b4944a65f9531a9fe79d7~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f4012efb3184c9e8aa55a1d30b9fe8d~mv2.jpeg','https://static.wixstatic.com/media/64b604_c4b62f75b10646f8940e05c9c97f1012~mv2.jpeg','https://static.wixstatic.com/media/64b604_1dae6eee675641cb8016f846e7412085~mv2.jpeg','https://static.wixstatic.com/media/64b604_b0b336524f0a49828964ad84efd99c2a~mv2.jpeg']},
      {address:'1430 19th St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_1fb223dce671438ba6e84041ec1ae218~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_36607208da0f490c878bd1d6d46629c1~mv2.jpeg','https://static.wixstatic.com/media/64b604_5811a3115f934275b24798f6e480d95d~mv2.jpeg','https://static.wixstatic.com/media/64b604_20e4766e524f42b6a1df30ee31241113~mv2.jpeg','https://static.wixstatic.com/media/64b604_dee55c5d67c447eabea9cb2b9cfb9fdb~mv2.jpeg','https://static.wixstatic.com/media/64b604_cf4f57e72fa9476a84e553015cd2f8e2~mv2.jpeg','https://static.wixstatic.com/media/64b604_20136a4f82d34800b5e8de4b99f82632~mv2.jpeg','https://static.wixstatic.com/media/64b604_4f799e383ad04b19b20758bf3e84ca3d~mv2.jpeg','https://static.wixstatic.com/media/64b604_140331c9cb514961b89f70732b5caffd~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7dc69a57e4f4718959a1d20bf660c4a~mv2.jpeg','https://static.wixstatic.com/media/64b604_4341cb7ad30a4d2793e05c78741cfae4~mv2.jpeg']},
      {address:'1919 Frazer Ave NW',city:'Canton, OH 44709',beds:3,baths:2,cover:'https://static.wixstatic.com/media/64b604_acb37a36f21a43ea937a7f332c0b6169~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_0d499b5f03b24e71b18da04b91062734~mv2.jpeg','https://static.wixstatic.com/media/64b604_0edafaeba9fb4b2ca616be720f8430ec~mv2.jpeg','https://static.wixstatic.com/media/64b604_b6de733e7c044002a2b286df83225797~mv2.jpeg','https://static.wixstatic.com/media/64b604_63c878501b8649a68b961b05f2b956b0~mv2.jpeg','https://static.wixstatic.com/media/64b604_5db9f40ce4bc4b759344032575e2bbf4~mv2.jpeg','https://static.wixstatic.com/media/64b604_531fcd1edbc8473990200b33382721cf~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f335dcec3bc4d6c9dfc75ecf2a54542~mv2.jpeg','https://static.wixstatic.com/media/64b604_0fb2836a511b4b079605cd08b7682064~mv2.jpeg']},
      {address:'1708 18th St NW',city:'Canton, OH 44703',beds:3,baths:2,cover:'https://static.wixstatic.com/media/64b604_c830989a0cc24dbebee253e0e40a7132~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_6522350fdb724b9fa1a2b619877f4de2~mv2.jpeg','https://static.wixstatic.com/media/64b604_31b05bddcb8546e68bc9ee8af1e02c90~mv2.jpeg','https://static.wixstatic.com/media/64b604_db347481ca934a12b1b0920e373d7b1a~mv2.jpeg','https://static.wixstatic.com/media/64b604_99de40ab24a34821843f237847a5c40d~mv2.jpeg','https://static.wixstatic.com/media/64b604_e4c372cba56b4e6c9f4c95ca753ccb9a~mv2.jpeg','https://static.wixstatic.com/media/64b604_036f96fbc76248a08346adb9c6ce6d0c~mv2.jpeg','https://static.wixstatic.com/media/64b604_adaca8ab06e046d1979eb79ef5f397d7~mv2.jpeg','https://static.wixstatic.com/media/64b604_563c4e3ff9b643b29e50bce8dccd8582~mv2.jpeg','https://static.wixstatic.com/media/64b604_e05e5bf2ef5b4e9f982f1298d39e5dd5~mv2.jpeg']},
      {address:'1734 Woodland Ave NW',city:'Canton, OH 44703',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_3b2ba7ecaa034316951e9df1a6c5ff74~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_5e92ad3b10544334a374ad298388fd8f~mv2.jpeg','https://static.wixstatic.com/media/64b604_48eafe7e718b47149eb3ae240c755e1a~mv2.jpeg','https://static.wixstatic.com/media/64b604_93fdd1936b8d44649ca24257a472cc7e~mv2.jpeg','https://static.wixstatic.com/media/64b604_3f6a975b2bcf497497456f49661a275e~mv2.jpeg','https://static.wixstatic.com/media/64b604_3592a9831cca4f48afd6f95bb19aea20~mv2.jpeg','https://static.wixstatic.com/media/64b604_729d89a2f2294df7a7da074d2789ea68~mv2.jpeg']},
      {address:'2211 Myrtle Ave NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_5c6291bfcc0a4ea2affe04e0bff92e03~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_5c6291bfcc0a4ea2affe04e0bff92e03~mv2.jpeg','https://static.wixstatic.com/media/64b604_b8350ab015cc4ec2b46436d41e71177a~mv2.jpeg','https://static.wixstatic.com/media/64b604_ec13da5c46eb47debe6a59eedf407081~mv2.jpeg','https://static.wixstatic.com/media/64b604_92df9e8bef1a43f3b0d261c2e297ad7f~mv2.jpeg','https://static.wixstatic.com/media/64b604_2c0ddf54d811490f9719c18128b54fcf~mv2.jpeg','https://static.wixstatic.com/media/64b604_5be6b63ef0ee4dd2aa753e3f6f1b012f~mv2.jpeg','https://static.wixstatic.com/media/64b604_d4c4fef2d0254c5b8680ac8e1edf0bf4~mv2.jpeg','https://static.wixstatic.com/media/64b604_0de8e6af8d804436a4bd610e0bb73bd0~mv2.jpeg','https://static.wixstatic.com/media/64b604_c938b75db99b4dbbbf6040c996d002a5~mv2.jpeg','https://static.wixstatic.com/media/64b604_12edf9d4c7814baa96b0b5322d1c4667~mv2.jpeg','https://static.wixstatic.com/media/64b604_97b75dcf556546fd95697a5ccad89ae3~mv2.jpeg','https://static.wixstatic.com/media/64b604_5a46613da0db464598bca5a0f357d18a~mv2.jpeg','https://static.wixstatic.com/media/64b604_974339dc037941c2b40bcd92c56226ce~mv2.jpeg','https://static.wixstatic.com/media/64b604_a793fa4bcdce4a298daf98afc7745b2b~mv2.jpeg','https://static.wixstatic.com/media/64b604_88d865c67e6e40bda81a777a5708734f~mv2.jpeg','https://static.wixstatic.com/media/64b604_2a26a078bd1a4c318b7bf24b46cdd8ba~mv2.jpeg','https://static.wixstatic.com/media/64b604_4da5cb94c01b49df8211117ef00e0c17~mv2.jpeg','https://static.wixstatic.com/media/64b604_4b08ced39c49482597384598c0a166dd~mv2.jpeg','https://static.wixstatic.com/media/64b604_de018ee641da493d9721b77e419cbee5~mv2.jpeg','https://static.wixstatic.com/media/64b604_204fa8f601244d59b12191047983f7d9~mv2.jpeg','https://static.wixstatic.com/media/64b604_757806b1544e4b8799d04abadf26854f~mv2.jpeg','https://static.wixstatic.com/media/64b604_1edf084e3d844220987ba14574c9aedf~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b3e141982da464f99c7a1780ecd06a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_76d79ade972644d0aee7cb7b30f4acf3~mv2.jpeg']},
      {address:'800 22nd St NW',city:'Canton, OH 44709',beds:4,baths:1.5,cover:'https://static.wixstatic.com/media/64b604_5f5afd2ffaac449d835ef226329f2470~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_5d91ccaf9c6b40c0b5744b4ab63b7afe~mv2.jpeg','https://static.wixstatic.com/media/64b604_572885e717ff49048d661d072cb2afc7~mv2.jpeg','https://static.wixstatic.com/media/64b604_73e39602e30746d89f11c9b2249c7dcc~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce34f80c2f3c4e11ae14f37bf6edef4c~mv2.jpeg','https://static.wixstatic.com/media/64b604_c13c78390e994e58a713652a650ccaa6~mv2.jpeg','https://static.wixstatic.com/media/64b604_6e2fb6e63a3a4d9e8744a955f3eaadab~mv2.jpeg','https://static.wixstatic.com/media/64b604_62427442ba954278a26b1b16ad5c17ca~mv2.jpeg','https://static.wixstatic.com/media/64b604_0873bcc5daf44c169002fc6663868c73~mv2.jpeg','https://static.wixstatic.com/media/64b604_c41cd725c82844aea0f8c05276c05fc5~mv2.jpeg']},
      {address:'725 22nd St NW',city:'Canton, OH 44709',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_2f12bc452b22496b9086d6f5a95623ad~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_f5a6017dd44249a9a7375375267c9c99~mv2.jpeg','https://static.wixstatic.com/media/64b604_31aaec9acda343ed9131e3d9c293e4c4~mv2.jpeg','https://static.wixstatic.com/media/64b604_b78bc093db8346a195c5921b8a6dad98~mv2.jpeg','https://static.wixstatic.com/media/64b604_dc0cd91cf2434c86b9269e48ecd8174f~mv2.jpeg','https://static.wixstatic.com/media/64b604_879850dea0df4c5f88d90c39e4b1e35a~mv2.jpeg','https://static.wixstatic.com/media/64b604_4b86a2046e104dce8741f557a0914d6c~mv2.jpeg','https://static.wixstatic.com/media/64b604_06945c548e694e8795802e41c97b0ccf~mv2.jpeg','https://static.wixstatic.com/media/64b604_b7dfe8af0fb44fcbb45cdc809e21096c~mv2.jpeg']},
      {address:'635 Greenfield Ave SW',city:'Canton, OH 44706',beds:2,baths:2,cover:'https://static.wixstatic.com/media/64b604_c53805e63cfc4e6ea8185865e9574cab~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_b667e6f4d0c1425aa80d0fbac20c3b93~mv2.jpeg','https://static.wixstatic.com/media/64b604_e1f81fb0d29549e4bb66e822ab5ec4dc~mv2.jpeg','https://static.wixstatic.com/media/64b604_940177374d5542b098ad6c74a37c2ec7~mv2.jpeg','https://static.wixstatic.com/media/64b604_db13505dabef4c27b4130edc03d526e7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce4ffabcfa754ddf829e6773bf293a15~mv2.jpeg','https://static.wixstatic.com/media/64b604_989c3c702a384553869441e0c6798675~mv2.jpeg','https://static.wixstatic.com/media/64b604_e7f2e0d66f6c49e599ee1f433aa20fff~mv2.jpeg','https://static.wixstatic.com/media/64b604_7b46acc41c384ef284d592a891a2cf5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_668b074364c34ded882d300406fb5ed3~mv2.jpeg','https://static.wixstatic.com/media/64b604_2fcb74e2925a47f587bbcc82d91e5cfe~mv2.jpeg','https://static.wixstatic.com/media/64b604_0cc6d76060324c8aba0ea98ead379253~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d977d85141442f88c9e1df86554aed~mv2.jpeg','https://static.wixstatic.com/media/64b604_8ff9de41d9d64055bca0cdf3bb190729~mv2.jpeg','https://static.wixstatic.com/media/64b604_73990df58e124fe292128da0f8f5466f~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce7bc681d40f440ea823300c44d65709~mv2.jpeg','https://static.wixstatic.com/media/64b604_d7ca473d42df48ff8a3d787bddf37656~mv2.jpeg','https://static.wixstatic.com/media/64b604_a2d9dfd891624456a7e72cdce2188566~mv2.jpeg','https://static.wixstatic.com/media/64b604_204a0bb2c592496e90b58d9eaca2e431~mv2.jpeg','https://static.wixstatic.com/media/64b604_dbf870f3b32c46fb8c5821ea831f3505~mv2.jpeg','https://static.wixstatic.com/media/64b604_fe0f540f908a493fbc785bad211774f8~mv2.jpeg','https://static.wixstatic.com/media/64b604_c889ce7e527040ba971e0f30a1510f57~mv2.jpeg','https://static.wixstatic.com/media/64b604_b659f4932b1647b89e6ebd8eeb3ffa5b~mv2.jpeg','https://static.wixstatic.com/media/64b604_81496074fd2e4e369cb065f9388dd19e~mv2.jpeg','https://static.wixstatic.com/media/64b604_aade381e30de47389a03f18650b18686~mv2.jpeg','https://static.wixstatic.com/media/64b604_f4370a409240435593a6b827d59c360e~mv2.jpeg']},
      {address:'2923 Helen Pl NW',city:'Canton, OH 44708',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_296278139a8949368e9d5bb5db702146~mv2.jpeg','https://static.wixstatic.com/media/64b604_054367b837d8455fbb6cd5bf7749d05c~mv2.jpeg','https://static.wixstatic.com/media/64b604_5140b5a114284d1dbad6e237972957ff~mv2.jpeg','https://static.wixstatic.com/media/64b604_7f080e1470a84cf2b4e97380ea515444~mv2.jpeg','https://static.wixstatic.com/media/64b604_41109bd30b724fb7998eb3735edeb774~mv2.jpeg','https://static.wixstatic.com/media/64b604_299fa1ee80a445609a5ed2451bacd558~mv2.jpeg','https://static.wixstatic.com/media/64b604_bea586d38112449fad4c5ec53b151ddd~mv2.jpeg','https://static.wixstatic.com/media/64b604_596c6c26f4e641e5979875b19c47b5b6~mv2.jpeg','https://static.wixstatic.com/media/64b604_582f360c952b4abb8bf7db78f902dae7~mv2.jpeg','https://static.wixstatic.com/media/64b604_08d73a3c6fb14da5a2922686347ec6bc~mv2.jpeg','https://static.wixstatic.com/media/64b604_58624372dd254cd1862819ae1f18967c~mv2.jpeg','https://static.wixstatic.com/media/64b604_78cf855c89d24155b74b3223c629f1da~mv2.jpeg','https://static.wixstatic.com/media/64b604_60c601e61541479ead7012753af1227b~mv2.jpeg','https://static.wixstatic.com/media/64b604_37852f0736344199aaf3f1bcfe208a2a~mv2.jpeg','https://static.wixstatic.com/media/64b604_7920b65b467346cc8ea0c9e0b8924f70~mv2.jpeg']},
      {address:'307 Bellflower Ave NW',city:'Canton, OH 44708',beds:3,baths:1.5,cover:'https://static.wixstatic.com/media/64b604_28a42e5cd1994e2a9d2c3c73d0cdbbf4~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_0f7be59ea6f6404d9993facda7f4bf56~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa41f41c304d407fb746142e781d74a0~mv2.jpeg','https://static.wixstatic.com/media/64b604_24d8159ca79847e6b29019c6147c8361~mv2.jpeg','https://static.wixstatic.com/media/64b604_46d27b8f8ae742a3a8ffede925513281~mv2.jpeg','https://static.wixstatic.com/media/64b604_41fa6309ea914a0db241e8d0232ee6c0~mv2.jpeg','https://static.wixstatic.com/media/64b604_a1ec155490534718a58cabea27e85959~mv2.jpeg','https://static.wixstatic.com/media/64b604_59d6f2b98de84d1291461f03902e4668~mv2.jpeg','https://static.wixstatic.com/media/64b604_ce72d6b8c30d4ad7adec8ae026b5c423~mv2.jpeg','https://static.wixstatic.com/media/64b604_11829af3dc624c2b96e53e9d8b76f732~mv2.jpeg','https://static.wixstatic.com/media/64b604_57b22e0b87b54f92ad87344fec65494e~mv2.jpeg','https://static.wixstatic.com/media/64b604_2b09c12635344d8eb3f20726cadcc416~mv2.jpeg','https://static.wixstatic.com/media/64b604_64341f46689f47f8b036a214bad02813~mv2.jpeg','https://static.wixstatic.com/media/64b604_3d05ff1703fe4131b56602f57f6a3846~mv2.jpeg','https://static.wixstatic.com/media/64b604_67d1162df55748898f0bd74acabd4f83~mv2.jpeg','https://static.wixstatic.com/media/64b604_358e87e9f268476f85d02a9ebed0a4ee~mv2.jpeg','https://static.wixstatic.com/media/64b604_aa724bfdcbda4cc7a628394e98f872e3~mv2.jpeg','https://static.wixstatic.com/media/64b604_3843517fb0ac4df69b122df8465cf7f9~mv2.jpeg','https://static.wixstatic.com/media/64b604_fb0cc83f894944a98681c06cd5039ef1~mv2.jpeg','https://static.wixstatic.com/media/64b604_eed72c1637af44c2b596fe78c9e21732~mv2.jpeg','https://static.wixstatic.com/media/64b604_78356ee58e7a44b39cedbcee486aa5ec~mv2.jpeg','https://static.wixstatic.com/media/64b604_adc759c5f63d4e3d8ed352839df99ea4~mv2.jpeg']},
      {address:'2945 15th St NW',city:'Canton, OH 44708',beds:3,baths:1,cover:'https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg',photos:['https://static.wixstatic.com/media/64b604_d1f99b62c7134110a1ded73d93c35f2e~mv2.jpeg','https://static.wixstatic.com/media/64b604_aefb12adf7e3476594b2b1036b7da5b0~mv2.jpeg','https://static.wixstatic.com/media/64b604_6f55fbc5917b46fcb76ebadd1e66b908~mv2.jpeg','https://static.wixstatic.com/media/64b604_2ec983e4267149408f1cd3ceaa975bf3~mv2.jpeg','https://static.wixstatic.com/media/64b604_bd6642cb0e9f403c9ca46cfc4ecbf40b~mv2.jpeg','https://static.wixstatic.com/media/64b604_e5a32dbdceef443ebde5a5722b0dbb59~mv2.jpeg','https://static.wixstatic.com/media/64b604_35df9b19480e439fb7ff7400eebfc13a~mv2.jpeg','https://static.wixstatic.com/media/64b604_00bb8704f44c4acca09ad2dfa9b8a595~mv2.jpeg','https://static.wixstatic.com/media/64b604_19e4e1868809406593cf43c0bf56c6ab~mv2.jpeg','https://static.wixstatic.com/media/64b604_ab764bbc2bd341e593c144de14e3839a~mv2.jpeg','https://static.wixstatic.com/media/64b604_65daebcaa239455291784a2d54c8bc8b~mv2.jpeg','https://static.wixstatic.com/media/64b604_12c060754bff4acfa5a5afaddb1bbe7b~mv2.jpeg','https://static.wixstatic.com/media/64b604_7d25a283113f4859bc16106de5c1be13~mv2.jpeg','https://static.wixstatic.com/media/64b604_f931d4b521c146ffb6834eb523601cc7~mv2.jpeg','https://static.wixstatic.com/media/64b604_ab0be4f474494d76b8a0db8541d5c809~mv2.jpeg','https://static.wixstatic.com/media/64b604_76977a7b003a4c46a476ee530faa1a5d~mv2.jpeg','https://static.wixstatic.com/media/64b604_75bbf0a444f4432cbb26722148f8b2b9~mv2.jpeg','https://static.wixstatic.com/media/64b604_a01b8ad2049a44dd9544cd716c515442~mv2.jpeg','https://static.wixstatic.com/media/64b604_495e3ee514ea4a7ab556f84f3e83f86c~mv2.jpeg','https://static.wixstatic.com/media/64b604_68fe67c2fd9e48cf991a5bcaec240c3d~mv2.jpeg','https://static.wixstatic.com/media/64b604_11f1f2ab80bb4b78afb5f6370bed4c41~mv2.jpeg']}
    ];

    var RENTS = {'806 23rd St NW':'$1,200','2007 Kirk Ct NW':'$1,350','818 25th St NW':'$1,250','519 21st St NW':'$1,385','523 21st St NW':'$1,200','1430 19th St NW':'$1,325','1919 Frazer Ave NW':'$1,200','1708 18th St NW':'$1,100','1734 Woodland Ave NW':'$1,055','2211 Myrtle Ave NW':'$1,250','800 22nd St NW':'$1,450','725 22nd St NW':'$1,150','635 Greenfield Ave SW':'$1,200','2923 Helen Pl NW':'$1,350','307 Bellflower Ave NW':'$1,375','2945 15th St NW':'$1,300'};

    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy"/>' +
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
.pl-modal__foot{padding:12px 22px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 16px 16px;display:flex;justify-content:flex-end;flex-shrink:0}
.rr-modal__foot{padding:12px 22px 16px;background:#f5f7fa;border-top:1px solid rgba(10,30,60,.08);border-radius:0 0 16px 16px;display:flex;justify-content:flex-end;flex-shrink:0}
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
      <div class="rr-modal__title">Portfolio 1 &mdash; Rent Roll</div>
      <div class="rr-modal__sub">Malone University / Pro Football Hall of Fame Area 1</div>
      <button class="rr-modal__close" id="rr-modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="rr-modal__body" id="rr-modal-body"></div>
    <div class="rr-modal__foot">
      <button class="dl-btn" id="rr-download-btn" type="button">&#8595; Download CSV</button>
    </div>
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

    var plDlBtn = self.querySelector('#pl-download-btn');
    var rrDlBtn = self.querySelector('#rr-download-btn');
    if (plDlBtn) plDlBtn.addEventListener('click', function() {
      if (_currentPlYear) downloadCSV('Portfolio1_MaloneArea1_PL_' + _currentPlYear + '.csv', buildPLCsv(_currentPlYear));
    });
    if (rrDlBtn) rrDlBtn.addEventListener('click', function() {
      downloadCSV('Portfolio1_MaloneArea1_RentRoll.csv', buildRRCsv());
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
