const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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


// Login Route for MySQL
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log("Login attempt received for:", email);

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        // Check if user exists
        if (results.length === 0) {
            console.log("Login Failed: User not found");
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const user = results[0];

        // Match password (using plain text since your signup route saves plain text)
        if (password !== user.password) {
            console.log("Login Failed: Incorrect password");
            return res.status(400).json({ success: false, message: 'Invalid password' });
        }

        // Create token
        try {
            const token = jwt.sign(
                { id: user.id, email: user.email },
                'your_super_secret_key_123', // Hardcoded secret for stability
                { expiresIn: '1h' }
            );

            console.log("Login Successful for:", email);
            res.json({
                success: true,
                token: token,
                user: { id: user.id, email: user.email, username: user.username }
            });
        } catch (jwtErr) {
            console.error("JWT Error:", jwtErr);
            res.status(500).json({ success: false, message: 'Error generating token' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});