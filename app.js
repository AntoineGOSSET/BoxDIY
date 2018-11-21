/* =================================== */
/* Carousel pour les anciennes box */
$('#recipeCarousel').carousel({
  interval: 10000
})

$('#oldbox .carousel .carousel-item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length > 0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
/* =================================== */
/* Instagram feed*/
$(window).on('load', function () {
  $.instagramFeed({
    'username': 'ucrafty_ynov',
    'container': "#instagram-feed-demo",
    'items': 8,
    'display_biography': false,
    'display_profile': false
  });
});
/* =================================== */

/*
 
https://www.c-sharpcorner.com/UploadFile/88d8c0/store-html-form-to-excel-sheet-using-vb-script/ 
https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175
 
 
/* =================================== */
/* Animations apparition scrol */

$(window).scroll(function () {
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function () {
    var distanceFromTop = $(this).offset().top;
    if (scrolledFromTop >= distanceFromTop + 100) {
      var delaiAnim = $(this).data("delai");
      $(this).delay(delaiAnim).animate({
        top: 0,
        opacity: 1
      });
    }
  });
});


$(function () {  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});
$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hideme').each(function (i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 600);

      }

    });

  });

});

/* =================================== */

/* Modal */
$('#exampleModal').on('show.bs.modal', function (event) {
  document.getElementById('loading-register').style.display = 'none';
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever')
  var commandtype = button.data('type')
  var datedispo = button.data('date') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(commandtype)
  modal.find('.modal-body #recipient-name').val(recipient)
  if (datedispo) {
    modal.find('.modal-body p').text('Disponnible à partir du ' + datedispo)
  }
})

/* =================================== */
/* Calcul du prix total */
function priceCalcul() {
  var x = document.getElementById("quantitySelector").value;
  document.getElementById("price").innerHTML = "TOTAL : " + x * 10 + '€';
}
/* =================================== */
/* Formulaire achat/reservation */

$(document).ready(function () {
  // References:
  var $form = $('#myForm');
  var $conf = $('#confimrtext');
  var $subm = $('#mySubmit');
  var $impt = $form.find(':input').not(':button, :submit, :reset, :hidden');
  // Submit function:
  $form.submit(function () {
    document.getElementById('loading-register').style.display = 'block';
    $.post($(this).attr('action'), $(this).serialize(), function (response) {
      // On success, clear all inputs;
      $impt.val('').attr('value', '').removeAttr('checked').removeAttr('selected');
      // Write a confirmation message:
      jQuery("#exampleModal").modal("hide");
      $conf.html("Merci de votre commande !" );
      document.getElementById('confirmAlert').style.display = 'block';

    }, 'json');
    return false;
  });
});
function closeAlert() {
  document.getElementById('confirmAlert').style.display = 'none';
}    
/* =================================== */


