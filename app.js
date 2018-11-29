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

/* Mouse over pour le carousel */

function blurImg(x) {
  x.style.filter = "blur(6px)";
}

function normalImg(x) {
  x.style.filter = "blur(0px)";
}




/* =================================== */
/* Instagram feed*/
$(window).on('load', function () {
  $.instagramFeed({
    'username': 'ucrafty_company',
    'container': "#instagram-feed-demo",
    'items_per_row': 3,
    'items': 6,
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
  modal.find('img').attr('src','img/box_precedentes/'+recipient+'.jpg')


  
})

/* =================================== */
/* Calcul du prix total */
function priceCalcul() {
  var x = document.getElementById("quantitySelector").value;
  console.log(x * 19.99 )
  document.getElementById("price").innerHTML = "TOTAL : " + x * 19.99 + '€';
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
      sendMail();
    }, 'json');
    return false;
  });
});
function closeAlert() {
  document.getElementById('confirmAlert').style.display = 'none';
}    
/* =================================== */

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
    document.getElementById("logo-title").style.width = "160px";
    document.getElementById("logo-title").style.padding = "60px 0px 0px 0px";
  } else {
    document.getElementById("logo-title").style.width = "95px";
    document.getElementById("logo-title").style.padding = "0px";
  }
  prevScrollpos = currentScrollPos;
} 

// Send mail after command
function sendMail() {
  console.log("coucou");
  var emailAdress = document.getElementById("inputEmail").value;
  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  Email.send("confirmation-commande@ucrafty.fr",
    emailAdress,
    "Confirmation de votre réservation",
    "Merci de votre commande.",
    {token :"9fc2379c-19e3-4774-9114-35549842763e"}
  );
  alert("sent");
  console.log("done");
};
