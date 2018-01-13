/**
 * conditionally_load.js
 * Replace an element with content loaded over XHR,
 * if given media query conditions are met.
 */
window.Marchay.Behaviors.conditionally_load = function() {
    'use strict';
    var $this = $(this),
        conditions = $this.data('conditions').split(' '),
        win_width = $(window).width(),
        comment_data = '',
        el,
        i;

    if (($.inArray('desktop', conditions) >= 0 && win_width >= 980) ||
        ($.inArray('tablet', conditions) >= 0 && (win_width >= 640 && win_width < 980)) ||
        ($.inArray('mobile', conditions) >= 0 && win_width < 640)) {
        if ($this.data('index.html') !== undefined) {
            // Load over XHR, for large amounts of markup.
            $this.load($this.data('source'), function(){
                Marchay.loadBehaviors($this);
            });            
        } else {
            // Load inline commented-out markup.
            el = $this.get(0);
            for(i = 0; i < el.childNodes.length; i++) {
                if(el.childNodes[i].nodeType === Node.COMMENT_NODE) {
                    comment_data += el.childNodes[i].textContent;
                }
            }
            $this.html(comment_data);
            Marchay.loadBehaviors($this);
        }
    }
}