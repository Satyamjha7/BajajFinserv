const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// POST Endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    // Custom Info
    const user_id = "22BCS16356";
    const email = "22BCS16356@cuchd.in";
    const roll_number = "22BCS16356";

    // Input Validation
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id,
            email,
            roll_number,
            numbers: [],
            alphabets: [],
            highest_alphabet: []
        });
    }

    // Separate Numbers and Alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop().toUpperCase()] : [];

    // Send Response
    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
