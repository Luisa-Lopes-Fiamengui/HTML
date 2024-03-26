alerta = () => {
  alert("Vai toma no seu kool! :333");
};
const enviar = () => {
  let nome = document.getElementById(`nome`).value;
  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>ola ${nome}, formulário enviado com sucesso</h2>`;
  if (nome == "") {
    alert(`ola, bem vindo`);
  } else {
    alert(`ola ${nome}, bem vindo`);
  }
};
