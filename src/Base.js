const fetch = require("node-fetch")
 
class KuaryAgent {
    constructor(key) {
        this.token = key;
        if(!this.token) throw new Error("Specify API-KEY. Documentation - https://github.com/Kyaru-Development/kyaru-api.js")

 
    get = function(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation -  https://github.com/Kyaru-Development/kyaru-api.js")
       let res = await fetch(`https://kyaru-api.glitch.me/ /api/v1/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.token,
            },
        })
        return res.json()
    }
}

module.exports = KuaryAgent;
