// src/visualize/VisualizejsProvider.ts
var localVisualizejs;
var visualizejsMap = {};
var SCRIPT_LOAD_TIMEOUT = 60 * 1e3;
var defaultVisualizeUrl = "";
var createScriptInHeadAndWaitForLoad = (url, timeout = SCRIPT_LOAD_TIMEOUT) => {
  return new Promise((resolve, reject) => {
    const timeoutHandle = setTimeout(() => {
      reject(`Failed to load visualizejs. Either error or timeout occurred. url: [${url}]`);
    }, timeout);
    const script = document.createElement("script");
    script.addEventListener("load", function() {
      clearTimeout(timeoutHandle);
      resolve();
    });
    const head = document.head || document.getElementsByTagName("head")[0];
    script.src = url;
    head.insertBefore(script, head.firstChild);
  });
};
var getGlobalVisualizejs = () => {
  const globalViz = window.visualize;
  return globalViz && globalViz.noConflict();
};
var getNoGlobalVizError = () => Promise.reject("No visualizejs found in the global scope. Please add script tag to your page or use url parameter to load visualizejs");
var globalVisualizejsProvider = () => {
  if (!localVisualizejs) {
    localVisualizejs = getGlobalVisualizejs();
  }
  return localVisualizejs ? Promise.resolve(localVisualizejs) : getNoGlobalVizError();
};
var visualizejsLoader = (url, timeout) => {
  if (!url && getGlobalVisualizejs()) {
    return globalVisualizejsProvider;
  } else if (!url) {
    url = defaultVisualizeUrl;
  }
  return async () => {
    if (Boolean(visualizejsMap[url])) {
      return visualizejsMap[url];
    }
    await createScriptInHeadAndWaitForLoad(url, timeout);
    const globalViz = getGlobalVisualizejs();
    if (globalViz) {
      visualizejsMap[url] = globalViz;
      return globalViz;
    } else {
      return getNoGlobalVizError();
    }
  };
};
export {
  visualizejsLoader
};
//# sourceMappingURL=bundle.js.map
