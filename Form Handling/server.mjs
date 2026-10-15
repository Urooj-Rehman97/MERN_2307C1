import express from 'express';
const app = express()
const port = 3000;
const __dirname = import.meta.dirname;
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const users = [];

app.get('/', (req, res) => {
    // res.send('Hello MERN Developer! \n First Lecture')
    // res.sendFile("/index.html");
    // res.send(__dirname);
    res.sendFile(__dirname+"/index.html")
    

  });

  app.post('/', (req,res)=>{
    const {name , email} = req.body;
    users.push({name, email})

    let result = `
    <h1>Submitted Successfully....</h1>
    <h2>Registered Users: </h2>
    <ul>
    ${users.map(u => `<li>${u.name} - ${u.email}</li>`).join('')}
    </ul>
    `;

    res.send(result);
  })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

  })

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();
// const port = 3000;

// // For ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Store data temporarily
// const users = [];

// // Show form
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Handle form submission
// app.post('/', (req, res) => {
//   const { uname, uemail } = req.body;
//   users.push({ uname, uemail });

//   let responseHtml = `
//     <h1>Submitted Successfully!</h1>
//     <h2>Current Submissions:</h2>
//     <ul>
//       ${users.map(u => `<li>${u.uname} - ${u.uemail}</li>`).join('')}
//     </ul>
//     <a href="/">Go Back</a>
//   `;
//   res.send(responseHtml);
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
