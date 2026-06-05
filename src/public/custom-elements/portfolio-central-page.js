// @ts-nocheck
class CshPortfolioCentral extends HTMLElement {
  connectedCallback() {
    var PORTFOLIO = 'Portfolio C — NW 25th-27th Density Cluster';
    var PROPERTIES = [
      {
        address: '1338 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_3ffcd9422a4b4a168faafcddc8fca915~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_3ffcd9422a4b4a168faafcddc8fca915~mv2.jpg','https://static.wixstatic.com/media/d9828b_cd3a356d6925476986fa32125ee1f715~mv2.jpg','https://static.wixstatic.com/media/d9828b_946db911f5854acf98d9945616b1702b~mv2.jpg','https://static.wixstatic.com/media/d9828b_23da1c2552c6437eb66222ffbfbb73d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_064c133466734212ba0153b2db7d1fab~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9c0e622862e4347bc0f2ff45daa5b2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_c17d107a12e844e1b8db08a0cc11b514~mv2.jpg','https://static.wixstatic.com/media/d9828b_3400137e85c947159c6bf4aba96b4e71~mv2.jpg','https://static.wixstatic.com/media/d9828b_83a446fb796e49339f061709f5bbfed4~mv2.jpg','https://static.wixstatic.com/media/d9828b_f2f4633249504b5f896d908dca4691b8~mv2.jpg','https://static.wixstatic.com/media/d9828b_8ae90511b312453e8b1732c252094803~mv2.jpg','https://static.wixstatic.com/media/d9828b_c3a6a65784fb461caeb94cc2bbe90297~mv2.jpg','https://static.wixstatic.com/media/d9828b_792354b773fc4626808800d787a0f198~mv2.jpg','https://static.wixstatic.com/media/d9828b_8fcf9630ab394c05972eef556e2f7721~mv2.jpg','https://static.wixstatic.com/media/d9828b_9144a61ee67c4a238c99043261074f7a~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d2b5f784da94dbd9a6f5ffe0c96d5c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_56a5ba3ffeaf4df9b1bf19cc31b8bdb9~mv2.jpg','https://static.wixstatic.com/media/d9828b_b6f0750b4e5b4b488fc609b0e2432307~mv2.jpg','https://static.wixstatic.com/media/d9828b_4407e04acd61475caac0c94a96b303c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_176b2da33c214ddd98a843e15794e7aa~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3b42866c5d7402cbc1e08fae1274f1a~mv2.jpg']
      },
      {
        address: '1344 24th St NW', city: 'Canton, OH 44709', beds: 3, baths: 3,
        cover: 'https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_65a1d84ce8814d63beab35b2edd16bb2~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b91dd78d36944dea63b4ee903e94071~mv2.jpg','https://static.wixstatic.com/media/d9828b_66cc08c529ae49d29ba1acf113eb0dd8~mv2.jpg','https://static.wixstatic.com/media/d9828b_81d3c5bccc7a4f6f975fd3a5b4ce03bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0d539a02c96408a98a7a0784df7cffc~mv2.jpg','https://static.wixstatic.com/media/d9828b_0c26666bf12548968f2e75e87415d05f~mv2.jpg','https://static.wixstatic.com/media/d9828b_201bf2f480b04f24bc9193bcf7041522~mv2.jpg','https://static.wixstatic.com/media/d9828b_274508ba42a74e96b2838f2f96396b47~mv2.jpg','https://static.wixstatic.com/media/d9828b_a63d0741f564479b9253ead7b53768f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_c0bf46a5ecfa4a198d715a1bb6bd6857~mv2.jpg','https://static.wixstatic.com/media/d9828b_b4591933ffbb4d73bed0597ef6e78b36~mv2.jpg','https://static.wixstatic.com/media/d9828b_334cf3c28fd94c54ba69df14166aae60~mv2.jpg','https://static.wixstatic.com/media/d9828b_94c155a21a0a4fdeadce4c26bea6bc5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0bd8ab10a9c64d30875592f32ba8ff45~mv2.jpg','https://static.wixstatic.com/media/d9828b_620a33aee54840ef918020fb7765cace~mv2.jpg','https://static.wixstatic.com/media/d9828b_679f8b4caadd42378be28229ffe2d712~mv2.jpg','https://static.wixstatic.com/media/d9828b_93f66492ff60445aaa2bd8a05c14bcb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_063a4c82ac584b21bf73a2a87f4af450~mv2.jpg','https://static.wixstatic.com/media/d9828b_dbed66ddc50e4feb950561eb23ca7ae1~mv2.jpg','https://static.wixstatic.com/media/d9828b_991a5cb34a8042788e7da226fbce7365~mv2.jpg','https://static.wixstatic.com/media/d9828b_a153fdee2e9c47818f8fe247f6029d9b~mv2.jpg','https://static.wixstatic.com/media/d9828b_5fabbb0d79eb4504a6b3b8d79ed1c679~mv2.jpg','https://static.wixstatic.com/media/d9828b_1c38001509724112aba3c97aa16854a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_1afd315e6297401c8e7a145e3a1eecea~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a3bb9e0bfda44ddabef34cdbc8dc89b~mv2.jpg','https://static.wixstatic.com/media/d9828b_82b1b8bb91344a4b8d7194a0cde59875~mv2.jpg']
      },
      {
        address: '1540 Norwood Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_9a2dd8d6ab744124b24a5874644e9226~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_01644bc90254440f817a801e0691ebf4~mv2.jpg','https://static.wixstatic.com/media/d9828b_94f19659fa6a401b9b1cc48440a29f61~mv2.jpg','https://static.wixstatic.com/media/d9828b_b24937d0bcf24215beb7b2d78d59cdbf~mv2.jpg','https://static.wixstatic.com/media/d9828b_972fc43de93547e594ece91e6bf35506~mv2.jpg','https://static.wixstatic.com/media/d9828b_f1cbe5e4abd049ef96e875a9f60593ce~mv2.jpg','https://static.wixstatic.com/media/d9828b_c89a5e9a6ea2478186bcbba7c4843e55~mv2.jpg','https://static.wixstatic.com/media/d9828b_5807b2bc0c9f402398cb524dec4ef05b~mv2.jpg','https://static.wixstatic.com/media/d9828b_64fd9148f12c412e917135647f324a38~mv2.jpg','https://static.wixstatic.com/media/d9828b_17bb58da5764443f82f3ee1ced6fbee3~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6fa3a1e986d478abb7919ea0106c638~mv2.jpg','https://static.wixstatic.com/media/d9828b_10ff7a967f564de3a4c27c01a16dd1da~mv2.jpg','https://static.wixstatic.com/media/d9828b_099a197094784b3583f2e7e6d69b56ff~mv2.jpg','https://static.wixstatic.com/media/d9828b_b9bef72d949e4fc0ab5822e3f4507ece~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a2dd8d6ab744124b24a5874644e9226~mv2.jpg','https://static.wixstatic.com/media/d9828b_3eac5a42d3da4aa481050c4d3d28b69d~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc546ae222a44d449937a018f938d94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_9786cd9b838a4f38bf2a53f9df41d02f~mv2.jpg','https://static.wixstatic.com/media/d9828b_243b20e1cd1e402ebcee2fa078561a2a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b18544ca24c7411da3f3741454bdbc2a~mv2.jpg','https://static.wixstatic.com/media/d9828b_d466f714fec64c7f8d19b157e7f7f0c3~mv2.jpg']
      },
      {
        address: '1507 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_73730af40c8b485aba9b625fff3d6335~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_73730af40c8b485aba9b625fff3d6335~mv2.jpg','https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg','https://static.wixstatic.com/media/d9828b_1fff20fd36134829aa06d83d5e0f1ac7~mv2.jpg','https://static.wixstatic.com/media/d9828b_85b1b4c51b8a48a9b9819dff953be0e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0af7394aec940f99129fc0e62455d97~mv2.jpg','https://static.wixstatic.com/media/d9828b_309569caf91a46dcae8e0102e26edad5~mv2.jpg','https://static.wixstatic.com/media/d9828b_057825d0fa9b4b749e4265cf0474c194~mv2.jpg','https://static.wixstatic.com/media/d9828b_fba1a8f2c85f446bab71e23f85682b72~mv2.jpg','https://static.wixstatic.com/media/d9828b_436586c8bb854297a07f78c8db7e3580~mv2.jpg','https://static.wixstatic.com/media/d9828b_24b66a265be14b0f9cac9105bcb88db9~mv2.jpg','https://static.wixstatic.com/media/d9828b_482c3513e6f44b13a518a5dd9c9a7213~mv2.jpg','https://static.wixstatic.com/media/d9828b_bdcfefa0639e4f6dabc72aaaf12547fa~mv2.jpg','https://static.wixstatic.com/media/d9828b_74358afc5d9949edbd81c5e9b8e3d917~mv2.jpg','https://static.wixstatic.com/media/d9828b_27b18ab11ce1490fb7ad169cfd6dc0c0~mv2.jpg','https://static.wixstatic.com/media/d9828b_b64f4443195541cca66e8a49c52dda6e~mv2.jpg','https://static.wixstatic.com/media/d9828b_3df69482899444c4a391c9dd17034226~mv2.jpg','https://static.wixstatic.com/media/d9828b_40970457b07047898f99cd5507269b26~mv2.jpg','https://static.wixstatic.com/media/d9828b_2a02eaa4512746138581042f90338edc~mv2.jpg','https://static.wixstatic.com/media/d9828b_76e99ee3548c47b1bd7ad3caba339bbc~mv2.jpg','https://static.wixstatic.com/media/d9828b_69bb6a44b2bb47ce9813234351047089~mv2.jpg','https://static.wixstatic.com/media/d9828b_185d9f8281294854aa4126f42eeeb29c~mv2.jpg','https://static.wixstatic.com/media/d9828b_4e80b94124a646cfa6bb012c2e8c8bf2~mv2.jpg','https://static.wixstatic.com/media/d9828b_707e6c1867c144f08c100e543d613096~mv2.jpg','https://static.wixstatic.com/media/d9828b_4e4f204f94e04fa9988a8a43ae293e49~mv2.jpg','https://static.wixstatic.com/media/d9828b_91eb414b0c8546b18e5597a734cecb86~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebe6aa0d0c71473d881a75c8ec0201c7~mv2.jpg','https://static.wixstatic.com/media/d9828b_1d0e88b9a2794b6fa95a3ad96fcdc37d~mv2.jpg']
      },
      {
        address: '1569 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_8aafa731b69c4b3a88d442102767effa~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8aafa731b69c4b3a88d442102767effa~mv2.jpg','https://static.wixstatic.com/media/d9828b_6d1323047ab94763991a94dfd5257868~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf33fed73aab4efe85671eb54fa6ac27~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd89e6b90ea74fa8a63b78f888c3b7b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_885cf9e3032147588f2689dfac2755f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_90f0116bb8134bcba347e73ee434a189~mv2.jpg','https://static.wixstatic.com/media/d9828b_b6e4d73df7c248e5a8d6e54a3b0504cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_cc5424f53a0a48228406858abf015bfb~mv2.jpg','https://static.wixstatic.com/media/d9828b_d26af80bcc4940db863a0ecfd3dafe44~mv2.jpg','https://static.wixstatic.com/media/d9828b_25765bfed7f045e99d27a67db991126e~mv2.jpg','https://static.wixstatic.com/media/d9828b_21f91fe062d944c28c2356218df34d3d~mv2.jpg','https://static.wixstatic.com/media/d9828b_077a3a166d6c431ea1a92d4ae9476d10~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d7a5b74fb5949eb8ff69b01c5bdcede~mv2.jpg','https://static.wixstatic.com/media/d9828b_34f3d316ab77475abbd824adf21f8f2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_bcdab1627ac744bf8d5e1d145103b7d1~mv2.jpg','https://static.wixstatic.com/media/d9828b_1189f9070c694bdd9220149baa9745d0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7b29a6438dc5421cbc5897f53c3e4944~mv2.jpg','https://static.wixstatic.com/media/d9828b_d7bf9d30afa64876a63534cee7a5e0bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_aab0e206963a4cd69306495c83776e1b~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b3cfcf2ce1b45858906bd7ab95d890d~mv2.jpg','https://static.wixstatic.com/media/d9828b_05510262e0c14ae693bd5d0b0cf1a7a0~mv2.jpg']
      },
      {
        address: '1600 27th St NW', city: 'Canton, OH 44709', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_c37896be6b8c4f929ec7eca159fbd4fc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_c37896be6b8c4f929ec7eca159fbd4fc~mv2.jpg','https://static.wixstatic.com/media/d9828b_f43e108bf7264d33b90362a5af8b4240~mv2.jpg','https://static.wixstatic.com/media/d9828b_f23e603043774e93b2f96c6ba92c9adc~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc31263ac224653a66f437b333aa783~mv2.jpg','https://static.wixstatic.com/media/d9828b_515edb7efd304ac99c2323fc0a46fb08~mv2.jpg','https://static.wixstatic.com/media/d9828b_a65c1bd189444475b5afda9be09a5644~mv2.jpg','https://static.wixstatic.com/media/d9828b_5d62cb10ab784148bac30918682ee656~mv2.jpg','https://static.wixstatic.com/media/d9828b_aadfd3d6b6d049e8a7c4000f0960bb7c~mv2.jpg','https://static.wixstatic.com/media/d9828b_f2cb8bf88f5a49e28564ee4a184eaca0~mv2.jpg','https://static.wixstatic.com/media/d9828b_e0d9b6a7e643439b92d43d2c6b4111e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_c8221277ae3f41b795b74ff734480105~mv2.jpg','https://static.wixstatic.com/media/d9828b_f8d07a224c6047e0a6399c19084b2187~mv2.jpg','https://static.wixstatic.com/media/d9828b_025296d583e74af7ac8a65df4988b3fc~mv2.jpg','https://static.wixstatic.com/media/d9828b_95129f968fd740119c628ab969128e6e~mv2.jpg','https://static.wixstatic.com/media/d9828b_789dd30718b047b48a017e99c029f615~mv2.jpg','https://static.wixstatic.com/media/d9828b_73719ffbf21144ab9284d72aee1ecd64~mv2.jpg','https://static.wixstatic.com/media/d9828b_82f9e35074634ca4b17bd452984f1ba4~mv2.jpg','https://static.wixstatic.com/media/d9828b_023b78c0d63b4711964575e67762f01e~mv2.jpg','https://static.wixstatic.com/media/d9828b_1421de1eaa624872826ddf8b5ffbe94b~mv2.jpg','https://static.wixstatic.com/media/d9828b_817354fce8aa4d61bc797ecb1e639809~mv2.jpg','https://static.wixstatic.com/media/d9828b_082b9802ca7047bba2e8a44fc7f394d8~mv2.jpg']
      },
      {
        address: '1701 27th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_e811e0a7eecc49b7bd69ec950941fc68~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_e811e0a7eecc49b7bd69ec950941fc68~mv2.jpg','https://static.wixstatic.com/media/d9828b_858509336eca473e84667ad080ca4522~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2c829e9a6d74aa483d1c11a737978a3~mv2.jpg','https://static.wixstatic.com/media/d9828b_50cc3d8abd1047ca81141f68eaffd990~mv2.jpg','https://static.wixstatic.com/media/d9828b_66fbd9cc90724c839d3cb6704a7ef0b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_9afe149394594f31b9199cb2a925bd7e~mv2.jpg','https://static.wixstatic.com/media/d9828b_d0a6ff38b2854f51b94dd382c543eadc~mv2.jpg','https://static.wixstatic.com/media/d9828b_87b2a351600349dca4fe3d3fd7b2e25d~mv2.jpg','https://static.wixstatic.com/media/d9828b_a5c4f5a481fb47098703d735fb694ff9~mv2.jpg','https://static.wixstatic.com/media/d9828b_bfec9101870049a1b5d6b4b1c994799d~mv2.jpg','https://static.wixstatic.com/media/d9828b_62a71228e83f485b8db3cc08d023a99c~mv2.jpg','https://static.wixstatic.com/media/d9828b_7061fbfc48c348c087825af0184023cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_25e695ca76a2469780359a3ed4e568a4~mv2.jpg','https://static.wixstatic.com/media/d9828b_701cb0e6c9da4c1a854a588bd210d492~mv2.jpg','https://static.wixstatic.com/media/d9828b_35ed385ac03e4e9ea71ef614a89ba94a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dc02f282885e43e7ac96231fdb21a3cc~mv2.jpg','https://static.wixstatic.com/media/d9828b_2875f1317572426fb6aa6127d21aff14~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f5cd7a5a7a54526b5deac6063ede291~mv2.jpg','https://static.wixstatic.com/media/d9828b_2822522851e240599541658734bfc88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e5000b0f562d439e8099b38343cec546~mv2.jpg','https://static.wixstatic.com/media/d9828b_045363138ce2426e89a800c8e2114e94~mv2.jpg']
      },
      {
        address: '1341 Ridgeway Pl NW', city: 'Canton, OH 44709', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_8af7c251e6e0488188240060dc43a077~mv2.jpg','https://static.wixstatic.com/media/d9828b_3484c11b88334bb0be1efebcb06bdee0~mv2.jpg','https://static.wixstatic.com/media/d9828b_0b79e1ad7f2643868cdfc31a62db4687~mv2.jpg','https://static.wixstatic.com/media/d9828b_17b9678080f64d8f91db5cf9f785f211~mv2.jpg','https://static.wixstatic.com/media/d9828b_fce057e1234747c29345c7c9e70a2229~mv2.jpg','https://static.wixstatic.com/media/d9828b_879d1d31cdff4553a3c8aab9a5cf0957~mv2.jpg','https://static.wixstatic.com/media/d9828b_1010597882cf46a2b5e71ae50bbaecaa~mv2.jpg','https://static.wixstatic.com/media/d9828b_78077e15cbb449ebab4996aa19c352ce~mv2.jpg','https://static.wixstatic.com/media/d9828b_a341409b3d9c41b2bd9f83efd3b154af~mv2.jpg','https://static.wixstatic.com/media/d9828b_50a9d7c7b87a4ba0af9141d2ff0cb436~mv2.jpg','https://static.wixstatic.com/media/d9828b_e42908806f734cfe92c7c46533326401~mv2.jpg','https://static.wixstatic.com/media/d9828b_07563371c1964c51ab9cb113f331e58c~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e560f7bce244dc29c4c6cf8b1f9ea2d~mv2.jpg','https://static.wixstatic.com/media/d9828b_482400bc269a40438056db8a14a6e84a~mv2.jpg','https://static.wixstatic.com/media/d9828b_e1ecaf61cfe040ef853683c459f45ae3~mv2.jpg']
      },
      {
        address: '1611 25th St NW', city: 'Canton, OH 44709', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_7f1a32a8fe10427cafbe647d9c3edc53~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_7f1a32a8fe10427cafbe647d9c3edc53~mv2.jpg','https://static.wixstatic.com/media/d9828b_84f3732225644f5bb417827eec03a7b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_671b2353ab2f4da488a477815e2a2807~mv2.jpg','https://static.wixstatic.com/media/d9828b_94b9e7004b0e41ca9808c17e785046d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_d4faa349c73a4b01937df955a210af60~mv2.jpg','https://static.wixstatic.com/media/d9828b_78ec78703c6044ff82e31647930535a7~mv2.jpg','https://static.wixstatic.com/media/d9828b_5db8f85940e8419faa8cbc243ae88e67~mv2.jpg','https://static.wixstatic.com/media/d9828b_772bb615a58645a1aa6c15236a318ac2~mv2.jpg','https://static.wixstatic.com/media/d9828b_438306ed67424885aff854698aac5bc4~mv2.jpg','https://static.wixstatic.com/media/d9828b_7751757251cc478bab08c91164a00a06~mv2.jpg','https://static.wixstatic.com/media/d9828b_2162090d5f5e4f60a5a579bcfb20ef26~mv2.jpg','https://static.wixstatic.com/media/d9828b_16d66f9d80f5419d89883ec32e45eec0~mv2.jpg','https://static.wixstatic.com/media/d9828b_7fcdd3b4ad1a4a6fa54b3cabc102ae5e~mv2.jpg','https://static.wixstatic.com/media/d9828b_9f3773b449cf4f11b700fa466d61b15f~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad349809aadf467fa84a25cfdc58dadc~mv2.jpg','https://static.wixstatic.com/media/d9828b_d62e1249de88439ea548ae08fca84922~mv2.jpg','https://static.wixstatic.com/media/d9828b_6ff3bb7c8a3d41718b6f5a0ce33c98e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_63ea380ecfcb45fd9658b0b4ec1862e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a47877b794e4d8d919186e3f674adfd~mv2.jpg','https://static.wixstatic.com/media/d9828b_e89c6a5e9a5f40ec863fa1c696b8491d~mv2.jpg','https://static.wixstatic.com/media/d9828b_44d8daca04ce43e2bd162e23dcd0ea0f~mv2.jpg']
      }
    ];

    var RENTS = {'1338 25th St NW':'$1,400','1344 24th St NW':'$1,330','1540 Norwood Pl NW':'$1,260','1507 Ridgeway Pl NW':'$1,250','1569 25th St NW':'$1,275','1600 27th St NW':'$1,400','1701 27th St NW':'$1,250','1341 Ridgeway Pl NW':'$1,250','1611 25th St NW':'$1,200'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '"><div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" /><span class="prop-card__badge">For Rent</span></div><div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div><div class="prop-card__city">' + p.city + '</div><div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' + (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') + '<div class="prop-card__btn">View Details &rarr;</div></div></div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-central { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
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
    <a class="csh-hdr__email" href="mailto:scottprivate@tagplanning.com" title="Email Us">&#9993;</a>
  </nav>
</header>
<a class="csh-back" href="/">&larr; Back to All Portfolios</a>
<section class="hero">
  <div class="hero__badge">Portfolio C &mdash; NW Canton</div>
  <h1 class="hero__title">Portfolio C: NW 25th&ndash;27th Density Cluster</h1>
  <p class="hero__sub">9 single-family rental homes &nbsp;&middot;&nbsp; ZIP 44709</p>
</section>
<div class="section-head"><h2>Properties</h2><span>9 homes &middot; $11,615/mo &middot; $103,624 NOI</span></div>
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
customElements.define('csh-portfolio-central', CshPortfolioCentral);
