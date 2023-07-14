const personagens = document.querySelectorAll('.persona');



personagens.forEach((persona) => {
    persona.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

      
        removerSelecaoDoPersonagem();

        persona.classList.add('selecionado');

       
        
        alterarImagemPersonagemSelecionado(persona);

        alterarNomePersonagemSelecionado(persona);


        alterarDescricaoPersonagem(persona);
    })
})

function alterarDescricaoPersonagem(persona) {
    const descricaoPersonagem = document.getElementById('description-persona');
    descricaoPersonagem.innerText = persona.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('name-persona');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = 
    document.querySelector('.big-persona');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}