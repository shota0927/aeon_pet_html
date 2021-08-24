$(function () {
  var preModalPet="";


  $(".modal-container__content").on("click", function () {
    event.stopPropagation();
  });

  $(document).on("click", ".modal-open", function () {
    $(".modal-container").fadeIn();
    preModalPet="#"+$("input[name='radio__dog-kind']:checked")[0].id;
    return false;
  });
  $(".modal-close").on("click", function () {
    $("input[name='radio__dog-kind']:checked").prop('checked', false);
    $(preModalPet).prop('checked', true);
    $(".modal-container").fadeOut();
    return false;
  });

  $(".cancel-kind").on("click", function () {
    $(preModalPet).prop('checked', true);
    $(".modal-container").fadeOut();
    return false;
  });  

  $(".decide-kind").on("click", function () {
    $("input[name='radio__dog-kind']:checked").prop('checked', true);
    $(".modal-container").fadeOut();
    return false;
  });
});
