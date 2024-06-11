let campoPeso = "txtPeso";
let campoAltura = "txtAltura";
let campoVazio = "";
let ehInnerHTML = true;
let lblIMC = "lblIMC";

window.onload = function() {
    $(`#${campoPeso}, #${campoAltura}`).mask("#.##0,00", {reverse: true});
};

function CalcularIMC() {
    var peso = GetValorDoCampo(campoPeso);
    var altura = GetValorDoCampo(campoAltura);

    if(ValidarCampos(peso, altura))
        ExibirIMC(parseFloat(peso / (altura ** 2)).toFixed(2));
    
    CancelaSubmitDoForm();
};

function ExibirIMC(valor)
{
    var imc = campoVazio;
    if(valor < 18.5 )
        imc ="Magreza";
    else if (valor < 24.9 )
        imc = "Normal";
    else if (valor < 30 )
        imc = "Sobrepeso";
    else 
        imc ="Obesidade";
    
    var textoIMCFormatado = `Seu IMC: ${imc}, ${valor}`;
    SetValorDoCampo(lblIMC, textoIMCFormatado, ehInnerHTML);
};

function ValidarCampos(peso, altura)
{
    if(peso === campoVazio || altura === campoVazio)
        return false;
    if(peso < 0 || altura < 0){
        alert("Valores não podem ser negativos")
        return false;
    }
    return true;
}

function GetValorDoCampo(campo){
    return document.getElementById(campo).value.replace('.', campoVazio).replace(',','.');
}

function Limpar(){
    SetValorDoCampo(campoPeso, campoVazio);
    SetValorDoCampo(campoAltura, campoVazio);
    SetValorDoCampo(lblIMC, campoVazio, ehInnerHTML = true)
}

function SetValorDoCampo(campo, valor, ehInnerHTML = false){
    
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