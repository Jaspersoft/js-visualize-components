# JS Visualize Plugins

## Set up
- install [nodejs](https://nodejs.org). Build tested on version 20.13.1, but it might also work on version 16.x.x and up
- install [yarn](https://yarnpkg.com/getting-started/install). Build tested on version 1.22.22. _You'll need the workspaces feature from yarn_

- run the following commands:
```shell script
yarn install
yarn workspaces run build
``` 

## Testing
To run tests for all packages, use workspaces: `yarn workspaces run test`
Alternatively, you can run them from within the working directory of each package using `yarn test`

## Test Application
A test application is included in `packages/test-app` it can be used to view samples of the packages. To run it as a web app, go into the `packages/test-app` directory and run `yarn start` and follow the instructions to access the page in a browser.