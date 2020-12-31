/*
Instruções do projeto
Um sistema de gestão acadêmica possui a entidade Aluno, que tem características obrigatórias,
como matrícula, nome, CPF, data de nascimento, sexo, nome da mãe e endereço, e opcionais, como nome do pai, e-mail e telefone.

A outra entidade é chamada Turma, que tem as seguintes características: 
código, nome, descrição, turno (matutino, vespertino ou noturno) e um array contendo os alunos matriculados.


Crie classes que representem essas entidades e seus principais métodos.
A classe Turma deve permitir matricular um aluno e removê-lo a partir do número de matrícula.
*/

class Aluno{
	constructor(matricula, nome, cpf, dataNascimento, sexo, nomeMae, endereco){
		this.matricula = matricula;
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.sexo = sexo;
		this.nomeMae = nomeMae;
		this.endereco = endereco;
		this.nomePai = 0;
		this.email = 0;
		this.telefone = 0;
	}
}

class Turma{
	constructor(codigo, nome, descricao, turno, alunos){
		this.codigo = codigo;
		this.nome = nome;
		this.descricao = descricao;
		this.turno = turno;
		this.alunos = [];
	}

	matricular(){
		alert('Você irá cadastrar alunos a partir da matricula na Turma: '+ this.nome);
		console.log('Cadastrar na Turma: '+ this.descricao);
		var matricula = prompt('Digite o número da matricula do aluno para ser cadastrado na turma: '+ this.nome);
		this.alunos.push(matricula);
		return document.write('O aluno: '+ matricula+' foi matriculado na turma: '+this.nome + ' : '+ this.descricao+'.' );
		}

	retiraMatricula(){
		alert('Essa função retira alunos de uma turma, cuidado com o seu uso!!');
		console.log('Descadastrar na Turma: '+ this.descricao);
		var remover = this.alunos.indexOf(prompt('Digite o número da matricula do aluno para ser descadastrado na turma: '+ this.nome));
		this.alunos.splice(remover, 1);
		
		return document.write('O aluno foi retirado na turma: '+this.nome + ' : '+ this.descricao+'.' );
	}
}


var aluno1 = new Aluno(1234, 'Cristina', '123.456.789-00', '12/12/1212', 'feminino','Dona Ana', 'Rua de cima, Bairro do Limoeiro');
var aluno2 = new Aluno(1235, 'Edimar', '123.456.789-12', '12/12/1214', 'masculino','Dona Joana', 'Rua de baixo, Bairro do Limoeiro');
var aluno3 = new Aluno(1236, 'Isabel', '123.456.756-15', '12/12/1210', 'feminino','Dona Cris', 'Rua do meio, Bairro do Limoeiro');

var ano1 = new Turma(15, 'Primeiro A', 'Turma de Programação', 'Noturno');

//ano1.matricular();   //chama o método de matricular alunos na Turma 'ano1'
//ano1.retiraMatricula(); 	//	chama o método que retira a matricula  de aluno na Turma 'ano1'

//ano1.alunos //mostra a relação das matriculas na Turma 'ano1'

// Cristina Pineda.

