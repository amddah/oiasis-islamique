
/*function blink(a){
    if(a.style.visibility=="visible"){
        a.style.visibility="hidden";
    }else{
        a.style.visibility="visible";
    }
}
setInterval('blink(vi)',400);*/
function validate(){
    var name=document.getElementById('prenom');
    var prenom=document.getElementById('nom');
    var date=document.getElementById('date');
    var mail=document.getElementById('mail');

    
    var homme=document.getElementById('homme');
    var i=0;

    if(name.value==''){
        document.getElementById('prenom').focus(),
        document.getElementById('erreur').innerHTML='** املء خانةالاسم';
        //setInterval('blink(erreur)',400);
        document.getElementById('prenom').style.backgroundColor="red", i++;
        return false;
    }
    if(prenom.value==''){
        document.getElementById('prenomerreur').innerHTML=' **املء خانة النسب',
        //setInterval('blink(prenomerreur)',400);
        document.getElementById('nom').style.backgroundColor="red",i++;
        return false;}
   
    if(date.value==''){
        document.getElementById('dateerreur').innerHTML='**املء خانة تاريخ الازدياد',
        //setInterval('blink(dateerreur)',400);
        document.getElementById('date').style.backgroundColor="red",i++;
        return false;}
    if(mail.value==''){
    
        document.getElementById('mailerreur').innerHTML='** المرجو ملء خانة البريد الالكتروني ',
        //setInterval('blink(mailerreur)',400);
        document.getElementById('mail').style.backgroundColor="red",i++;
            return false;}
        if(homme.checked==true){
            return true;
        }else{
           document.getElementById('erreurr').innerHTML='اختار نوع الجنس ذكر\انثى';
         
            return false;
        }
        if(i==0){
            return true;
        }else{return false;}
}
function calcul(){
   var homme=document.getElementById('homme').value=1;
   if(homme==checked){
       alert('bien');
       return true;
   }else{
       alert('voullier');
       return false;
   }
}
function validateEmail(champsText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(champsText.value.match(mailformat)){
    document.getElementById('mail').focus();
    document.getElementById("mail").style.backgroundColor="white";
    document.getElementById('mailerreur').style.visibility="hidden";
    return true;
    }else{
   document.getElementById('mailerreur').innerHTML="**  المرجو ادخال بريد الالكتروني صالح";
    document.getElementById("mail").style.backgroundColor="red";
    document.getElementById('mail').focus();
    return false;
    }
    }
    function valdatenom(){
        var nom=document.getElementById('prenom');
       
         var letters=/^[A-Za-z]+$/;
        if(nom.value.match(letters)){
            document.getElementById("prenom").style.backgroundColor="white";
            //setInterval('blink(erreur)',400);
            document.getElementById('erreur').style.visibility="hidden";
           

return true;
} else {
document.getElementById('erreur').innerHTML='الاسم يجب ان يتضمن فقط الاحروف'
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
        
    }
    function calcul(){
   nombreDeQuestion=10;
   nom=new Array();
   nomLength=new Array();
   point=0;
   for(n=0;n<=(nombreDeQuestion-1);n++)
   {
      nom[n]=document.getElementsByName("choix_rep_"+n);
      nomLength[n]=nom[n].length;
      for(q=0;q<=(nomLength[n]-1);q++)
      {
        if(nom[n][q].checked==true)
        {point=point+eval(nom[n][q].value);} 
        else
        {point=point;}

      }       
   }
   document.form_qz.txtNb.value=parseFloat(point*2)+'/20';

   document.getElementById('ressayer').innerHTML='mfjjdklslsaaa';
   document.getElementById('resul').innerHTML=parseFloat(point*2)+'/20';
}
function validateForm(){
    if (!validate()){
    return false;
    }
    else{
    confirm("تم التحقق من صحة جميع البيانات! ، هل تريد إرسالها إلى الخادم    ");
    }
    }
    function afficher(){
       
        fenetre=window.open(('',window),'toolbar=no,status=no,width=50%,hieght=50%');
        fenetre.document.writre('lnndsoe<br>');
        fenetre.document.writre('votre nom :'+document.monform.nom);
    }
    function affiche(){
        if(calcul()){
        envoyer=document.querySelector('envoyer')
        envoyer.style.display='block'
        }
    }
   /* if(navigator.geolocation){
        navigator.geolocation.watchPosition(function(position){
        console.log(position)},
        function(error){
            console.log(error)
        })
    }*/
    document.cookie="name=java; max-age=${60*60*24*30*12}; path=/"
// function visible
function visible(){
    var r1=document.getElementById('erreur');
   var r2=document.getElementById('mailerreur');
   var r3=document.getElementById('prenomerreur');
   var r4=document.getElementById('dateerreur');
    if(r1.style.visibility=="visible" || r3.style.visibility=="visible"){
        r1.style.visibility="hidden";
    }
}
/****************************************************************************************** */
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
