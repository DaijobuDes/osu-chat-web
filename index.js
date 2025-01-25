import Alpine from "alpinejs";

window.Alpine = Alpine;
const env = import.meta.env;

Alpine.data('index', () => ({
    oauth_url: null,

    init() {

        let URL = env.VITE_OSU_OAUTH_URL + '?';
        URL += 'client_id=' + env.VITE_OSU_CLIENT_ID + '&';
        URL += 'redirect_uri=' + env.VITE_OSU_CALLBACK_URL + '&';
        URL += 'response_type=' + env.VITE_OSU_RESPONSE_TYPE + '&';
        URL += 'scope=' + String(env.VITE_OSU_SCOPES).replaceAll(' ', '+') + '&';

        this.oauth_url = URL;
    },

}));
