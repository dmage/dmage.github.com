$(function() {
  $('.vis').each(function() {
    var $object = $(this);
    var block = $object.data('block') || 'undefined-block';
    var params = $object.data('config') || {};
    params.$object = $object;
    Vis(params, block);
  });
});
