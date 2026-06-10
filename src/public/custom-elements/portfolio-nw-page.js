// @ts-nocheck
class CshPortfolioNw extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1';
    var PL_DATA = {'2024':{title:'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1',period:'January – December 2024',income:[['LTR Rents',133893],['Late Fees',1419],['Cash Receipts',19634],['Security Deposits',11725]],totalIncome:166671,expenses:[['Repair Labor',23351],['Repair Materials',732],['Real Estate Taxes',17026]],totalExpenses:41109,noi:125563},'2025':{title:'Portfolio 2 — Malone University / Pro Football Hall of Fame Area 1',period:'January – December 2025',income:[['LTR Rents',114910],['Late Fees',6490],['Cash Receipts',52194],['Security Deposits',3950]],totalIncome:177544,expenses:[['Lawncare',930],['Pest Control',138],['Repair & Maintenance',3683],['Repair Labor',16038],['Repair Materials',51],['Real Estate Taxes',16041]],totalExpenses:36882,noi:140663}};
    function fmt(n) {
      if (n === null || n === undefined || n === '') return '\u2014';
      var num = Math.round(Number(n));
      if (isNaN(num)) return String(n);
      var s = '$' + Math.abs(num).toLocaleString('en-US');
      return num < 0 ? '(' + s + ')' : s;
    }
    var PROPERTIES = [
      {
        address: '806 23rd St NW', city: 'Canton, OH 44708', beds: 2, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_6be40f64a2de453484382ec7f20d89ef~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_6be40f64a2de453484382ec7f20d89ef~mv2.jpg','https://static.wixstatic.com/media/d9828b_558ebde4146b433a988f575c6e2e9752~mv2.jpg','https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg','https://static.wixstatic.com/media/d9828b_0ff07cb2e9b342969e528ef0f014acd2~mv2.jpg','https://static.wixstatic.com/media/d9828b_e11019144a96401ebbe72e57a5c64659~mv2.jpg','https://static.wixstatic.com/media/d9828b_04c804fbbfe245fda20fe7b9f50c84e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_8abf24fbabcd4444a2670f37abbcb0a9~mv2.jpg','https://static.wixstatic.com/media/d9828b_5f2a09967b5a4f18b0715e47f734e249~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7278f7201834cc5ab2979f274b059e5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4ee87ea194c44ef9f7c493dab6a3c6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d488f0320df4914ab8c7476c4d16fe4~mv2.jpg','https://static.wixstatic.com/media/d9828b_cec56acee666435d965bf5a77414642e~mv2.jpg','https://static.wixstatic.com/media/d9828b_dedef0dc4e0d4175b28c1f0abdf40e49~mv2.jpg','https://static.wixstatic.com/media/d9828b_7fd78d333d58490e93fd3c5bffe1a047~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f209ce8a5404569bdadd56685be0488~mv2.jpg','https://static.wixstatic.com/media/d9828b_86c3dc0b1edb44bca57fc411399884d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1480d3bbaab4a769da11b87ba9a0a45~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9af6b16b1b44e288260d4aad13f1cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_091a27f145224f20a2c943abfcb46cb0~mv2.jpg','https://static.wixstatic.com/media/d9828b_9ae359a9c80e498294c0d688c7d970c3~mv2.jpg','https://static.wixstatic.com/media/d9828b_6be40f64a2de453484382ec7f20d89ef~mv2.jpg','https://static.wixstatic.com/media/d9828b_4c10925124e4492583de1227b3692399~mv2.jpg','https://static.wixstatic.com/media/d9828b_08870d0405df431eb249d9f1cd9a19e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_764015ed688545d9914fa2fcdf059710~mv2.jpg','https://static.wixstatic.com/media/d9828b_b776664a83574663b240b934115a6324~mv2.jpg','https://static.wixstatic.com/media/d9828b_b92a2b0c9060491899ed01d5540c210f~mv2.jpg','https://static.wixstatic.com/media/d9828b_6daaf9fabc984d19aaf0123694f50d59~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa565b8730ef4047b83adfd865437456~mv2.jpg','https://static.wixstatic.com/media/d9828b_eac1274297c04d0e9b76924b7f67268f~mv2.jpg','https://static.wixstatic.com/media/d9828b_418041988d0947369f81e4adc14f499b~mv2.jpg','https://static.wixstatic.com/media/d9828b_72d358963626417d839f6f04b2454616~mv2.jpg']
      },
      {
        address: '2007 Kirk Ct NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a3f1b8fe26ca497aae692326ef428623~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_a3f1b8fe26ca497aae692326ef428623~mv2.jpg','https://static.wixstatic.com/media/d9828b_7aba94f5a0994b8299fdf12ba3c5dbaa~mv2.jpg','https://static.wixstatic.com/media/d9828b_80ef7b47cf114f8da0dba2efa93ef0b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg','https://static.wixstatic.com/media/d9828b_bde14c4b6a104f0b8eaae98c9d43ce75~mv2.jpg','https://static.wixstatic.com/media/d9828b_5660d011886d4025be71cd95c893adc4~mv2.jpg','https://static.wixstatic.com/media/d9828b_15061a07e3a44120831f1ae5134c083d~mv2.jpg','https://static.wixstatic.com/media/d9828b_88b526fb445544c58350648aa73af21a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dfe81723f16548b79fed1163188e25e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7bff44ccb0e46a8b312bb75f1cd49b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_3739d8d7628c45f2af7a70c91952c39d~mv2.jpg','https://static.wixstatic.com/media/d9828b_fbc37a1f66bb4a0c8df5fbbb3d2836a2~mv2.jpg','https://static.wixstatic.com/media/d9828b_088161bda5214f48acd4ab57b7096275~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1ade30b09d74bd991d00bf452d0f21e~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e29ccbbc3a401b8bc19be80d4a53de~mv2.jpg','https://static.wixstatic.com/media/d9828b_de7e72a156804b419d04da86059dafb1~mv2.jpg','https://static.wixstatic.com/media/d9828b_3600e4260c724d39ab61dcc17eea85d9~mv2.jpg','https://static.wixstatic.com/media/d9828b_588f035ab6904557b1e6636e38a0a362~mv2.jpg','https://static.wixstatic.com/media/d9828b_82d36dd4c6e1412b93d196377929b0f7~mv2.jpg','https://static.wixstatic.com/media/d9828b_edcb93a739614bd480a528b5883ae0d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5bc89658ef9442991f315ae7a132928~mv2.jpg','https://static.wixstatic.com/media/d9828b_7bb17869c5104ad7b0746f22bc677799~mv2.jpg','https://static.wixstatic.com/media/d9828b_e440c88d188647c7b64a6ddca7a909c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_87ae1b982b61442189c7bf2ba3bc8334~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5ed13cd83274c438b9975896f41abd2~mv2.jpg','https://static.wixstatic.com/media/d9828b_43598e9aa32f49b9bf760e171ab63e3c~mv2.jpg']
      },
      {
        address: '818 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_2d552cf9168f4741b747927451fcf538~mv2.jpg','https://static.wixstatic.com/media/d9828b_ccf98a0e23944898846af9a30f0b9384~mv2.jpg','https://static.wixstatic.com/media/d9828b_c44a1f6320604ceca7f6de34f53c07b0~mv2.jpg','https://static.wixstatic.com/media/d9828b_83190796e1794c13b72740a895ff985f~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cb3b9d67606410194e02ae036154093~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e6be6cf61949439db2b94ca6fcebf5~mv2.jpg','https://static.wixstatic.com/media/d9828b_3dec0b76e8b147deb44ea82c5848c8d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb67d592d9114021889c8c7fd3899427~mv2.jpg','https://static.wixstatic.com/media/d9828b_fdaae49535444d428939da6d0f5652f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_65765707b5e0446b8ef8bcba6bce9827~mv2.jpg','https://static.wixstatic.com/media/d9828b_4da54f97ff5c4f8487452ed57dbff9a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4cab9396762044a69f1b468b53eda60a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c63a359a8344349838d5af2ed340187~mv2.jpg','https://static.wixstatic.com/media/d9828b_b8fa39eeef71459797bdd92bcb651cc1~mv2.jpg','https://static.wixstatic.com/media/d9828b_21b306afd90849808e46f248081b4e05~mv2.jpg','https://static.wixstatic.com/media/d9828b_2db11308cada41fcb79e2260d151ccc5~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad295cff0d5a41a1b870a9b2b700478e~mv2.jpg','https://static.wixstatic.com/media/d9828b_541d11e2980049798094f4bc23302062~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebfa7420922847489e65f6226c60aec4~mv2.jpg','https://static.wixstatic.com/media/d9828b_343728ef7f9c4713a9aaef0fc1cd7ed0~mv2.jpg','https://static.wixstatic.com/media/d9828b_38cfd45362a8462fb2d7973249705481~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7d3636b265141ab9ad151ec1702145b~mv2.jpg','https://static.wixstatic.com/media/d9828b_39d085f24ffa44208dfb16a0b05532a1~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec79e6eceb57435493190daadc318c40~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg']
      },
      {
        address: '519 21st St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_aeaa9243b88049f1b91625261782e32a~mv2.jpg','https://static.wixstatic.com/media/d9828b_48e820ffdd1d4ba2a50337b1c77cd284~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed54a63873eb429d84f81bbc576109ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0072de36d7e4cfc96b7a6ddd32541f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0321c07d9f14b1da7dad0736b05cc66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a21a12c038840fd87251fee0ce12ca7~mv2.jpg','https://static.wixstatic.com/media/d9828b_16f5e16ef3e748d6974a9dca3ce70d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_46dbd0170fa64b47ab669baa8c1971e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_28d9ee4f69df4101b10bd5f2a77bf478~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b637f258ac947c98c99c15a86ff69b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f24f12f551e43ebaf47f66734e6cf1d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c83d81251fd494c8504f52614f65788~mv2.jpg','https://static.wixstatic.com/media/d9828b_f66794b9795c42d987d74351295ccbb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_e66c629024684ea98bf26eb5ccc17144~mv2.jpg','https://static.wixstatic.com/media/d9828b_546ad72822dd436fa61814f9ba0c70bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg','https://static.wixstatic.com/media/d9828b_02b594a16c66444bbb1bbdff2ddbbe92~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec4dbc46770d48e698a99a2f13073a11~mv2.jpg','https://static.wixstatic.com/media/d9828b_29e4864c249c46aca2d7dbe88e918837~mv2.jpg']
      },
      {
        address: '523 21st St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg','https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0072de36d7e4cfc96b7a6ddd32541f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0321c07d9f14b1da7dad0736b05cc66~mv2.jpg','https://static.wixstatic.com/media/d9828b_7c98f88b7bdb443087c8ec642005669f~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a21a12c038840fd87251fee0ce12ca7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f66794b9795c42d987d74351295ccbb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_aeaa9243b88049f1b91625261782e32a~mv2.jpg','https://static.wixstatic.com/media/d9828b_48e820ffdd1d4ba2a50337b1c77cd284~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed54a63873eb429d84f81bbc576109ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_16f5e16ef3e748d6974a9dca3ce70d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_46dbd0170fa64b47ab669baa8c1971e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_28d9ee4f69df4101b10bd5f2a77bf478~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b637f258ac947c98c99c15a86ff69b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f24f12f551e43ebaf47f66734e6cf1d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c83d81251fd494c8504f52614f65788~mv2.jpg','https://static.wixstatic.com/media/d9828b_e66c629024684ea98bf26eb5ccc17144~mv2.jpg','https://static.wixstatic.com/media/d9828b_546ad72822dd436fa61814f9ba0c70bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg','https://static.wixstatic.com/media/d9828b_d019525287d046b59b38dd69a16b8534~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ab1229ac9cf4637bed3181422beff18~mv2.jpg','https://static.wixstatic.com/media/d9828b_1872eb71fa714e04b2e2ca7c2118395f~mv2.jpg','https://static.wixstatic.com/media/d9828b_cba072f9b1614c799f814bd1eef1eddb~mv2.jpg','https://static.wixstatic.com/media/d9828b_29e4864c249c46aca2d7dbe88e918837~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec4dbc46770d48e698a99a2f13073a11~mv2.jpg']
      },
      {
        address: '1430 19th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_1a759132191d45808ff36146d8d70658~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_1a759132191d45808ff36146d8d70658~mv2.jpg','https://static.wixstatic.com/media/d9828b_83954cb5091b4baa85375ce5d16eebf0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cc81e4690f2411ca550c9b857a72ade~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed540304c07b4728aea597314ffb8aca~mv2.jpg','https://static.wixstatic.com/media/d9828b_840d67cf25da4662b82d315528e5c91f~mv2.jpg','https://static.wixstatic.com/media/d9828b_969b6ee3036a4587b176209b7b2a8421~mv2.jpg','https://static.wixstatic.com/media/d9828b_c548321f5a53437996e4773d981aa1e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff5ff4fb87a4201bf2c1503c418f271~mv2.jpg','https://static.wixstatic.com/media/d9828b_c985e3bf73d34a05a4d39934086398bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b557c7c2173245ccab336eabc7938435~mv2.jpg','https://static.wixstatic.com/media/d9828b_60b7e5b4acce4cefbf481015d72e267b~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b3148184f9c440b85d14f45fd5e7256~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a759132191d45808ff36146d8d70658~mv2.jpg','https://static.wixstatic.com/media/d9828b_87a89a90848045dab6eee23dc3ecbdbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_a346f0ad61e4430ab0bd6e0443529da9~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d84c818fe0c466d9b475b5471463a66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a5308115a594f378a74e1d25c4994b5~mv2.jpg','https://static.wixstatic.com/media/d9828b_04b99893f8194ee2856d895044db5543~mv2.jpg','https://static.wixstatic.com/media/d9828b_721dc974bc2642ec9c0c05ec77d91a49~mv2.jpg','https://static.wixstatic.com/media/d9828b_4384a6e9723c4e81b0bf8b464d977ca0~mv2.jpg','https://static.wixstatic.com/media/d9828b_4a19a643806e40ae9d6be60ca3d2c382~mv2.jpg']
      },
      {
        address: '1919 Frazer Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_cc62349453604b258759e7968967f78f~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_cc62349453604b258759e7968967f78f~mv2.jpg','https://static.wixstatic.com/media/d9828b_68cc2bcbc5ca495c8af5e70722ecf6c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_55623abf26b646f0acf5ac105640eb98~mv2.jpg','https://static.wixstatic.com/media/d9828b_6971f7d2c9b2496e86820c435b2b60f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a86e1ed6ebfe4061a8b03f4ff1424709~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d3b0e25b9a64e029d5ca303d73452eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b44206a3b69045ada56499ef3c3cc30b~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a967defc22f4dbea0c2e30e94aa0f4a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e839cf4319ed4d888a82d883ec580ac0~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc62349453604b258759e7968967f78f~mv2.jpg','https://static.wixstatic.com/media/d9828b_8bbfeb1f7b0c41e7ad9ecbe8412e20d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7b8823ec507a4af1acb5998da0b2d11a~mv2.jpg','https://static.wixstatic.com/media/d9828b_396c92c93f804cf99e3c469867db1be6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a710f40c6af44b5f9e125a018421c59d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a1796823bce49e2b2bac368f3a70445~mv2.jpg','https://static.wixstatic.com/media/d9828b_e96595954533494788a9cc0a715caed6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f70a4da023634d81aaa37ed6ba564b3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_10c72115a64e41cba731d2bfd8e480e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e0482432bbe44079008006d1165376b~mv2.jpg']
      },
      {
        address: '1708 18th St NW', city: 'Canton, OH 44703', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_f96c8a42f8a94cea8e66092e74bfe1d4~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_f96c8a42f8a94cea8e66092e74bfe1d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4478974a66244efa6ebc3ac70762d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_71b3e32c25434012912df3b992993cd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2af6f49f545d46098eaca3a9968df487~mv2.jpg','https://static.wixstatic.com/media/d9828b_6adc3bc4cc7248daafbcbdc9c68d899a~mv2.jpg','https://static.wixstatic.com/media/d9828b_abe25b7efee54e16a4cf5c1af741e32f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b390fe2121d54d1abd18b441e59132ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_45c15d15fc7c4364bc5620dccf33dc6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_df2706e8b74a4625ab71c8ed3726e60f~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ec37e74d06c43b69a04926702d35f9d~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4ae515a62084045bd5a56194635b533~mv2.jpg','https://static.wixstatic.com/media/d9828b_25b49b44d03249e19c618250eca8a60d~mv2.jpg','https://static.wixstatic.com/media/d9828b_feefd23ba0cf41199a683b340ff9b425~mv2.jpg','https://static.wixstatic.com/media/d9828b_d3d7031951a846418008c187e31ec6a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_089c17e27afa4969be4456a4072a24fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_14902a5feff74713b9a5d549a4b9f8a0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8835703a91e8418c88c9ede4e51ebc5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_31cb6358388e4affa117d843daaf276d~mv2.jpg','https://static.wixstatic.com/media/d9828b_012c27bfcc5d4e4e9ef397651ccddeba~mv2.jpg','https://static.wixstatic.com/media/d9828b_c3250bcdfa884778a3ff9f5e02d029f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_722d8efa3b224bf085e80a56b9de731e~mv2.jpg']
      },
      {
        address: '1734 Woodland Ave NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg','https://static.wixstatic.com/media/d9828b_615742817b6a49f0a7107459b590b5eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_ef25a5b593214153bbdfb69c5fc5451a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d693844ecc2444697a612dc70b6b71d~mv2.jpg','https://static.wixstatic.com/media/d9828b_aef5e35cf6594b868a68c2f2067b63a6~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e8e339d238541de9eb6ac9f00adf9bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a8e3b2d4bb04abe8f0d9e02c9e46b30~mv2.jpg','https://static.wixstatic.com/media/d9828b_420a506ca49d42b38a144264f2bfc894~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2c69b0c0f0d4132a1139b68a4bc980a~mv2.jpg','https://static.wixstatic.com/media/d9828b_6430e8af3bf54b6582a4cff26a28c511~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8197b706fca47cb9479785bbd2537c3~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec468d7d4b5949d1915e719f3abb80f7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0ae48477a75457e9b8c2222f8a114b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a269d6a74fd4d76830d50bebe40cc5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_d2b1ef513aa54b61a558da9a3fa2e3a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a27bc187a734f8193440f0f895a5644~mv2.jpg','https://static.wixstatic.com/media/d9828b_a29a9169bb5e41d981a4e903edfca3fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg']
      },
      {
        address: '2211 Myrtle Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_63db1c3664b0443eb97a7c7886eb0561~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_63db1c3664b0443eb97a7c7886eb0561~mv2.jpg']
      },
      {
        address: '800 22nd St NW', city: 'Canton, OH 44709', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_60f51d826bd3462081e8c1feb3140546~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_60f51d826bd3462081e8c1feb3140546~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c51f1c90f5742189ac87d2aa597629e~mv2.jpg','https://static.wixstatic.com/media/d9828b_12b24248d0d543028e3b5714f9f3ae6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0b8a91bfcc64b499e53784c39f56945~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9f2f12b91da4c7d8a48595b83316cd3~mv2.jpg','https://static.wixstatic.com/media/d9828b_737b964dc109434b8ed7b4d608211dd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd7a6a06d50442ecb4efe5e0c48379c0~mv2.jpg','https://static.wixstatic.com/media/d9828b_a04abac593c04774ae2b3db7bf1a5d38~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3607eb119aa4e6ba618ee62084830d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_5da5253a095c446cbc2dc68a78b2323d~mv2.jpg','https://static.wixstatic.com/media/d9828b_9f8e3f5672b2418d8d1fa36f195ed26a~mv2.jpg','https://static.wixstatic.com/media/d9828b_69b96ff1d4594603a759086d469c0b1b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f24ad45708d433e9d6b3321c4502e5f~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d2f5f890cd44a9f934cfcd07c90d12f~mv2.jpg','https://static.wixstatic.com/media/d9828b_2234233498f9486aa902547db8e8fb62~mv2.jpg','https://static.wixstatic.com/media/d9828b_aa3eff3960994c6dbbb1d03263427ccb~mv2.jpg','https://static.wixstatic.com/media/d9828b_19266a9b56c1444ab7a9cbff54716ef2~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4000dceb0054df381dda972a776363e~mv2.jpg','https://static.wixstatic.com/media/d9828b_417e79c64e104ebb9b462fd938efdb76~mv2.jpg','https://static.wixstatic.com/media/d9828b_afa4190040f7406cba3573a392e199ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_b098ff71382247d3bb6d2e93a75995fb~mv2.jpg']
      },
      {
        address: '725 22nd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_0b7b81d68b67485d81bf5b0bb473eb6a~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_0b7b81d68b67485d81bf5b0bb473eb6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_eef32763b2e74befa508a15f195b6520~mv2.jpg','https://static.wixstatic.com/media/d9828b_da3b37fafb8f43eead0e3d9b3dea6f4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c681bb5e225040d1bff1a0e068c84b58~mv2.jpg','https://static.wixstatic.com/media/d9828b_3607df5543aa4aa8a3e23249b0ed43a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4868b92d0bca4586b020894027ab8e82~mv2.jpg','https://static.wixstatic.com/media/d9828b_b013d1e5a5964e63b831c4d882c568e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_2b6f3e31df714b23bb76a6c51c8260e1~mv2.jpg','https://static.wixstatic.com/media/d9828b_9667cb20638647838c956978ac6bb87f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b99c59d031fc4f24942b34a6ec33e13b~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc414bc7aa048bfba8075dae3ffdced~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9f079e0518a48609ccb9b13ab080588~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ab9d556b1ba4b738b10f3a80e68dd62~mv2.jpg','https://static.wixstatic.com/media/d9828b_ddd64342aff143c6a4a65e2a67d86148~mv2.jpg','https://static.wixstatic.com/media/d9828b_9aeccad6b6e146cc95c0dabbf673f7da~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c741a5b6f27441fac6caa28ba8d55b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_65254da5c74345d0987937dd62f44c1e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b7b81d68b67485d81bf5b0bb473eb6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_702548b8da6948a9847c1ebc44d76392~mv2.jpg','https://static.wixstatic.com/media/d9828b_f080387a1de749dabc8f96e4023726cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b019750b720b4b4e9139cfd4f2abaeaf~mv2.jpg']
      }
    ];
    var RENTS = {'806 23rd St NW':'$1,200','2007 Kirk Ct NW':'$1,350','818 25th St NW':'$1,250','519 21st St NW':'$1,385','523 21st St NW':'$1,200','1430 19th St NW':'$1,325','1919 Frazer Ave NW':'$1,200','1708 18th St NW':'$1,100','1734 Woodland Ave NW':'$1,055','2211 Myrtle Ave NW':'$1,250','800 22nd St NW':'$1,450','725 22nd St NW':'$1,150'};
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
        '<div class="prop-card__btn">View Details &rarr;</div>' +
        '</div></div>';
    }).join('');
    this.innerHTML = `
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
csh-portfolio-nw{display:block;font-family:'Segoe UI',Arial,sans-serif;color:#1a1a1a;background:#f5f7fa}
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
.prop-card__rent{font-size:18px;font-weight:800;color:#c8962a;margin-bottom:12px}
.hero{background:linear-gradient(135deg,#0D1F35 0%,#1A3557 60%,#1e3f68 100%);color:#fff;padding:52px 32px 48px;text-align:center}
.hero__badge{display:inline-block;background:#C8962A;color:#fff;font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:16px}
.hero__title{font-size:clamp(24px,4.8vw,46px);font-weight:900;margin-bottom:8px}
.hero__sub{font-size:18px;color:rgba(255,255,255,0.68)}
.pl-bar{background:#fff;padding:14px 28px;border-bottom:1px solid #e0e4ea;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.pl-bar__label{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#5a6b85;white-space:nowrap}
.pl-year-btn{padding:9px 16px;background:#0d1f35;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .2s;font-family:inherit}
.pl-year-btn:hover{background:#1a3557}
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
.prop-card__btn{width:100%;padding:12px;background:#1A3557;color:#fff;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border-radius:7px;text-align:center}
.prop-card:hover .prop-card__btn{background:#0D1F35}
.pl-modal{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}
.pl-modal__overlay{position:absolute;inset:0;background:rgba(5,15,30,.78);backdrop-filter:blur(4px)}
.pl-modal__box{position:relative;background:#fff;border-radius:16px;max-width:520px;width:100%;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.4)}
.pl-modal__head{padding:20px 52px 18px 24px;background:#0a1628;border-radius:16px 16px 0 0;flex-shrink:0}
.pl-modal__title{font-size:14px;font-weight:800;color:#fff;line-height:1.35}
.pl-modal__period{font-size:11px;color:#c8962a;font-weight:700;margin-top:5px;letter-spacing:.1em;text-transform:uppercase}
.pl-modal__close{position:absolute;top:14px;right:16px;background:none;border:none;font-size:24px;cursor:pointer;color:rgba(255,255,255,.6);line-height:1;padding:4px 6px;transition:color .2s;border-radius:4px}
.pl-modal__close:hover{color:#fff;background:rgba(255,255,255,.1)}
.pl-modal__body{overflow-y:auto;padding:22px 24px 24px;flex:1}
.pl-section{margin-bottom:20px}
.pl-section-hdr{font-size:10px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#5a6b85;margin-bottom:10px;padding-bottom:8px;border-bottom:2px solid rgba(10,30,60,.10)}
.pl-row{display:flex;justify-content:space-between;align-items:center;padding:7px 8px;border-radius:5px}
.pl-row:nth-child(even){background:#f9fafc}
.pl-row__label{font-size:13.5px;color:#5a6b85}
.pl-row__value{font-size:13.5px;font-weight:600;color:#0d1f35;font-variant-numeric:tabular-nums}
.pl-divider{height:1px;background:rgba(10,30,60,.10);margin:4px 0 8px}
.pl-row--total{background:#f0f4fa!important;padding:10px;border-radius:7px;margin-top:2px}
.pl-row--total .pl-row__label{font-weight:800;color:#0d1f35;font-size:14px}
.pl-row--total .pl-row__value{font-weight:900;color:#0d1f35;font-size:15px}
.pl-noi{background:linear-gradient(135deg,#0a1628,#0d2545);border-radius:11px;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;margin-top:8px;border:1px solid rgba(200,150,42,.35)}
.pl-noi__label{font-size:14px;font-weight:700;color:rgba(255,255,255,.85)}
.pl-noi__value{font-size:22px;font-weight:900;color:#c8962a;font-variant-numeric:tabular-nums}
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
  <div class="hero__badge">Portfolio 2 — Malone Area 1</div>
  <h1 class="hero__title">Portfolio 2: Malone University / Pro Football Hall of Fame Area 1</h1>
  <p class="hero__sub">12 single-family rental homes &nbsp;&middot;&nbsp; Canton, OH</p>
</section>
<div class="pl-bar">
  <span class="pl-bar__label">&#128202; Financial Reports:</span>
  <button class="pl-year-btn" type="button" data-year="2024">2024 Profit &amp; Loss</button>
  <button class="pl-year-btn" type="button" data-year="2025">2025 Profit &amp; Loss</button>
</div>
<div class="section-head"><h2>Properties</h2><span>12 homes &middot; $14,915/mo &middot; $178,980 Annual</span></div>
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
  </div>
</div>
`;

    var burger = this.querySelector('#csh-burger');
    var mobNav = this.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    var plModal   = this.querySelector('#pl-modal');
    var plTitle   = this.querySelector('#pl-modal-title');
    var plPeriod  = this.querySelector('#pl-modal-period');
    var plBody    = this.querySelector('#pl-modal-body');
    var plClose   = this.querySelector('#pl-modal-close');
    var plOverlay = this.querySelector('#pl-modal-overlay');

    var self = this;
    function openPL(year) {
      var d = PL_DATA[year];
      if (!d) return;
      plTitle.textContent = d.title;
      plPeriod.textContent = d.period;
      var html = '<div class="pl-section"><div class="pl-section-hdr">Income</div>';
      d.income.forEach(function(r) {
        html += '<div class="pl-row"><span class="pl-row__label">' + r[0] + '</span><span class="pl-row__value">' + fmt(r[1]) + '</span></div>';
      });
      html += '<div class="pl-divider"></div><div class="pl-row pl-row--total"><span class="pl-row__label">Total Income</span><span class="pl-row__value">' + fmt(d.totalIncome) + '</span></div></div>';
      html += '<div class="pl-section"><div class="pl-section-hdr">Expenses</div>';
      d.expenses.forEach(function(r) {
        html += '<div class="pl-row"><span class="pl-row__label">' + r[0] + '</span><span class="pl-row__value">' + fmt(r[1]) + '</span></div>';
      });
      html += '<div class="pl-divider"></div><div class="pl-row pl-row--total"><span class="pl-row__label">Total Expenses</span><span class="pl-row__value">' + fmt(d.totalExpenses) + '</span></div></div>';
      html += '<div class="pl-noi"><div class="pl-noi__label">Net Operating Income</div><div class="pl-noi__value">' + fmt(d.noi) + '</div></div>';
      plBody.innerHTML = html;
      plModal.style.display = 'flex';
    }
    function closePL() { plModal.style.display = 'none'; }
    if (plClose)   plClose.addEventListener('click', closePL);
    if (plOverlay) plOverlay.addEventListener('click', closePL);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePL(); });

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    self.addEventListener('click', function(e) {
      var plBtn = e.target.closest('.pl-year-btn');
      if (plBtn) { e.preventDefault(); e.stopPropagation(); openPL(plBtn.dataset.year); return; }
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
