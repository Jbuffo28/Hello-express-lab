const Express = require("express")
const app = Express()

const PORT = 5000


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.send('<h1>Hello, example!</h1>')
    })
    
app.get("/bow", (req, res) =>{
    res.send('<h1>Western yew</h1>')
})
app.get("/arrow", (req, res) =>{
    res.send('<h1>Iron wood</h1>')
})
app.get("/bow/arrow", (req, res) =>{
    res.send('<h1>Wester yew bow and iron wood arrow</h1>')
})






app.get('/:key', (req, res)=>{
    console.log(req.params)
    res.send('hello from Joes computer')
  })