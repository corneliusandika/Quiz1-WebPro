$(function () {
  $('#year').text(new Date().getFullYear());

  if ($('#typed').length) {
    var words = ['Web Developer', 'Mahasiswa Informatika', 'Pecinta Kuliner', 'Traveler'];
    var wi = 0, ci = 0, deleting = false;
    (function type() {
      var word = words[wi];
      $('#typed').text(word.slice(0, ci));
      if (!deleting) { ci++; if (ci > word.length) { deleting = true; return setTimeout(type, 1500); } }
      else { ci--; if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; } }
      setTimeout(type, deleting ? 50 : 110);
    })();
  }

  $('.counter').each(function () {
    var $el = $(this), target = +$el.data('target'), done = false;
    function check() {
      if (!done && $el.offset().top < $(window).scrollTop() + $(window).height()) {
        done = true;
        $({ n: 0 }).animate({ n: target }, { duration: 1200, step: function (v) { $el.text(Math.round(v)); } });
      }
    }
    $(window).on('scroll', check);
    check();
  });

  $(window).on('scroll', function () { $('#backTop').toggle($(this).scrollTop() > 400); });
  $('#backTop').on('click', function () { $('html, body').animate({ scrollTop: 0 }, 700); });

  $('#navMenu .nav-link').on('click', function () {
    var nav = document.getElementById('navMenu');
    var toggler = document.querySelector('.navbar-toggler');
    if (toggler && window.getComputedStyle(toggler).display !== 'none' && nav.classList.contains('show')) {
      var collapse = bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav, { toggle: false });
      collapse.hide();
    }
  });

  $('.btn-filter').on('click', function () {
    $('.btn-filter').removeClass('active');
    $(this).addClass('active');
    var f = $(this).data('filter');
    $('.food-item').each(function () {
      var show = f === 'all' || $(this).data('cat') === f;
      if (show) $(this).fadeIn(300); else $(this).fadeOut(300);
    });
  });

  $('.place-card').on('click', function () {
    $('#placeModalTitle').text($(this).data('title'));
    $('#placeModalDesc').text($(this).data('desc'));
  });

  function reveal() {
    $('.reveal').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 60) $(this).addClass('visible');
    });
  }
  $(window).on('scroll', reveal);
  reveal();
});
