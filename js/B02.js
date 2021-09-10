$(function () {
  $(document).on("change", ".tab-box__radio", function () {
    var description = "";
    var title = "";
    console.log($(this).val());
    if ($(this).val() === "store") {
      description =
        "イオンペット グルーミング予約サイトの「検索結果（リスト）」ページです。イオンペットは、動物と人間の幸せな共生社会の実現を目指します。";
      title =
        "店舗検索＞検索結果（リスト）｜イオンペット グルーミング予約サイト";
      replace(description, breadcrumb, title);

    } else if ($(this).val() === "map") {
      description =
        "イオンペット グルーミング予約サイトの「検索結果（地図）」ページです。イオンペットは、動物と人間の幸せな共生社会の実現を目指します。";
      title = "店舗検索＞検索結果（地図）｜イオンペット グルーミング予約サイト";
      replace(description, title);
    }

    function replace(description, title) {
      $("meta[name='description']").attr("content", description);
      $("title").html(title);
    }
  });

  $(document).on("click", ".more-info-button", function(){
    $(".none").fadeIn();
    
  });
});
