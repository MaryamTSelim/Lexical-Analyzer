window.addEventListener('load', function (e) {
    let inputTxt = document.getElementById('inputTxt');
    let outputTxt = document.getElementById('outputTxt');
    let token = document.getElementById('token')
    let literialsFound = [];
    let numbersFound = [];
    let identifersFound = [];
    let keywordIf = /if/g;
    let keywordWhile = /while/g;
    let keywordLet = /let/g;
    let bool = /true|false/g;
    let number = /[0-9]+\.?[0-9]+/g;
    let literial = /\"[a-z|A-Z|0-9|\s]*\"/g;
    let identifer = /[_|a-z|A-Z]+[a-z|A-Z|_|0-9]*/g;
    let arithmaticOperators = /\+|\-|\*|\//g;
    let comparsionOPerators = />=|<=|==|>|<|!=/g;
    let assignment = /=/g;
    let openingBraket = /\(/g;
    let closingBraket = /\)/g;
    let openingBrace = /\{/g;
    let closingBrace = /\}/g;

    token.addEventListener('click', function (e) {
        outputTxt.value="";
        inputTxt.value.split("\n").forEach(sentence => {
            // if(sentence.match(identifer)){
            //     console.log(identifer.exec(sentence))
            // }
            let words = sentence.split(" ")
            for (let i = 0; i < words.length; i++) {
                word = words[i];
                if(i!=0){
                    outputTxt.value += " ";
                }
                if (keywordIf.test(word)) {
                    outputTxt.value += "<keywordIf," + word + ">"
                    continue;
                } else if (keywordWhile.test(word)) {
                    outputTxt.value += "<keywordWhile," + word + ">"
                    continue;
                } else if (keywordLet.test(word)) {
                    outputTxt.value += "<keywordLet," + word + ">"
                    continue;
                } else if (bool.test(word)) {
                    outputTxt.value += "<bool," + word + ">"
                    continue;
                } else if (identifer.test(word)) {
                    outputTxt.value += "<identifer," + word + ">"
                    identifersFound.push(word)
                    continue;
                } else if (literial.test(word)) {
                    outputTxt.value += "<literial," + word + ">"
                    literialsFound.push(word)
                    continue;
                } else if (number.test(word)) {
                    outputTxt.value += "<number," + word + ">"
                    numbersFound.push(word)
                    continue;
                } else if (arithmaticOperators.test(word)) {
                    outputTxt.value += "<arithmaticOperators," + word + ">"
                    continue;
                } else if (comparsionOPerators.test(word)) {
                    outputTxt.value += "<comparisonOperators," + word + ">"
                    continue;
                } else if (assignment.test(word)) {
                    outputTxt.value += "<assignment," + word + ">"
                    continue;
                } else if (openingBrace.test(word)) {
                    outputTxt.value += "<openingBrace," + word + ">"
                    continue;
                } else if (openingBraket.test(word)) {
                    outputTxt.value += "<openingBraket," + word + ">"
                    continue;
                } else if (closingBrace.test(word)) {
                    outputTxt.value += "<closingBrace," + word + ">"
                    continue;
                } else if (closingBraket.test(word)) {
                    outputTxt.value += "<closingBraket," + word + ">"
                    continue;
                }
            }

            outputTxt.value += "\n\n"
        });
    }, false)
}, false)