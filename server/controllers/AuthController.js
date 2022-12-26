import { response } from 'express';
import AuthService from '../services/AuthService.js';

class AuthController {
    async vk(req, res) {
        try {
            const response = await AuthService.vk();
            
            res.redirect(response);
        } catch (e) {
            console.log(e);
        }
    }

    async callback(req, res) {
        try {
            const {code} = req.query;
            const response = await AuthService.callback({code});
            if(response.id) {
                res.cookie('id', response.id, {maxAge:2147483647});
                res.cookie('fname', response.fname, {maxAge:2147483647});
                res.cookie('sname', response.sname, {maxAge:2147483647});
                res.cookie('code', response.code, {maxAge:2147483647});
            }
            res.send('')
        } catch (e) {
            console.log(e);
        }
    }
}

export default new AuthController();