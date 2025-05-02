function addNums(){
    const numb1 = parseFloat(document.getElementById("num1").value)
    const numb2 = parseFloat(document.getElementById("num2").value)

    const res = numb1 + numb2
    console.log(numb1)
    console.log(numb2)
    console.log(res)

    document.getElementById("result").innerText =  `Result: ${res}`


}
