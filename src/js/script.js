const output = document.getElementById ("result")

function operacao(){
    const outputval = document.getElementById ("result").value
    if(/^[0-9+\-*/.\s()]+$/.test(outputval)){
        let resultado = eval(outputval);
        return output.value = resultado;
    }
}

function apagar(){
    return output.value = ' ';
}