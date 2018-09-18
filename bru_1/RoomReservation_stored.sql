USE RoomReservations;
-- 
-- DROP PROCEDURE IF EXISTS adiciona_usuario;
-- 
-- -- Função para adicionar um usuário 
-- DELIMITER //
-- CREATE PROCEDURE adiciona_usuario (IN novo_email VARCHAR(100), 
-- IN novo_nome VARCHAR(80),
-- IN novo_senha VARCHAR(50),
-- IN novo_curso INT,
-- IN novo_semestre INT,
-- IN novo_reputacao INT)
-- BEGIN
--     INSERT INTO Usuarios (email, nome, senha, curso, semestre, reputacao) 
--     VALUE (novo_email, novo_nome, novo_senha, novo_curso, novo_semestre, novo_reputacao);
-- END//
-- DELIMITER ;
-- 

-- Consulta_usuario
-- DROP VIEW IF EXISTS usuario_info;
-- 
-- CREATE VIEW usuario_info AS 
--     SELECT email, nome, senha, semestre, reputacao, nome_curso, tipo
--     FROM Usuarios 
-- 		INNER JOIN Cursos USING (id_curso);


-- consulta reserva

-- DROP VIEW IF EXISTS reserva_info;
-- 
-- CREATE VIEW reserva_info AS 
--     SELECT nome_sala, nome, entrada, saida
--     FROM Reservas
-- 		INNER JOIN Salas USING (id_sala)
--         INNER JOIN Usuarios USING(id_usuario);


-- DROP PROCEDURE IF EXISTS adiciona_reserva;
-- 
-- -- Função para adicionar uma reserva 
-- DELIMITER //
-- CREATE PROCEDURE adiciona_reserva (IN novo_idusuario INT, IN novo_idsala INT)
-- BEGIN
--     INSERT INTO Reservas (id_usuario, id_sala, saida) 
--     VALUE (novo_idusuario, novo_idsala, current_timestamp + 1/24);
-- END //
-- DELIMITER ;
-- DROP PROCEDURE IF EXISTS adiciona_reclamacao;
-- -- Função para adicionar uma reclamacao 
-- DELIMITER //
-- CREATE PROCEDURE adiciona_reclamacao (IN novo_idusuario INT, 
-- IN novo_idsala INT,
-- IN novo_tipo INT,
-- IN novo_descricao TEXT(63.000),
-- IN novo_estado INT)
-- BEGIN
--     INSERT INTO Reclamacoes (id_usuario, id_sala, tipo_r, descricao, estado) 
--     VALUE (novo_idusuario, novo_idsala, novo_tipo, novo_descricao, novo_estado);
-- END //
-- DELIMITER ;
-- 
-- DROP VIEW IF EXISTS reclamacao_info;
--
-- CREATE VIEW reclamacao_info AS 
--     SELECT nome, nome_sala, tipo_r, descricao, horario, estado
--     FROM Reclamacoes
-- 		INNER JOIN Salas USING (id_sala)
--         INNER JOIN Usuarios USING(id_usuario);

-- DROP TRIGGER IF EXISTS trig_usuario;
-- 
-- DELIMITER //
-- CREATE TRIGGER trig_usuario 
-- BEFORE DELETE ON Usuarios
-- FOR EACH ROW
-- BEGIN
--     DELETE FROM Reservas
-- 	WHERE id_usuario = old.id_usuario;
--     DELETE FROM Reclamacoes
-- 	WHERE id_usuario = old.id_usuario;
-- END//
-- DELIMITER ;

-- DROP TRIGGER IF EXISTS trig_sala;
-- 
-- DELIMITER //
-- CREATE TRIGGER trig_sala 
-- BEFORE DELETE ON Salas
-- FOR EACH ROW
-- BEGIN
--     DELETE FROM Reservas
-- 	WHERE id_sala = old.id_sala;
--     DELETE FROM Reclamacoes
-- 	WHERE id_sala = old.id_sala;
-- END//
-- DELIMITER ;
-- 

DROP FUNCTION IF EXISTS reclamacoes_abertas;

SET GLOBAL log_bin_trust_function_creators = 1;

DELIMITER //
CREATE FUNCTION reclamacoes_abertas() RETURNS INT
BEGIN
	DECLARE aberta INT;
	SELECT COUNT(estado) INTO aberta FROM Reclamacoes WHERE estado=1;
    RETURN aberta;
END //
DELIMITER ;
