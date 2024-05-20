import SQLite from 'react-native-sqlite-storage';


// const db = SQLite.openDatabase(
//   {
//     name: 'InventaireDB',
//     location: 'default',
//   },
//   () => {},
//   error => { console.log(error.message); },
// );
// const initDB = () => {
//     db.transaction(tx => {
//       tx.executeSql(
//         `CREATE TABLE IF NOT EXISTS entrepot (
//           code INTEGER PRIMARY KEY NOT NULL,
//           libelle TEXT NOT NULL
//         );`,
//         [],
//         () => { console.log('Table created successfully'); },
//         (_, error) => { console.log('Failed to create table', error); return false; }
//       );
//     });
//   };
  
//   export { db, initDB };


interface Database {
  transaction: (
    callback: (transaction: Transaction) => void
  ) => void;
}

interface Transaction {
  executeSql: (
    sqlStatement: string,
    params?: any[],
    success?: (transaction: Transaction, resultSet: ResultSet) => void,
    error?: (transaction: Transaction, error: Error) => boolean
  ) => void;
}

interface ResultSet {
  rowsAffected: number;
  insertId: number;
  rows: Array<any>;
}

const db: Database = SQLite.openDatabase(
  {
    name: 'InventaireDB',
    location: 'default',
  },
  () => {},
  (error :any ) => { console.log(error.message); },
);

const initDB = (): void => {
  db.transaction((tx: Transaction) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS entrepot (
        code INTEGER PRIMARY KEY NOT NULL,
        libelle TEXT NOT NULL
      );`,
      [],
      () => { console.log('Table created successfully'); },
      (_, error) => { console.log('Failed to create table', error); return false; }
    );
  });
};

export { db, initDB };