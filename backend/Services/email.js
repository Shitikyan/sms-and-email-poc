const sgMail = require('@sendgrid/mail');

class EmailService {
    constructor(sendgridApiKey) {
        sgMail.setApiKey(sendgridApiKey);
    }

   async send({ to, from, subject, text, templateId, dynamicTemplateData }) {
        return await sgMail.send({
            to,
            from,
            subject,
            text,
            templateId,
            dynamicTemplateData,
        }).then(() => {
            console.log('Message sent')
        }).catch((error) => {
            console.log(error.response.body)
            // console.log(error.response.body.errors[0].message)
        })
    }
}

module.exports = EmailService;