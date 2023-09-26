function operation() {

    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    let media = (+n1 + +n2) / 2;

    if (media >= 7) {
        total.innerHTML = media + ' Aprovado';
    } else {
        total.innerHTML = media + ' Reprovado';
    }
}

const total = document.querySelector('#total');

