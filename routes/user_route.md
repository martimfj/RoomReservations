**Mostra Usuários**
----

Retorna JSON com dados de todos os usuários.

* **URL**

    /users/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "email": "usuario1@mail.com",
        "nome": "Fulano de Talco",
        "senha": "senhapoderosa",
        "semestre": 6,
        "reputacao": 100,
        "nome_curso": "Engenharia da Computação",
        "tipo": 0
    },
    {
        "email": "usuario2@mail.com",
        "nome": "Arara Voadora",
        "senha": "senhapoderosa",
        "semestre": 4,
        "reputacao": 100,
        "nome_curso": "Engenharia Mecânica",
        "tipo": 0
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe usuários no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/users/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Usuário**
----

Retorna JSON com dados de um usuário especificado.

* **URL**

    /user/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    `:id_usuario`

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "id_usuario": 1,
        "email": "usuario1@mail.com",
        "nome": "Fulano de Talco",
        "senha": "senhapoderosa",
        "semestre": 6,
        "reputacao": 100,
        "nome_curso": "Engenharia da Computação",
        "tipo": 0
    }
    ```

* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe um usuário com esse ID no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/user/:id_usuario', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Adiciona Usuário**
----

Insere um novo usuário no banco de dados, passando as informações necessárias.

* **URL**

    /user/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "email": "email do usuário",
        "nome": "nome do usuário",
        "senha": "senha do usuário",
        "semestre": "semestre do usuário",
        "id_curso": "ID do curso",
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 201 CREATED <br />
    * **Conteúdo:** `{message: "Usuário criado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na criação do usuário no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/user', {
            method: 'POST',
            body: JSON.stringify({
                "email":    this.state.email,
                "nome":     this.state.nome,
                "senha":    this.state.senha,
                "semestre": this.state.semestre,               
                "curso":    this.state.curso
                
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```


**Remove Usuário**
----

Remove um usuário do banco de dados, passando o ID do usuário.

* **URL**

    /user/

* **Método:**

    `DELETE`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_usuario": "ID do usuário"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Usuário removido com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao remover usuário do banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/user', {
            method: 'DELETE',
            body: JSON.stringify({
                "id_usuario":    this.state.user_id            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Atualiza Usuário**
----

Atualiza alguma informação do usuário no banco de dados, passando o ID do usuário e a informação a ser trocada.

* **URL**

    /user/

* **Método:**

    `PUT`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_usuario": "ID do usuário",
        "senha": "nova senha"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Usuário atualizado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados do usuário no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario":   this.state.user_id
                "semestre":     this.state.semestre,               
                "curso":        this.state.curso            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Autenticação de Usuário**
----

Autentica o usuário comparando a senha passada no request, com a senha armazenada no banco de dados.

* **URL**

    /auth/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "email": "email do usuário",
        "senha": "senha do usuário"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{ message: "Usuário autenticado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao acessar o banco de dados." }`

    OU

  * **Código:** 401 UNAUTHORIZED<br />
    **Conteúdo:** `{ error : "As senhas não são iguais." }`

    OU

  * **Código:** 401 UNAUTHORIZED <br />
    **Conteúdo:** `{ error : "O email não existe no banco de dados." }`



* **Exemplo de chamada:**

    ```javascript
        fetch('/auth', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "senha": this.state.senha
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```






