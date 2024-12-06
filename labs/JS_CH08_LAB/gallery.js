$(() => {
 
  $("#gallery a").each(function () {
    const img = new Image();
    img.src = $(this).attr("href");
  });


  $("#gallery a").on("click", function (event) {
    event.preventDefault();

    const href = $(this).attr("href");
    const caption = $(this).attr("title");

    $("#largeImage").attr("src", href);
    $("#caption").text(caption);
    $("#viewer").removeClass("hidden");

    $("#gallery a").removeClass("active");
    $(this).addClass("active").focus();
  });

  $("#closeViewer").on("click", function () {
    $("#viewer").addClass("hidden");
  });


  $("#gallery a").first().focus();
  $(document).on("keydown", function (event) {
    const active = $("#gallery a.active");
    if (event.key === "ArrowRight" || event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      const next = active.next("a").length ? active.next("a") : $("#gallery a").first();
      active.removeClass("active");
      next.addClass("active").focus();
    } else if (event.key === "ArrowLeft" || (event.key === "Tab" && event.shiftKey)) {
      event.preventDefault();
      const prev = active.prev("a").length ? active.prev("a") : $("#gallery a").last();
      active.removeClass("active");
      prev.addClass("active").focus();
    } else if (event.key === "Escape") {
      $("#viewer").addClass("hidden"); 
    }
  });
});