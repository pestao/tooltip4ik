(function($){
    $.fn.Tooltip = function (options) {
        var $this = this;
        var title = this.title; 
        var Tooltip = function(){
            this.options = $.extend({}, $.fn.Tooltip.options, options);
            this.elem = $('<div id="tooltip"></div>');
        };
        
        Tooltip.prototype.init = function() {
            this.bindEvents();
            return Tooltip;
        };
        Tooltip.prototype.bindEvents = function() {
            $this
                .mousemove(this.show())
                .mouseout(this.hide());
        };
        Tooltip.prototype.show = function() {
            this
                .elem
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
                    this.elem.addClass('rounded');
                };
        };
        
        Tooltip.prototype.hide = function() {
            this.elem.remove();
        };

        $.fn.Tooltip.options = {
            background: '#e3e3e3',
            color: 'black',
            rounded: false
        };
    };
    $.tooltip = new Tooltip();
})( jQuery );