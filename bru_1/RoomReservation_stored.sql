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

-- Função para adicionar uma reclamacao 
DELIMITER //
CREATE PROCEDURE adiciona_reserva (IN novo_idusuario INT, IN novo_idsala INT)
BEGIN
    INSERT INTO Reservas (id_usuario, id_sala, saida) 
    VALUE (novo_idusuario, novo_idsala, current_timestamp + 1/24);
END //
DELIMITER ;
