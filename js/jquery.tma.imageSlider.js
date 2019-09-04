(function($){
    $.fn.imageSlider = function(options){
        var settings = $.extend({}, $.fn.imageSlider.defaults, options);

        return this.each(function(){
            var $this = $(this);
            $this.css({ "width": settings.containerWidth,
                        "background-color": settings.backgroundColor,
                        "height": settings.containerHeight,
                        "border": settings.border,});            

            var images = [];

            settings.source.forEach(function(s, idx){
                var image = $('<img />', { 
                                id: idx,
                                src: s,
                                alt: 'The image number ' + (idx + 1),
                                class: settings.classForImages,
                                style: "display:block; max-width: 100%; max-height: 100%; margin: auto",                                                               
                            });
                images.push(image);
            });
           
            images[0].appendTo($this);

            $this.on("click", function(){
                event.preventDefault();      
                var idNext = Number($this.children()[0].id) + 1;
                $this.empty();

                if(idNext < images.length){                  
                    $this.prepend(images[idNext]);
                }else{                        
                    $this.prepend(images[0]);                                               
                }
            });              
            
        });
    }; 
    $.fn.imageSlider.defaults = {
        containerWidth: "30em",
        containerHeight: "30em",        
        source: [
            "img/cat1.jpg", 
            "img/cat2.png", 
            "img/cat3.png",            
        ],
        backgroundColor: "#fff",
        classForImages: "slide",
        border: "none",
    };  
})(jQuery);