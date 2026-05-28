function verificarResposta(eCorreto) {
    const elementoResultado = document.getElementById('resultado-quiz');
    
    if (eCorreto) {
        elementoResultado.textContent = "Excelente! 🌱 A resposta está correta. A tecnologia e boas práticas geram sustentabilidade.";
        elementoResultado.style.color = "#2e7d32"; // Verde para correto
    } else {
        elementoResultado.textContent = "Quase lá! Tente analisar como a tecnologia ajuda a evitar desperdícios.";
        elementoResultado.style.color = "#d32f2f"; // Vermelho para incorreto
    }
}
