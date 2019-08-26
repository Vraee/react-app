import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/steamapps';

const getAll = async () => {
    const res = await axios.get(baseUrl);
    console.log(res.data)
    return res.data;
};

const getById = async (id) => {
    console.log('getbyid')
    const res = await axios.get(`${ baseUrl }/${ id }`);
    //console.log(res.data[id].data)
    const data = res.data;
    console.log(data)
    return data;
}

export default { getAll, getById };