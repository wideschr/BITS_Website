require('dotenv').config(); // use .env file to hide sensitive information

//packages
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

//constants
const PORT = process.env.PORT;

//middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('client/public'));


//create mail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});


//routes
    //show homepage
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../client/public/index.html' );
    });

    //endpoint for form submission
    app.post('/form-submission', (req, res) => {
        console.log('Form data in res.body');

        //validate the data
        const { naam, email, boodschap, tel } = req.body;
        if (naam && email && boodschap && tel) {
        
            //send email to the admin and the user using the transporter
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                bcc: process.env.EMAIL,
                subject: `Website contact | Nieuw bericht van ${naam}`,
                text: `Naam: ${naam}\nEmail: ${email}\nTelefoonnummer: ${tel}\nBericht: ${boodschap}`
            };

            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                console.log(err);
                } else {
                console.log('Email sent: ' + info.response);
                }
            });
        
          //show the home page again
            console.log(__dirname + '/../client/public/index.html');
            res.redirect('/?message=success#contact');

        } else {
        //send an error message
        console.log('Form data is invalid. Please try again.');
        res.send('Form data is invalid. Please try again.');
        }
        

    });