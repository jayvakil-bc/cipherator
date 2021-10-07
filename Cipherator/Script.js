function encode(){
    
let e= document.getElementById("en-text");
let condtion = e.value;
if(condtion === ""){
    
    alert("Ohh, NULL ENCRYPTION -  COOL!");
    
}
else
{
    let anss = btoa(e.value);
    
    let ans = document.getElementById("result");
    ans.value = anss;
    e.value = "";
    }
}

function decrypt(){
    let de = document.getElementById("de-text");
    let condtion = de.value;
    if(condtion === ""){
    
        alert("Ohh, NULL DECRYPTION -  COOL!");
        
    }
    else{
        let anss= atob(de.value);

        let ans = document.getElementById("result");
        ans.value = anss;
        de.value="";
    }
}

function copy() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}

function dop(){
    var gg = document.getElementById("Copied");
    gg.style.color = "oldlace";
}

function op(){
    var gg = document.getElementById("Copied");
    gg.style.color = "#3f3838";
}