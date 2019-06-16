/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","bfec2884bd24f62c09782cf7f430c0c0"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","117741c6664a329e167ba17526a3447f"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","5c2d01854993b6c680a8691624e382f1"],["/2018/12/25/大数据学习-初识Hadoop.html","3f551b43807d8b27854707a22036b04e"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","f2d1bb3a020c4ec47c894438ace7d6e1"],["/2019/03/08/使用Forking工作流提交作业.html","f0c3aad6f415d53f66248e8cb5e719fb"],["/2019/03/12/Assignment-1-Warmups.html","126691e821da9e7172cf9e8d0f91b97b"],["/2019/03/17/Assignment-2-Breakout.html","07db6030c19a0476adc55a91b2a35a74"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","04d6cc425974e7a8a645f0298ef1d467"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","77f653b636613f47d694fc0a0a522d3c"],["/2019/04/12/Assignment-3-Hangman.html","502e30513c04f6edd2fd1f33f3b8325c"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","166ba340fd9e57f914fccab776d08ae4"],["/2019/04/20/学习道路上的暂歇思考.html","cccb07641ef296d1558f7d224e8ef9c9"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","71cf5b340198f92c4ec18f71d521fdc4"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","ec487c249f7b1af07a1b94a991db537c"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","5e2b3d7433e56c7b0b77ef8495348b48"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","e838bed85a55d2e15cfdbfec4a323ebb"],["/2019/05/10/Commit-message-guide.html","d8f251a27572e6a157980b3febebfb7f"],["/2019/05/19/《图解HTTP》读书笔记.html","b844ae30069d06516f91aa80e61b8353"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","d1ad5d1675702d8737f9fead4ea1366e"],["/about/index.html","0a4ab1507f73d776e6b3b237b5af7781"],["/archives/2018/11/index.html","2f749c9d044ee5753d150e13fac83f18"],["/archives/2018/12/index.html","14660b01e0e7a0e5145b99ab9af3a33c"],["/archives/2018/index.html","8ac69913d729744ac9f5c6cfddbe8dc1"],["/archives/2019/01/index.html","ebed626879353c7fb2f43ef025ec5e83"],["/archives/2019/03/index.html","db870c04bd2644036235723af780d354"],["/archives/2019/04/index.html","d2caf495a9ed104b6edf9fd73afada0d"],["/archives/2019/05/index.html","355ca1bab5accd769a849529eebf764f"],["/archives/2019/06/index.html","f9b03092d20d62a7bae23acb5d69c4fd"],["/archives/2019/index.html","75e4dfabd109e84617260b156f8fe462"],["/archives/2019/page/2/index.html","0ec31f101cd13ebfe8bdc0ae82906cb5"],["/archives/index.html","342c0d2abbe4295046fec08ea8fa5346"],["/archives/page/2/index.html","d4ec2c54a49b62b71c422e3e504f1b7f"],["/categories/Java-beginner/index.html","e4a429ce44400dd07b3d455e11152783"],["/categories/Princeton-Algorithms/index.html","ec544207aee0ec5ac4d766afc62bd712"],["/categories/Programming-Languages/index.html","72576c97463e2b3a352c55a820d36b67"],["/categories/Vue/index.html","bb7b39bfc071edd57d8d4d5a878c325e"],["/categories/index.html","045739cca14f5591f4a1eb030b9db2fe"],["/categories/人生苦旅/index.html","352369633b028a0ab21d0e6effb6424c"],["/categories/折腾/index.html","98f74aa136b5206047d98e27e5dc06e6"],["/categories/知识总结/index.html","8249b48bb81a98603e8a3ab01589ea15"],["/categories/破解/index.html","1598257ce8119650a4cf32b64d67fd73"],["/categories/翻译/index.html","05605888247509ac46678c2dcca82124"],["/categories/读书笔记/index.html","ae25c4ed09ea9d59dd3d7dcd98248d7c"],["/css/main.css","f3e3726dfa72b0402416a72d36c2f3c2"],["/gallery/index.html","2afd33ee539beee1cbe6bcb141559b74"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","fab417010bf3ba0e667aad1044c68010"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.min.js","c4cea16477fcf69e7cd2d5aeab5c0ea3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/three/README.html","b905f378495443526690effd9166c635"],["/lib/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["/lib/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["/lib/three/gulpfile.js","3023520dd67090a4541b144421326827"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","65ca170d5b134329ea7ac244436144c5"],["/page/3/index.html","c9c8868626d194f0c77907ad42b49c36"],["/page/4/index.html","0bbd619c092e5472a6f2113686b1a34b"],["/reading/index.html","f041654360e854debecc3d1a5d6dd87a"],["/sw-register.js","d1e0e7365e1200125a2fb742c2d731a9"],["/tags/Algorithms/index.html","8c8321276971f791146952230187ce84"],["/tags/Emacs/index.html","34b087ae1d1f4d5973f24ebfdef2f2c8"],["/tags/HTTP/index.html","72e68fe30af824adf3c61cd65c4637df"],["/tags/Hadoop/index.html","a3bfefc830a10349f3f2608277c720f0"],["/tags/Java/index.html","b76ea1251fdcb70a3eb4f0c17af4c289"],["/tags/JavaScript/index.html","15c51b40e057fe20297b3cb646f9a693"],["/tags/JavaWeb/index.html","64b8d6111df988f6bda4ccdb58dbac0c"],["/tags/Java基础/index.html","c9e7c59510cb6e5f4cc77929b356a6e6"],["/tags/Linux/index.html","a6250f802f07cc22f0bc3cfc313f3c77"],["/tags/Programming-Assignment/index.html","e279616da7f593b30e6b0809dbb7265a"],["/tags/SML/index.html","504c3488b61de62011f1c7091f470ad8"],["/tags/coursera/index.html","9f3694707d15780a6c66974f0412affd"],["/tags/git/index.html","cb6c07ffde2a656dd04ce33a45e4dc69"],["/tags/index.html","db3ed66d0f8b19bfeba29503fd0cb184"],["/tags/vue/index.html","d58e4654a73e738e346197c988cc0248"],["/tags/个人总结/index.html","46788bba234b2bdf1f7b781e13d302d3"],["/tags/前端/index.html","d8d78f1649a7bf6434eb021fac848dc5"],["/tags/大学生活/index.html","487b93d46c65294c53a1f1ccf8c8f192"],["/tags/大数据/index.html","3aa7f2adeac43b3f4b790d4b721a2fa2"],["/tags/总结/index.html","11868aa589c28bcba2fc3ea81f2540ff"],["/tags/抓包/index.html","c1058c5c9f02d5fbec8a3e77082338ad"],["/tags/折腾/index.html","9416ae95d61d9e8d41fefb33dcfc252b"],["/tags/数据结构/index.html","c0f1d9f9069ce01dfc94da031e664c5a"],["/tags/算法/index.html","f197f2d82296a9a98b589e10102222ab"],["/tags/终端/index.html","408b160e57833f110249bc57d8ba448b"],["/tags/美化/index.html","cc152b9c2050fd4ce1318e021a36497f"],["/tags/逆向/index.html","32ddd1fca8ab7679e8cefeb36abcbd43"],["/tags/通天塔/index.html","5fc9f76296bf5176772956c0e8656c64"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
