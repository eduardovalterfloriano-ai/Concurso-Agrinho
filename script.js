const mensagens = [
    "🌱 Sustentabilidade é cuidar do presente pensando no futuro.",
    
    "💧 Economizar água é preservar a vida no campo e na cidade.",
    
    "🌳 Produzir alimentos respeitando a natureza garante um planeta melhor.",
    
    "🚜 Tecnologia e meio ambiente podem caminhar juntos.",
    
    "☀️ Energia limpa e agricultura sustentável fortalecem o agro brasileiro."
];

const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

    const numeroAleatorio = Math.floor(Math.random() * mensagens.length);

    mensagem.innerHTML = `
        <h3>${mensagens[numeroAleatorio]}</h3>
    `;

});
