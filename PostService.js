import Post from "./Post.js";
import fileService from "./fileService.js";

class postService {
    async createPost(postData, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({
            ...postData,
            picture: fileName
        });
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