'use strict'
console.clear();

//navigatie
    //  Header met navigatie verdwijnt bij naar beneden scrollen 
    // en verschijnt weer na omhoog scrollen

    let beginP = window.scrollY
    let nav = document.getElementsByTagName('nav');

    window.addEventListener('scroll', function () {
        let curP = window.scrollY

    if(curP > beginP)
    {
        nav[0].classList.add('hidden')

        beginP = curP
        
    }
    else{
        nav[0].classList.remove('hidden')
    }
    beginP = curP
    })

//Diensten de content boxes laten verschijnen /verdwijnen ij klikken op diensten

    //de knoppen ophalen
    let b_hardw = document.getElementById('hardware')
    let b_softw = document.getElementById('software')
    let b_beheer = document.getElementById('beheer')
    let b_troubleshooting = document.getElementById('troubleshooting')

    // de divs ophalen
    let d_hardw = document.getElementById('hardware_content')
    let d_softw = document.getElementById('software_content')
    let d_beheer = document.getElementById('beheer_content')
    let d_troubleshooting = document.getElementById('troubleshooting_content');

    //steek divs in een array
    let contentList = new Array;
    contentList.push (d_hardw);
    contentList.push(d_softw);
    contentList.push(d_beheer);
    contentList.push(d_troubleshooting);

    //eventlisteners voor click
    b_hardw.addEventListener('click', function(){
        d_hardw.classList.remove('hidden');
        d_softw.classList.add('hidden')
        d_beheer.classList.add('hidden')
        d_troubleshooting.classList.add('hidden')

        b_hardw.classList.add('button_actief');
        b_softw.classList.remove('button_actief')
        b_beheer.classList.remove('button_actief')
        b_troubleshooting.classList.remove('button_actief')
    })

    b_softw.addEventListener('click', function(){
        d_hardw.classList.add('hidden');
        d_softw.classList.remove('hidden')
        d_beheer.classList.add('hidden')
        d_troubleshooting.classList.add('hidden')

        b_hardw.classList.remove('button_actief');
        b_softw.classList.add('button_actief')
        b_beheer.classList.remove('button_actief')
        b_troubleshooting.classList.remove('button_actief')
    })

    b_beheer.addEventListener('click', function(){
        d_hardw.classList.add('hidden');
        d_softw.classList.add('hidden')
        d_beheer.classList.remove('hidden')
        d_troubleshooting.classList.add('hidden')

        b_hardw.classList.remove('button_actief');
        b_softw.classList.remove('button_actief')
        b_beheer.classList.add('button_actief')
        b_troubleshooting.classList.remove('button_actief')
    })

    b_troubleshooting.addEventListener('click', function(){
        d_hardw.classList.add('hidden');
        d_softw.classList.add('hidden')
        d_beheer.classList.add('hidden')
        d_troubleshooting.classList.remove('hidden')

        b_hardw.classList.remove('button_actief');
        b_softw.classList.remove('button_actief')
        b_beheer.classList.remove('button_actief')
        b_troubleshooting.classList.add('button_actief')
    })




    console.log(contentList)
