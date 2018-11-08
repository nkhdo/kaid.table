import Snabbdom from 'snabbdom-pragma'; // eslint-disable-line
import { emptyElement } from './utils';
import { patch } from './dom';
class KaidTable {
  constructor(container, { columns = null, rows = null } = {}) {
    this._name = 'KaidTable';
    this.container = container;
    this.columns = columns;
    this.rows = rows;

    this.validate();
    emptyElement(this.container);
    this.render();
  }

  name() {
    return this._name;
  }

  validate() {
    if (!this.columns) {
      throw new Error('Missing required option: columns');
    }
    if (!this.rows) {
      throw new Error('Missing required option: rows');
    }
  }

  render() {
    const table = <table>
      <thead>
        <tr>
          {this.columns.map(column => <th>{column.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {this.rows.map(row =>
          <tr>
            {row.map(cell => <td>{cell}</td>)}
          </tr>
        )}
      </tbody>
    </table>;

    patch(this.container, table);
  }
}

export default KaidTable;
