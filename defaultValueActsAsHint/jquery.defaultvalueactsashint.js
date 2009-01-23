(function($){ 
	$.fn.defaultValueActsAsHint = function() {
		return this.each(function() {
			var self = $(this);
			self.attr('_default', self.attr('value'))
			self.addClass('hint');

			self.bind('focus', function(event) {
				var self = $(this);
				if (self.attr('_default') == self.attr('value'))
					self.removeClass('hint').attr('value', '');
			});

			self.blur(function() {
				var self = $(this);
				if ($.trim(self.attr('value')) == '')
					self.addClass('hint').attr('value', self.attr('_default'));
			});

		});
	};
})(jQuery);
