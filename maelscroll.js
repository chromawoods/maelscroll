(function(window) {

    var elems, i, l, scrollTimer, iterateElems;
    
    // Old browsers need not bother.
    if (!document.querySelectorAll) { return false; }

    // Fetch a node list and turn it into an array.
    elems = Array.prototype.slice.call(document.querySelectorAll('img, a, p, li, dt, dd, th, td, label, h1, h2, h3, h4, h5, h6, button, input, textarea, select'));
    
    l = elems.length;
    
    // Convenience iterator. Invokes a callback, passing the current item as param.
    iterateElems = function(fn) {
        for (i = 0; i < l; i++) { fn(elems[i]); }
    };
    
    // Add a nice easing effect for the elements.
    iterateElems(function(el) {
        el.style.transition = 'transform 1s ease-out';
    });
    
    window.onscroll = function() {
    
        // Prevents event spam.
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function() {
        
            // Add a CSS3 rotate property and base its degrees on the page scroll position.
            iterateElems(function(el) {
                el.style.transform = 'rotate(' + parseInt((window.pageYOffset / 360) *100, 10) + 'deg)';
            });
            
        }, 120);
        
    };

}(this));