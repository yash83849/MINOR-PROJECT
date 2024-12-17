const mongoose = require('mongoose');

const url = "mongodb+srv://yash:yash515253@cluster0.9jlrd.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0 ";
//asynchronous function - return Promise Object
mongoose.connect(url)
.then((result) => {
   console.log('database connected');
    
}).catch((err) => {
 console.log(err);
    
});
module.exports = mongoose;
