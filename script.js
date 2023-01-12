let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
console.log(buttons)
let screenValue = '';

for (item of buttons){
   item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button text is:',buttonText)
    if (buttonText == 'X'){
        buttonText = '*'
        screenValue += buttonText
        screen.value = screenValue;
    }
    else if (buttonText == '='){
        screen.value = eval(screenValue)
    }
    else if (buttonText == 'AC'){
        screenValue = ''
        screen.value = screenValue

    }
    else if (buttonText == 'C'){
        screenValue = screenValue.slice(0, -1)
        // In the above line we have used slice sunction of string which takes two arguments first one is the starting index and the last one is the ending index. Do remember that the resultant substring will not contain the last index given in the arguments.
        // console.log(screenValue)
        screen.value = screenValue
    }
    else{
        screenValue += buttonText
        screen.value = screenValue;
    }

   })
}
