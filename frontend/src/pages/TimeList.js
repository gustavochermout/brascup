import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import api from '../services/api';

import * as TimeActions from '../store/actions/Time';

function TimeList({ times, dispatch }) {
    useEffect(() => {
        async function loadTimes() {
            if (times.length === 0){
                const response = await api.get('/time');
                dispatch(TimeActions.setTimes(response.data));
            }
        }

        loadTimes();
    }, [dispatch, times]);

    return (
        <List linkToNew="/times-edicao" title="Times" items={times}/>
    )
}

export default connect(state => ({ times: state.Time.times }))(TimeList);