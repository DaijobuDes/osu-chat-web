import Alpine from "alpinejs";
import { set_item } from "../helpers/session";
import axios from "axios";
import { Osu } from "../helpers/osu";

window.Alpine = Alpine;

Alpine.data('success', () => ({
    code: null,
    error: false,
    error_reason: null,
    osu: new Osu(),

    async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code == null) {

            const error = urlParams.get('error');

            if (error) {
                this.error = true;
                this.error_reason = urlParams.get('hint')
                return;
            }

            window.location = '/index.html';
            return;
        }

        const response = await this.osu.get_oauth_token(code);
        if (response.status !== 200) {
            this.error = true;
            this.error_reason = 'Server returned an error.';
            return;
        }

        set_item('key', response.data.access_token);
        window.location = '/home.html';
    },

}));

