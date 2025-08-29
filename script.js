function heartHandle(id) {
    const totalHearts = parseInt(document.getElementById('heart-count').innerText);


    if (document.getElementById(id).classList.contains('fa-solid')) {

        document.getElementById(id).classList.remove('fa-solid', 'text-red-600');
        document.getElementById(id).classList.add('fa-regular');
        document.getElementById('heart-count').innerText = totalHearts - 1;

    }
    else {
        document.getElementById(id).classList.remove('fa-regular')
        document.getElementById(id).classList.add('fa-solid', 'text-red-600')
        document.getElementById('heart-count').innerText = totalHearts + 1;
    }

}

document.getElementById('heart-1').addEventListener('click', function () {

    heartHandle('heart-1');
})
document.getElementById('heart-2').addEventListener('click', function () {

    heartHandle('heart-2');
})
document.getElementById('heart-3').addEventListener('click', function () {

    heartHandle('heart-3');
})
document.getElementById('heart-4').addEventListener('click', function () {

    heartHandle('heart-4');
})
document.getElementById('heart-5').addEventListener('click', function () {

    heartHandle('heart-5');
})
document.getElementById('heart-6').addEventListener('click', function () {

    heartHandle('heart-6');
})
document.getElementById('heart-7').addEventListener('click', function () {

    heartHandle('heart-7');
})
document.getElementById('heart-8').addEventListener('click', function () {

    heartHandle('heart-8');
})
document.getElementById('heart-9').addEventListener('click', function () {

    heartHandle('heart-9');
})


