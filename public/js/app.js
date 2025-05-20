import { db, collection, addDoc } from './firebaseConfig.js';
async function bible(){
  try{
    document.getElementById('verse-text').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
    fetch('https://christ-comfort-ede21236a94b.herokuapp.com/random-verse') // Replace with your proxy server URL
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching the Bible verse:', error);
            document.getElementById('verse-reference').textContent = "Love must be completely sincere. Hate what is evil, hold on to what is good.";
            document.getElementById('verse-text').textContent = "Romans 12 : 9";
        });
      }catch(e){
        document.getElementById('verse-reference').textContent = "Love must be completely sincere. Hate what is evil, hold on to what is good.";
            document.getElementById('verse-text').textContent = "Romans 12 : 9";
      }
}
document.addEventListener('DOMContentLoaded', () => {
  try{
  document.getElementById('verse-text').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
  fetch('https://counselling-web-app.onrender.com/random-verse') // Replace with your proxy server URL
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
      document.getElementById('verse-reference').textContent = "Love must be completely sincere. Hate what is evil, hold on to what is good.";
          document.getElementById('verse-text').textContent = "Romans 12 : 9";
    }
});
// Function to add data to Firestore
const submitBtn = document.querySelector('#submit');
async function addItem(userNameInput, userEmailInput, userPhoneInput, userMessageInput, userCountry, fvalue, dateTime, value, userStateInput, userDateInput,userTimeInput) {
  try {
    document.getElementById("result").innerHTML = '';
    submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
    const docRef = await addDoc(collection(db, "christiansData"), {
       
      name: userNameInput,
      email: userEmailInput,
      phone: userPhoneInput,
      city: userCountry,
      message: userMessageInput,
      datetime: dateTime,
      sex: value,
      state: userStateInput,
      seen: "No",
      replied: "No",
      reply:"Nothing yet",
      userDate: userDateInput.toString(),
      userTime: userTimeInput.toString(),
    });
    fetch('https://counselling-web-app.onrender.com/random-verse') // Replace with your proxy server URL
      .then(response => response.json())
      .then(data => {
          document.getElementById('submit-verse-reference').textContent = data.reference;
          document.getElementById('submit-verse-text').textContent = data.text;
      })
    document.getElementById("success").innerHTML = 'Successful, we look forward speaking with you soon!'; 
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
let userTime = document.querySelector('#userTime');
let userDate = document.querySelector('#userDate');
submitBtn.addEventListener('click', function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userPhoneInput = userPhone.value;
  let userMessageInput = userMessage.value;
  let userCountry = country.value;
  let userStateInput = userState.value;
  let userDateInput = userDate.value;
  let userTimeInput = userTime.value;

  var value = $("input:radio[name=rdoName]:checked").val();
  var fvalue = $("input:radio[name=rdoF]:checked").val();

  const selectedDate = new Date(userDateInput);
  const day = selectedDate.getUTCDay();

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
  
  } else if (userDateInput == undefined || userDateInput==""){
    document.getElementById("result").innerHTML = 'Please select the date you want to speak with us';
    userDate.focus();
  
  }else if (day != 0 && day != 6){
    document.getElementById("result").innerHTML = 'Please select either Saturday or Sunday';
    userDate.focus();
   }else if (userTimeInput == undefined || userTimeInput==""){
    document.getElementById("result").innerHTML = 'Please select the time you want to speak with us';
    userTime.focus();
  
  }else {
     addItem(
      userNameInput,
      userEmailInput, 
      userPhoneInput, 
      userMessageInput, 
      userCountry, 
      fvalue, 
      dateTime, 
      value, 
      userStateInput,
      userDateInput,
      userTimeInput
    );
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


 





