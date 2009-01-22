(function($){ 
	$.fn.defaultValueActsAsHint = function() {
		return this.each(function() {
			$(this).attr('_default', $(this).attr('value'))
			$(this).addClass('hint');

			$(this).bind('focus', function(event) {
				if ($(this).attr('_default') == $(this).attr('value'))
					$(this).removeClass('hint').attr('value', '');
			});

			$(this).blur(function() {
				if ($.trim($(this).attr('value')) == '')
					$(this).addClass('hint').attr('value', $(this).attr('_default'));
			});

		});
	};
})(jQuery);
