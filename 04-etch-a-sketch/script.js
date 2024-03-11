const body = document.querySelector('body');

const parentContainer = document.createElement('div');
parentContainer.classList.add('container')
body.appendChild(parentContainer);

const rowDivCSSflexbox = `display: flex; flex: 1 1 0; flex-wrap: wrap;`;

const rowDivCSStext = `border: 0px solid black; height: 150px; width: 135px; gap: 2px; ${rowDivCSSflexbox}`;

for(let i=1; i<=16; i++){
    const rowDiv = document.createElement('row-div');
    rowDiv.classList.add(`row-div-${i}`)
    rowDiv.style.cssText = rowDivCSStext;
    parentContainer.appendChild(rowDiv);
    for(let j=1; j<=16; j++){
        const columnDiv = document.createElement('col-div');
        columnDiv.classList.add(`col-div`)
        columnDiv.style.cssText = 'border: 1px solid black; height: 30px; width: 30px';
        rowDiv.appendChild(columnDiv);
        
        // window.addEventListener('DOMContentLoaded', function(){
        //     // hoverForEach(j);
        // });
        
    }
}

const hover = document.querySelectorAll(`.col-div`);
hover.forEach(element => {
    element.addEventListener('mouseover', function(){
        this.style.backgroundColor = `green`;
    });
});