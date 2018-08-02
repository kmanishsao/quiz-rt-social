import express from 'express';
import {FirebaseOAuth} from './firebaseOAuth';

const  app = express();
 app.use("/firebase",(req,res)=>{
     var response =FirebaseOAuth();
     console.log(response.auth());
   res.send("Sucessfully Authentication");
 });
 
app.listen(8080, () => console.log('Example app listening on port 3000!'));