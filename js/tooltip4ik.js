(function( $ ){

    $.fn.tooltip = function(options) {
        var defaults = {
            background: '#e3e3e3',
            color: 'black',
            rounded: false
        };
        var settings = $.extend({}, defaults, options);
        
        this.each(function() {
           var $this = $(this);
           var title = this.title;
           if($this.title != '') {
            this.title = '';
            $this.hover(function(e) {
                $('<div id="tooltip"></div>')
                    .appendTo('body')
                    .text(title)
                    .hide()
                    .css({
                        backgroundColor: settings.background,
                        color: settings.color,
                        top: e.pageY + 10,
                        left: e.pageX + 20
                    })
                    .fadeIn(350);
                    if(settings.rounded) {
                        $('#tooltip').addClass('rounded');
                    };
            }, function() {
               $('#tooltip').remove(); 
            });
           }
           $this.mousemove(function(e) {
            $('#tooltip').css({
                top: e.pageY + 10,
                left: e.pageX + 20
            });
           });
        });
        
        return this;
    };
    
})( jQuery );