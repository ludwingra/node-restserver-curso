require('./config/config');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/user', (req, res) => {
    res.json('GET user');
});

app.get('/user/:id', (req, res) => {
    res.json(`GET user id: ${req.params.id}`)
});

app.post('/user', (req, res) => {
    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            ok: false,
            message: 'Name is required'
        });
    } else {
        res.status(201).json({
            person: body
        });
    }
});

app.put('/user/:id', (req, res) => {
    res.json(`PUT user id: ${req.params.id}`)
});

app.delete('/user/:id', (req, res) => {
    res.json(`DELETE user id: ${req.params.id}`)
});

app.listen(process.env.PORT, () => {
    console.log(`Listen on port ${process.env.PORT}`);
})