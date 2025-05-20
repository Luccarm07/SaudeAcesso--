// Simular troca de abas
const navButtons = document.querySelectorAll('.nav-item');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    alert(`Você selecionou a aba: ${btn.textContent.trim()}`);
  });
});

// Adicionar confirmação a todos os botões clicáveis (exceto desativados)
document.querySelectorAll('button:not(.disabled)').forEach(button => {
  button.addEventListener('click', (e) => {
    const texto = button.textContent.trim();
    if (
      !texto.includes("Assistente Virtual") &&
      !texto.includes("Início") &&
      !texto.includes("Configurações") &&
      !texto.includes("Chat")
    ) {
      const confirmacao = confirm(`Você deseja continuar com: "${texto}"?`);
      if (!confirmacao) e.preventDefault();
    }
  });
});
