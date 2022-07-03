const form = document.querySelector(".formulario");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const error = document.querySelector(".error");

function validarFormulario(e) {
  e.preventDefault();

  console.log(`${email.value}`)
  console.log(`${password.value}`)

  if (email.value !== "usuario@usuario.com.br" && password.value !== "usuario123") {
    error.innerHTML = "";
    const el = criaP();
    el.textContent = "Email ou Senha estão incorretos";
    el.style.color = "red";
    error.appendChild(el);
    
  }else{
    console.log('LOGIN EFETUADO')
    error.innerHTML = "";
  }
  
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

form.addEventListener("submit", validarFormulario);
