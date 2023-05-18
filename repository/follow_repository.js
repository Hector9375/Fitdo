const connection = require('../db/connection');

async function followUser(followingUserId, foollowerUserId) {
    const createdAt = new Date().toISOString();

    let sql = `INSERT INTO follow (following_user_id, follower_user_id, createAt)
    VALUES(?, ?, ?)`;
    try {
        await new Promise((resolve, reject) => {
            connection.query(sql,[followingUserId, foollowerUserId, createdAt], (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        console.log('Successfully followed the user');
    } catch (error) {
        console.error('Error following the user:', error);
    }
}

module.exports = {
    followUser
};