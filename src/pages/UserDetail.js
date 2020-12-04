import React ,{useEffect, useState}from 'react'
import {useParams} from 'react-router-dom';
import {fetchData} from '../helper/FetchData';

function UserDetail() {
    const {id} = useParams();
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        fetchData(`/user/${id}`)
        .then((res) => setUserDetail(res))
        .catch()
        .finally();
    }, []);

    return (
        <div>
            {id}
        </div>
    )
}

export default UserDetail
