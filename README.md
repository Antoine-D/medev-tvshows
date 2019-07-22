## Project Elastik Search 4IW1

## How to launch the project ?

### ELK
To launch the ELK part : 
```
cd docker-elk
docker-compose up
```

Then you should be having access to kibana : http://localhost:5600

### back part
```
cd medev-shows/tv-back
yarn
yarn dev
```

Then you should be having access to the project : http://localhost:3010

### Call API
```
cd medev-shows/tv-back
node get-all-shows.js
node get-most-populars.js
```
