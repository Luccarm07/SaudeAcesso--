/*--solicitação de exame ---*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("exm-form");
  const lista = document.getElementById("exm-lista");
  const msgSucesso = document.getElementById("exm-msg-sucesso");
  const msgErro = document.getElementById("exm-msg-erro");
  const exameConfirmado = document.getElementById("exm-confirmado");
  const nomeConfirmado = document.getElementById("exm-nome-confirmado");
  const btnFechar = document.getElementById("exm-fechar-msg");

  let editandoIndex = null;

  function carregarExames() {
    const exames = JSON.parse(localStorage.getItem("exames")) || [];
    lista.innerHTML = "";

    exames.forEach((exame, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${exame.nome}</strong> - ${exame.exame}<br/>
        <small>${exame.detalhes || "Sem observações"}</small>
        <div class="exm-botoes">
          <button class="editar" data-index="${index}">✏️ Editar</button>
          <button class="excluir" data-index="${index}">🗑️ Excluir</button>
        </div>
      `;
      lista.appendChild(li);
    });

    document.querySelectorAll(".excluir").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        excluirExame(index);
      });
    });

    document.querySelectorAll(".editar").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        editarExame(index);
      });
    });
  }

  function excluirExame(index) {
    const exames = JSON.parse(localStorage.getItem("exames")) || [];
    exames.splice(index, 1);
    localStorage.setItem("exames", JSON.stringify(exames));
    carregarExames();
  }

  function editarExame(index) {
    const exames = JSON.parse(localStorage.getItem("exames")) || [];
    const exame = exames[index];
    document.getElementById("exm-nome").value = exame.nome;
    document.getElementById("exm-tipo").value = exame.exame;
    document.getElementById("exm-detalhes").value = exame.detalhes;
    editandoIndex = index;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("exm-nome").value.trim();
    const exame = document.getElementById("exm-tipo").value.trim();
    const detalhes = document.getElementById("exm-detalhes").value.trim();

    msgErro.classList.remove("mensagem-visivel");
    msgSucesso.classList.remove("mensagem-visivel");

    if (!nome || !exame) {
      msgErro.textContent = "⚠️ Preencha nome e tipo de exame.";
      msgErro.classList.add("mensagem-visivel");
      return;
    }

    const novoExame = { nome, exame, detalhes };
    const exames = JSON.parse(localStorage.getItem("exames")) || [];

    if (editandoIndex !== null) {
      exames[editandoIndex] = novoExame;
      editandoIndex = null;
    } else {
      exames.push(novoExame);
      exameConfirmado.textContent = exame;
      nomeConfirmado.textContent = nome;
      msgSucesso.classList.add("mensagem-visivel");
    }

    localStorage.setItem("exames", JSON.stringify(exames));
    form.reset();
    carregarExames();
  });

  btnFechar.addEventListener("click", () => {
    msgSucesso.classList.remove("mensagem-visivel");
  });

  document.querySelectorAll(".exm-opcao").forEach(opcao => {
    opcao.addEventListener("click", () => {
      document.getElementById("exm-tipo").value = opcao.textContent;
    });
  });

  carregarExames();
});
/*--------------------------------------------------------------------------*/

      function mostrarAgendamento() {
  const opcoes = document.getElementById('opcoes');
  const formulario = document.getElementById('formulario');

  opcoes.classList.toggle('hidden');
  formulario.classList.toggle('hidden');
}