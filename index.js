const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Wow i am jonior programmer with programming hero');
})


// users api 
const users =[
    {id:0, name:"shabana", email:"shabana@gmail.com"},
    {id:1, name:"Mowsomi", email:"moysomi@gmail.com"},
    {id:2, name:"Prianka", email:"prianka@gmail.com"},
    {id:3, name:"Salman", email:"salman@gmail.com"}
]
app.get('/users', (req, res)=>{
    // use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }else{
        res.send(users);
    }
})
// dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
//app Method
app.post('/users' , (req,res)=>{
    const newUser = req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post' , req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})



// fruits api 
app.get('/fruits/mangoes/fazli' , (req, res) => {
    res.send("yammy yammy tok marka fazli");
})

app.listen(port, ()=>{
    console.log('Listening to port' , port);
})