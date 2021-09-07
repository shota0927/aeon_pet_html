$(function () {
  $(document).on("change", ".tab__input", function () {
    var description = "";
    var title = "";

    if ($(this).val() === "store") {
      description =
        "イオンペット グルーミング予約サイトの「検索結果（リスト）」ページです。イオンペットは、動物と人間の幸せな共生社会の実現を目指します。";
      breadcrumb = "検索結果（リスト）";
      title =
        "店舗検索＞検索結果（リスト）｜イオンペット グルーミング予約サイト";
      replace(description, breadcrumb, title);

      $(".tab__map").fadeOut();
      $(".tab__store").fadeIn();
    } else if ($(this).val() === "map") {
      description =
        "イオンペット グルーミング予約サイトの「検索結果（地図）」ページです。イオンペットは、動物と人間の幸せな共生社会の実現を目指します。";
      title = "店舗検索＞検索結果（地図）｜イオンペット グルーミング予約サイト";
      replace(description, title);

      $(".tab__store").fadeOut();
      $(".tab__map").fadeIn();
    }

    function replace(description, title) {
      $("meta[name='description']").attr("content", description);
      $("title").html(title);
    }
  });
});
