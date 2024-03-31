import axios from "axios";

export default class FakeYoutubeClient {
    async keyword({params}) {
        return axios
        .get(`data/${params.relatedToVideoId ? 'relate' : 'search'}.json`);
    }

    async videos() {
        return axios.get('/data/hotData.json');
    }

    async channels() {
        return axios.get('/data/detailData.json');
    }

    async related() {
        return axios.get('/data/relateData.json');
    }
}