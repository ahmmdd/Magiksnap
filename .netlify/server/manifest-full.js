export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/backdrops/Baby-Blue-Sequin.webp","images/backdrops/Champagne-Blush-Sequin.webp","images/backdrops/Gold-Sequin.webp","images/backdrops/Iridecent-White-Sequin.webp","images/backdrops/Pink-Sequin.webp","images/backdrops/Red-Sequin.webp","images/backdrops/Rose-Gold-Sequin.webp","images/backdrops/Shiny-Fuchsia-Sequin.webp","images/backdrops/Silver-Sequin.webp","images/backdrops/Sparkly-Black-Sequin.webp","images/magik-snap-icon.svg","images/magik-snap-photo-booth-intro-image.jpg","images/templates/all/001.png","images/templates/all/002.png","images/templates/all/003.png","images/templates/all/004.png","images/templates/all/005.png","images/templates/all/006.png","images/templates/all/007.png","images/templates/all/008.png","images/templates/all/009.png","images/templates/all/010.png","images/templates/all/011.png","images/templates/all/012.png","images/templates/all/013.png","images/templates/all/014.png","images/templates/all/015.png","images/templates/all/016.png","images/templates/all/017.png","images/templates/all/018.png","images/templates/all/019.png","images/templates/all/020.png","images/templates/all/021.png","images/templates/all/022.png","images/templates/all/023.png","images/templates/all/024.png","images/templates/all/025.png","images/templates/all/026.png","images/templates/all/027.png","images/templates/all/028.png","images/templates/all/029.png","images/templates/all/030.png","images/templates/all/031.png","images/templates/all/032.png","images/templates/all/033.png","images/templates/all/034.png","images/templates/all/035.png","images/templates/all/036.png","images/templates/all/037.png","images/templates/all/038.png","images/templates/all/039.png","images/templates/all/040.png","images/templates/all/041.png","images/templates/all/042.png","images/templates/all/043.png","images/templates/all/044.png","images/templates/all/045.png","images/templates/all/046.png","images/templates/all/047.png","images/templates/all/048.png","images/templates/all/049.png","images/templates/all/050.png","images/templates/all/051.png","images/templates/all/052.png","images/templates/all/053.png","images/templates/all/054.png","images/templates/all/055.png","images/templates/all/056.png","images/templates/all/057.png","images/templates/all/058.png","images/templates/all/059.png","images/templates/all/060.png","images/templates/all/061.png","images/templates/all/062.png","images/templates/all/063.png","images/templates/all/064.png","images/templates/all/065.png","images/templates/all/066.png","images/templates/all/067.png","images/templates/all/068.png","images/templates/all/069.png","images/templates/all/070.png","images/templates/all/071.png","images/templates/all/072.png","images/templates/all/073.png","images/templates/all/074.png","images/templates/all/075.png","images/templates/all/076.png","images/templates/all/077.png","images/templates/all/078.png","images/templates/all/079.png","images/templates/all/080.png","images/templates/all/081.png","images/templates/all/082.png","images/templates/all/083.png","images/templates/all/084.png","images/templates/all/085.png","images/templates/all/086.png","images/templates/all/087.png","images/templates/all/088.png","images/templates/all/089.png","images/templates/all/090.png","images/templates/all/091.png","images/templates/all/092.png","images/templates/all/093.png","images/templates/all/094.png","images/templates/all/095.png","images/templates/all/096.png","images/templates/all/097.png","images/templates/all/098.png","images/templates/all/099.png","images/templates/all/100.png","images/templates/all/101.png","images/templates/all/102.png","images/templates/all/103.png","images/templates/all/104.png","images/templates/all/105.png","images/templates/all/106.png","images/templates/all/107.png","images/templates/all/108.png","images/templates/all/109.png","images/templates/all/110.png","images/templates/all/111.png","images/templates/all/112.png","images/templates/all/113.png","images/templates/all/114.png","images/templates/all/115.png","images/templates/all/116.png","images/templates/all/117.png","images/templates/all/118.png","images/templates/all/119.png","images/templates/all/120.png","images/templates/all/121.png","images/templates/all/122.png","images/templates/all/123.png","images/templates/all/124.png","images/templates/all/125.png","images/templates/all/126.png","images/templates/all/127.png","images/templates/all/128.png","images/templates/all/129.png","images/templates/all/130.png","images/templates/all/131.png","images/templates/all/132.png","images/templates/all/133.png","images/templates/all/134.png","images/templates/all/135.png","images/templates/all/136.png","images/templates/all/137.png","images/templates/all/138.png","images/templates/all/139.png","images/templates/all/140.png","images/templates/all/141.png","images/templates/all/142.png","images/templates/all/143.png","images/templates/all/144.png","images/templates/all/145.png","images/templates/all/146.png","images/templates/all/147.png","images/templates/all/148.png","images/templates/all/149.png","images/templates/all/150.png","images/templates/all/151.png","images/templates/all/152.png","images/templates/all/153.png","images/templates/all/154.png","images/templates/all/156.png","images/templates/all/157.png","images/templates/all/158.png","images/templates/all/159.png","images/templates/all/160.png","images/templates/all/161.png","images/templates/all/162.png","images/templates/all/163.png","images/templates/all/164.png","images/templates/all/165.png","images/templates/all/166.png","images/templates/all/167.png","images/templates/all/168.png","images/templates/all/169.png","images/templates/all/170.png","images/templates/all/171.png","images/templates/all/172.png","images/templates/all/173.png","images/templates/all/174.png","images/templates/all/175.png","images/templates/all/176.png","images/templates/all/177.png","images/templates/all/178.png","images/templates/all/179.png","images/templates/all/180.png","images/templates/all/181.png","images/templates/all/182.png","images/templates/all/183.png","images/templates/all/184.png","images/templates/all/185.png","images/templates/all/186.png","images/templates/all/187.png","images/templates/all/188.png","images/templates/all/189.png","images/templates/all/190.png","images/templates/all/191.png","images/templates/all/192.png","images/templates/all/193.png","images/templates/all/194.png","images/templates/all/195.png","images/templates/all/196.png","images/templates/all/197.png","images/templates/all/198.png","images/templates/all/199.png","images/templates/all/200.png","images/templates/all/201.png","images/templates/all/202.png","images/templates/all/203.png","images/templates/all/204.png","images/templates/all/205.png","images/templates/all/206.png","images/templates/all/207.png","images/templates/all/208.png","images/templates/all/209.png","images/templates/all/210.png","images/templates/all/211.png","images/templates/all/212.png","images/templates/all/213.png","images/templates/all/214.png","images/templates/all/215.png","images/templates/all/217.png","images/templates/all/218.png","images/templates/all/219.png","images/templates/all/220.png","images/templates/all/221.png","images/templates/all/222.png","images/templates/all/223.png","images/templates/all/224.png","images/templates/all/225.png","images/templates/all/226.png","images/templates/all/227.png","images/templates/all/228.png","images/templates/all/229.png","images/templates/all/230.png","images/templates/all/231.png","images/templates/all/232.png","images/templates/all/233.png","images/templates/all/234.png","images/templates/all/235.png","images/templates/all/236.png","images/templates/all/237.png","images/templates/all/238.png","images/templates/all/239.png","images/templates/all/240.png","images/templates/all/241.png","images/templates/all/242.png","images/templates/all/243.png","images/templates/all/244.png","images/templates/all/245.png","images/templates/all/246.png","images/templates/all/247.png","images/templates/all/248.png","images/templates/all/249.png","images/templates/all/250.png","images/templates/all/251.png","images/templates/all/252.png","images/templates/all/253.png","images/templates/all/254.png","images/templates/all/255.png","images/templates/all/256.png","images/templates/all/257.png","images/templates/all/258.png","images/templates/all/259.png","images/templates/all/260.png","images/templates/all/261.png","images/templates/all/262.png","images/templates/all/263.png","images/templates/all/264.png","images/templates/all/265.png","images/templates/all/266.png","images/templates/all/267.png","images/templates/all/268.png","images/templates/all/269.png","images/templates/all/270.png","images/templates/all/271.png","images/templates/all/272.png","images/templates/all/273.png","images/templates/all/274.png","images/templates/all/275.png","images/templates/all/276.png","images/templates/all/277.png","images/templates/all/278.png","images/templates/all/279.png","images/templates/all/280.png","images/templates/all/281.png","images/templates/all/282.png","images/templates/all/283.png","images/templates/all/284.png","images/templates/all/285.png","images/templates/all/286.png","images/templates/all/287.png","images/templates/all/288.png","images/templates/all/289.png","images/templates/all/290.png","images/templates/all/291.png","images/templates/all/292.png","images/templates/all/293.png","images/templates/all/294.png","images/templates/all/295.png","images/templates/all/296.png","images/templates/all/297.png","images/templates/all/298.png","images/templates/all/299.png","images/templates/all/300.png","images/templates/all/301.png","images/templates/all/302.png","images/templates/all/303.png","images/templates/all/304.png","images/templates/all/305.png","images/templates/all/306.png","images/templates/all/307.png","images/templates/all/308.png","images/templates/all/309.png","images/templates/all/310.png","images/templates/all/311.png","images/templates/all/312.png","images/templates/all/313.png","images/templates/all/314.png","images/templates/all/315.png","images/templates/all/316.png","images/templates/all/317.png","images/templates/all/318.png","images/templates/all/319.png","images/templates/all/320.png","images/templates/all/321.png","images/templates/all/322.png","images/templates/all/323.png","images/templates/all/324.png","images/templates/all/325.png","images/templates/all/326.png","images/templates/all/327.png","images/templates/all/328.png","images/templates/all/329.png","images/templates/all/330.png","images/templates/all/331.png","images/templates/all/332.png","images/templates/all/333.png","images/templates/all/334.png","images/templates/all/335.png","images/templates/all/336.png","images/templates/all/337.png","images/templates/all/338.png","images/templates/all/339.png","images/templates/all/340.png","images/templates/all/341.png","images/templates/all/342.png","images/templates/all/343.png","images/templates/all/344.png","images/templates/all/345.png","images/templates/all/346.png","images/templates/all/347.png","images/templates/all/348.png","images/templates/all/349.png","images/templates/all/350.png","images/templates/all/351.png","images/templates/all/352.png","images/templates/all/353.png","images/templates/all/354.png","images/templates/all/355.png","images/templates/all/356.png","images/templates/all/357.png","images/templates/all/358.png","images/templates/all/359.png","images/templates/all/360.png","images/templates/all/361.png","images/templates/all/362.png","images/templates/all/363.png","images/templates/all/364.png","images/templates/featured/01.webp","images/templates/featured/02.webp","images/templates/featured/03.webp","images/templates/featured/04.webp","images/templates/featured/05.webp","images/templates/featured/06.webp","images/templates/featured/07.webp","images/templates/featured/08.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Ao8Z3nyy.js","app":"_app/immutable/entry/app.OyQRoJdg.js","imports":["_app/immutable/entry/start.Ao8Z3nyy.js","_app/immutable/chunks/entry.D_xFNZ0u.js","_app/immutable/chunks/scheduler.CjnXJ6Ir.js","_app/immutable/entry/app.OyQRoJdg.js","_app/immutable/chunks/scheduler.CjnXJ6Ir.js","_app/immutable/chunks/index.BaHuaqhG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/backdrops",
				pattern: /^\/backdrops\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/book-an-event",
				pattern: /^\/book-an-event\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/guest-book",
				pattern: /^\/guest-book\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/templates",
				pattern: /^\/templates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/templates/postcard",
				pattern: /^\/templates\/postcard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/templates/strip",
				pattern: /^\/templates\/strip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
