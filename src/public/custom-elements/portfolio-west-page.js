// @ts-nocheck
class CshPortfolioWest extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 1 — West / 44708 & Outlier Cluster';
    var PROPERTIES = [
      {
        address: '1502 37th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg','https://static.wixstatic.com/media/d9828b_3072b0dad7a649bc82343da044a59137~mv2.jpg','https://static.wixstatic.com/media/d9828b_a792dcdfa4054c8fbdf8859a4a1c10df~mv2.jpg','https://static.wixstatic.com/media/d9828b_ecdb47fe297f46339eb5787dd3adae3b~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1278cf62e7b4d3aae4ae6d90803522f~mv2.jpg','https://static.wixstatic.com/media/d9828b_d408f12e46714a748e3e2a06e6138876~mv2.jpg','https://static.wixstatic.com/media/d9828b_e277279db9624b4cb3141ad4d04f4fc0~mv2.jpg','https://static.wixstatic.com/media/d9828b_05b2e800c75146f39a2873e569872fa5~mv2.jpg','https://static.wixstatic.com/media/d9828b_4bbf9a42e8f84666accb2dfc127f1778~mv2.jpg','https://static.wixstatic.com/media/d9828b_e320f285c9cb4ca49e8c92b9cf25487d~mv2.jpg','https://static.wixstatic.com/media/d9828b_a937545e787049c080dcc6a24cc9cf99~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a395e2841014836bc36cf55c7566acc~mv2.jpg','https://static.wixstatic.com/media/d9828b_f626e1b504264f0c9904f58125e0e8ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_1af085b70b7c4019b7a0084401208432~mv2.jpg','https://static.wixstatic.com/media/d9828b_4628bda3de78430885bcd4a7c0d00f1a~mv2.jpg','https://static.wixstatic.com/media/d9828b_88134200bf77414ea6d62b3f7ed9a1b4~mv2.jpg','https://static.wixstatic.com/media/d9828b_9734538a094e40e38a785c02d1306eeb~mv2.jpg','https://static.wixstatic.com/media/d9828b_4bf1de351ae5448f845f70d323f2a50c~mv2.jpg','https://static.wixstatic.com/media/d9828b_b5f0e57058c44864a38e79f128d7c60c~mv2.jpg','https://static.wixstatic.com/media/d9828b_bba4cd0e8bd34504b02fe52cbc002be5~mv2.jpg','https://static.wixstatic.com/media/d9828b_4a9425f992194d9f9f90ae057729a85f~mv2.jpg','https://static.wixstatic.com/media/d9828b_f256ca58bcc544d98e5e3be53c631dac~mv2.jpg','https://static.wixstatic.com/media/d9828b_08c75705d2dc4578bf306df07fea5267~mv2.jpg','https://static.wixstatic.com/media/d9828b_e171f073ddcc49569ec48928d57be27e~mv2.jpg','https://static.wixstatic.com/media/d9828b_5bac12486dbc468bab0e7163bcfc16e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_50f39add199343f2915ea4fc271cf138~mv2.jpg','https://static.wixstatic.com/media/d9828b_3a6d2742564f4f0b949fb11a6820618b~mv2.jpg','https://static.wixstatic.com/media/d9828b_712297dc15564257b5102c3ad41152f3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f4003f1740b4437903b8873093f9a1c~mv2.jpg','https://static.wixstatic.com/media/d9828b_995808959b704303b917dd78c89b1899~mv2.jpg','https://static.wixstatic.com/media/d9828b_ab303144fe734f7ca833db0219d80e52~mv2.jpg','https://static.wixstatic.com/media/d9828b_52fa3d6a43ce4bb99e97c759a671843c~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5d9d0e20e5c4a8ba2d0377193f2c9d2~mv2.jpg','https://static.wixstatic.com/media/d9828b_740f1aa9952e41afb61bb218d70daa8b~mv2.jpg','https://static.wixstatic.com/media/d9828b_e4f34455bbf4462983813de9255c8cc1~mv2.jpg','https://static.wixstatic.com/media/d9828b_8d41af0aa23d410398b75e7abfb18f27~mv2.jpg','https://static.wixstatic.com/media/d9828b_50e24a113db14c9cb0f5ba762c67a569~mv2.jpg','https://static.wixstatic.com/media/d9828b_03a48834fa684edd9196e84fdb2b8e58~mv2.jpg']
      },
      {
        address: '2007 Kirk Ct NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_19f40f3c1faa4237ba63d5fe42b70647~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_19f40f3c1faa4237ba63d5fe42b70647~mv2.jpg','https://static.wixstatic.com/media/d9828b_7aba94f5a0994b8299fdf12ba3c5dbaa~mv2.jpg','https://static.wixstatic.com/media/d9828b_80ef7b47cf114f8da0dba2efa93ef0b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_23e65475ee2943f694e904a9b6f5e626~mv2.jpg','https://static.wixstatic.com/media/d9828b_bde14c4b6a104f0b8eaae98c9d43ce75~mv2.jpg','https://static.wixstatic.com/media/d9828b_5660d011886d4025be71cd95c893adc4~mv2.jpg','https://static.wixstatic.com/media/d9828b_15061a07e3a44120831f1ae5134c083d~mv2.jpg','https://static.wixstatic.com/media/d9828b_88b526fb445544c58350648aa73af21a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dfe81723f16548b79fed1163188e25e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7bff44ccb0e46a8b312bb75f1cd49b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_3739d8d7628c45f2af7a70c91952c39d~mv2.jpg','https://static.wixstatic.com/media/d9828b_fbc37a1f66bb4a0c8df5fbbb3d2836a2~mv2.jpg','https://static.wixstatic.com/media/d9828b_088161bda5214f48acd4ab57b7096275~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1ade30b09d74bd991d00bf452d0f21e~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e29ccbbc3a401b8bc19be80d4a53de~mv2.jpg','https://static.wixstatic.com/media/d9828b_de7e72a156804b419d04da86059dafb1~mv2.jpg','https://static.wixstatic.com/media/d9828b_3600e4260c724d39ab61dcc17eea85d9~mv2.jpg','https://static.wixstatic.com/media/d9828b_588f035ab6904557b1e6636e38a0a362~mv2.jpg','https://static.wixstatic.com/media/d9828b_82d36dd4c6e1412b93d196377929b0f7~mv2.jpg','https://static.wixstatic.com/media/d9828b_edcb93a739614bd480a528b5883ae0d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5bc89658ef9442991f315ae7a132928~mv2.jpg','https://static.wixstatic.com/media/d9828b_7bb17869c5104ad7b0746f22bc677799~mv2.jpg','https://static.wixstatic.com/media/d9828b_e440c88d188647c7b64a6ddca7a909c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_87ae1b982b61442189c7bf2ba3bc8334~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5ed13cd83274c438b9975896f41abd2~mv2.jpg','https://static.wixstatic.com/media/d9828b_43598e9aa32f49b9bf760e171ab63e3c~mv2.jpg']
      },
      {
        address: '2923 Helen Pl NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_ff8a7a91e8d54815bdb4ecff04240cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_43748fc2834b46a4bc025cad544a1cc6~mv2.jpg','https://static.wixstatic.com/media/d9828b_aaccf35afe8043858b5ccf94928272c9~mv2.jpg','https://static.wixstatic.com/media/d9828b_322546c5040b4b549c7e68652ee6ffc5~mv2.jpg','https://static.wixstatic.com/media/d9828b_617b3e8c5d314989bd0ee51a4203f426~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7b6b74955b941c582cf600d323d7610~mv2.jpg','https://static.wixstatic.com/media/d9828b_5d92b423a9f94b0eb8bd59fad17c6bbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_06a44a5bbcd446b7ab70236926430763~mv2.jpg','https://static.wixstatic.com/media/d9828b_4af4aac2bab64f36bf9df62e3df4c309~mv2.jpg','https://static.wixstatic.com/media/d9828b_ab17eaa87a444b01953d9c044f1759e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_17c9b99a75f14787903669f403c5d08c~mv2.jpg','https://static.wixstatic.com/media/d9828b_6d17e9470641437f8635ca8e9f688ed6~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2d0e91fd3cd404db69b3ccdfdc09fa4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fde2ad6a0bc6410c84a901cac231a50d~mv2.jpg','https://static.wixstatic.com/media/d9828b_08f08d2c92e549cf944b0fd700b45541~mv2.jpg']
      },
      {
        address: '2945 15th St NW', city: 'Canton, OH 44708', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8ad572acd9534fde971928bf4dfd845b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2d0b1522354f43b4af160ada13b862~mv2.jpg','https://static.wixstatic.com/media/d9828b_c34dac640c54422a961384cf4bedc6ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_12c020938651419ab6cda114ac0f6067~mv2.jpg','https://static.wixstatic.com/media/d9828b_d23a71ddecf3498bbc70b5f710852617~mv2.jpg','https://static.wixstatic.com/media/d9828b_0db2c8ebfef24bf4be09ee1fa3eefcb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_f5e669fee0404368911dbbd13d08b1eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4af34dd916a4306ad037a14c9a34089~mv2.jpg','https://static.wixstatic.com/media/d9828b_925183fcdb4d45268dfa99770e00a5d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_94a06d8274bf4fc19d20e895e478b8d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_35ac8afe070a4201b2b21524f02dc1c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_5986bd983bef4aeabfcc49a58afd6af3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f53f35d8875e4829b75e4c22119207c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_6c27d24e8a81457dae6e8f440f1afe8d~mv2.jpg','https://static.wixstatic.com/media/d9828b_3031fe0345cf455aa9edb0c155113245~mv2.jpg','https://static.wixstatic.com/media/d9828b_e8a348608cfe4098875e9c25d18b18b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f6f2d7bbc0e42abaa2b5bbc34f05fb1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d00f65a8cfce4d5e9e5427011a88173b~mv2.jpg','https://static.wixstatic.com/media/d9828b_72422342fc204f0da5ec0a9926a014ae~mv2.jpg','https://static.wixstatic.com/media/d9828b_b76779870d434c0e9c928bddc37de2b9~mv2.jpg','https://static.wixstatic.com/media/d9828b_a68e168f50b046f8a162de91f552bdf9~mv2.jpg']
      },
      {
        address: '307 Bellflower Ave NW', city: 'Canton, OH 44708', beds: 3, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_54c7dbff12b54ba295aa04eb7bcf09ac~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_54c7dbff12b54ba295aa04eb7bcf09ac~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d92a9b6f6f0423c94bd3e7c1e791913~mv2.jpg','https://static.wixstatic.com/media/d9828b_dce0e3a56f1447ac8743c1d92e6dd080~mv2.jpg','https://static.wixstatic.com/media/d9828b_507a57c23b234d4bab9526552c3c2e46~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d4f38184b604a2b8beff132fb80f505~mv2.jpg','https://static.wixstatic.com/media/d9828b_57071b4d4e5e4b8aa79c660fd65b00e6~mv2.jpg','https://static.wixstatic.com/media/d9828b_8e928772af27403ba3407299ed51234b~mv2.jpg','https://static.wixstatic.com/media/d9828b_622b6bae6e7c4bb5a21682057a682d19~mv2.jpg','https://static.wixstatic.com/media/d9828b_96c375243afd473dbf3986b24fa6fc4d~mv2.jpg','https://static.wixstatic.com/media/d9828b_728a161265c24fdfa9d76e65298856a1~mv2.jpg','https://static.wixstatic.com/media/d9828b_b171c3bedf424de78bfa1f5702321a77~mv2.jpg','https://static.wixstatic.com/media/d9828b_ffc118cb9624455d830554cf4f7ffd02~mv2.jpg','https://static.wixstatic.com/media/d9828b_34b05b96be1c4621aad66c580663efa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_acdc9480bc914dd9af86d1a5028f52b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2088ce6169a4737a7832f2675d5f0db~mv2.jpg','https://static.wixstatic.com/media/d9828b_89a7fb9f3c58461c806b8da7bd68db63~mv2.jpg','https://static.wixstatic.com/media/d9828b_281c7199a5454d70a728139f8812fbf4~mv2.jpg','https://static.wixstatic.com/media/d9828b_fcccc37e40834103aabe6cfdcf98c1c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_44610d4e2c1943b292ebf38ebb46f499~mv2.jpg','https://static.wixstatic.com/media/d9828b_8306e160b4c94e5ea0cb1b285419a7df~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd6a9810870c45248ce23edc5ac62b04~mv2.jpg']
      },
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
        address: '635 Greenfield Ave SW', city: 'Canton, OH 44706', beds: 2, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_1a1d76a9b76443d5a64141ebcf6c48ca~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_1a1d76a9b76443d5a64141ebcf6c48ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_e39f74ab87be4f4a99d60f5e87b8db1e~mv2.jpg','https://static.wixstatic.com/media/d9828b_05174e141cef4bf081405497fdf8dc25~mv2.jpg','https://static.wixstatic.com/media/d9828b_bc3385876fa543b2acee2cb03a1741c1~mv2.jpg','https://static.wixstatic.com/media/d9828b_d93a7d364ced411d845d18e6c4e3db07~mv2.jpg','https://static.wixstatic.com/media/d9828b_15fe66da9f8b4c8bb2c443a8b52632c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_ea975df7804a49759c36b42b963cdd85~mv2.jpg','https://static.wixstatic.com/media/d9828b_0cd71d00ed2c48bda6277b0b91d564ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_cd263b3d33974eefbddaeb45bfcd8800~mv2.jpg','https://static.wixstatic.com/media/d9828b_a5122ffc4b0d40fda62e77cb194de2f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f3e126afb8774447b5211d02e23a78fd~mv2.jpg','https://static.wixstatic.com/media/d9828b_764d1cd6e1eb404a903b3f4e5278720b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f363e69a8a1b4d82b465f491afd83cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_f6010c8b20e140e4a1b9dcaed82ce838~mv2.jpg','https://static.wixstatic.com/media/d9828b_9861f469d7394bf2aae288c525c0995a~mv2.jpg','https://static.wixstatic.com/media/d9828b_248ea9c13ea04e10935fe4aa7be3a0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f5cedd6e07d410fb8bbcce212bb6ff0~mv2.jpg','https://static.wixstatic.com/media/d9828b_460cf0a9f2ac457fb82507a07a148ac1~mv2.jpg','https://static.wixstatic.com/media/d9828b_0a218d30146247deaa6841152dd6a651~mv2.jpg','https://static.wixstatic.com/media/d9828b_b68cee567d464fb6b637bc81157d4737~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb2e7b405eed4fa78fb9703082bae5ca~mv2.jpg','https://static.wixstatic.com/media/d9828b_434fd3c4bd014cb38fde0f665b957053~mv2.jpg','https://static.wixstatic.com/media/d9828b_870d50def00c4445945d5958d2d2033b~mv2.jpg','https://static.wixstatic.com/media/d9828b_1e9773ad803e4ccb8ac4d1b81f25e5b8~mv2.jpg','https://static.wixstatic.com/media/d9828b_4dca5948ca4f403ab19de8501a195f45~mv2.jpg','https://static.wixstatic.com/media/d9828b_8171ad6b905b49118931d3e8b7d92b04~mv2.jpg']
      },
      {
        address: '806 23rd St NW', city: 'Canton, OH 44708', beds: 2, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_01ee6699f540475790cef8f11779998d~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_01ee6699f540475790cef8f11779998d~mv2.jpg','https://static.wixstatic.com/media/d9828b_558ebde4146b433a988f575c6e2e9752~mv2.jpg','https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg','https://static.wixstatic.com/media/d9828b_0ff07cb2e9b342969e528ef0f014acd2~mv2.jpg','https://static.wixstatic.com/media/d9828b_e11019144a96401ebbe72e57a5c64659~mv2.jpg','https://static.wixstatic.com/media/d9828b_04c804fbbfe245fda20fe7b9f50c84e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_8abf24fbabcd4444a2670f37abbcb0a9~mv2.jpg','https://static.wixstatic.com/media/d9828b_5f2a09967b5a4f18b0715e47f734e249~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7278f7201834cc5ab2979f274b059e5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4ee87ea194c44ef9f7c493dab6a3c6a~mv2.jpg','https://static.wixstatic.com/media/d9828b_0d488f0320df4914ab8c7476c4d16fe4~mv2.jpg','https://static.wixstatic.com/media/d9828b_cec56acee666435d965bf5a77414642e~mv2.jpg','https://static.wixstatic.com/media/d9828b_dedef0dc4e0d4175b28c1f0abdf40e49~mv2.jpg','https://static.wixstatic.com/media/d9828b_7fd78d333d58490e93fd3c5bffe1a047~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f209ce8a5404569bdadd56685be0488~mv2.jpg','https://static.wixstatic.com/media/d9828b_86c3dc0b1edb44bca57fc411399884d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_d1480d3bbaab4a769da11b87ba9a0a45~mv2.jpg','https://static.wixstatic.com/media/d9828b_c9af6b16b1b44e288260d4aad13f1cbe~mv2.jpg','https://static.wixstatic.com/media/d9828b_091a27f145224f20a2c943abfcb46cb0~mv2.jpg','https://static.wixstatic.com/media/d9828b_9ae359a9c80e498294c0d688c7d970c3~mv2.jpg','https://static.wixstatic.com/media/d9828b_6be40f64a2de453484382ec7f20d89ef~mv2.jpg','https://static.wixstatic.com/media/d9828b_4c10925124e4492583de1227b3692399~mv2.jpg','https://static.wixstatic.com/media/d9828b_08870d0405df431eb249d9f1cd9a19e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_764015ed688545d9914fa2fcdf059710~mv2.jpg','https://static.wixstatic.com/media/d9828b_b776664a83574663b240b934115a6324~mv2.jpg','https://static.wixstatic.com/media/d9828b_b92a2b0c9060491899ed01d5540c210f~mv2.jpg','https://static.wixstatic.com/media/d9828b_6daaf9fabc984d19aaf0123694f50d59~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa565b8730ef4047b83adfd865437456~mv2.jpg','https://static.wixstatic.com/media/d9828b_eac1274297c04d0e9b76924b7f67268f~mv2.jpg','https://static.wixstatic.com/media/d9828b_418041988d0947369f81e4adc14f499b~mv2.jpg','https://static.wixstatic.com/media/d9828b_72d358963626417d839f6f04b2454616~mv2.jpg']
      },
      {
        address: '818 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_2d552cf9168f4741b747927451fcf538~mv2.jpg','https://static.wixstatic.com/media/d9828b_ccf98a0e23944898846af9a30f0b9384~mv2.jpg','https://static.wixstatic.com/media/d9828b_c44a1f6320604ceca7f6de34f53c07b0~mv2.jpg','https://static.wixstatic.com/media/d9828b_83190796e1794c13b72740a895ff985f~mv2.jpg','https://static.wixstatic.com/media/d9828b_7cb3b9d67606410194e02ae036154093~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5e6be6cf61949439db2b94ca6fcebf5~mv2.jpg','https://static.wixstatic.com/media/d9828b_3dec0b76e8b147deb44ea82c5848c8d4~mv2.jpg','https://static.wixstatic.com/media/d9828b_bb67d592d9114021889c8c7fd3899427~mv2.jpg','https://static.wixstatic.com/media/d9828b_fdaae49535444d428939da6d0f5652f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_65765707b5e0446b8ef8bcba6bce9827~mv2.jpg','https://static.wixstatic.com/media/d9828b_4da54f97ff5c4f8487452ed57dbff9a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4cab9396762044a69f1b468b53eda60a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c63a359a8344349838d5af2ed340187~mv2.jpg','https://static.wixstatic.com/media/d9828b_b8fa39eeef71459797bdd92bcb651cc1~mv2.jpg','https://static.wixstatic.com/media/d9828b_21b306afd90849808e46f248081b4e05~mv2.jpg','https://static.wixstatic.com/media/d9828b_2db11308cada41fcb79e2260d151ccc5~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad295cff0d5a41a1b870a9b2b700478e~mv2.jpg','https://static.wixstatic.com/media/d9828b_541d11e2980049798094f4bc23302062~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebfa7420922847489e65f6226c60aec4~mv2.jpg','https://static.wixstatic.com/media/d9828b_343728ef7f9c4713a9aaef0fc1cd7ed0~mv2.jpg','https://static.wixstatic.com/media/d9828b_38cfd45362a8462fb2d7973249705481~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7d3636b265141ab9ad151ec1702145b~mv2.jpg','https://static.wixstatic.com/media/d9828b_39d085f24ffa44208dfb16a0b05532a1~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec79e6eceb57435493190daadc318c40~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd8ce18a72e94c4fa877aa68589c2ca2~mv2.jpg']
      }
    ];

    var RENTS = {'1502 37th St NW':'$1,150','2007 Kirk Ct NW':'$1,350','2923 Helen Pl NW':'$1,350','2945 15th St NW':'$1,300','307 Bellflower Ave NW':'$1,375','426 Vince Ave NW':'$1,550','635 Greenfield Ave SW':'$1,200','806 23rd St NW':'$1,200','818 25th St NW':'$1,250'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '">' +
        '<div class="prop-card__img-wrap">' +
        '<img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" />' +
        '<span class="prop-card__badge">For Rent</span>' +
        '</div>' +
        '<div class="prop-card__info">' +
        '<div class="prop-card__address">' + p.address + '</div>' +
        '<div class="prop-card__city">' + p.city + '</div>' +
        '<div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' +
        (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') +
        '<div class="prop-card__btn">View Details &rarr;</div>' +
        '</div>' +
        '</div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-west { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
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
.hero { background: linear-gradient(135deg, #0D1F35 0%, #1A3557 60%, #1e3f68 100%); color: #fff; padding: 52px 32px 48px; text-align: center; }
.hero__badge { display: inline-block; background: #C8962A; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 5px 14px; border-radius: 20px; margin-bottom: 16px; }
.hero__title { font-size: clamp(31px, 5.4vw, 53px); font-weight: 900; margin-bottom: 8px; }
.hero__sub { font-size: 18px; color: rgba(255,255,255,0.68); }
.section-head { max-width: 1040px; margin: 48px auto 20px; padding: 0 24px; display: flex; align-items: baseline; justify-content: space-between; }
.section-head h2 { font-size: 22px; font-weight: 800; color: #0D1F35; text-transform: uppercase; letter-spacing: 0.08em; }
.section-head span { font-size: 16px; color: #888; }
.prop-grid { max-width: 1040px; margin: 0 auto 64px; padding: 0 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 24px; }
.prop-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.08); transition: transform 0.22s, box-shadow 0.22s; display: flex; flex-direction: column; cursor: pointer; }
.prop-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.16); }
.prop-card__img-wrap { position: relative; height: 220px; overflow: hidden; }
.prop-card__cover { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s; }
.prop-card:hover .prop-card__cover { transform: scale(1.06); }
.prop-card__badge { position: absolute; top: 12px; left: 12px; background: #C8962A; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 12px; }
.prop-card__info { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
.prop-card__address { font-size: 20px; font-weight: 800; color: #0D1F35; margin-bottom: 4px; line-height: 1.3; }
.prop-card__city { font-size: 14px; color: #999; margin-bottom: 10px; }
.prop-card__specs { font-size: 16px; color: #555; font-weight: 600; margin-bottom: 18px; flex: 1; }
.prop-card__btn { width: 100%; padding: 12px; background: #1A3557; color: #fff; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 7px; text-align: center; }
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
  <div class="hero__badge">Portfolio 1 &mdash; West Canton</div>
  <h1 class="hero__title">Portfolio 1: West / 44708 &amp; Outlier Cluster</h1>
  <p class="hero__sub">9 single-family rental homes &nbsp;&middot;&nbsp; ZIP 44708 / 44709 / 44706</p>
</section>
<div class="section-head"><h2>Properties</h2><span>9 homes &middot; $11,725/mo &middot; $140,700 Annual</span></div>
<div class="prop-grid">${cardsHtml}</div>
`;

    const burger = this.querySelector('#csh-burger');
    const mobNav = this.querySelector('#csh-mob-nav');
    if (burger && mobNav) {
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobNav.classList.toggle('open');
        burger.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
    }

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
customElements.define('csh-portfolio-west', CshPortfolioWest);
