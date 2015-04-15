/**
 * FeedController
 *
 * @description :: Server-side logic for managing feeds
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	local: function (req, res) {
		var zone = parseFloat(req.query.zone);
		var latitude = parseFloat(req.query.lat);
		var longitude = parseFloat(req.query.long);

		var zoneRange = zone * 0.01;
		var minLat = latitude - zoneRange;
		var maxLat = latitude + zoneRange;
		var minLong = longitude - zoneRange;
		var maxLong = longitude + zoneRange;



		console.log("searching for local posts around " + latitude + " : " + longitude);
		var results = Feed.find({$and: [{"lat": {$gte: parseFloat(minLat), $lte: parseFloat(maxLat)}},{"long": {$gte: parseFloat(minLong), $lte: parseFloat(maxLong)}}]}).sort({ $natural: -1 } ).exec(function(err, leads){

				if (leads) {
					res.send(leads);
					console.log(leads);
				}

		});
	}
};
