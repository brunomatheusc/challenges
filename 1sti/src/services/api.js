import axios from'axios';
import OAuth from'oauth-1.0a'
import B64Encoder from 'crypto-js/enc-base64';
import hmacSHA1 from 'crypto-js/hmac-sha1';

const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
const app_id = 'CGjhEa4c';
const consumer_key = 'dj0yJmk9SzRoTXR3WnptNE1uJmQ9WVdrOVEwZHFhRVZoTkdNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWJk';
const consumer_secret = '03e4768cb0186e5a98a7624fa1cba5e6ef054c39';

function hash_function_sha1(base_string, key) {
  	return hmacSHA1(base_string, key).toString(B64Encoder);
}

function buildRequestHeaders(url, method, data){
	const oauth = new OAuth({
		consumer: {key: consumer_key, secret: consumer_secret},
		signature_method: 'HMAC-SHA1',
		hash_function: hash_function_sha1,
	});

	const request_data = { url, method, data };

	return oauth.toHeader(oauth.authorize(request_data));
}

export async function get(opts){
	const params = {...opts, u: 'c', format: 'json'};

	const config = {
		headers: {
			...buildRequestHeaders(url, 'GET', params),
			'X-Yahoo-App-Id': app_id,
		},
		params,
	};

	const {data} = await axios.get(url, config);

	if (data?.location?.woeid) {
		return data;
	} else {
		throw new Error('Localidade não encontrada');
	}
}