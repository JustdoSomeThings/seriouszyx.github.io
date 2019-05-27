/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","6ba056580c4c7d49c85ebc87837750aa"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","0656f22a1acc3ac267e8f3758b88b7da"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","eb4e017744ea941433df60f6d78418a3"],["/2018/12/25/大数据学习-初识Hadoop.html","b18a44945250a4305c9ab8ff746367f4"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","b5ad3af539390a62f6b379b03fdad0e3"],["/2019/03/08/使用Forking工作流提交作业.html","a8567138f7b71c3fe36c9c3a1aa82883"],["/2019/03/12/Assignment-1-Warmups.html","da1eab11e1ef1b2ecfe6927a7cea64ac"],["/2019/03/17/Assignment-2-Breakout.html","c05691a1af67ec7bfdb150914d2a96ec"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","2f1a7490b3f76b60dae7360c62b49e43"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","349b7785cf6545eba4f4c8d82dcd7d60"],["/2019/04/12/Assignment-3-Hangman.html","d3db55e393888596290d359726ae6da9"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","e7ca5bc578313dea46b065a5cc059377"],["/2019/04/20/学习道路上的暂歇思考.html","2cae40f2303218f72ec3b89fbb43d61f"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","a2f22c399a1d628eac9f8e1603a18bb0"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","0bd4dcaae8f4073df536c64919e1c00d"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","900e1cfc3023e959da60807d70a000f6"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","05ef227858c3d0a22baf035a3b0cf02f"],["/2019/05/10/Commit-message-guide.html","425f5c85f6fd0c6f6f057312586d1515"],["/2019/05/19/《图解HTTP》读书笔记.html","dc299ea14d0c85846d7111c9fd451c02"],["/about/index.html","5b946b1d69c53abfa726fd3b72de6404"],["/archives/2018/11/index.html","8e7b563aee616cb4adb1312029cd0b79"],["/archives/2018/12/index.html","566f325322a57c9ac2f2a95caceefb0b"],["/archives/2018/index.html","883d336596fda22d47a6b561ebb2aabc"],["/archives/2019/01/index.html","ae44f9fd35cf8367785234d5b3e01971"],["/archives/2019/03/index.html","89ac44811f28c5afb6b682d0c4160779"],["/archives/2019/04/index.html","0bfe9e3814334024621fd1751d61cdbf"],["/archives/2019/05/index.html","06b0b933c04603d30dff2d2633434b02"],["/archives/2019/index.html","1a83e71cb660bd6129b2bc7963c691e5"],["/archives/2019/page/2/index.html","edea87cdb7c5b975b743985a92f8e083"],["/archives/index.html","173346bc8c7c13342704f6a5be656d4c"],["/archives/page/2/index.html","3d5548a475f85b7b300ec9c6454ab69a"],["/categories/Java-beginner/index.html","6401d1be87925ec1098c0a2978e818df"],["/categories/Princeton-Algorithms/index.html","9f261285eb505625f1ccc12aadd04e3f"],["/categories/Programming-Languages/index.html","a80f2e1dc6f042c5993f289d695e0d88"],["/categories/Vue/index.html","c87960d5954f8e18abda1826b34b1085"],["/categories/index.html","bc465be6a0f02fce2e97aa6f19cd293b"],["/categories/人生苦旅/index.html","5c7fa0ba625632909d49d54f920f167d"],["/categories/折腾/index.html","6b9d240be2872a801ec8ff517b55059f"],["/categories/知识总结/index.html","4f3ff0712aff30ca290b12fe316dc5dd"],["/categories/翻译/index.html","874718975fb64abc7441e53e886cf982"],["/categories/读书笔记/index.html","f78cd891aa6cfaf4c207d919c3af4792"],["/css/main.css","e1552aa6f22207a260377b52ccbc780f"],["/gallery/index.html","97533b9d0659ded99e8a4b4e31e0cbb6"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","d8e65c871d04b830a366ddd2e8968218"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","62016b5b45415ee6e3bfd06fc46713c0"],["/page/3/index.html","65655970478be00276f67ca60a1a2cfe"],["/page/4/index.html","017e8a64f13210caeb51b198e85af0cb"],["/reading/index.html","da7c7c1f170ddb99ccf51dde78d31d65"],["/sw-register.js","762f4f10105298a77e4a0dc8bdb23b5d"],["/tags/Algorithms/index.html","54f0a20295176886596a821f5ef2f1da"],["/tags/Emacs/index.html","ca44d6287a9032fda17e1daec4e4eb06"],["/tags/HTTP/index.html","bebdd00a923b4e7130a4a0a2e14e24d6"],["/tags/Hadoop/index.html","4b55b8f68c3298d3ac3c87e4364ff9ff"],["/tags/Java/index.html","e0a1cca01464be181e298af3e94558c1"],["/tags/JavaScript/index.html","05720c53596712b63d81de14e6c4ab3b"],["/tags/JavaWeb/index.html","14ed15cc2d0575549cfa9967afc2af94"],["/tags/Java基础/index.html","4ce0bfda664e4d009448ee03b349c7e5"],["/tags/Linux/index.html","b15d4ee89893700ebc61182f0dcd1a19"],["/tags/Programming-Assignment/index.html","5b60ccd74c24a0a4ee51ab1319c272f4"],["/tags/SML/index.html","4b95debe7996429b391d93074699489f"],["/tags/coursera/index.html","57a8a780c15bcbc6214199ebd503752a"],["/tags/git/index.html","c69af4517e19abf2e89ba7f4c36c8974"],["/tags/index.html","18ff82c0ebeeb521fcdcebdfcd594f05"],["/tags/vue/index.html","826bf25c1c5456fd5f86bc78b9ff6110"],["/tags/个人总结/index.html","8928531a32917af4c9beeddbc86917f1"],["/tags/前端/index.html","69087209dac85b897eaba9a5db847a09"],["/tags/大学生活/index.html","b1301d8428295f8fc101bc427ed535f6"],["/tags/大数据/index.html","f3afafc766f8e0ba0a758a2033317b7f"],["/tags/总结/index.html","6ee1a9046ac21b637733e9b0fe30b6a5"],["/tags/折腾/index.html","4859af505451d073c3d243bfddbeba6c"],["/tags/数据结构/index.html","59ba2d75d5176b6beecbe420c543ef02"],["/tags/算法/index.html","3683ca13b5e0dfba6cc34862067fc7c3"],["/tags/终端/index.html","9519db5a8c271f7eafa4bdd2d1a86144"],["/tags/美化/index.html","adc7fa9c044e1a1906bccd0584a0bf4e"],["/tags/通天塔/index.html","3a06918c831c8e61f244d44df0d323a6"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
