
# 📝 API TO-DO LIST

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


API simples para gerenciamento de tarefas com **Node.js**, **TypeScript** e **Express**, organizada em **controllers**, **services**, **repositories**, **models** e **schemas**.

---

## 🚀 Funcionalidades

- `GET /tasks` – Listar tarefas  
- `GET /tasks/:id` – Buscar por ID  
- `POST /tasks` – Criar tarefa  
- `PUT /tasks/:id` – Atualizar tarefa  
- `DELETE /tasks/:id` – Remover tarefa  

> **Validação de dados** garantida com TypeScript e schemas.

---

## ⚙️ Instalação & Execução

```bash
yarn init -y
yarn add express @types/express -D typescript ts-node nodemon -D
nodemon index.ts
````

## 🧪 Testando com Postman

1. Abra o **Postman** e organize as rotas em pastas por funcionalidade.

   ![Organização de pastas](image.png)

3. Adicione requisições correspondentes a cada pasta.
   
   ![Requisições](image-1.png)

5. Preencha os campos solicitados em cada requisição.
   
   ![Campos da requisição](image-2.png)

7. Envie a requisição e visualize a resposta do servidor.
   
   ![Resposta do servidor](image-4.png)


---

## 📂 Estrutura do Projeto


src/

├─ controllers/     # **Gerencia requisições HTTP**

├─ services/        # **Regras de negócio**

├─ repositories/    # **Manipulação de dados**

├─ models/        # **Estrutura dos dados**

├─ schemas/       # **Validação dos dados**

index.ts          # **Arquivo principal**

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## ✨ Status do Projeto

* **Desenvolvimento:** ✅ Em andamento
* **Testes:** 🔄 Parcialmente implementados
* **Deploy:** 🚀 Futuro

---



