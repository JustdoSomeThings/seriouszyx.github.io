/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","df80869728db854d90f10c05d8c4daef"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","d2767482377c1f85a90d2b91bec2c85e"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","7153633c4d6ffb26c0ced83e3e8ef2e0"],["/2018/12/25/大数据学习-初识Hadoop.html","ef6dab8bd38514e87c0342cf5b9efaf4"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","5fa9bcc931b5883ae7727e89633a5f90"],["/2019/03/08/使用Forking工作流提交作业.html","91fe48a18c9a68c44f24f4b46e3dc9c6"],["/2019/03/12/Assignment-1-Warmups.html","a4ede03b8b9c1dd95bac7999f1b86f4f"],["/2019/03/17/Assignment-2-Breakout.html","ef50feb1c858f8e5605eb73cf36caa23"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","7185fc7d194005aab8e3a4cf42a903d1"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","12fc0179abc367d1eb01fc55060fc5a1"],["/2019/04/12/Assignment-3-Hangman.html","79c4ec2ff706c9f9df16477663d88784"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","87c92bd4e01c72f63addec7d6652b212"],["/2019/04/20/学习道路上的暂歇思考.html","a007e2bfc2ebcd94e650d64d873847b3"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","bad6ade57232493afde05ca2a9a442dd"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","7e8d7f98841111f208743d99c40d5ca4"],["/about/index.html","d50dc3346947897d7c40a8392dcb2379"],["/archives/2018/11/index.html","307a5fc485a2bcefc0f9a0803c7f9ebe"],["/archives/2018/12/index.html","94bd8c4e4344a87dcd76d33a6240cae7"],["/archives/2018/index.html","6151ee8198bf5f57c37570e3fca96050"],["/archives/2019/01/index.html","cabc3ab645e9b3e34f24c6781c71abfc"],["/archives/2019/03/index.html","67e55ce7a99eae66bed075ed401ee5ea"],["/archives/2019/04/index.html","3bc2fcbef2b6b54a9e1a8403d9d8016c"],["/archives/2019/index.html","515c9393db7e815b3544e7f11c2ea8f9"],["/archives/2019/page/2/index.html","598590bcb49b585dab11ead0bbc71f7a"],["/archives/index.html","94cde639b9b51d43fcef5f5a344967ee"],["/archives/page/2/index.html","abc925d921f95b9e68e5e2e581a17c7c"],["/bundle.js","c2eea3fb9a10461ed60836e65fad25fc"],["/categories/Java-beginner/index.html","c9a2a45367f816891c1fb58bed4516f8"],["/categories/Princeton-Algorithms/index.html","d5b5ab3eeeffc0cfecb0333a46a11038"],["/categories/Vue/index.html","05b09129a2c0f7407b637288f06b79ce"],["/categories/index.html","19502feb3c52ccdd63644c49dbe7274b"],["/categories/人生苦旅/index.html","8e30df6a491e1c6fb8b05578c4ed33cf"],["/categories/折腾/index.html","93f5d0e0a6971e6eacb47c46e94a5ea9"],["/categories/知识总结/index.html","52bcf2ca553c6382875de39a802fe76e"],["/css/main.css","a104c80ac9c68c4730e3fe91c6ee8d3b"],["/gallery/index.html","765abf75a53c3a0f429880b85d34d8a9"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","f13a04a3b99c8055444666acaa77bf33"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","27fc296822a2da6d64988bd81f60637e"],["/page/3/index.html","d24cb58f09d2d58dc2c99c3e27414938"],["/reading/index.html","ea100cb8b2b891e6d752af477414755a"],["/sw-register.js","b400e564cfbdf5722b5667fa4d1e35e6"],["/tags/Algorithms/index.html","ac417890bdcbf268a03c8c73e0dac30d"],["/tags/Hadoop/index.html","78352d616a76fd0a0a9232dd9c190d20"],["/tags/Java/index.html","e8099b391872f7ce24b05c0447977316"],["/tags/JavaScript/index.html","b4023b7bb16d9ea110326222ab18b98a"],["/tags/JavaWeb/index.html","9d495813e25110b82e4fecb668c8ef6f"],["/tags/Java基础/index.html","99c51e7f7a326a704de7695c7a688e9a"],["/tags/Linux/index.html","a38a9214b20169d1cbec8ed36cdced2f"],["/tags/Programming-Assignment/index.html","4819ef8c1c67b6717dc18779d065b943"],["/tags/coursera/index.html","806d6c8e14c911b83b6962b3fe14f090"],["/tags/git/index.html","2ddddfcbf9d10180ba7afa0fb2d97e45"],["/tags/index.html","f043fd48a93e1922646abd92b5a0b958"],["/tags/vue/index.html","a47148a5e7db07b56187a2346c738b7c"],["/tags/个人总结/index.html","2b7a980238a926312bf2e96050505232"],["/tags/前端/index.html","09f10206302666d6d1c28b2bd5e92c80"],["/tags/大学生活/index.html","37de1177a8f0f261048b859403d9feb9"],["/tags/大数据/index.html","539b270a3b1a349f2903d089e7ea704a"],["/tags/总结/index.html","fab6e39eb9ef12aeaf4a9dd4717c7d61"],["/tags/折腾/index.html","a83d66836164266dfeabf1d24f49d8d2"],["/tags/数据结构/index.html","a15583ab63fb4b180e5a74f42e5a5cc4"],["/tags/算法/index.html","d5aa49eb98eb9979af3b04002aaf3167"],["/tags/终端/index.html","ff1522f601259dd030b4a29daef9ad9b"],["/tags/美化/index.html","a08baa434c031eaf073045808e558938"],["/tags/通天塔/index.html","6112a0e3318a709d16d2912050eaf7ed"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
