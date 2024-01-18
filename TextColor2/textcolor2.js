let dataState = {
    enteredText: "",
    selectedColor: ""
}

function renderUi() {
    let root = document.getElementById("root");
    root.innerHTML = "";

    let updiv = document.createElement("div");
    updiv.style.display = "flex";

    const clrs = ["yellow", "red", "green"];
    // let ybtn, rbtn, gbtn;
    // let btns = [ybtn, rbtn, gbtn];
    let cbtndiv = document.createElement("div");
    cbtndiv.id = "cbuttons";
    cbtndiv.style.width = "33%";
    for (let i = 0; i < clrs.length; i++) {
        let btn = document.createElement("button");
        btn.style.height = "50px";
        btn.style.width = "50px";
        btn.style.borderRadius = "10px";
        // btns[i].id = i + 1;
        // btns[i].value = clrs[i];
        btn.style.backgroundColor = clrs[i];
        if (dataState.selectedColor != "") {
        // if (!dataState.selectedColor) {
            if (dataState.selectedColor == btn.style.backgroundColor) {
                btn.style.border = "5px solid black";
            } else {
                btn.style.border = "none";
            }
        } else {
            btn.style.border = "none";
        }
        cbtndiv.append(btn);
    }
    updiv.append(cbtndiv);
    root.append(updiv);

    const cbuttons = document.getElementById("cbuttons");
    cbuttons.addEventListener("click", (event) => {
        const clickedButton = event.target;
        if (clickedButton.tagName === "BUTTON") {
            switch (clickedButton.style.backgroundColor) {
                case "yellow":
                    dataState.selectedColor = clickedButton.style.backgroundColor;
                    renderUi();                                    
                    break;
                case "red":
                    dataState.selectedColor = clickedButton.style.backgroundColor;
                    renderUi();
                    break;
                case "green":
                    dataState.selectedColor = clickedButton.style.backgroundColor;
                    renderUi();
                    break;
                default:
                    break;
            }
        }
    });

    let inp = document.createElement("input");
    inp.placeholder = "Enter anything";
    inp.value = dataState.enteredText;
    let inpdiv = document.createElement("div");
    inpdiv.style.width = "33%";
    inpdiv.append(inp)
    updiv.append(inpdiv);
    root.appendChild(updiv);
    inp.onchange = () => {
        dataState.enteredText = inp.value;
        renderUi();
    }

    let resdiv = document.createElement("div");

    const submitButton = document.createElement("button");
    submitButton.id = 'sub';
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", () => {
        if (!dataState.enteredText) {
            alert("Please enter something.");
        } else {
            change();
        }
    });

    resdiv.textContent = "Result : ";
    let p = document.createElement("p");
    p.id = "output";

    function change() {
        p.textContent = dataState.enteredText;
        p.style.color = dataState.selectedColor;
        resdiv.append(p);
        resdiv.style.textAlign = "center";
        root.append(resdiv);
    }

    const cancelButton = document.createElement("button");
    cancelButton.id = "can";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        dataState.enteredText = "";
        dataState.selectedColor = "";
        renderUi();
    });

    const div = document.createElement("div");
    div.style.width = "33%";
    div.append(submitButton, document.createElement("br"), cancelButton);
    updiv.append(div);
    root.append(updiv);
}



