import c from 'config';
import { response } from 'express';
import DonateService from '../services/DonateService.js';

class DonateController {

    async donate(req, res) {
        try {
            const {nickname, sum, promo} = req.query;
            let ips = (
                req.headers['cf-connecting-ip'] ||
                req.headers['x-real-ip'] ||
                req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress || ''
            ).split(',');
            
            let ip = ips[0].trim();
        
            const response = await DonateService.donate({nickname, sum, promo, ip});
            
            res.redirect(response);
        } catch (e) {
            console.log(e);
        }
    }

    async callback(req, res) {
        try {

            console.log(req.query);
            res.json({"result": {
                "message": "Запрос успешно обработан"
            }});
        } catch (e) {
            console.log(e);
        }
    }
}

export default new DonateController();