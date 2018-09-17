DROP DATABASE IF EXISTS RoomReservations;
CREATE DATABASE RoomReservations;
USE RoomReservations;

DROP TABLE IF EXISTS Reclamacoes;
DROP TABLE IF EXISTS Reservas;
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Cursos;
DROP TABLE IF EXISTS Salas;

CREATE TABLE Cursos(
	id_curso  		INT AUTO_INCREMENT NOT NULL,
	nome_curso		VARCHAR(80) NOT NULL,
    tipo			INT NOT NULL,
    
	PRIMARY KEY(id_curso)
);

CREATE TABLE Usuarios(
	id_usuario  	INT AUTO_INCREMENT NOT NULL,
    email			VARCHAR(100) NOT NULL UNIQUE,
    nome   			VARCHAR(80) NOT NULL,
	senha  			VARCHAR(50) NOT NULL,
	semestre		INT,
	id_curso	    INT NOT NULL,
	reputacao		INT,

    PRIMARY KEY	(id_usuario),
    FOREIGN KEY(id_curso) REFERENCES Cursos(id_curso)
);

CREATE TABLE Salas(
	id_sala		INT  AUTO_INCREMENT NOT NULL,
    nome_sala	VARCHAR(30) NOT NULL,
	lugares		INT NOT NULL,
    
    PRIMARY KEY	(id_sala)
);

CREATE TABLE Reservas(
	id_reserva		INT NOT NULL AUTO_INCREMENT,
	id_sala			INT NOT NULL, 
	id_usuario		INT	NOT NULL,
	entrada			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	saida			DATETIME NOT NULL,

	PRIMARY KEY(id_reserva),
    FOREIGN KEY(id_sala) 	REFERENCES Salas(id_sala), 
    FOREIGN KEY(id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Reclamacoes(
	id_reclamacao	INT NOT NULL AUTO_INCREMENT,
    id_usuario		INT NOT NULL,		
    id_sala			INT NOT NULL,
    tipo_r			INT NOT NULL,
    descricao		TEXT(63.000),
    horario			TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado			INT NOT NULL,
    
    PRIMARY KEY(id_reclamacao),
    FOREIGN KEY(id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY(id_sala) REFERENCES	Salas(id_sala)
);