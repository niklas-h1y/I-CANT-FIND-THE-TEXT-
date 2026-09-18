chrome.storage.local.get(['chaosActive'], (result) => {
  if (result.chaosActive) {
    const style = document.createElement('style');
    style.textContent = `
      html {
        transform: scale(10) !important;
        transform-origin: top left !important;
        width: 10% !important;
        height: 10% !important;
        overflow: auto !important;
      }
    `;
    document.documentElement.appendChild(style);
  }
});
