var AWS = require('aws-sdk');

module.exports = {
  listAllFromBucket: (bucket) => {
    s3 = new AWS.S3();
    return new Promise((resolve, reject) => {
      if (!bucket) {
        let err = new Error('Must pass a bucket name');
        error.status = 400;
        reject(err);
      }
      const params = {
        Bucket: bucket
      }
      s3.listObjects(params, (err, result) => {
        err && reject(err);
        resolve(result);
      });
    });
    return null;
  }
}
