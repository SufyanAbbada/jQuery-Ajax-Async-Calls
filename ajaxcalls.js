// //In here we require two basic functions, one to send AJAX call and other to recieve the response from the server.
// //As the server responds to that, we will get that response and give that to the function for further processing.
// function snedAjax() {
//   console.log("We mostly send Requests through this function");
//   //Our code will be here
//   $.get("test.txt", respondhandling);
//   console.log("Ajax call sent"); //Just to check our validity
// }

// function respondhandling(response) {
//   console.log("Data Received");
//   console.log(response);
//   $("#result").empty; //To make it empty before any addition.
//   $("#result").append(response);
// }

// //Come to simple Bindings

// $(function () {
//   $("#loading").click(snedAjax);
//   //This means that we are sending Ajax call by clicking on the Button.
// });

// //That above whole ca be converted into a small function as

$(function () {
  $("#loading").click(function () {
    $.get("test.txt", function (response) {
      $("#result").empty;
      $("#result").append(response);
    });
  });
});
