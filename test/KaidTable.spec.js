import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai from 'chai';
import Tablee from '../src';

const { expect } = chai;

chai.use(sinonChai);

let table;

describe('Tablee', () => {
  // beforeEach(() => table = new Tablee());

  // it('should get the library\'s name', () => {
  //   const spy = sinon.spy(table, 'name');
  //   const name = table.name();
  //   expect(name).to.eql('kaid.table');
  //   spy.restore();
  //   expect(spy).to.have.been.called;
  // });
});
