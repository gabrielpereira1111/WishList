USE WishList														--SELECIONA E ENTRA NO BANCO DE DADOS 'WishList'
GO																	--SEPARA O SCRIPT EM BLOCOS


INSERT INTO Usuarios(email, senha)							--INSERI CONTEÚDO NA ENTIDADE 'Usuarios'
VALUES				('gabriel@gmail.com','gabriel')
GO																	--SEPARA O SCRIPT EM BLOCOS
INSERT INTO Desejos	(idUsuario,descricao)							--INSERI CONTEÚDO NA ENTIDADE 'Desejos'
VALUES				(1, 'Desejo morar no exterior'),
					(1, 'Desejo passar em uma boa faculdade')
		
GO																	--SEPARA O SCRIPT EM BLOCOS