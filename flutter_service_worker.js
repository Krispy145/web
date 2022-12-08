'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fab6c114dd372def84c26fa3c3551919",
"index.html": "57fcf3f3745a70781e2039ba5da6662d",
"/": "57fcf3f3745a70781e2039ba5da6662d",
"main.dart.js": "fb66d838b7d075411ecff1e04b145c3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16257dc230ca71c89774fef471f70cdc",
"assets/AssetManifest.json": "13368cfc583ee0abf82c1c3c0f261477",
"assets/NOTICES": "5bc1f1b4583426934bab9be605106476",
"assets/FontManifest.json": "9923a9b4ed1d04ad9bcf1583891a2fb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/packages/components/lib/assets/images/Brand/Launch%2520Animation.png": "9210404e93b640ca06b26f9eb58916e5",
"assets/packages/components/lib/assets/images/Brand/Logo.svg": "7a5bd31e26b2ef2017c5d1129a60729b",
"assets/packages/components/lib/assets/images/Brand/Spotlas%2520Name%2520And%2520Logo%2520White.png": "aea5b9aecdb63170f5281c544b1347a5",
"assets/packages/components/lib/assets/images/Brand/Launch.png": "9f67bb1e79bdac152ed5944451ba5fdf",
"assets/packages/components/lib/assets/images/Gifs/Launch%2520Logo%2520Animation.gif": "e6adf31bae0c83f8fac9e989e46a1d83",
"assets/packages/components/lib/assets/images/Gifs/Splash%2520Animation%2520With%2520Delay.gif": "c40b013674845b342e0c1fad379ce0f3",
"assets/packages/components/lib/assets/images/Gifs/Join%2520Animation.gif": "759c6090a2c78557cb249e430f5582aa",
"assets/packages/components/lib/assets/images/Gifs/Splash%2520Animation%2520No%2520Delay.gif": "28d501cc16f9decb46407364c3f7c36a",
"assets/packages/components/lib/assets/images/Icons/Grid.svg": "0e05859357799fa05559807c35b86d4f",
"assets/packages/components/lib/assets/images/Icons/Tag%2520M.png": "1d2e34821fbb2d4fe4507155a93bfd27",
"assets/packages/components/lib/assets/images/Icons/Search.svg": "f6acc92c27e34a1529948a2b2da6f484",
"assets/packages/components/lib/assets/images/Icons/Citymapper.svg": "4bee6187e686bf26ff6e78011b9b8208",
"assets/packages/components/lib/assets/images/Icons/Instagram%2520Border.svg": "71f94b6db87382f3af3feab3349b3937",
"assets/packages/components/lib/assets/images/Icons/List.svg": "f73634f16538a2ee5038fc9df79eb4e7",
"assets/packages/components/lib/assets/images/Icons/House.svg": "6266f7ceff669eea6ef5e490bc10cdb7",
"assets/packages/components/lib/assets/images/Icons/Information.svg": "108b094a780374a7df1cfcc061b21f25",
"assets/packages/components/lib/assets/images/Icons/Tag%2520L.png": "5544cf520a899b6bc5fbe3013990fb6e",
"assets/packages/components/lib/assets/images/Icons/House%2520Circle.svg": "4428df6bfbb598fdc828036e21abd881",
"assets/packages/components/lib/assets/images/Icons/Tools.svg": "6be7cc38f323af93c7bd4e09131d059e",
"assets/packages/components/lib/assets/images/Icons/Speech%2520Bubble.svg": "da257662560c45d684b83239b10bb024",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Regular%2520Left.svg": "efd0894061d03965bcd766abee07f4fa",
"assets/packages/components/lib/assets/images/Icons/List%2520Circle%2520Border.svg": "87ac4c188c4af5557dcdd66e3e5b5fd5",
"assets/packages/components/lib/assets/images/Icons/Link%25202.svg": "5f2a11100f208e2240d56059976accd2",
"assets/packages/components/lib/assets/images/Icons/Eye%2520Border%2520Crossed.svg": "64bf26075305f07a52d731b133d05ae1",
"assets/packages/components/lib/assets/images/Icons/Star%2520S.png": "5b04c812fe05aee188acb3ad43ffd61a",
"assets/packages/components/lib/assets/images/Icons/Plus%2520Bold.svg": "e11ec3a6ad85d86b15c594c6dbc93cec",
"assets/packages/components/lib/assets/images/Icons/Menu%2520Circle%2520Border.svg": "d02bc743ad3f8edd76b9842d12348d73",
"assets/packages/components/lib/assets/images/Icons/Bar%2520Chart.svg": "544e13876fe1037f204be9908169b54b",
"assets/packages/components/lib/assets/images/Icons/Person.svg": "572bc18eb249b400e3533f1cf403a6b8",
"assets/packages/components/lib/assets/images/Icons/Bolt.png": "d052d7b46a530461f2510c7871ed446f",
"assets/packages/components/lib/assets/images/Icons/Paper%2520Plane%2520Border.svg": "907eb0c475d839ad67fe060c4a0f27be",
"assets/packages/components/lib/assets/images/Icons/Plus%2520Thin.svg": "dcf9b6489f63af4a3ca8271fb82fceb8",
"assets/packages/components/lib/assets/images/Icons/Freenow.png": "3e13a04f2d911673a9ca6ad359d8bf01",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Regular%2520Up.svg": "9d69121b7beeed86f2ca44b24edcb699",
"assets/packages/components/lib/assets/images/Icons/Pen%2520Border.svg": "969add65a40aa082d0adb09b38060cef",
"assets/packages/components/lib/assets/images/Icons/Plus%2520Circle.svg": "c2ba60c1385c6553b05cef0f3f37b00f",
"assets/packages/components/lib/assets/images/Icons/Heart%2520Border.svg": "7e21810e4ae54a4d25ab814628aca0f0",
"assets/packages/components/lib/assets/images/Icons/Map.svg": "b24a0e7b7739ce111c40c65fcd050ae1",
"assets/packages/components/lib/assets/images/Icons/Database.svg": "02063c7fae7a88db153c0e3b8e1618fe",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Bold%2520Left.svg": "e0765a5b9d26c9f1b2a38e381247e009",
"assets/packages/components/lib/assets/images/Icons/Bell%2520Crossed.svg": "b644fd4f5eb148264bbaf74d353a70ac",
"assets/packages/components/lib/assets/images/Icons/Sign%2520Out.svg": "f7e3ed863fc5c1c9e625bee53e778fb9",
"assets/packages/components/lib/assets/images/Icons/Information%2520Circle%2520Border.svg": "1a4f7636e7ea6055ce4343b064327564",
"assets/packages/components/lib/assets/images/Icons/Pen%2520Circle.svg": "39ae882b35b79acfce344885710800d9",
"assets/packages/components/lib/assets/images/Icons/Lock.svg": "ff04a551304892973afe1669ea9bf51c",
"assets/packages/components/lib/assets/images/Icons/Minus%2520Thin.svg": "246bf66ca2019efbcdf03d65e514e3a7",
"assets/packages/components/lib/assets/images/Icons/Cross%2520Circle.svg": "eeb1d1cba14f6e65c2da210c074bc725",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Left.svg": "0017416f6ccd3997054a0875a668dd60",
"assets/packages/components/lib/assets/images/Icons/Clock%2520Border.svg": "8bd19a74d76b9ce4e1ec2defb7e644e1",
"assets/packages/components/lib/assets/images/Icons/Pen.svg": "da6bfb9cb993129f1fb7198631c0a16e",
"assets/packages/components/lib/assets/images/Icons/Instagram.svg": "22f0538a49c7e2797dbb1c7f26ea6012",
"assets/packages/components/lib/assets/images/Icons/Database%2520Circle.svg": "93f5833d00e0a1d108292709346d2497",
"assets/packages/components/lib/assets/images/Icons/People%2520Circle%2520Border.svg": "a8a476129f1b5f7277fdb1c62f2b1e51",
"assets/packages/components/lib/assets/images/Icons/at.svg": "a1fcab5a710aa336e0cff772d0f5c5fd",
"assets/packages/components/lib/assets/images/Icons/Houses%2520Circle.svg": "9e6dde9988678371224c1396bfe4e8f6",
"assets/packages/components/lib/assets/images/Icons/Video%2520Camera.svg": "37306224810258b1e0b57f09f172d3c9",
"assets/packages/components/lib/assets/images/Icons/Settings.svg": "173e6c3b2905c61c50db6ddec83934d4",
"assets/packages/components/lib/assets/images/Icons/Gett.webp": "39bff5ffbd2a11b2b2f273cc9352bb86",
"assets/packages/components/lib/assets/images/Icons/Paper%2520Plane.svg": "02b8c15dfcab0ad594409c07ce07012d",
"assets/packages/components/lib/assets/images/Icons/Person%2520L.png": "08bf7376c2c972ac689f2a1d92814b27",
"assets/packages/components/lib/assets/images/Icons/Information%2520Circle.svg": "7c1ab0b15740f6a8083392f37b23ec89",
"assets/packages/components/lib/assets/images/Icons/Houses.svg": "11e74603575832cc8b5a5264a8636404",
"assets/packages/components/lib/assets/images/Icons/Pin.svg": "a46c0d6d8aee0d1bb80440b6288b9b5a",
"assets/packages/components/lib/assets/images/Icons/Options%2520Circle%2520Border.svg": "739cb33dff06f9199c95cdce368ac05a",
"assets/packages/components/lib/assets/images/Icons/Person%2520M.png": "e6a69ed03c9ccdc889bc95f0b5212bcc",
"assets/packages/components/lib/assets/images/Icons/Gallery.svg": "c052a2076cab92b48d8fb08a925297eb",
"assets/packages/components/lib/assets/images/Icons/Volume.svg": "190ee42e2219bb67cb88636acb740ef6",
"assets/packages/components/lib/assets/images/Icons/Grid%2520L.png": "e539902269da634dec32f2b83318f913",
"assets/packages/components/lib/assets/images/Icons/Speech%2520Bubble%2520Border.svg": "fefca5eb00e954218efd24a5f05df1f5",
"assets/packages/components/lib/assets/images/Icons/House%2520Border.svg": "1f421b4d112d8a46feb4c3db63bd41be",
"assets/packages/components/lib/assets/images/Icons/List%2520M.png": "ef9ee33658575973fcf786923339c1e9",
"assets/packages/components/lib/assets/images/Icons/Bell.svg": "74e5fbd9f342e096b14e8ae7c08907d3",
"assets/packages/components/lib/assets/images/Icons/Cabify.png": "6b3519cc3a09c2c00593f4b8f217f9f7",
"assets/packages/components/lib/assets/images/Icons/Tick.svg": "bec09e435f2eab5afbfe171e7856fbfc",
"assets/packages/components/lib/assets/images/Icons/Options%2520Circle.svg": "9eb54e6ec3077903a49807a21f2dc38e",
"assets/packages/components/lib/assets/images/Icons/Flag.svg": "2eb172c72064fe072bd43703448eaa9b",
"assets/packages/components/lib/assets/images/Icons/Cross%2520Thin.svg": "c9ecd1438420c2b9e86c270459cb3127",
"assets/packages/components/lib/assets/images/Icons/Bar%2520Chart%2520Circle%2520Border.svg": "e2926ecf5aa9be37bd4ced2e61b5c2b4",
"assets/packages/components/lib/assets/images/Icons/Tagged%25201.svg": "ba1aa0d4176e2fe9f115dab5c0d3845b",
"assets/packages/components/lib/assets/images/Icons/List%2520L.png": "c344ee9fce33628dea76d3dd9a6bccfb",
"assets/packages/components/lib/assets/images/Icons/Exclamation%2520Circle.svg": "4bbc0951f68871af4ca3cfb1716effe0",
"assets/packages/components/lib/assets/images/Icons/Grid%2520M.png": "3f796be7ff973f5dd5a359eb90e75879",
"assets/packages/components/lib/assets/images/Icons/Menu%2520Circle.svg": "54a19540c5765d5c9d24a18fee9fb9a7",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Bold%2520Up.svg": "e92576e650ebd35b830e62cbe125d059",
"assets/packages/components/lib/assets/images/Icons/Ten.svg": "6ed3706b71b8330519be01a5fbec2736",
"assets/packages/components/lib/assets/images/Icons/Plus.svg": "e2e88d9285a1f4978678edf89781ded1",
"assets/packages/components/lib/assets/images/Icons/Minus%2520Bold.svg": "99c0ee28616554d631292e76a4fa04bc",
"assets/packages/components/lib/assets/images/Icons/Speech%2520Bubble%2520Plus.svg": "80374f68346b00023514f6908b8659fe",
"assets/packages/components/lib/assets/images/Icons/Email.svg": "7d3f992353214a7b00b5c880f32fdf52",
"assets/packages/components/lib/assets/images/Icons/Internet.svg": "fd1f4984a041baf6b26325a20232189e",
"assets/packages/components/lib/assets/images/Icons/Tagged%25202.svg": "658679fb21830ff61f5907cd09cf8472",
"assets/packages/components/lib/assets/images/Icons/Spotify.svg": "620dffeb6b4d7216e0ae3f19305a9c5f",
"assets/packages/components/lib/assets/images/Icons/Database%2520Circle%2520Border.svg": "fed8c69ec9deb9a29baf2ed2e46fc15b",
"assets/packages/components/lib/assets/images/Icons/People.svg": "4e8eabbb7822a35093b939b8f9e7e56c",
"assets/packages/components/lib/assets/images/Icons/Pin%2520Border.svg": "5f93138ffc726624b2d5bdf3abd9ee47",
"assets/packages/components/lib/assets/images/Icons/Copy.svg": "7f3403d0f1dc084dfe86a84558c89e0a",
"assets/packages/components/lib/assets/images/Icons/Eye%2520Circle%2520Border.svg": "14ccce78fc0d26ee5b514e5592d0dbaa",
"assets/packages/components/lib/assets/images/Icons/Refresh.svg": "7392db01caf3a4f1d26875ae344001d3",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Right.svg": "0229b243737d258574e87e7c83ff3af6",
"assets/packages/components/lib/assets/images/Icons/Snapchat.svg": "461a0c407a69802c38744f72eca0427d",
"assets/packages/components/lib/assets/images/Icons/Eye%2520Circle.svg": "4af3263694b45ff9363399f84402a506",
"assets/packages/components/lib/assets/images/Icons/Moon%2520New.svg": "cd1c5555aed80e9414ac91faa5b78ea4",
"assets/packages/components/lib/assets/images/Icons/Sign%2520Post.svg": "56b2f682f929241c323409254146a5da",
"assets/packages/components/lib/assets/images/Icons/Image.svg": "4a204691ae19247da17d3ce61cfa57bf",
"assets/packages/components/lib/assets/images/Icons/Public%2520Transport.svg": "30f43f731443817988d9c33b01d7f135",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Up.svg": "313cd7924889158095c38ee9e3ed8fa8",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Right%2520Up.svg": "ae902b01f2047398e18636923848787c",
"assets/packages/components/lib/assets/images/Icons/Star%2520Border.svg": "d081d1a8c5c19e56d29bf6407ff9ef40",
"assets/packages/components/lib/assets/images/Icons/Crown.svg": "f27d9a251d1b4f13a1ca998049943cf1",
"assets/packages/components/lib/assets/images/Icons/Calendar%2520Plus.svg": "19b36827dc4d4d3108b49297e9c47301",
"assets/packages/components/lib/assets/images/Icons/Driving.svg": "09ea21d0c3d2c433ac6ed72c6e65d0f8",
"assets/packages/components/lib/assets/images/Icons/Person%2520S.png": "a994eb2eb5f6292e09c8d9bdf701d17c",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Down.svg": "dc4514925094a3027928552112d71b4a",
"assets/packages/components/lib/assets/images/Icons/List%2520Bold.svg": "bf9221c469372e2d919d511d8efb4947",
"assets/packages/components/lib/assets/images/Icons/Facebook.svg": "91b41a817422a0413f014367a0f3ef85",
"assets/packages/components/lib/assets/images/Icons/Camera.svg": "c17ecbdc565563554928be26f7f4d43c",
"assets/packages/components/lib/assets/images/Icons/Loading%2520Spinner%2520White.svg": "28955dc64616aad43fb2a6be83416876",
"assets/packages/components/lib/assets/images/Icons/Pinterest.svg": "467c66c967ece4a50f003837c574dee0",
"assets/packages/components/lib/assets/images/Icons/List%2520S.png": "c608c0319f8aeb6a37d3988a702cacb3",
"assets/packages/components/lib/assets/images/Icons/WhatsApp.svg": "a05462dcb0694057e4cbc93af1f62a79",
"assets/packages/components/lib/assets/images/Icons/Google.svg": "1c0cef4439fb7ce5e5bd080819c1afcc",
"assets/packages/components/lib/assets/images/Icons/Write.svg": "d2a572966506a2c271e34507edc21ca6",
"assets/packages/components/lib/assets/images/Icons/Hashtag.svg": "cc840ae8f3b756b6507ed2ee4d0f3f77",
"assets/packages/components/lib/assets/images/Icons/Star.svg": "770166a03929ae5d790ec4078288eace",
"assets/packages/components/lib/assets/images/Icons/Grid%2520S.png": "62388633db9caa78df67313dfba41560",
"assets/packages/components/lib/assets/images/Icons/Person%2520Border.svg": "68f91f9b8f13bd2a03ad2e58b3a14e83",
"assets/packages/components/lib/assets/images/Icons/Trash%2520Can.svg": "f23dd598d9999b324f7e119d18579f1f",
"assets/packages/components/lib/assets/images/Icons/YouTube.svg": "4fed364f88a2d9cce2c6c2cb350837f3",
"assets/packages/components/lib/assets/images/Icons/Help%2520Circle.svg": "8ccacfa34abd5f69567c5d509ad65b3e",
"assets/packages/components/lib/assets/images/Icons/House%2520Circle%2520Border.svg": "58e8f1e5e28bc3bbdf5f97ea13c19744",
"assets/packages/components/lib/assets/images/Icons/Analytics.svg": "2feee843299e0b295cc9072b6a5c95a9",
"assets/packages/components/lib/assets/images/Icons/Uber.svg": "8e7b0fd69a531ef4a52f1ddbb289b0f7",
"assets/packages/components/lib/assets/images/Icons/Tag%2520S.png": "9eebe5441cbe39b593ac73cfdd580fef",
"assets/packages/components/lib/assets/images/Icons/Eye%2520Crossed.svg": "58821847b3c0193f98731d5bfbe5f002",
"assets/packages/components/lib/assets/images/Icons/Clock.svg": "df94196706f83d50601e65d439ec4aa5",
"assets/packages/components/lib/assets/images/Icons/Person%2520Cross.svg": "f361f14a5ae356fa4ec097e2d1129825",
"assets/packages/components/lib/assets/images/Icons/Phone.svg": "21edd0ceb080a6cb3ba940c15407e1e9",
"assets/packages/components/lib/assets/images/Icons/Person%2520Add.svg": "bdb13b695aab5bca97d1b367e0281464",
"assets/packages/components/lib/assets/images/Icons/Eye.svg": "a1300825276ebe376a1822c224727ad0",
"assets/packages/components/lib/assets/images/Icons/Options.svg": "ff6a0520e3097d9862e3f3920111ae4a",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Regular%2520Down.svg": "06a2f00aef5e2e6663a176d30dfc895c",
"assets/packages/components/lib/assets/images/Icons/Ratio%2520Arrows.svg": "a7f95a71f286cc1f9f0cebd1f86f777f",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Bold%2520Right.svg": "5144da5b96d166027b7e22e5170cc5cc",
"assets/packages/components/lib/assets/images/Icons/Phone%2520Border.svg": "91609f4869efced94a1a8e2a3806c0a5",
"assets/packages/components/lib/assets/images/Icons/List%2520Circle.svg": "0225156cc310a79c6afa5573567ad964",
"assets/packages/components/lib/assets/images/Icons/LinkedIn.svg": "3ae284542f59b77f6b0bb9b1c1ac46fc",
"assets/packages/components/lib/assets/images/Icons/Undo.svg": "0c6dcc2aee039cc8a9646a7714cdd01f",
"assets/packages/components/lib/assets/images/Icons/Grid%2520Border.svg": "1e391ecb6fb34b1b0adc2c891d288b89",
"assets/packages/components/lib/assets/images/Icons/Twitter.svg": "40c20f41bbc7947358f489283b3e5d31",
"assets/packages/components/lib/assets/images/Icons/Filter.svg": "c3daf58705f9f432ebe62910121caf7b",
"assets/packages/components/lib/assets/images/Icons/Loading%2520Spinner.svg": "c3765fac9c49f0193df47c05208cf267",
"assets/packages/components/lib/assets/images/Icons/Star%2520M.png": "95649dbabcff4b2830b6bb0e3da47316",
"assets/packages/components/lib/assets/images/Icons/Marketing.svg": "171eee0139a73ac1178df15da53e5e86",
"assets/packages/components/lib/assets/images/Icons/Cross.svg": "15e19fb6cae5fb0d6a9a0870b20776aa",
"assets/packages/components/lib/assets/images/Icons/Star%2520L.png": "76443928fc52caa308fcc134cade19ae",
"assets/packages/components/lib/assets/images/Icons/Internet%2520Border.svg": "cb88e390160c310bc503404c60208dae",
"assets/packages/components/lib/assets/images/Icons/Email%2520Border.svg": "428059b1f0f9b11429a8d1dd5c347481",
"assets/packages/components/lib/assets/images/Icons/People%2520Circle.svg": "ab321a63448416fcc8746f2ee6c4f9f3",
"assets/packages/components/lib/assets/images/Icons/Add%2520to%2520List.svg": "2c6d47b7b408ff725e31584b8463155d",
"assets/packages/components/lib/assets/images/Icons/Map%2520Border.svg": "d727deb7d11c4d0212e58f336f75cfbc",
"assets/packages/components/lib/assets/images/Icons/Person%2520Circle.svg": "d2c25ac96d89834a1cabede1a77fdab6",
"assets/packages/components/lib/assets/images/Icons/Messenger.svg": "dfff7d997bdfb02c217aec4709fbb7d0",
"assets/packages/components/lib/assets/images/Icons/Pen%2520Circle%2520Border.svg": "3d0119134feab3ff3bf7629ba0cf1b38",
"assets/packages/components/lib/assets/images/Icons/Order%2520Arrows.svg": "e5b4269ccb4e9e15653993421d75f271",
"assets/packages/components/lib/assets/images/Icons/Eye%2520Border.svg": "2a70b4cba17c3a855924c7ac10352d3a",
"assets/packages/components/lib/assets/images/Icons/Tick%2520Circle.svg": "9450930f77de9142802400aa026f1380",
"assets/packages/components/lib/assets/images/Icons/Menu.svg": "cbdedc3204a555ecc2323814ba99ad2e",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Bold%2520Down.svg": "9e9088932078d9f63367176ccbf9a117",
"assets/packages/components/lib/assets/images/Icons/Apple.svg": "63f0afd30625a320f0109cdb4148e720",
"assets/packages/components/lib/assets/images/Icons/Bla%2520Bla.png": "a019f27d4f75d8f482eb2c49ee4cbe3a",
"assets/packages/components/lib/assets/images/Icons/Waze.svg": "9df00737ca6b0414254b974552174fde",
"assets/packages/components/lib/assets/images/Icons/Block.svg": "e5b94c0f7feac0cb2814073c84912b2e",
"assets/packages/components/lib/assets/images/Icons/Volume%2520Mute.svg": "43059ba1c6260fe31318cb8778ee6c1c",
"assets/packages/components/lib/assets/images/Icons/Person%2520Circle%2520Border.svg": "6f15c4b3282f785fb70a5257f1d6c021",
"assets/packages/components/lib/assets/images/Icons/Bar%2520Chart%2520Circle.svg": "a8bb5643775ac0557f8a2a80b0ed0925",
"assets/packages/components/lib/assets/images/Icons/Walking.svg": "f931be7c00ba8b071f616102227c5c7d",
"assets/packages/components/lib/assets/images/Icons/TikTok.svg": "45444fa679d1d5cb664ecf0c3fcde05f",
"assets/packages/components/lib/assets/images/Icons/Minus.svg": "d7a5ac4b5b0a8b0b1bc891bc3b407906",
"assets/packages/components/lib/assets/images/Icons/Lyft.png": "299e9fdaebbbec4e52f3a3720c93a592",
"assets/packages/components/lib/assets/images/Icons/Multiple%2520Images.svg": "620e4733edf84b092974a7d2346b8d15",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Left%2520Padded.svg": "93db5288aa73dffd4cb6a82734f8d14d",
"assets/packages/components/lib/assets/images/Icons/Moon.svg": "3a2a36aee4924e4137bbfe1e82c4cc72",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Up%2520Right%2520Border.svg": "56dd5bdab06e9668017df88343dc8326",
"assets/packages/components/lib/assets/images/Icons/Arrow%2520Head%2520Line%2520Regular%2520Right.svg": "3ca973bead6afa3e3ba8da7f5c3a4e01",
"assets/packages/components/lib/assets/images/Icons/Houses%2520Circle%2520Border.svg": "22f3e476fb4ba59dc0f1ef248631115f",
"assets/packages/components/lib/assets/images/Icons/Heart.svg": "ca85696c3279dca4129a2ecd17cbbf98",
"assets/packages/components/lib/assets/images/Social%2520Logos/Facebook%2520Logo%2520White.png": "5c787c2a1f24bd3ec04403709c6e0d9d",
"assets/packages/components/lib/assets/images/Social%2520Logos/Apple%2520Maps.png": "e510cfd7fa377bab8538a987e3190351",
"assets/packages/components/lib/assets/images/Social%2520Logos/Google%2520Logo.png": "f47bac8a5f701d7d5511093f13b644cf",
"assets/packages/components/lib/assets/images/Social%2520Logos/Google%2520Maps.png": "546de933f323a6219f9bdb0f4afbb9eb",
"assets/packages/components/lib/assets/images/Social%2520Logos/Apple%2520Logo%2520White.png": "cec1c8608f0bb1c733c7179a2edcfe5a",
"assets/packages/components/lib/assets/map_styles/map_no_labels_light_style.json": "0421eb9c81f372b6af5aaf9dceb84427",
"assets/packages/components/lib/assets/map_styles/map_no_labels_dark_style.json": "f071bbb035eb63b216152c1cfb53fa49",
"assets/packages/components/lib/assets/map_styles/map_dark_style.json": "d34a89cd14a79cfcf9c3397dbcf336ba",
"assets/packages/components/lib/assets/map_styles/map_light_style.json": "30a751a81f3c91b9964cb19f88f0533e",
"assets/packages/components/lib/assets/fonts/SFProDisplay-BoldItalic.otf": "ec0cae4b95509fe27e64b2dff8fef3ef",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Medium.otf": "70830fa4b0f259734f7e52903f3efd59",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Black.otf": "6434254b4301838aed2b0a8428a52dec",
"assets/packages/components/lib/assets/fonts/SFProDisplay-ThinItalic.otf": "e79731360fc0afaf4afffcd45af1d1bf",
"assets/packages/components/lib/assets/fonts/SFProDisplay-SemiboldItalic.otf": "84e3882b6d333559d3eb042a01b06328",
"assets/packages/components/lib/assets/fonts/SFProDisplay-RegularItalic.otf": "4fdd6f9c08dfaf61a984a914a1b6bda4",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Semibold.otf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Heavy.otf": "ab7fbc919a091663d289282da6a49fd3",
"assets/packages/components/lib/assets/fonts/SFProDisplay-HeavyItalic.otf": "7d9b950ef1ade1bb23f58af038783581",
"assets/packages/components/lib/assets/fonts/SFProDisplay-LightItalic.otf": "39952ee7dfea127ddebc5a13ce58e0e4",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Thin.otf": "5a942603c086e4c24355b64a2b160c72",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Bold.otf": "42d79eba974955740a95cc0fb71ca247",
"assets/packages/components/lib/assets/fonts/SFProDisplay-MediumItalic.otf": "557592b0324385955c74fb022ace5972",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Regular.otf": "d09549c1ab4a5947a007561521e45da3",
"assets/packages/components/lib/assets/fonts/SFProDisplay-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/packages/components/lib/assets/fonts/SFProDisplay-BlackItalic.otf": "dbce9bb90e2fe42ec864018ebd5bc096",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-BoldItalic.otf": "ec0cae4b95509fe27e64b2dff8fef3ef",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Medium.otf": "70830fa4b0f259734f7e52903f3efd59",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Black.otf": "6434254b4301838aed2b0a8428a52dec",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-ThinItalic.otf": "e79731360fc0afaf4afffcd45af1d1bf",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-SemiboldItalic.otf": "84e3882b6d333559d3eb042a01b06328",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-RegularItalic.otf": "4fdd6f9c08dfaf61a984a914a1b6bda4",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Semibold.otf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Heavy.otf": "ab7fbc919a091663d289282da6a49fd3",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-HeavyItalic.otf": "7d9b950ef1ade1bb23f58af038783581",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-LightItalic.otf": "39952ee7dfea127ddebc5a13ce58e0e4",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Thin.otf": "5a942603c086e4c24355b64a2b160c72",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Bold.otf": "42d79eba974955740a95cc0fb71ca247",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-MediumItalic.otf": "557592b0324385955c74fb022ace5972",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Regular.otf": "d09549c1ab4a5947a007561521e45da3",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/packages/yellow/lib/assets/fonts/sf_pro_display/SFProDisplay-BlackItalic.otf": "dbce9bb90e2fe42ec864018ebd5bc096",
"assets/shaders/ink_sparkle.frag": "69cbf2ebaa263c76029f31449649f5f2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/music/santaClaus.mp3": "a20d246fd9a9f3fb7c6e11d5b8269dbf",
"assets/assets/music/whiteChristmas.mp3": "81b2e5064ad6ba649bc5bf43584cc241",
"assets/assets/music/coldOutside.mp3": "10e4c725dc4ac70c340debafeb2b2ff9",
"assets/assets/music/letItSnow.mp3": "42ad73e827d49223a8746293a8a70961",
"assets/assets/music/chestnuts.mp3": "4d4c66ec6f2601d14f2c4671b2cdd2db",
"assets/assets/music/silentNight.mp3": "0abefa7a48a98b17a049e1613bfa0b41",
"assets/assets/images/white-jingle-balls.webp": "f8985bb1812f5162baa7d71e7ca87173",
"assets/assets/images/merry-christmas-catholic.png": "4c2f18bb86cd3b0de6ca0ba249e6c80d",
"assets/assets/images/jingle-balls.jpg": "a95cd52aae8723cffdc8d1a1e43ca1db",
"assets/assets/images/santa-lights.jpeg": "ccec83e2bb2284f305860f9123efd530",
"assets/assets/images/christmas-tree.jpeg": "27a9f2c281d512e0c7205230884ba3de",
"assets/assets/images/happy-holidays.png": "2103a9c2d4560459420c2ed030f6986f",
"assets/assets/images/merry-christmas.png": "da37faf3a9d2d1776d2c8604244eabff",
"assets/assets/images/white-stars.jpeg": "737c9ac768f0db5df2efdd38f71b521b",
"assets/assets/images/snow.jpeg": "90eb56289782542357ddafa820df63b4",
"assets/assets/images/merry-christmas-catholic.jpeg": "b7e1d84702fd207505f22408f37350fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
