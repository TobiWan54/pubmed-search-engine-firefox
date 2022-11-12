browser.contextMenus.create({
    id: "search-with-pubmed",
    title: "Search in PubMed",
    icons: {
        "16": "icons/16.ico",
        "24": "icons/24.ico",
        "32": "icons/32.ico",
        "48": "icons/48.ico",
    },
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "search-with-pubmed":
            browser.tabs.create({ url: "https://pubmed.ncbi.nlm.nih.gov/?term=" + info.selectionText });
            break;
    }
})
