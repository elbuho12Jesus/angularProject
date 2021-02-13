'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=process.env.PORT || 3789;
mongoose.connect('mongodb://localhost:27017/zoo',{useNewUrlParser: true, useUnifiedTopology: true})
.then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
            console.log('conected success');  
            app.listen(port,()=>{
                console.log("El servidor local con Node y Express esta corriendo correctamente...");
            });
        },
  err => { /** handle initial connection error */ 
            console.log(err);
        }
);
