/**
 * Intéragit avec une API JSON
 * @param {string} url
 * @param {RequestInit} options
 */
export async function fetchJSON (url,option = {}) {
    constheaders = {accept: 'application/json', ...option.headers}
    if (option.json) {
        option.body = JSON.stringify(options.json)
        headers['Content-Type'] = 'application/json'
    }
    const r = await fetch(url, {...options, headers})
    if(!r.ok) {
        throw new Error('Erreur serveur', {cause: r})
    }
    return await r.json()
}