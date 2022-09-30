IMPORTANTE: Incluir API_COMUNICA no arquivo .env

Trecho exemplo código
```
import Comunica from "comunica";

Comunica.sendTelegramMessage({
  mensagem: "Olá, mundo!",
  canalId: "XXXXX",
  origem: "Teste"
}).then(result => {
  console.log(result)
})
```