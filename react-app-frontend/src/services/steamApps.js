import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/steamapps';

const getAll = async () => {
    console.log('getAll');
    const res = await axios.get(baseUrl);
    return res.data.applist.apps;
};

const getById = async (id) => {
    console.log('getById');
    const res = await axios.get(`${ baseUrl }/${ id }`);
    return res.data[id].data;
}

export default { getAll, getById };