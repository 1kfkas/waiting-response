// Animation for title screen

function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });
  
    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

const generateKey = async function() {
    let keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"],
    );
    
    const publicKey = await crypto.subtle.exportKey("jwk", keyPair.publicKey);
    const privateKey = await crypto.subtle.exportKey("jwk", keyPair.privateKey);
    downloadString(JSON.stringify(publicKey), "txt", "publicKey");
}

const textTitle = document.getElementById("title");

let pointsCount = 1;

window.setInterval(function(){
    if(pointsCount == 3){
        textTitle.textContent = "WAITING RESPONSE";
        pointsCount = 0;
    }
    textTitle.textContent += ".";
    pointsCount += 1;
}, 1000);

// Function to redirect to specified link

function redirectTo(link){
    location.href = link;
}