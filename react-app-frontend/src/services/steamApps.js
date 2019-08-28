import axios from 'axios';

const baseUrl = '/api/steamapps';

const getAll = async () => {
    console.log('getAll');
    const res = await axios.get(baseUrl);
    return res.data.applist.apps;
};

const getById = async (id) => {
    console.log('getById');
    const res = await axios.get(`${ baseUrl }/${ id }`);
    return res.data[id].data;
};

const getMultipleById = async (ids) => {
    console.log('getMultipleById');
    let multipleAppData = [];

    const promises = ids.map(async id => {
        const singleAppData = await getById(id);
        multipleAppData = multipleAppData.concat(singleAppData);
    });

    await Promise.all(promises);
    return multipleAppData;
};

const getAppNews = async (id) => {
    console.log('getAppNews');
    const res = await axios.get(`${ baseUrl }/${ id }/news`);
    return res.data.appnews.newsitems;
}

export default { getAll, getById, getMultipleById };