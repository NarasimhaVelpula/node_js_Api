const http=require('http')
const url=require('url')
const mailer=require('nodemailer')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    mail=url.parse(req.url,true).query
    //console.log(mail.mail)
    res.write("Mail sent")
    var transporter=mailer.createTransport({
        service:'gmail',
        auth:{
            user:'nanivelpula@gmail.com',
            pass:'blackicon@27'
        }
    });
    var mailOptions={
        from:'nanivelpula@gmail.com',
        to:mail.mail,
        attachments:[
            {
                filename: 'Narasimha Velpula.pdf',
                path:'./Narasimha Velpula.pdf'
            }
        ],
        subject:'Sending email for testing',
        text:"Hi,\nPlease find the attached resume and I can join within 15 days of notice period. Actively looking for a job change and I have working knowledge in mainframes. Apart from mainframe I have knowledge over Django, Rest API, React JS, HTML,CSS, Javascript. \
\n\n\
I am good at programming and problem solving. I am interested in learning new technologies.\
Looking forward to hearing from you.\
\n\n\
Regards,\n\
Narasimha Velpula.\n\
Mobile: +91 9949911067"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

    res.end()
}).listen(8000);