/* 
    Neste arquivo contém todas funções em javascript para animações de transição do carrossel e validação do formulario! 
*/
jQuery(function(){
        var sliderConnect = jQuery('#sliderConnect');
        sliderConnect.owlCarousel({
            smartSpeed : 900,
            autoplay : true,
            lazyLoad: true,
            autoplayTimeout: 3000,
            autoHeight : true,
            center: true,
            responsive: {
                0:{
                    items: 1
                },
                450: {
                    items: 2
                },
                600: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 3
                },
                1600: {
                    items: 3
                },
                1900: {
                    items: 3
                }
            },
            autoplayHoverPause : true,
            loop: true,
            nav : false,
            dots : false,
            mouseDrag: true,
            margin: 10,
        });
        jQuery('.customNextBtnConnect').on('click', function() {
            sliderConnect.trigger('next.owl.carousel');
        });
    
        jQuery('.customPrevBtnConnect').on('click', function() {
            sliderConnect.trigger('prev.owl.carousel', [300]);
        });

        jQuery('.cpf').mask("999.999.999-99");
        jQuery("input.telefone").mask("(99) 9999-9999?9").focusout(function(event) {
                var target, phone, element;
                target = (event.currentTarget) ? event.currentTarget : event.srcElement;
                phone = target.value.replace(/\D/g, '');
                element = $(target);
                element.unmask();
                if (phone.length > 10) {
                    element.mask("(99) 99999-999?9");
                } else {
                    element.mask("(99) 9999-9999?9");
                }
        });
 
        jQuery(window).scroll(function() {
               
                if(jQuery(this).scrollTop() > 0){
                    jQuery("#up").show();
                } else {
                    jQuery("#up").hide();
                }

        });
});
