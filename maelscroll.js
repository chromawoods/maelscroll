(function(window) {

    var elems, i, l, scrollTimer, iterateElems;
        
    if (!document.querySelectorAll) { return false; }

    elems = Array.prototype.slice.call(document.querySelectorAll('img, a, p, li, dt, dd, th, td, label, h1, h2, h3, h4, h5, h6, button, input, textarea, select'));
    l = elems.length;
    
    iterateElems = function(fn) {
        for (i = 0; i < l; i++) { fn(elems[i]); }
    };
    
    iterateElems(function(el) {
        el.style.transition = 'transform 1s ease-out';
    });
    
    window.onscroll = function() {
    
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function() {
            iterateElems(function(el) {
                el.style.transform = 'rotate(' + parseInt((window.pageYOffset / 360) *100, 10) + 'deg)';
            });
        }, 120);
        
    };

}(this));