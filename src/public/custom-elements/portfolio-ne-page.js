// @ts-nocheck
class CshPortfolioNe extends HTMLElement {
  connectedCallback() {
    this.style.cssText = 'display:block;background:#f5f7fa;min-height:100vh';
    var PORTFOLIO = 'Portfolio 4 — NE / Market-Colonial Cluster';
    var PROPERTIES = [
      {
        address: '804 29th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_e43dcc10c9fc49b48abc62fb376f697c~mv2.jpg','https://static.wixstatic.com/media/d9828b_340eb52bca374f1b8f3bee12bf708b43~mv2.jpg','https://static.wixstatic.com/media/d9828b_0615d1021d124ecbabd381beeff07cbf~mv2.jpg','https://static.wixstatic.com/media/d9828b_3ff68a188e0e4e66bf6c49e16d0bd761~mv2.jpg','https://static.wixstatic.com/media/d9828b_85709788878a4ea7a7971af7420cb7e3~mv2.jpg','https://static.wixstatic.com/media/d9828b_b3c7e63cfdd04e66aabc6f707088a0f9~mv2.jpg','https://static.wixstatic.com/media/d9828b_61019c0fbd3049349c2611a482d47643~mv2.jpg','https://static.wixstatic.com/media/d9828b_74008132f63d4471930ac7ddfecaac72~mv2.jpg','https://static.wixstatic.com/media/d9828b_0bbf9e3da64f46f996c1f7dc083409ed~mv2.jpg']
      },
      {
        address: '1012 28th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_6b5322c3ac554fa38fc6e44617621092~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_6b5322c3ac554fa38fc6e44617621092~mv2.jpg','https://static.wixstatic.com/media/d9828b_d9974ad55756436e8048731ed96bd547~mv2.jpg','https://static.wixstatic.com/media/d9828b_0386534e6ce74270956bb843454646c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_606643630a2a4bfa9d479db6c22023f0~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6007ecca713404ea3c948463d44b8df~mv2.jpg','https://static.wixstatic.com/media/d9828b_cdd2b0ad726c40a5bb6fe9b50534ac81~mv2.jpg','https://static.wixstatic.com/media/d9828b_4f2b82eb3f064a74b71d9afbd4151cab~mv2.jpg','https://static.wixstatic.com/media/d9828b_41b4c9e7b6764f5b99aad67400f3bcbd~mv2.jpg','https://static.wixstatic.com/media/d9828b_080ec504af5f4b4a98311d4363df63d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_e1d4aaf47bc64d728afff9708aba0063~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa3c302cf47f47c6b72fa144ec98688b~mv2.jpg','https://static.wixstatic.com/media/d9828b_c54608f242294cd0bf4d56849926d67c~mv2.jpg','https://static.wixstatic.com/media/d9828b_8005085f6ca041b3875184d04c3725f5~mv2.jpg','https://static.wixstatic.com/media/d9828b_7af5275536754e18bc38d1177bf6cb58~mv2.jpg','https://static.wixstatic.com/media/d9828b_f85a1ce5682443eea3b519b008baf321~mv2.jpg','https://static.wixstatic.com/media/d9828b_291040edcd48400e93c44f2c63e1a70d~mv2.jpg','https://static.wixstatic.com/media/d9828b_04291b783c8248798a3bf06e244f1882~mv2.jpg','https://static.wixstatic.com/media/d9828b_238f3083474c476aa23627bb496c28ed~mv2.jpg','https://static.wixstatic.com/media/d9828b_e6032a644762491e81014c296654f88a~mv2.jpg','https://static.wixstatic.com/media/d9828b_58169544afd640ae873b236c6bac92d3~mv2.jpg','https://static.wixstatic.com/media/d9828b_23633a1a37854a4ebd5307a6fc77be89~mv2.jpg']
      },
      {
        address: '1203 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_801cf90ba5e04c7bb182cc61e542e4d5~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_801cf90ba5e04c7bb182cc61e542e4d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_9a2e739b80d94fccb9d43e85f587addc~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b7dfec1f88e48cba26c3e184f8c0f34~mv2.jpg','https://static.wixstatic.com/media/d9828b_7500b7899ac54ac2b0b04ac3e17888f8~mv2.jpg','https://static.wixstatic.com/media/d9828b_05ad58532e27485ca8d346b546c9e42c~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb13465edfd44efa8ff61c06ba845f00~mv2.jpg','https://static.wixstatic.com/media/d9828b_9460ffa1c0b549edb81a474d33bbe5df~mv2.jpg','https://static.wixstatic.com/media/d9828b_6766275ea06b45c4a1ade9b54de92126~mv2.jpg','https://static.wixstatic.com/media/d9828b_2e573ba1bea249dabbced89100d288af~mv2.jpg','https://static.wixstatic.com/media/d9828b_251d73599b3349c98263851ccb8446a4~mv2.jpg','https://static.wixstatic.com/media/d9828b_1a5c7ff4bc3147a694acecca74cd4b9f~mv2.jpg','https://static.wixstatic.com/media/d9828b_fc4be8886b9c4dd3b3d83d101c16fd4b~mv2.jpg','https://static.wixstatic.com/media/d9828b_e2b1989bb512423f8236aba06412265f~mv2.jpg','https://static.wixstatic.com/media/d9828b_8387a41552c54c4e96ebe0ffd0c631b7~mv2.jpg','https://static.wixstatic.com/media/d9828b_43297e95b66541129c88a4946eecb93b~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a098781651c48c6a4f095706aee8680~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e456d8fce82487d865db7d5f91cc73d~mv2.jpg']
      },
      {
        address: '1206 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_7a3674529d954a239ebcdf86611c115c~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_7a3674529d954a239ebcdf86611c115c~mv2.jpg','https://static.wixstatic.com/media/d9828b_320a3860aaff484aae55e7fb64ad4be2~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2b28703c8034a42ad921e06782882ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_9c22f88e531b440db140d14f0b0af809~mv2.jpg','https://static.wixstatic.com/media/d9828b_3b3e1832d5cd4526b5ce8bbc0a4c16ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_60a295bd891e4c8f84cf7b6d895513ba~mv2.jpg','https://static.wixstatic.com/media/d9828b_79e4032989ba4ebc904872ffd5162cb7~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7fd8eb20a06471d8c02745b136253bb~mv2.jpg','https://static.wixstatic.com/media/d9828b_0056bff3d32f4db2a46f43d8b7b63d55~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e1857ebaa3d40a291e1b6235823be5c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e3288b50f60f43dfbc91595aca1b978d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7f50ecaa4884d87b2aae14617d821cb~mv2.jpg','https://static.wixstatic.com/media/d9828b_7041db6f4dad4a238f9987887a8233ea~mv2.jpg','https://static.wixstatic.com/media/d9828b_e46c7d7883e24abe802da734dda4bb83~mv2.jpg','https://static.wixstatic.com/media/d9828b_1af8c95210e4422d99f1e836972335e8~mv2.jpg','https://static.wixstatic.com/media/d9828b_be996a40fe354cb4bab495e1de605967~mv2.jpg','https://static.wixstatic.com/media/d9828b_1678b9ddf7ef4f6ba5584ee6d2eb9de5~mv2.jpg','https://static.wixstatic.com/media/d9828b_8ea2834be9644d0cb81f17a27aaad3f1~mv2.jpg','https://static.wixstatic.com/media/d9828b_80e85a3c5fb04e7c8f27eac20d7a6a5d~mv2.jpg','https://static.wixstatic.com/media/d9828b_4604c748064d4ed0b8ccd9c59dfa0054~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad1af40daf1e4287af48359dcdb0b526~mv2.jpg']
      },
      {
        address: '1207 Colonial Blvd NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_577c9c84ca604395b42763c082e0fe44~mv2.jpg','https://static.wixstatic.com/media/d9828b_c8b8160c965b46e786570aaa4c0e5067~mv2.jpg','https://static.wixstatic.com/media/d9828b_3c9a2b3342284f868eafde03d51b4c5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_f98683ca720a4f9b83813e3504485cd1~mv2.jpg','https://static.wixstatic.com/media/d9828b_df9ffc08cb4d446b825261c3c14923a8~mv2.jpg','https://static.wixstatic.com/media/d9828b_e7118c7c7f5d48f39881710ed0f063bd~mv2.jpg','https://static.wixstatic.com/media/d9828b_1b8c021139304b70b5ad712797ef552c~mv2.jpg','https://static.wixstatic.com/media/d9828b_a07e1aed3e8a435fa168a9933d12bfdc~mv2.jpg','https://static.wixstatic.com/media/d9828b_b0597321bc514be085d0f416c662f910~mv2.jpg','https://static.wixstatic.com/media/d9828b_fb905ca0c7594ab084d2fa8b91a2bf6b~mv2.jpg','https://static.wixstatic.com/media/d9828b_38e48530067742c9b58d869494be1485~mv2.jpg','https://static.wixstatic.com/media/d9828b_2c22e547ed374c4fb5c5ca41e344f580~mv2.jpg','https://static.wixstatic.com/media/d9828b_10be6e16920f4ec492f9098eba977f9c~mv2.jpg','https://static.wixstatic.com/media/d9828b_e82f6a1f606b46478afd37626d22943c~mv2.jpg','https://static.wixstatic.com/media/d9828b_b7bfb622767b4d3b87f911cbbd427b83~mv2.jpg','https://static.wixstatic.com/media/d9828b_b139f601d96d4922a406e4fd2db93b5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_fd2b7545865645a78d8295c27459989e~mv2.jpg','https://static.wixstatic.com/media/d9828b_8c85e085fb964d7cadfed896a6b0184e~mv2.jpg','https://static.wixstatic.com/media/d9828b_a1e21bbffcc240b99413d5a96f063966~mv2.jpg','https://static.wixstatic.com/media/d9828b_11f4d32902944520932fc1d15eb7649a~mv2.jpg']
      },
      {
        address: '1210 25th St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a56f5a5658184c74bcb3132dcb85eedc~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_a56f5a5658184c74bcb3132dcb85eedc~mv2.jpg','https://static.wixstatic.com/media/d9828b_fa6c6118906a425fb5f8b2c5a3774f80~mv2.jpg','https://static.wixstatic.com/media/d9828b_8c3338a76b954b64addc299c6d8244e7~mv2.jpg','https://static.wixstatic.com/media/d9828b_9e015ee7966844ffb93b20f40bf6d923~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf573dd52e0d4ee9b785b000e52bced1~mv2.jpg','https://static.wixstatic.com/media/d9828b_28bdd1966af7403c9fdf52f701a68bd5~mv2.jpg','https://static.wixstatic.com/media/d9828b_a7ab4aa1b1bf43729ada95824bd0a385~mv2.jpg','https://static.wixstatic.com/media/d9828b_3fd36f67b07348af925cfaa4a28d0431~mv2.jpg','https://static.wixstatic.com/media/d9828b_c5546adb9b824bd0b5287101b4439702~mv2.jpg','https://static.wixstatic.com/media/d9828b_4140bbceef944c7d86ec39531785ff55~mv2.jpg','https://static.wixstatic.com/media/d9828b_7817de29a1484a4da77d1beb03e3a7d6~mv2.jpg','https://static.wixstatic.com/media/d9828b_5b19a78f3ca0437d93be1700a6570d04~mv2.jpg','https://static.wixstatic.com/media/d9828b_9cc8365ec37943239dca06be5c9ca13a~mv2.jpg','https://static.wixstatic.com/media/d9828b_dbb5bb704c844d368b7249fd78889aca~mv2.jpg','https://static.wixstatic.com/media/d9828b_7f44cc0bb59046469a910ca905cac869~mv2.jpg','https://static.wixstatic.com/media/d9828b_01b94cbe3c0842ccbb173fe1f976f179~mv2.jpg','https://static.wixstatic.com/media/d9828b_03ca04e83eca4ac3b0bea8b650001d7b~mv2.jpg','https://static.wixstatic.com/media/d9828b_d222852f106c4a0bb3a07aa73da3dda2~mv2.jpg','https://static.wixstatic.com/media/d9828b_80ca34fb1d194a28b206775672b28111~mv2.jpg','https://static.wixstatic.com/media/d9828b_6aba341c09c74a21a02b091b20e2725e~mv2.jpg','https://static.wixstatic.com/media/d9828b_9120be5f891f4098815ecc2902b7d6fb~mv2.jpg','https://static.wixstatic.com/media/d9828b_8d83e03534264c2d8c682b10b2e28afa~mv2.jpg','https://static.wixstatic.com/media/d9828b_e55786d128fa4d38a7e5bf499c297d9e~mv2.jpg','https://static.wixstatic.com/media/d9828b_84ffb142ab25466c8aad939ed48193ec~mv2.jpg','https://static.wixstatic.com/media/d9828b_eb0c501caf4743f5892122b4ff31b58d~mv2.jpg','https://static.wixstatic.com/media/d9828b_1bbc51bdb31744bf96500a43534c3d4c~mv2.jpg','https://static.wixstatic.com/media/d9828b_23af165e7bf94230b05cf9f072f8b758~mv2.jpg','https://static.wixstatic.com/media/d9828b_1f8d6303053045849e21dfa87af27047~mv2.jpg']
      },
      {
        address: '1219 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_a792dcdfa4054c8fbdf8859a4a1c10df~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_a792dcdfa4054c8fbdf8859a4a1c10df~mv2.jpg','https://static.wixstatic.com/media/d9828b_9d773ec2199b4c699935bbe7f32bdf08~mv2.jpg','https://static.wixstatic.com/media/d9828b_a9059d7289b845b096a6500bfe7e35e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_94e18ec033f54128bbf44e9dfc91d74b~mv2.jpg','https://static.wixstatic.com/media/d9828b_a3bf1a7d87154c4cb96aa1fffee30009~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6709a78b95442baa72f071aaea1f3e9~mv2.jpg','https://static.wixstatic.com/media/d9828b_cb6dbd8f08c84c9a8958372f1df95c33~mv2.jpg','https://static.wixstatic.com/media/d9828b_b53d1f7ccbd14352b9ecc82e59485e96~mv2.jpg','https://static.wixstatic.com/media/d9828b_3517e5582b3a4520ae58d0c9c5e75282~mv2.jpg','https://static.wixstatic.com/media/d9828b_23b23b8fddc4476fb9e013af1d08a24e~mv2.jpg','https://static.wixstatic.com/media/d9828b_86b022f58d5447738a0e3dc22f2481ad~mv2.jpg','https://static.wixstatic.com/media/d9828b_8285eef36797448b820ef3531d532451~mv2.jpg','https://static.wixstatic.com/media/d9828b_efcf046be2454b7da1aba7a025df7719~mv2.jpg','https://static.wixstatic.com/media/d9828b_991e8ab13e4b4c3e81a77c0c0cad34f9~mv2.jpg']
      },
      {
        address: '1306 22nd St NE', city: 'Canton, OH 44714', beds: 4, baths: 1.5,
        cover: 'https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_d344fde378c4422bbb1ae9b9758a0fc9~mv2.jpg','https://static.wixstatic.com/media/d9828b_556ddc390cd14b609888cd5d76268b5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ea67c586b9d434494ee87993a9d9c9a~mv2.jpg','https://static.wixstatic.com/media/d9828b_44ababb0185844599578a9eef3713b6c~mv2.jpg','https://static.wixstatic.com/media/d9828b_f4f7f926890f47328179cb48b2902f7a~mv2.jpg','https://static.wixstatic.com/media/d9828b_032f9a1600254d6088b0b2508004a788~mv2.jpg','https://static.wixstatic.com/media/d9828b_a4882338ffd74b93846d2eeb78e6f28d~mv2.jpg','https://static.wixstatic.com/media/d9828b_8b0d2f7f36ae4c9f94cf72df8696302b~mv2.jpg','https://static.wixstatic.com/media/d9828b_983b37f7a4964fa5bd17b8c445af5054~mv2.jpg','https://static.wixstatic.com/media/d9828b_b16676927ee34dd9a1f78643de2b6738~mv2.jpg','https://static.wixstatic.com/media/d9828b_c6821297b7fe462992d4844270d028db~mv2.jpg','https://static.wixstatic.com/media/d9828b_2cd3b83b7f974e43aa81e6bf86c4c58e~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd82917f8e2042bab65ccf6f8428051d~mv2.jpg','https://static.wixstatic.com/media/d9828b_f766235b70c44c7ca2649ff417707a0a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b28f346ff04743d7ad61a86024b67d59~mv2.jpg','https://static.wixstatic.com/media/d9828b_6b199aa530cd4648aaad6584a8f8baf5~mv2.jpg','https://static.wixstatic.com/media/d9828b_c4da33e12e8648b69302dd040f3ae4da~mv2.jpg','https://static.wixstatic.com/media/d9828b_f7295eef8b7a4f3fa00737065438cb63~mv2.jpg','https://static.wixstatic.com/media/d9828b_5256d744a95747ffbcc661b6b12d156e~mv2.jpg','https://static.wixstatic.com/media/d9828b_acf32c6783ea4cb48b4b3cf021e9f490~mv2.jpg','https://static.wixstatic.com/media/d9828b_a90bc2c9a04949bcb4f0708561314862~mv2.jpg','https://static.wixstatic.com/media/d9828b_e255186a998245feb11b03584cb13f57~mv2.jpg','https://static.wixstatic.com/media/d9828b_db960dc53f6c4d308ae4da6aa0dc7035~mv2.jpg','https://static.wixstatic.com/media/d9828b_fed71e897cb8406c943c35eea6dbc192~mv2.jpg','https://static.wixstatic.com/media/d9828b_fe2cf39101754c4492d9aa5d0993785c~mv2.jpg','https://static.wixstatic.com/media/d9828b_43b0bde644ce40dd823ed3d4a16567da~mv2.jpg','https://static.wixstatic.com/media/d9828b_db76395f3a1042a1aebf16da348f2355~mv2.jpg','https://static.wixstatic.com/media/d9828b_7a3824882ba1417d94a6dec31536db5b~mv2.jpg','https://static.wixstatic.com/media/d9828b_52aaf4c1aff84d99989e3cd54e2c8a5a~mv2.jpg','https://static.wixstatic.com/media/d9828b_54bc60ecb4e844e8921ea56350173ed3~mv2.jpg','https://static.wixstatic.com/media/d9828b_4ef36c4d3e874fb1a48e4f91ae6500c4~mv2.jpg','https://static.wixstatic.com/media/d9828b_676f1226f88445cf830b8e3a65c9c86f~mv2.jpg','https://static.wixstatic.com/media/d9828b_588d16e9896442e08ae5037d48fcdf96~mv2.jpg','https://static.wixstatic.com/media/d9828b_f720005ace1544549c98cc41fa45385b~mv2.jpg','https://static.wixstatic.com/media/d9828b_4301c5e681e24c9db2b02bc244b506ba~mv2.jpg','https://static.wixstatic.com/media/d9828b_cbf1c1b055ff43e1902b4f07642dc742~mv2.jpg']
      },
      {
        address: '1326 24th St NE', city: 'Canton, OH 44714', beds: 4, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_156f374e7ab54675a7bb2680b21121b6~mv2.jpg','https://static.wixstatic.com/media/d9828b_02f08a8aa68c41b1bc124e8650c5b0fe~mv2.jpg','https://static.wixstatic.com/media/d9828b_0e08866f292246639cf037cdf86206d5~mv2.jpg','https://static.wixstatic.com/media/d9828b_173602d244544b4dba40ea66bd6e3d2b~mv2.jpg','https://static.wixstatic.com/media/d9828b_a277d2494c974c12877f2bc2a5739276~mv2.jpg','https://static.wixstatic.com/media/d9828b_d40f5294bfae4a4d83b3410bd466268c~mv2.jpg','https://static.wixstatic.com/media/d9828b_ad704b7fecd84cf0909a31f5026e2054~mv2.jpg','https://static.wixstatic.com/media/d9828b_a2762ab82bd8403dbb5fea1928499365~mv2.jpg','https://static.wixstatic.com/media/d9828b_7d242996e89f4f12bdb696f93810fb3d~mv2.jpg','https://static.wixstatic.com/media/d9828b_c7bcfaab4b7a4a0db6013baaa507b686~mv2.jpg','https://static.wixstatic.com/media/d9828b_3439cc0c510047f2901ca3601c3898c5~mv2.jpg','https://static.wixstatic.com/media/d9828b_c33379ca53274a9989c4d58d6dda3fa7~mv2.jpg','https://static.wixstatic.com/media/d9828b_4d330ce6672141dba6fc42e56879bdbb~mv2.jpg','https://static.wixstatic.com/media/d9828b_22d75194d1ec430fa67926f88a8366eb~mv2.jpg','https://static.wixstatic.com/media/d9828b_1ac385d0257a4e3087304d25e0e2ecf3~mv2.jpg','https://static.wixstatic.com/media/d9828b_38bcea7395bc49eda7808cb609054247~mv2.jpg','https://static.wixstatic.com/media/d9828b_e85f0df3dec740a8bc824d5b9aa46c13~mv2.jpg','https://static.wixstatic.com/media/d9828b_bf8c62c3cf9a4ce5a99bfc37f77a295c~mv2.jpg']
      },
      {
        address: '1330 24th St NE', city: 'Canton, OH 44714', beds: 3, baths: 2,
        cover: 'https://static.wixstatic.com/media/d9828b_c2a3ce875fc04ddab5c5fc09a45b230e~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_c2a3ce875fc04ddab5c5fc09a45b230e~mv2.jpg','https://static.wixstatic.com/media/d9828b_b95285ecb60b4d1ca4cc586900bb6465~mv2.jpg','https://static.wixstatic.com/media/d9828b_f5a665e109d94e9c9342e9ac20868da3~mv2.jpg','https://static.wixstatic.com/media/d9828b_a0ca1af03ef749d7950f1793b6b984d8~mv2.jpg','https://static.wixstatic.com/media/d9828b_cfc48e8f6bb7418f9bb88e9ae99ef11c~mv2.jpg','https://static.wixstatic.com/media/d9828b_ca4eaee37ed84618ba188aa6e6183fd4~mv2.jpg','https://static.wixstatic.com/media/d9828b_57e99a4af002400789d3cba65367c364~mv2.jpg','https://static.wixstatic.com/media/d9828b_b15f62e3b06d40f091901b1642432aec~mv2.jpg','https://static.wixstatic.com/media/d9828b_a940cbd4026244c591064195c44f75e4~mv2.jpg','https://static.wixstatic.com/media/d9828b_6ef518db2ece4124ad3c91f20cc92ee4~mv2.jpg','https://static.wixstatic.com/media/d9828b_d74d699cc18e4b128fb91d1c7a9cdf3f~mv2.jpg','https://static.wixstatic.com/media/d9828b_c237d4eee0594badac0673e43a33a3f6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f46ca3857dcd42fe930f2b1e38843a95~mv2.jpg','https://static.wixstatic.com/media/d9828b_9182f6c64f75438799d7e4d6d3217785~mv2.jpg','https://static.wixstatic.com/media/d9828b_12f9ec1e50524770b3af947fe6ae3f66~mv2.jpg','https://static.wixstatic.com/media/d9828b_65e5b14f81b34b0c856dd9e7cf9abe05~mv2.jpg','https://static.wixstatic.com/media/d9828b_ac1a8edb421f4234995a584f81595603~mv2.jpg','https://static.wixstatic.com/media/d9828b_7c58c584f7a347859633ab71411a21f5~mv2.jpg','https://static.wixstatic.com/media/d9828b_15ad8c4a4f2a49899386a4d34ba1a8c6~mv2.jpg','https://static.wixstatic.com/media/d9828b_f25016d85cfa4ec78bb660656dc68a4a~mv2.jpg','https://static.wixstatic.com/media/d9828b_b1bda3aa8b52475e8b74098ef11e17b0~mv2.jpg','https://static.wixstatic.com/media/d9828b_8a45b554c823477385923a29b2df062e~mv2.jpg','https://static.wixstatic.com/media/d9828b_c138a11bfab84f5a8d8b4da75af2d29b~mv2.jpg','https://static.wixstatic.com/media/d9828b_2d042bf8426546098f1a34ffcae268c2~mv2.jpg','https://static.wixstatic.com/media/d9828b_13d46c916ea8459bb4b54c914d03479b~mv2.jpg','https://static.wixstatic.com/media/d9828b_29aff06d39884dca9b3c88a38b405804~mv2.jpg','https://static.wixstatic.com/media/d9828b_04b0ed448dd743c8ad251ab412aefcfe~mv2.jpg','https://static.wixstatic.com/media/d9828b_69d6adbd10334f4c927b85bf0cada6de~mv2.jpg','https://static.wixstatic.com/media/d9828b_3058d28ef3d649caa21225e06d971c3c~mv2.jpg','https://static.wixstatic.com/media/d9828b_0930d65a6b3a41e183767bf9dd63842e~mv2.jpg','https://static.wixstatic.com/media/d9828b_0aca94d372fb4ca3933399860350bca1~mv2.jpg']
      },
      {
        address: '1335 22nd St NE', city: 'Canton, OH 44714', beds: 3, baths: 1,
        cover: 'https://static.wixstatic.com/media/d9828b_a6544565e6a948228e0fc5f558cf334b~mv2.jpg',
        photos: ['https://static.wixstatic.com/media/d9828b_a6544565e6a948228e0fc5f558cf334b~mv2.jpg','https://static.wixstatic.com/media/d9828b_aec477e104a14605b01da381e8459be2~mv2.jpg','https://static.wixstatic.com/media/d9828b_8813d069576f419fb69d5a10c83ff521~mv2.jpg','https://static.wixstatic.com/media/d9828b_b986f1912f604a36b81faaeadd3df36a~mv2.jpg','https://static.wixstatic.com/media/d9828b_259aec8e046e444aa87315d18c2e9a8a~mv2.jpg','https://static.wixstatic.com/media/d9828b_93a99f4d67264bd1ba45b2c7f3c8220d~mv2.jpg','https://static.wixstatic.com/media/d9828b_ebd9b03f5cbe4b4e813797598274564c~mv2.jpg','https://static.wixstatic.com/media/d9828b_4824f7ef70ff4a3fb717badeacd5c40b~mv2.jpg','https://static.wixstatic.com/media/d9828b_ec50795bef68459c86ce679cb50b475b~mv2.jpg','https://static.wixstatic.com/media/d9828b_058e61ed16f94ee9a9575001d3006eee~mv2.jpg','https://static.wixstatic.com/media/d9828b_dd4b243141aa4345b96f100441dc2a06~mv2.jpg','https://static.wixstatic.com/media/d9828b_8f74ee4f93504391a55a3ed62cc2f3c8~mv2.jpg','https://static.wixstatic.com/media/d9828b_3a0d26bf255f4649800da6af48de1537~mv2.jpg','https://static.wixstatic.com/media/d9828b_f0f2a6b6faef4f97ab83d169350f1d34~mv2.jpg','https://static.wixstatic.com/media/d9828b_07ba3359a2ac44529e1b1af1ebeb4f73~mv2.jpg','https://static.wixstatic.com/media/d9828b_5fbbc249c5f042d0820c394ae0a5bad9~mv2.jpg','https://static.wixstatic.com/media/d9828b_b04e14fad28f41bfb192717aafb9118f~mv2.jpg','https://static.wixstatic.com/media/d9828b_5f42be1db408400ca885db76770699b3~mv2.jpg','https://static.wixstatic.com/media/d9828b_44c8bc3efd76487591517896803433d7~mv2.jpg','https://static.wixstatic.com/media/d9828b_98fc0bebc79145629e7097f2901b025e~mv2.jpg']
      }
    ];

    var RENTS = {'804 29th St NE':'$1,450','1012 28th St NE':'$1,545','1203 25th St NE':'$1,200','1206 24th St NE':'$1,645','1207 Colonial Blvd NE':'$1,350','1210 25th St NE':'$1,430','1219 24th St NE':'$1,320','1306 22nd St NE':'$1,515','1326 24th St NE':'$1,550','1330 24th St NE':'$1,400','1335 22nd St NE':'$1,200'};
    var cardsHtml = PROPERTIES.map(function(p, i) {
      var rent = RENTS[p.address] || '';
      return '<div class="prop-card" data-idx="' + i + '"><div class="prop-card__img-wrap"><img class="prop-card__cover" src="' + p.cover + '" alt="' + p.address + '" loading="lazy" /><span class="prop-card__badge">For Rent</span></div><div class="prop-card__info"><div class="prop-card__address">' + p.address + '</div><div class="prop-card__city">' + p.city + '</div><div class="prop-card__specs">' + p.beds + ' Bed &nbsp;&middot;&nbsp; ' + p.baths + ' Bath &nbsp;&middot;&nbsp; Single Family</div>' + (rent ? '<div class="prop-card__rent">' + rent + '/mo</div>' : '') + '<div class="prop-card__btn">View Details &rarr;</div></div></div>';
    }).join('');

    this.innerHTML = `
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
csh-portfolio-ne { display: block; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #f5f7fa; }
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
  <div class="hero__badge">Portfolio 4 &mdash; NE Canton</div>
  <h1 class="hero__title">Portfolio 4: NE / Market-Colonial Cluster</h1>
  <p class="hero__sub">11 single-family rental homes &nbsp;&middot;&nbsp; ZIP 44714</p>
</section>
<div class="section-head"><h2>Properties</h2><span>11 homes &middot; $15,655/mo &middot; $187,860 Annual</span></div>
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
customElements.define('csh-portfolio-ne', CshPortfolioNe);
