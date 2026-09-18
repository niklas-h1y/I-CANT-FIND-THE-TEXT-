chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Trigger as soon as the tab starts loading a valid web URL
  if (changeInfo.status === 'loading' && tab.url && tab.url.startsWith('http')) {
    chrome.storage.local.get(['chaosActive'], (result) => {
      if (result.chaosActive) {
        chrome.scripting.insertCSS({
          target: { tabId: tabId, allFrames: true },
          files: ["styles.css"]
        }).catch(err => console.log("Injection blocked or failed:", err));
      }
    });
  }
});
