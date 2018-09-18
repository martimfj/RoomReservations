USE RoomReservations;

INSERT INTO Salas (nome_sala, lugares) 
VALUES ('1', 5),
('2', 4),
('3', 4),
('4', 5);
COMMIT;

INSERT INTO Cursos (nome_curso, tipo) VALUES ('Engenharia da Computação', 0),
('Engenharia Mecânica',0),
('Engenharia Mecatronica', 0),
('Administração', 0),
('Economia', 0);
COMMIT;

INSERT INTO Usuarios (email, nome, senha, semestre, id_curso)
VALUES ('brunamk@al.insper.edu.br', 'Bruna Kimura', 'bru1234', 6, 1),
('felipesmn@al.insper.edu.br', 'Felipe Scandiuzzi', 'fe1234', 6, 2),
('martimfj@al.insper.edu.br', 'Martim José', 'ma1234', 6, 1);
COMMIT;

INSERT INTO Reservas (id_sala, id_usuario, saida)
VALUES (1, 1, '2006-02-15 04:50:33'),
(2, 2, '2006-02-15 04:50:33'),
(3, 3, '2006-02-15 04:50:33'),
(4, 1, '2006-02-15 04:50:33'),
(1, 2, '2006-02-15 04:50:33'),
(2, 2, '2006-02-15 06:34:33');
COMMIT;

INSERT INTO Reclamacoes (id_usuario, id_sala, tipo_r, descricao, estado) 
VALUES (1, 1, 0, 'tomada não funciona', 1),
(2, 2, 0, 'televisão não liga', 1),
(3, 3, 0, 'chão sujo de comida', 1),
(2, 4, 0, 'lousa não foi apagada', 1),
(1, 2, 0, 'cadeira está quebrada', 1),
(3, 1, 0, 'a mesa está bamba', 1);
COMMIT;


