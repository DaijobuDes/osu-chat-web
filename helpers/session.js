/**
 * Set session key with value on the session storage
 *
 * @param {string} key
 * @param {string} value
 * @returns string
 */
function set_item(key, value) {
    sessionStorage.setItem(key, value);
    return value;
}

/**
 * Get session key on the session storage
 *
 * @param {string} key
 * @returns string
 */
function get_item(key) {
    return sessionStorage.getItem(key);
}

/**
 * Get session key once and delete afterwards on the session storage
 *
 * @param {string} key
 * @returns string
 */
function get_item_once(key) {
    const t = sessionStorage.getItem(key);
    sessionStorage.removeItem(key);
    return t;
}

/**
 * Removes an item on the session storage
 *
 * @param {string} key
 * @returns int
 */
function remove_item(key) {
    try {
        sessionStorage.removeItem(key);
        return 0;
    } catch (e) {
        return -1;
    }
}

/**
 * Clears all the session storage
 *
 * @param {string} key
 * @returns int
 */
function clear_items() {
    try {
        sessionStorage.clear();
        return 0;
    } catch (e) {
        return -1;
    }
}

export {
    set_item, get_item, remove_item, clear_items, get_item_once
}
