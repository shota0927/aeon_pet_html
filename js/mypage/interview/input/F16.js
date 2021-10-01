$(function () {
  $(document).ready(function () {
    $("#f16-textarea--pet-illness").prop("disabled", true);
    $("#f16-textarea--pet-homesick").prop("disabled", true);
    $("#f16-textarea--pet-allergies").prop("disabled", true);
    $("#f16-textarea--pet-housemate").prop("disabled", true);
    $("#f16-table--anamnesis").find("input").prop("disabled", true);
    $("#f16-table--anamnesis").find("select").prop("disabled", true);
    $("#f16-table--anamnesis").find("th").addClass("inactive");
  });

  $(document).on("click", "input[name='pet-illness-group']", function () {
    if ($("#pet-illness--yes:checked").prop("checked")) {
      $("#f16-textarea--pet-illness").prop("disabled", false);
    } else if ($("#pet-illness--no:checked").prop("checked")) {
      $("#f16-textarea--pet-illness").prop("disabled", true);
    }
  });

  $(document).on("click", "input[name='pet-homesick-group']", function () {
    if ($("#pet-homesick--yes:checked").prop("checked")) {
      $("#f16-textarea--pet-homesick").prop("disabled", false);
    } else if ($("#pet-homesick--no:checked").prop("checked")) {
      $("#f16-textarea--pet-homesick").prop("disabled", true);
    }
  });

  $(document).on("click", "input[name='pet-allergies-group']", function () {
    if ($("#pet-allergies--yes:checked").prop("checked")) {
      $("#f16-textarea--pet-allergies").prop("disabled", false);
    } else if ($("#pet-allergies--no:checked").prop("checked")) {
      $("#f16-textarea--pet-allergies").prop("disabled", true);
    }
  });

  $(document).on("click", "input[name='pet-housemate-group']", function () {
    if ($("#pet-housemate--yes:checked").prop("checked")) {
      $("#f16-textarea--pet-housemate").prop("disabled", false);
    } else if ($("#pet-housemate--no:checked").prop("checked")) {
      $("#f16-textarea--pet-housemate").prop("disabled", true);
    }
  });

  $(document).on("click", "input[name='pet-health-group']", function () {
    if ($("#pet-health--bad:checked").prop("checked")) {
      $("#f16-table--anamnesis").find("input").prop("disabled", false);
      $("#f16-table--anamnesis").find("select").prop("disabled", false);
      $("#f16-table--anamnesis").find("th").removeClass("inactive");
    } else if ($("#pet-health--good:checked").prop("checked")) {
      $("#f16-table--anamnesis").find("input").prop("disabled", true);
      $("#f16-table--anamnesis").find("select").prop("disabled", true);
      $("#f16-table--anamnesis").find("th").addClass("inactive");
      $("#f16-table--anamnesis").find("select").prop("selectedIndex", 0);
    }
  });

  $(
    document.on("click"),
    $("#f16-table--anamnesis").find("select"),
    function () {}
  );
});
