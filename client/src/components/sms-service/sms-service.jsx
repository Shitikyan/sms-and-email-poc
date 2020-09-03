import React from 'react';
import './sms-service.scss'
import { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';

const SMS = () => {
    const [smsBody, setSmsBody] = useState(' ');
    const [number, setNumber] = useState();

    function sendSMS() {
        axios.post(`/api/sms/send`, { smsBody, number })
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className='smsService'>
            <h1>SMS SERVICE</h1>
            <form>
                <label>SMS</label>
                <Input  placeholder='Message' type='text' onChange={e => setSmsBody(e.target.value)}></Input>
                <label>Number</label>
                <Input  placeholder='Number' type='text' onChange={e => setNumber(e.target.value)}></Input>
            </form>
            <Button type="primary" onClick={sendSMS}>SEND</Button>
        </div>)
}

export default SMS;