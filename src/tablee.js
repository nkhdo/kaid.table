import Snabbdom from 'snabbdom-pragma'; // eslint-disable-line
import './tablee.scss';
import { isElement, emptyElement } from './utils';
import { patch } from './dom';
class Tablee {
  constructor(container, { columns = null, rows = null } = {}) {
    this._name = 'Tablee';
    this.container = container;
    this.columns = columns;
    this.rows = rows;
    this.table = document.createElement('table');

    this.validate();
    emptyElement(this.container);
    this.container.append(this.table);
    this.render();
  }

  name() {
    return this._name;
  }

  validate() {
    if (!isElement(this.container)) {
      throw new Error('Container must be a DOM element');
    }
    if (!this.columns) {
      throw new Error('Missing required option: columns');
    }
    if (!this.rows) {
      throw new Error('Missing required option: rows');
    }
  }

  render() {
    const table =
      <table className='kdtbl-table'>
        <thead className='kdtbl-thead'>
          <tr className='kdtbl-tr'>
            {this.columns.map(column => <th className='kdtbl-th kdtbl-cell'>{column.name}</th>)}
          </tr>
        </thead>
        <tbody className='kdtbl-tbody'>
          {this.rows.map(row =>
            <tr className='kdtbl-tr'>
              {row.map(cell => <td className='kdtbl-td kdtbl-cell'>{cell}</td>)}
            </tr>
          )}
        </tbody>
      </table>;

    patch(this.table, table);
  }
}

export default Tablee;
