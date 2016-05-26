// Toggle menu 
$('#btn_menu').mouseover(function() {
  $('#btn_menu').hide();
  $('#search').hide();
  $('nav').show();
});                 
$('nav').mouseleave(function() {
  $('#btn_menu').show();
  $('#search').show();
  $(this).hide();
});

// Make header tranparent when scrolled
// TODO debounce 적용하기
$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    $('#header').removeClass('transparent');
  } else {
    $('#header').addClass('transparent');
  }
});

// Update language to Korean
function updateLanguageToKorean() {
  localStorage.setItem('lang', 'ko');
  document.title = $('#title-ko').val();
  $('#lang_eng').removeClass('on');
  $('#lang_kor').addClass('on');
  $('[data-lang="en"]').addClass('hidden');
  $('[data-lang="ko"]').removeClass('hidden');
  $('#logo').attr('src', 'static/img/Wagl_logo_Kor.png');
}

// Update language to English
function updateLanguageToEnglish() {
  localStorage.setItem('lang', 'en');
  document.title = $('#title-en').val();
  $('#lang_kor').removeClass('on');
  $('#lang_eng').addClass('on');
  $('[data-lang="ko"]').addClass('hidden');
  $('[data-lang="en"]').removeClass('hidden');
  $('#logo').attr('src', 'static/img/Wagl_logo_Eng.png');
}

// Change language
$(document).on('click', '#lang_kor', function(event) {
  event.preventDefault();
  updateLanguageToKorean();
});
$(document).on('click', '#lang_eng', function(event) {
  event.preventDefault();
  updateLanguageToEnglish();
});

// Translate contents when window loaded
$(window).load(function() {
  if (localStorage.getItem('lang') == 'en') {
    updateLanguageToEnglish();
  } else {
    updateLanguageToKorean();
  }
});
