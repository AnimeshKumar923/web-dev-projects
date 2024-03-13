// --------- whiteboard size ---------------
let panelSize = parseFloat(prompt('Enter size', 16));
// panelSize = parseFloat(panelSize);s

// --------------------)---------------------

const body = document.querySelector('body');

const parentContainer = document.createElement('div');
parentContainer.classList.add('container')
body.appendChild(parentContainer);

const rowDivCSSflexbox = `display: flex; flex: 1 1 0; flex-wrap: wrap;`;

const rowDivCSStext = `border: 0px solid black; height: ${100/panelSize}%; width: 100%; gap: 0px; ${rowDivCSSflexbox}`;

if(panelSize>100){
   warning();
} else{
    boxSetter();
}



const hover = document.querySelectorAll(`.col-div`);
hover.forEach(element => {
    element.addEventListener('mouseover', function(){
        this.style.backgroundColor = `green`;
    });
});


// -------- default color button START ---------

const defaultColorBtn = document.createElement('button');
defaultColorBtn.classList.add('default-color-btn');
defaultColorBtn.style.height = '70px'
defaultColorBtn.style.width = '120px'
defaultColorBtn.style.marginLeft = '50px'
defaultColorBtn.style.marginTop = '50px'
defaultColorBtn.textContent = 'Default Color (green)'
body.appendChild(defaultColorBtn);

defaultColorBtn.addEventListener('click', function(){
    hover.forEach(element => {
        element.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'green';
        });
    });
})


// -------- default color button END ---------


// -------- clear whiteboard button START ---------

const clrBtn = document.createElement('button');
clrBtn.classList.add('clear-btn');
clrBtn.style.height = '50px'
clrBtn.style.width = '50px'
clrBtn.style.marginLeft = '50px'
clrBtn.style.marginTop = '50px'
clrBtn.textContent = 'Clear'
body.appendChild(clrBtn)

clrBtn.addEventListener('click', function(){
    hover.forEach(element => {
        element.style.backgroundColor = `white`;
    }); 
});

// -------- clear whiteboard button END ---------



function boxSetter(){
    for(let i=1; i<=panelSize; i++){
        const rowDiv = document.createElement('row-div');
        rowDiv.classList.add(`row-div`)
        rowDiv.style.cssText = rowDivCSStext;
        parentContainer.appendChild(rowDiv);
        for(let j=1; j<=panelSize; j++){
            const columnDiv = document.createElement('col-div');
            columnDiv.classList.add(`col-div`)
            columnDiv.style.cssText = ` height: 100%; width: 100%`;
            rowDiv.appendChild(columnDiv);    
        }
    }
}


function warning(){
    const warning = document.createElement('div');
    warning.textContent = `Please refresh the page & enter size in range of 1-100.
    \nElse the sketch won't work.`;
    warning.style.marginLeft = '50px'
    warning.style.marginTop = '50px'
    body.appendChild(warning);
}


// ---------- color randomizer START ------------

const randomColorBtn = document.createElement('button');
randomColorBtn.classList.add('random-color-btn');
randomColorBtn.style.height = '50px'
randomColorBtn.style.width = '90px'
randomColorBtn.style.marginLeft = '50px'
randomColorBtn.style.marginTop = '50px'
randomColorBtn.textContent = 'Randomize'
body.appendChild(randomColorBtn);

randomColorBtn.addEventListener('click', function(){
    hover.forEach(element => {
        element.addEventListener('mouseover', function(){
            this.style.backgroundColor = 'rgb(' + randomize() + ',' + randomize() + ',' + randomize() + ')';
        });
    });
})


// ---------- color randomizer END ------------

function randomize(){
    return randomNum = Math.floor(Math.random() * 256);
    
}