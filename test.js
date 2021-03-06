var should = require("chai").should()
var distance = require("./index")

describe("#GeoDistance", () => {
  it("should match the result provided by google maps", () => {
    var lat1 = 12.945438
    var lon1 = 77.606741
    var lat2 = 12.945103
    var lon2 = 77.635065

    parseFloat(distance(lat1, lon1, lat2, lon2)).toFixed(2).should.be.eql('3.07')
  })
  it("should throw error if the arguments is not a number", () => {
    distance.bind({}, "asdf").should.throw(Error, "Distance() accepts only Numbers")
  })
  it("should throw error if wrong number of arguments is passed", () => {
    distance.bind({}, 12, 12, 12, 12, 12).should.throw(Error, "Please provide two pairs of latlng coordinates")
  })
})
