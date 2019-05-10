/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","626055d3ebaca3a4df97287748b09209"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","bd00913a792f605c71bd532aabe955d1"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","101fc056fdc032eefd175519e04a9692"],["/2018/12/25/大数据学习-初识Hadoop.html","d4e00bdacb62eebf0713704489cce7d8"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","16ff5fcd93c6b28d517ba39671af3e6b"],["/2019/03/08/使用Forking工作流提交作业.html","e4f87d5ac235184d0a1186250d7c874d"],["/2019/03/12/Assignment-1-Warmups.html","5773ce680936d711661ce5ec8eb02a49"],["/2019/03/17/Assignment-2-Breakout.html","ebc02c4f48a86ae8eaf56be86999aa68"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","353e088b29343773f2b471edf08a823c"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","ebc5f41faa63f138d5c04324467cefe4"],["/2019/04/12/Assignment-3-Hangman.html","7a035d1b73588d0eca7a864a8aef18c7"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","852a4454e772b3acc46b97fd7ac2e792"],["/2019/04/20/学习道路上的暂歇思考.html","21ecfde08cb554672ab8574b925d4968"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","dd0fbd15bec52e72ddcde06b52b3bde5"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","23111d0f67e75ab5cc3bbe0d79cfa79c"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","95a51835ce94219d78f85cad28c141a5"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","231131a106a411846a79ac668de2b0c3"],["/2019/05/10/Commit-message-guide.html","8e57074d6dc644692424a9cc1c664b71"],["/about/index.html","f3943917b14b2a78be2e1cd6d61d1df7"],["/archives/2018/11/index.html","f83fa77f0e2e91a427c3333c1f981729"],["/archives/2018/12/index.html","99af0aae71e25a20fbc2c3beadfde033"],["/archives/2018/index.html","1628012b4b1ba59bce616c3769a98d88"],["/archives/2019/01/index.html","95199a2106ecf79c7753c424c70c3b1d"],["/archives/2019/03/index.html","244ae2689c083974fd0e06d13d556e7a"],["/archives/2019/04/index.html","51b6c74d112b41afd0f79a8b30e2a214"],["/archives/2019/05/index.html","796df48747b3557dd75ac4df2fa5ef2d"],["/archives/2019/index.html","ecc9ff8cc38f9996605ed5d403780f22"],["/archives/2019/page/2/index.html","aa04e9f07ff00545acc0e3d1e73668e6"],["/archives/index.html","709d2723cce4743e59b4b955e1ddee26"],["/archives/page/2/index.html","9c736ab30429f98eff2a1fdb3c071eed"],["/categories/Java-beginner/index.html","d7c0c5a490cdb1071231ce65f4e6d4f9"],["/categories/Princeton-Algorithms/index.html","ae28142832147af3c7c198196571873c"],["/categories/Programming-Languages/index.html","04549e7cde1bd927005a03432cc24cc2"],["/categories/Vue/index.html","6592814fbf6d96bee46143976dc65d93"],["/categories/index.html","64bbf51dde75bf3502adf85614dc4c32"],["/categories/人生苦旅/index.html","5788eb13cb5b1765f7b7369e4080257b"],["/categories/折腾/index.html","0106d6c123b09d85df4be4708236d8cc"],["/categories/知识总结/index.html","0f76248ba29acab78ce942113ad8bfd1"],["/categories/翻译/index.html","59e2921b47a8236b5b1a5a829518ebc2"],["/css/main.css","9165eb56a6c3528eaf267db76a08df78"],["/gallery/index.html","d74f1ccd648a2f1b7a7a9507c74ad73f"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","e34a02136742a2b82f662662222be3ce"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","eeb05567a1fe247c0dedbdf6ed7534f9"],["/page/3/index.html","a9612dcaad3c5244aa1beec8fd53702e"],["/page/4/index.html","8956fa546cb8226d6fa446836369d6ac"],["/reading/index.html","f27f38bc5aa5f7c9e8476bf904d6c376"],["/sw-register.js","cec411086a8ef1e996774b504cb052cd"],["/tags/Algorithms/index.html","f498cce8300843b0b2efd8dc311bb09a"],["/tags/Emacs/index.html","e6bd9df6b2bfbdcb0769c887912db241"],["/tags/Hadoop/index.html","268d5e9188634adbfed719a913deed5e"],["/tags/Java/index.html","26113a2b69764c635f0af0578b668680"],["/tags/JavaScript/index.html","f210954027b154e0e3282aab57c53d0d"],["/tags/JavaWeb/index.html","a751a6047b14d8ee3b8056f1c0a7bdf1"],["/tags/Java基础/index.html","5f0cbe66a81c2a7abfb5b1fd0a116701"],["/tags/Linux/index.html","1ef71a8a148569531ea382e055c49c32"],["/tags/Programming-Assignment/index.html","633ce266670b60ef28d499c16e2f540e"],["/tags/SML/index.html","93d89878826428a9fad4d61931955062"],["/tags/coursera/index.html","466fb6d6c809b3d5ef633a417ec97b7f"],["/tags/git/index.html","9fd406905b350da892806e4b31890e0c"],["/tags/index.html","050c2d9d2a91d07836c95829049848c4"],["/tags/vue/index.html","76ca832f5a2fd11b16bd44301b3cd0d5"],["/tags/个人总结/index.html","b0a5109300d90259fe20a80cb0bfd053"],["/tags/前端/index.html","649b42aad71e8284174658f88bc62990"],["/tags/大学生活/index.html","eddaaee107575df57dad8ffc7d88534f"],["/tags/大数据/index.html","98dc16ca5f2c9325ab8c443857f6648b"],["/tags/总结/index.html","802b56c8b492728908c52bf14717b657"],["/tags/折腾/index.html","39c8854fcf3c1eeb5fb2acac90769772"],["/tags/数据结构/index.html","40091ee861fcf9e701d2e2fc8b972a10"],["/tags/算法/index.html","c8c781c928b3e93b15c90ada5dc74a20"],["/tags/终端/index.html","a997ca9386ddc09a8fd77065ad9f1425"],["/tags/美化/index.html","aa5db7f033201c1bb3fed5e61b9fccd9"],["/tags/通天塔/index.html","f378d6e5a146dd9f72b85380ba474717"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
