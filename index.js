/**
 * Converts Degree to Radians
 * @param  {Number} deg [description]
 * @return {Numer}     in radians
 *
 * @private
 */
function deg2rad(deg) {
    return deg * Math.PI / 180
}


/**
 * Calculates Distance between two points
 * @param  {Number} lat1 lattitude of first location
 * @param  {Number} lon1 longitude of first location
 * @param  {Number} lat2 lattitude of second location
 * @param  {Number} lon2 longitude of second location
 * @return {Number}      Distance in kms
 */
function distance(lat1, lon1, lat2, lon2) {
    Array.prototype.slice.call(arguments).forEach(function(arg){
        if (arg.constructor != Number) {
            throw new Error("Distance() accepts only Numbers")
        }
    })
    if (arguments.length != 4) {
        throw new Error("Please provide two pairs of latlng coordinates")
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

module.exports = distance;
