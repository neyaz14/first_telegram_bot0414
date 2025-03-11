const axios = require('axios');
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const Base_Url = `https://api.telegram.org/bot${token}`


function getAxiosInstance() {
    return{
        get(method, params){
            return axios.get(`/${method}`,{
                baseURL: Base_Url,
                params
            })
        },
        psot(method, data){
            return axios.get(`/${method}`,{
                method:'post',
                baseURL: Base_Url,
                url:`/${method}`,
                data
            })
        }
    }
}

module.exports= { axiosInstance: getAxiosInstance()}
