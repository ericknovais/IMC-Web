window.onload = function() {
    $('#txtPeso, #txtAltura').mask("#.##0,00", {reverse: true});
};

function CalculaIMC() {
    let peso = PegaValorDoCampo("txtPeso");
    let altura = PegaValorDoCampo("txtAltura");
    if(ValidaCampos(peso, altura)){
        let imc = parseFloat(parseFloat(peso) / parseFloat(altura **2)).toFixed(2); 
        MostraIMC(imc);
    }
};

function MostraIMC(imc)
{
    if(imc < 18.5 )
        alert("Magreza, IMC = "+imc);
    else if (imc < 24.9 )
        alert("Normal, IMC = "+imc);
    else if (imc < 30 )
        alert("Sobrepeso, IMC = "+imc);
    else 
        alert("Obesidade, IMC = "+imc);
             
};

function ValidaCampos(peso, altura)
{
    if(peso === '' || altura === '')
        return;

    if(peso < 0 || altura < 0)
    {
        alert("valores não podem ser negativos")
        return;
    }
    return true;
}

function PegaValorDoCampo(campo){
    return document.getElementById(campo).value.replace('.','').replace(',','.');
}