chrome.storage.local.get(['chaosActive'], (result) => {
  if (result.chaosActive) {
    const style = document.createElement('style');
    style.textContent = `
      html {
        /* Scale up 20x from the top-left corner */
        transform: scale(20) !important;
        transform-origin: top left !important;
        
        /* Force the canvas container size to expand so scrollbars appear */
        width: 350% !important;
        height: 350% !important;
        
        /* Explicitly force scrollbars on both axes */
        overflow: scroll !important;
      }
      body {
        /* Prevents the browser from compressing layouts horizontally */
        min-width: 100vw !important;
      }
    `;
    document.documentElement.appendChild(style);
  }
});
