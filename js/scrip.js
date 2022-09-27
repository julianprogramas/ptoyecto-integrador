let numero_ganador = '96'

function quiniela() {
    let ingresar = false;

    for (let i = 4; i >= 0; i--) {
        let numero_elegido = prompt('Ingresa un numero del 0 al 100 . Tenes  ' + (i + 1) + ' Oportunidades');
        if (numero_elegido === numero_ganador) {
            alert('Felicitaciones, Ganaste 10 mil dolares');
            ingresar = true;
            break;
        } else {
            alert('Te quedan ' + i + ' intentos');
           
        }
    }

    return ingresar;
}

if (quiniela()) {
    /* si ganas la quiniela el pozo es de  */
    let patrimonio = 10000;

    let opcion = prompt('Elegi una opción: \n1- seguir jugando. \n2- retirar dinero. \n3 - donar dinero. \n preciona X para salir ');

    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                alert(' Tu saldo es $ ' + patrimonio + ' puede seguir jugando'); break;
            case '2':
                let retiro = parseInt(prompt('Ingresa la contidad: '));
                if (retiro <= patrimonio) {
                    patrimonio -= retiro;
                    alert('Su saldo es de $ ' + patrimonio + ' dolares');
                } else {
                    alert('No cuenta con esa capital');
                }
                break;
            case '3':
                let donar = parseInt(prompt('Elija el monto que quiera donar:'));
                patrimonio -= donar;
                alert('Su donación es de $' + patrimonio + ' Dolares');
                break;


            default:
                alert('la opcion es incorrecta'); break;
        }

        opcion = prompt('Elegi una opción: \n1- seguir jugando. \n2- retirar dinero. \n3 - donar dinero. \n preciona X para salir ');

    }

}else{
    alert('GRACIAS POR PARTICIPAR SUERTE EN LA PROXIMA')
}
alert('El numero era 96')
quiniela();


