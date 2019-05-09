/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","6e15ce7c5a7ba6cd6cd23a8d4a64208f"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","9fd86ad03e20f923009ac34ea69f5dc1"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","6f84b7ba0add589f488af06664ae9d92"],["/2018/12/25/大数据学习-初识Hadoop.html","5b34fedd5c2697b82ac699714373333d"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","17733afd895b0901e2f50f84478c4623"],["/2019/03/08/使用Forking工作流提交作业.html","853e002ecc6a0365e3980010b3c0d291"],["/2019/03/12/Assignment-1-Warmups.html","0e559321e2541f7806c89bbf8dfd1d7f"],["/2019/03/17/Assignment-2-Breakout.html","2ea7775436f7d45235f31fdd016354af"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","257edbf6867c6b57199d49b53648f21d"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","a3eaabfccaad1374bdabaf5cfe43759c"],["/2019/04/12/Assignment-3-Hangman.html","b0729d8422810d6abb1b18ab1d87e2f1"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","cfc1d03914c290353eb86fbd7085f1e3"],["/2019/04/20/学习道路上的暂歇思考.html","0cf15acc09385bc7d0992cad545c4bea"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","c9233d6864d9c7319de4aa82b4212291"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","aee14f209de6a64c17c6a83611d31734"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","036dde0f165e28b319ee744013a7c966"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","cb5871fccc1e377afc0b3b3032e23168"],["/about/index.html","bc6ca9abfdc076438e2d5d3319ea89ba"],["/archives/2018/11/index.html","c10d4970fdc5247159c4ec3023445c04"],["/archives/2018/12/index.html","aedaeab4aa74e6ad852715999216fe21"],["/archives/2018/index.html","2b517213fd24764c103471ae621c794a"],["/archives/2019/01/index.html","52dbc6ab575409de1e5865f5e2f2d76a"],["/archives/2019/03/index.html","505ec10ab473e63423a69200d6dfaaad"],["/archives/2019/04/index.html","3a94d11524615e2d823c7b13302d96dc"],["/archives/2019/05/index.html","d5f4bb9ada06035badfff6b4fe37a8c1"],["/archives/2019/index.html","f829cbdd21c595dfb0f646a46a68fd15"],["/archives/2019/page/2/index.html","88513250604067363750f5d088d431c8"],["/archives/index.html","34b30b26c0d890aa259648f4161624f9"],["/archives/page/2/index.html","0c01a03f6b3a9cad6ffbfb1ffe867276"],["/categories/Java-beginner/index.html","4dd186606826e67ca735283f043ea854"],["/categories/Princeton-Algorithms/index.html","d121aa8f7b6d35f4237ab587cf88e833"],["/categories/Vue/index.html","32ab968e19f398e527908522c3d230b6"],["/categories/index.html","209d31eaa219f990d899843180316bce"],["/categories/人生苦旅/index.html","44e2f9ff272ff70a1da2ae87943e264e"],["/categories/折腾/index.html","78d6bc8167e1c21dc5425bee725c6a7e"],["/categories/知识总结/index.html","4e8a7d3f79d3c5a4cea45fa2e3fe2f10"],["/css/main.css","9a38ad7d6de427b2139ea71e304af531"],["/gallery/index.html","ea4c0509de0030977a6083c35721f709"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","6bf121bd755f2cad89fa7671c8ff3fbb"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1ce5a76643d8acf78953b8e10ce49a27"],["/page/3/index.html","3428b6c01fc8875478b2c3999168a85c"],["/page/4/index.html","a13d21b5b832e29ad385ba4c5853f6b2"],["/reading/index.html","0335ce600d4c19e0ef8184f46a92efd6"],["/sw-register.js","a5f95c57283c3874f7b5b5396608a38f"],["/tags/Algorithms/index.html","232f6a066672706993cd62d7ac2c877e"],["/tags/Hadoop/index.html","172953859ebc5be236f7a1319886639a"],["/tags/Java/index.html","7bfe7c911c7b22d5f058f0e013c79716"],["/tags/JavaScript/index.html","82dc4926a7af540e110aac1e50055068"],["/tags/JavaWeb/index.html","b172dc5d6969a644f62e948402b21044"],["/tags/Java基础/index.html","0f770a33696bc3ae170e05c5f1933d75"],["/tags/Linux/index.html","cc39010a62136fa5a541a59dc9d004b2"],["/tags/Programming-Assignment/index.html","56a1a95335af95660dd32046d1d5a4a1"],["/tags/coursera/index.html","86640aaebe54809282d3546b24886e96"],["/tags/git/index.html","51e22bb89d1d15b6eed5df26ef9d6d85"],["/tags/index.html","8f754a4ade20be98de6b09701bdd8261"],["/tags/vue/index.html","e7271992a52d26754f3342c2afefaf72"],["/tags/个人总结/index.html","810cc4adeb0e7c5c18a27e81e0b05bc4"],["/tags/前端/index.html","eff29548e3eab0a0dcc252aa59edda61"],["/tags/大学生活/index.html","67bc0faa561b725411b58e7256c9f6a9"],["/tags/大数据/index.html","71db738d48d262d143f4575e2eacc9e7"],["/tags/总结/index.html","871be0b4785a253435a3578a47208af6"],["/tags/折腾/index.html","5a1929acc568c7c7ee93138707dfbce4"],["/tags/数据结构/index.html","ddb5e2bea58d720d791974df1575c055"],["/tags/算法/index.html","267e7f6e279481978ef562920a291c64"],["/tags/终端/index.html","81376bc2d6a6053508221a576a379b50"],["/tags/美化/index.html","3870e36db3a6a1e45345f77fbea726a2"],["/tags/通天塔/index.html","8a0d8a58002d041af969ef8d90818a83"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
