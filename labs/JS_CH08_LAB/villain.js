$(() => {

  $(".toggle-link").on("click", function (event) {
      event.preventDefault(); 

      const $this = $(this); 
      const $remainingText = $this.siblings(".remaining");

      
      if ($remainingText.hasClass("hidden")) {
          $remainingText.removeClass("hidden");
          $this.text("Show less");
      } else {
          $remainingText.addClass("hidden");
          $this.text("Show more");
      }
  });
});