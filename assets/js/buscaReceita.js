const receitas = [
    {
        id: 'hamburguer',
        img: 'assets/html/imgs/receitas/Hambúrguer500X500.png',
        title: 'Hambúrguer',
        description: 'Aprenda a fazer um hambúrguer suculento e cheio de sabor, perfeito para um almoço ou jantar irresistível!',
        link: 'assets/html/receitas/Hamburguer.html'
    },
    {
        id: 'prato-comercial',
        img: 'assets/html/imgs/receitas/pf8.avif',
        title: 'Prato Comercial',
        description: 'Confira como preparar um prato comercial delicioso e nutritivo, ideal para qualquer refeição do dia!',
        link: 'assets/html/receitas/pratocomercial.html'
    },
    {
        id: 'pizza',
        img: 'assets/html/imgs/receitas/pizza500X500.png',
        title: 'Pizza',
        description: 'Descubra a receita da pizza perfeita, com uma massa crocante e cobertura deliciosa que vai conquistar seu paladar!',
        link: 'assets/html/receitas/pizza.html'
    },
    {
        id: 'salada-fresh',
        img: 'assets/html/imgs/receitas/Salada Fresh500X500.jpg',
        title: 'Salada Fresh',
        description: 'Experimente uma salada fresca e nutritiva, perfeita para acompanhar suas refeições ou como um prato leve e saudável.',
        link: 'assets/html/receitas/saladafresh.html'
    },
    {
        id: 'massa-italiana',
        img: 'assets/html/imgs/receitas/Massa Italiana500X500.jpg',
        title: 'Massa Italiana',
        description: 'Descubra a receita de uma deliciosa massa italiana, com molho caseiro e ingredientes frescos que trazem o verdadeiro sabor da Itália.',
        link: 'assets/html/receitas/massaItaliana.html'
    },
    {
        id: 'sopa-quente',
        img: 'assets/html/imgs/receitas/Sopa Quente500X500.avif',
        title: 'Sopa Quente',
        description: 'Aprenda a fazer uma sopa quente e reconfortante, perfeita para aquecer os dias frios com muito sabor e nutrientes.',
        link: 'assets/html/receitas/sopaQuente.html'
    },
    {
        id: 'cheeseburger',
        img: 'assets/html/imgs/receitas/cheeseburger500X500.avif',
        title: 'Cheeseburger',
        description: 'Prepare um cheeseburger irresistível, com queijo derretido e carne suculenta, ideal para um almoço ou jantar delicioso.',
        link: 'assets/html/receitas/cheeseburger.html'
    },
    {
        id: 'sobremesa',
        img: 'assets/html/imgs/receitas/sobremesas500X500.avif',
        title: 'Sobremesa',
        description: 'Delicie-se com uma sobremesa doce e saborosa, perfeita para encerrar suas refeições com um toque especial.',
        link: 'assets/html/receitas/sobreMesa.html'
    },
    {
        id: 'smoothie',
        img: 'assets/html/imgs/receitas/Smoothie500X500.avif',
        title: 'Smoothie',
        description: 'Prepare um smoothie refrescante e saudável, ideal para começar o dia ou como um lanche nutritivo.',
        link: 'assets/html/receitas/smoothie.html'
    },
    {
        id: 'bife-grelhado',
        img: 'assets/html/imgs/receitas/Bife Grelhado500X500.avif',
        title: 'Bife Grelhado',
        description: 'Descubra como fazer um bife grelhado perfeito, com temperos e técnicas para uma carne macia e saborosa.',
        link: 'assets/html/receitas/bifeGrelhado.html'
    },
    {
        id: 'sushi',
        img: 'assets/html/imgs/receitas/Sushi500X500.avif',
        title: 'Sushi',
        description: 'Aprenda a fazer sushi em casa, com ingredientes frescos e técnicas simples para criar sushi delicioso e autêntico.',
        link: 'assets/html/receitas/Sushi.html'
    }
];

const todasAsReceitas = document.getElementById('todas-as-receitas');
const searchForm = document.getElementById('search-form');
const search = document.getElementById('navbar-search');

function renderReceitas() {
    todasAsReceitas.innerHTML = '';

    receitas.forEach((receita, index) => {
        const receitaElement = document.createElement('div');
        receitaElement.classList.add('row', 'featurette');
        receitaElement.setAttribute('data-receita', receita.id);

        // Alterna a ordem das colunas dependendo do índice
        const isEven = index % 2 === 0;

        receitaElement.innerHTML = `
            <div class="col-md-5 ${isEven ? '' : 'order-md-2'}">
                <img src="${receita.img}" class="featurette-image img-fluid" alt="Imagem da Receita">
            </div>
            <div class="col-md-7 ${isEven ? '' : 'order-md-1'}">
                <h2 class="featurette-heading fw-normal lh-1">Receita para preparar um <span class="text-muted">${receita.title}</span></h2>
                <p class="lead">${receita.description}</p>
                <p><a class="btn btn-primary" href="${receita.link}" target="_self">VER RECEITA</a></p>
            </div>
        `;
        todasAsReceitas.appendChild(receitaElement);

        // Adiciona <hr> apenas após cada receita, exceto após a última
        if (index < receitas.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('featurette-divider');
            todasAsReceitas.appendChild(hr);
        }
    });
}

function filterReceitas(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const query = search.value.toLowerCase();
    let found = false;
    let redirectLink = '';

    receitas.forEach(receita => {
        if (receita.title.toLowerCase().includes(query)) {
            found = true;
            redirectLink = receita.link; // Atualiza o link da receita encontrada
        }
    });

    if (found) {
        // Redireciona para o link da receita encontrada
        window.location.href = redirectLink;
    } else {
        // Mostra a mensagem de nenhuma receita encontrada
        const modal = new bootstrap.Modal(document.getElementById('noResultsModal'));
        modal.show();
    }
}
// Adiciona o evento de submit no formulário de busca
searchForm.addEventListener('submit', filterReceitas);
// Inicializa com todas as receitas visíveis
renderReceitas();
