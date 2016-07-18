var comN = Math.floor(Math.random() * 100) + 1;
var Pguess = 0;
    function guess(){
        var result="";
        var number=parseInt(document.getElementById("user").value);
        Pguess++;
        if(number==comN) result = "맞췄습니다";
        else if(number > comN) result = "숫자가 너무 높습니다";
        else if (number < comN) result = "숫자가 너무 낮습니다"
        document.getElementById("result").value = result;
        document.getElementById("guesses").value = Pguess;
        return true;
    }