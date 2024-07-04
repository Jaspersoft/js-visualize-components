import InputControls from '@jaspersoft/jv-input-controls'
import {
  visualizejsLoader,
  Authentication,
  VisualizeFactory,
  VisualizeType
} from '@jaspersoft/jv-tools';

const TEST_URL = 'https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js';
const credentials: Authentication = {
  name: 'joeuser',
  password: 'joeuser',
  organization: 'organization_1'
}
let visualizeUrl = TEST_URL;
let vContainer: VisualizeType;
let visualizeFactoryContainer: VisualizeFactory;

let containerBox = document.getElementById('inputControls');

async function loadViz() {
  const loadVisualize = visualizejsLoader(visualizeUrl);
  visualizeFactoryContainer = await loadVisualize();
  if (credentials && visualizeFactoryContainer) {
    await new Promise<VisualizeType>((resolve, reject) => {
      visualizeFactoryContainer({
        auth: {
          name: credentials.name,
          password: credentials.password,
          organization: credentials.organization || null,
          locale: "en_US"
        }
      }, resolve, reject)
    }).then((v: VisualizeType) => {
      vContainer = v;
    }).catch((e: any) => {
      console.log(String(e));
    });
  }
}

async function myApp() {
  await loadViz();
  if (vContainer) {
    let plugin = new InputControls(vContainer);
    plugin.fillControlStructure('/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report', (controls: string) => {
      let containerBox = document.getElementById('inputControls');

      if (containerBox) containerBox.innerHTML = '<span>' + JSON.stringify(controls) + '</span>';

    });
  } else {
    console.log('vcontainer failed to load');
  }
}

addEventListener("DOMContentLoaded", (event) => {
  myApp();
});


//
//vContainer && vContainer !== null && setPlugin(new InputControls(vContainer.v));
//
//if (plugin === undefined) return;
//plugin.fillControlStructure(reportUri, (controls: object) => {
//  setControlStruct(controls);
//});
//
