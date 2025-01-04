# CHANGELOG

## Date: Jan 2nd, 2025.

| Change                                                   | v0.1.9                                                                                                                | v0.1.10                                                                                                                                | Notes                                                                                                                                |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Initialization of `useVisualize` custom hook has changed | Previously, you initialized it like this: <br/> `useVisualize(uri, authCredentials, {errorCallback: (error) => {}});` | Now, you initialize it like this: <br/> `useVisualize({server: "", visualizePath:"", auth: {...}}, { errorCallback: (error) => {} });` | The first and second parameters from version `0.1.9` are now combined into an object. You only need 2 parameters in the new version. |

### Sample values for

- **server**: `https://mobiledemo.jaspersoft.com/jasperserver-pro`
  - This is the URL where your JRS server is located.
- **visualizePath**: `https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js`
  - This is the URL to download VisualizeJS.
- **auth**: `{
name: "your_user",
password: "your_user",
organization: "your_organization",
}`
  - These are the credentials Visualize will use to access resources on the JRS server.
- **publicPath**: `https://somehost.com/visualize/`
  - If `visualizePath` points to a CDN server, you should also set `publicPath`. That's why this is optional, but
    if not set, `jv-tools` won't know where to load the chunks from.
