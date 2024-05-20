import db from './db';

class EntrepotRepository {
  create(entrepot) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO entrepot (code, libelle) VALUES (?, ?);',
          [entrepot.code, entrepot.libelle],
          (_, { insertId, rows }) => {
            resolve(insertId);
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  }

  read(code) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM entrepot WHERE code = ?;',
          [code],
          (_, { rows }) => {
            if (rows.length > 0) {
              resolve(rows.item(0));
            } else {
              resolve(null);
            }
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  }

    readAll() {
        return new Promise((resolve, reject) => {
      
            db.transaction(tx => {
                tx.executeSql(
                'SELECT * FROM entrepot;',
                [],
                (_, { rows }) => {
                    resolve(rows._array);
                },
                (_, error) => {
                    reject(error);
                    return true;
                }
                );
            });
            });
    };



  update(entrepot) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE entrepot SET libelle = ? WHERE code = ?;',
          [entrepot.libelle, entrepot.code],
          (_, { rowsAffected }) => {
            resolve(rowsAffected > 0);
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  }

  delete(code) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM entrepot WHERE code = ?;',
          [code],
          (_, { rowsAffected }) => {
            resolve(rowsAffected > 0);
          },
          (_, error) => {
            reject(error);
            return true;
          }
        );
      });
    });
  }
}