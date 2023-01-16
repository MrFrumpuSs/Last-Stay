import config from "config";
import axios from "axios";
import connection from "../db.js";
import sha256 from 'crypto-js/sha256.js';

class DonateService {
    
    async donate({nickname, sum, promo, ip}) {
        const data = config.get('unitPay');


        const getSignature = (account, desc, sum, secretKey) => {
            let str = account + '{up}' + desc + '{up}' + sum +'{up}' + secretKey;
            return sha256(str);
        }

        const response = await axios.get('https://unitpay.ru/api?method=initPayment&params[paymentType]=card&params[account]='+nickname+'&params[sum]='+sum+'&params[projectId]=440816&params[resultUrl]=https://last-stay.ru&params[desc]=donate&params[secretKey]='+data.secret_key+'&params[signature]='+getSignature(nickname, 'donate', sum, data.secret_key)+'&params[ip]='+ip+'&params[test]=1');
        let result = response.data.result.type;
        let Created_URL = response.data.result.redirectUrl;
        let Error_URL = 'https://last-stay/donate/error'

        if(result === 'redirect') {
            return Created_URL;
        } else {
            return Error_URL;
        }

        
    }
}

export default new DonateService();