const connection = require('../db/connection');
const Fitdo = require('../entity/Fitdo');

exports.getFitdo = async (member_id) => {
    return await new Promise((resolve, reject) => {
        connection((conn) => {
            conn.query(
                `SELECT * FROM fitdo WHERE member_id = '${member_id}'`,
                (err, rows) => {
                    if(err) reject(err);
                    let fitdos = rows.map(row =>new Fitdo(row));
                    resolve(fitdos);
                // resolve(new Fitdo(rows[0]));
            })
        })
    });
}

exports.deleteFitdo = async (title) => {
    return await new Promise((resolve, reject) => {
        connection((conn) => {
            conn.query(
                `DELETE FROM fitdo WHERE title = '${title}'`,
                (err, rows) => {
                    if(err) reject(err);
                    resolve(rows);
                })
        })
    });
}

exports.updateFitdo = async () => {
    return await new Promise((resolve, reject) => {
        connection((conn) => {
            conn.query(
                `UPDATE fitdo SET completed = true WHERE id = ${''}`,
            )
        })
    })
}