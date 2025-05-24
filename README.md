# 🏥 SaudeAcesso — Sprint 01

*SaudeAcesso* é um projeto web desenvolvido na Sprint 01 com foco em *acessibilidade, usabilidade e responsividade*. O sistema simula a interface de um portal de saúde, permitindo aos usuários navegar de forma clara, interativa e amigável por funcionalidades essenciais, como consultas, receitas e exames.

---

## 🌐 Páginas do Sistema

- *Home (index.html)*: Interface inicial acessível, com navegação intuitiva e opção de agendamento de consultas médicas com data, hora e especialidade.
- *FAQ (faq.html)*: Página de dúvidas frequentes sobre o uso da plataforma.
- *Contato (contato.html)*: Canal de contato com a equipe do Hospital das Clinicas.
- *Receitas (receitas.html)*: Visualização de receitas médicas cadastradas.
- *Resultados (resultados.html)*: Listagem de resultados de exames.
- *Solicitação de Exame (solicitacao-exame.html)*: Interface para solicitar exames com validações e armazenamento local.

---

## 🛠️ Tecnologias Utilizadas

- *HTML*
- *CSS*
- * *JavaScript*
  - Arquivos separados para responsividade:
    - geral_style.css
    - XL_style.css
    - XM_style.css
    - XS_style.css
  - Validação de formulários e ações
  - Simulação de troca de abas
  - Armazenamento com localStorage
  - Exibição de mensagens de sucesso e erro
  - Confirmação antes de ações críticas
- *Git & GitHub* para versionamento e controle de alterações

---

## 📱 Responsividade

A interface foi projetada para funcionar corretamente em diferentes dispositivos:

- 📱 *Mobile (Extra Small)*
- 💻 *Tablet/Desktop (Medium/Large)*

Uso de *media queries* com breakpoints bem definidos, organizados em arquivos CSS separados para facilitar manutenção e escalabilidade.

---

## 🧩 Funcionalidades JavaScript

- Destaque automático da aba selecionada no menu
- Alerta com o nome da aba selecionada
- Confirmação antes de excluir ou editar registros (exames)
- Validação de campos obrigatórios (ex: nome e tipo de exame)
- Preenchimento automático ao editar um exame
- Simulação de abas sem recarregar a página
- Armazenamento e recuperação de dados com localStorage
- Feedback visual ao usuário em ações como salvar ou excluir

---

## 🔍 Acessibilidade

- Cores com *alto contraste* para facilitar a leitura
- Tamanhos de fonte *responsivos e legíveis*
- Navegação *via teclado* suportada
- Mensagens de erro e sucesso *claras e objetivas*
- Estrutura semântica que favorece leitores de tela
- Feedbacks visuais com aria-live (opcional para acessibilidade avançada)

---

## 👥 Equipe de Desenvolvimento

- *Lucca*
- *Arthur*
- *Benitez*

---

> Projeto acadêmico — Sprint 01