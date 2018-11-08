const KaidTable = window.KaidTable;
const faker = window.faker;

const container = document.querySelector('#kaid-table');
const columns = [{
  name: 'id',
  type: Number
}, {
  name: 'full_name',
  type: String
}, {
  name: 'email',
  type: String
}, {
  name: 'address',
  type: String
}, {
  name: 'phone',
  type: String
}];

const numRows = 1000;
const rows = [...Array(numRows).keys()].map(idx => {
  const id = idx + 1;
  const name = faker.name.findName();
  const email = faker.internet.email();
  const address = faker.address.streetAddress();
  const phone = faker.phone.phoneNumber();
  return [id, name, email, address, phone];
});

const options = {
  columns,
  rows
};

new KaidTable(container, options);