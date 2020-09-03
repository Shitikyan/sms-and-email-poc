var express = require("express");
const SmsService = require("./Services/sms");
const EmailService = require("./Services/email");
const bodyParser = require('body-parser');
require('dotenv').config();
var app = express();
app.use(bodyParser.json());

const smsService = new SmsService({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
});

const email = new EmailService(process.env.SENDGRID_API_KEY);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.post("/api/email/send", (req, res, next) => {
    email.send({
            to: req.body.emailRef,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject: JSON.stringify(req.body.emailSubject),
            text: JSON.stringify(req.body.text),
        }).then(response => res.json(response).send())
        .catch(error => res.json(error).status(400).send());
});

app.post("/api/email/template", (req, res, next) => {
    email.send({
            to: req.body.emailAdress,
            from: process.env.SENDGRID_FROM_EMAIL,
            templateId: process.env.TEMPLATE_ID,
            dynamicTemplateData: req.body.dynamicTemplateData
        }).then(response => res.json(response).send())
        .catch(error => res.json(error).status(400).send());
});