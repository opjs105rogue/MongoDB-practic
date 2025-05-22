import Post from "./Post.js";

class postService {
    async createPost(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAllPosts() {
        const posts = await Post.find();
        return posts;
    }

    async getOnePost(id) {
        if(!id) {
            throw new Error("Id не указан.");
        }
        const searchingPost = await Post.findById(id);
        return searchingPost;
    }

    async updatePost(post) {
        if(!post._id) {
            throw new Error("Id не указан.");
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatedPost;
    }

    async deletePost(id) {
        if(!id) {
            throw new Error("Id не указан.")
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default new postService();