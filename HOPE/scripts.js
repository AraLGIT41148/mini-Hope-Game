let score = 0;
let chance = 3;
let CFD3 = 0;
let CFD2 = 0;
let counter = 3;

function updateUI() {
    document.getElementById('V+').innerHTML = counter + ' votes';
    document.getElementById('S').innerHTML = score;
    document.getElementById('luck').innerHTML = chance;

    if (counter >= 29) {
        document.getElementById('B').style.display = 'block';
        document.getElementById('N+').innerHTML = 'Next +3';
    }
    
    if (chance <= 0) {
        document.getElementById('lose').innerHTML = 'GAME OVER';
        document.getElementById('disapear1').style.display = 'none';
        document.getElementById('disapear2').style.display = 'none';
        document.getElementById('disapear3').style.display = 'none';
        document.getElementById('PS').style.textAlign = 'center';
    }
}

function upvote() {
    counter = (counter < 29) ? counter + 1 : counter + 3;

    if (counter % 7 === 0) {
        document.getElementById('T').innerHTML = '';
        document.getElementById('F').innerHTML = '(wrong)-This is a HOPE! number';
        document.getElementById('N+').style.backgroundColor = 'red';
        chance -= 1;
        score = Math.max(0, score - 3);
    } else {
        document.getElementById('T').innerHTML = '';
        document.getElementById('F').innerHTML = '';
        document.getElementById('N+').style.backgroundColor = '';
        score += 2;
    }

    updateUI();
}

function hope() {
    counter = (counter < 29) ? counter + 1 : counter + 3;

    if (counter % 7 === 0) {
        document.getElementById('T').innerHTML = 'HOPE :)';
        document.getElementById('F').innerHTML = '';
        score += 5;
    } else {
        document.getElementById('T').innerHTML = '';
        document.getElementById('F').innerHTML = '(wrong)-not HOPE!';
        chance -= 1;
        score = Math.max(0, score - 3);
    }

    updateUI();
}

function hard3() {
    CFD3 += 1;
    document.getElementById('V+').style.display = (CFD3 % 2 !== 0) ? 'none' : 'block';
    document.getElementById('!V+').innerHTML = (CFD3 % 2 !== 0) ? 'YOU CANNOT SEE!' : '';
}

function hard2() {
    CFD2 += 1;
    document.getElementById('H3').style.backgroundColor = (CFD2 % 2 !== 0) ? 'black' : 'pink';
}
