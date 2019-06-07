/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","4ce90438394ec35565d948beaf4b3587"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","96e17aee493b6bc54c8071a19bb5c558"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","ea231d70ef7e9b216a6035313ca12921"],["/2018/12/25/大数据学习-初识Hadoop.html","4060558eeb374b1ae6ceaa388b4228ab"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","f664aa8a4cad52a7abba276f12d62386"],["/2019/03/08/使用Forking工作流提交作业.html","f70418babf7287573f451a5a9ce37260"],["/2019/03/12/Assignment-1-Warmups.html","1cf6178a58d8b4b1b851c429791b5fea"],["/2019/03/17/Assignment-2-Breakout.html","d810c04edfce99412ce44106eb74fa14"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","b4eb5771e29db8da5579d44577a0471a"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","ec8850f1adba4799017f83b5e46eb04c"],["/2019/04/12/Assignment-3-Hangman.html","91d4b5327391ff30c9dfee577b228966"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","efcf73f0c16bd2b057e17885de45e923"],["/2019/04/20/学习道路上的暂歇思考.html","f131e87a6271cb4a0bf006e3c1a68965"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","09fff96bf13f1e29fadc28a05eeb014e"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","66b5e6214db3d735720b67f3e319e6bb"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","27106a1674a562dcc70ceea62b8da967"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","4dc335962efee70bccba1fecf0998403"],["/2019/05/10/Commit-message-guide.html","b49e68d98648152e37989d5766e7fc2c"],["/2019/05/19/《图解HTTP》读书笔记.html","87ccd9119615f8543387ffd74cf32945"],["/about/index.html","6aa58f3de92e7de6c914341e15caccc4"],["/archives/2018/11/index.html","81477b886638226e82266372a4b627f6"],["/archives/2018/12/index.html","30d08d3d3036b8f31b0f45ecd60732d2"],["/archives/2018/index.html","4e4d1874483bdffe1debc6845a271ee3"],["/archives/2019/01/index.html","7674a239b16e900e3f524be17f6f0b36"],["/archives/2019/03/index.html","b7e1c8e7968333380e0f3d1409f78223"],["/archives/2019/04/index.html","5b27f5dc53528c9208451f74798f2734"],["/archives/2019/05/index.html","4d92ab233f23514ba07b412c63bb1115"],["/archives/2019/index.html","6926c78cd668c179604d361d64583903"],["/archives/2019/page/2/index.html","523521f29e82d95f1990298b41550d5e"],["/archives/index.html","36e44000554d68fe7c94d7d6744d6ea1"],["/archives/page/2/index.html","910344305a8b91d8c881f2e8a2f984bc"],["/categories/Java-beginner/index.html","2fa14be2749d50bfc2fdde2190400ae4"],["/categories/Princeton-Algorithms/index.html","37ecc048257822e20c29bf6c1c3d73cf"],["/categories/Programming-Languages/index.html","f8718ef0104b0a28d58bcbec68f0eac4"],["/categories/Vue/index.html","b25aa85d47e1d661b6b00696b6933ff4"],["/categories/index.html","f969c593381765566e461bbf1b7848cb"],["/categories/人生苦旅/index.html","7741845026bacf1d9ed1cfc456c7b169"],["/categories/折腾/index.html","86699dc3ee89263e33ec79a2a8b8a9ef"],["/categories/知识总结/index.html","fe72cd6bf9ef77c424e3d4afc66d6d1e"],["/categories/翻译/index.html","395a6f3ae65be4cc71b0d4cd12248272"],["/categories/读书笔记/index.html","2c82436f2e4d2bec0b4b7698c8ff9fd1"],["/css/main.css","2d3ed13310fb07f9936a343a6e4d40a0"],["/gallery/index.html","43aa1f6ec417a1be2bbf4bdb7c44212d"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","3b726081911532003ebd166ce174149a"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7a7038f2036b3603ce0e7a142ddc9724"],["/page/3/index.html","71bf767679a33d9cf0638eb2fd2d7ab7"],["/page/4/index.html","ace6b587b90681b98bc985d00b4c2f2a"],["/reading/index.html","de0c7efe8e28f2ddbb9c35d524c47b3d"],["/sw-register.js","79763d46446ecb75f498d37948f7b948"],["/tags/Algorithms/index.html","d2753ed2190883305afbedc1739e3c99"],["/tags/Emacs/index.html","de1aec9bbaf002588b0d92c4bf6ffd6f"],["/tags/HTTP/index.html","f467fbf68ac355cc70f75654cb7419ce"],["/tags/Hadoop/index.html","a3d98004f70085205d9b0fe7abb28213"],["/tags/Java/index.html","7ec50d17dba82f32318aae0384260e79"],["/tags/JavaScript/index.html","36abfc90d88f4dc387eb6954b797895c"],["/tags/JavaWeb/index.html","e1d8582fb937b577d55ce5c1e0d1ffdf"],["/tags/Java基础/index.html","b13868e52ed9feebfdacf17529fe2e2b"],["/tags/Linux/index.html","5c7b228c847acb54153f384d63ca8938"],["/tags/Programming-Assignment/index.html","5784c2d3e8db39425dcfd1842ceb98a2"],["/tags/SML/index.html","f55c96fe38965e4604f2c26bedfa8967"],["/tags/coursera/index.html","a9abe6c6d363ee3bca5bff198496471f"],["/tags/git/index.html","e9e703b9f48536ae1a1c47bf71e6d190"],["/tags/index.html","ec445aa168fb3ea7a1dbb954ca1bd08d"],["/tags/vue/index.html","d8c5118e3a1d88d261ee9ea185d89e49"],["/tags/个人总结/index.html","9b9d8a1ec67fbca930d508d2227c39c0"],["/tags/前端/index.html","957a951ce5bdb7ba24836b6ac2fca34a"],["/tags/大学生活/index.html","7661205b990b2c9e4e263a2255777735"],["/tags/大数据/index.html","37ca95f696ff77eba8faf0b605ceb741"],["/tags/总结/index.html","b43f535632866b4f9c54e21c4f7dc89c"],["/tags/折腾/index.html","83f794797a31521df065985d852dce4f"],["/tags/数据结构/index.html","95144e5f1c8d9617d648aed7fc3e7657"],["/tags/算法/index.html","4d3796ed1896c1eb2ac9f0ac900625d6"],["/tags/终端/index.html","669ac598059687a24edd29c97c8182c7"],["/tags/美化/index.html","9e976d6f86217472cffb289447a545b0"],["/tags/通天塔/index.html","b6aced1b2d9687796fdd7571f8c6822c"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
