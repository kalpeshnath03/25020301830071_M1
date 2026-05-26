const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/',(req,res) => {
    res.send('Hello ');
});

app.get('/about',(req,res) => {
    res.redirect('www.google.com'); // Redirect to the home page
});
app.get('/user/:userid/book/:bookid',(req,res) => {
    res.send(`<h1>User ID: ${req.params.userid}, Book ID: ${req.params.bookid}</h1>`);
});

app.get('/search',(req,res) => {
    const name = req.query.name;
    const age = req.query.age;
    const city = req.query.city;
    res.send(`Search Results for Name: ${name}, Age: ${age}, City: ${city}`);
}); 

app.get('/download',(req,res) => {
    res.download('./files/shortcuts.pdf', 'document.pdf');
});
app.get('/end',(req,res) => {
    res.write('End of the route');
    res.end();
});
