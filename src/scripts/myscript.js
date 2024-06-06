window.onload = function() 
{
    document.getElementById("txtPeso").addEventListener("change", function(){
        this.value = parseFloat(this.value).toFixed(2);
    });
    document.getElementById("txtAltura").addEventListener("change", function(){
        this.value = parseFloat(this.value).toFixed(2);
    });
};

function CalculaIMC() {
    var peso = document.getElementById("txtPeso")
    var altura = document.getElementById("txtAltura")
    alert(peso.value)
    if(peso.value == '' || altura.value == '')
        return false;

    if(peso.value < 0 || altura.value < 0)
    {
        alert("valores não podem ser negativos")
        return false;
    }
    
    alert(parseFloat(peso.value))
    // alert('Peso:' + peso.value)
    // alert('Altura:' + altura.value)
    let imc = parseInt()
  }