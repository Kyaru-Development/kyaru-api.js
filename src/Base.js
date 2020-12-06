const fetch = require("node-fetch")
 
class KyaryAgent {
    constructor(key) {
        this.token = key;
        if(!this.token) throw new Error("Specify API-KEY. Documentation - https://github.com/Kyaru-Development/kyaru-api.js")

    }
    get = async function(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation -  https://github.com/Kyaru-Development/kyaru-api.js")
       let res = await fetch(`https://kyaru-api.glitch.me/v1/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token,
            },
        })
        return res.json()
}
}

module.exports = KyaryAgent;
