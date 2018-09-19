**Mostra Cursos**
----

Retorna JSON com dados de todos os cursos.

* **URL**

    /cursos/

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
        "id_curso": 1,
        "nome_curso": "Engenharia da Computação",
        "tipo": 0
    },
    {
        "id_curso": 2,
        "nome_curso": "Engenharia Mecânica",
        "tipo": 0
    },
    {
        "id_curso": 3,
        "nome_curso": "Engenharia Mecatronica",
        "tipo": 0
    },
    {
        "id_curso": 4,
        "nome_curso": "Administração",
        "tipo": 0
    },
    {
        "id_curso": 5,
        "nome_curso": "Economia",
        "tipo": 0
    }
    ```
 
* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe cursos cadastrados no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/cursos/', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Mostra Curso**
----

Retorna JSON com dados de um curso em específico.

* **URL**

    /curso/

* **Método:**

    `GET`
  
*  **Parâmetros da URL**

    **Required:**

    `:id_curso`

* **Parâmetros de Body**

    None

* **Resposta de Sucesso:**

    * **Código:** 200 OK<br />
    * **Conteúdo:**

    ```json
    {
        "id_curso": 1,
        "nome_curso": "Engenharia da Computação",
        "tipo": 0
    }
    ```

* **Resposta de Erro:**

  * **Código:** 404 NOT FOUND <br />
    **Conteúdo:** `{ error : "Não existe um curso com esse ID no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/curso/:id_curso', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
    ```

**Adiciona Curso**
----

Insere um novo curso no banco de dados, passando as informações necessárias.

* **URL**

    /curso/

* **Método:**

    `POST`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "nome_curso": "Direito",
        "tipo": 0
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 201 CREATED <br />
    * **Conteúdo:** `{message: "Curso criado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro na criação de um curso no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/curso', {
            method: 'POST',
            body: JSON.stringify({
                "nome_curso": this.state.curso_name,
                "tipo": this.state.curso_type
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Remove Curso**
----

Remove um curso do banco de dados, passando o ID do curso.

* **URL**

    /curso/

* **Método:**

    `DELETE`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_curso": "ID da curso"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Curso removido com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao remover curso do banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/curso', {
            method: 'DELETE',
            body: JSON.stringify({
                "id_curso":    this.state.curso_id            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```

**Atualiza Curso**
----

Atualiza alguma informação do curso no banco de dados, passando o ID do curso e a informação a ser trocada.

* **URL**

    /curso/

* **Método:**

    `PUT`
  
*  **Parâmetros da URL**

    **Required:**

    None

* **Parâmetros de Body**

    ```json
    {
        "id_curso": "ID da curso",
        "curso_nome": "Engenharia dos Computers!"
    }
    ```

* **Resposta de Sucesso:**

    * **Código:** 200 OK <br />
    * **Conteúdo:** `{message: "Curso atualizado com sucesso."}`

* **Resposta de Erro:**

  * **Código:** 500 INTERNAL SERVER ERROR <br />
    **Conteúdo:** `{ error : "Erro ao atualizar dados do curso no banco de dados." }`

* **Exemplo de chamada:**

    ```javascript
        fetch('/curso', {
            method: 'PUT',
            body: JSON.stringify({
                "id_curso": this.state.curso_id             
                "curso_nome":  this.state.curso_name            
            }),
            headers: {"Content-Type": "application/json"}
        })
    ```




