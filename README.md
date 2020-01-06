# Image Search React

A ReactJS application to retrieve images from (many) images API endpoints

## Overview

This application helps user to retrieve images from the Giphy Image API endpoints by using keywords.

- The application will fetch 8 images each time.
- More images (8 images per fetch) can be retrieved by clicking on the "Fetch More" button.
- Users can mark or unmark an image as favourite by clicking on the heart icon on each image.
- Users can check favourite images by changing to the favourites page
- Removing an image from the favourites page is also the same as in the main page. Users just need to click on the heart icon to do so. Images will be removed in the next time we change to the favourite page.
- The IDs of favourite images are kept in the local storage of a browser, so that we can see them again in the future in the same browser.

## Setup

This project is built by using Reactjs, Webpack and Babel.

### Install dependencies

Change working directory in the terminal (MacOS) or CMD (Windows) to this project main folder. And install the dependencies by running
below command

```
npm install
```

## Run the application

With Babel and Webpack, we can modify the running script, and modify the project flexibly.
In the same Terminal/CMD, run the command below to start the application in development mode with hot reloading

```
npm start
```

To build the project to have static deployable files, run below command

```
npm run build
```

The built files will be generated in ./dist folder

The application can be accessed at:
http://localhost:3000/

## Deploy the application

The online running version of this application can be found here:
https://phantran.github.io/image-search/
