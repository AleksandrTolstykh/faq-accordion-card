$(".btn").click(function () {
  $(this).toggleClass("selected-question");
  $(this).toggleClass("question");
  $(this).children(".arrow").toggleClass("arrow-rotate");
})
