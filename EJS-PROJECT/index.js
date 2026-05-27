import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', '.');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the EJS Project</h1>');
});

app.get('/about', (req, res) => {
    res.render("about",{title:"About Us",message:"Welcome to about page of our EJS project."});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

