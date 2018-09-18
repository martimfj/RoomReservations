**Mostra Reclamações**
----

Retorna JSON com dados de todos as reclamações.

* **URL**

    /reclamacoes/

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
        "nome": "Bruna Kimura",
        "nome_sala": "1",
        "tipo_r": 0,
        "descricao": "tomada não funciona",
        "horario": "2018-09-18T03:38:42.000Z",
        "estado": 1
    },
    {
        "nome": "Bruna Kimura",
        "nome_sala": "2",
        "tipo_r": 0,
        "descricao": "cadeira está quebrada",
        "horario": "2018-09-18T03:38:42.000Z",
        "estado": 1
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe reclamações no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reclamacoes/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Reclamação**
----

Retorna JSON com dados de uma reclamação em específico.

* **URL**

    /reclamacao/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    `:id_reclamacao`

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "id_reclamacao": 1,
        "id_usuario": 1,
        "id_sala": 1,
        "tipo_r": 0,
        "descricao": "tomada não funciona",
        "horario": "2018-09-18T03:38:42.000Z",
        "estado": 1
    }
    ```

* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe uma reclamação com esse ID no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reclamacao/:id_reclamacao', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Adiciona Reclamação**
----

Insere uma nova reclamação no banco de dados, passando as informações necessárias.

* **URL**

    /reclamacao/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_usuario": 1,
        "id_sala": 1,
        "tipo": 0,
        "descricao": "a porta caiu"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 201 CREATED <br />
    * **Conteúdo:** `{message: "Reclamação criada com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na criação de uma reclamação no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reserva', {
            method: 'POST',
            body: JSON.stringify({
                "id_usuario": this.state.id_user,
                "id_sala": this.state.id_room,
                "tipo": this.state.type,
                "descricao": this.state.description
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Remove Reclamação**
----

Remove uma reclamação do banco de dados, passando o ID da reclamação.

* **URL**

    /reclamacao/

* **Método:**

    `DELETE`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_reclamacao": "ID da reclamação"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Reclamação removida com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na remoção de uma reclamação no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reclamacao', {
            method: 'DELETE',
            body: JSON.stringify({
                "id_reclamacao":    this.state.id_reclamacao
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Atualiza Reclamação**
----

Atualiza alguma informação da reclamação no banco de dados, passando o ID da reclamação e a informação a ser trocada.

* **URL**

    /reclamacao/

* **Método:**

    `PUT`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_reclamação": "ID da reserva",
        "descricao": "nova descrição"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Reclamação atualizada com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados da reclamação no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/reclamacao', {
            method: 'PUT',
            body: JSON.stringify({
                "id_reserva":   this.state.reserva_id,            
                "descricao":    this.state.new_date            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Reclamações Abertas**
----

Retorna JSON com a quantidade reclamações abertas

* **URL**

    /openreclamacoes/

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
        "reclamacoes_abertas()": 4
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados da reclamação no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/openreclamacoes/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Reclamações Fechadas**
----

Retorna JSON com a quantidade reclamações fechadas

* **URL**

    /closedreclamacoes/

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
        "reclamacoes_fechadas()": 2
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados da reclamação no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/closedreclamacoes/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```


