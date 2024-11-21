console.log(document);

function testTheDom(){
    console.log("testing the dom")

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);
    console.log("number of li nodes "+ nodes.length);

    for(let node of nodes) {
        console.log(node);
        console.log(node.textContent)
    }
    
    var checkingNode = document.getElementById("checking");
    console.log(checkingNode);
    console.log(checkingNode.textContent);
    //checkingNode.textContent = "Change!";
    balance = parseInt(checkingNode.textContent);
    console.log(balance);
    balance += 100;
    checkingNode.textContent = balance;
        
}

function depositSavings(){
    var td = document.getElementbyId('savings');
    var savings = td.textContent;
    savings = parseInt(savings, 10);
    if(savings == 0){
        var title = docuent.getElementbyId('bankAccountTitle');
        title.textContent = "Bank Account";
    }
    savings += 100;
    td.textContent = savings;
}

function emptySavings(){
    var td = document.getElementbyId("savings");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    title.textContent = "ALERT: Savings Empty";
}