
var dialog = document.createElement("dialog");
dialog.style.position = 'absolute';
dialog.style.left = '50%';
dialog.style.top = '50%';
dialog.style.transform = 'translate(-50%,-50%)';
dialog.style.width = 'auto';
dialog.style.display = 'inlind-flex';
dialog.style.flexDirection = 'column';
dialog.style.alignItems = 'center';
dialog.style.padding = '1.6rem 3rem'
dialog.style.border = '2px solid black';
dialog.style.borderRadius = '5px';
dialog.style.boxShadow = '8px 8px 0 rgba(0,0,0,0.2)';
dialog.textContent = "Please enter the following sentence to continue:";
dialog.style.textAlign = 'center';
dialog.style.fontWeight = 'bold';
dialog.style.fontSize = '18px';
dialog.style.color = 'black';
dialog.style.fontFamily = 'Calibri';

dialog.appendChild(document.createElement("br"));
dialog.appendChild(document.createElement("br"));


var sentence = document.createElement("i");
sentence.textContent = '"Instead of going skiing, I am choosing to spend my time on social media!"';
sentence.style.textAlign = 'center';
dialog.appendChild(sentence);

dialog.appendChild(document.createElement("br"));

var input = document.createElement("input");
input.id = "inp";
input.style.webkitAppearance = 'none';
input.style.width = '100%';
input.style.border = '1px solid purple';
input.style.padding = '16px 16px 0 12px';
input.style.height = '28px';
input.style.fontSize = '16px';
input.style.fontWeight = '400';
input.style.background = 'rgba($dark,0.02)';
input.style.boxShadow = 'inset 0 -1px 0 rgba($dark,.3)';
input.style.color = '$dark';
input.style.transition = 'all .15s ease';
dialog.appendChild(input);

dialog.appendChild(document.createElement("br"));
dialog.appendChild(document.createElement("br"));

var button = document.createElement("button");
button.style.backgroundColor = 'white';
button.style.color = 'black';
button.style.fontFamily = 'calibri';
button.style.padding = '0.3rem 3.4rem';
button.style.border = '2px solid black';
button.style.boxShadow = '0 0 0 black';
button.style.transition = 'all 0.2s';
button.textContent = "Continue";
dialog.appendChild(button);


button.addEventListener("click", function() {
    var cleanSentence = sentence.textContent.slice(1,-1);
    if(document.getElementById("inp").value == cleanSentence){
        //alert("Dank Memes");
        dialog.close();
    }
    else{
        document.getElementById("inp").value = '';
    }
    //dialog.close();
    //alert(sentence.textContent.slice(1,-1));
  
});

document.body.appendChild(dialog);

dialog.showModal();
