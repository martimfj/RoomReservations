USE RoomReservations;

DROP PROCEDURE IF EXISTS adiciona_usuario;

DELIMITER //
CREATE PROCEDURE adiciona_usuario (IN novo_email VARCHAR(100), 
IN novo_nome VARCHAR(80) NOT NULL,
IN novo_senha VARCHAR(50) NOT NULL,
IN novo_curso INT NOT NULL,
IN novo_semestre INT NOT NULL,
IN novo_reputacao INT NOT NULL)
BEGIN
    INSERT INTO Usuarios (email, nome, senha, curso, semestre, reputacao) 
    VALUE (novo_email, novo_nome, novo_senha, novo_curso, novo_semestre, novo_reputacao);
END//
DELIMITER ;

DROP FUNCTION IF EXISTS consulta_usuario;

DELIMITER //
CREATE FUNCTION consulta_usuario(id INT) RETURNS VARCHAR(80), VARCHAR(50), INT, INT
BEGIN
    DECLARE  consulta_usuario VARCHAR(80), VARCHAR(50), INT, INT;
    SELECT * INTO consulta_usuario FROM usuario WHERE id_usuario = id;
    RETURN consulta_usuario;
END//
DELIMITER ;
