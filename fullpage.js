var myFullpage = new fullpage('#fullpage', {
    // Navigation
    navigation: true,
    navigationTooltips: ['First', 'About', 'Projects', 'Contact'],
    navigationPosition: 'left',
    /*
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    showActiveTooltip: false,
    slidesNavPosition: 'bottom',
    slidesNavigation: false,
    */
   // Scrolling
   scrollingSpeed: 550,
   scrollOverflow: true,
   css3: true,
   fitToSection: true,
   scrollBar: true,
   /*
   autoScrolling: false,
   fitToSectionDelay: 600,
   easing: 'easeInOutCubic',
   easingcss3: 'ease',
   loopBottom: false,
   loopTop: false,
   loopHorizontal: true,
   continuousVertical: false,
   continuousHorizontal: false,
   scrollHorizontally: false,
   interlockedSlides: false,
   dragAndMove: true,
   offsetSections: false,
   resetSliders: false,
   fadingEffect: false,
   normalScrollElements: '#element1, .element2',
    scrollOverflowMacStyle: false,
    scrollOverflowReset: false,
    touchSensitivity: 15,
    bigSectionsDestination: null,
    */
    // Accessibility
    /*
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    */
    // Design
    verticalCentered: true,
    responsiveSlides: true,
    /*
    parallax: true,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    responsiveWidth: 0,
    responsiveHeight: 0,
    controlArrows: true,
    controlArrowsHTML: [
        '<div class="fp-arrow"></div>', 
        '<div class="fp-arrow"></div>'
    ],
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    waterEffect: true,
    waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
    dropEffect: false,
    dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
    */
    // Custom selectors
    /*
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,
    observer: true,
    credits: { enabled: true, label: 'Made with fullPage.js', position: 'right'},
    */
    // Events
    /*
    beforeLeave: function(origin, destination, direction, trigger){},
    onLeave: function(origin, destination, direction, trigger){},
    afterLoad: function(origin, destination, direction, trigger){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction, trigger){},
    onSlideLeave: function(section, origin, destination, direction, trigger){},
    onScrollOverflow: function(section, slide, position, direction){}
    */
});