const tColores = {
    ROJO: "0",
    AZUL: "1",
    VERDE: "2",
    DORADO: "3"
};

let colorDevolver = [tColores.ROJO, tColores.VERDE, tColores.AZUL, tColores.DORADO];


function charToColor(color){
    switch(color.toUpperCase()){

        case "R":
            return tColores.ROJO
            case "A":
                return tColores.AZUL
                case "V":
                return tColores.VERDE
                case "D":
                    return tColores.DORADO
                    default :return null;
    }
}

function intToColor(num){
    return colorDevolver[num]; 
}   

const MAX_COLORES_SEQ = 10;
function generarSecuenciaDeColores(numColores){
    const secuencia = []
    for(let i =0 ; i< MAX_COLORES_SEQ ; i++){
        let aleatorio = Math.floor(Math.random() * numColores);
        secuencia.push(intToColor(aleatorio));    }
    return secuencia;

    

}





