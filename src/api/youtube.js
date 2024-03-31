
export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async keyword(search) {
        return search ? this.#searchByKeyword(search) : this.#hotVideos();
    }

    async channelImageURL(id) {
        return this.apiClient.channels({
            params : {
                part: 'snippet',
                id
            },
        })
        .then((res) => res.data.items[0].snippet.thumbnails.default.url)
    }

    async relateVideos(id) {
        return this.apiClient.keyword({
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                relatedToVideoId: id,
                regionCode: 'kr'
            }
        })
        .then((res) => res.data.items.map((item) => ({...item, id:item.id.videoId})));
    }

    async #searchByKeyword(search) {
        return this.apiClient.keyword({
            params: {
                regionCode: 'kr',
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: search
            },
        })
        .then((res) => res.data.items)
        .then((items) => items.map((item) => ({...item, id:item.id.videoId})))
    }

    async #hotVideos() {
        return this.apiClient.videos({
            params: {
                regionCode: 'kr',
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular'
            }
        })
        .then((res) => res.data.items)
    }
}