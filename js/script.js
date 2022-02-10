/* Preloader */
$(window).on('load',function(){
    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut()
})

/*Team Carousel */
$(function(){
    $('#team-members').owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
})

/*-------------------Progress bars------------------------*/
$(function(){

    $('#progress-elements').waypoint(function(){
        $('.progress-bar').each(function(){
            $(this).animate({
                width:$(this).attr('aria-valuenow')+"%"
            },1000)
        })
        this.destroy()
    },{
        offset:'bottom-in-view'
    })

    
})

/*---------------------Responsive Tabs------------------------*/
$(function(){
    $('#services-tabs').responsiveTabs({
       animation:'slide'
    });
}) 

/*-----------------------Portfolio--------------------------*/
$(window).on('load',function(){
    //initial isotope
    $('#isotope-container').isotope({})

    //filter items on button click
    $('#isotope-filters').on('click','button',function(){

        //get filter value
        var filterValue=$(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter:filterValue
        })

        //active button
        $('#isotope-filters').find('.active').removeClass('.active');
        $(this).addClass('active');
    })
})
/*-----------------------Magnifier--------------------------*/

$(function(){
    $('#portfolio-wrapper').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
})
/*----------------Testimonals----------------- */
$(function(){
    $('#testimonial-slider').owlCarousel({
        items:1,
        autoplay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
})

/*----------------Stats counter----------------- */
$(function(){
    $('.counter').counterUp({
        delay:10,
        time:2000
    })
})
/*----------------Clients Silder----------------- */
$(function(){
    $('#clients-list').owlCarousel({
        items:6,
        autoplay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
})
/*-----------------Google Map------------------*/
$(window).on('load',function(){
    //map varibles
    var addressString='Wishtree Technologies, Wakad Road, Near Tata Croma, Kaspate Wasti, Wakad, Pimpri-Chinchwad, Maharashtra'
    var myLatlng={lat:18.589990,lng:73.772630}

    // Render map
    var map=new google.maps.Map(document.getElementById('map'),{
        zoom:11,
        center:myLatlng
    })

    //add marker
    var marker=new google.maps.Marker({
        position:myLatlng,
        map:map,
        title:'Click to see address'
    })

    //Add InfoWindow 
    var infoWindow=new google.maps.InfoWindow({
        content:addressString
    })
    

    marker.addLister('click',function(){
        infoWindow.open(map,marker)
    })
})

/*-----------------Navigation Bar------------------*/
/* show and hide white navigation*/ 

$(function(){
    //show and hide on page load
    showHideNav()

    $(window).scroll(function(){
        showHideNav()
    })
    function showHideNav(){
        if($(window).scrollTop()>50){
            //show bar
            $('nav').addClass('white-nav-top')

            //dark logo
            $('.navbar-brand img').attr("src","img/logo/logo-dark.png")
        }   
        else{
            //hide bar
            $('nav').removeClass('white-nav-top')
            
            $('.navbar-brand img').attr("src","img/logo/logo.png")

        }
    }
})