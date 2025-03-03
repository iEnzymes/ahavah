<div style="text-align:center;">
  <img src="https://api.iconify.design/logos:angular-icon.svg" alt="Angular brand" width="100" height="100"/>
</div>

<h1 style="text-align:center;">Angular Material Template</h1>

## Features

- [Angular 17](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [Jest](https://jestjs.io/)

## Prerequisite

- Node (^18.13.0 || ^20.9.0): https://nodejs.org/en
- Docker (optional): https://www.docker.com/

## Start Development

#### Clone the project (note: use **git bash** to run this command)

`git clone http://git.convergeict.com/firing-squad/ahavah.git && cd ./ahavah`

#### Install dependencies

`npm install`

#### Running the server

`npm run dev`

## Docker (Optional)

#### Create an image

`docker build -t ahavah -f ./dockerfiles/Dockerfile.local .`

#### Run the service

- Git Bash

  `docker run -dp 80:80 --restart always --name client-service -v $(pwd -W):/usr/src/app ahavah`

- Linux

  `docker run -dp 80:80 --restart always --name client-service -v $(pwd):/usr/src/app ahavah`

- Powershell

  `docker run -dp 80:80 --restart always --name client-service -v ${pwd}:/usr/src/app ahavah`

## Commands

| Command         | Description                                              | npm                     |
| --------------- | -------------------------------------------------------- | ----------------------- |
| `dev`           | Starts the development server                            | `npm run dev`           |
| `build`         | Builds the production code                               | `npm run build`         |
| `watch`         | Builds the production code and watches for changes       | `npm run watch`         |
| `lint`          | Runs the linter                                          | `npm run lint`          |
| `lint:fix`      | Runs the linter and fixes any linting errors             | `npm run lint:fix`      |
| `stylelint`     | Runs the style linter                                    | `npm run stylelint`     |
| `stylelint:fix` | Runs the style linter and fixes any style linting errors | `npm run stylelint:fix` |
