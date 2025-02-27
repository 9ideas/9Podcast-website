/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Favs
5. Init SVG
6. Init Isotope
7. Init Single Player
8. Init Gallery


******************************/

$(document).ready(function()
{
  "use strict";

  /*

  1. Vars and Inits

  */

  var ctrl = new ScrollMagic.Controller();

  // setHeader();
  // initMenu();
  // initFavs();
  // initSvg();
  // initIsotope();
  initSinglePlayer();
  initGallery();

  $(window).on('resize', function()
  {
    setHeader();

    setTimeout(function()
    {
      $(window).trigger('resize.px.parallax');
    }, 375);
  });

  $(document).on('scroll', function()
  {
    setHeader();
  });

  /*

  2. Set Header

  */

  function setHeader()
  {
    var header = $('.header');

    if($(window).scrollTop() > 91)
    {
      header.addClass('scrolled');
    }
    else
    {
      header.removeClass('scrolled');
    }
  }

  /*

  3. Init Menu

  */

  function initMenu()
  {
    if($('.menu').length)
    {
      var menu = $('.menu');
      var hamburger = $('.hamburger');
      var close = $('.menu_close');

      hamburger.on('click', function()
      {
        menu.toggleClass('active');
      });

      close.on('click', function()
      {
        menu.toggleClass('active');
      });
    }
  }

  /*

  4. Init Favs

  */

  function initFavs()
  {
    if($('.show_fav_icon').length)
    {
      var icons = $('.show_fav_icon');
      icons.each(function()
      {
        var icon = $(this);
        icon.on('click', function()
        {
          if(icon.hasClass('active'))
          {
            icon.removeClass('active');
          }
          else
          {
            icon.addClass('active');
          }
        });
      });
    }
  }

  /*

  5. Init SVG

  */

  function initSvg()
  {
    if($('img.svg').length)
    {
      jQuery('img.svg').each(function()
      {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data)
        {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);
        }, 'xml');
      });
    }
  }

  /*

  6. Init Isotope

  */

    function initIsotope()
    {
      if($('.episode').length)
      {
        var grid = $('.episodes_container').isotope({
          itemSelector: '.episode',
          percentPosition: true,
          masonry:
          {
            horizontalOrder: true
          }
          });

          // Filtering
          $('.item_filter_btn').on('click', function()
          {
            var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
          });
      }
    }

  /*

  7. Init Single Player

  */

  function initSinglePlayer()
  {
    if($(".jp-jplayer").length)
    {
      $("#jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode4",
              artist:"",
              mp3:"episodes/ttp-episode4-zero-to-full-stack-in-10-weeks.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_1",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 3",
              artist:"",
              mp3:"episodes/ttp-episode3-from-old-havana-to-new-toronto.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_2",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 2",
              artist:"",
              mp3:"episodes/ttp-episode2-firefighting-robots-learning-by-doing.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_3",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_4").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 1",
              artist:"",
              mp3:"episodes/ttp-episode1-initial-commit.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_4",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_5").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 5",
              artist:"",
              mp3:"episodes/ttp-episode5-machine-learning-robots-and-the-freedom-list-with-daniel-snider.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_5",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_6").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 6",
              artist:"",
              mp3:"episodes/ttp-episode6-part1-nick-aleks-ophe-chan-brian-bourne.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_6",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_7").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 7",
              artist:"",
              mp3:"episodes/ttp-episode7-nick-aleks-ophe-chan-brian-bourne.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_7",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_8").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 8",
              artist:"",
              mp3:"episodes/ttp-episode8-games-poetry-and-podcast-review.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_8",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_9").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 9",
              artist:"",
              mp3:"episodes/ttp-episode9-enterprise-it-snakes-and-ladders.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_9",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

      $("#jplayer_10").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title:"Episode 10",
              artist:"",
              mp3:"ttp-episode10-lets-play-agile-or-nothing.mp3"
          });
        },
        play: function() { // To avoid multiple jPlayers playing together.
          $(this).jPlayer("pauseOthers");
        },
        swfPath: "plugins/jPlayer",
        supplied: "mp3",
        cssSelectorAncestor: "#jp_container_10",
        wmode: "window",
        globalVolume: false,
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        solution: 'html',
        preload: 'metadata',
        volume: 0.7,
        muted: false,
        backgroundColor: '#000000',
        errorAlerts: false,
        warningAlerts: false
      });

    }
  }

  /*

  8. Init Gallery

  */

  function initGallery()
  {
    if($('.gallery_item').length)
    {
      $('.colorbox').colorbox(
      {
        rel:'colorbox',
        photo: true,
        maxWidth:'95%',
        maxHeight:'95%'
      });
    }
  }

});
