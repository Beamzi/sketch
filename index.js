



const gridContainer = document.querySelector('.gridContainer');

const gridDivs = () => {
  for (let i = 0; i < 4096; i++) {
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
    let hoverCount = 0;
    let opacity = 0.1;
    Mouse.addEventListener('mouseover', (e) => {
      let x = Math.floor(Math.random() * 255);
      let y = Math.floor(Math.random() * 255);
      let z = Math.floor(Math.random() * 255);
      let random = `rgb(${x}, ${y}, ${z})`;
     // e.target.style['background-color'] = 'black';
      e.target.style['background-color'] = random;
      hoverCount++;
      if (hoverCount <= 10)
        //e.target.style.opacity = `${hoverCount * 10}%`
        e.target.style.opacity = hoverCount * opacity;
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

    userInput = parseInt(prompt('Type in the number of pixels you want on each side'));
    for (let i = 0; i < userInput * userInput; i++) {

      let newSketchDivs = document.createElement('div');
      newSketchDivs.classList.add('allDivs');
      gridContainer.append(newSketchDivs);
    };
    drawing();
    });
};
newSketch();

