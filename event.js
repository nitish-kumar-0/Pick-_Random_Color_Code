




const div = document.createElement('div');
div.classList.add('box');
document.body.appendChild(div);

const des = document.createElement('p');
des.classList.add('btn');

document.body.appendChild(des);



const changecol = document.createElement('button');
changecol.textContent = "generate random color"
changecol.classList.add('btn');
document.body.append(changecol);

changecol.onclick = generateCol;

function generateCol(){
    const r = Math.floor(Math.random()*255);
    const g =Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);

    div.style.backgroundColor=`rgb(${r},${g},${b})`;

    des.textContent = `  rgb ( ${r},${g},${b} ) `;
}
