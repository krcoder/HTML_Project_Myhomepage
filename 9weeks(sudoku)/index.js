var i, j, k, o, p, q;
var goal=0;
var temp=0;
var fail=0;
var be = ['A','B','C','D','E','F','G','H','I'];
var be3 = new Array();
var arry = [];
var value=0;
var cnt=0;

function rand(){
    $("document").ready(function() {
        for(i=0;i<81;i++){
            be3[i] = i+1;
        }
       
        for(i=0;i<81;i++){
            value = Math.floor(Math.random() * 81);
            if(value < 57){
                document.getElementById(be3[i]).value="";
            }
            else{
                document.getElementById(be3[i]).style.color="#BB0060";
                cnt++;
            }
        }
        //document.getElementById(suu).value="hihii";
    }
);
}

    
function load(){
   $("document").ready(function() {
       //가로부분 검수
       for(k=0;k<9;k++){
           
           for(i=0; i<9; i++){
               var num1 = jQuery("#" + be[k] + (i+1) + "> input");
               arry[i]=num1.val();
           }

           for(i=0;i<9;i++){
               for(j=0;j<9;j++){
                   if(i != j && arry[i]==arry[j] && arry[j] != ""){
                       
                       for(p=0;p<9;p++){
                           $("#" + be[k] + (p+1) + ">  input").css("background","rgb(250,170,170)");
                       }
                       return -1;
                       break;
                   }
                   else{
                       for(p=0;p<9;p++){
                           $("#" + be[k] + (p+1) + ">  input").css("background","rgb(250,235,215)");
                       }
                   }
               }
           }
           
           for(i=0;i<9;i++){
               arry[i]="";
           }
       }
       
         // 세로부분 검수
       for(k=0;k<9;k++){
           
           for(i=0; i<9; i++){
               var num1 = jQuery("#" + be[i] + (k+1) + "> input");
               arry[i]=num1.val();
           }

           
            for(i=0;i<9;i++){
                for(j=0;j<9;j++){
                    if(i != j && arry[i] == arry[j] && arry[j] != ""){
                       for(p=0;p<9;p++){
                           $("#" + be[p] + (k+1) + "> input").css("background","rgb(250,170,170)");
                       }
                        return -1;
                    break;  
                    }
                }
            }
           
           
            for(i=0;i<9;i++){
                arry[i]="";
            }
        }
       
       
        //큐브부분 검수
        for(k=0; k<3; k++){
            for(o=0;o<3;o++){
                
                for(i=0; i<3; i++){
                    for(j=0; j<3; j++){
                        var num1 = jQuery("#" + be[(k*3)+(i)] + ((o*3)+j+1) + "> input");
                        arry[(i*3)+j]=num1.val();
                    }
                }

                for(i=0;i<9;i++){
                    for(j=0;j<9;j++){
                        
                        if(i != j && arry[i] == arry[j] && arry[j] != ""){
                        for(p=0;p<3;p++){
                            for(q=0;q<3;q++){
                                $("#" + be[(k*3)+p] + ((o*3)+(q+1)) + ">    input").css("background","rgb(250,170,170)" );
                            }
                        }
                            return -1;
                        break;
                    }
                }
            }
                
               for(i=0;i<9;i++){
                   arry[i]="";
            
               }
            }
        }
       
       
       
       
       }
   );
}


var timer = 0,
    perc = 0,
    timeTotal = 2500,
    timeCount = 1,
    cFlag;

function updateProgress(percentage) {
    var x = (percentage/timeTotal)*100,
        y = x.toFixed(2);
    $('#pbar_innerdiv').css("width", x + "%");
    $('#pbar_innertext').text(y + "% -  (20분이 경과되면 알람과 함께 종료됩니다)");
    if(x==100){
        alert("시간이 만료되었습니다");
    }
}

function animateUpdate() {
    if(perc < timeTotal) {
        perc = perc+0.01;
        updateProgress(perc);
        timer = setTimeout(animateUpdate, timeCount);
    }
}

$(document).ready(function() {
    $('#pbar_outerdiv').click(function() {
        if (cFlag == undefined) {
            clearTimeout(timer);
            perc = 1;
            cFlag = true;
            animateUpdate();
        }
        else if (!cFlag) {
            cFlag = true;
            animateUpdate();
        }
        else {
            clearTimeout(timer);
            cFlag = false;
        }
    });
}); 