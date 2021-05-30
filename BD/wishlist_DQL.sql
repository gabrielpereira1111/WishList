USE WishList								--SELECIONA E ENTRA NO BANCO DE DADOS 'WishList'



SELECT * FROM Usuarios						--SELECIONA TODAS AS COLUNAS DA ENTIDADE 'Usuarios'
SELECT * FROM Desejos						--SELECIONA TODAS AS COLUNAS DA ENTIDADE 'Desejos'	

SELECT email, descricao FROM Usuarios		--SELECIONA A COLUNA 'email' E 'descricao' DA ENTIDADE 'Usuarios'
LEFT JOIN Desejos							--FAZ UM LEFT JOIN COM A ENTIDADE 'Desejos'
ON Usuarios.idUsuario = Desejos.idUsuario	--ESTABELECE A RELAÇÃO ENTRE AS DUAS ENTIDADES

