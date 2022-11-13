browser.contextMenus.create({
    id: "search-with-pubmed",
    title: "Search in PubMed",
    icons: {
        "16": "icons/16.png",
        "24": "icons/24.png",
        "32": "icons/32.png",
        "48": "icons/48.png",
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
