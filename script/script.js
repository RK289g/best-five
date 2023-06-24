var cnt = 1;

/*for (let index = 0; index < 5; index++) {
    cnt == cnt++;
    console.log(cnt);
    
}*/

document.getElementById('select1').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg1');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select1').disabled = true;
    document.getElementById('select1').style.backgroundColor = 'lightblue'
})

document.getElementById('select2').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg2');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select2').disabled = true;
    document.getElementById('select2').style.backgroundColor = 'lightblue'
})

document.getElementById('select3').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg3');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select3').disabled = true;
    document.getElementById('select3').style.backgroundColor = 'lightblue'
})

document.getElementById('select4').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg4');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select4').disabled = true;
    document.getElementById('select4').style.backgroundColor = 'lightblue'
})

document.getElementById('select5').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg5');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select5').disabled = true;
    document.getElementById('select5').style.backgroundColor = 'lightblue'
})

document.getElementById('select6').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg6');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select6').disabled = true;
    document.getElementById('select6').style.backgroundColor = 'lightblue'
})

document.getElementById('select7').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg7');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select7').disabled = true;
    document.getElementById('select7').style.backgroundColor = 'lightblue'
})

document.getElementById('select8').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg8');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select8').disabled = true;
    document.getElementById('select8').style.backgroundColor = 'lightblue'
})

document.getElementById('select9').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg9');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select9').disabled = true;
    document.getElementById('select9').style.backgroundColor = 'lightblue'
})

document.getElementById('select10').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg10');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select10').disabled = true;
    document.getElementById('select10').style.backgroundColor = 'lightblue'
})

document.getElementById('select11').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg11');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select11').disabled = true;
    document.getElementById('select11').style.backgroundColor = 'lightblue'
})

document.getElementById('select12').addEventListener('click', function () {
    const playerNameField = document.getElementById('psg12');
    const playerName = playerNameField.innerText;

    console.log(playerName);


    const trCount = cnt + '';
    const trField = document.getElementById(trCount);
    trField.innerText = playerName;
    cnt == cnt++;

    document.getElementById('select12').disabled = true;
    document.getElementById('select12').style.backgroundColor = 'lightblue'
})


document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerSalaryField = document.getElementById('player-salary');
    const playerSalaryString = playerSalaryField.value;
    const playerSalary = parseInt(playerSalaryString);

    //console.log(playerSalary);

    const playerTotalSalary = (cnt - 1) * playerSalary;
    const playerTotalSalaryField = document.getElementById('player-total-salary');
    playerTotalSalaryField.innerText = playerTotalSalary;
})

document.getElementById('btn-total').addEventListener('click',function(){
    const playerSalaryString = document.getElementById('player-total-salary').innerText;
    const playerSalary = parseInt(playerSalaryString);

    //console.log(playerSalary);

    const managerSalaryString = document.getElementById('manager-salary').value;
    const managerSalary = parseInt(managerSalaryString);

    const coachSalaryString = document.getElementById('coach-salary').value;
    const coachSalary = parseInt(coachSalaryString);

    const totalSalary = playerSalary + managerSalary + coachSalary;

    document.getElementById('total-salary').innerText = totalSalary;

})


