import React from 'react';
import './sms-service.scss'
import { useState } from 'react';
import axios from 'axios'

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
        <div className='sms'>
            <h1>SMS SERVICE</h1>
            <div className='sms-service'>
                <form>
                    <label>Sms</label>
                    <input type='text' className='text' onChange={e => setSmsBody(e.target.value)}></input>
                    <label className='nmb'>Number</label>
                    <input type='text' className='number' onChange={e => setNumber(e.target.value)}></input>
                </form>
                <button className='btn' onClick={sendSMS}>SEND</button>
            </div>
        </div>)
}

export default SMS;