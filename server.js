const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const pumpkinData = require('./data/pumpkin.json')
const broccoliData = require('./data/broccoli.json')
const nodeData = require('./data/nodejs.json')
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const randomindex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length)
    const randomDrinkRecipe = pumpkinData.Categories['Pumpkin Drinks'][randomindex]

    res.status(200).json({randomDrinkRecipe})
    
})

app.get('/pumpkin', (req, res) => {

 
    res.status(200).json({message: 'Got Pumpkin?'});
})

app.post('/pumpkin', (req, res) => {
    
    console.log(req.body)

    if(req.body.username !== 'admin' || req.body.password !== '1234') {
        res.status(200).json({broccoliData});
    
    }
    else {
        res.status(200).json({pumpkinData});
    
    }

    
})

app.post('/rke143', (req, res) => {
     
    console.log(req.body)

    if(req.body.name === 'rke' && req.body.code === '143') {
        res.status(200).json({nodeData});
    
    }
    else {
        res.status(200).json({message: 'Wrong credentials!'});
    
    }

})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})