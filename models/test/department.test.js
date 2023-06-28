const Department = require('../department.model.js');
const expect = require('chai').expect;

describe('Department', () => {

  it('should throw an error if no "name" arg', () => {
    const dep = new Department({}); // create new Department, but don't set `name` attr value

    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });

  });

  it('should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });

    }

  });

  it('should not throw an error if "name" is okay', () => {

    const cases = ['company', 'companyApp', 'mongoCompanyApp'];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err).to.not.exist;
      })

    }

  });

  it('should throw an error if "name" length is more than 20 or less than 5', () => {

    const cases = ['five', 'konstantynopolitanczykowna'];
    for (let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });

    }

  });

});