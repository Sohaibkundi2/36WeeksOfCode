function addNums(){
    const numb1 = parseFloat(document.getElementById("num1").value)
    const numb2 = parseFloat(document.getElementById("num2").value)
    const body = document.querySelector("body")

    const res = numb1 + numb2
    console.log(numb1)
    console.log(numb2)
    console.log(res)

    // const result = document.querySelector("#result")
    // queryselectorall is used for multiple same name class
    document.getElementById("result").innerText =  `Result: ${res}`

    const h2 = document.createElement("h2")
    h2.innerHTML='<h2>Addition performed</h2>'
    body.appendChild(h2)


}

