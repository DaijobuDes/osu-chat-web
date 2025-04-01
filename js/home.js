import Alpine from "alpinejs";
import { get_item } from "../helpers/session";
import { Osu } from "../helpers/osu";

window.Alpine = Alpine;

Alpine.data('home', () => ({
    avatar: "https://a.ppy.sh/1",
    channels: [],
    username: "",
    osu: new Osu(),

    async init() {

        const key = get_item('key');

        if (!key) {
            window.location = '/index.html';
            return;
        }

        await this.load_user();
        await this.get_channels();

    },

    async load_user() {
        const response = await this.osu.get_own_user()
        const user_data = response.data;

        this.avatar = user_data.avatar_url;
        this.username = user_data.username;
    },

    async get_channels() {
        const response = await this.osu.get_channel_list();

        if (response.status !== 200) {
            alert('Cannot fetch channels.');
            return;
        }

        this.channels = response.data;
    },

    async logout() {
        // const response = await this.osu.revoke_own_token();

        // if (response !== 204) {
        //     alert('Token revocation failed.');
        //     return;
        // }

        window.location = 'logout.html';
    },

}));
