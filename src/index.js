import sum from './sum';

const log = console.log; // eslint-disable-line no-console

const dbConfig = {
  server: 'localhost',
  isOnline: true
};

log(`Results: ${sum(1, 2)}`);

const dbCon = new Promise((resolve, reject) => {
  log(`Try connecting to database: ${dbConfig.server}`);
  dbConfig.isOnline
    ? resolve('online')
    : reject('offline');
}).then(data => log(`Promise resolved: ${data}`)).catch(err => log(`Promise rejected: ${err.toString()}`));

log(`Promise Info: ${dbCon}`);
