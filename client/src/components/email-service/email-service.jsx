import React from 'react';
import './email-service.scss';
import { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';


const EMAIL = () => {
    const [text, setText] = useState(' ');
    const [emailSubject, setEmailSubject] = useState(' ');
    const [emailRef, setEmailRef] = useState();
    const [emailAdress, setEmailAdress] = useState();
    const [emailData, setEmailData] = useState();
    const [dataKey, setDataKey] = useState();

    const sendEmailSms = () => {
        axios.post(`/api/email/send`, { emailSubject, text, emailRef })
            .then(res => {
                console.log(res.data);
            })
    }

    const sendTemplate = () => {
        const templateData = {};
        templateData[dataKey] = emailData;

        axios.post(`/api/email/template`, { dynamicTemplateData: templateData, emailAdress })
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className='EmailContainer'>
 
            <div className='emailService'>
                <h1>EMAIL SERVICE</h1>
                <form>
                    <label>Email Subject</label>
                    <Input placeholder='Subject' type='text' onChange={e => setEmailSubject(e.target.value)}></Input>
                    <label>Email Text</label>
                    <Input placeholder='Message' type='text' onChange={e => setText(e.target.value)}></Input>
                    <label>Address</label>
                    <Input placeholder='Email' type='text' onChange={e => setEmailRef(e.target.value)}></Input>
                </form>
                <Button type="primary" onClick={sendEmailSms}>SEND</Button>
            </div>
            <div className='template'>
                <h1>SEND YOUR TEMPLATE</h1>
                <form>
                    <label>Email address</label>
                    <Input placeholder='Email' type='text' onChange={e => setEmailAdress(e.target.value)}></Input>
                    <label>Template Data Key</label>
                    <Input placeholder='Data Key' type='text' onChange={e => setDataKey(e.target.value)}></Input>
                    <label>Template Data Value</label>
                    <Input placeholder='Data Value' type='text' onChange={e => setEmailData(e.target.value)}></Input>
                    <Button type="primary" onClick={sendTemplate}>Send Template</Button>
                </form>
            </div>
        </div>)
}

export default EMAIL;