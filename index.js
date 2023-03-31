const express = require('express')
const app = express()
const port = 3000

// router
app.get('/', (req,res)=>{
    return res.send('hello word');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})