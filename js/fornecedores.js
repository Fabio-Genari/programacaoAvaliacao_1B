const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputTel = document.querySelector('#tel');
const inputEmail = document.querySelector('#email');
const inputProduto = document.querySelector('#produto');
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');
let listaEmail = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputNome.value === '' || inputEmail.value === '' || inputProduto.value === '' || inputTel.value === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';
    }else{
        const li = document.createElement('li');
        if (listaEmail.indexOf(inputEmail.value) === -1){
            console.log('Certo')
            li.innerHTML = `Nome: ${inputNome.value} <br>Telefone: ${inputTel.value} <br>Email: ${inputEmail.value} <br>Produto: ${inputProduto.value}`;
            listaEmail.push(inputEmail.value);
            fornecedores.appendChild(li);
        }else{
            console.log('Encontrado!');
            alert('Email já cadastrado!');
        }
        li.addEventListener('click', (e) => {
        const deletar = confirm('Você realmente gostaria de deletar este fornecedor?');
    
        if (deletar) {
            e.target.remove();
        }
        })
        fornecedores.appendChild(li);
        mensagens.style.display = 'none';
        inputTel.value = '';
        inputNome.value = '';
        inputEmail.value = '';
        inputProduto.value = '';
    }

})