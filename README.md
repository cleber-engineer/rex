![GitHub top language](https://img.shields.io/github/languages/top/oneOffJS/rex.community)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/oneOffJS/rex.community/master)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/oneOffJS/rex.community/Photosnap)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/oneOffJS/rex.community/master)

<img src="https://github.com/oneOffJS/rex/raw/master/rex.png" alt="Rex Logotipo" width="300" height="300" />

## Simples, pequeno e imperfeito - "Uma visão além da programação"

Ninguém precisa ter muitas habilidades para desenvolver um software que funcione, fazer direito é outra história. Desenvolver um software de maneira correta é um desafio que deixo lançado. Requer maturidade e conhecimentos que a marioria dos programadores ainda não tem.

Arquiteturar um sistema é como uma folha em branco, a liberdade de programar do jeito que faça sentido para o negócio.

### Meu objetivo...

...é minimizar a quantidade de denvolvedores necessários para construir e manter um determinado sistema.

Quando um software é desenvolvido da maneira certa, precisamos de poucos desenvolvedores para construir e manter. As mudanças são cirurgicas (simples e fácil). Deixamos de ser eficiente e nos tornamos eficazes (Faça a coisa certa da forma errada, mas não faça a coisa errada da forma certa). Os esforços são minimizados, as funcionalidades e flexibilidades são maximizadas.

### Muitos querem ser...

...um Framework, mas não sou, muito menos uma Library. Diferente deles sou uma Arquitetura Inspiracional. Autores de Frameworks conhecem seus próprios problemas e escreve códigos para resolvê-los - não os seus problemas. Seus problemas provavelmente coincidirão um pouco com os deles. Se não fosse o caso, Frameworks não seriam tão populares.

Esses autores querem retribuir à comunidades (Isso é louvável). Pense nisso com cuidado quando usar um Framework. O relacionamento entre você e o autor do Framework é extraordinariamente assimétrico. Você se compromete muito com o Framework, mas o autor do Framework não estabelece nenhum compromisso com você.

Você pode usar um Framework, só não se acople a ele (Mantenha distância). Frameworks são detalhes que pertence ao circulo mais externo da arquitetura. Não case com um Framework. Mantenha o Framework atrás de um limite arquitetural. Este projeto é uma maneira de conseguir o leite sem comprar a vaca.





### Arquitetura
  Baseada em um sistema de **Monorepo** uma estratégia de desenvolvimento de software onde multiplas aplicações são armazenados em um único repositório.

#### Vantagens
  - **Reutilização de código:** Funcionalidades semelhantes ou comunicações, podem ser compartilhadas entre as aplicações, sem a necessidade de muitas dependências.
  - **Gerenciamento de dependências:** A aplicação pode ser facilmente otimizada, havendo um grande reuzo de dependências na mesma base de código.
  - **Refatoração de códigos:** Tendo acesso a toda a base de código, os desenvolvedores podem garantir que todo ecossistema estará funcionando à cada rafatoração.
  - **Colaboração entre equipes:** As dependências são compartilhadas à partir da fonte, as equipes podem ter visão e reutilização de códigos escritos por outras equipes.

#### Desvantagens
  - **Versionamento:** Gerenciamento de versões é mais complexa uma vez que cada aplicação tem um versionamento próprio
  - **Segurança:** Acesso de leitura a todo o projeto, possivelmente apresentando novas questões de segurança.

## Sumário
  1. [Dependências](#1-dependências)
  2. [Estrututura do projeto](#2-estrututura-do-projeto)
  3. [Comandos](#3-comandos)
  4. [Como Contribuir?](#4-como-contribuir?)
  5. [Licença](#4-licenca)

## 1. Dependências
  - [Node.js](https://nodejs.org) - `versão 12.18.0 ou superior`
  - [Yarn](https://yarnpkg.com) - `versão 1.17.3 ou superior`

**Obs.** Versões listadas podem estar desatualizadas, consulte sempre o arquivo [package.json](./package.json) para saber as versões corretas.

## 2. Estrututura do projeto
O Core do sistema possui os arquivos base do monorepo, **apps** contém as aplicações específicas `(Ex. photosnap, todomvc, etc)` e **shared** contém os módulos que serão compartilhados entre as aplicações `bibliotecas (f, h)`.

![alt Diagrama](diagrama.jpg "Diagrama")

**Módulos**
  - [apps](./apps/README.md)
  - [shared](./shared/README.md)

## 3. Comandos
  #### Setup
  ```javascript
    // Montagem do setup do projeto
    yarn install
    yarn setup
  ```

## 4. Como Contribuir?
  Adoraríamos ter sua ajuda em nosso projeto! Clique [aqui](./CONTRIBUTING.md) para obter mais informações sobre o que estamos procurando e como começar.

## 5. Licença
  [MIT License](./LICENSE.md)
