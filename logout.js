import Alpine from "alpinejs";
import { get_item_once } from "./helpers/session";

window.Alpine = Alpine;

Alpine.data('logout', () => ({
    hint: null,

    init() {
        const timer = 3;

        if (get_item_once('key')) {

            setTimeout(function () {
                this.hint = `Redirecting in ${timer} seconds.`;
                window.location.href = '/index.html';
            }, timer * 1000);

            return;
        }

        window.location.href = '/index.html';
    },

}));

