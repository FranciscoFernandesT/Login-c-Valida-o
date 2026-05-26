const forms = document.getElementById('forms');
forms.addEventListener('submit',(e) =>{
    e.preventDefault();
    validarsenha(verificarErro());
})



function validarsenha() {
    const senhapadrao = 12345;
    const userpadrao = "admin";
    const senha = document.getElementById("senha");
    const user = document.getElementById("user");
    const inputsenha= senha.value.trim()
    const inputuser = user.value.trim()
    console.log(inputuser)
    if (inputsenha == senhapadrao && inputuser == userpadrao) {
        senha.style.borderColor = 'green'
        user.style.borderColor = 'green'
        alert("Certoporra")
    } else {
        senha.style.borderColor = 'red'
        user.style.borderColor = 'red'
        alert("Erroporra")
    }
    function verificarErro() {
        if (inputsenha == senhapadrao && inputuser == userpadrao) {
            senha.style.borderColor = 'green'
            user.style.borderColor = 'green'
        } else {
            senha.style.border = 'red'
            user.style.borderColor = 'red'
        }
    }
}