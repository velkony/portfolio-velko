import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq } from '../helpers/utils';

const axiosInstance = axios.create({
    // baseURL: `${process.env.BASE_URL}/api/v1`,
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
});

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if (token) {
        return { headers: {'authorization': `Bearer ${token}`}};
    }

    return undefined;
};

export const getSecretData = async (req) => {
    const url = '/secret';

    return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);
};