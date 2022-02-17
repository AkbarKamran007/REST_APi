const SQL_CONFIGURATION = require("../../SQLConfig.json");
const SQL = require("mssql");

let connection: any = null;
const getSqlConnection = () => {
  try {
    return new Promise((resolve, reject) => {
      if (connection) {
        resolve(connection);
      } else {
        SQL.connect(SQL_CONFIGURATION)
          .then((pool: any) => {
            connection = pool;
            console.log("New connection in connection.ts");

            resolve(connection);
          })
          .catch((error: any) => {
            reject(error);
          });
      }
    });
  } catch (err) {
    console.log("error while connecting db", err);
    return err;
  }
};
const closeConnection = () => {
  if (connection) {
    connection.close();
    connection = null;

    console.log("Connection Close");
  }
};

module.exports = { getSqlConnection, closeConnection };
