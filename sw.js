/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","10a96a250b764bb293a008b44471068f"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","e9f44c4579e9c702034b5596a93c80a6"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","bb4171ed2c25d88e1094130b18e989de"],["/2018/12/25/大数据学习-初识Hadoop.html","fda4461a466895af9b56fad74fd4ef9d"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","d426b1b905fd037fd916c9f6197a7093"],["/2019/03/08/使用Forking工作流提交作业.html","4766c1056ea47e304371e09d6cf9717b"],["/2019/03/12/Assignment-1-Warmups.html","34883f2afdd91a763b661d442a993572"],["/2019/03/17/Assignment-2-Breakout.html","6dc1e30f3654b4b61169db41c8ef1257"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","9490cfc9ffc3de2bd06341c27ad097df"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","72e39de4f08c56fe570738e5e82115fc"],["/2019/04/12/Assignment-3-Hangman.html","6d4392164add082d37b1112d2cc12a6e"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","87f804285f7b71297bb9fdf808258454"],["/2019/04/20/学习道路上的暂歇思考.html","877644727a5a159572619e1f35ebd535"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","4570e9ff9b27d628bb94a9de9a207ed8"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","42422da99fb47169b63aa6edf524357e"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","a2054bfaf65fe9c2dbbbd10d1a0f16e4"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","85fb6962f785c896f6461d43fd38b1d7"],["/2019/05/10/Commit-message-guide.html","289fd13a1764a6b527409dbc761cddde"],["/2019/05/19/《图解HTTP》读书笔记.html","e3cb3271502a3d463b6206b742cb94f4"],["/2019/06/16/微信小程序《消灭病毒》抓包修改数据.html","babccbb7d8a30ab99d9734b175896e2e"],["/2019/06/19/计算机组成原理题目总结.html","2ccc833c02afa82dd6efb84c383cb149"],["/about/index.html","f98882ffc1611e546b51bdc00dc094d4"],["/archives/2018/11/index.html","b4e74ac9766abaf19d4292b3ef7a3d5e"],["/archives/2018/12/index.html","565f9817b9473510f9f5c2dbbb83ae27"],["/archives/2018/index.html","d97c1ab574d7518ebb558a57d938435b"],["/archives/2019/01/index.html","87c8879701b29956b8eedc3dd43b0470"],["/archives/2019/03/index.html","4555ce2bb1419d084fa460895840f0f5"],["/archives/2019/04/index.html","d10da51b31046c3fde6fd8965d1deec3"],["/archives/2019/05/index.html","8141358f0f9fb5cd374da8c79df933f9"],["/archives/2019/06/index.html","17cbd0435ff8cdb7651e6fcbf2172211"],["/archives/2019/index.html","b306c3d05aadb0dff4cfc7d839dd590f"],["/archives/2019/page/2/index.html","971e3e267dccbbfec637770c0165c12e"],["/archives/index.html","23dda8e52d5c9f50d7df21237cd75dc1"],["/archives/page/2/index.html","d96e80549acc1a41ea462c1360ecbcf3"],["/archives/page/3/index.html","e35b863fd258c7acb1dbba91bd23dd62"],["/categories/Java-beginner/index.html","4c630d6d42e0cc7ac46abc9d781dc25f"],["/categories/Princeton-Algorithms/index.html","89d8387a739f4aa9d85cb6f9c1a0aaa9"],["/categories/Programming-Languages/index.html","3df52f2244dad192a6faba25d93fecd5"],["/categories/Vue/index.html","68175e7536270c6af40b0ee57a582aaf"],["/categories/index.html","baaa787b143d616e6fef0b79124d0149"],["/categories/人生苦旅/index.html","0bd4d59a76330946aeffb801becd9357"],["/categories/折腾/index.html","3e82955cc3c8252c1bea503c2687a26f"],["/categories/知识总结/index.html","6e4ff73478e883a50aafe4436cfbc52d"],["/categories/破解/index.html","b3907727165b821abe27702e5191b178"],["/categories/翻译/index.html","ce5235344031ee87d5a197faa0f7c042"],["/categories/读书笔记/index.html","139405b299021bbfc594168e58c23def"],["/categories/课程总结/index.html","f90b4350c30526068eebe58ca9cd266c"],["/css/main.css","5fa00fbfeab0e4a2c3cd66f1072da682"],["/gallery/index.html","ec153a0f3d87f2e226d8d6fd55985f16"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","2a5e38e0446add7152cbd7b3f64673a1"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.min.js","c4cea16477fcf69e7cd2d5aeab5c0ea3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/three/README.html","b905f378495443526690effd9166c635"],["/lib/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["/lib/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["/lib/three/gulpfile.js","3023520dd67090a4541b144421326827"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","aa9f21a631d1679f4ab0baf86986db64"],["/page/3/index.html","eecd87541b61336f63eb78d0a17088a1"],["/page/4/index.html","ef21c4d2037e5ba02444a9fd6d13687c"],["/page/5/index.html","1bfb4e096836e36efaeee73e9ae000c4"],["/reading/index.html","c178ea7b7bc3919ae82262b4218fa83b"],["/sw-register.js","671820823f81164a46ee8ac49c7db1f4"],["/tags/Algorithms/index.html","9f709f31ba7f24411a34aba32ded8654"],["/tags/Emacs/index.html","0e672b118419cfc7fa1b4b02daa1141b"],["/tags/HTTP/index.html","d8a2dd044db1369140e655fd770f98b7"],["/tags/Hadoop/index.html","5b3a7839b1931707c062b05abc88ea96"],["/tags/Java/index.html","6d7cb2ac9960bcdcd84d2cc836729cd4"],["/tags/JavaScript/index.html","ece6622ef47594089bcad9e0f969a9c4"],["/tags/JavaWeb/index.html","ce7301f414d466106cda10fb1d0c52d0"],["/tags/Java基础/index.html","be1ee7bcd04e1e6e0d9a97e31b0475f3"],["/tags/Linux/index.html","3928bd8cd39a8e2b28586c25e3c8ccf5"],["/tags/Programming-Assignment/index.html","7da955059bf26d4bb2d669f25563d1aa"],["/tags/SML/index.html","dfda99dba04df9c55d239990451f01e4"],["/tags/coursera/index.html","d17ef5b197815261f69aab743809f884"],["/tags/git/index.html","db54b97e37a807ff5e0d95fd9dc5596c"],["/tags/index.html","bc102429ea40ad0c4160ae8a8fd42298"],["/tags/vue/index.html","4c3a6e224b23dd88fe2ae59c7e34d7ba"],["/tags/个人总结/index.html","309025d97eb69a9477ee95e0ea6939e6"],["/tags/前端/index.html","961aa54eae42343acfd1c4daeb0e7f18"],["/tags/大学生活/index.html","102045a41919915b56df85147aadd56e"],["/tags/大数据/index.html","94cfeb4b5ea401c3b934cad8750cd15a"],["/tags/总结/index.html","111714da74c4b13b2d6e56ad210dcfa5"],["/tags/抓包/index.html","0b0e6b7a67b6e4586af683b6caf88279"],["/tags/折腾/index.html","010547e27d4188889373b8a519222c09"],["/tags/数据结构/index.html","10936e3cc3584e32d88ff1d6a82ccdcd"],["/tags/算法/index.html","51d6e5ac0334bd431eacd79d7933c628"],["/tags/终端/index.html","47cdf16dd2fa2a244ecb0a8829c6a0ee"],["/tags/美化/index.html","41add4622f50fb4d33dd765dd1500d4e"],["/tags/计算机组成原理/index.html","eeb992206c6fe74441c2a25299625d49"],["/tags/逆向/index.html","5035d511064a635478404ecbf7a10d6e"],["/tags/通天塔/index.html","fa03a212e1f77caa12a5a8b08a651189"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
