$(function () {
  $(document).on("mousedown", ".c03-icon-password", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var passForm = $(this).prev("input");

    if (passForm.attr("type") == "password") {
      passForm.attr("type", "text");
    } else if (passForm.attr("type") == "text") {
      passForm.attr("type", "password");
    }
  });
});
