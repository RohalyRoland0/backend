const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`A szerver fut.`);
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rock_zenekarok_70s",
    port: 3307
});

connection.connect((err) => {
    if (err) {
      console.error("Hiba", err);
      return;
    }
    console.log("Siker");
  });

app.get('/api/zenekarok', (req, res) => {
    connection.query(
        'SELECT * FROM zenekarok',
        (err, results) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.json(results);
        }
    );
});
