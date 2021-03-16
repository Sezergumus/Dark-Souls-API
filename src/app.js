const express = require('express')
const hbs=  require('hbs')
const path = require('path')
const weaponsData = require('./weapons.json')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static('public'))

app.get('', (req, res) => {
    res.render('index', {
        title: "Dark Souls API",
        name: "Sezer Gümüş"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Dark Souls API",
        name: "Sezer Gümüş"
    })
})

app.get('/docs', (req, res) => {
    res.render('docs', {
        title: "Documentation",
        name: "Sezer Gümüş"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact",
        name: "Sezer Gümüş"
    })
})

app.get('/ds1-weapons', (req, res) => {
    res.send([
        weaponsData
    ])
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on port 3000.')
})
