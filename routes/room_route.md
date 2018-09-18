**Mostra Salas**
----

Retorna JSON com dados de todos as salas cadastradas no banco de dados.

* **URL**

    /salas/

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
        "id_sala": 1,
        "nome_sala": "1",
        "lugares": 5
    },
    {
        "id_sala": 2,
        "nome_sala": "2",
        "lugares": 4
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe salas cadastradas no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/salas/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Sala**
----

Retorna JSON com dados de uma sala especificada.

* **URL**

    /sala/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    `:id_sala`

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "id_sala": 1,
        "nome_sala": "1",
        "lugares": 5
    }
    ```

* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe uma sala com esse ID no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/sala/:id_sala', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Adiciona Sala**
----

Insere um nova sala no banco de dados, passando as informações necessárias.

* **URL**

    /sala/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "nome": "nome da sala",
        "lugares": "capacidade"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 201 CREATED <br />
    * **Conteúdo:** `{message: "Sala criado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na criação de uma sala no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/sala', {
            method: 'POST',
            body: JSON.stringify({
                "nome":     this.state.nome_sala,              
                "lugares":    this.state.capacidade
                
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```


**Remove Sala**
----

Remove uma sala do banco de dados, passando o ID desta sala.

* **URL**

    /sala/

* **Método:**

    `DELETE`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_sala": "ID da sala"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Sala removida com sucesso."}`

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

**Atualiza Sala**
----

Atualiza alguma informação a respeito de uma sala, passando o ID da sala e a informação a ser trocada.

* **URL**

    /sala/

* **Método:**

    `PUT`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_sala": "ID da sala",
        "lugares": "nova capacidade"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Sala atualizada com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados do usuário no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/user', {
            method: 'PUT',
            body: JSON.stringify({
                "id_sala":      this.state.id_sala
                "lugares":     this.state.capacidade,                         
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```