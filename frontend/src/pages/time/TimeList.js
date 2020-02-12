import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import List from '../../components/list/List';
import api from '../../services/api';

import * as TimeActions from '../../store/actions/Time';

function TimeList({ times, dispatch }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTimes() {
            if (times.length === 0){
                const response = await api.get('/time');
                dispatch(TimeActions.setTimes(response.data));
            }

            setLoading(false);
        }

        loadTimes();
    }, [dispatch, times]);

    return (
        <List 
            linkToNew="/times-edicao" 
            title="Times" 
            items={times} 
            viewIcon={false}
            loading={loading}
        />
    )
}

export default connect(state => ({ times: state.Time.times }))(TimeList);