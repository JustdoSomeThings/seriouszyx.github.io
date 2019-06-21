/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","8bdae6b732f1accedfbae2d811db07a6"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","d170b890c895a3ec7f719a9f5d402881"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","95ebc66f09173eb93d69834b61db31a3"],["/2018/12/25/大数据学习-初识Hadoop.html","c8b58cd1f6e321a1e1b73ce945e5efcd"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","cefc45aabfe63b8a61498f1fb51c4283"],["/2019/03/08/使用Forking工作流提交作业.html","63a0f238fb4c2c1f9b8df15a04bae848"],["/2019/03/12/Assignment-1-Warmups.html","9cded5869a289ae649f31e470f723516"],["/2019/03/17/Assignment-2-Breakout.html","a3d8e95f3ef61933e938c1e34f73cde7"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","43f4c5c06cb96503c2a882d200afb1d1"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","b1db1d45f0604bca98df6fc51122013b"],["/2019/04/12/Assignment-3-Hangman.html","d7b7b020adbe71418dda9d43f89fe263"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","6810afe0fe81c2305d550a351e0b163b"],["/2019/04/20/学习道路上的暂歇思考.html","0eca030d965b28938f1eef59e25d5884"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","3e97713979be206dea3243a40cf19695"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","de7faf7ef5f25e5f706bde6457c2f8b3"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","851d6d9d84eb32e5ab9a2c005a77add2"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","313457d11a9fb7285c5e13638d8eafe4"],["/2019/05/10/Commit-message-guide.html","3d2cbeaf936dc782301e0a4c4d870502"],["/2019/05/19/《图解HTTP》读书笔记.html","07039d8c86f924b3a70cfd04add0d6dc"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","d6adccdb8290bf94035d7263fd17352b"],["/2019/06/19/计算机组成原理题目总结.html","1ca81c1ccade4a6d75b3984a281aa6b0"],["/about/index.html","61d5db029fe9ae032332e98b94d02416"],["/archives/2018/11/index.html","bce1536d2fc97247f6af456210137589"],["/archives/2018/12/index.html","e7b03076eaee1288e295304909b5c04f"],["/archives/2018/index.html","09594617d19585e8b6c2dcbd2e4a6fc0"],["/archives/2019/01/index.html","30c147ddab0e1d9ad7dd1d1ca260137c"],["/archives/2019/03/index.html","abd6ca633bbef5884452539d55d93f28"],["/archives/2019/04/index.html","2f6391e68e8dda76071ea83f0ad3eb56"],["/archives/2019/05/index.html","5088c72610335a6269bde668a99e257d"],["/archives/2019/06/index.html","373e1fde9ccff2b2a568a25a03acf046"],["/archives/2019/index.html","863b2039a2b5ae2b31ddcc1700a01fc6"],["/archives/2019/page/2/index.html","3e091f38c20f5cca03d32a71ddd3d207"],["/archives/index.html","07891fe1f6a6584ea43ff0d7d63d4df9"],["/archives/page/2/index.html","e9dc21c0784a95ac327bfffea491f569"],["/archives/page/3/index.html","674fb5129bfd5123edf099ceb64b2912"],["/categories/Java-beginner/index.html","7794ad87858ff52d06c02e361a3df901"],["/categories/Princeton-Algorithms/index.html","6ccd7806d31c7c21eed031add22f57d9"],["/categories/Programming-Languages/index.html","2c13df45575f136bff82a60a5cf78fed"],["/categories/Vue/index.html","ef710fd03db3ddce3858a33331f2e04e"],["/categories/index.html","349534d903d0724e51b9b577bf050489"],["/categories/人生苦旅/index.html","cb9caa3f1d0f3becf5b7ef80408a7af2"],["/categories/折腾/index.html","c4cb63ed5fbd53cb150c5f966ac25c17"],["/categories/知识总结/index.html","11077365eb4913de477517f7024100c5"],["/categories/破解/index.html","15a63733a48fd2c436a457dcacab78ef"],["/categories/翻译/index.html","c709e5c407f89154dc870d6b127ad21e"],["/categories/读书笔记/index.html","a56a3f827c4a19a198d9ad67c1416511"],["/categories/课程总结/index.html","82e9938b9ac8ec336058a1a749b407d9"],["/css/main.css","5fa00fbfeab0e4a2c3cd66f1072da682"],["/gallery/index.html","327b88d997a636ddf673438690e6776c"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","f5ba44cf1890a0f68844ed77c3048b60"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.min.js","c4cea16477fcf69e7cd2d5aeab5c0ea3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/three/README.html","b905f378495443526690effd9166c635"],["/lib/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["/lib/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["/lib/three/gulpfile.js","3023520dd67090a4541b144421326827"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4edc5ff89fab1fff9d2843487068fca0"],["/page/3/index.html","9c6358723c9342b142179ccfbe433d2a"],["/page/4/index.html","6c6371d8dc2ff30884f7e0ea3ba5d55b"],["/page/5/index.html","0092250314dce5834f677f7955fceb9b"],["/reading/index.html","1ce11f829408c04e12fa723bd822a59c"],["/sw-register.js","8d23205ad9577c247115bb1fe05bf055"],["/tags/Algorithms/index.html","e4c92ffc6e856e4cb94a420c585290a0"],["/tags/Emacs/index.html","5104e7dbd880b4b042f9b8d4be6bbb59"],["/tags/HTTP/index.html","0d73dda3286481e419a5165fff4f3359"],["/tags/Hadoop/index.html","1b42ac060a54a15514377d7f57245b8a"],["/tags/Java/index.html","62bd17690d69b51c2ff6eb3c84777a17"],["/tags/JavaScript/index.html","eaad5d31a4fcd8db7e69ef75624e45b9"],["/tags/JavaWeb/index.html","c27a2a8ce0f055724a66e223199364a4"],["/tags/Java基础/index.html","8fd71a6ef27b57732d5cf276b50d4bc4"],["/tags/Linux/index.html","34b96a67332b1040689ad7236d2b2096"],["/tags/Programming-Assignment/index.html","94e06cf663431c014566ba9c3a8970df"],["/tags/SML/index.html","6743a5766d9426ed98b96f6a1af21386"],["/tags/coursera/index.html","6edae27aa78cadf1fc4ad274fd90f7a0"],["/tags/git/index.html","550ff2c8588ce5d171624f35c5b08671"],["/tags/index.html","17a798999709c4134b3cdd7f133a4135"],["/tags/vue/index.html","336a5cdd50a2559fc73da697cd8ebf2e"],["/tags/个人总结/index.html","ea07346e287a3dc8cb61cd4119f4f435"],["/tags/前端/index.html","861be672efed89abde1a1f5eef8e57df"],["/tags/大学生活/index.html","ad277ce830fbd4e853a6e1c15b7f25ac"],["/tags/大数据/index.html","e03445b1f7d9d9ad685a4bb9463809de"],["/tags/总结/index.html","772a6e16a526b52db0d9c0c7ac878488"],["/tags/抓包/index.html","77a51845053e0f115c8cb9b9a877ca61"],["/tags/折腾/index.html","c29e02ac6ec945393b6f4430a0aeffdb"],["/tags/数据结构/index.html","50001b12c5beda2530145c3c0fed8fe6"],["/tags/算法/index.html","7ce84d68a3f87e4c4f2a8673f7319a96"],["/tags/终端/index.html","27b892a715c92d9384d5b449957a7eaf"],["/tags/美化/index.html","d8e4cd64c7c6a93875ed43a111e18ace"],["/tags/计算机组成原理/index.html","1bcc9b8bbf3d92fbe5b916eaeccb22b1"],["/tags/逆向/index.html","7b68f69d34473cd087c0675790227802"],["/tags/通天塔/index.html","7c45f20558d680a93bf663346b944cfa"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
