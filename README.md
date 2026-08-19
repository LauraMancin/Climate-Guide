🌤️ Climate Guide

Aplicação web de clima construída em JavaScript puro (vanilla), que consome a API do OpenWeather e da Open-Meteo para exibir condições climáticas em tempo real de qualquer cidade do mundo.

📋 Sobre o projeto

O Climate Guide permite ao usuário buscar uma cidade e visualizar, em uma interface responsiva com fundo dinâmico, um panorama completo das condições climáticas atuais e da previsão para as próximas horas.

✨ Funcionalidades
🔍 Busca de clima por nome de cidade
🌡️ Temperatura atual e sensação térmica
💧 Umidade do ar
🌬️ Velocidade do vento e rajadas
🌧️ Volume de chuva na última hora
🌅 Horário de nascer e pôr do sol (fuso de Brasília)
🌙 Fase da lua atual
🍂 Estação do ano calculada automaticamente (hemisfério sul)
📊 Gráfico combinado de temperatura e chuva para as próximas 24h
🎨 Fundo e paleta de cores dinâmicos conforme a condição climática
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6+, vanilla)
Chart.js — visualização de dados
OpenWeather API — clima atual e previsão de 5 dias/3h
Open-Meteo API — fase da lua

🔒 Considerações de segurança

Este projeto foi desenvolvido para fins de estudo e portfólio, e por isso possui algumas limitações de segurança que não são recomendadas em produção:

- Chave de API exposta no front-end: a chave da OpenWeather está diretamente no script.js, visível para qualquer pessoa que inspecione o código do navegador. Em uma aplicação real, essa chave deveria ficar em um back-end (ex: Node.js/Express) ou em variáveis de ambiente, nunca exposta no lado do cliente.

Sem limitação de requisições (rate limiting): como a chamada é feita diretamente do navegador, não há controle sobre quantas requisições um usuário mal-intencionado poderia disparar usando a chave exposta.
Sem validação/sanitização robusta de entrada: o campo de busca de cidade não passa por sanitização adicional além do trim(), o que é aceitável aqui pois o valor só é usado como parâmetro de URL para uma API externa (sem risco de injeção em banco de dados ou HTML), mas seria um ponto de atenção em projetos com persistência de dados.

Próximo passo natural para produção: mover as chamadas de API para um back-end simples que armazene a chave em variável de ambiente e atue como proxy entre o front-end e a OpenWeather.

💡 Próximos Passos:
O planejamento futuro desse site é adicionar um gráfico que mostre a temperatura e a chuva ao longo do dia.

👩‍💻 Autora

Desenvolvido por Laura, estudante de Desenvolvimento de Sistemas.