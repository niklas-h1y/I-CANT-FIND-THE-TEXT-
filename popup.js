const btn = document.getElementById('toggleBtn');

chrome.storage.local.get(['chaosActive'], (result) => {
  if (result.chaosActive) {
    btn.textContent = "DEACTIVATE";
    btn.classList.add('active');
  }
});

btn.addEventListener('click', () => {
  chrome.storage.local.get(['chaosActive'], (result) => {
    const newState = !result.chaosActive;
    chrome.storage.local.set({ chaosActive: newState }, () => {
      btn.textContent = newState ? "DEACTIVATE" : "ACTIVATE CHAOS";
      if (newState) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
      
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  });
});
