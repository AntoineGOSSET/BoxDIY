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
  modal.find('img').attr('src', 'img/box_precedentes/' + recipient + '.jpg')
})

function OnMonthChange() {
  var x = document.getElementById("month-list").value;
  console.log('img/box_precedentes/' + x + '.jpg')
  document.getElementById("imgBoxMonth").src = ('img/box_precedentes/' + x + '.jpg')
}
/* =================================== */
/* Calcul du prix total */
function priceCalcul() {
  var x = document.getElementById("quantitySelector").value;
  switch (x) {
    case "1":
      document.getElementById("price").innerHTML = "TOTAL : 19.99 €";
      break;
    case "2":
      document.getElementById("price").innerHTML = "TOTAL : 39.98 €";
      break;
    case "3":
      document.getElementById("price").innerHTML = "TOTAL : 59.97 €";
      break;
    case "4":
      document.getElementById("price").innerHTML = "TOTAL : 79.96 €";
      break;
    case "5":
      document.getElementById("price").innerHTML = "TOTAL : 99.95 €";
      break;
    case "6":
      document.getElementById("price").innerHTML = "TOTAL : 119.94 €";
      break;
    case "7":
      document.getElementById("price").innerHTML = "TOTAL : 139.93 €";
      break;
    case "8":
      document.getElementById("price").innerHTML = "TOTAL : 159.92 €";
      break;
    case "9":
      document.getElementById("price").innerHTML = "TOTAL : 179.91 €";
      break;
    case "10":
      document.getElementById("price").innerHTML = "TOTAL : 199.90 €";
      break;
    default:
      break;
  }

}
/* =================================== */
/* Formulaire achat/reservation */

$(document).ready(function () {
  // References:

  var $form = $('#myForm');
  var $conf = $('#confirmtext');
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
      $conf.html("Merci de votre commande ! Un mail de confirmation vous a été envoyé (pensez à vérifier dans vos courriers indésirable).");

      sendMail();
    }, 'json');
    document.getElementById('confirmAlert').style.display = 'block';
    $("#confirmAlert").fadeTo(5000, 500).slideUp(500, function () {
      $("#confirmAlert").alert('close');
    });
    return false;
  });
  // document.getElementById('confirmAlert').setTimeout(function() { (document.getElementById('confirmAlert').style.display = 'none'), 5000 });
  // window.setTimeout(function() {
  //   $("#confirmAlert").fadeTo(2000, 0).slideUp(2000, function(){
  //       $("#confirmAlert").alert('close'); 
  //   });
  // }, 5000);

});

function closeAlert() {
  document.getElementById('confirmAlert').style.display = 'none';
}

/* =================================== */
/* Animations changement taille logo */
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
    if (screen.width < 576) {
      document.getElementById("logo-title").style.width = "130px";
      document.getElementById("logo-title").style.padding = "30px 0px 0px 0px";
    }
    else {
      document.getElementById("logo-title").style.width = "160px";
      document.getElementById("logo-title").style.padding = "60px 0px 0px 0px";
    }

  }
  else {
    document.getElementById("logo-title").style.width = "95px";
    document.getElementById("logo-title").style.padding = "0px";
  }
  prevScrollpos = currentScrollPos;
}

// Send mail after command
function sendMail() {
  var body = '<!DOCTYPE html> \
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> \
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> \
  <meta name="viewport" content="initial-scale=1.0"> \
  <meta name="format-detection" content="telephone=no"> \
  <title>MOSAICO Responsive Email Designer</title> \
  <style type="text/css"> \
    body{ margin: 0; padding: 0; } \
    img{ border: 0px; display: block; } \
    .socialLinks{ font-size: 6px; } \
    .socialLinks a{ \
      display: inline-block; \
    } \
    .long-text p{ margin: 1em 0px; } \
    .long-text p:last-child{ margin-bottom: 0px; } \
    .long-text p:first-child{ margin-top: 0px; } \
  </style> \
  <style type="text/css"> \
    /* yahoo, hotmail */ \
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{ line-height: 100%; } \
    .yshortcuts a{ border-bottom: none !important; } \
    .vb-outer{ min-width: 0 !important; } \
    .RMsgBdy, .ExternalClass{ \
      width: 100%; \
      background-color: #3f3f3f; \
      background-color: #3f3f3f} \
    /* outlook/office365 add buttons outside not-linked images and safari have 2px margin */ \
    [o365] button{ margin: 0 !important; } \
    /* outlook */ \
    table{ mso-table-rspace: 0pt; mso-table-lspace: 0pt; } \
    #outlook a{ padding: 0; } \
    img{ outline: none; text-decoration: none; border: none; -ms-interpolation-mode: bicubic; } \
    a img{ border: none; } \
    @media screen and (max-width: 600px) { \
      table.vb-container, table.vb-row{ \
        width: 95% !important; \
      } \
      .mobile-hide{ display: none !important; } \
      .mobile-textcenter{ text-align: center !important; } \
      .mobile-full{ \
        width: 100% !important; \
        max-width: none !important; \
      } \
    } \
    /* previously used also screen and (max-device-width: 600px) but Yahoo Mail doesn\'t support multiple queries */ \
  </style> \
  <style type="text/css">\
    #ko_sideArticleBlock_3 .links-color a, #ko_sideArticleBlock_3 .links-color a:link, #ko_sideArticleBlock_3 .links-color a:visited, #ko_sideArticleBlock_3 .links-color a:hover{\
      color: #3f3f3f;\
      color: #3f3f3f;\
      text-decoration: underline\
    }\
    #ko_footerBlock_2 .links-color a, #ko_footerBlock_2 .links-color a:link, #ko_footerBlock_2 .links-color a:visited, #ko_footerBlock_2 .links-color a:hover{\
      color: #cccccc;\
      color: #cccccc;\
      text-decoration: underline\
    }\
    </style>\
</head>\
<body bgcolor="#3f3f3f" text="#919191" alink="#cccccc" vlink="#cccccc" style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191;"><center>\
  <table role="presentation" class="vb-outer" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#bfbfbf" style="background-color: #bfbfbf;" id="ko_sideArticleBlock_3">\
      <tbody><tr><td class="vb-outer" align="center" valign="top" style="padding-left: 9px; padding-right: 9px; font-size: 0;">\
      <!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><![endif]--><!--\
      --><div style="margin: 0 auto; max-width: 570px; -mru-width: 0px;"><table role="presentation" border="0" cellpadding="0" cellspacing="9" bgcolor="#ffffff" width="570" class="vb-row" style="border-collapse: separate; width: 100%; background-color: #ffffff; mso-cellspacing: 9px; border-spacing: 9px; max-width: 570px; -mru-width: 0px;">\
        <tbody><tr>\
      <td align="center" valign="top" style="font-size: 0;"><div style="width: 100%; max-width: 552px; -mru-width: 0px;"><!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><![endif]--><!--\
          --><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="184"><![endif]--><!--\
      --><div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 184px; -mru-width: 0px; min-width: calc(33.333333333333336%); max-width: calc(100%); width: calc(304704px - 55200%);"><!--\
        --><table role="presentation" class="vb-content" border="0" cellspacing="9" cellpadding="0" width="184" align="left" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; -yandex-p: calc(2px - 3%);">\
            <tbody><tr><td width="100%" valign="top" align="center" class="links-color"><!--[if (lte ie 8)]><div style="display: inline-block; width: 166px; -mru-width: 0px;"><![endif]--><img alt="" border="0" hspace="0" align="center" vspace="0" width="166" style="border: 0px; display: block; vertical-align: top; height: auto; margin: 0 auto; color: #3f3f3f; font-size: 13px; font-family: Arial, Helvetica, sans-serif; width: 100%; max-width: 166px; height: auto;" src="https://mosaico.io/srv/f-9i7wo59/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F9i7wo59%2Fchristmas-1911637_1920.jpg&amp;method=resize&amp;params=166%2Cnull"><!--[if (lte ie 8)]></div><![endif]--></td></tr>\
        </tbody></table><!--\
      --></div><!--[if (gte mso 9)|(lte ie 8)]></td><![endif]--><!--\
          --><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="368"><![endif]--><!--\
      --><div class="mobile-full" style="display: inline-block; vertical-align: top; width: 100%; max-width: 368px; -mru-width: 0px; min-width: calc(66.66666666666667%); max-width: calc(100%); width: calc(304704px - 55200%);"><!--\
        --><table role="presentation" class="vb-content" border="0" cellspacing="9" cellpadding="0" width="368" align="left" style="border-collapse: separate; width: 100%; mso-cellspacing: 9px; border-spacing: 9px; -yandex-p: calc(2px - 3%);">\
            <tbody><tr>\
      <td width="100%" valign="top" align="left" style="font-weight: normal; color: #3f3f3f; font-size: 18px; font-family: Arial, Helvetica, sans-serif; text-align: left;"><span style="font-weight: normal;">Votre commande a bien été prise en compte</span></td>\
    </tr> <tr><td class="long-text links-color" width="100%" valign="top" align="left" style="font-weight: normal; color: #3f3f3f; font-size: 13px; font-family: Arial, Helvetica, sans-serif; text-align: left; line-height: normal;"><p style="margin: 1em 0px; margin-top: 0px;">Tout l\'équipe d\'Ucrafty est heureuse de vous annoncer que votre réservation a bien été prise en compte pour la Christmas Box. Vous recevrez bientot un mail afin de définir la date de retrait de cette box.</p>\
    <p style="margin: 1em 0px;">Bonne journée,</p>\
<p style="margin: 1em 0px;">&nbsp;</p>\
<p style="margin: 1em 0px; margin-bottom: 0px;">L\'équipe d\'Ucrafty</p></td></tr>\
            <tr>\
      <td valign="top" align="left"><table role="presentation" cellpadding="6" border="0" align="left" cellspacing="0" style="border-spacing: 0; mso-padding-alt: 6px 6px 6px 6px; padding-top: 4px;"><tbody><tr>\
      </tr></tbody></table></td>\
    </tr>\
        </tbody></table><!--\
      --></div><!--[if (gte mso 9)|(lte ie 8)]></td><![endif]--><!--\
          --><!--\
        --><!--\
      --><!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]--></div></td>\
    </tr>\
      </tbody></table></div><!--\
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->\
    </td></tr>\
    </tbody></table>\
    <!-- /footerBlock -->\
</center></body></html>'

  var emailAdress = document.getElementById("inputEmail").value;
  var lastname = document.getElementById("lastname").value;
  var firstname = document.getElementById("firstname").value;
  Email.send("confirmation-commande@ucrafty.fr",
    emailAdress,
    "Votre commande - Ucrafty.fr",
    body,
    { token: "9fc2379c-19e3-4774-9114-35549842763e" }
  );
};
