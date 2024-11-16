import { expect } from 'chai';
import supertest from 'supertest';

const request = supertest('http://localhost:8080/api/pets');

describe('Pet Integration Test', () => {
  let testPet;
  it('[GET] /api/pets - Return Pet Array', async () => {
    const { status, body } = await request.get('/');
    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an('array');
  });

  it('[POST] /api/pets - Create a new Pet', async () => {
    const newPet = {
      name: 'Lilia',
      specie: 'snake',
      birthDate: '15/02/2024',
      image: 'https://avatars.githubusercontent.com/u/15501910',
    };
    const { status, body } = await request.post('/').send(newPet);
    testPet = body.payload;
    expect(status).to.be.equal(201);
    expect(body.payload).to.have.property('_id');
    expect(body.payload).to.be.an('object');
    expect(body.payload.name).to.be.equal('Lilia');
    expect(body.payload.specie).to.be.equal('snake');
    expect(body.payload.adopted).to.be.equal(false);
  });

  it('[PUT] /api/pets/:pid - Update a Pet', async () => {
    const newPet = {
      specie: 'snake',
    };

    const { status, body } = await request.put(`/${testPet._id}`).send(newPet);

    expect(status).to.be.equal(200);
    expect(body.payload).to.be.an('object');
    expect(body.payload.name).to.be.equal('Lilia');
    expect(body.payload.specie).to.be.equal('snake');
    expect(body.payload.adopted).to.be.equal(false);
  });

  it('[DELETE] /api/pets/:pid - Delete a Pet', async () => {
    const { status, body } = await request.delete(`/${testPet._id}`);

    expect(status).to.be.equal(200);
    expect(body.payload).to.be.equal('Deleted Correctly');
  });
});
