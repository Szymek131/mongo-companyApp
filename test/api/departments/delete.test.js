const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server.js');
const Department = require('../../../models/department.model.js');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('DELETE /api/departments', () => {

  before(async () => {
    const testDepOne = new Department({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
    await testDepOne.save();

    const testDepTwo = new Department({ _id: '5d9f1159f81ce8d1ef2bee48', name: 'Department #2' });
    await testDepTwo.save();
  });

  after(async () => {
    await Department.deleteMany();
  });

  it('/:id should delete one department by :id ', async () => {

    const res = await request(server).delete('/api/departments/5d9f1140f10a81216cfd4408');
    expect(res.status).to.be.equal(200);
    expect(res.body.message).to.be.equal('Deleted');
    expect(res.body).to.be.not.null;

  });

});