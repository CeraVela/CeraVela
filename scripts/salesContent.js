$(window).on('resize', function() {  
    if($(window).width() < 900) {
      $(".sales-content").addClass("sales-content-small");
      $(".sales-content").addClass("sales-content-large");
    }else{
      $(".sales-content").addClass("sales-content-large");
      $(".sales-content").addClass("sales-content-small");
    }
  })