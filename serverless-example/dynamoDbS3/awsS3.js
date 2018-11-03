const fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var bucketName = process.env.BUCKET_NAME;

// Save File to s3
var putFile = (folder, key, data) => {
	var newKey = `${folder}/${key}.txt`;

	return new Promise((result, reject) => {
		var params = {
			Bucket: bucketName,
			Key: newKey,
			Body: data
		};
		s3.putObject(params, function(err, data) {
			if (err) reject(err);
			else result(data);
		});
	});
};

module.exports = {
	putFile
};
