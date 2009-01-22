(function($){ 
	$.fn.defaultValueActsAsHint = function() {
		return this.each(function() {
			element = $(this);
			element.attr('_default', element.attr('value'))
			element.addClass('hint');

			element.bind('focus', function(event) {
				if ($(this).attr('_default') != $(this).attr('value')) return;
				$(this).removeClass('hint').attr('value', '');
			});

			element.blur(function() {
				if ($.trim($(this).attr('value')) != '') return;
				$(this).addClass('hint').attr('value', $(this).attr('_default'));
			});

		});
	};
})(jQuery);
