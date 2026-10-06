const express = require("express");
const app = express();

const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: "3",
      name: "Sam Johnson",
      email: "sam.johnson@example.com",
    },
  ];

app.use(express.json());

app.get("/api/users", (req, res) =>{
    res.status(200).json(users)
  })
  
app.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === req.params.id);
    if (!user) {
        return res.json({
            message: "Nem található"
        })
    }
    res.status(200).json(user)
  });

app.listen(3000, () => {
  console.log("A szerver fut");
});