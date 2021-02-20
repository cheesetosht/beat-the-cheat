console.log("Background Script Initiated!");

chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
  console.log("Foreground Injected!")
);
