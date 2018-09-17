USE RoomReservations;

INSERT INTO Salas (nome, lugares) 
VALUES ('1', 5),
('2', 4),
('3', 4),
('4', 5);
COMMIT;

INSERT INTO Cursos (nome, tipo) VALUES ('Engenharia da Computação', 0),
('Engenharia Mecânica',0),
('Engenharia Mecatronica', 0),
('Administração', 0),
('Economia', 0);
COMMIT;

INSERT INTO Usuarios (email, nome, senha, semestre, curso, reputacao)
VALUES ('brunamk@al.insper.edu.br', 'Bruna Kimura', 'bru1234', 6, 1, 75),
('felipesmn@al.insper.edu.br', 'Felipe Scandiuzzi', 'fe1234', 6, 2, 100),
('matimfj@al.insper.edu.br', 'Martim José', 'ma1234', 6, 1, 50);
COMMIT;

INSERT INTO Reservas (id_sala, id_usuario, entrada, saida)
VALUES (1, 1,'2006-02-15 04:30:33', '2006-02-15 04:50:33'),
(2, 2, '2006-02-15 05:34:33', '2006-02-15 06:34:33');
COMMIT;

INSERT INTO Reclamacoes (id_usuario, id_sala, tipo, descricao, estado) 
VALUES (1, 1, 0, 'tomada não funciona', 1),
(2, 2, 0, 'tomada não funciona', 1);
COMMIT;


