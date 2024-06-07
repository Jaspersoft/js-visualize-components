# JS Visualize Plugins

## Set up
- install [NodeJS](https://nodejs.org). Build tested on version 20.13.1, but it might also work on version 16.x.x and up
- install [yarn](https://yarnpkg.com/getting-started/install). Build tested on version 1.22.22. _You'll need the workspaces feature from yarn_

- run the following commands:
```shell script
yarn install
yarn build
``` 

## Testing
To run tests for all packages, use: `yarn test`

Alternatively, you can run them from within the workspace of each package using `yarn workspace <workspace_name> test`

E.g.: 
```shell script
yarn workspace jrs-ui-components run test
``` 

## Test Application
A test application is included in `packages/test-app` it can be used to view samples of the packages.
To run it as a web app, run `yarn start` and follow the instructions on the console to access the page in a browser.