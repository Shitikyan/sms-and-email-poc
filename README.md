# Twilio SMS Service

Twilio SMS service with Express Node js and React js

# What you'll need

## To build this application you will need the following:

1. A Twilio account.
2. A SendGrid account.
3. Node.js and npm installed.

## Create Twilio account

1. Navigate to https://www.twilio.com/

2. Sign up for your Free Twilio Trial. The signup process includes verifying your personal phone number: this is a security measure that is mandatory before you can try Twilio.

3. Once you finish signup, you should see your Console Dashboard. This is your home for finding your Twilio credentials, checking your usage, procuring a phone number and more.

4. When you signed up for your trial account, you verified your personal phone number.

5. In your Console Dashboard You must create new project. Create Programmable Messaging project.

## You first need to purchase a Twilio phone number that is SMS enabled.

1. Point your browser to the Buy a Number section of the Console.

2. Optionally, enter an area code of your choice in the input field.

3. Check at least SMS from the Capabilities selections. Additional options are available by clicking Advanced Search.

4. Click Search.

5. You should see a list of available numbers to purchase.

6. Click Buy to buy this number.

7. Select a number of your choice.

## Create SendGrid account

1. Navigate to https://sendgrid.com/
2. Sign up for your Free SendGrid Trial.
 
## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install packages.

## Backend

Navigate to backend folder

```bash
cd backend
```

Copy the content of .env.sample file to .env file

```bash
cp .env.sample .env
```

Run npm install command

```bash
npm install
```

Run Backend

```bash
npm run server
```
## Frontend

Navigate to client folder

```bash
cd ../client
```

Run npm install command

```bash
npm install
```

Run Frontend

```bash
npm start
```

The Browser will automatically navigate to http://localhost:3000/ 

## Preparing Twilio credentials

To connect to Twilio we will need some credentials. 

1. From your Twilio console copy your Account SID and enter it in the .env file as the TWILIO_ACCOUNT_SID.

2. Navigate to Settings, and in API Credentials copy AUTH TOKEN and enter it in the .env file as the TWILIO_AUTH_TOKEN.

3. Navigate to All Products & Services in left side, in Phone Numbers copy your active phone number and enter it in the .env file as the TWILIO_PHONE_NUMBER.

## Preparing SendGrid credentials

Once you finish signup in SendGrid we will need some credentials.

1. Navigate to Settings, API Keys, and Create API Key.
4. Write your API Key name.
5. Choose Restricted Access.
6. Scroll down to Mail Send and give access to this key.
7. Scroll down to Create and View.
8. Copy API Key ID and enter it in the .env file as the SENDGRID_API_KEY.
9. From your Account Details copy your Email and enter it in the .env file as the SENDGRID_FROM_EMAIL.
10. Navigate to Email API, Dynamic Templates and Create a Dynamic Template.
11. Write your Dynamic Template Name and create it.
12. Copy your Template ID and enter it in the .env file as the TEMPLATE_ID.

You can copy content of .sample file in your template code or create your own. If you copied that content, it have a dynamic Template data imageURL.
