var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

// var bananaUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var bananaUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text){
    return bananaUrl+"?"+"text="+text;
} 

function errorHandler(error){
    alert("error occured: "+ error)
}

function clickEventHandler() {
    var txtToTranslate = txtInput.value;

    fetch(constructUrl(txtToTranslate))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickEventHandler)