/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","990d16c383e145474a8f1f8ec37fd782"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","f1f42a9259ae41fb6a25a587dfd3f75e"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","17d69edece8e811d0d98bd02aead4307"],["/2018/12/25/大数据学习-初识Hadoop.html","98cb28edf914d1a09b75adb0384908f3"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","cdc366d89976610dced5f5392fc5b454"],["/2019/03/08/使用Forking工作流提交作业.html","492a01c89bed4f849d015227406895aa"],["/2019/03/12/Assignment-1-Warmups.html","65ae6fc9c6ddac24f3aa33fb75a6b94f"],["/2019/03/17/Assignment-2-Breakout.html","596dedc40627e06d7e3116ffb4e93f01"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","53fb8db057aa65595dc4b9e319500476"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","6bda012a81dfb8e40c73a7fdaa98b288"],["/2019/04/12/Assignment-3-Hangman.html","8384461e019329e5cae4021baa21a008"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","544dec65f3693774f20fe1b7cc203ca1"],["/2019/04/20/学习道路上的暂歇思考.html","f739ac47e466e6ef2e368d486062b45f"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","eaa19139557eec12b4740dc79270ed11"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","09cc554cdfb178bd140007d8255614b0"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","5ec4263a7987028c09ea501d9d3007f0"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","c224db24a1ba70fb37179ae23663c90e"],["/about/index.html","5092d474651fc93c081fb34ace319427"],["/archives/2018/11/index.html","ec1ef56cb38f72a5a331796c041f4261"],["/archives/2018/12/index.html","78543b0c553f814299d818fa7c4d0f61"],["/archives/2018/index.html","b857c112f7fa0a19eb2bca70d01eedfc"],["/archives/2019/01/index.html","f78dd5b8f9fecd0df8f9039b45c32d33"],["/archives/2019/03/index.html","e569dadb885809d353481e3eb8dea40f"],["/archives/2019/04/index.html","89dc50d8496aca1d62b7990cbdad8b11"],["/archives/2019/05/index.html","aa6dcb068014064e67b8ffffc1bd3745"],["/archives/2019/index.html","87375e908ae83403149f8ec881a4654d"],["/archives/2019/page/2/index.html","f801fa57d67fa74525abc4a697ea40a7"],["/archives/index.html","aa10f7385994db7e6eb87e4690eb75f9"],["/archives/page/2/index.html","b654b1927ead7796a0ccfb2a162a41c0"],["/categories/Java-beginner/index.html","f824f1f3583c79fc954ff3e004f4773d"],["/categories/Princeton-Algorithms/index.html","674d4652efbdeb6cbaf1938f98a29107"],["/categories/Programming-Languages/index.html","d04c774417731202d44359367b48b743"],["/categories/Vue/index.html","fec5ab8ffe56d4cd010064dabe966fe6"],["/categories/index.html","e51051bb232e5da18206217d0bfba4aa"],["/categories/人生苦旅/index.html","1cfe7dfadc22407fa1dfaa63ed2ff48e"],["/categories/折腾/index.html","ace6945b90ba36594299bb299400a111"],["/categories/知识总结/index.html","0c53dbb562baa02b3779de8376c62ec9"],["/css/main.css","3ebcfc457daf74a6ad5b3a856ac039b7"],["/gallery/index.html","86fc8ff68b2cc97c7b0d08fd9bfe12e6"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","2f2f4ba6ae10929065212be76841f088"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7b46205ee7c26a6bca769ac75e8ffa1c"],["/page/3/index.html","b65df4a62f3cc39e1f99f6a2e4a571d4"],["/page/4/index.html","61971947f50457efcde0dc641a1abfce"],["/reading/index.html","0331ac513f76be8e3abbcb825107704f"],["/sw-register.js","27f95a252ae2f8a33335c5b1cb758677"],["/tags/Algorithms/index.html","eeeef097b48edb6c82e1798dde0b8246"],["/tags/Emacs/index.html","23cd038ecc713d93d1f37e6a07c718a4"],["/tags/Hadoop/index.html","e97ea5d676359428f4404d74951e4f7f"],["/tags/Java/index.html","cef8bdc672a6ce45d1d471d687cbca5c"],["/tags/JavaScript/index.html","02535f3ec1769964a2cbe563f428d407"],["/tags/JavaWeb/index.html","4d0b3ed767d9c95af64b9fb04ffc45f8"],["/tags/Java基础/index.html","085858c7eeb0427f9fedf65dec694f97"],["/tags/Linux/index.html","75fc66e63b5f38e3c07471e34ae1a589"],["/tags/Programming-Assignment/index.html","9d180f5ac1e42bbbbc769f17e9c93609"],["/tags/SML/index.html","9d5a3e346d5718a9c14785e04a6f24ca"],["/tags/coursera/index.html","3d7c2eefc24d7c3019e4e1aceaff6807"],["/tags/git/index.html","1d5d9f363c7e3b7055c72fd2416efb57"],["/tags/index.html","6d50278e8310639cf14efdd962f160b0"],["/tags/vue/index.html","353524aac4661f58df4023a65f389ce4"],["/tags/个人总结/index.html","283cb65d01027ad26f98d9bfb23e8e85"],["/tags/前端/index.html","f1b46548c23427e38c310dcb60824fcb"],["/tags/大学生活/index.html","d29a23def143133e27bf41606c050e36"],["/tags/大数据/index.html","e0c98eb283fa88bd7eaa2fe46571f4d3"],["/tags/总结/index.html","507c795504fdbd61ce16b0c9380e4ed0"],["/tags/折腾/index.html","9a71ad6ce8a5db4279ac7023e0788555"],["/tags/数据结构/index.html","667e342bbdec027497eac965f2fc47c5"],["/tags/算法/index.html","3ea14a17361e8adb1a2a1a8293feb47b"],["/tags/终端/index.html","444f358f820e319d3eca5bf6dd324739"],["/tags/美化/index.html","eb95ac720cff6ff762617fce002facee"],["/tags/通天塔/index.html","2b06864b58394282651c886fe1ac0686"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
