// ==UserScript==
// @name         K-FILTER Advanced Ad Blocker
// @namespace    https://github.com/neramc/k-filter
// @version      5.0.0
// @description  한국 + 해외 광고 완벽 차단 (Ultimate Global Edition)
// @author       neramc
// @homepage     https://github.com/neramc/k-filter
// @icon         https://i.ibb.co/3yJZTb26/37.png
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @license      MIT
// @updateURL    https://cdn.jsdelivr.net/gh/neramc/k-filter@main/k-filter.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/neramc/k-filter@main/k-filter.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log('[K-FILTER] Initializing advanced ad blocker...');

    // ============================================
    // Global Ad Objects Neutralization
    // ============================================
    const neutralizeAdObjects = () => {
        const noopFunc = () => {};
        const trueFunc = () => true;
        const falseFunc = () => false;

        const adObjects = {
            // Google Ads
            'googletag.cmd': noopFunc,
            'googletag.pubads': noopFunc,
            'googletag.defineSlot': noopFunc,
            'googletag.display': noopFunc,
            'googletag.enableServices': noopFunc,

            // Naver Ads
            'gladsdk.cmd': noopFunc,
            'gladsdk.defineAdSlot': noopFunc,
            'glad.cmd': noopFunc,

            // AdSense & Korean
            'adsbygoogle': [],
            'adfit': noopFunc,
            'kakao_ad': noopFunc,
            'criteo_q': [],
            'TossPixel': noopFunc,
            'Mobon': noopFunc,
            'dable': noopFunc,
            'Buzzvil': noopFunc,

            // Anti-Adblock
            'FuckAdBlock': noopFunc,
            'BlockAdBlock': noopFunc,
            'SniffAdBlock': noopFunc,
            'fuckAdBlock': noopFunc,
            'blockAdBlock': noopFunc,
            'sniffAdBlock': noopFunc,
            'canRunAds': trueFunc,
            'isAdBlockActive': falseFunc,
            'adBlockEnabled': false,
            'adBlockDetected': false,
            'adblock': false,
            'ads_not_blocked': true,

            // Global Networks
            'fbq': noopFunc,
            '_fbq': noopFunc,
            'amazon_ad': noopFunc,
            'apntag': noopFunc,
            'outbrain': noopFunc,
            'OBR': noopFunc
        };

        Object.keys(adObjects).forEach(path => {
            const parts = path.split('.');
            let obj = window;
            
            for (let i = 0; i < parts.length - 1; i++) {
                if (!obj[parts[i]]) {
                    obj[parts[i]] = {};
                }
                obj = obj[parts[i]];
            }
            
            const prop = parts[parts.length - 1];
            try {
                Object.defineProperty(obj, prop, {
                    get: () => adObjects[path],
                    set: () => {},
                    configurable: false,
                    enumerable: true
                });
            } catch (e) {
                obj[prop] = adObjects[path];
            }
        });

        console.log('[K-FILTER] Ad objects neutralized');
    };

    // ============================================
    // Dynamic Script Injection Blocker
    // ============================================
    const blockDynamicScripts = () => {
        const originalCreateElement = document.createElement;
        document.createElement = function(tagName) {
            const element = originalCreateElement.call(document, tagName);
            
            if (tagName && tagName.toLowerCase() === 'script') {
                const originalSetAttribute = element.setAttribute;
                element.setAttribute = function(name, value) {
                    if (name === 'src' && typeof value === 'string') {
                        const adPatterns = [
                            'adfit', 'adpost', 'adsense', 'googlesyndication', 'doubleclick',
                            'googletagmanager', 'gfp-core', 'mobon_script', 'ads.min.js',
                            'dablena', 'admixer', 'buzzvil-pixel', 'taboola', 'realclick',
                            'acecounter', 'cauly', 'clickmon', 'coupang.com/g.js', 'daangn.com/sdk',
                            'fuckadblock', 'blockadblock', 'anti-adblock', 'adblock-detect',
                            'bait.js', 'connect.facebook.net', 'amazon-adsystem', 'adnxs.com',
                            'outbrain.com', 'media.net', 'adroll.com', 'openx.net', 'pubmatic.com',
                            'casalemedia.com', 'rubiconproject.com', 'propellerads.com',
                            'adsterra.com', 'popads.net', 'mgid.com', 'revcontent.com'
                        ];
                        
                        for (const pattern of adPatterns) {
                            if (value.indexOf(pattern) !== -1) {
                                console.log('[K-FILTER] Blocked script:', value);
                                return;
                            }
                        }
                    }
                    return originalSetAttribute.call(element, name, value);
                };
            }
            return element;
        };

        const originalWrite = document.write;
        document.write = function(content) {
            if (typeof content === 'string') {
                const blockPatterns = [
                    'adsbygoogle', 'googlesyndication', 'doubleclick', 'adfit',
                    'mobon', 'dable', 'facebook.net', 'amazon-adsystem', 'outbrain', 'taboola'
                ];
                
                for (const pattern of blockPatterns) {
                    if (content.indexOf(pattern) !== -1) {
                        console.log('[K-FILTER] Blocked document.write:', pattern);
                        return;
                    }
                }
            }
            return originalWrite.call(document, content);
        };

        console.log('[K-FILTER] Dynamic script blocker installed');
    };

    // ============================================
    // Ad Element Remover
    // ============================================
    const removeAdElements = () => {
        const adSelectors = [
            'ins.kakao_ad_area',
            'ins.adsbygoogle',
            'ins[data-ad-unit]',
            'ins[data-ad-slot]',
            'iframe[src*="googleads"]',
            'iframe[src*="doubleclick"]',
            'iframe[src*="adfit"]',
            'iframe[src*="mobon"]',
            'iframe[src*="dable"]',
            'iframe[src*="taboola"]',
            'iframe[src*="criteo"]',
            'iframe[src*="facebook"]',
            'iframe[src*="outbrain"]',
            'iframe[src*="amazon"]',
            'iframe[src*="propeller"]',
            'iframe[src*="adsterra"]',
            'iframe[src*="popads"]',
            '.revenue_unit_wrap',
            '.kakao_ad_area',
            '[id*="google_ads"]',
            '[class*="google_ads"]',
            '[id*="ad-container"]',
            '[class*="ad-container"]',
            '#ad-bait',
            '.ad-bait',
            '[id*="bait"]'
        ];

        const removeElement = (elem) => {
            if (!elem || !elem.parentNode) return;
            
            const parent = elem.parentNode;
            parent.removeChild(elem);
            
            // Remove empty parent container
            if (parent && parent.children.length === 0 && parent.parentNode) {
                const parentClass = parent.className || '';
                const parentId = parent.id || '';
                if (/ad|banner|promo|sponsor/i.test(parentClass) || /ad|banner|promo|sponsor/i.test(parentId)) {
                    parent.parentNode.removeChild(parent);
                }
            }
        };

        adSelectors.forEach(selector => {
            try {
                document.querySelectorAll(selector).forEach(removeElement);
            } catch (e) {}
        });

        console.log('[K-FILTER] Ad elements removed');
    };

    // ============================================
    // MutationObserver for Dynamic Ads
    // ============================================
    const observeAds = () => {
        if (!window.MutationObserver) return;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            const tagName = node.tagName ? node.tagName.toLowerCase() : '';
                            let isAd = false;

                            // Check ins tags
                            if (tagName === 'ins' && node.className) {
                                isAd = /adsbygoogle|kakao_ad/i.test(node.className);
                            }

                            // Check iframes
                            if (tagName === 'iframe' && node.src) {
                                isAd = /googleads|doubleclick|adfit|mobon|dable|taboola|criteo|facebook|outbrain|amazon|propeller|adsterra|popads/i.test(node.src);
                            }

                            // Check class/id
                            if (!isAd) {
                                const className = node.className || '';
                                const id = node.id || '';
                                isAd = /ad[-_]|banner|adfit|adpost|revenue_unit|sponsored|bait/i.test(className) ||
                                       /ad[-_]|banner|adfit|adpost|bait|sponsored/i.test(id);
                            }

                            if (isAd && node.parentNode) {
                                node.parentNode.removeChild(node);
                                console.log('[K-FILTER] Removed dynamic ad:', tagName);
                            }
                        }
                    });
                }
            });
        });

        const startObserving = () => {
            if (document.body) {
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
                console.log('[K-FILTER] MutationObserver active');
            } else {
                setTimeout(startObserving, 100);
            }
        };

        startObserving();
    };

    // ============================================
    // Shadow DOM Ad Blocker
    // ============================================
    const blockShadowDomAds = () => {
        const originalAttachShadow = Element.prototype.attachShadow;
        Element.prototype.attachShadow = function(...args) {
            const shadowRoot = originalAttachShadow.apply(this, args);
            
            const observer = new MutationObserver(() => {
                try {
                    const shadowAds = shadowRoot.querySelectorAll('[class*="ad"], [id*="ad"], [class*="banner"], iframe');
                    shadowAds.forEach(ad => {
                        if (ad.parentNode) {
                            ad.parentNode.removeChild(ad);
                            console.log('[K-FILTER] Removed shadow DOM ad');
                        }
                    });
                } catch (e) {}
            });

            observer.observe(shadowRoot, { childList: true, subtree: true });
            return shadowRoot;
        };

        console.log('[K-FILTER] Shadow DOM blocker installed');
    };

    // ============================================
    // Initialize All Blockers
    // ============================================
    const init = () => {
        try {
            neutralizeAdObjects();
            blockDynamicScripts();
            blockShadowDomAds();

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    removeAdElements();
                    observeAds();
                    
                    // Periodic cleanup
                    setInterval(removeAdElements, 2000);
                });
            } else {
                removeAdElements();
                observeAds();
                setInterval(removeAdElements, 2000);
            }

            console.log('[K-FILTER] All blockers initialized successfully');
        } catch (e) {
            console.error('[K-FILTER] Initialization error:', e);
        }
    };

    // Start immediately
    init();
})();
