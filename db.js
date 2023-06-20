import * as SQLite from 'expo-sqlite'

// Open or create the database
const db = SQLite.openDatabase('testing.db');

export const scaffoldDB = () => {
    // Create the "user" table
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, bot_name TEXT, CSSRS INTEGER)',
            [],
            () => console.log('Table created successfully'),
            error => console.log('Error creating table: ', error)
        );
    });
    
    // // Insert random data into the "user" table
    // db.transaction(tx => {
    //     tx.executeSql(
    //         'INSERT INTO user (user_name, bot_name, CSSRS) VALUES (?, ?, ?)',
    //         ['John Doe', 'AI Bot', 5],
    //         (_, resultSet) => {
    //         if (resultSet.rowsAffected > 0) {
    //             console.log('Data inserted successfully');
    //         } else {
    //             console.log('No data inserted');
    //         }
    //         },
    //         error => console.log('Error inserting data: ', error)
    //     );
    //     tx.executeSql(
    //         'INSERT INTO user (user_name, bot_name, CSSRS) VALUES (?, ?, ?)',
    //         ['Jane Smith', 'Chat Bot', 4],
    //         (_, resultSet) => {
    //         if (resultSet.rowsAffected > 0) {
    //             console.log('Data inserted successfully');
    //         } else {
    //             console.log('No data inserted');
    //         }
    //         },
    //         error => console.log('Error inserting data: ', error)
    //     );
    // });
}

/**
 * Update the data with the user id 1. 
 * 
 * @param {Object} data 
 * @returns 
 */
export const updateUser = (data) => {
    const { user_name, bot_name, CSSRS } = data;
    
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE user SET user_name = ?, bot_name = ?, CSSRS = ? WHERE id = 1',
          [user_name, bot_name, CSSRS],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              resolve('Row updated successfully');
            } else {
              reject('Row not found');
            }
          },
          error => reject(error)
        );
      });
    });
};


/**
 * Get the user with the specified rowNumber (id)
 * 
 * @param {int} rowNumber 
 * @param {Function} callback 
 */
export const getUser = (rowNumber, callback) => {
    db.transaction(tx => {
        tx.executeSql(
        'SELECT * FROM user WHERE id = ?',
        [rowNumber],
        (_, { rows }) => {
            if (rows.length > 0) {
            const row = rows.item(0);
            callback(null, row);
            } else {
            callback('Row not found', null);
            }
        },
        error => callback(error, null)
        );
    });
};