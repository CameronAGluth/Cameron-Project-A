// jQuery 3.x-style ready event and locally scoped $
// jQuery(function($) {
//   $('html').removeClass('nojs');
//   $('html').addClass('hasjs');
// });
// document.getElementById("demo").innerHTML = "Hello JavaScript!";
// function validate () {
//   //Email
//   // document.getElementById("email")
//   let x = document.forms["form"]["email"].value;
//   console.log(x);
//
//   //21+
//   // document.getElementById("age-verification")
//   let y = document.forms["form"]["age"].value;
//   console.log(y);
//   if age < 21 {
//
//   }
// }

console.log("Hello World!");
}
function verify() {
  var cbox = document.forms["form"]["employee-verification"]["age-verification"];
  if (
    cbox[0].checked == false &&
    cbox[1].checked == false &&
  ) {
    alert("Please ensure that you check BOTH checkboxes");
    return false;
  } else {
    alert("Thank you for submitting your waiver. We can't wait to see you at the employee party on June 12!");
    return true;
  }
}
