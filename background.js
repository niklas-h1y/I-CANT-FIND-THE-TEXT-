chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading' && tab.url && tab.url.startsWith('http')) {
    chrome.storage.local.get(['chaosActive'], (result) => {
      if (result.chaosActive) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          files: ["styles.css"]
        }).catch(err => console.log("Can't inject into this page:", err));
      }
    });
  }
});
