
function signup(){
   window.location.href="signUP.html";
}
function goToLearn(){
   window.location.href="about.html";
}
function ScrollTop(){
   window.location.href="#";
}

/* For sign Up*/
function handleSignUp(){
   const name=document.getElementById("username").value;
   localStorage.setItem("UserName",username);
   window.location.href="home.html";

}
/*Update */
const user=localStorage.getItem("UserName");
if(user){
   document.getElementById("signUp").style.display="none";
}
const btn=document.getElementById("ScrollUp");
window.addEventListener("scroll",function(){

   if(this.window.scrollY >100){
      btn.style.display="block";
   }
   else{
      btn.style.display="none";
   }
});

