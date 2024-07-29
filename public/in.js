// Your web app's Firebase configuration
  
//init firebasejs
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

console.log("Initialisation Successful!");
var db = firebase.firestore();


const coverTransTableBody = document.getElementById('coverTrans_fields');
const CoverTransactionRef = db.collection('contactData');

CoverTransactionRef.get().then(snapshot => {
  var content = '';

  snapshot.docs.forEach(doc => {

    var coverSummary = doc.data();
    console.log(coverSummary);
    let html = `<tr>
            <td>${doc.id}</td>
            <td>${coverSummary.name}</td>
            <td>${coverSummary.email}</td>
            <td>${coverSummary.phone}</td>
            <td>${coverSummary.city}</td>
            <td>${coverSummary.message}</td>
            </tr>`;
    content += html;
    coverTransTableBody.innerHTML = content;

  }, error => {
    console.log(error.message);
  });
});
// var exRef = db.collection('contactData');
// var content = '';
// var allex = exRef
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//
//         var name = doc.data().name;
//         var email = doc.data().email;
//         var city = doc.data(). city;
//         var phone = doc.data().phone;
//         const message = doc.data().message;
//
//         // document.getElementById("name").innerHTML = name;
//         // document.getElementById("email").innerText = email;
//         // document.getElementById("phone").innerText = phone;
//         // document.getElementById("city").innerText = city;
//         // document.getElementById("message").innerText = message;
//
//
//         content +='<div>';
//
//                content += '<p>' + name + '</p>';
//                content += '<p>' + email + '</p>';
//                content += '<p>' + phone + '</p>';
//                content += '<p>' + city + '</p>';
//                content += '<p>' + message + '</p>';
//
//                content += '</div>';
//               $('#ex-table').append(content);
//                //$("#ex-table").html(content);
//
// console.log(name);
//     });
//
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });
//
//


//
// const cafeList = document.querySelector('#cafe-list');
// function renderCafe(doc){
// let li = document.createElement('li');
// let name = document.createElement('span');
// let email = document.createElement('span');
// let phone = document.createElement('span');
// let city = document.createElement('span');
// let message = document.createElement('span');
//
// li.setAttribute('data-id', doc.id);
// name.textContent = doc.data().name;
// email.textContent = doc.data().email;
// phone.textContent = doc.data().phone;
// city.textContent = doc.data().city;
// message.textContent = doc.data().message;
//
// li.appendChild(name);
// li.appendChild(email);
// li.appendChild(phone);
// li.appendChild(city);
// li.appendChild(message);
//
// cafeList.appendChild(li);
// }
// db.collection('contactData').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     renderCafe(doc);
//   });
// });
