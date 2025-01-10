//pass:'bbix wxvh eiwv faij'



var nodejsmailer  = require('nodemailer'); // use mailer nodejs module

var mailOptions ={
    from:'pradnyaslondhe00@gmail.com',
    to:'pradnyaslondhe00@gmail.com',
    subject:"Sending Email to Pradnya",
    text:"Welcome to NodeMailer, It's Working",
    html: '<h1>Welcome</h1><p>That was easy!</p>',
    attachments: [
        { filename: 'txt.txt', path: './txt.txt' }
     ]
}    


var transporter = nodejsmailer.createTransport({
    service:'gmail',
    auth:{
        user:'pradnyaslondhe00@gmail.com',
        pass:'bbix wxvh eiwv faij'    
    }
}); 


transporter.sendMail(mailOptions,function(error,info){

     if(error){
         console.log(error);
     }else{
         console.log('Email Send ' + info.response);
     }
});