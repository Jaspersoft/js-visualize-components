# Jaspersoft Visualize Components

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
yarn workspace jv-ui-components run test
``` 

## Test Application
A test application is included in `packages/test-app` it can be used to view samples of the packages.
To run it as a web app, run `yarn start` and follow the instructions on the console to access the page in a browser.

## Styles in Dev Mode
In order to hot reload the styles in dev mode, you need to follow the steps from [Set up](#set-up) and [Test Application](#test-application) sections,
after that, run the following command in the root of the project on a separate terminal window:
```shell script
yarn start:styles:dev
``` 
**Note**: keep both the `start` and `start:styles:dev` commands running in separate terminal windows.

## Contributing
It is recommended any new developer take a good look at [CONTRIBUTING.md](./readmes/CONTRIBUTING.md) for more information on how to
work with new features for this project.
