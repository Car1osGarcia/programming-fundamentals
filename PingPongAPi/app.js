const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const router =express.Router();

app.use(express.json());
app.use(cors());
app.use('/api/buba-gump',router);


router.get('/ping', (req, res) => {
    res.status(201).json({
        msg: 'pong',
    });
})

router.get('/pong', (req, res) => {
    res.status(201).json({
        msg: 'ping',
    });
})

app.listen(port, () => {
  console.log(`Ping-pong API listening on port ${port}`)
})