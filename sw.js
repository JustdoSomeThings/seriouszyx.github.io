/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404.html","861eb8c7f9caa0fb22eadb5dc6be4c73"],["/blog/blog/2018/11/25/IoC容器浅析及简单实现.html","d49a6d58f0e22b51c9e208503dae88c9"],["/blog/blog/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","b481e87245c6658af34f333f5c4def54"],["/blog/blog/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","64eff59367ccd8a930951903f9bf72e9"],["/blog/blog/2018/12/25/大数据学习-初识Hadoop.html","f51c892ab09edaf6a444b88c118f290b"],["/blog/blog/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","e16acea2a1902c11f1b4e02dd355daa8"],["/blog/blog/2019/03/08/使用Forking工作流提交作业.html","a58ad3f03415827607df52eef4e25e99"],["/blog/blog/2019/03/12/Assignment-1-Warmups.html","1446bf3b640f4f363b6391d4d8822437"],["/blog/blog/2019/03/17/Assignment-2-Breakout.html","bee6ebd81d46d49ced76118a71379a6a"],["/blog/blog/2019/03/26/普林斯顿算法课程Part1-week2.html","81a2e8e0f8d8be0e073527405417e001"],["/blog/blog/2019/04/05/普林斯顿算法课程Part1-week3.html","59188b7cabd362ffe6391bac6f7cd448"],["/blog/blog/2019/04/12/Assignment-3-Hangman.html","419d5428b169f19c2c53aae56755033b"],["/blog/blog/2019/04/15/普林斯顿算法课程Part1-week4.html","485c6818c5f56b557f26e9b00b141b90"],["/blog/blog/2019/04/20/学习道路上的暂歇思考.html","d43959a69fc641a0b28a394d4ce84ef0"],["/blog/blog/2019/04/28/普林斯顿算法课程Part1-week5.html","992953153eebc6be7af2d17b6779b8d7"],["/blog/blog/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","07783ac6928bc8234d02fb621b120423"],["/blog/blog/2019/05/07/普林斯顿算法课程Part1-week6.html","934d3a1d22baab7b287598f44b42241e"],["/blog/blog/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","e622dc8cb74dd1a8159264ee8932373d"],["/blog/blog/about/index.html","4fb269848357dd5ad9a28ccff14d7045"],["/blog/blog/archives/2018/11/index.html","e92072c382ae753cf6dd6b3e501500cc"],["/blog/blog/archives/2018/12/index.html","16ec7b76b04781e1779b00caa002c10c"],["/blog/blog/archives/2018/index.html","d37d7734b926fe219f044d6890bccb39"],["/blog/blog/archives/2019/01/index.html","c5288c328f77e3ba75dd2382d6f7c1a1"],["/blog/blog/archives/2019/03/index.html","54ee1c67b946347c0e5e4af628d6ec01"],["/blog/blog/archives/2019/04/index.html","d260bef18bea884fc4c4c8e9dfef3330"],["/blog/blog/archives/2019/05/index.html","d2ba618a12f4d3dd1cdc22128a4e1d67"],["/blog/blog/archives/2019/index.html","afa4e4d88feeab8727713e33c0683692"],["/blog/blog/archives/2019/page/2/index.html","5795a7e52ded8213b2f5eacde4f33044"],["/blog/blog/archives/index.html","192fc0a358328ad86ed3b2b8ca7cbe28"],["/blog/blog/archives/page/2/index.html","dbac55b2e1353c0361c86d1e9a81ab43"],["/blog/blog/categories/Java-beginner/index.html","45eef4c25a49c5d74bc432a128e55246"],["/blog/blog/categories/Princeton-Algorithms/index.html","d98106fdfb17d5654628bded7d9ae9fd"],["/blog/blog/categories/Vue/index.html","69340e0becad32e144aa850dff985158"],["/blog/blog/categories/index.html","147fe7b201c3f7d71e7d59b274e76ae3"],["/blog/blog/categories/人生苦旅/index.html","1f51266eb0d74b4d422ec3d59243e19a"],["/blog/blog/categories/折腾/index.html","2c8323fdd30a67815df797196cfbdb9c"],["/blog/blog/categories/知识总结/index.html","224e0c1426245d7d0d43672d1dd6e7fc"],["/blog/blog/css/main.css","c76bef315916364db45e28545a01d980"],["/blog/blog/gallery/index.html","354ca3df0c98affe44c11f96bf8f37aa"],["/blog/blog/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/blog/blog/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/blog/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/blog/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/blog/blog/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/blog/blog/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/blog/blog/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/blog/blog/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/blog/blog/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/blog/blog/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/blog/blog/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/blog/blog/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/blog/blog/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/blog/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/blog/blog/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/blog/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/blog/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/blog/blog/index.html","946b4c7debb78d2609d65003ab685b00"],["/blog/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/blog/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/blog/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/blog/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/blog/blog/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/blog/blog/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/blog/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/blog/blog/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/blog/blog/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/blog/page/2/index.html","ddb4aefbf3f34d1eb3ae10a3b9b01916"],["/blog/blog/page/3/index.html","7bb199ed1b5e8b9eaf933d3869ed85c6"],["/blog/blog/page/4/index.html","01d6d7b4f52fee347f42e3877890a72b"],["/blog/blog/reading/index.html","c0c0f256528d976574afb20a33d7d0cd"],["/blog/blog/sw-register.js","fc7417b516dfeb55622d021974387c76"],["/blog/blog/tags/Algorithms/index.html","170b22fd08ae82e732f514edb3f8515c"],["/blog/blog/tags/Hadoop/index.html","ab044e48e64bd0f42f0bc115786957d5"],["/blog/blog/tags/Java/index.html","1bbe067afa4eb59cddb73e5e776421a8"],["/blog/blog/tags/JavaScript/index.html","aa8c75255b93210ed301871dfa95464f"],["/blog/blog/tags/JavaWeb/index.html","3a48bbf0df4a645be206afe4906d35c4"],["/blog/blog/tags/Java基础/index.html","b8347eaa24288291e688d60919977b03"],["/blog/blog/tags/Linux/index.html","479f08fa9f30e580948e4d22b3cb361b"],["/blog/blog/tags/Programming-Assignment/index.html","8489077667a15603013d3b12698a6e8a"],["/blog/blog/tags/coursera/index.html","0e38d4cde68f0b328fae6d7f9c168d38"],["/blog/blog/tags/git/index.html","0cceb3357e184ba3224bbb7d15fdab80"],["/blog/blog/tags/index.html","495e2345e064b286e2227c21aa6d26e0"],["/blog/blog/tags/vue/index.html","4a69337b8087dbf3acc2bad2ac5997eb"],["/blog/blog/tags/个人总结/index.html","c2aa4b6fa4d20d110e3a5ea9448b8c33"],["/blog/blog/tags/前端/index.html","0bd768c5cb67c0bc7415ecb7d35dfa62"],["/blog/blog/tags/大学生活/index.html","20e17ef79443fcc16121057bebe712bf"],["/blog/blog/tags/大数据/index.html","38dbfea01f9c7e86136eed50481eafbc"],["/blog/blog/tags/总结/index.html","c60b3b47cd3917d28dbd84d1b0e44e0e"],["/blog/blog/tags/折腾/index.html","88ceb9aaf17f659cf0f0d8eb17f1e0c9"],["/blog/blog/tags/数据结构/index.html","8a389917d1f7c578064fd62c7b31e21b"],["/blog/blog/tags/算法/index.html","46acfc829cd35ab041eb3baa232b63c0"],["/blog/blog/tags/终端/index.html","818c1072487c57793443b874daf429be"],["/blog/blog/tags/美化/index.html","5b498d7c3ff5166c7ea0ab35e56b83dc"],["/blog/blog/tags/通天塔/index.html","167dc48504aef04a6c6651a34bf7d8bf"],["/blog/blog/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/blog/blog/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/blog/blog/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/blog/blog/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/blog/blog/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/blog/blog/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/blog/blog/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/blog/blog/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/blog/blog/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/blog/blog/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/blog/blog/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/blog/blog/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/blog/blog/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/blog/index.css","338b8b10a097088d53c90e3726d50e65"],["/blog/index.html","41ec3143405b9fdc82edfff43f89adcc"],["/blog/tx.jpg","347c72c579f6fc05665b31977029bfda"]];
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
