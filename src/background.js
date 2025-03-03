console.log("🚀 Background script is running!");

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("🔍 Intercepted request:", details.url);

        if (details.url.includes("appClient-C_QPBy9q.js")) {
            console.log("🚀 Blocking & replacing:", details.url);
            return { redirectUrl: chrome.runtime.getURL("appClient-C_QPBy9q.js") };
        }
        if (details.url.includes("preact-Ch3myUJ-.js")) {
            console.log("🚀 Blocking & replacing:", details.url);
            return { redirectUrl: chrome.runtime.getURL("preact-Ch3myUJ-.js") };
        }
    },
    { urls: ["<all_urls>"], types: ["script"] },
    ["blocking"]
);
