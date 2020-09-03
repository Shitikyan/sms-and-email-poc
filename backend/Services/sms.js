let twilio = require('twilio');

class SmsService {
    constructor({ accountSid, authToken }) {
        this.accountSid = accountSid;
        this.authToken = authToken;

        this.client = twilio(accountSid, authToken);
    }

    send({to, from, body}) {
        return this.client.messages.create({ to, from, body });
    }
}

module.exports = SmsService;