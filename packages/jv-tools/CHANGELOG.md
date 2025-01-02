# CHANGELOG

## Date: Jan 2nd, 2025.

| Change                                                   | v0.1.9                                                                                                                | v0.1.10                                                                                                                                | Notes                                                                                                                                |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Initialization of `useVisualize` custom hook has changed | Previously, you initialized it like this: <br/> `useVisualize(uri, authCredentials, {errorCallback: (error) => {}});` | Now, you initialize it like this: <br/> `useVisualize({server: "", visualizePath:"", auth: {...}}, { errorCallback: (error) => {} });` | The first and second parameters from version `0.1.9` are now combined into an object. You only need 2 parameters in the new version. |
