



const gridContainer = document.querySelector('.gridContainer');

const gridDivs = () => {
  for (let i = 0; i < 256; i++) {
    let newDivs = document.createElement('div');
    newDivs.classList.add('allDivs');
    gridContainer.append(newDivs);
  };
};

gridDivs()


const allDivsref = document.querySelectorAll('.allDivs');

const drawing = () => {
  const allDivsref = document.querySelectorAll('.allDivs');
  allDivsref.forEach((Mouse) => {
    Mouse.addEventListener('mouseover', (e) => {
      e.target.style['background-color'] = 'black';
    });
  });
};
drawing();



newSketch = () => {
  const buttonRef = document.querySelector('button');
  let userInput = '';

  buttonRef.addEventListener('click', () => {
    const allDivsRef = document.querySelectorAll('.allDivs')

    allDivsRef.forEach((div) => {
      div.remove();
    });

    userInput = parseInt(prompt('Type in the number of pixels you want your canvas'));
    for (let i = 0; i < userInput; i++) {

      let newSketchDivs = document.createElement('div');
      newSketchDivs.classList.add('allDivs');
      gridContainer.append(newSketchDivs);
    };
    drawing();
    });
};
newSketch();

