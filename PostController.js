import PostService from "./PostService.js";


// App.use(express.json());
// App.use('/api', router); // <- Т.е. подключение будет проходить через /api, например: http://localhost:5000/api/posts

// App.get('/', (req,res) =>{
//     res.status(200).json('Был использован GET запрос!')
// })
// App.put('/', (req,res) =>{
//     res.status(200).json('Был использован PUT запрос!')
// })
// App.delete('/', (req,res) =>{
//     res.status(200).json('Был использован DELETE запрос!')
// })


class PostController {
    async create(req,res) {
        try{
            console.log(req.files)
            const picture = req.files?.picture || null;
            const post = await PostService.createPost(req.body,picture);
            res.json(post);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }

    async getAll(req,res) {
        try {
            const posts = await PostService.getAllPosts();
            return res.json(posts);
        } catch(err) {
            res.status(500).json(err.message);;
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOnePost(req.params.id);
            return res.json(post);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }

    async update(req,res) {
        try {
            const updatePost = await PostService.updatePost(req.body);
            return res.status(200).json(updatePost);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }

    async delete(req,res) {
        try {
            const deletePost = await PostService.deletePost(req.params.id);
            return res.json(deletePost);
        } catch(err) {
            res.status(500).json(err.message);
        }
    }
}

export default new PostController;