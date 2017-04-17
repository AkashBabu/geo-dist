# geo-dist
Nodejs lib to calculate Geo-distance between two points

### Installation
> npm i geo-dist -S

### Usage
```javascript
var lat1 = 12.945438
var lon1 = 77.606741
var lat2 = 12.945103
var lon2 = 77.635065

parseFloat(distance(lat1, lon1, lat2, lon2)).toFixed(2).should.be.eql('3.07')
```

### Test
> npm test

### License
MIT
