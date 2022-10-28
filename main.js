const backgroundGenerateButton = document.getElementById('change-background');
const backgroundColor = document.getElementById('background-color');

backgroundGenerateButton.addEventListener('click', e => {
    //generateBackground(6)
    _rgbColorGenerator_(255)
})

function generateBackground(){
    let hexString = '0123456789abcdef',
    hexCode = '#';

    for(let i = 0; i < 6; i++){
        hexCode += hexString[Math.round(Math.random() * hexString.length - 1)]
    }
    
    document.body.style.backgroundColor = hexCode;
    backgroundColor.textContent = hexCode;
}

function _rgbColorGenerator_(range){
    let rgb = [];

    for(let i = 0; i < 3; i++){
        rgb.push(Math.round(Math.random() * range));
    }

    document.body.style.backgroundColor = `rgb(${rgb.join(',')})`;
    backgroundColor.textContent = `rgb(${rgb.join(',')})`;
};

export default generateBackground