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



// calling section

function called(id, title, subtitle, number) {


    document.getElementById(id).addEventListener('click', function () {

console.log('cliked')

        const callTitle = document.getElementById(title).innerText;
        const callSubtitle = document.getElementById(subtitle).innerText;
        const calledNumber = document.getElementById(number).innerText;

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        alert('📞 ' + 'Calling ' + callSubtitle + ' ' + calledNumber + '...')

        const div = document.getElementById('history-div');
        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
<div class="md:flex flex-row justify-between items-center m-3 pt-3">
                <div>
                    <h1 class="font-semibold text-xl">${callTitle}</h1>
                    <p class="text-xl">${calledNumber}</p>
                </div>

                <div>
                    <p>${timeString}</p>
                </div>
            </div>
`

        div.appendChild(newDiv)



    })
}

document.getElementById('call-1').addEventListener('click', function () {
    called('call-1', 'title-1', 'subtitle-1', 'number-1')
})

document.getElementById('call-2').addEventListener('click', function () {
    called('call-2', 'title-2', 'subtitle-2', 'number-2')
})

document.getElementById('call-3').addEventListener('click', function () {
    called('call-3', 'title-3', 'subtitle-3', 'number-3')
})

document.getElementById('call-4').addEventListener('click', function () {
    called('call-4', 'title-4', 'subtitle-4', 'number-4')
})

document.getElementById('call-5').addEventListener('click', function () {
    called('call-5', 'title-5', 'subtitle-5', 'number-5')
})

document.getElementById('call-6').addEventListener('click', function () {
    called('call-6', 'title-6', 'subtitle-6', 'number-6')
})

document.getElementById('call-7').addEventListener('click', function () {
    called('call-7', 'title-7', 'subtitle-7', 'number-7')
})

document.getElementById('call-8').addEventListener('click', function () {
    called('call-8', 'title-8', 'subtitle-8', 'number-8')
})

document.getElementById('call-9').addEventListener('click', function () {
    called('call-9', 'title-9', 'subtitle-9', 'number-9')
})



// clear history


document.getElementById('history-clear').addEventListener('click', function () {
    const div = document.getElementById('history-div');
    div.innerHTML = '';
})