class Network {
    static async fetchUrl(url, { method = 'get', headers = {}, body = '' } = {}) {
        //get方法没有body传值情况
        let header = Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, headers);
        let bodys = { body: JSON.stringify(body) };
        let fn = { method: method };
        if (method == 'get') {
            var params = Object.assign(fn, { headers: header });
        } else if (method == 'post') {
            var params = Object.assign(fn, { headers: header }, bodys);
        }
        let response = await fetch(url, params).catch((error) => { console.log(error); });
        let result = await response.text();
        // console.log(JSON.stringify(result));
        try {
            var jsondata = JSON.parse(result);
            return jsondata;
        } catch (e) {
            //  console.log(e);
            return false;
        }
    }
}
module.exports = Network;