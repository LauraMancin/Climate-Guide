# 🌦️ Climate Guide — v3

> Um aplicativo de clima completo com visualizações interativas, previsões detalhadas e boas práticas de segurança.

🇧🇷 [Português](#-português) | 🇺🇸 [English](#-english)

---

## 🇧🇷 Português

### Sobre o projeto

O **Climate Guide** é um aplicativo de clima que combina dados de múltiplas APIs meteorológicas para oferecer uma visão completa das condições do dia: temperatura, precipitação, nascer e pôr do sol, fase da lua, rajadas de vento, volume de chuva — e agora, gráficos e a probabilidade de arco-íris.

### ✨ Novidades da v3

- 📊 **Gráficos interativos** com Chart.js para temperatura e precipitação ao longo do dia
- 🌈 **Probabilidade de arco-íris** — cálculo baseado na combinação de chuva, posição do sol e cobertura de nuvens
- 🔒 **Chave de API protegida** via variáveis de ambiente (`.env`), removida do código-fonte e do controle de versão

### 🧩 Funcionalidades

- Temperatura e precipitação (gráficos Chart.js)
- Nascer e pôr do sol
- Fase da lua
- Rajadas de vento
- Volume de chuva
- Probabilidade de arco-íris

### 🛠️ Tecnologias

- HTML, CSS, JavaScript
- Chart.js
- OpenWeather API
- Open-Meteo API

### 🔐 Segurança

A partir da v3, a chave da API não é mais exposta no código. Ela é armazenada em um arquivo `.env` (não versionado — incluído no `.gitignore`) e acessada em tempo de execução.

```
# .env.example
API_KEY=sua_chave_aqui
```

> ⚠️ Nunca faça commit do seu arquivo `.env` real. Use `.env.example` como modelo para outros desenvolvedores.

### 🚀 Como rodar

1. Clone o repositório
2. Crie um arquivo `.env` na raiz do projeto com sua chave da API
3. Abra o `index.html` ou rode um servidor local
4. Pronto! 🎉

---

## 🇺🇸 English

### About the project

**Climate Guide** is a weather app that combines data from multiple weather APIs to give a complete picture of the day's conditions: temperature, precipitation, sunrise and sunset, moon phase, wind gusts, rainfall — and now, charts and rainbow probability.

### ✨ What's new in v3

- 📊 **Interactive charts** with Chart.js for temperature and precipitation throughout the day
- 🌈 **Rainbow probability** — calculated from the combination of rain, sun position, and cloud cover
- 🔒 **Protected API key** via environment variables (`.env`), removed from the source code and version control

### 🧩 Features

- Temperature and precipitation (Chart.js graphs)
- Sunrise and sunset
- Moon phase
- Wind gusts
- Rainfall
- Rainbow probability

### 🛠️ Tech stack

- HTML, CSS, JavaScript
- Chart.js
- OpenWeather API
- Open-Meteo API

### 🔐 Security

As of v3, the API key is no longer exposed in the code. It's stored in a `.env` file (git-ignored) and accessed at runtime.

```
# .env.example
API_KEY=your_key_here
```

> ⚠️ Never commit your real `.env` file. Use `.env.example` as a template for other developers.

### 🚀 Getting started

1. Clone the repository
2. Create a `.env` file in the project root with your API key
3. Open `index.html` or run a local server
4. Done! 🎉

👩‍💻 Autora

Desenvolvido por Laura, estudante de Desenvolvimento de Sistemas.
