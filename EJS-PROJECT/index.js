import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', '.');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the EJS Project</h1>');
});

app.get('/about', (req, res) => {
    var users=[
        {name:'Kalpesh',age:25},
        {name:'Nath',age:30},
        {name:'John',age:28}
    ];
    let items=['apple','banana','grapes','orange'];
    res.render("about",{title:"About Us",message:"Welcome to about page of our EJS project.", items: items, users: users});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

