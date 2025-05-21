// Simulações de estado (poderia vir de um backend futuramente)
let temConsultaAgendada = false;
let passouPorProfissional = false;

// Botões
const btnReceitas = document.getElementById("btnReceitas");
const btnExame = document.getElementById("btnExame");

// Ver Receitas
btnReceitas.addEventListener("click", () => {
  if (passouPorProfissional) {
    window.location.href = "Receitas.html";
  } else {
    alert("❌ Você ainda não passou por uma consulta com um profissional. Agende uma consulta para acessar suas receitas.");
  }
});

// Solicitação de Exame
btnExame.addEventListener("click", () => {
  if (temConsultaAgendada) {
    window.location.href = "SolicitacaoExame.html";
  } else {
    alert("⚠️ Você não possui nenhuma consulta registrada. É necessário realizar uma consulta antes de solicitar um exame.");
  }
});

