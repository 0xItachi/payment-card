document.getElementById('cd-name').addEventListener("input", function(){
    // console.log(document.getElementById('disp-name').innerHTML)
    document.getElementById('disp-name').innerHTML = this.value;
})
document.getElementById('cd-num').addEventListener("input", function(){
    // console.log(document.getElementById('disp-no').innerHTML)
    document.getElementById('disp-no').innerHTML = this.value;
})
document.getElementById('cd-cvc').addEventListener("input", function(){
    // console.log(document.getElementById('disp-cvc').innerHTML)
    let cvc_disp = document.getElementById('cvc-disp');
    cvc_disp.innerHTML = this.value;
    cvc_disp.style.color = "white";
})