import Alpine from "alpinejs";
import { set_item } from "./helpers/session";

window.Alpine = Alpine;
const env = import.meta.env;

Alpine.data('success', () => ({
    code: null,
    error: false,
    error_reason: null,

    init() {
        console.log('asdasdasd');
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
        set_item('key', code);
        window.location = '/home.html';
    },

}));

