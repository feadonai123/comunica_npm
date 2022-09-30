import * as dotenv from "dotenv";
dotenv.config();

import RequestHelper from "./utils/RequestHelper.js"

class Comunica{

  static #url = process.env.API_COMUNICA;

  static async sendTelegramMessage({ mensagem, canalId, origem }){
    const result = await RequestHelper.post(this.#url + "/messages/telegram", { canalId, mensagem, origem })
    if(!result.success) return false
    return true
  }
}

export default Comunica