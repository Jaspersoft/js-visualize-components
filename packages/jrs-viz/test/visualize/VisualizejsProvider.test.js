import { visualizejsLoader } from '../../src/visualize/VisualizejsProvider'

describe('visualizejsprovider test', () => {
    it('should return global viz if set on window', async () => {
        let vContainer;
        const fakeViz = {noConflict: () => {return self}, inputControls: () => {return {}}};
        window.visualize = fakeViz;

        const loadViz = visualizejsLoader();
        await loadViz().then((v => {
            vContainer = v.visualize;
        }));

        expect(vContainer).toBe(fakeViz);
        expect(document.querySelectorAll('script').length).toBe(0);
        delete window.visualize;
    });

    it('should add script tag when url provided', async () => {
        const loadViz = visualizejsLoader('http://localhost/SCRIPT', 5);
        try {
            await loadViz();
        } catch { }
        expect(document.querySelectorAll('script').length).toBe(1);
        expect(document.querySelectorAll('script')[0].src).toBe('http://localhost/SCRIPT');
    });

});