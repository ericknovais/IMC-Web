window.onload = function() {
    $('#txtPeso, #txtAltura').mask("#.##0,00", {reverse: true});
};

function CalculaIMC() {
    let peso = PegaValorDoCampo("txtPeso");
    let altura = PegaValorDoCampo("txtAltura");
    if(ValidaCampos(peso, altura)){
        let imc = parseFloat(peso / (altura **2)).toFixed(2); 
        MostraIMC(imc);
    }
    CancelaSubmitDoForm();
};

function MostraIMC(imc)
{
    var textoIMC = '';
    if(imc < 18.5 )
        textoIMC ="Magreza";
    else if (imc < 24.9 )
        textoIMC = "Normal";
    else if (imc < 30 )
        textoIMC = "Sobrepeso";
    else 
        textoIMC ="Obesidade";
    
    SetValorCampo('lblIMC',  `Seu IMC: ${textoIMC}, ${imc}`, ehInnerHTML = true);
};

function ValidaCampos(peso, altura)
{
    if(peso === '' || altura === '')
        return false;

    if(peso < 0 || altura < 0)
    {
        alert("valores não podem ser negativos")
        return false;
    }
    return true;
}

function PegaValorDoCampo(campo){
    return document.getElementById(campo).value.replace('.','').replace(',','.');
}

function Limpar(){
    SetValorCampo('txtPeso','');
    SetValorCampo('txtAltura','');
    SetValorCampo('lblIMC', '', ehInnerHTML = true)
}

function SetValorCampo(campo, valor, ehInnerHTML = false){
    
    if(ehInnerHTML)
        document.getElementById(campo).innerHTML = valor;     
    else
        document.getElementById(campo).value = valor;
}

function CancelaSubmitDoForm(){
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
}