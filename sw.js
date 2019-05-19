/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","cb2f5845b70e3962b61a01e0d1c0b891"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","2fd48e74afc9b353a977e44eec1c0f2e"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","5bb42d04cdc37de15835d64ea6421743"],["/2018/12/25/大数据学习-初识Hadoop.html","0ed860d23c7deec9e2963c902433dea9"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","5ded0e9a1157e82beeb4ecad42e455dd"],["/2019/03/08/使用Forking工作流提交作业.html","999756df4f3f2c30e8a2c457b4fd34f5"],["/2019/03/12/Assignment-1-Warmups.html","7538575c883f1189f7bfaa9ed0f313d7"],["/2019/03/17/Assignment-2-Breakout.html","67ba210c645b46f8ebe10dad998d4339"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","c7fc7cd7809cd6c14403ef0410b77dd0"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","34b4a8a834ba7a51df67f3aa9cbb4e65"],["/2019/04/12/Assignment-3-Hangman.html","ba0ef1671d71fe604d59f36bb9dae217"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","662e378aa4e93da0f3bb0f600bb27d04"],["/2019/04/20/学习道路上的暂歇思考.html","556d75a0d5febf248e0432d026cfa901"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","8950bd7da138d23d481ffa35418f0ee5"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","4d1f0cfa71225ac216d8384aeaccf37f"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","85e0d72262aa99d7e233aa4d0bf3be31"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","59cb78ed8a7929a40ce53d7f71d202b6"],["/2019/05/10/Commit-message-guide.html","f2fbe28c5defca2e866a8eb94e45016a"],["/2019/05/19/《图解HTTP》读书笔记.html","a28229b89e255fb3983d7a3beae88a79"],["/about/index.html","0095558ad1d794ba0c8b56c6d7de4d87"],["/archives/2018/11/index.html","18c281f1776ba78bf1ecf19f40c658ca"],["/archives/2018/12/index.html","c05667b59a27610f1276d62705e63b78"],["/archives/2018/index.html","94db1f19a53aacf21cccb71ede873d90"],["/archives/2019/01/index.html","03ec80f7ba9b53630e273ccb1ac7e273"],["/archives/2019/03/index.html","58f93d8452e2b2361d9bd0515a8d5b0e"],["/archives/2019/04/index.html","4e217281a94686edcfb064a7fbdfc057"],["/archives/2019/05/index.html","da595cccebb4f3beb01b1b72522a3ed7"],["/archives/2019/index.html","4da4e6638c5ffbe12e87f057a039b039"],["/archives/2019/page/2/index.html","3a3ff2d7408e411961513ffcdd1f21a8"],["/archives/index.html","35d5dfea09dad51d35d5456589a16f29"],["/archives/page/2/index.html","7a44eb83445b0a8a4c5411a64e5154f0"],["/categories/Java-beginner/index.html","396fd32248416f95f652b49b02156752"],["/categories/Princeton-Algorithms/index.html","d311756787dddc8035d30152a09fb072"],["/categories/Programming-Languages/index.html","e5d54d2309b5c07c260e758d1bb23b7a"],["/categories/Vue/index.html","fe2d5685df0df0fc0677caba5d3986ef"],["/categories/index.html","d7283b4740aee3f5675df10d137d62fb"],["/categories/人生苦旅/index.html","dbdb2b47db90609d23d165018ba74f8e"],["/categories/折腾/index.html","cd0e554cd5476877057798eba84e36db"],["/categories/知识总结/index.html","4a2edb38dab2ba341155e544b88c1572"],["/categories/翻译/index.html","05f1b038b01f19726ae967b0fe273269"],["/categories/读书笔记/index.html","77c9521fcc36263243984f64d51cb280"],["/css/main.css","dd4760760ec4eb6cf4e9a46d512bb983"],["/gallery/index.html","6b5c142fa2ab94db26a85ae96699c040"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","219a63c7bbb72d2c2628896ec7fc6327"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d241665b97f1b66a65ea4f90dcab6d83"],["/page/3/index.html","3801cbef45fd99b368fd8f34db6edf6a"],["/page/4/index.html","bbf5fe8f9dd0b814a22eb2096d52d8b5"],["/reading/index.html","16c98322563fb3f86e9625bb7ed4ec9e"],["/sw-register.js","58cf647615d94abc922b2aa1cb73c5e0"],["/tags/Algorithms/index.html","7f64cd1fb0616d3b4f2675872ca80b40"],["/tags/Emacs/index.html","cbc085a1d7b6a9d0813bff6877d43d89"],["/tags/HTTP/index.html","b8822e9d25dc3ea8f721db25bc9b7bf1"],["/tags/Hadoop/index.html","8e5ede10024aa593acc72578d6e1c763"],["/tags/Java/index.html","4b85cc75851d4068c2a043d0234af567"],["/tags/JavaScript/index.html","84bb3497518b431b3fa04f1f38e6823a"],["/tags/JavaWeb/index.html","59c6ada0a17c76a327512f32fef6427d"],["/tags/Java基础/index.html","9a3de7e4a908d60a77051ebc6d1bddac"],["/tags/Linux/index.html","91c992119e1751931cd366e45cabe41b"],["/tags/Programming-Assignment/index.html","e9a0337d36ec400369717b06f6ce923e"],["/tags/SML/index.html","51734f5f0265fc018647214ea13433c2"],["/tags/coursera/index.html","1bfa5028c324ec16d2c035d17c2ad1c2"],["/tags/git/index.html","34c37b744e7dbfd010c33aa584ed7dca"],["/tags/index.html","76a9351fda17a49c4fbfe66a9d1d3747"],["/tags/vue/index.html","63efca0fc2b25a49a2307dc5d2b8f0b6"],["/tags/个人总结/index.html","df464b7ef563cd3f4bea16c0984d67d1"],["/tags/前端/index.html","b394b8ffd0524c140ca0e9396e63ff56"],["/tags/大学生活/index.html","a1118f963f8a0d8356ec0d78be91615e"],["/tags/大数据/index.html","142621297abea54c5d4ad910b41fa44e"],["/tags/总结/index.html","50d5db174b72a90dd3880fd2098fdd4d"],["/tags/折腾/index.html","5dbdb4cdc0b6451ba907c4ba59e04707"],["/tags/数据结构/index.html","d6d619cba3de098646f2a1bad17a32ed"],["/tags/算法/index.html","dcde108c01792428e408dd5c0284a0a0"],["/tags/终端/index.html","c8a7898ddf1a122d287b3ec02406082f"],["/tags/美化/index.html","d6da0a1aad773dd71d6775d31e426cad"],["/tags/通天塔/index.html","802d713f54fbad68efc59c9c405a3842"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
