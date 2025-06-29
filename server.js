import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';

const app =express();
import { v2 as cloudinary } from 'cloudinary';
import { profile } from 'console';

 // Configuration
    cloudinary.config({ 
        cloud_name: 'dta5ldnof', 
        api_key: '479131425454678', 
        api_secret: '1SRstd5c11uoQlIR8yxirj-W1pw' // Click 'View API Keys' above to copy your API secret
    });

//   connect to database
mongoose
  .connect(
    "mongodb+srv://akrajak151:XusZ4xuvs59L4Ago@cluster0.vxnoxx8.mongodb.net/",
    {
      dbName: "NodeJs_Mastery_Course",
    }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({extended:true}))










//rendering ejs file            register file                                    rendering login file
app.get('/',(req,res)=>{
    res.render('login.ejs',{url:null})
})


//rendering register file 
app.get('/register',(req,res)=>{
    res.render('register.ejs',{url:null})
})



const storage = multer.diskStorage({
  destination: './public/uploads',                                                    // mean yaha pe sara image dal rahe hai 
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })                                        //iske through image upload ho raha hai 

app.post('/register', upload.single('file'), async (req, res)=> {
  
    const file =req.file.path

    // data ko form se fetch karna hai 
     const { name, email, password } = req.body;

    //                                      cloudinary pe upload krne ka code 
    const cloudinaryRes = await cloudinary.uploader.upload(file,{
      folder:"Nodejs_Mastry_course"
    })

      // creating user
    const db = await User.create({
    name,
    email,
    password,
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imageUrl: cloudinaryRes.secure_url,
  });

   // res.render("register.ejs", { url: cloudinaryRes.secure_url });   //image ko dhikhane ke liye 

    //res.json({message:'file uploaded successfully',cloudinaryRes})
    res.redirect('/')
   
});

//    ab login ke data ko mongodb me store krna hai aur register data se match krega 


app.post('/login',async(req,res)=>{
    const {email,password} =req.body;

    let user = await User.findOne({email})
    if(!user) res.render("login.ejs")
    else if(user.password!=password)
    {
        res.render("login.ejs"); 
    }
    else
    {
        res.render("profile.ejs",{user});
    }
    
    



})



















//                                                                    ab dbms me dalne ka code
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    filename:String,
    public_id:String,  // public id ke through hii in future img delete kr sakte hai
    imageUrl:String,

});

const User = mongoose.model("user", userSchema);





const port =5000;
app.listen(port,()=>console.log(`server is running at ${port}`))