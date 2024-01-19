const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// const SQL_TEMPLATE = `insert into dress_user_record(dress_up_id, uid, status, buy_time, used, admin_id, expire_time, update_time, create_time) values `;

console.log(`Current directory: ${path.resolve()}`);

// Ensure sql_output.sql is new every time the code is run
fs.writeFileSync('./sql_output.sql', '');

// Mapping for the second column values
const mapping = { '1': 6, '2': 7, '3': 8, '4': 9, '5': 10 };

let values = [];

fs.createReadStream('prod_vip.csv')
  .pipe(csv({
    headers: false
  }))
  .on('data', (row) => {
    const mappedValue = mapping[row[1]];
    const value = `(${mappedValue}, ${row[0]}, 1, '${row[3]}', 0, null, '${row[2]}', now(), now())`;
    values.push(value);
  })
  .on('end', () => {
    // const sql = SQL_TEMPLATE + values.join(', ');
    fs.writeFileSync('./sql_output.sql', values.join(',\n') + ';\n');
    console.log('CSV file processed successfully.');
  });