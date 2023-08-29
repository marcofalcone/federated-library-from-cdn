# federated-library-from-cdn
![Screenshot_2023-08-29_13-57-10](https://github.com/marcofalcone/federated-library-from-cdn/assets/61291681/6347c456-3034-478a-8a88-ca3c1713f24e)

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
