const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3030
const fetch = require('node-fetch')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// normally with a more complex backend I'd break these into controllers.
// need to hook up some auth service, maybe enforce rate limits for ddos, but don't want to get too complicated 

const pwndApiKey = process.env.PWND_KEY
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
        if(response.status === 404){
            data = {isClean: true, data: []}
        } else {
            const returnData = await response.json()
            data = {isClean: false, data: returnData}
        }

        res.send(data)
    } catch (e) {
        console.log(e)
        res.send({isClean: false, data: []})
    }
    
})
