document.addEventListener("DOMContentLoaded", () => {
    const reasonInputs = document.querySelectorAll('input[name="reason"]');
    const productIdField = document.getElementById("product-id");
    const productIdLabel = document.getElementById("product-id-label");

    
    
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    function displayGreeting() {
        const today = new Date();
        const day = today.getDay();
        let msg = "";

        if (day === 0) {
            msg = "Welcome to Peony&Bloom Candles this Sunday!";
        } else if (day === 1) {
            msg = "Welcome to Peony&Bloom Candles this Monday!";
        } else if (day === 2) {
            msg = "Welcome to Peony&Bloom Candles this Tuesday!";
        } else if (day === 3) {
            msg = "Welcome to Peony&Bloom Candles this Wednesday!";
        } else if (day === 4) {
            msg = "Welcome to Peony&Bloom Candles this Thursday!";
        } else if (day === 5) {
            msg = "Welcome to Peony&Bloom Candles this Friday!";
        } else if (day === 6) {
            msg = "Welcome to Peony&Bloom Candles this Saturday!";
        }

        document.getElementById("msgBox").innerHTML = msg;
    }

    displayGreeting();
});
function scroll() {
        var t = window.scrollY;
        var para = document.getElementById("para");
        var m = - 0.25;
        var b = 0;
        newY = m*t + b;
        para.style.backgroundPositionY = newY + "px";      

        var t = window.scrollY;
        var nav = document.getElementById("nav");
        var l1=  document.getElementById("l1");
        var l2=  document.getElementById("l2");
        var l3=  document.getElementById("l3");
        var l4=  document.getElementById("l4");
        var s1=  document.getElementById("s1");
        var s2=  document.getElementById("s2");
        var s3=  document.getElementById("s3");
        var s4=  document.getElementById("s4");
        var t1 = s1.offsetTop;
        var t2 = s2.offsetTop;
        var t3 = s3.offsetTop;
        var t4 = s4.offsetTop;
        
        
    l1.style.borderBottomColor = "#f4a261";     
    l2.style.borderBottomColor = "#f4a261";    
    l3.style.borderBottomColor = "#f4a261";          
    l4.style.borderBottomColor = "#f4a261";
                 if (t > t4){
            l4.style.borderBottomColor = "gold";  
        } else if (t > t3){
            l3.style.borderBottomColor = "gold";
            
        }  else if (t > t2){
            l2.style.borderBottomColor = "gold";
            
        } else if (t > t1){
            l1.style.borderBottomColor = "gold";
               }
    }

function checkName() {
        var namebox = document.getElementById("name");
        var name = namebox.value;

        var success = true;
        for (var i = 0; i < name.length; i++) {
            var ascii = name.charCodeAt(i);
            if (!isLetter(ascii)) {
                success = false;
            }
        }

        if (name.length >= 4 && success === true) {
            // Valid
            namebox.style.borderColor = "green";
        } else {
            // Invalid
            namebox.style.borderColor = "red";
        }
    }
    function checkId() {
        var idBox = document.getElementById("id");
        var id = idBox.value;

        
        if (id === "CG003" || id === "EE002"  ||  id === "LB001"  ||   id === "RH004") {
            // Valid
            idBox.style.borderColor = "green";
        } else {
            // Invalid
            idBox.style.borderColor = "red";
        }
    }
    
    function checkMessage() {
        var msgBox = document.getElementById("message");
        var msg = msgBox.value;

        
        if (msg.length >= 10 && msg.length <=30) {
            // Valid
            msgBox.style.borderColor = "green";
        } else {
            // Invalid
            msgBox.style.borderColor = "red";
        }
    }


    function checkPhoneNumber() {
    var phonebox = document.getElementById("phone");
    var phone = phonebox.value;

    if (phone.length === 12) {
        var c0 = phone.charCodeAt(0);
        var c1 = phone.charCodeAt(1);
        var c2 = phone.charCodeAt(2);
        var c3 = phone.charCodeAt(3);
        var c4 = phone.charCodeAt(4);
        var c5 = phone.charCodeAt(5);
        var c6 = phone.charCodeAt(6);
        var c7 = phone.charCodeAt(7);
        var c8 = phone.charCodeAt(8);
        var c9 = phone.charCodeAt(9);
        var c10 = phone.charCodeAt(10);
        var c11 = phone.charCodeAt(11);

        if (
            isNumber(c0) && isNumber(c1) && isNumber(c2) && 
            c3 === 32 && 
            isNumber(c4) && isNumber(c5) && isNumber(c6) && 
            c7 === 32 && 
            isNumber(c8) && isNumber(c9) && isNumber(c10) && isNumber(c11)
        ) {
            // Valid
            phonebox.style.borderColor = "green";
        } else {
            // Invalid
            phonebox.style.borderColor = "red";
        }
    } else {
        // Invalid 
        phonebox.style.borderColor = "red";
    }
}

    function isLetter(ch) {
        return (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122); 
    }

    function isNumber(ch) {
        return ch >= 48 && ch <= 57; 
    }
    
     function updateReason() {
                var reasonBox = document.getElementById("reasonBox");
                
                var opts = reasonBox.options;
                var si = reasonBox.selectedIndex;
                var sel = opts[si];
                
                hideBoxes();

                if (sel.index == 2) {
                    showID();
                }
            }
    
    function hideBoxes () {
                
                var idLabel = document.getElementById("productId");
                var id = document.getElementById("id");
                
                idLabel.className = "hidden";
                id.className = "hidden";
            }
    
    function showID() {
                var idLabel = document.getElementById("productId");
                var id = document.getElementById("id");

                idLabel.className = "visible";
                id.className = "visible";
            }

