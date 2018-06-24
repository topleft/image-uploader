/*jshint -W117*/
/*jshint -W079*/
/*jshint -W030*/
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiAsPromised);
chai.use(chaiHttp);
const s3Helpers = require('../../src/server/helpers/s3.js');

module.exports = tests = () => {
  describe('s3 helpers', () => {

    describe('listAllFromBucket', () => {

      it('should error if bucket is NOT passed', () => {
        return s3Helpers.listAllFromBucket().should.be.rejected;
      });

      it('should error if bucket does NOT exist', () => {
        return s3Helpers.listAllFromBucket('no-bucket').should.be.rejected;
      });

      it('should list all items in a bucket', () => {

        result = s3Helpers.listAllFromBucket('image-processing-dev')
        return result.should.eventually.have.property('Contents').length(1);

      });

    });
  });
}
