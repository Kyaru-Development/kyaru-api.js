const http = require("http")
 
class KuaryAgent {
    constructor(key) {
        this.token = key;
        if(!this.token) throw new Error("Specify API-KEY. Documentation - https://github.com/API-Sakura/Kyaru-API.JS")


        this.request = function(endpoint, options){
            return new Promise((resolve, reject) => {
                http.get(`/v1/${endpoint}`, options, (res) => {
                    let body = " ";
                    res.on('data', function(chunk){
                        body += chunk;
                        return resolve(JSON.parse(body))
                    })
                })
            })
        }
 

    }

    get = function(endpoint) {
        if(!endpoint) throw new Error("Specify an available endpoint. Documentation -  https://github.com/API-Sakura/Kyaru-API.JS")
        return this.request(endpoint, {
            headers: {
                 "Authorization": this.token,
            },
        })
    }

}

module.exports = KuaryAgent;

/* Developer with ❤ by Kyaru Development */
