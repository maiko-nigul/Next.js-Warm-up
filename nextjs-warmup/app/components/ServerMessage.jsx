'use client';

import { useState } from "react";

export default function ServerMessage() {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchMessage = async (e) => {
        if (e) e.preventDefault();

        setLoading(true);
        setError('');
        setMessage('');

        try{
            const res = await fetch('/api/message');

            if(!res.ok){
                throw new Error('Fetch failed')
            }
            const data = await res.json();
            setMessage(data.message);
        }
        catch (err){
            setError(err.message || 'Something went wrong :(')
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div>
            <h2>Backend message</h2>

            <button onClick={fetchMessage} disabled={loading} type="button">
                Load server message
            </button>

            {loading && <p>Loading data...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            {message && <p style={{color:'green', fontWeight: 'bold'}}> {message}</p>}
        </div>
    )
}