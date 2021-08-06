import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/prayerlist/";
const PrayerListService = {

    getAll: async () => {
        return axios.get(BASE_URL + "home");
    },
    getPagedPrayerLists: async (pageNo) => {
        return axios.get(BASE_URL + "?page=" + pageNo);
    },
    getPrayerListsBetweenTwoDates: async(start, end) => {
        return axios.get(BASE_URL + "dateCollection/" + start + "/" + end);
    },
    getPrayerListById : async (id) => {
        return axios.get(BASE_URL + "edit/" +id);
    },
    createPrayerList: async (data) => {
        return axios.post(BASE_URL, data);
    },
    deletePrayerList: async (id) => {
        return axios.delete(BASE_URL + id);
    },
    updatePrayerList: async (id, data) => {
        return axios.put(BASE_URL + "edit/" +id, data);
    }
}

export default PrayerListService;