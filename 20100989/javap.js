var num=1;
var num2=0;
function fruit(){
    var array1 = new Array("딸기","바나나","사과","망고","아보카도","감","체리","파인애플","석류","블루베리","레드베리","블랙베리","화이트베리","퍼플베리","그린베리","옐로베리","핑크베리","오렌지","포도","토마토");

    
    for(var i=0;i<1;i++){
        var comN = Math.floor(Math.random() * 20);
        fruit_name.innerHTML = array1[comN];
        fruit_int.innerHTML = num;
        fruit_num.innerHTML = comN;
        num = num+1;
    }
        setTimeout(fruit, 1000);
      
    return true;
}

function fruit_sel(){
    var array2 = new Array("딸기","바나나","사과","망고","아보카도","감","체리","파인애플","석류","블루베리","레드베리","블랙베리","화이트베리","퍼플베리","그린베리","옐로베리","핑크베리","오렌지","포도","토마토");

    
    for(var i=0;i<1;i++){
        fruit_name.innerHTML = array2[num2];
        fruit_int.innerHTML = num2;
        fruit_num.innerHTML = num2;
        num2 = num2+1;
    }
        setTimeout(fruit_sel, 1000);
      
    return true;
}

function date(){
    for(var i=0;i<1;i++){
        var inp = document.getElementById("dob").value;
        var birthday = new Date(inp);
        var now = new Date();
        
        var s1 = birthday.getSeconds();
        var s2 = now.getSeconds();
        
        var m1 = birthday.getMinutes();
        var m2 = now.getMinutes();
        
        var h1 = birthday.getHours();
        var h2 = now.getHours();
        
        var d1 = birthday.getDate();
        var d2 = now.getDate();
        
        var a = s1 - s2;
        var b = m1 - m2;
        var c = h1 - h2;
        var d = d1 - d2 -1;
        
        if (a<0){a=60- (a*-1)}
        if (b<0){b=b*-1}
        if (c<0){c=c*-1}
        if (d<0){d=d*-1}
        console.log(c);
        
        date_input.innerHTML = birthday;
        date_d.innerHTML = d;
        date_h.innerHTML = c;
        date_m.innerHTML = b;
        date_s.innerHTML = a;
    }
    setTimeout(date,1000);
}