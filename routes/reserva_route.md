**Mostra Reservas**
----

Retorna JSON com dados de todos as reservas.

* **URL**

    /reservas/

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
        "nome_sala": "1",
        "nome": "Nome do usuário",
        "entrada": "Data e horário de entrada",
        "saida": "Data e horário de entrada"
    },
    {
        "nome_sala": "2",
        "nome": "Nome do usuário",
        "entrada": "Data e horário de entrada",
        "saida": "Data e horário de entrada"
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe reservas cadastradas no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reservas/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Reserva**
----

Retorna JSON com dados de uma reserva em específico.

* **URL**

    /reserva/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    `:id_reserva`

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "id_reserva": 1,
        "id_sala": 1,
        "id_usuario": 1,
        "entrada": "Data e horário de entrada",
        "saida": "Data e horário de entrada"
    }
    ```

* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe uma reserva com esse ID no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reserva/:id_reserva', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Adiciona Reserva**
----

Insere uma nova reserva no banco de dados, passando as informações necessárias.

* **URL**

    /reserva/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_usuario": 1,
        "id_sala": 1
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 201 CREATED <br />
    * **Conteúdo:** `{message: "Reserva criada com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na criação de uma reserva no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reserva', {
            method: 'POST',
            body: JSON.stringify({
                "id_usuario": this.state.id_user,
                "id_sala": this.state.id_room
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Remove Reserva**
----

Remove uma reserva do banco de dados, passando o ID da reserva.

* **URL**

    /reserva/

* **Método:**

    `DELETE`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_reserva": "ID da reserva"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Reserva removida com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao remover usuário do banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reserva', {
            method: 'DELETE',
            body: JSON.stringify({
                "id_reserva":    this.state.id_reserva            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Atualiza Reserva**
----

Atualiza alguma informação da reserva no banco de dados, passando o ID da reserva e a informação a ser trocada.

* **URL**

    /reserva/

* **Método:**

    `PUT`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_reserva": "ID da reserva",
        "data": "nova data"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Reserva atualizada com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados da reserva no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reserva', {
            method: 'PUT',
            body: JSON.stringify({
                "id_reserva":   this.state.reserva_id             
                "data":        this.state.new_date            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```




