var moment = require('moment');
const awsS3 = require('./awsS3');
const { scanDynamo } = require('./dynamoDb');

/* eslint-disable no-console */

exports.saveS3 = async (event, context, callback) => {
	var getDate = moment().startOf('hour').subtract(1, 'hour');
	var date = getDate.format('YYYY-MM-DD');
	var hour = getDate.format('HH:mm:ss');

	try {
		var resTxt = await scanDynamo();
		var s3Res = await awsS3.putFile(date, hour, resTxt);
		console.log(s3Res);

		callback(null, JSON.stringify(s3Res));
	} catch (error) {
		callback(error);
	}
};
