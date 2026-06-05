// @ts-nocheck
class CshPortfolioNw extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Portfolio B — NW 21st-24th Operating Cluster';
    var PROPERTIES = [
      {
        address: '519 21st St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_f5f8ccdce42b42ebb637ce94c617be3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_aeaa9243b88049f1b91625261782e32a~mv2.jpg','https://static.wixstatic.com/media/d9828b_48e820ffdd1d4ba2a50337b1c77cd284~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed54a63873eb429d84f81bbc576109ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_dcdc2cb563094a3b89805e1df15e038c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0072de36d7e4cfc96b7a6ddd32541f2~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0321c07d9f14b1da7dad0736b05cc66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a21a12c038840fd87251fee0ce12ca7~mv2.jpg','https://static.wixstatic.com/media/d9828b_16f5e16ef3e748d6974a9dca3ce70d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_46dbd0170fa64b47ab669baa8c1971e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_28d9ee4f69df4101b10bd5f2a77bf478~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b637f258ac947c98c99c15a86ff69b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f24f12f551e43ebaf47f66734e6cf1d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c83d81251fd494c8504f52614f65788~mv2.jpg','https://static.wixstatic.com/media/d9828b_f66794b9795c42d987d74351295ccbb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_e66c629024684ea98bf26eb5ccc17144~mv2.jpg','https://static.wixstatic.com/media/d9828b_546ad72822dd436fa61814f9ba0c70bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_4c0a67c15bcf4e309f5759b5f58db594~mv2.jpg','https://static.wixstatic.com/media/d9828b_02b594a16c66444bbb1bbdff2ddbbe92~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec4dbc46770d48e698a99a2f13073a11~mv2.jpg','https://static.wixstatic.com/media/d9828b_29e4864c249c46aca2d7dbe88e918837~mv2.jpg']
      },
      {
        address: '523 21st St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_35aee13db7ca44508dc3f7b2f8571b7a~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_35aee13db7ca44508dc3f7b2f8571b7a~mv2.jpg']
      },
      {
        address: '1430 19th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_25565b9a221b43e299eb89176d40b856~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_25565b9a221b43e299eb89176d40b856~mv2.jpg','https://static.wixstatic.com/media/d9828b_83954cb5091b4baa85375ce5d16eebf0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cc81e4690f2411ca550c9b857a72ade~mv2.jpg','https://static.wixstatic.com/media/d9828b_ed540304c07b4728aea597314ffb8aca~mv2.jpg','https://static.wixstatic.com/media/d9828b_840d67cf25da4662b82d315528e5c91f~mv2.jpg','https://static.wixstatic.com/media/d9828b_969b6ee3036a4587b176209b7b2a8421~mv2.jpg','https://static.wixstatic.com/media/d9828b_c548321f5a53437996e4773d981aa1e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff5ff4fb87a4201bf2c1503c418f271~mv2.jpg','https://static.wixstatic.com/media/d9828b_c985e3bf73d34a05a4d39934086398bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b557c7c2173245ccab336eabc7938435~mv2.jpg','https://static.wixstatic.com/media/d9828b_60b7e5b4acce4cefbf481015d72e267b~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b3148184f9c440b85d14f45fd5e7256~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a759132191d45808ff36146d8d70658~mv2.jpg','https://static.wixstatic.com/media/d9828b_87a89a90848045dab6eee23dc3ecbdbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_a346f0ad61e4430ab0bd6e0443529da9~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d84c818fe0c466d9b475b5471463a66~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a5308115a594f378a74e1d25c4994b5~mv2.jpg','https://static.wixstatic.com/media/d9828b_04b99893f8194ee2856d895044db5543~mv2.jpg','https://static.wixstatic.com/media/d9828b_721dc974bc2642ec9c0c05ec77d91a49~mv2.jpg','https://static.wixstatic.com/media/d9828b_4384a6e9723c4e81b0bf8b464d977ca0~mv2.jpg','https://static.wixstatic.com/media/d9828b_4a19a643806e40ae9d6be60ca3d2c382~mv2.jpg']
      },
      {
        address: '1919 Frazer Ave NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_29642d903cff43bea796e1f479afb749~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_29642d903cff43bea796e1f479afb749~mv2.jpg','https://static.wixstatic.com/media/d9828b_68cc2bcbc5ca495c8af5e70722ecf6c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_55623abf26b646f0acf5ac105640eb98~mv2.jpg','https://static.wixstatic.com/media/d9828b_6971f7d2c9b2496e86820c435b2b60f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a86e1ed6ebfe4061a8b03f4ff1424709~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d3b0e25b9a64e029d5ca303d73452eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b44206a3b69045ada56499ef3c3cc30b~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a967defc22f4dbea0c2e30e94aa0f4a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e839cf4319ed4d888a82d883ec580ac0~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc62349453604b258759e7968967f78f~mv2.jpg','https://static.wixstatic.com/media/d9828b_8bbfeb1f7b0c41e7ad9ecbe8412e20d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7b8823ec507a4af1acb5998da0b2d11a~mv2.jpg','https://static.wixstatic.com/media/d9828b_396c92c93f804cf99e3c469867db1be6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a710f40c6af44b5f9e125a018421c59d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a1796823bce49e2b2bac368f3a70445~mv2.jpg','https://static.wixstatic.com/media/d9828b_e96595954533494788a9cc0a715caed6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f70a4da023634d81aaa37ed6ba564b3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_10c72115a64e41cba731d2bfd8e480e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e0482432bbe44079008006d1165376b~mv2.jpg']
      },
      {
        address: '1708 18th St NW', city: 'Canton, OH 44703', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_59ded53a340e4c799b7cd5fd05869b79~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_59ded53a340e4c799b7cd5fd05869b79~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4478974a66244efa6ebc3ac70762d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_71b3e32c25434012912df3b992993cd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2af6f49f545d46098eaca3a9968df487~mv2.jpg','https://static.wixstatic.com/media/d9828b_6adc3bc4cc7248daafbcbdc9c68d899a~mv2.jpg','https://static.wixstatic.com/media/d9828b_abe25b7efee54e16a4cf5c1af741e32f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b390fe2121d54d1abd18b441e59132ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_45c15d15fc7c4364bc5620dccf33dc6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_df2706e8b74a4625ab71c8ed3726e60f~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ec37e74d06c43b69a04926702d35f9d~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4ae515a62084045bd5a56194635b533~mv2.jpg','https://static.wixstatic.com/media/d9828b_25b49b44d03249e19c618250eca8a60d~mv2.jpg','https://static.wixstatic.com/media/d9828b_feefd23ba0cf41199a683b340ff9b425~mv2.jpg','https://static.wixstatic.com/media/d9828b_d3d7031951a846418008c187e31ec6a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_089c17e27afa4969be4456a4072a24fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_14902a5feff74713b9a5d549a4b9f8a0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8835703a91e8418c88c9ede4e51ebc5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_31cb6358388e4affa117d843daaf276d~mv2.jpg','https://static.wixstatic.com/media/d9828b_012c27bfcc5d4e4e9ef397651ccddeba~mv2.jpg','https://static.wixstatic.com/media/d9828b_c3250bcdfa884778a3ff9f5e02d029f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_722d8efa3b224bf085e80a56b9de731e~mv2.jpg']
      },
      {
        address: '244 Harter Ave NW', city: 'Canton, OH 44709', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_648f327a4a1f498286de9944091cd332~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_648f327a4a1f498286de9944091cd332~mv2.jpg']
      },
      {
        address: '800 22nd St NW', city: 'Canton, OH 44709', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_f8f1cd124e0c44e2a09c7faaf202d162~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_f8f1cd124e0c44e2a09c7faaf202d162~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c51f1c90f5742189ac87d2aa597629e~mv2.jpg','https://static.wixstatic.com/media/d9828b_12b24248d0d543028e3b5714f9f3ae6f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0b8a91bfcc64b499e53784c39f56945~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9f2f12b91da4c7d8a48595b83316cd3~mv2.jpg','https://static.wixstatic.com/media/d9828b_737b964dc109434b8ed7b4d608211dd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd7a6a06d50442ecb4efe5e0c48379c0~mv2.jpg','https://static.wixstatic.com/media/d9828b_a04abac593c04774ae2b3db7bf1a5d38~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3607eb119aa4e6ba618ee62084830d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_5da5253a095c446cbc2dc68a78b2323d~mv2.jpg','https://static.wixstatic.com/media/d9828b_9f8e3f5672b2418d8d1fa36f195ed26a~mv2.jpg','https://static.wixstatic.com/media/d9828b_69b96ff1d4594603a759086d469c0b1b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f24ad45708d433e9d6b3321c4502e5f~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d2f5f890cd44a9f934cfcd07c90d12f~mv2.jpg','https://static.wixstatic.com/media/d9828b_2234233498f9486aa902547db8e8fb62~mv2.jpg','https://static.wixstatic.com/media/d9828b_aa3eff3960994c6dbbb1d03263427ccb~mv2.jpg','https://static.wixstatic.com/media/d9828b_19266a9b56c1444ab7a9cbff54716ef2~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4000dceb0054df381dda972a776363e~mv2.jpg','https://static.wixstatic.com/media/d9828b_417e79c64e104ebb9b462fd938efdb76~mv2.jpg','https://static.wixstatic.com/media/d9828b_afa4190040f7406cba3573a392e199ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_b098ff71382247d3bb6d2e93a75995fb~mv2.jpg']
      },
      {
        address: '1511 23rd St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_933450b3dd3348208f95c3e33cd88a82~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_933450b3dd3348208f95c3e33cd88a82~mv2.jpg','https://static.wixstatic.com/media/d9828b_0c5369f1a6824e5492591c604db19b2d~mv2.jpg','https://static.wixstatic.com/media/d9828b_38a8971d5f824ee6b023129b0b8184b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4dbf68abaff4818bc8b18de2adec119~mv2.jpg','https://static.wixstatic.com/media/d9828b_5e63c23b371f4962b1476108342b4950~mv2.jpg','https://static.wixstatic.com/media/d9828b_2338cfc4683342e0a78a256db9e53094~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd36b52fc52a485fa1d65752ea45c417~mv2.jpg','https://static.wixstatic.com/media/d9828b_36d918052ee44fcc84b734db21ea010f~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0352348b28b4ddb847457e57e8c91e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7842d1955f3f436baaa164b4c958f94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9eddd97876c4698a837c8f44d0282a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_7dac1566ed2841d08062b33df7fa821d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c123cb6842f74cf996c13cd0b582a056~mv2.jpg','https://static.wixstatic.com/media/d9828b_581545a0cfaf4ad9b1bce31d94deaad0~mv2.jpg','https://static.wixstatic.com/media/d9828b_2b817f0f71874bc1a52f8e08a2e841c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_36f9a16eb39a4ae89e2448d4c01748f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_e31c536137ee4ae49f988394bc841701~mv2.jpg','https://static.wixstatic.com/media/d9828b_5e251cc8400248e7a1085e1ddaef7921~mv2.jpg','https://static.wixstatic.com/media/d9828b_7ffce4bbd75b4bb284e5be200e6f5364~mv2.jpg','https://static.wixstatic.com/media/d9828b_ba16b2129b294cd5b651861d89195327~mv2.jpg','https://static.wixstatic.com/media/d9828b_d131085041e74538a2ca846712921e5a~mv2.jpg']
      },
      {
        address: '1734 Woodland Ave NW', city: 'Canton, OH 44703', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_3fbb3a3fc5ec49b7865011d0ca482bc3~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_3fbb3a3fc5ec49b7865011d0ca482bc3~mv2.jpg','https://static.wixstatic.com/media/d9828b_615742817b6a49f0a7107459b590b5eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_ef25a5b593214153bbdfb69c5fc5451a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d693844ecc2444697a612dc70b6b71d~mv2.jpg','https://static.wixstatic.com/media/d9828b_aef5e35cf6594b868a68c2f2067b63a6~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e8e339d238541de9eb6ac9f00adf9bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a8e3b2d4bb04abe8f0d9e02c9e46b30~mv2.jpg','https://static.wixstatic.com/media/d9828b_420a506ca49d42b38a144264f2bfc894~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2c69b0c0f0d4132a1139b68a4bc980a~mv2.jpg','https://static.wixstatic.com/media/d9828b_6430e8af3bf54b6582a4cff26a28c511~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8197b706fca47cb9479785bbd2537c3~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec468d7d4b5949d1915e719f3abb80f7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0ae48477a75457e9b8c2222f8a114b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a269d6a74fd4d76830d50bebe40cc5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_d2b1ef513aa54b61a558da9a3fa2e3a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a27bc187a734f8193440f0f895a5644~mv2.jpg','https://static.wixstatic.com/media/d9828b_a29a9169bb5e41d981a4e903edfca3fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_46e7667f60904d84acb3175dba04db97~mv2.jpg']
      },
      {
        address: '725 22nd St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_1b0cc28b25534bf2b516b270b3ed6e17~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_1b0cc28b25534bf2b516b270b3ed6e17~mv2.jpg','https://static.wixstatic.com/media/d9828b_eef32763b2e74befa508a15f195b6520~mv2.jpg','https://static.wixstatic.com/media/d9828b_da3b37fafb8f43eead0e3d9b3dea6f4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c681bb5e225040d1bff1a0e068c84b58~mv2.jpg','https://static.wixstatic.com/media/d9828b_3607df5543aa4aa8a3e23249b0ed43a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4868b92d0bca4586b020894027ab8e82~mv2.jpg','https://static.wixstatic.com/media/d9828b_b013d1e5a5964e63b831c4d882c568e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_2b6f3e31df714b23bb76a6c51c8260e1~mv2.jpg','https://static.wixstatic.com/media/d9828b_9667cb20638647838c956978ac6bb87f~mv2.jpg','https://static.wixstatic.com/media/d9828b_b99c59d031fc4f24942b34a6ec33e13b~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc414bc7aa048bfba8075dae3ffdced~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9f079e0518a48609ccb9b13ab080588~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ab9d556b1ba4b738b10f3a80e68dd62~mv2.jpg','https://static.wixstatic.com/media/d9828b_ddd64342aff143c6a4a65e2a67d86148~mv2.jpg','https://static.wixstatic.com/media/d9828b_9aeccad6b6e146cc95c0dabbf673f7da~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c741a5b6f27441fac6caa28ba8d55b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_65254da5c74345d0987937dd62f44c1e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b7b81d68b67485d81bf5b0bb473eb6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_702548b8da6948a9847c1ebc44d76392~mv2.jpg','https://static.wixstatic.com/media/d9828b_f080387a1de749dabc8f96e4023726cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_b019750b720b4b4e9139cfd4f2abaeaf~mv2.jpg']
      }
    ];

    var RENTS = {'519 21st St NW':'$1,385','523 21st St NW':'$1,200','1430 19th St NW':'$1,325','1919 Frazer Ave NW':'$1,450','1708 18th St NW':'$1,300','244 Harter Ave NW':'$1,640','800 22nd St NW':'$1,450','1511 23rd St NW':'$1,300','1734 Woodland Ave NW':'$975','725 22nd St NW':'$1,300'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '"><div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" /><span class="prop-card__badge">For Rent</span></div><div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div><div class="prop-card__city">' + p.city + '</div><div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' + (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') + '<div class="prop-card__btn">View Details &rarr;</div></div></div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-nw { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
.csh-hdr{background:#0a1628;border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;display:flex;align-items:center;height:68px;position:sticky;top:0;z-index:200}
.csh-hdr__logo{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;flex-shrink:0}
.csh-hdr__logo-img{height:40px;width:auto;border-radius:4px;display:block;object-fit:cover}
.csh-hdr__logo-text{font-size:8px;font-weight:900;letter-spacing:.22em;color:rgba(255,255,255,.85);text-transform:uppercase}
.csh-hdr__nav{margin-left:auto;display:flex;align-items:center;gap:10px}
.csh-hdr__btn{padding:8px 14px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;border-radius:6px;text-decoration:none;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);transition:background .2s;white-space:nowrap}
.csh-hdr__btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}
.csh-hdr__btn--gold{background:#c8962a;border-color:#c8962a;color:#0a1628}
.csh-hdr__btn--gold:hover{background:#dba83a;border-color:#dba83a}
.csh-hdr__email{width:34px;height:34px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);color:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:14px;transition:background .2s}
.csh-hdr__email:hover{background:rgba(255,255,255,.1)}
.csh-back{display:block;padding:10px 28px;font-size:11px;font-weight:700;color:#5a6b85;text-decoration:none;letter-spacing:.05em;text-transform:uppercase;border-bottom:1px solid #e0e4ea;background:#fff}
.csh-back:hover{color:#0d1f35}
.prop-card__rent{font-size:15px;font-weight:800;color:#c8962a;margin-bottom:12px}
.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 52px 32px 48px; text-align: center; }
.hero__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin-bottom: 16px; }
.hero__title { font-size: clamp(26px, 4.5vw, 44px); font-weight: 900; margin-bottom: 8px; }
.hero__sub { font-size: 15px; color: rgba(255,255,255,0.68); }
.section-head { max-width: 1040px; margin: 48px auto 20px; padding: 0 24px; display: flex; align-items: baseline; justify-content: space-between; }
.section-head h2 { font-size: 18px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.08em; }
.section-head span { font-size: 13px; color: #888; }
.prop-grid { max-width: 1040px; margin: 0 auto 64px; padding: 0 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 24px; }
.prop-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); transition: transform 0.22s, box-shadow 0.22s; display: flex; flex-direction: column; cursor: pointer; }
.prop-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.16); }
.prop-card__img-wrap { position: relative; height: 220px; overflow: hidden; }
.prop-card__cover { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s; }
.prop-card:hover .prop-card__cover { transform: scale(1.06); }
.prop-card__badge { position: absolute; top: 12px; left: 12px; background: #C8962A; color: #fff; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 12px; }
.prop-card__info { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
.prop-card__address { font-size: 17px; font-weight: 800; color: #0D1F35; margin-bottom: 4px; line-height: 1.3; }
.prop-card__city { font-size: 12px; color: #999; margin-bottom: 10px; }
.prop-card__specs { font-size: 13px; color: #555; font-weight: 600; margin-bottom: 18px; flex: 1; }
.prop-card__btn { width: 100%; padding: 12px; background: #1A3557; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-align: center; }
.prop-card:hover .prop-card__btn { background: #0D1F35; }
</style>
<header class="csh-hdr">
  <a href="/" class="csh-hdr__logo">
    <img class="csh-hdr__logo-img" src="https://static.wixstatic.com/media/d9828b_5f2ddd29097a4c6c83d205f0ff3bc984~mv2.jpg" alt="CSH Rentals"/>
    <span class="csh-hdr__logo-text">CSH RENTALS</span>
  </a>
  <nav class="csh-hdr__nav">
    <a class="csh-hdr__btn" href="/tenants">Tenant Pre-Approval</a>
    <a class="csh-hdr__btn csh-hdr__btn--gold" href="/contact">Contact</a>
    <a class="csh-hdr__email" href="mailto:scottprivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
</header>
<a class="csh-back" href="/investors">&larr; Back to All Portfolios</a>
<section class="hero">
  <div class="hero__badge">Portfolio B &mdash; NW Canton</div>
  <h1 class="hero__title">Portfolio B: NW 21st&ndash;24th Operating Cluster</h1>
  <p class="hero__sub">10 single-family rental homes &nbsp;&middot;&nbsp; ZIP 44709 / 44703</p>
</section>
<div class="section-head"><h2>Properties</h2><span>10 homes &middot; $13,325/mo &middot; $108,646 NOI</span></div>
<div class="prop-grid">${cardsHtml}</div>
`;

    var _b = window.location.hostname.includes('wixstudio.com')
      ? '/' + window.location.pathname.split('/')[1] : '';
    this.addEventListener('click', function(e) {
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
      try { localStorage.setItem('csh_prop', JSON.stringify({ address: p.address, city: p.city, portfolio: PORTFOLIO, beds: p.beds, baths: p.baths, photos: p.photos })); } catch(err) {}
      window.location.assign(window.location.origin + _b + '/property-detail');
    });
  }
}
customElements.define('csh-portfolio-nw', CshPortfolioNw);
