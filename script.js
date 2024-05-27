$(document).ready(function () {
  // give multiple css and select all elements
  //   $("*").css({
  //     "box-sizing": "border-box",
  //     margin: "0",
  //     padding: "0",
  //   });

  $("p").show();
  $("p").text("Old Text");
  $("#div").html(
    "<strong><i>This is HTML content please click on it</i></strong>"
  );

  $("#div").hover(function () {
    $(this).css("cursor", "pointer");
  });

  $("#btn").click(function () {
    $("p").text("New Text");
    $("#div").hide();
    $("body").css("background-color", "#a78bfa");
  });

  $("#ajaxdiv").load("Data.txt");

  $(".btn1").click(function () {
    $("body").css("background-color", "#FFFFFF");
    $("#div").show();
    $("p").text("Old Text");
  });

  //Select Multiple Classes at once
  $(".box1, .box2").css("background-color", "#fde047");

  //multiple element Selector
  $("section, article").css("border", "1px solid black");

  //Ajax call
  $("#ajaxBtn").click(function () {
    $.ajax({
      url: "ajax.txt",
      success: function (result) {
        $("h3").html(result);
      },
      error: function (xhr, status, error) {
        console.log(error);
      },
    });
  });

  //ajax setup
  //   $("#ajaxBtn").click(function () {
  //     $.ajaxSetup({
  //       url: "ajax.txt",
  //       error: function (xhr, status, error) {
  //         console.log(error);
  //       },
  //     });
  //     $.ajax();
  //   });

  //get request in ajaxcall
});
