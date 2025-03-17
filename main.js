const form = document.getElementById('form-contato');
        const corpoTabela = document.getElementById('corpo-tabela');
        let numeros = [];
        let contatos = [];

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            adicionaLinha();
        });

        function adicionaLinha() {
            const inputNomeContato = document.getElementById('nome-contato');
            const inputNumeroWhatsapp = document.getElementById('numero-whatsapp');

            const nome = inputNomeContato.value.trim();
            const telefone = inputNumeroWhatsapp.value.trim();

            if (numeros.includes(telefone)) {
                alert(`O número: ${telefone} já foi inserido`);
                return;
            }

            if (nome === "" || telefone === "") {
                alert("Preencha todos os campos!");
                return;
            }

            numeros.push(telefone);
            contatos.push(nome);

            const linha = document.createElement('tr');
            linha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
            corpoTabela.appendChild(linha);

            inputNomeContato.value = "";
            inputNumeroWhatsapp.value = "";
        }