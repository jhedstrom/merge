$(function() {
  $.vegas('slideshow', {
    backgrounds: [
      {src: '/img/sarah.jpg'},
      {src: '/img/jonathan.jpg'}
    ]
  })
  ('overlay', {src: '/js/vegas/overlays/01.png'});
});
