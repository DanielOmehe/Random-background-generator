import generateBackground from "./main";

console.log(generateBackground(6));


function createArrayOfBackgroundColors(num){
    let backgroundColors = [];

    for(let i = 0; i < num; i++){
        backgroundColors.push(generateBackground(6))
    }

    return backgroundColors;
}

console(createArrayOfBackgroundColors(Math.round(Math.random() * 10)));