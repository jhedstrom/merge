$(function() {
  $.vegas('slideshow', {
    backgrounds: [
      {src: '/img/sarah.jpg', valign: 'top'},
      {src: '/img/jonathan.jpg', valign: 'top'}
    ],
    preload: true
  })
  ('overlay', {src: '/js/vegas/overlays/06.png'});
});
