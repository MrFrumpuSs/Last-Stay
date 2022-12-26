import config from "config";
import axios from "axios";
import connection from "../db.js";

class AuthService {
    async vk() {
        const obj = config.get('vkData');
        let paramsarr = [];
        for (let key in obj) {
            paramsarr.push([key, obj[key]].join('='))
        }
        let Created_URL = 'https://oauth.vk.com/authorize?' + paramsarr.join('&');
        

        return Created_URL;
    }

    async callback(params) {
        if(params.code) {
            const promise = connection.promise()

            const response = await axios.get('https://oauth.vk.com/access_token?client_id='+config.get('vkData').client_id+'&client_secret='+config.get('client_secret')+'&redirect_uri='+config.get('vkData').redirect_uri+'&code='+params.code)        
            const response2 = await axios.get('https://api.vk.com/method/users.get?user_ids='+response.data.user_id+'&access_token='+response.data.access_token+'&v=5.131');


            const sql1 = 'SELECT * FROM users WHERE id = ?';
            const sql2 = 'INSERT INTO users VALUES(?, ?, ?, ?, ?) ';

            const [rows, fields] = await promise.execute(sql1, [response2.data.response[0].id]);
            if(rows.length === 0) {
                const [rows, fields] = await promise.execute(sql2, [response2.data.response[0].id, response2.data.response[0].first_name, response2.data.response[0].last_name, params.code, 0]);
                return {id: response2.data.response[0].id, fname: response2.data.response[0].first_name, sname: response2.data.response[0].last_name, code: params.code};
            }
            return {id: response2.data.response[0].id, fname: response2.data.response[0].first_name, sname: response2.data.response[0].last_name, code: rows[0].code};
        } else {
            return 'error'
        }
    }
}

export default new AuthService();