$(function() {
  $.vegas('slideshow', {
    backgrounds: [
      {src: '/img/both.jpg', valign: 'center'},
      {src: '/img/sarah.jpg', valign: 'top'},
      {src: '/img/jonathan.jpg', valign: 'top'}
    ],
    preload: true
  })
  ('overlay', {src: '/js/vegas/overlays/13.png'});

  $('.navbar').scrollspy();
});
