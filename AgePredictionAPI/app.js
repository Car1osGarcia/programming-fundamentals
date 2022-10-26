const express = require('express')
const app = express()
const port = 3000

const router =express.Router();

app.use(express.json());
app.use('/api/age',router);


router.get('/', (req, res) => {

    res.status(401).json({
        msg: 'Missing parameter "name" was expected.',
    });
    
})

router.get('/:name', (req, res) => {

    const name= req.params.name;
    const age = Math.floor(Math.random() * 100);

    res.status(201).json({
        name: name,
        age: age,
        days: age * 365
    });
    
})


app.listen(port, () => {
  console.log(`Age prediction API listening on port ${port}`)
})