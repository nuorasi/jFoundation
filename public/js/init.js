/* Global functions */
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function empty(v) {
    return !v || typeof v == 'undefined' || (typeof v == 'string' && v.replace(/[0| ]+/gm, '') === '') || (typeof v == 'object' && !Object.size(v));
}

(function ($) {
    $(document).ready(function () {
        fadeIn();

        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
            }
        });

        //Subheader on scroll add active class to menu items
        const navLinks = $(".amenities-link");
        const sections = $("section");

        function updateActiveNavLinks() {
            const scrollTop = $(window).scrollTop();

            sections.each(function (index, section) {
                const offset = $(section).offset().top;

                if (scrollTop >= offset && scrollTop < offset + $(section).height()) {
                    navLinks.removeClass("active");
                    navLinks.eq(index).addClass("active");
                }
            });
        }

        // Attach a scroll event listener to the window
        $(window).on("scroll", updateActiveNavLinks);

        // Initial check to set the active link on page load
        updateActiveNavLinks();

        //End of subheader scroll

        setTimeout(function () {
            $('.beforeafter > div > div > div').append('<span class="drag_span">DRAG TO VIEW</span>');
        }, 1000);

        //DRAGG IMAGES FUNCTIONALITY

        $('.beforeafter').beforeAfter({
            movable: true,
            clickMove: true,
            alwaysShow: true,
            position: 50,
            opacity: 0.7,
            activeOpacity: 1,
            hoverOpacity: 1,
            separatorColor: '#ffffff',
            bulletColor: '#ffffff',
            arrowColor: '#333333',

        });

        //END DRAGG FUNCTIONALITY



        $(".building_hover").hover(function () {
            tag = $(this).data('tag');

            $('.building_hover').removeClass('active');
            $(this).addClass('active');

            $('.building').removeClass('active');
            $('.description').removeClass('active');

            $('.' + tag).addClass('active');
        });

        $('.gallery_slide').on('click', function () {
            $('.swiper_gallery_popup').fadeIn();

            slideId = $(this).attr("slide-index");

            const swiperGallery = new Swiper('.swiper_gallery_popup', {
                loop: true,
                speed: 500,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })

            swiperGallery.slideTo(slideId);
        });

        $('.panorama_button').on('click', function (e) {
            e.stopPropagation();
            image = $(this).data('image');
            $('#panorama').fadeIn();

            viewer = pannellum.viewer('panorama', {
                "type": "equirectangular",
                "compass": false,
                // "compass": "lookAt",
                "showControls": false,
                "autoLoad": true,
                "panorama": image,
                "minPitch": 0,
                "maxPitch": 0,
                "mouseZoom": 0,
                // "yaw": 100,
            });

            document.getElementById('pan-up').addEventListener('click', function (e) {
                viewer.setPitch(viewer.getPitch() + 15);
            });
            document.getElementById('pan-down').addEventListener('click', function (e) {
                viewer.setPitch(viewer.getPitch() - 15);
            });
            document.getElementById('pan-left').addEventListener('click', function (e) {
                viewer.setYaw(viewer.getYaw() - 15);
            });
            document.getElementById('pan-right').addEventListener('click', function (e) {
                viewer.setYaw(viewer.getYaw() + 15);
            });
        })


        $('.close_panorama').on('click', function (e) {
            $(this).parent().fadeOut();
        })

        $('.popup_email').on('click', function (e) {
            e.preventDefault();
            $('.footer_form').fadeIn();
            return false;
        })
        $('.close_popup_form').on('click', function (e) {
            $(this).parent().parent().fadeOut();
        })


        //DOUBLE PANORAMA

        $('.panorama_double').on('click', function (e) {
            e.stopPropagation();
            image = $('#panorama').data('image');
            image2 = $('#panorama2').data('image');

            $('.panorama_wrap').fadeIn();

            viewer = pannellum.viewer('panorama', {
                "type": "equirectangular",
                "compass": "lookAt",
                "showControls": false,
                "autoLoad": true,
                "panorama": image,
                "minPitch": 0,
                "maxPitch": 0,
                "mouseZoom": 0
            });

            viewer2 = pannellum.viewer('panorama2', {
                "type": "equirectangular",
                "compass": true,
                "showControls": false,
                "autoLoad": true,
                "panorama": image2,
                "minPitch": 0,
                "maxPitch": 0,
                "mouseZoom": 0

            });
            document.getElementById('pan-left').addEventListener('click', function (e) {
                viewer.setYaw(viewer.getYaw() - 15);
            });
            document.getElementById('pan-right').addEventListener('click', function (e) {
                viewer.setYaw(viewer.getYaw() + 15);
            });


            document.getElementById('pan-left2').addEventListener('click', function (e) {
                viewer2.setYaw(viewer2.getYaw() - 15);
            });
            document.getElementById('pan-right2').addEventListener('click', function (e) {
                viewer2.setYaw(viewer2.getYaw() + 15);
            });
        })


        $('input[name="contact[agent]"]').change(function () {
            var wrap = $(this).parent().next();

            if ($('#inquiry-broker-yes').is(':checked')) {
                wrap.show();
                wrap.find('input').prop('required', true);
            } else {
                wrap.hide();
                wrap.find('input').removeProp('required');
            }
        });

        $('input[name="answers[7754][answers][]"]').change(function () {
            var wrap = $(this).parent().next();

            if ($('#inquiry-rep-broker-yes').is(':checked')) {
                wrap.show();
                wrap.find('input').prop('required', true);
            } else {
                wrap.hide();
                wrap.find('input').removeProp('required');
            }
        });


        var customSelect = $(".custom-select2");

        customSelect.each(function () {
            var thisCustomSelect = $(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $("<div></div>", {
                class: "selected-item"
            })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $("<div></div>", {
                class: "all-items all-items-hide"
            }).appendTo(thisCustomSelect);

            options.each(function () {
                var that = $(this),
                    optionText = that.text(),
                    value = that.val();

                var item = $("<div></div>", {
                    class: "item",
                    id: value,
                    on: {
                        click: function () {
                            var selectedOptionText = that.text();
                            selectedItem.text(selectedOptionText).removeClass("arrowanim");
                            allItems.addClass("all-items-hide");

                            // Get the ID of the selected item and log it to the console
                            var selectedItemId = that.val();

                            $('.view').removeClass('visible');
                            $('.' + selectedItemId).addClass('visible');

                        }
                    }
                })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $(".selected-item"),
            allItems = $(".all-items");

        selectedItem.on("click", function (e) {
            var currentSelectedItem = $(this),
                currentAllItems = currentSelectedItem.next(".all-items");

            allItems.not(currentAllItems).addClass("all-items-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("all-items-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $(document).on("click", function () {
            var opened = $(".all-items:not(.all-items-hide)"),
                index = opened.parent().index();

            customSelect
                .eq(index)
                .find(".all-items")
                .addClass("all-items-hide");
            customSelect
                .eq(index)
                .find(".selected-item")
                .removeClass("arrowanim");
        });

        //END DOUBLE PANORAMA



        $('.burger').on('click', function () {
            $(this).toggleClass('active');
            $('.menu_wrap').toggleClass('visible');
            $('.header_logo').fadeToggle();
            $('.header_logo_small').fadeToggle();
            $('.header_full').removeClass('scrolled');
            $('.header_mini').removeClass('scrolled')
            $('.burger').removeClass('scrolled')
            $('body').toggleClass('no_scroll');
        })

        $('.close_popup').on('click', function () {
            $(this).parent().fadeOut();
        })

        $('.slide_to').on('click', function () {
            $('.swiper_pages_popup').fadeIn();

            slideId = $(this).data("slide-index");

            const swiper = new Swiper('.swiper_pages_popup', {
                loop: true,
                speed: 500,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })

            swiper.slideTo(slideId - 1);
        });

        var videoClickable = $(".play_wrap");
        var vimeoIframe = $("#vimeo-video")[0];
        var closeButton = $(".close_iframe");

        // Function to play the Vimeo video
        function playVimeoVideo() {
            $('.iframe_wrap').fadeIn();
            var src = vimeoIframe.src;
            if (src.indexOf("?") !== -1) {
                src += "&autoplay=1";
            } else {
                src += "?autoplay=1";
            }
            vimeoIframe.src = src;
        }

        function stopAndCloseVideo() {
            $('.iframe_wrap').fadeOut();
            vimeoIframe.contentWindow.postMessage('{"method":"pause"}', '*');
        }

        videoClickable.on("click", function () {
            playVimeoVideo();
        });

        closeButton.on("click", function () {
            stopAndCloseVideo();
        });


        $('.slick-slider').each(function(index, slider){
            var parent = $(slider).parents(".slick-parent").first();
            var description = "#" + parent.attr("id") + ' .slick-description';
            var sliderConfig = {
                arrows: true,
                prevArrow: parent.find('.prev'),
                nextArrow: parent.find('.next'),
                infinite: false,
                speed: 300,
                fade: true
            }

            if($(description).length) sliderConfig.asNavFor = description;

            var slick = $(slider).slick(sliderConfig);

            parent.find('.total-slides').text(slick[0].slick.slideCount);


            slick.on('afterChange', function (event, slick, currentSlide) {
                var parent = slick.$slider.parents(".slick-parent").first();
                parent.find('.current-slide').text(currentSlide + 1);

                if (slick.currentSlide >= slick.slideCount - slick.options.slidesToShow) {
                    parent.find('.prev').addClass('hidden_line');
                } else {
                    parent.find('.prev').removeClass('hidden_line');
                }
            });
        })

        $('.slick-description').slick({
            arrows: false,
            infinite: false,
            speed: 800,
            fade: true,
        });




        $("#myTable").tablesorter({
            headers: {
                0: {
                    sorter: false
                },
                2: {
                    sorter: false
                },
                5: {
                    sorter: false
                },
                7: {
                    sorter: false
                }
            }
        });

        $('td.add_sqft:not(:contains("-"))').each(function () {
            // Get the content of the div
            var content = $(this).text();

            // Convert the content to an integer and format it with commas and " sqft"
            var exterior = parseInt(content);
            if (!isNaN(exterior)) {
                var formattedExterior = exterior.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " sqft";
                $(this).text(formattedExterior);
            }
        });


        //FILTERS START
        function applyFilters() {
            var selectedType = $('#residence-type .select-items div.selected').data('value');
            var selectedPrice = $('#residence-price .select-items div.selected').data('value');

            // Check if "data-value" is "all" and show all rows
            if (selectedType === 'all' && selectedPrice === 'all') {
                $('.filter_rows').show();
            } else {
                // Show all rows by default
                $('.filter_rows').show();

                if (selectedType && selectedType !== 'all') {
                    // Apply the residence type filter
                    $('.filter_rows[data-beds]').each(function () {
                        var dataBedsValue = $(this).attr('data-beds');
                        var selectedValues = selectedType.split(',');
                        var bedsMatch = false;

                        for (var i = 0; i < selectedValues.length; i++) {
                            if (dataBedsValue.includes(selectedValues[i])) {
                                bedsMatch = true;
                                break;
                            }
                        }

                        if (!bedsMatch) {
                            $(this).hide();
                        }
                    });
                }

                if (selectedPrice && selectedPrice !== 'all') {
                    // Apply the price filter
                    if (selectedPrice === "10000000+") {
                        // Show rows with price greater than or equal to 10,000,000
                        $('.filter_rows[data-price]').each(function () {
                            var rowPrice = parseInt($(this).attr('data-price'), 10);
                            if (rowPrice < 10000000) {
                                $(this).hide();
                            }
                        });
                    } else {
                        var range = selectedPrice.split(',');
                        var minPrice = parseInt(range[0], 10);
                        var maxPrice = parseInt(range[1], 10);

                        // Show rows within the selected price range
                        $('.filter_rows[data-price]').each(function () {
                            var rowPrice = parseInt($(this).attr('data-price'), 10);
                            if (rowPrice < minPrice || rowPrice > maxPrice) {
                                $(this).hide();
                            }
                        });
                    }
                }
            }
        }

        // Call applyFilters when an option is clicked in either filter
        $('#residence-type .select-items div').on('click', function () {
            $(this).toggleClass('selected').siblings().removeClass('selected');
            applyFilters();
        });

        $('#residence-price .select-items div').on('click', function () {
            $(this).toggleClass('selected').siblings().removeClass('selected');
            applyFilters();
        });

        // Initialize the filters
        applyFilters();


        //END FILTERS


        $(window).scroll(function () {
            fadeIn()

            if ($(this).scrollTop() > 100) {
                $('.header_full').addClass('scrolled');
                $('.header_mini').addClass('scrolled')
                $('.burger').addClass('scrolled')
            } else {
                $('.header_full').removeClass('scrolled');
                $('.header_mini').removeClass('scrolled')
                $('.burger').removeClass('scrolled')
            }
        });

        function fadeIn() {
            var winHeight = $(window).height();
            var bodyScroll = $(document).scrollTop();
            var calcHeight = bodyScroll + winHeight;

            $(".fadein-wrap").each(function (index, el) {
                if (
                    $(this).offset().top < calcHeight &&
                    $(this).offset().top + $(this).height() > bodyScroll
                ) {
                    if (!$(this).hasClass("in-view")) {
                        $(this).addClass("in-view");
                    }

                    // if (width > 800) {
                    //     if ($(this).hasClass("textillate-slideInUp")) {
                    //         $(this).textillate({
                    //             loop: false,
                    //             minDisplayTime: 500,
                    //             initialDelay: 0,
                    //             autoStart: true,
                    //             inEffects: [],
                    //             in: {
                    //                 effect: "fadeInUp",
                    //                 delayScale: 2,
                    //                 delay: 15,
                    //                 sequence: true,
                    //                 sync: false,
                    //                 shuffle: false,
                    //                 reverse: false,
                    //                 callback: function () {
                    //                 },
                    //             },
                    //             callback: function () {
                    //             },
                    //             type: "char",
                    //         });
                    //     }
                    // }
                }
            });
        }

        $("#contactForm button[type=submit], #popupContactForm button[type=submit]").on("click", function(e) {
            var form = $(this).parents('form').first();

            if(form[0].checkValidity()) {
                e.preventDefault();

                grecaptcha.ready(function() {
                    grecaptcha.execute('6LeplQopAAAAAHeuGjTVJiIKflxvuJ55H9iNGYOw', {action: 'submit'}).then(function(token) {
                        form.append('<input type="hidden" name="g-recaptcha-response" value="'+token+'">');
                        if (form.attr('id') === "contactForm") {
                            submitSparkForm();
                        } else {
                            form.submit();
                        }
                    });
                });
            }
        });
    });

    function submitSparkForm() {
        $("#contactForm button[type=submit]").attr("disabled", "true");

        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: "/wp-admin/admin-ajax.php",
            data: {
                action:'contact_submit',
                form: $("#contactForm").serialize()
            },
            success: function(response){
                if (response.status == "success") {
                    window.location = "/thank-you";
                } else {
                    alert("Something went wrong. Please try again later or contact our sales team directly.");
                    $("#contactForm button[type=submit]").removeAttr("disabled");
                }
            }
        });
    }
}(jQuery));