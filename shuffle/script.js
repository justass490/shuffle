(function(){
    "use strict"

let imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = './img/1.jpg';
imgArray[1] = new Image();
imgArray[1].src = './img/2.jpg';
imgArray[2] = new Image();
imgArray[2].src = './img/3.jpg';
imgArray[3] = new Image();
imgArray[3].src = './img/4.jpg';
imgArray[4] = new Image();
imgArray[4].src = './img/5.jpg';
imgArray[5] = new Image();
imgArray[5].src = './img/6.jpg';
imgArray[6] = new Image();
imgArray[6].src = './img/7.jpg';
imgArray[7] = new Image();
imgArray[7].src = './img/8.jpg';
imgArray[8] = new Image();
imgArray[8].src = './img/9.jpg';
imgArray[9] = new Image();
imgArray[9].src = './img/10.jpg';

const btn = document.querySelector('.rodyti');
const btn1 = document.querySelector('.maisyti');
const section = document.querySelector('.galerija');

btn.addEventListener('click', showGallery);
btn1.addEventListener('click', mixGallery);

function fy(a,b,c,d){
    c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
}

function showGallery(){
    let ul = document.createElement('ul');
    section.appendChild(ul);
    for(let i = 0; i < imgArray.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        let nuotrauka = document.createElement('IMG');
        nuotrauka.src = imgArray[i].src;
        li.appendChild(nuotrauka);
    }
    document.querySelector('.rodyti').style.display = 'none';
}
function mixGallery(){
    const list = document.querySelectorAll('img');
    fy(imgArray);
    for(let i = 0; i <list.length; i++){
        list[i].src = imgArray[i].src;
    }
}
})();