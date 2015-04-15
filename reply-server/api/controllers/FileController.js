/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	upload: function  (req, res) {

		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});


			//	Call to /upload via GET is error
	//  console.log(req.body)
		var uploadFile = req.file('uploadFile');
		//console.log(uploadFile);

		uploadFile.upload({ dirname: '../../assets/images'},function onUploadComplete (err, files) {
		//	Files will be uploaded to ./assets/images
		// Access it via localhost:1337/images/file-name


				if (err) return res.serverError(err);
				//	IF ERROR Return and send 500 error

				var _imageType = files[0]["type"];
				var _imageSize = files[0]["size"];
				var rawPath = files[0]["fd"];
				var path = rawPath.split("/");
				var url = "http://getreplynow.com/" + path[path.length - 2] + "/" +  path[path.length - 1];


			//	console.log(files);
				var jres = {
					caption:req.body.caption,
					lat: parseFloat(req.body.lat),
					long:parseFloat(req.body.long),
					imageURL: url,
					imageType: _imageType,
					imageSize: _imageSize
					};
				Feed.create(jres,function(err,result) {
					//console.log(err);
					if (err) {
						res.json({error:err})
					} else {
						res.json({success:200});
					}
				});







			});
	}
};
