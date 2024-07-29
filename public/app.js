// Your web app's Firebase configuration


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
firebase.auth.Auth.Persistence.LOCAL;
//var db = firebase.firestore();


 $("#btn-login").click(function(){
   var email = $("#email").val();
    var password = $("#password").val();

    if(email !="" && password != ""){
var result = firebase.auth().signInWithEmailAndPassword(email, password);
result.catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;

console.log(errorCode);
console.log(errorMessage);

window.alert("Message : " + errorMessage);
});
    }else{
      $("#result").attr("class", "alert alert-danger");
      $("#result").html("Empty fields");
    }
 })


//signup
$("#btn-signup").click(function(){

  var email = $("#email").val();
   var password = $("#password").val();
     var cPassword = $("#confirmPassword").val();

   if( email != "" && password != "" && cPassword != ""){

     if(password == cPassword){
var result = firebase.auth().createUserWithEmailAndPassword(email, password);
result.catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;

console.log(errorCode);
console.log(errorMessage);

window.alert("Message : " + errorMessage);
});
}else{

   window.alert("username and password doesnt not match");
}
   }else{
    window.alert("username and password doesnt not match");
   }
})


//forgotpassword

$("#btn-resetPassword").click(function(){
  var auth = firebase.auth();
  var email = $("#email").val();

  if(email !=""){
auth.sendPasswordResetEmail(email).then(function(){
  window.alert("email has been sent to u");
})
.catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);

  window.alert("Message : " + errorMessage);
});
  }else{
      window.alert("email is empty");
  }
})

 //logout
$("#btn-logout").click(function(){
firebase.auth().signOut();
})



//update Account
$("#btn-update").click(function(){
var fName = $("#firstName").val();
var sName = $("#secondName").val();
var phone = $("#phone").val();
var gender = $("#gender").val();

var rootRef = firebase.database().ref().child("Users");
var userID = firebase.auth().currentUser.uid;
var usersRef = rootRef.child(userID);
if(fName != "" && sName != "" && phone != "" && gender != ""){

var userData ={
  "firstName": fName,
  "SecondName": sName,
  "phone": phone,
  "gender": gender,
};

usersRef.set(userData, function(error){
if(error){
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);

}else{
window.location.href="/data-tables";
}
});
}else{
  window.alert("empty fields");
}
});
//blogs
var validImagetypes = ["image/gif", "image/jpeg", "image/png"];
$("#selected-image").hide();
function previewImage(image_blog){

 if(image_blog.files && image_blog.files[0]){
   var reader = new FileReader();
   reader.onload = function(e){

       $("#selected-image").attr('src', e.target.result);
       $("#selected-image").fadeIn();
     }
     reader.readAsDataUrl(image_blog.files[0]);

 }
 }

 $("main-image").change(function(){
   previewImage(this);
 });


$("#save-blog").click(function(){
$("#main-desc").removeClass("is-invalid");
$("#main-image").removeClass("is-invalid");

var desc = $("#main-desc").val();
var picture = $("#main-image").prop("files")[0];

if(!desc){
$("#main-desc").addClass("is-invalid");
return;
}

if(picture == null){
$("#main-image").addClass("is-invalid");
return;
}

// if($.inArrary(picture["type"], validImagetypes)<0){
//   $("#main-image").addClass("is-invalid");
//   return;
// }

var databaseRef = firebase.database().ref().child("Blogs");
databaseRef.once("value").then(function(snapshot){
var name = picture["name"];
var dateStr = new Date().getTime();
var fileCompeleteName = name + "_" + dateStr;


var storageRef = firebase.storage().ref("blog Images");
var blogStorageRef = storageRef.child(fileCompeleteName);
var uploadTask = blogStorageRef.put(picture);
uploadTask.on("state_changed",

function progress(snapshot){
var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
$("#upload-progress").html(Math.round(percentage) + "%");
  $("#upload-progress").attr("style", "width:" + percentage + "%");
},
function error(err){

},
function compelete(){
var user = firebase.auth().currentUser;
var userName;
firebase.database().ref('Users/' + user.uid).once('value').then(function(snapshot){
   var fName = (snapshot.val() && snapshot.val().firstName);
   var sName = (snapshot.val() && snapshot.val().SecondName);

   userName = fName + " "+ sName;

});
uploadTask.snapshot.ref.getDownloadURL().then(function(downloadurl){
  var time = new Date();
  var options ={
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric"
  };
  var blogData = {
 "image": downloadurl,
 "name": fileCompeleteName,
 "desc": desc,
 "uid": user.uid,
 "counter": 5000 - counter,
 "userName": userName,
"time": time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric',hour12:true}),
"date" : time.toLocaleString('en-US', options),
  };

  var newPostRef = databaseRef.push();
  newPostRef.set(blogData, function(err){
    if(err){
      $("#result").attr("class", "alert alert-danger");
      $("#result").html(err.message);
    }else{
      $("#result").attr("class", "alert alert-success");
      $("#result").html("profile picture has been updated");
      window.open("", "_self");
    }
    resetForm();
  });
});
}
);
});
});

function resetForm(){
$("#main-form")[0].reset();
$("#selected-image").fadeOut();
$("#upload-progress").html("compeleted");
}

//retriving og Blogs
// var user = firebase.auth().currentUser;
// var dbBlogs = firebase.database().ref().child("Blogs").orderByChild("uid").equalTo(user.uid);
// dbBlogs.on("value", function(blogs){
//   if(blogs.exists()){
//
// blogs.forEach(function(singleBlog){
//
//   var uName = singleBlog.val().userName
//
//   document.getElementById("uName").innerText = uName;
// console.log(uName);
// });
//   }
// });


//modal display

function check_address(){
        jQuery('#step').css("display","none");
        jQuery('#step_2').css("display","block");
        jQuery('#next_button').css("display","none");
        jQuery('#sms_button').css("display","none");
        jQuery('#update_button').css("display","block");
        jQuery('#bak_button').css("display","inline-block");
        jQuery('#checkout_button').css("display","inline-block");
        jQuery('#updateModalLabel').html("Enter Your Card Details");
     }

     function check_sms(){
             jQuery('#step').css("display","none");
              jQuery('#step_2').css("display","none");
             jQuery('#step_3').css("display","block");
             jQuery('#next_button').css("display","none");
             jQuery('#sms_button').css("display","none");
             jQuery('#update_button').css("display","none");
             jQuery('#update_sms').css("display","block");
             jQuery('#bak_button').css("display","none");
              jQuery('#bak_sms').css("display","inline-block");
             jQuery('#checkout_button').css("display","inline-block");
             jQuery('#updateModalLabel').html("Enter Your Card Details");
          }


     function bak_button(){
        jQuery('#step').css("display","block");
        jQuery('#step_2').css("display","none");
        jQuery('#next_button').css("display","inline-block");
        jQuery('#sms_button').css("display","block");
        jQuery('#update_button').css("display","none");
        jQuery('#bak_button').css("display","none");
        jQuery('#checkout_button').css("display","none");
        jQuery('#updateModalLabel').html("Shipping Address");
     }

     function bak_buttonSms(){
        jQuery('#step').css("display","block");
        jQuery('#step_2').css("display","none");
        jQuery('#step_3').css("display","none");
        jQuery('#next_button').css("display","inline-block");
        jQuery('#sms_button').css("display","block");
        jQuery('#update_button').css("display","none");
        jQuery('#bak_sms').css("display","none");
           jQuery('#update_sms').css("display","none");
        jQuery('#checkout_button').css("display","none");
        jQuery('#updateModalLabel').html("Shipping Address");
     }
