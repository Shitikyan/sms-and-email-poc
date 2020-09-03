import React from 'react';
import './email-service.scss';
import { useState } from 'react';
import axios from 'axios';

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
        <div className='email'>
            <h1>EMAIL SERVICE</h1>
            <div className='sms-service'>
                <form>
                    <label className='nmb'>Email Subject</label>
                    <input type='text' className='number' onChange={e => setEmailSubject(e.target.value)}></input>
                    <label className='nmb'>Email Text</label>
                    <input type='text' className='text' onChange={e => setText(e.target.value)}></input>
                    <label className='nmb'>Address</label>
                    <input type='text' className='number' onChange={e => setEmailRef(e.target.value)}></input>
                </form>
                <button className='btn' onClick={sendEmailSms}>SEND</button>
            </div>
            <div className='template'>
                <h1>SEND YOUR TEMPLATE</h1>
                <label>Email address</label>
                <input type='text' onChange={e => setEmailAdress(e.target.value)}></input>
                <label>Template Data Key</label>
                <input type='text' onChange={e => setDataKey(e.target.value)}></input>
                <label>Template Data Value</label>
                <input type='text' onChange={e => setEmailData(e.target.value)}></input>
                <button onClick={sendTemplate}>Send Template</button>
            </div>
        </div>)
}

export default EMAIL;