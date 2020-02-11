import React, { useEffect, useState } from 'react';

import List from '../components/List';
import api from '../services/api';

export default function TimeList() {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        async function loadTimes() {
            const response = await api.get('/time');
            setTimes(response.data);
        }

        loadTimes();
    }, []);

    return (
        <List title="Times" items={times}/>
    )
}