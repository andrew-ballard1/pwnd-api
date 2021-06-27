const express = require('express')
const app = express()
const cors = require('cors')
const port = 3030
const fetch = require('node-fetch')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// normally with a more complex backend I'd break these into controllers

// need to hook up some auth service, maybe enforce rate limits for ddos, don't want to get too complicated 

const pwndApiKey = '11a561d02d894b5ba7239d6d1500e73a'
app.get('/breaches', async (req, res) => {
    let params = req.query
    console.log('params:')
    console.log(params)
    console.log('hit breaches endpoint')
    
    // send data to pwnd api with account, maybe do validation
    const acct = encodeURIComponent(params.account)
    const options = {
        headers: {
            'hibp-api-key': `${pwndApiKey}`
        }
    }
    const pwndApiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${acct}?truncateResponse=false`


    let data = {}
    try {
        const response = await fetch(pwndApiUrl, options)
        data = await response.json()
        res.send(data)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
    
})

app.get('/breach/:name', async (req, res) => {
    console.log('================')
    let params = req.params
    console.log('params:')
    console.log(params)
    console.log('hit breach/name endpoint')
    
    // send data to pwnd api with account, maybe do validation
    const name = encodeURIComponent(params.name)
    const options = {
        headers: {
            'hibp-api-key': `${pwndApiKey}`
        }
    }
    const pwndApiUrl = `https://haveibeenpwned.com/api/v3/breach/${name}`


    let data = {}
    try {
        const response = await fetch(pwndApiUrl, options)
        data = await response.json()
        res.send(data)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
    
})