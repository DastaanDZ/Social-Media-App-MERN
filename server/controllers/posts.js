import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }catch(err){
        res.statud(404).json({message: err.message});
    }
}

export const createPost = (req,res) => {
    res.send('POST CREATED');
}
