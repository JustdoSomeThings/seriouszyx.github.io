/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/11/25/IoC容器浅析及简单实现.html","5590a0bed79654ce28cd212e23e1fae8"],["/2018/11/27/就决定是你了-为你的终端安装-Pokemon-皮肤.html","e42218bff5092155bf6c0552781a68b9"],["/2018/12/10/总结-展望-世界不会因为你的无知而停下脚步.html","869b3089f267daa26f83c64629adc30a"],["/2018/12/25/大数据学习-初识Hadoop.html","27edc77323b950094e663fa579cf093e"],["/2019/01/06/《Algorithms-Part-1》Programming-Assignment-1-Percolation.html","9b1efa296e4de3d4ef80fb1488c1bc84"],["/2019/03/08/使用Forking工作流提交作业.html","a299b48c99945cf01c0f06077683a3f5"],["/2019/03/12/Assignment-1-Warmups.html","4bd2c8d14b2992a5b32d59e6f5cf32b6"],["/2019/03/17/Assignment-2-Breakout.html","32c94c3ecde346021e1d75113973e2a2"],["/2019/03/26/普林斯顿算法课程Part1-week2.html","d9b639a86abc9e0520b244cbb479a33c"],["/2019/04/05/普林斯顿算法课程Part1-week3.html","a4a7b87d20257a197c361aa4bf18177d"],["/2019/04/12/Assignment-3-Hangman.html","60add0594de6836de4e8fc332fac14ec"],["/2019/04/15/普林斯顿算法课程Part1-week4.html","9498bf5d8b91a68c72d86b7c8be16d95"],["/2019/04/20/学习道路上的暂歇思考.html","016beb6a4d28b4eedf7ac1b4ce1742af"],["/2019/04/28/普林斯顿算法课程Part1-week5.html","f42e35e361da145efee76acf30281468"],["/2019/04/29/【通天塔之Vue】壹-缘起-乾坤大挪移.html","dd215fab54416ab0714a14ce24086c08"],["/2019/05/07/普林斯顿算法课程Part1-week6.html","ab03f9f6525fb299a906a92be99e030c"],["/2019/05/08/程序设计语言：PartA-week1-课程信息和配置SML环境.html","56965aee98319288639664d21b63849b"],["/2019/05/10/Commit-message-guide.html","99e8b89e946e542fe11b685d74b37cc8"],["/2019/05/19/《图解HTTP》读书笔记.html","c933940e6dff62d9171fc135f237ff43"],["/about/index.html","1a86a6749f1adb34c2e7b838ac5bde86"],["/archives/2018/11/index.html","483fecb36bb8b74341b97977f6d8005f"],["/archives/2018/12/index.html","d8bb38516d32a0969f9c8d26541f505e"],["/archives/2018/index.html","9a83482cfb032eaac86653d451ef3cc9"],["/archives/2019/01/index.html","80c21495e924514c94c3527486d4628c"],["/archives/2019/03/index.html","3f6a0e1c49709ef7a6ac8fcfdf9ad860"],["/archives/2019/04/index.html","9437187e651cf177ca9ebd908b28356a"],["/archives/2019/05/index.html","5954951925f776ed964b4ed66e558b4a"],["/archives/2019/index.html","e8976bc7c4d27e8216206f47467d53e0"],["/archives/2019/page/2/index.html","54049f01f3ea1779f9cc55f1194d44cb"],["/archives/index.html","e6b9513a73014b3fc6b14f086d95759e"],["/archives/page/2/index.html","96ca53ca248fc1aae2715436ed057792"],["/categories/Java-beginner/index.html","5f1ee59c52d10289c251da7bdddacdaa"],["/categories/Princeton-Algorithms/index.html","16eada8f55a9afd26570a9a333e13b08"],["/categories/Programming-Languages/index.html","c62632d6ff290759c9c52e9772afc779"],["/categories/Vue/index.html","e9d213dba8703756d7b9b4d6c546a202"],["/categories/index.html","ad0ea80253f85587c550f6b2b6430e86"],["/categories/人生苦旅/index.html","37825001b1c77adfb54691402491a1a4"],["/categories/折腾/index.html","c91d3a2ccedf99907122b3c4228aced4"],["/categories/知识总结/index.html","8511a449c568f690149d0c7b0922a29a"],["/categories/翻译/index.html","495649207a92d91cb82fdcb5b60dc49d"],["/categories/读书笔记/index.html","f845cc8040197d72869bf4daa47d2ffe"],["/css/main.css","252a63324df6546e76ea14eff0271d7c"],["/gallery/index.html","47e49f0c2819f40159005ba308ac9997"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/favicon-32x32-next.png","e3b28390c0a629b6f0e7779a634db8a9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","9e964b84973db57240a889b6a4ad8a4c"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","cf85aebc47077197415cd8c884a06319"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.min.js","c4cea16477fcf69e7cd2d5aeab5c0ea3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/three/README.html","b905f378495443526690effd9166c635"],["/lib/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["/lib/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["/lib/three/gulpfile.js","3023520dd67090a4541b144421326827"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ffbb343774e65e5b0e81beed03a9b15b"],["/page/3/index.html","392c6f44e9e935d5218c99bd052648c2"],["/page/4/index.html","8cf55c6c013f8784f200a415e41ec931"],["/reading/index.html","6a193f3313321f419bd135974a2e28ea"],["/sw-register.js","b1b479d9b1b098a50757037a87c1e23a"],["/tags/Algorithms/index.html","6cf5cd18885d340f4501c41356cd91ea"],["/tags/Emacs/index.html","700c98c61efc65362825636a053b35d3"],["/tags/HTTP/index.html","745cf4ae12075b44ae8869594faa0aef"],["/tags/Hadoop/index.html","382cef652738665f4575a82c509a7258"],["/tags/Java/index.html","123bd411d7044c25d9860ddc6bd65561"],["/tags/JavaScript/index.html","d915f0d8374a664dfdd6e4bb61565480"],["/tags/JavaWeb/index.html","558802ebbb4b00bc409a431128069004"],["/tags/Java基础/index.html","455e8a06a2a59ce24dda990d63c33f78"],["/tags/Linux/index.html","83e0210a6bf621f167d1e8273fc4c920"],["/tags/Programming-Assignment/index.html","2671e52da4213641dd778cdc2ca8cca4"],["/tags/SML/index.html","ecead5c7652467a432f52c70f79ddf7f"],["/tags/coursera/index.html","0e61438c66e5b2256f955b6a4cf43eb4"],["/tags/git/index.html","9f6fccc5a32736468c3094824edeeb0d"],["/tags/index.html","f8025e28bc287c4182f6952b754a4f68"],["/tags/vue/index.html","43b462d934d5a3399cdf4026a62798bc"],["/tags/个人总结/index.html","fed8c31def3aae619e852facad52620a"],["/tags/前端/index.html","017c28a8c970b392049b21ea06322ffc"],["/tags/大学生活/index.html","02dac548e9f4497beaef766d415b2ebd"],["/tags/大数据/index.html","d622cec003e2a82ed653c35e6b003173"],["/tags/总结/index.html","2cacac4c2e3fd33f00068d08d95a1901"],["/tags/折腾/index.html","3f2b77817c1869993e127ba7c910e924"],["/tags/数据结构/index.html","d81e22e9f317170c77ae390ece2782f4"],["/tags/算法/index.html","7b43204a647c135018bc67d8fc297e1f"],["/tags/终端/index.html","f9f1a3584f34530352db9a3208831294"],["/tags/美化/index.html","7b7e21abb349ec7a130410f48b4b04f3"],["/tags/通天塔/index.html","dbda2a0af5ef8241aa6ee0b261c5b5ac"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","348767975a01b05d1a61cfcf8156c67d"],["/uploads/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/learn_summary.jpg","d20202c2ff3cad7e9ddf2d60b10ad5a4"],["/uploads/paw2.png","628dde6d49320b541e50a70038379fcb"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/paw4.png","3bb1e5cd03edcc6174c48ca58a3d4d03"],["/uploads/paw5.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/paw6.png","2d32964ff9846c3c3a0751c7d61ff8bb"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/tjhttp.jpg","c0a69eacde4148c360d95e68b814518d"],["/uploads/tttvue1.jpg","3011d6a9b768012b829ade13e4fb7d06"]];
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
