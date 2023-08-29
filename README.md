# federated-library-from-cdn

## Basic example where two applications share the same library served from a CDN.

## Usage
### Install packages 
```
npm i
```
### Run dev server for external library
```
npm run dev
```
### Create library federation bundle (remoteEntry.js), deploy this file on your cdn of choice
```
npm run build
```
### Insert library bundle endpoint into the REMOTE_URL env variable and serve the two apps to see the fedarated component from the cdn
```
npm run start
```
