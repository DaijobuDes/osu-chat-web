import axios from "axios";
import { get_item } from "./session";

const env = import.meta.env;
const HOSTNAME = env.VITE_OSU_SERVER_HOSTNAME;

export class Osu {
    token = null;
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
    }

    constructor() {
        this.token = get_item('key');
        this.headers['Authorization'] = `Bearer ${this.token}`;
    }

    async get_oauth_token(code) {
        const data = {
            "client_id": env.VITE_OSU_CLIENT_ID,
            "client_secret": env.VITE_OSU_CLIENT_SECRET,
            "code": code,
            "grant_type": "authorization_code",
            "redirect_uri": env.VITE_OSU_CALLBACK_URL,
        }

        try {
            const response = await axios.post(endpoint.GET_OAUTH_TOKEN, data);
            return response;
        } catch (error) {
            return error;
        }
    }

    async get_own_user() {
        try {
            const response = await axios.get(endpoint.GET_OWN_USER_DATA, { headers: this.headers })
            return response;
        } catch (error) {
            return error;
        }
    }

    async get_channel_list() {
        try {
            const response = await axios.get(endpoint.GET_CHANNEL_LIST, { headers: this.headers });
            return response;
        } catch (error) {
            return error;
        }
    }

    async get_channel_messages(channel_id, since = 0) {
        try {
            const params = {
                'since': since,
            };
            const final_url = endpoint.GET_CHANNEL_MESSAGES.replace(':channel_id', channel_id);
            const response = await axios.get(final_url, { params: params, headers: this.headers });
            return response;
        } catch (error) {
            return error;
        }
    }

    async revoke_own_token() {
        try {
            const response = await axios.delete(endpoint.REVOKE_OAUTH_TOKEN, { headers: this.headers })
            return response;
        } catch (error) {
            return error;
        }
    }
}

const endpoint = Object.freeze({
    GET_CHANNEL_LIST: HOSTNAME + '/api/v2/chat/channels',
    GET_CHANNEL_MESSAGES: HOSTNAME + '/api/v2/chat/channels/:channel_id/messages',
    GET_OWN_USER_DATA: HOSTNAME + '/api/v2/me/osu',
    GET_OAUTH_TOKEN: HOSTNAME + '/oauth/token',
    REVOKE_OAUTH_TOKEN: HOSTNAME + '/api/v2/oauth/tokens/current',
});
