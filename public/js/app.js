import { db, collection, addDoc } from './firebaseConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  try{
  document.getElementById('verse-text').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
  fetch('https://christ-comfort.web.app/random-verse') // Replace with your proxy server URL
      .then(response => response.json())
      .then(data => {
          document.getElementById('verse-reference').textContent = data.reference;
          document.getElementById('verse-text').textContent = data.text;
      })
      .catch(error => {
          console.error('Error fetching the Bible verse:', error);
          document.getElementById('verse-reference').textContent = "Love must be completely sincere. Hate what is evil, hold on to what is good.";
          document.getElementById('verse-text').textContent = "Romans 12 : 9";
      });
    }catch(e){
      console.error('Error fetching the Bible verse:', e);
      document.getElementById('verse-reference').textContent = "Love must be completely sincere. Hate what is evil, hold on to what is good.";
          document.getElementById('verse-text').textContent = "Romans 12 : 9";
    }
});
// Function to add data to Firestore
const submitBtn = document.querySelector('#submit');
async function addItem(userNameInput, userEmailInput, userPhoneInput, userMessageInput, userCountry, fvalue, dateTime, value, userStateInput) {
  try {
    document.getElementById("result").innerHTML = '';
    submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
    const docRef = await addDoc(collection(db, "christiansData"), {
       
      name: userNameInput,
      email: userEmailInput,
      phone: userPhoneInput,
      city: userCountry,
      feedback: fvalue,
      message: userMessageInput,
      datetime: dateTime,
      sex: value,
      state: userStateInput,
    });
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("success").innerHTML = 'Successful, we will get back to you immediately';
    submitBtn.innerHTML = "Contact us";
  } catch (e) {
    console.error("Error adding document: ", e);
    document.getElementById("result").innerHTML = 'Not Successful';
    submitBtn.innerHTML = "Contact us";

  }
}

// Your existing DOM manipulation and form submission logic here
//start grabbing our Dom elements
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userPhone = document.querySelector('#userPhone');
let userMessage = document.querySelector('#userMessage');
let country = document.querySelector('#country');
let userState = document.querySelector('#userState');
submitBtn.addEventListener('click', function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userPhoneInput = userPhone.value;
  let userMessageInput = userMessage.value;
  let userCountry = country.value;
  let userStateInput = userState.value;

  var value = $("input:radio[name=rdoName]:checked").val();
  var fvalue = $("input:radio[name=rdoF]:checked").val();

  if (userNameInput==null || userNameInput==""){
    document.getElementById("result").innerHTML = 'Please provide your full name: only alphabet';
    userName.focus();
  return false;
  } else if (userEmailInput==null || userEmailInput==""){
    document.getElementById("result").innerHTML = 'Please provide your Email address';
    userEmail.focus();
  return false;
  } else if (userPhoneInput==null || userPhoneInput==""){
    document.getElementById("result").innerHTML = 'Please provide your mobile number';
    userPhone.focus();
  return false;
  } else if (userCountry == "Default"){
    document.getElementById("result").innerHTML = 'Please select your country from the list';
    country.focus();
  return false;
  } else if (userMessageInput==null || userMessageInput==""){
    document.getElementById("result").innerHTML = 'Please type your Message';
    userMessage.focus();
  return false;
  } else if (userStateInput ==null || userStateInput==""){
    document.getElementById("result").innerHTML = 'Please which State are you from?';
    userState.focus();
  
  }else {
    console.log(12233333);
     addItem(userNameInput, userEmailInput, userPhoneInput, userMessageInput, userCountry, fvalue, dateTime, value, userStateInput);
     console.log("fish");
    }
});




    document.addEventListener('DOMContentLoaded', () => {
      const audioPlayers = document.querySelectorAll('.audio-player');

      audioPlayers.forEach(audio => {
          audio.addEventListener('play', () => {
              audioPlayers.forEach(otherAudio => {
                  if (otherAudio !== audio) {
                      otherAudio.pause();
                      otherAudio.currentTime = 0; // Optionally reset the playback position
                  }
              });
          });
      });
  });


 





