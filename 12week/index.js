var i,j,k,o,p,q;
var goal=0;
var temp=0;

function clear(){
    $("document").ready(function() {
        alert("hi");
    }
                       );
}
                        
function load(){
   $("document").ready(function() {
       var arry = [];
       var be = ['A','B','C','D','E','F','G','H','I'];
        //$("#" + be[k] + (p+1) + "> input").css("background","250,235,215");
        
       //가로부분 검수
       for(k=0;k<9;k++){
           
           for(i=0; i<9; i++){
               var num1 = jQuery("#" + be[k] + (i+1) + "> input");
               //arry.push(num1.val());
               arry[i]=num1.val();
           }

           for(i=0;i<9;i++){
               for(j=0;j<9;j++){
                   if(i != j && arry[i]==arry[j] && arry[j] != ""){
                       
                       for(p=0;p<9;p++){
                           $("#" + be[k] + (p+1) + ">  input").css("background","rgb(250,170,170)");
                       }
                       i=100;
                       j=100;
                       k=100;
                       o=100;
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
               //arry.push(num1.val());
               arry[i]=num1.val();
           }

           
            for(i=0;i<9;i++){
                for(j=0;j<9;j++){
                    if(i != j && arry[i] == arry[j] && arry[j] != ""){
                       for(p=0;p<9;p++){
                           $("#" + be[p] + (k+1) + "> input").css("background","rgb(250,170,170)");
                       }
                    i=100;
                    j=100;
                    k=100;
                    o=100;
                    p=100;
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
                        //arry.push(num1.val());
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
                        i=100;
                        j=100;
                        k=100;
                        o=100;
                        p=100;
                        q=100;
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