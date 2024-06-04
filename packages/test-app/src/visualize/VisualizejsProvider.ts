import {VisualizeFactory} from "./visualizejs.js";

export type VisualizejsProvider = () => Promise<VisualizeFactory>;

let localVisualizejs: VisualizeFactory | undefined;
const visualizejsMap: {[url: string]: VisualizeFactory} = {};

const SCRIPT_LOAD_TIMEOUT = 60 * 1000;

const defaultVisualizeUrl = '';//`${process.env.REACT_APP_VISUALIZE_URI}`;

const createScriptInHeadAndWaitForLoad = (url: string, timeout: number = SCRIPT_LOAD_TIMEOUT): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const timeoutHandle = setTimeout(() => {
            reject(`Failed to load visualizejs. Either error or timeout occurred. url: [${url}]`)
        }, timeout);

        const script  = document.createElement('script');
        script.addEventListener('load', function() {
            clearTimeout(timeoutHandle);
            resolve();
        });

        const head = document.head || document.getElementsByTagName('head')[0];
        script.src = url;

        head.insertBefore(script, head.firstChild);
    })
}

const getGlobalVisualizejs = (): VisualizeFactory | undefined => {
    const globalViz = (window as any).visualize;
    return globalViz && (globalViz as VisualizeFactory).noConflict();
}

const getNoGlobalVizError = () => Promise.reject("No visualizejs found in the global scope. Please add script tag to your page or use url parameter to load visualizejs");

export const globalVisualizejsProvider: VisualizejsProvider = () => {
    if (!localVisualizejs) {
        localVisualizejs = getGlobalVisualizejs();
    }

    return localVisualizejs ? Promise.resolve(localVisualizejs) : getNoGlobalVizError();
}

export const visualizejsLoader = (url?: string, timeout?: number): VisualizejsProvider => {
    if (!url && getGlobalVisualizejs()) {
        return globalVisualizejsProvider;
    } else if (!url) {
        url = defaultVisualizeUrl;
    }

    return async () => {
        if (Boolean(visualizejsMap[url!])) {
            return visualizejsMap[url!];
        }

        await createScriptInHeadAndWaitForLoad(url!, timeout);

        const globalViz = getGlobalVisualizejs();

        if (globalViz) {
            visualizejsMap[url!] = globalViz;
            return globalViz;
        } else {
            return getNoGlobalVizError();
        }
    }
}
