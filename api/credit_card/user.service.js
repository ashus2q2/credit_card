const pool = require("../../config/database.js");

module.exports = {

  //add a query
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO credit_card_query(query_id, timestamp) VALUES(?,?);`,
      [
        data.query_id, 
        data.timestamp
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  //to get all the queries of a user
  getUserByUserId: (user_id, callBack) => {
    pool.query(
      `select user_id, query_id, timestamp from credit_card_query where user_id = ?;`,
      [user_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  // getUsers: callBack => {
  //   pool.query(
  //     `select user_id, query_id, timestamp from credit_card_query`,
  //     [],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },

  
  //update query of user
  updateUser: (data, callBack) => {
    pool.query(
      `update credit_card_query set user_id=?, query_id=?, timestamp=? where user_id = ?`,
      [data.user_id, data.query_id, data.timestamp],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  //delete query of user
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from credit_card_query where user_id = ?`,
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
