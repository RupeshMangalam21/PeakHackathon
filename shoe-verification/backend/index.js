// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Web3 = require('web3');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

app.post('/registerShoe', async (req, res) => {
    const { brand, model, size, images } = req.body;
    const hash = web3.utils.sha3(JSON.stringify({ brand, model, size, images }));
    res.send({ success: true, hash });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
