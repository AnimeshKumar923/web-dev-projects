const body = document.querySelector('body');

const parentContainer = document.createElement('div');
parentContainer.classList.add('container')
body.appendChild(parentContainer);

// parentContainer.style.display = 'flex';
// parentContainer.style.cssText = 'display: flex; flex: flex-wrap;'

// for(let i=0; i<257; i++){
//     const sqrDiv = document.createElement('div');
//     sqrDiv.style.cssText = 'border: 1px solid black; height: 30px; width: 30px'
//     parentContainer.appendChild(sqrDiv);
// }

for(let i=1; i<=16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add(`div-${i}`)
    rowDiv.style.cssText = `border: 1px solid black; height: 100px; width: 100px; display: flex; flex-wrap: wrap`;
    parentContainer.appendChild(rowDiv);
    // for(let j=1; j<=16; j++){
    //     const insideDiv = document.createElement('div');
    //     insideDiv.classList.add(`insideDiv-${j}`)
    //     insideDiv.style.cssText = 'border: 1px solid black; height: 30px; width: 30px';
    //     rowDiv.appendChild(insideDiv);
    // }
}