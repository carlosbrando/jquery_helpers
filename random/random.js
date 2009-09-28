// Example: jQuery('#supersize a').not('.activeslide').filter(':random');
jQuery.jQueryRandom = 0;
jQuery.extend(jQuery.expr[":"],
{
  random: function(a, i, m, r) {
    if (i == 0) jQuery.jQueryRandom = Math.floor(Math.random() * r.length);
    return i == jQuery.jQueryRandom;
  }
});