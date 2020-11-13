import axios from 'axios';
import axiosWithAuth from './../utils/axiosWithAuth';

export const fetchColorList = () => {
    return (
        axiosWithAuth().get('/colors')
        .then(res => {
            return res;
        })
        .catch(err => {
            console.error('error fetching data from api: ', err.message)
            return err;
        })
    )
}

