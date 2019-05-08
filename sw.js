/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404.html","861eb8c7f9caa0fb22eadb5dc6be4c73"],["/blog/blog/2018/11/25/IoC容器浅析及简单实现.html","5dbc1ec67610418fd8733090d2b0e040"],["/blog/blog/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","b0a4f934c417aa3d0e548def93710633"],["/blog/blog/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","417bf358ae0dc8f2bd359d5d9120f607"],["/blog/blog/2018/12/25/大数据学习-初识Hadoop.html","7d364b8004b8bab9ef3e5bab18cdb73d"],["/blog/blog/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","9fc4d0c2ad69075762a3c77705233b19"],["/blog/blog/2019/03/08/使用Forking工作流提交作业.html","508bb652740ec4eea90b9148d9f31210"],["/blog/blog/2019/03/12/Assignment-1-Warmups.html","b67deb58c0e2cc9f41323a8e2b862155"],["/blog/blog/2019/03/17/Assignment-2-Breakout.html","6035dd7e04d4069210ccd1de931d878a"],["/blog/blog/2019/03/26/普林斯顿算法课程Part1-week2.html","cc9c2e98d9346b3aede398d5ff42b937"],["/blog/blog/2019/04/05/普林斯顿算法课程Part1-week3.html","0fb3e581e13992daa71411306142a5ae"],["/blog/blog/2019/04/12/Assignment-3-Hangman.html","b9182d23f6f1baac6e7a1ec3465ab3bd"],["/blog/blog/2019/04/15/普林斯顿算法课程Part1-week4.html","87441bbd11984ac6ce79501f149869b5"],["/blog/blog/2019/04/20/学习道路上的暂歇思考.html","acacaa0fdf2659b76a63a41f1e6e44f3"],["/blog/blog/2019/04/28/普林斯顿算法课程Part1-week5.html","35ad151c4033b7deab9c25ff2f631995"],["/blog/blog/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","5d13fd737bdb03229ebf58cfed7c5a25"],["/blog/blog/2019/05/07/普林斯顿算法课程Part1-week6.html","06b267d9b3cf98cc832ab57da3d16ca8"],["/blog/blog/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","229d62ca4bcc82668a92689e70351925"],["/blog/blog/about/index.html","e5b74ee17ef3edfbdb33a33d963d27cb"],["/blog/blog/archives/2018/11/index.html","379997ed63fcf194a44a3ef2b0a5a91f"],["/blog/blog/archives/2018/12/index.html","6be311ada7c361bdb06cade640068b56"],["/blog/blog/archives/2018/index.html","55ac3de1e35f8ade60119159d79757f0"],["/blog/blog/archives/2019/01/index.html","2e37f17aed55ba88ba5586465b1db90c"],["/blog/blog/archives/2019/03/index.html","229bb30081a932043c1a24fe06d3ff38"],["/blog/blog/archives/2019/04/index.html","439828ef260eef41a9fb3061de6a9bb0"],["/blog/blog/archives/2019/05/index.html","f034746bd4d4b7d3f28b15d9d32d459d"],["/blog/blog/archives/2019/index.html","254eafcaafb6d3b8d1edaff62ae2809c"],["/blog/blog/archives/2019/page/2/index.html","8e03adf19c5e04ec02eb061576b4db12"],["/blog/blog/archives/index.html","2bafad88ad98d727e480deeb4ba5ef38"],["/blog/blog/archives/page/2/index.html","5484d8448ec58b52f332732843209523"],["/blog/blog/categories/Java-beginner/index.html","ef26caf0e9fd48c719c3d94ece9da9a3"],["/blog/blog/categories/Princeton-Algorithms/index.html","57f4f99b5336dcf711fc7f5027803e72"],["/blog/blog/categories/Vue/index.html","1a94c7f5c4b8f05ef84ffdcd34e9d8e0"],["/blog/blog/categories/index.html","b01e96ec7e4d37b64c34f89a618baf8f"],["/blog/blog/categories/人生苦旅/index.html","8a20f2296bb2cc57affe03bb9cac1f70"],["/blog/blog/categories/折腾/index.html","a46a33d499079ff361ee4c6c32af3a46"],["/blog/blog/categories/知识总结/index.html","b0029985593844e36c56cd2025d8b936"],["/blog/blog/css/main.css","c76bef315916364db45e28545a01d980"],["/blog/blog/gallery/index.html","26d7457ff7497f1c36b737dd544c617d"],["/blog/blog/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/blog/blog/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/blog/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/blog/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/blog/blog/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/blog/blog/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/blog/blog/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/blog/blog/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/blog/blog/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/blog/blog/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/blog/blog/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/blog/blog/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/blog/blog/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/blog/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/blog/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/blog/blog/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/blog/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/blog/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/blog/blog/index.html","a83e2a46164158d43640587a76584659"],["/blog/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/blog/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/blog/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/blog/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/blog/blog/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/blog/blog/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/blog/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/blog/blog/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/blog/blog/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/blog/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/blog/page/2/index.html","d0cec4d613fc36112ab6dc2dacdf825f"],["/blog/blog/page/3/index.html","28f28fc220e986a77afdc6b315a0d7f9"],["/blog/blog/page/4/index.html","72c10307a1350d1d7fc647d30f5e904d"],["/blog/blog/reading/index.html","df8cbf6e8f24ea86718e6f99390b4429"],["/blog/blog/sw-register.js","ca89d7705061b4e8e67ee6056107a6c6"],["/blog/blog/tags/Algorithms/index.html","80b982be681d1ba731e3966d29aa9d6d"],["/blog/blog/tags/Hadoop/index.html","ef5ede2309ca4085d855a89b67be0e35"],["/blog/blog/tags/Java/index.html","27d07ab1fca987cec2d6dbe911f49ed7"],["/blog/blog/tags/JavaScript/index.html","e9624abaa69045fc17c4bec64ffca689"],["/blog/blog/tags/JavaWeb/index.html","1fbee9ae29a0c72596e2922c31ee20d5"],["/blog/blog/tags/Java基础/index.html","d7a339572dd24a791dc11f25136e3ba9"],["/blog/blog/tags/Linux/index.html","9643ba2c5233273f6cc6dc01c95eb92b"],["/blog/blog/tags/Programming-Assignment/index.html","4f70f87e8d5afad545220f9fb4603725"],["/blog/blog/tags/coursera/index.html","488cfb7cedbd5662d02107f2b29ad429"],["/blog/blog/tags/git/index.html","5c3eb1823dfe5b41c8cab107a4837a83"],["/blog/blog/tags/index.html","08d9f7ec59529049b07c1ec6f6b10336"],["/blog/blog/tags/vue/index.html","1945eaf0fbf396954bf7df9bd4233de1"],["/blog/blog/tags/个人总结/index.html","b25f4a86ff79305fdf3d271f24b46c07"],["/blog/blog/tags/前端/index.html","afa4517f0a1a59fe6a430fa626273ecf"],["/blog/blog/tags/大学生活/index.html","b035f124c0e5f25af60783620fe9c21e"],["/blog/blog/tags/大数据/index.html","1a36cc3d23dc7b2e68530a65cbe694c5"],["/blog/blog/tags/总结/index.html","b966be734cc5efd44f72c2ca57c133b1"],["/blog/blog/tags/折腾/index.html","0de01c3bb6a5099c1e25fdbe4e733688"],["/blog/blog/tags/数据结构/index.html","a304b3a9e02c80570d1a22e28be3fe6a"],["/blog/blog/tags/算法/index.html","92a4bae1ce6bb6665e25c3666591482f"],["/blog/blog/tags/终端/index.html","29c5a2176efcdb228185f0268d68d758"],["/blog/blog/tags/美化/index.html","7850d8c33a4cc6a90cbe6c1a688b9920"],["/blog/blog/tags/通天塔/index.html","97f09f1e225e5e71e24acb47d3883a44"],["/blog/blog/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/blog/blog/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/blog/blog/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/blog/blog/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/blog/blog/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/blog/blog/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/blog/blog/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/blog/blog/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/blog/blog/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/blog/blog/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/blog/blog/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/blog/blog/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/blog/blog/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"],["/blog/index.css","338b8b10a097088d53c90e3726d50e65"],["/blog/index.html","41ec3143405b9fdc82edfff43f89adcc"],["/blog/tx.jpg","347c72c579f6fc05665b31977029bfda"]];
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
