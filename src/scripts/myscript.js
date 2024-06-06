window.onload = function() 
{
    
};

function CalculaIMC() {
    var peso = document.getElementById("txtPeso")
    var altura = document.getElementById("txtAltura")
    if(peso.value == '' || altura.value == '')
        return
    
    alert('Peso:' + peso.value)
    alert('Altura:' + altura.value)
  }