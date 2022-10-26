const express = require('express')
const app = express()
const port = 3000

const router =express.Router();

app.use(express.json());
app.use('/api/delay',router);


router.get('/', (req, res) => {


    setTimeout(function() {
        res.end(` Hello after 1000 miliseconds`);
    }, 1000);
    
})

router.get('/:delay', (req, res) => {

    const delay= req.params.delay;

    setTimeout(function() {
        res.end(` Hello after ${delay} miliseconds`);
    }, delay);
    
})


app.listen(port, () => {
  console.log(`Delay API listening on port ${port}`)
})