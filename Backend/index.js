const express = require('express');
const cors = require('cors');
const mysql =  require('mysql');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user:   'root',
    password: '',
    database: 'sims'
}
);
db.connect((err) => {
    if(err) {
        console.error('Error connecting to database:', err);
        return;
    }else {
        console.log('Connected to database');
    }   
});

//Insert middleware and routes here
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';  
    db.query(sql, [username, email, password], (err, results) => {
        if(err) {
            console.error('Error during login:', err); 
            res.status(500).send('Server error');
        }else {
            res.status(200).json({ message:"login successfull"});  
        }
    }); 
});

//Insert into StockIn table
app.post('/stockin', (req, res) => {
    const { StockInName, StockInQuantity, StockInDate } = req.body;
    const sql = 'INSERT INTO stock_in (StockInName, StockInQuantity, StockInDate) VALUES (?, ?, ?)';  
    db.query(sql, [StockInName, StockInQuantity, StockInDate], (err, results) => {
        if(err) {
            console.error('Error during login:', err); 
            res.status(500).send('Server error');
        }else {
            res.status(200).json({ message:"Product added successfully" }); 
        }
    }); 
});

// Insert Into Spare_part table
app.post('/spare_part', (req, res) => {
    const { Name, Category, Quantity, UnitPrice, TotalPrice } = req.body;
    const sql = 'INSERT INTO spare_part (Name, Category, Quantity, UnitPrice, TotalPrice) VALUES (?, ?, ? ,?, ?)';  
    db.query(sql, [Name, Category, Quantity, UnitPrice, TotalPrice], (err, results) => {
        if(err) {
            console.error('Error during login:', err); 
            res.status(500).send('Server error');
        }else {
            res.status(200).json({ message:"Spare part added successfully" }); 
        }
    }); 
});



//Insert into StockOut table
app.post('/stockout', (req, res) => {
    const {  Name, StockInQuantity, StockOutQuantity,StockOutUnitPrice,StockOutTotalPrice, StockOutDate } = req.body;
    const sql = 'INSERT INTO stock_out ( Name, StockInQuantity, StockOutQuantity,StockOutUnitPrice,StockOutTotalPrice, StockOutDate) VALUES (?, ?, ?, ?, ?, ?)';          
    db.query(sql, [ Name, StockInQuantity, StockOutQuantity,StockOutUnitPrice,StockOutTotalPrice, StockOutDate], (err, results) => {
        if(err) {
            console.error('Error during login:', err);
            res.status(500).send('Server error');
        }else {
            res.status(200).json({ message:"Stock out recorded successfully" });
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});