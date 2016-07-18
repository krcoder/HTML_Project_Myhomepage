var i,j,k;
var goal=0;
var temp=0;

function load(){

   $("document").ready(function() {
       var arry = [];
       var be = ['A','B','C','D','E','F','G','H','I'];
    
       for(k=0;k<9;k++){
           
           for(i=0; i<9; i++){
               var num1 = jQuery("#" + be[k] + (i+1) + "> input");
               arry.push(num1.val());
           }

           //bubble go!
           for(i=0;i<9;i++){
               for(j=0;j<8;j++){
                    if(arry[j]>arry[j+1]){
                        temp=arry[j];
                        arry[j]=arry[j+1];
                        arry[j+1]=temp;
                    }
               }
           }       

           for(i=0;i<9;i++){
               temp = arry[i];
               for(j=i;j<9;j++){
                   if(arry[j+1]==temp && temp!=""){
                       alert("중복입니다!!");
                       i=100;
                       j=100;
                       k=100;
                       break;  
                   }
               }
           }
       }
   }
   );
}