const Employee = require('../employee.model.js');
const expect = require('chai').expect;

describe('Employee', () => {

  it('should throw an error if missing arg', () => {
    const cases = [
      {},
      { firstName: 'Tom' },
      { lastName: 'Smith' },
      { department: 'IT' },
      { firstName: 'Tom', lastName: 'Smith' },
      { firstName: 'Tom', department: 'IT' },
      { lastName: 'Smith', department: 'IT' }
    ];

    for (let args of cases) {
      const emp = new Employee(args);

      emp.validate(err => {
        expect(err.errors.firstName || err.errors.lastName || err.errors.department).to.exist;
      });
    }
  });

  it('Should throw an error if firstName is not a string', () => {
    const cases = [{}, []];
    for (let firstName of cases) {
      const emp = new Employee({ firstName });

      emp.validate(err => {
        expect(err.errors.firstName).to.exist;
      })
    }
  });

  it('Should throw an error if lastName is not a string', () => {
    const cases = [{}, []];
    for (let lastName of cases) {
      const emp = new Employee({ lastName });

      emp.validate(err => {
        expect(err.errors.lastName).to.exist;
      })
    }

  });

  it('Should throw an error if department is not a string', () => {
    const cases = [{}, []];
    for (let department of cases) {
      const emp = new Employee({ department });

      emp.validate(err => {
        expect(err.errors.department).to.exist;
      })
    }

  });

  it('should not throw an error if args are correct', () => {
    const emp = new Employee({ firstName: 'John', lastName: 'Doe', department: 'IT' });

    emp.validate(err => {
      expect(err).to.not.exist;
    })
  })

});