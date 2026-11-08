<div align="center">

[![English](https://img.shields.io/badge/English-2b2f36?style=for-the-badge)](README.md)
[![Português](https://img.shields.io/badge/Portugu%C3%AAs-7ed957?style=for-the-badge&labelColor=07090c)](README.pt-BR.md)

</div>

# Portfolio

Portfólio pessoal de **Everton Gonçalves**: um site de página única moderno, responsivo e com tema escuro, feito em Angular.

## Funcionalidades

- Seções: Início, Sobre, Experiência, Tecnologias Conhecidas, Trabalhos e Contato.
- Botão para alternar entre inglês e português na barra de navegação (lembra a sua escolha).
- Experiência profissional com o tempo calculado a partir das datas, então ele se atualiza sozinho.
- Tecnologias agrupadas em Back-end, Front-end, IA e Utilitários.
- Cards de projetos com filtros Back-End / Front-End.
- Animações ao rolar a página, barra de navegação fixa e menu mobile.
- Conteúdo alimentado por arquivos JSON (fácil de atualizar, sem mexer no código).

## Tecnologias

- [Angular 21](https://angular.dev) (LTS): componentes standalone, signals e o novo control flow (`@if` / `@for`)
- TypeScript 5.9
- SCSS com variáveis CSS (custom properties)
- [Bootstrap Icons](https://icons.getbootstrap.com)
- Karma + Jasmine para testes unitários

## Requisitos

- **Node.js 20.19+ ou 22.12+** (exigência do Angular 21)
- npm

## Como rodar

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm start
```

Abra <http://localhost:4200/>. A aplicação recarrega automaticamente quando você altera um arquivo.

## Scripts

| Comando         | Descrição                                          |
| --------------- | -------------------------------------------------- |
| `npm start`     | Servidor de desenvolvimento em `http://localhost:4200` |
| `npm run build` | Build de produção em `dist/portfolio`              |
| `npm test`      | Testes unitários com Karma (modo watch)            |

## Atualizando o conteúdo

| O quê                 | Arquivo                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| Projetos              | `src/assets/cards-jsons/projects.json`                                        |
| Skills de back-end    | `src/assets/jsons/backend.json`                                               |
| Skills de front-end   | `src/assets/jsons/frontend.json`                                              |
| Skills de IA          | `src/assets/jsons/ai.json`                                                    |
| Utilitários           | `src/assets/jsons/Utilitaries.json`                                           |
| Experiência           | `src/assets/jsons/experience.json` (datas, tipo, skills)                      |
| Textos / traduções    | `src/assets/i18n/en.json` e `src/assets/i18n/pt.json`                         |
| Foto de perfil        | `src/assets/imgs/photo.jpg`                                                   |

## Traduções

Todo texto visível fica em `src/assets/i18n/<idioma>.json` e é lido por chaves de tradução:

```html
<h2>{{ 'works.title' | translate }}</h2>
```

Para adicionar um texto, crie a mesma chave nos dois arquivos. Se faltar uma chave em português, o texto em inglês é exibido.

## Estrutura do projeto

```text
src/
├── app/
│   ├── first-page/            # Seção inicial (hero)
│   ├── who-i-am/              # Seção sobre mim
│   ├── known-technologies/    # Seção de skills
│   ├── experience/            # Linha do tempo da experiência
│   ├── works/                 # Seção de projetos
│   ├── contact/               # Contato + rodapé
│   ├── i18n/                  # Serviço de idioma e pipe `translate`
│   ├── shared/                # Peças reutilizáveis (animação ao rolar, cálculo de duração)
│   ├── Services/              # Serviços de dados (HTTP + JSON)
│   └── interfaces/            # Modelos TypeScript
├── assets/                    # Imagens e dados em JSON
└── styles.scss                # Tokens de design e utilitários globais
```

## Contato

- GitHub: [EvertonMLGoncalves](https://github.com/EvertonMLGoncalves)
- LinkedIn: [Everton Mikey Litka Gonçalves](https://www.linkedin.com/in/everton-mikey-litka-gonçalves)
- Email: evertonmlgoncalves@gmail.com

