USE RoomReservations;

-- PROCEDURES
DROP PROCEDURE IF EXISTS adiciona_usuario;
DROP PROCEDURE IF EXISTS adiciona_reserva;
DROP PROCEDURE IF EXISTS adiciona_reclamacao;

-- Função para adicionar um usuário 
DELIMITER //
CREATE PROCEDURE adiciona_usuario (IN novo_email VARCHAR(100), 
IN novo_nome VARCHAR(80),
IN novo_senha VARCHAR(50),
IN novo_curso INT,
IN novo_semestre INT)
BEGIN
    INSERT INTO Usuarios (email, nome, senha, id_curso, semestre) 
    VALUE (novo_email, novo_nome, novo_senha, novo_curso, novo_semestre);
END//
DELIMITER ;

-- Função para adicionar uma reserva 
DELIMITER //
CREATE PROCEDURE adiciona_reserva (IN novo_idusuario INT, IN novo_idsala INT, IN novo_entrada TIME, IN novo_saida TIME )
BEGIN
    INSERT INTO Reservas (id_usuario, id_sala, dia, entrada, saida) 
    VALUE (novo_idusuario, novo_idsala, CURDATE(), novo_entrada, novo_saida);
END //
DELIMITER ;

-- Função para adicionar uma reclamacao 
DELIMITER //
CREATE PROCEDURE adiciona_reclamacao (IN novo_idusuario INT, 
IN novo_idsala INT,
IN novo_tipo INT,
IN novo_descricao TEXT(63.000))
BEGIN
    INSERT INTO Reclamacoes (id_usuario, id_sala, tipo_r, descricao) 
    VALUE (novo_idusuario, novo_idsala, novo_tipo, novo_descricao);
END //
DELIMITER ;


-- VIEWS
DROP VIEW IF EXISTS usuario_info;
DROP VIEW IF EXISTS reserva_info;
DROP VIEW IF EXISTS reclamacao_info;

-- Consulta_usuario
CREATE VIEW usuario_info AS 
    SELECT email, nome, senha, semestre, reputacao, nome_curso, tipo
    FROM Usuarios 
		INNER JOIN Cursos USING (id_curso);

-- Consulta de reserva
CREATE VIEW reserva_info AS 
    SELECT nome_sala, nome, dia, entrada, saida
    FROM Reservas
		INNER JOIN Salas USING (id_sala)
        INNER JOIN Usuarios USING(id_usuario);

-- Consulta de reclamações
CREATE VIEW reclamacao_info AS 
    SELECT id_reclamacao, nome, nome_sala, tipo_r, descricao, horario, estado
    FROM Reclamacoes
		INNER JOIN Salas USING (id_sala)
        INNER JOIN Usuarios USING(id_usuario);


-- TRIGGER
DROP TRIGGER IF EXISTS trig_usuario;
DROP TRIGGER IF EXISTS trig_sala;

-- Caso um usuário seja deletado, sua reserva e reclamação também será
DELIMITER //
CREATE TRIGGER trig_usuario 
BEFORE DELETE ON Usuarios
FOR EACH ROW
BEGIN
    DELETE FROM Reservas
	WHERE id_usuario = old.id_usuario;
    DELETE FROM Reclamacoes
	WHERE id_usuario = old.id_usuario;
END//
DELIMITER ;

-- Caso uma sala seja deletada, sua reserva e reclamação também será
DELIMITER //
CREATE TRIGGER trig_sala 
BEFORE DELETE ON Salas
FOR EACH ROW
BEGIN
    DELETE FROM Reservas
	WHERE id_sala = old.id_sala;
    DELETE FROM Reclamacoes
	WHERE id_sala = old.id_sala;
END//
DELIMITER ;


-- FUNCTION
SET GLOBAL log_bin_trust_function_creators = 1;
DROP FUNCTION IF EXISTS reclamacoes_abertas;
DROP FUNCTION IF EXISTS reclamacoes_fechadas;

-- Verifica quantas reclamações estão em aberto (ainda não resolvida)
DELIMITER //
CREATE FUNCTION reclamacoes_abertas() RETURNS INT
BEGIN
	DECLARE aberta INT;
	SELECT COUNT(estado) INTO aberta FROM Reclamacoes WHERE estado=0;
    RETURN aberta;
END //
DELIMITER ;

-- Verifica quantas reclamações já estão fechadas (resolvidas)
DELIMITER //
CREATE FUNCTION reclamacoes_fechadas() RETURNS INT
BEGIN
	DECLARE fechada INT;
	SELECT COUNT(estado) INTO fechada FROM Reclamacoes WHERE estado=1;
    RETURN fechada;
END //
DELIMITER ;

