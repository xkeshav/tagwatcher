// @ts-nocheck
const selector = document.querySelector('#go-to-options');
selector.addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('src/html/options.html'));
  }
});
