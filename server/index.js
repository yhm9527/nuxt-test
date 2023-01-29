const app = require('express')();

import db from './mysql/index';

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/getPostList', (req, res) => {

    db.connect()
    db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
    })
    db.end()

    res.send('getPostList!')
})

module.exports = {
    path: 'api',
    handler: app
}