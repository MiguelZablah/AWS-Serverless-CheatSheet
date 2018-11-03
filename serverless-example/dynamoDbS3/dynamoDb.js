'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
	TableName: process.env.DYNAMODB_TABLE
};

const scanDynamo = () => {
	return new Promise((results, reject) => {	
		dynamoDb.scan(params, (error, result) => {
			if (error) reject(error);
			results(JSON.stringify(result.Items));
		});
	});
};


module.exports = {
	scanDynamo
};
