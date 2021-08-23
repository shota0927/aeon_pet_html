$(function () {
  $(document).on("click", ".modal-open", function () {
    $(".modal-container").fadeIn();
    console.log("てす");
    return false;
  });
  $(".modal-close").on("click", function () {
    $(".modal-container").fadeOut();
    console.log("てす");
    return false;
  });
});
