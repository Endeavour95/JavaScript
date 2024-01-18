const data = {
    fval: "",
    ope: "",
    sval: ""
};

let flag = false;

document.addEventListener("DOMContentLoaded", function () {
    let resultInput = document.getElementById("result");

    const buttons = document.querySelectorAll("#calcu input[type='button']");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.value);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case "=":
                try {
                    // resultInput.value = evaluateExpression();
                    // resetData();
                    flag = true;
                    display(flag);
                } catch (error) {
                    resultInput.value = "Error";
                    resetData();
                }
                break;
            case "c":
                resultInput.value = "";
                resetData();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                data.ope = value;
                display(flag);
                // resultInput.value = data.fval + data.ope;
                break;
            default:
                if (!data.ope) {
                    data.fval += value;
                    display(flag);
                    // resultInput.value = data.fval
                } else {
                    if (Number(value) || value == 0 || value == ".") {
                        data.sval += value;
                        display(flag);
                        // resultInput.value = data.fval + data.ope + data.sval;
                    }
                }
        }
    }

    function evaluateExpression() {
        if (!data.fval && !data.ope && !data.sval) {
            alert("Enter proper expression");
            return "";
        } else if (!data.ope && !data.sval) {
            alert("Select operator and second value");
            return "";
        } else if (!data.sval) {
            alert("Select second number");
            return "";
        } else {
            switch (data.ope) {
                case "+":
                    return String(parseFloat(data.fval) + parseFloat(data.sval));
                case "-":
                    return String(parseFloat(data.fval) - parseFloatmber(data.sval));
                case "*":
                    return String(parseFloat(data.fval) * parseFloat(data.sval));
                case "/":
                    return String(parseFloat(data.fval) / parseFloat(data.sval));
                default:
                    return "Error";
            }
        }
    }

    function resetData() {
        data.fval = "";
        data.ope = "";
        data.sval = "";
    }

    // function display() {
    //     if ((data.fval != "")) {
    //         resultInput.value = data.fval;
    //     } else if ((data.fval != "") && (!data.ope != "")) {
    //         resultInput.value = data.fval + data.ope;
    //     } else if ((!data.fval != "") && (!data.ope != "") && (data.sval != "")) {
    //         resultInput.value = data.fval + data.ope + data.sval;
    //     }
    // }

    function display(flag) {
        if (flag) {
            resultInput.value = evaluateExpression();
            resetData();
        } else {
            if ((data.fval != "") && (data.ope != "") && (data.sval != "")) {
                resultInput.value = data.fval + data.ope + data.sval;
            } else if ((data.fval != "") && (data.ope != "")) {
                resultInput.value = data.fval + data.ope;
            } else if ((data.fval != "")) {
                resultInput.value = data.fval;
            }
        }
    }

});
