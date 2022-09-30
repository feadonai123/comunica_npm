/*
  IMPORTANTE
  Incluir API_COMUNICA no arquivo .env
*/

import Comunica from "./src/index.js";

Comunica.sendTelegramMessage({
  mensagem: "Olá, mundo!",
  canalId: "XXXXX",
  origem: "Teste"
}).then(result => {
  console.log(result)
})