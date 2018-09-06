function iQuery(selector) {
    var self = {};
    var el = document.querySelector(selector);

    /* 
     *  function addClass, aadds class to selected element
     *  @params className
     *  @type string
    */
    self.addClass = function(className) {
        el.classList.add(className);
        return self;
    }

    /*
     *  function removeClass, removes class
     *  @params className
     *  @type string
    */
    self.removeClass = function(className) {
        el.classList.remove(className);
        return self;
    }

    /*
     *  function toggleClass, removes class if present adn adds if present
     *  @params className
     *  @type string
    */
    self.toggleClass = function (className) {
        el.classList.toggle(className);
        return self;
    }

    /*
     *  function attr, gets or sets attribute
     *  @params attribute, value
     *  @type string
    */
    self.attr = function (attribute, value) {
        
        if (value) {
            el.setAttribute(attribute, value);
        } else {
           return el.getAttribute(attribute);
        }
        return self;
    
    
    }

    /*
    *  function hides element
    *  @params null
   */
    self.hide = function () {

        el.style.display = 'none';
        return self;
    }

    /*
    *  function shows element
    *  @params null
   */
    self.show = function () {

        el.style.display = 'block';
        return self;
    }

    /*
     *  function slideUp, sides up element and hide
     *  @params duration
     *  @type string
    */

    self.slideUp = function(duration) {
        // YET TO CODE
        return self;
    }

    /*
     *  function slideDown, sides down element and reveal
     *  @params duration
     *  @type string
    */

    self.slideDown = function (duration) {
        // YET TO CODE
        return self;
    }

    /*
     *  function slideToggle, hides if visible / shows if hidden
     *  @params duration
     *  @type string
    */

    self.slideToggle = function (duration) {
        // YET TO CODE
        return self;
    }

    /*
     *  function on
     *  @params method, callback
     *  @type string, function
    */

    self.on = function (method, callback) {
        el.addEventListener(method, callback)
        return self;
    }


    // return element
    return self;

}

var $ = iQuery;