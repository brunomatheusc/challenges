import crypto from 'crypto';
import OAuth from 'oauth-1.0a';

const oauth = OAuth({
    consumer: { key: '<your consumer key>', secret: '<your consumer secret>' },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
})