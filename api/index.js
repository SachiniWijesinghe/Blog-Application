const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catPouter = require("./routes/categories");

const multer = require("multer");

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connect to mongodb"))
    .catch((err) => console.log(err));


//create storage

const storageee = multer.diskStorage({  //2 parameters.destination and file name
    destination: (req, file, cb) => {    //cb-callback mekedi koked save krnna oni ykl kynwa
        cb(null, "images");            //null kynne error eka ena thanata dana eka.ilaga eka destination name eka.
        //mewa type krddi suggestion denwa
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);        //mekedi err eky image eke name ekay.suggestion wlin blnna
        //cb(null,"hello.JPEG");        //postman eken check krddi meka denna uda eka nthiwa.mkd img name eka api pass krnne nane postman eken
    },
});

//upload                //condition
const upload = multer({storage:storageee});
                        //single file //key
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded!");
})


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/cat", catPouter);






app.listen("5000", () => {
    console.log("application running")
});