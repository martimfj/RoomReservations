## Reserva de salas - Dicionário do banco de dados

**Salas**

- id_sala: número identificador de cada sala de estudo. Possui tipo “INT”, não pode ser nula e deve ser única. Serve como chave primária da entidade.

- nome: nome da sala de estudo. É do tipo “VARCHAR” com tamanho máximo de 30 caracteres, não pode ser nula.

- lugares: capacidade da sala, a partir de quantas cadeiras estão disponíveis na sala. É do tipo “INT” e não - pode ser nula.

**Usuários**

- id_usuario: número identificador do usuário. É do tipo “INT”, não pode ser nula e deve ser única. Além disso, é a chave primária da tabela.

- email: email do usuário. É do tipo “VARCHAR” de no máximo 100 caracteres e não pode ser nulo e não pode ser repetido.

- nome: nome do usuário. É do tipo “VARCHAR” de no máximo 80 caracteres e não pode ser nula.

- senha: a senha do usuaria. É tipo “VARCHAR” de no máximo 50 caracteres. Não pode ser nula. Não usamos nenhuma forma de criptografia ou hash, apesar de saber que não é indicado armazenar senhas dessa forma.

- semestre: o semestre em que o usuário está cursando, é um “INT”. Recebe somente o número correspondente ao semestre.

- curso: é um “INT” que referencia o id de uma outra tabela. É uma chave estrangeira para a tabela de cursos.

- reputacao: indica a nota que este aluno recebe, uma espécie de reputação em porcentagem, onde 100 (ou seja, 100%) representa a nota máxima de reputação e 0 (0%) a pior nota. Esta nota é atribuída a partir da colaboração do usuário com as regras da biblioteca. Quanto maior for a colaboração maior será a porcentagem da reputação.

**Cursos**

- id_curso: número identificador do curso. É do tipo “INT”, não pode ser nula e deve ser única. Além disso, é a chave primária da tabela.

- nome: nome do usuário. É do tipo “VARCHAR” de no máximo 80 caracteres e não pode ser nula.

- tipo: “INT” não nulo. 0 significa graduação e 1 significa pós-graduação.

**Reservas**

- id_sala: número identificador da sala. É do tipo “INT” não nulo, chave estrangeira que relaciona a tabela de salas. Junto com o id_usuario serve como chave primária dessa tabela.

- id_usuario: número identificador do usuário. É do tipo “INT” não nulo, chave estrangeira que relaciona a tabela de usuários. Junto com o id_sala serve como chave primária dessa tabela.

- dia: data da reserva. É do tipo "DATETIME” e não pode ser nulo.
  
- entrada: horário de entrada do usuário na sala de estudo. É do tipo “TIME” e não pode ser nulo.

- saida: horário de saída do usuário da sala. É do tipo “TIME” e não pode ser nulo.

**Reclamações**

- id_reclamacao: número identificador da reclamação. É do tipo “INT”, não pode ser nula e deve ser única. Além disso, é a chave primária da tabela.

- id_usuario: identificador do usuário responsável pela reclamação. É do tipo “INT” e é chave estrangeira para a tabela de usuários. Não pode ser nula.

- id_sala: identificador da sala a qual a reclamação está sendo feita. É do tipo “INT” e é chave estrangeira para a tabela de usuários. Não pode ser nula.

- tipo: é do tipo “INT” e é responsável por descrever a natureza da reclamação. Os seus números significam o seguinte:
    - 0: reclamação sobre coisas quebradas
    - 1: reclamação sobre a biblioteca
    - 2: reclamação sobre sujeira

- descrição: este campo é destinado para descrever a reclamação em si, ou fazer algum tipo de observação ou comentário. É do tipo “TEXT” com tamanho de 63 mil carácter. 

- horario: horário em que foi feita a reclamação. É do tipo “DATETIME” e não pode ser nula.

- estado: indica se a reclamação já foi resolvida ou não. Caso a reclamação esteja em aberta, pendente o estado vai indicar “0”. Caso a reclamação já tenha sido resolvida o estado vai indicar “1”. Portanto o tipo é “INT” e não pode ser nulo.

