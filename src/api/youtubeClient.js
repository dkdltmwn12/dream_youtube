import axios from "axios";
export default class YoutubeClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY}
        });
    }

    async keyword(params) {
        return this.httpClient.get('search', params);
    }

    async videos(params) {
        return this.httpClient.get('videos', params)
    }

    async channels(params) {
        return this.httpClient.get('channels', params)
    }

    async related(params) {
        return this.httpClient.get('related', params);
    }
}