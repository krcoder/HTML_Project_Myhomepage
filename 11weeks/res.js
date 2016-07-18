var id,pass,pass2,name,tel,email,birth,mind;

$(document).ready(function(){
   $("#content_form").bind("submit",function(){
   


       id = $("#id");
       if(id.val() == ""){
           alert("아이디를 입력 해 주세요");
           id.focus();
           return false;
       }
       var a=id.val();
       if((a.length > 8) || (a.length <6 )){
           alert("아이디의 길이는 6~8자 입니다");
           id.focus();
           return false;
       }
       
       pass = $("#password");
       if(pass.val() == ""){
           alert("비밀번호를 입력 해 주세요");
           pass.focus();
           return false;
       }
       
       
       pass2 = $("#password2");
       if(pass2.val() == ""){
           alert("비밀번호 확인창을 입력 해 주세요");
           pass2.focus();
           return false;
       }

       mind = $("#mind");
       if(mind.val() ==""){
           alert("이름을 입력 해 주세요");
           mind.focus();
           return false;
       }
       
       tel = $("#tel");
       if(tel.val() == ""){
           alert("전화번호를 입력 해 주세요");
           tel.focus();
           return false;
       }
       var reg_phone =/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$/;
       if (!reg_phone.test(tel.val())) {
           alert("전화번호 형식이 틀립니다(000-~)");
           tel.focus();
           return false;
       }
       
       email = $("#email");
       if(email.val() == ""){
           alert("이메일을 입력 해 주세요");
           email.focus();
           return false;
       }
       
       birth = $("#birth");
       if(birth.val() == ""){
           alert("생일 입력 해 주세요");
           birth.focus();
           return false;
       }


       return false;
   }); 
});


function clear(){
    alert("삭제구현안함");
}
function test(){
    alert("test on");
}