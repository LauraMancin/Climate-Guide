🌤️ Climate Guide

Aplicação web simples de consulta de clima, construída em JavaScript puro (vanilla), que consome a API do OpenWeather para exibir as condições climáticas atuais de qualquer cidade.

📋 Sobre o projeto

O Climate Guide permite ao usuário buscar uma cidade e visualizar suas condições climáticas atuais em um card com fundo que muda dinamicamente de acordo com o clima.

✨ Funcionalidades
🔍 Busca de clima por nome de cidade
🌡️ Temperatura atual e sensação térmica
💧 Umidade do ar
🌬️ Velocidade do vento
🎨 Fundo e cor de destaque dinâmicos conforme a condição climática (sol, nuvens ou chuva)
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6+, vanilla)
OpenWeather API — clima atual


🔒 Considerações de segurança

Este projeto foi desenvolvido para fins de estudo e portfólio, e por isso possui algumas limitações de segurança que não são recomendadas em produção:

Chave de API exposta no front-end: a chave da OpenWeather está diretamente no script.js, visível para qualquer pessoa que inspecione o código do navegador. Em uma aplicação real, essa chave deveria ficar em um back-end (ex: Node.js/Express) ou em variáveis de ambiente, nunca exposta no lado do cliente.
Sem limitação de requisições (rate limiting): como a chamada é feita diretamente do navegador, não há controle sobre quantas requisições um usuário mal-intencionado poderia disparar usando a chave exposta.
Sem validação/sanitização robusta de entrada: o campo de busca de cidade não passa por sanitização adicional além do trim(), o que é aceitável aqui pois o valor só é usado como parâmetro de URL para uma API externa (sem risco de injeção em banco de dados ou HTML), mas seria um ponto de atenção em projetos com persistência de dados.

Próximo passo natural para produção: mover as chamadas de API para um back-end simples que armazene a chave em variável de ambiente e atue como proxy entre o front-end e a OpenWeather.

🗺️ Roadmap
 Mover chamadas de API para um back-end (proxy) e remover a chave do front-end
 Adicionar mais dados climáticos (nascer/pôr do sol, chuva, rajada de vento)
 Adicionar previsão para os próximos dias

👩‍💻 Autora
Desenvolvido por Laura, estudante de Desenvolvimento de Sistemas com foco em AI Security.