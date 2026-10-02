const express = require('express');
const app = express();
const port = 3000;
const mysql = require("mysql2")

app.use(express.json());

app.listen(port, () => {
    console.log(`A szerver fut.`);
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "diak_nyilvantartas",
    port: 3307
});

connection.connect((err) => {
    if (err) {
      console.error("Hiba", err);
      return;
    }
    console.log("Siker");
  });

  app.get('/', (req, res) => {
    res.json({
        uzenet: 'Kezdő Iskolai REST API fut',
    });
  });
  
app.get('/api/osztalyok', (req, res) => {
    connection.query(
        'SELECT * FROM osztalyok',
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(results);
        }
    );
});

app.get('/api/diakok', (req, res) => {
    connection.query(
        'SELECT * FROM diakok',
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(results);
        }
    );
});
