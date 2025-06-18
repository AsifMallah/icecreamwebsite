(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);



  function switchToSection(id) {
    document.querySelectorAll('.product-section').forEach(section => section.classList.add('d-none'));
    document.getElementById(id).classList.remove('d-none');
  }

  const popFlavors = [
    { name: 'Wild Blueberry', img: 'img/WB.png' },
    { name: 'Desi Imlee Aloo Bukhara', img: 'img/DI.png' },
    { name: 'Juicy Pineapple', img: 'img/JP.png' },
    { name: 'Energetic Strawberry', img: 'img/ES.png' },
    { name: 'Cola Bomb', img: 'img/CB.png' },
    { name: 'Lychee Fruity', img: 'img/LF.png' }
  ];
  let popIndex = 0;
  function changePopFlavor(d) {
    popIndex = (popIndex + d + popFlavors.length) % popFlavors.length;
    document.getElementById("pop-img").src = popFlavors[popIndex].img;
    document.getElementById("pop-name").textContent = popFlavors[popIndex].name;
    document.getElementById("pop-list").textContent = popFlavors[popIndex].name;
  }

  const cupFlavors = [
    { name: "Mango", img: "img/MA.png" },
    { name: "Strawberry", img: "img/SB.png" },
    { name: "Vanilla", img: "img/VA.png" },
    { name: "Kulfa", img: "img/KU.png" },
    { name: "Pista", img: "img/PI.png" }
  ];
  let cupIndex = 0;
  function changeCupFlavor(d) {
    cupIndex = (cupIndex + d + cupFlavors.length) % cupFlavors.length;
    document.getElementById("cup-img").src = cupFlavors[cupIndex].img;
    document.getElementById("cup-name").textContent = cupFlavors[cupIndex].name;
    document.getElementById("cup-list").textContent = cupFlavors[cupIndex].name;
  }

  const popsicleFlavors = [
    { name: 'Mango Bite', img: 'img/popM.jpeg' },
    { name: 'Orange Pop', img: 'img/popO.jpeg' },
    { name: 'Falsa', img: 'img/popF.jpeg' }
  ];
  let popsicleIndex = 0;
  function changePopsicleFlavor(d) {
    popsicleIndex = (popsicleIndex + d + popsicleFlavors.length) % popsicleFlavors.length;
    document.getElementById("popsicle-img").src = popsicleFlavors[popsicleIndex].img;
    document.getElementById("popsicle-name").textContent = popsicleFlavors[popsicleIndex].name;
    document.getElementById("popsicle-list").textContent = popsicleFlavors[popsicleIndex].name;
  }


  const chocbarFlavors = [
    { name: 'Nutty Chocolate', img: 'img/choc1.jpeg', price: 80 },
    { name: 'Choc Bar', img: 'img/choc2.jpeg', price: 50 },
    { name: 'Choco Dip', img: 'img/choc3.jpeg', price: 40 }
  ];

  let chocbarIndex = 0;

  function changeChocbarFlavor(d) {
    chocbarIndex = (chocbarIndex + d + chocbarFlavors.length) % chocbarFlavors.length;
    const flavor = chocbarFlavors[chocbarIndex];
    document.getElementById("chocbar-img").src = flavor.img;
    document.getElementById("chocbar-name").textContent = flavor.name;
    document.getElementById("chocbar-list").textContent = flavor.name;
    document.getElementById("chocbar-price").textContent = `Rs ${flavor.price}`;
  }


  const kulfaFlavors = [
    { name: 'Crunchy Badami', img: 'img/BKK.png' },
    { name: 'Pista Delight', img: 'img/pkk.png' }
  ];
  let kulfaIndex = 0;
  function changeKulfaFlavor(d) {
    kulfaIndex = (kulfaIndex + d + kulfaFlavors.length) % kulfaFlavors.length;
    document.getElementById("kulfa-img").src = kulfaFlavors[kulfaIndex].img;
    document.getElementById("kulfa-name").textContent = kulfaFlavors[kulfaIndex].name;
    document.getElementById("kulfa-list").textContent = kulfaFlavors[kulfaIndex].name;
  }

  const brickFlavors = [
  { name: 'Strawberry', img: 'img/SBB.png' },
    { name: 'Kulfa', img: 'img/KBB.png' },
    { name: 'Chocolate', img: 'img/CBB.png' },
    { name: 'Pista', img: 'img/PBB.png' },
    { name: 'Mango', img: 'img/MBB.png' }
  ];
  let brickIndex = 0;
  function changeBrickFlavor(d) {
    brickIndex = (brickIndex + d + brickFlavors.length) % brickFlavors.length;
    document.getElementById("brick-img").src = brickFlavors[brickIndex].img;
    document.getElementById("brick-name").textContent = brickFlavors[brickIndex].name;
    document.getElementById("brick-list").textContent = brickFlavors[brickIndex].name;
  }

  const coneFlavors = [  
    { name: 'Chocolate', img: 'img/CCC.png' },
    { name: 'Strawberry', img: 'img/SCC.png' },
    ];
  let coneIndex = 0;
  function changeConeFlavor(d) {
    coneIndex = (coneIndex + d + coneFlavors.length) % coneFlavors.length;
    document.getElementById("cone-img").src = coneFlavors[coneIndex].img;
    document.getElementById("cone-name").textContent = coneFlavors[coneIndex].name;
    document.getElementById("cone-list").textContent = coneFlavors[coneIndex].name;
  }

    function orderNow() {
    const phoneNumber = "+923112811272"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I would like to order some ice cream.");
window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');}

