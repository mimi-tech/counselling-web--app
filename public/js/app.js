// Your web app's Firebase configuration
  
//init firebasejs
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

//start grabbing our Dom elements
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


const submitBtn = document.querySelector('#submit');
let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userPhone = document.querySelector('#userPhone');
let userMessage = document.querySelector('#userMessage');
let country = document.querySelector('#country');
let ur1 = document.querySelector("#r1");


 const db = firestore.collection("contactData");
 var letters = /^[A-Za-z]+$/;
submitBtn.addEventListener('click', function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userPhoneInput = userPhone.value;
  let userMessageInput = userMessage.value;
  let userCountry = country.value;
  var value=$("input:radio[name=rdoName]:checked").val();
  var fvalue=$("input:radio[name=rdoF]:checked").val();


  if (userNameInput==null || userNameInput==""){
    document.getElementById("result").innerHTML = 'Please provide your full name: only alphabet';
    userName.focus();
  return false;
}else if(userEmailInput==null || userEmailInput==""){
    document.getElementById("result").innerHTML = 'Please  provide your Email address';
    userEmail.focus();
  return false;
}else if(userPhoneInput==null || userPhoneInput==""){
    document.getElementById("result").innerHTML = 'Please provide your mobile number';
    userPhone.focus();
  return false;

}else if(userCountry == "Default"){
    document.getElementById("result").innerHTML = 'Please select your country from the list';
    country.focus();
  return false;
}else if(userMessageInput==null || userMessageInput==""){
    document.getElementById("result").innerHTML = 'Please type your Message';
    userMessage.focus();
  return false;
}else if(userMessageInput==null || userMessageInput==""){
    document.getElementById("result").innerHTML = 'Please type your Message';
    userMessage.focus();
  return false;
}else{
  console.log(value);
    db.doc().set({
      name: userNameInput,
      email:userEmailInput,
      phone:userPhoneInput,
      city:userCountry,
     feedback:fvalue,
     message: userMessageInput,
     datetime: dateTime,
     sex:value
    })
    .then(function(){
    document.getElementById("success").innerHTML = 'Successful, we will get back to you immediately';
    window.open("", "_self");
    })
    .catch(function(error){
  document.getElementById("result").innerHTML = 'Not Successful';
    });

}



});
