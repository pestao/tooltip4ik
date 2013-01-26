(function($){
    var defaults = {
        background: '#e3e3e3',
        color: 'black',
        rounded: false,
        title: 'Hello there',
        dontFollowCursor: false,
        fadeIn: 250,
        fadeOut: 0
    };

    var Tooltip = function($el, options){
        this.$el = $el;
        options.title =
            options.title ||
            this.$el.attr('data-tip');
        this.options = $.extend({}, options, defaults);
        this.elem = $('<div id="tooltip"></div>');
        this.init();
    };

    Tooltip.prototype.init = function() {
        this.bindEvents();
    };

    Tooltip.prototype.bindEvents = function() {
        this.$el
            .mousemove($.proxy(this.show, this))
            .mouseout($.proxy(this.hide, this));
    };
    Tooltip.prototype.show = function(e) {
        this
            .elem
            .appendTo('body')
            .text(this.options.title)

            .css({
                backgroundColor: this.options.background,
                color: this.options.color,
                top: e.pageY + 10,
                left: e.pageX + 20
            })
            .fadeIn(this.options.fadeIn);
            if(this.options.rounded) {
                this.elem.addClass('rounded');
            };
            if(this.options.dontFollowCursor) {
                this.elem.hide()
            };
    };

    Tooltip.prototype.hide = function() {
        if(this.options.fadeOut) {
            this.elem.fadeOut(this.options.fadeOut)
        }
        else {
            this.elem.remove();
        }
    };

    $.fn.tooltip = function (options) {
        var $this = $(this);
        options = options || {};
        $this.each(function(){
            var $el = $(this),
                ttip = new Tooltip($el, options);
            $el.data({'tooltip-plugin': ttip});
        })
    };
})( jQuery );
