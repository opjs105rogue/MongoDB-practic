import express from 'express';
import mongoose from 'mongoose';
// import Post from './Post.js';
import router from './router.js';
import fileUpload from 'express-fileupload';

const App = express();
const mongodb = 'mongodb://localhost:27017'


App.use(express.json());
App.use('/api', router); // <- Т.е. подключение будет проходить через /api, например: http://localhost:5000/api/posts
App.use(fileUpload());

// App.get('/', (req,res) =>{
//     res.status(200).json('Был использован GET запрос!')
// })
// App.put('/', (req,res) =>{
//     res.status(200).json('Был использован PUT запрос!')
// })
// App.delete('/', (req,res) =>{
//     res.status(200).json('Был использован DELETE запрос!')
// })


async function startApp() {
    try {
        await mongoose.connect(mongodb);
        App.listen(5000, ()=>{
            console.log('Server is running!')
        })
    } catch(err) {
        console.log(err);
    }
}


startApp();