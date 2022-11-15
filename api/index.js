const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
const {config} = require('./config');

const { 
    PORT,
    AUTH_JWT_SECRET 
} = config;


// Middlewares
app.use(express.json())


app.get('/api/auth/token', (req, res) => {
  const { email, username, name } = req.body;
  const token = jwt.sign({ sub: username, email, name}, AUTH_JWT_SECRET || ""); 
  res.json({ access_token: token });
});

app.get('/api/auth/verify', (req, res, next) => {
    const { access_token } = req.query;
    try {
        const decoded = jwt.verify(access_token, AUTH_JWT_SECRET);
        res.json({message: "The access token is valid", username: decoded.sub});
    }catch(err){
        next(err);
    }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})