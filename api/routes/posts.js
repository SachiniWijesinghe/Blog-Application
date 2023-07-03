const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {

        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    } catch (err) {

        res.status(500).json(err);
    }
});



//update
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
               const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                 {
                        new: true
                 });
                res.status(200).json(updatedPost);
            }
            catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("you can update only your post");
        }

    } catch (err) {
        res.status(500).json(err);
    }
})

//delete
router.delete("/:id", async(req,res)=>{

    
  try{
     const post = await Post.findById(req.params.id);

     if(post.username === req.body.username){

        try{
            await Post.findByIdAndDelete(req.params.id); //uda hoyl post eka arn tyene e nisa mekama oni na
           //await post.delete(); meka wada na
           res.status(200).json("successfully deleted !");

        }catch(err){
            res.status(500).json(err);
        }

     }else{
        res.status(401).json("you can delete only your post");
     }
  }catch(err){
    res.status(500).json(err);
  }
});

//find one
router.get("/:id", async(req,res)=>{

    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).status(err);
    }
})

//get all post

router.get("/", async(req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;

    try{
        let posts; //post array

        if(username){
            posts = await Post.find({username});
        }else if(catName){
            posts = await Post.find({
            categoires :{$in : [catName],},
            });
        }else{
            posts = await Post.find();
        }

        res.status(200).json(posts);

    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;