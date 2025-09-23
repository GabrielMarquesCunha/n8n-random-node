Estrutura:
```
n8n-random/
 ├─ .n8n/
 │   ├─ binary/
 │   ├─ config
 │   ├─ git/
 │   ├─ ssh/
 │   ├─ custom/
 │   │   └─ n8n-nodes-random/
 │   │       ├─ dist/
 │   │       ├─ icons/
 │   │       ├─ src/
 │   │       ├─ package.json
 │   │       └─ ...
 ├─ docker-compose.yml
 ├─ README.md
```
## Pré-requisitos 
### 1. Docker e Docker Compose

- Baixe e instale o Docker Desktop:
  - [Windows / Mac](https://www.docker.com/products/docker-desktop/)
  - Linux: use o gerenciador de pacotes da sua distro.
- Verifique a instalação:
  ```bash
  docker --version
  docker compose version
  ```
  ### 2. Node.js e npm

Para desenvolver e/ou compilar o conector customizado você precisa do Node.js:

- Baixe e instale a versão LTS (22.x): [https://nodejs.org/](https://nodejs.org/)
- Verifique a instalação:
  ```bash
  node -v
  npm -v
  ```
*(O Node/NPM só é necessário para **desenvolver** ou **compilar** o conector customizado. Para apenas executar o n8n via Docker não é necessário.)*


------------------------------------------------- ##Executando o serviço localmente ------------------------------------------------

 1. Crie uma pasta e clone este repositório:
   ```bash
   git clone https://github.com/GabrielMarquesCunha/n8n-random-node.git
   cd n8n-random-node
   ```

2. Suba os containers do n8n e Postgres:
   ```bash
   docker compose up -d
   ```

3. Acesse o n8n no navegador:
   - URL: [http://localhost:5678](http://localhost:5678)

4. testar o conector:

```bash
cd .n8n/custom/n8n-nodes-random
npm install
npm run build
docker restart n8n-random-n8n-1
```


5. Acesse o n8n no navegador:
   - URL: [http://localhost:5678](http://localhost:5678)
  
6. Crie um novo Workflow:
   
 <img width="582" height="284" alt="image" src="https://github.com/user-attachments/assets/e9d9477e-c7ad-4a38-89ae-e5752b8e2d6f" />

7. Verifique se o conector **Random** está disponível na lista de nós customizados.
 <img width="399" height="563" alt="image" src="https://github.com/user-attachments/assets/6cf57258-879c-4099-8ccc-44a96bce3841" />
 
- Nome: **Random**
- Operação: **True Random Number Generator**
- Inputs: **Min** (inteiro), **Max** (inteiro)

8. Teste a saída:
   
   <img width="1449" height="500" alt="image" src="https://github.com/user-attachments/assets/38da9246-10ab-447e-ac32-33e4c395ae55" />



FIM.



### Parar os containers:

```bash
docker compose down
```


------------------------------------------------- ##Informações adicionais ------------------------------------------------



## Variáveis de ambiente

Este `docker-compose.yml` já vem configurado com valores padrão:

- **Postgres**
  - Usuário: `n8n`
  - Senha: `n8n`
  - Banco: `n8n`
- **n8n**
  - Porta: `5678`
  - Autenticação básica desativada

Não é necessário `.env` para rodar. Caso queira personalizar as credenciais, edite o `docker-compose.yml`. 

Desenvolvido por Gabriel Marques da Cunha
