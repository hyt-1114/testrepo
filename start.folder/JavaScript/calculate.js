const val1input = document.getElementById("value1");
const val2input = document.getElementById("value2");
const operatorselect = document.getElementById("choice");
const formulaarea = document.getElementById("formula");
const resultarea = document.getElementById("result");

val1input.addEventListener("input", calculate);
val2input.addEventListener("input", calculate);
operatorselect.addEventListener("change", calculate);

function calculate(){
    const val1 = parseFloat(val1input.value);
    const val2 = parseFloat(val2input.value);
    const operator = operatorselect.value;

    if(isNaN(val1) || isNaN(val2)){
        formulaarea.textContent = "計算式：";
        resultarea.textContent = "両方の数値を入力してください。";
        return;
    }

    let result;
    let symbol;  //演算子の記号を表示用に変換

    if(operator === "addition"){
        result = val1 + val2;
        symbol = "+";
    }else if(operator === "subtraction"){
        result = val1 - val2;
        symbol = "-";
    }else if(operator === "multiplication"){
        result= val1 * val2;
        symbol ="*";
    }else if(operator === "division"){
        if(val2 === 0){
            formulaarea.textContent = "計算式：";
            resultarea.textContent = "0で割ることはできません。";
            return;
        }
        result = val1 / val2;
        symbol = "÷";
    }else{
        formulaarea.textContent = "計算式：";
        resultarea.textContent = "演算子が正しくありません。"
        return;
    }

    formulaarea.textContent = `計算式：${val1} ${symbol} ${val2}`;
    resultarea.textContent = `計算結果：${result}`;
}