window.solutionHeading = ["Listen", "Create", "Distribute", "Measure"];

window.solutionTgtMsg = ["To what content your audience wants", 
                      "Content written by experts that attract and engage your target audience", 
                      "Your content strategically to create search + social traffic", 
                      "Your content marketing ROI"]

window.solutionSecondaryMsg = ["Demand's proprietary algorithm analyzes millions of user-intent data to suggest titles optimized to perform on desktop and mobile.",
                            "Demand Media Studios employs network of contributors to create professional and engaging content in a myriad of innovative formats that captures your audience.",
                            "Demand Media's network of sites and digitally native talent allow our partners to reach new audiences.",
                            "Demand Media Analytics team monitors and tests core metrics to optimize content performance."]

jQuery(document).ready(function($) {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });


  var _this = this;
  // Contributor information
  var contrib_info = {
    "Pets":{
      "category": "Pets",
      "meta": ["50+ animal/pet experts", "100+ pet writers", "All are qualified vets, vet techs, breed/animal nutrition specialist, or trainers"],
      "bios": [
         {
          "name": "Dr. Jena Questen",
          "img": "pets_jena.png",
          "bio": "travels and teaches holistic animal health and behavior, from horses to dogs and cats, and is also a well-known koi fish expert."
        },
        {
          "name": "Jenn Fadal",
          "img": "pets_jenn.png",
          "bio": "cut her leash to corporate life in 2005 and opened a holistic pet market in Tampa called Wag. Since then, Fadal has worked with Better TV as their pet expert, and is the Pet Wellness Expert for Datime TV."
        },
        {
          "name": "Ben Team",
          "img": "pets_ben.png",
          "bio": "covers animals, trees and outdoor recreation. He is an expert on caring for reptiles and amphibians."
        }
      ] 
    },
    "RealEstate": {
      "category": "Real Estate",
      "meta": ["75+ real estate experts", "40+ real estate writers", "All are qualified real estate agents, brokers, renters, property managers, etc..."],
      "bios": [
         {
          "name": "Jack McLaughlin",
          "img": "realestate_jack.png",
          "bio": "has been a broker for over 30 years and hosts the internet radio show, 'My Broker Donates.'"
        },
        {
          "name": "Herman Chan",
          "img": "realestate_herman.png",
          "bio": "is a real estate personality, broker, writer, speaker, and video blogger. You've seen him on HGTV, speaking circuits, radio and countless print outlets pontificating about all things home & garden."
        },
        {
          "name": "Monica Dillon",
          "img": "realestate_monica.png",
          "bio": "has spent over a decade in real estate sales, investing and appraising. She specializes in energy efficiency building practices and renewable energy."
        }
      ] 
    },
    "Business&Finance": {
      "category": "Personal Finance",
      "meta": ["100+ personal finance experts", "170+ Fitness writers", "All are qualified CPAs, Certified Financial Planners, financial advisors, entrepreneurs, accountants, etc."],
      "bios": [
         {
          "name": "Karen Lee",
          "img": "finance_karen.png",
          "bio": "has been a financial planner for over 24 years. She recently published her first book, 'It's just Money, So Why Does It Cause So Many Problems?', and she is a regular financial contributor on CNN."
        },
        {
          "name": "Hunkar Ozyasar",
          "img": "finance_hunkar.png",
          "bio": "is the former high-yield bond strategist for Deutsche Bank. He has been quoted in publications including 'Financial Times' and the 'Wall Street Journal.'"
        },
        {
          "name": "Lisa McQuerrey",
          "img": "finance_lisa.png",
          "bio": "has been a business writer since 1987. McQuerrey's work has garnered awards from the U.S. Small Business Administration, the International Association of Business Communicators and the Associated Press."
        }
      ] 
    },
    "Arts&Crafts": {
      "category": "Crafts",
      "meta": ["100+ craft experts", "All are qualified craft teachers, bloggers, etc."],
      "bios": [
         {
          "name": "Tracy Metro",
          "img": "crafts_tracy.png",
          "bio": "has appeared on Oprah Winfery Network's Home Made Simple, TLC's Designing Spaces, HGTV's Posh Pets and the Today Show."
        },
        {
          "name": "Linda Facci",
          "img": "crafts_linda.png",
          "bio": "has been featured on 2 television shows for HGTV, showcased in several magazines for her jewelry, home and craft projects, and was just recently featured in 'Design Sponge at Home book.'"
        },
        {
          "name": "Deborah Stumm",
          "img": "crafts_deborah.png",
          "bio": "is the founder of Party Plan-It, Inc. and has been a frequent guest on the TODAY Show, NBC, CBS, FOX, CW, KUSI, and KTLA."
        }
      ] 
    },
    "Parenting": {
      "category": "Parenting",
      "meta": ["75+ parenting Talent", "100 parenting writers", "Experts are therapists, lifestyle bloggers, doulas, psychologists and nurses"],
      "bios": [
         {
          "name": "Kathleen Sullivan",
          "img": "no_image.png",
          "bio": "knows what your baby needs even before he does. She is a doula in Los Angeles, and an active member of the National Association of Postpartum Care Services and the Child Birth and Postpartum Association."
        },
        {
          "name": "Tara West",
          "img": "no_image.png",
          "bio": "specializes in parenting topics. She's a regular contributor at SocialMoms.com and has been featured on Reading Rainbow."
        },
        {
          "name": "Bill Corbett",
          "img": "family_bill.png",
          "bio": "is the author of the award-winning parenting book series, 'Love, Limits & Lessons,' and the executive producer and host of the television show, 'Creating Cooperative Kids.'"
        }
      ] 
    },
    "Home": {
      "category": "Home",
      "meta": ["100+ Home Talent", "60 Home writers", "All are certified carpenters, contractors, painters, appliance experts or cleaning specialists."],
      "bios": [
        {
          "name": "Nick Larocci",
          "img": "home_nick.png",
          "bio": "has over 25 years of experience in all mediums of construction. Unlike most construction professionals, larocci started in a shop with a very detailed concentration and graduated to less-demanding forms of the trade."
        },
        {
          "name": "Monica D. Higgins",
          "img": "no_image.png",
          "bio": "is a remodeling expert who prevents and protects homeowners. Higgins's proven process and expert knowledge has been featured by HGTV, DIY Network, 'Entrepreneur Magazine,' Lowe's for Pros and BobVila.com."
        },
        {
          "name": "Erick Nathan",
          "img": "no_image.png",
          "bio": "works for Master Floor Service, a family-run hardwood flooring business that started on the North Shore of Chicago. He opened a division in Los Angeles about 20 years ago, and has done luxury homes his entire career."
        }
      ]
    },
    "Garden": {
      "category": "Garden",
      "meta": ["130 Garden Talent", "100+ garden writers", "All are certified landscapers, gardeners, horticulturalists, etc..."],
      "bios": [
        {
          "name": "Angela Price",
          "img": "no_image.png",
          "bio": "is the owner of Eden Condensed in Los Angeles, California. She does garden consultation and design, as well as maintenance and harvesting. She specializes in design and installation of small space gardens."
        },
        {
          "name": "Nicholas Staddon",
          "img": "no_image.png",
          "bio": "has been with Monrovia Nursery for 20 years, and is the spokesperson for new plants. He is a frequent speaker at flower and garden shows, botanical gardens and gardening clubs."
        },
        {
          "name": "Teca Thompson",
          "img": "no_image.png",
          "bio": "is an expert gardener and farm-to-table chef. She grows many of her own ingredients for the kitchen."
        }
      ]
    },
    "HomeDecor": {
      "category": "Home Decor",
      "meta": ["350+ Home & Garden Talent", "200+ writers", "All are certified carpenters, contractors, painters, interior designers, landscapers, gardeners, etc..."],
      "bios": [
         {
          "name": "Kelli Ellis",
          "img": "home_kelli.png",
          "bio": "award-winning, celebrity interior designer with shows on HGTV, TLC and Bravo, Ellis has appeared on NBC, CBS and ABC. Ellis authored the Certified Design Psychology Coaching program through the nationally-accredited Spencer."
        },
        {
          "name": "Leslie Ezelle",
          "img": "home_leslie.png",
          "bio": "is an acclaimed interior designer who was HGTV's first ever Design Star All-Stars winner. She is also a cancer survivor, and owner of Leslie Christiner Designs."
        },
        {
          "name": "Yvette Mullings",
          "img": "no_image.png",
          "bio": "is the owner and interior designer of Edgewater Design. Since setting up shop in Miami, she has worked with Sandals Resorts International, and collaborated on several projects throughout the Caribbean."
        }
      ] 
    },
    "Style": {
      "category": "Style",
      "meta": ["500+ Beauty Talent", "75+ Style writers", "All are makeup artists, hair stylists, colorists, dermatologists, or manicurists."],
      "bios": [
         {
          "name": "Danny Agnew",
          "img": "fashion_danny.png",
          "bio": "is the New York Editor of InsideHook. He founded LA-based clothing company, Kid Dangerous, in 2007. Agnew has also worked for 2009 GQ Best Menswear Designer in America, Billy Reid."
        },
        {
          "name": "Christina Farrell",
          "img": "hair_christina.png",
          "bio": "is founder of The Makeup Blogger. She has been on-air beauty expert for E! and TLC's, 'What Not To Wear.' Her artistry has been seen at movie premieres, as well as the Emmy and Oscar award ceremonies institute."
        },
        {
          "name": "Melanie Pace",
          "img": "no_image.png",
          "bio": "is a wardrobe stylist, fashion consultant, fashion correspondent and personal shopper. With degrees in fashion merchandising and business, she started her own styling and wardrobe consulting business in 2006."
        }
      ] 
    },
    "Food": {
      "category": "Food",
      "meta": ["1000+ Food Talent", "100+ Food writers", "All are professional chefs, caterers, restaurant owners, food reality TV contestants, pastry chefs, etc..."],
      "bios": [
         {
          "name": "Doreen Fang",
          "img": "food_doreen.png",
          "bio": "was a finalist on The Next Food Network Star. She is also the host of Dining with Doreen on ABC TV's 'The Morning Blend' in Las Vegas."
        },
        {
          "name": "Melissa Randall",
          "img": "food_melissa.png",
          "bio": "is a baker in the Los Angeles area who owns the specialty baking business, 'Baking with Melissa.'"
        },
        {
          "name": "Chef Plum",
          "img": "food_chef.png",
          "bio": "has 18 years of experience as a professional chef, is a graduate of CIA and has been featured on Network TV and The Food Network."
        }
      ] 
    },
    "Nutrition": {
      "category": "Nutrition",
      "meta": ["200+ Healthy Food Talent", "100+ Nutrition writers", "All are registered dietitians, nutrition consultants, professional chefs, gluten-free/vegan/dairy-free specialists."],
      "bios": [
         {
          "name": "Diane Hoch",
          "img": "nutrition_diane.png",
          "bio": "is the CEO of the Food Evolution. She is a chef, nutritional counselor, and works actively with the Rockland Coalition for Better School Food, The Rockland Farm Alliance, and The Rockland County School Health and Wellness Coalition."
        },
        {
          "name": "Stella Metsovas",
          "img": "nutrition_stella.png",
          "bio": "is a globally-recognized food, nutrition and health expert, based in California. She has been featured as a diet and nutrition expert in People, Glamour, Shape, Redbook, New York Times, Men's Health, AOL, Chicago Tribune, and many others."
        },
        {
          "name": "Teresa Howes",
          "img": "nutrition_teresa.png",
          "bio": "is a contributing writer on Active.com, founder of Eat Drink and Be Skinny, has a Bachelor of Science in nutrition, MBA and 15 years of consulting experience in the weight loss and health industries."
        }
      ] 
    },
    "Legal": {
      "category": "Legal",
      "meta": ["25+ Legal Talent", "Writers include 20 JDs and attorneys as well as 3 paralegals.", "Areas of expertise include civil litigation, family law, trusts and estates, corporate law, medical patents, legal research and social security/disability"],
      "bios": [
         {
          "name": "Robert Todd",
          "img": "legal_robert.png",
          "bio": "is an attorney in Clearwater, Florida, where he runs his own practice. Todd has more than 30 years of experience in resolving family disputes and other conflicts."
        },
        {
          "name": "Nic McGrue",
          "img": "legal_nic.png",
          "bio": "is a licensed attorney and licensed California Real Estate Broker. He has a Master of Law degree in Tax & Financial Services."
        },
        {
          "name": "Maggie Lourdes",
          "img": "no_image.png",
          "bio": "is a full-time attorney in southeast Michigan. She also teaches law at Cleary University in Ann Arbor. Her writing has been featured in 'Realtor Magazine,' the N.Y. State Bar's 'Health Law Journal,' and more."
        }
      ] 
    },
    "Health": {
      "category": "Health",
      "meta": ["75+ Health Talent", "50+ Medical writers", "All are doctors, registered nurses, chiropractors, pharmacists, gynecologists, naturopathic physicians, EMTs, etc..."],
      "bios": [
         {
          "name": "Dr. Holly Lucille",
          "img": "health_holly.png",
          "bio": "is a licensed Naturopathic Doctor and a Registered Nurse with a passion for facilitating good education in an entertaining way, so people can own their own choices and take back their own healthcare."
        },
        {
          "name": "Dr. Alice Holland",
          "img": "health_alice.png",
          "bio": "has a Doctorate in Physcial Therapy from USC. Shw now runs Stride Strong Physcial Therapy, a runner's physical therapy clinic."
        },
        {
          "name": "Dr. Robert R. Pomahac",
          "img": "health_robert.png",
          "bio": "was named the Top Chiropractor in the country and the Top Sports Physician in Los Angeles. He is the only chiropractor in Los Angeles certified in Chiropractic BioPhysics, and the owner of MaxHealth Center in Los Angeles."
        }
      ] 
    },
    "Fitness&Well-being": {
      "category": "Fitness & Well-being",
      "meta": ["500+ Fitness Talent", "250+ Fitness Writers", "Backgrounds include personal trainers, yoga teachers, Pilates instructors, fitness models, etc..."],
      "bios": [
         {
          "name": "Robert Brace",
          "img": "fitness_robert.png",
          "bio": "has been dubbed a 'New York Top Fitness Guru' by the New York Daily News and a 'Top Celebrity Trainer' by Bloomberg Businessweek. Brace is a celebrity personal trainer and a star of the Food Network weight loss reality show, 'Fat Chef'."
        },
        {
          "name": "Juliet Kaska",
          "img": "fitness_juliet.png",
          "bio": "is one of the country's leading fitness experts and celebrity trainers. Kaska is a Master Pilates Teacher and also the creator of some of Hollywood's favority fitness programs, including the Bombshell Bride, Picture Perfect, Packin' Lite, and the Executive's Workout."
        },
        {
          "name": "Amber Nimedez ",
          "img": "fitness_amber.png",
          "bio": "has 10 years of experience training clients in Greece, Kuwait, Bahrain, Canada, London, Italy and France. She was one of Los Angeles' Top Trainers by the LA Times, won Ms. Fitness Hawaiian Islands, and is co-creater of The Numi Method."
        }
      ] 
    },
    "Technology": {
      "category": "Technology",
      "meta": ["200+ Tech Talent", "120+ Tech Writers", "All are computer technicians, IT technicians, web developers, Apple specialists, electronic gurus, social media experts, etc..."],
      "bios": [
         {
          "name": "Ali Rittenhouse",
          "img": "tech_rittenhouse.png",
          "bio": "is an online business coach, tech cheerleader and award-winning entrpreneur who was voted #36 in Startup Nation's 2012 Leading Moms in Business. Rittenhous is also a regular contributor on a Lifestyle Television Show."
        },
        {
          "name": "Rachel Youens",
          "img": "tech_rachel.png",
          "bio": "has worked in mobile for over 5 years. Youens has been featured in interviews on mobile development and marketing, published articles, worked for top mobile developers, attended AppNation, Tech Crunch and SXSW, and runs the sassiest app blog on the globe."
        },
        {
          "name": "David Nield",
          "img": "tech_david.png",
          "bio": "is an information technology journalist since 2002, writing about web technology, hardware and software. He is an experienced editor, proofreader and copywriter for online publications such as CNET, TechRadar and Gizmodo."
        }
      ] 
    },
    "Education": {
      "category": "Education",
      "meta": ["200+ education experts", "90 education writers", "All are teachers, professors, tutors, or industry-specific professionals (scientists, mathematicians, etc...)"],
      "bios": [
        {
          "name": "Dupe Aleru",
          "img": "family_dupe.png",
          "bio": "self-published author, teacher and former education reporter who founded Tutors for Tots, Tweens & Teens, LLC."
        },
        {
          "name": "James Lincoln",
          "img": "no_image.png", 
          "bio": "is a UCLA physicist, high school educator and appears in many physics and science videos. He has a Masters degree in physics and a Masters degree in education."
        },
        {
          "name": "Chelsea",
          "img": "no_image.png",
          "bio": "is an entrepreneur, parent and advocate for early childhood development. Duggan is the Founder and Director of Milestar Babies, a graduate of Northwestern and a member of the Chicago Women Entrepreneurs Network."
        }
      ]
    },
    "Family&Relationships": {
      "category": "Family & Relationships",
      "meta": ["50 relationships talent", "75+ relationship writers", "Experts include therapists, couples specialists, lifestyle bloggers, dating coaches, etiquette teachers, mediators and psychologists."],
      "bios": [
        {
          "name": "Dr. Cindy Bunin",
          "img": "family_cindy.png",
          "bio": "is a marriage and family therapist and child development specialist for over thirty years. She was honored as a 2004-2005 Who's Who in American Women."
        },
        {
          "name": "David Simonsen",
          "img": "no_image.png",
          "bio": "has been a practicing therapist for 12 years. He recently has appeared as a relationship expert on the Oprah Winfrey network, and also filmed a TV polot for the A&E network about stepfamilies. Simonsen has an M.S. in Marriage & Family Therapy."
        },
        {
          "name": "Dr. Jennifer Jones, Ph.D.",
          "img": "no_image.png",
          "bio": "is a psychologist, speaker and writer specializing in love, sex and happiness. Dr. Jones received her education and training from UCLA Neuropsychiatric Institute, University of Oregon."
        }
      ]
    },
    "Travel": {
      "category": "Travel",
      "meta": ["30 Travel Talent", "60 Travel Writers", "Backgrounds in travel blogging, extensive travel experience, lifestyle review writers, etc..."],
      "bios": [
        {
          "name": "Carolyn Paddock",
          "img": "no_image.png",
          "bio": "is a travel expert and the Founder and CEO of In-Flight Insider, the essential resource for traveling well. She has contributed her travel expertise to a range of national medial outlets, including The Washington Post, MSNBC.com, USA Today, CNBC.com, The Huffington Post and CNN."
        },
        {
          "name": "Leslie Willmott",
          "img": "no_image.png",
          "bio": "has spent much of her career packing and unpacking a suitcase. She was the markting director for best-selling book, 'Smart Packing for Today\'s Traveler' and is the founder of Smart Women On The Go."
        },
        {
          "name": "Wendy K. Leigh",
          "img": "no_image.png",
          "bio": "is a travel writer and photojournalist from Seattle. She is the Editor of 'Islands Amercia', a travel website for visiting islands within the United States. Leigh holds a Bachelor of Arts in English from the University of Washington."
        }
      ] 
    }
  } 

  // Prepend an anchor tag for one-page scrolling.
  // This anchor tag is specifically for the hero image.
  $('body').prepend('<a name="top" id="hero"></a>');

  // Transform the header navigation while scrolling
  // ----------------------------------
  $('#our-content').waypoint( function(direction) {

      if (direction == 'down') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.7)', 
          background: 'rgba(81, 87, 93, 0.9)', 
          'box-shadow': '0 1px 1px rgba(0,0,0,0.2)'
        });
        $('.headerContent h1.logo img').css('width', '100%');
        //$('.headerAndNavContainer').css('height', '75px');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 0.7)');
      } else if (direction == 'up') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.0)',
          'box-shadow': 'none'
        });
        $('.headerContent h1.logo img').css('width', '100%');
      }

  });

  //$('#contributors').waypoint( function(direction) {
  //    console.log('hey, you hit contributors... do something');
  //});

  // Mobile menu
  // ----------------------------------
  var $navContainer = $('.navContent');
  $('.mobile-menu a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $navContainer.slideToggle("fast");
  });

  // When you resize the browser, the menu will remain hidden. 
  // Make sure to remove the hidden style when resized to desktop mode.
  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  
  function resizeFunction() {
    var w = $(window).width();
    if (w > 320 && $navContainer.is(':hidden')) {
      $navContainer.removeAttr('style');
    } 
  } 

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds. 
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFunction, 250);
  });

  // Load Backstretch image loader
  // ----------------------------------
  $('.hero-container').backstretch( [ 
    templateUrl + '/images/Content365_Family_1.jpg'
    ,templateUrl + '/images/Content365_Family_2.jpg'
    ,templateUrl + '/images/Content365_Family_3.jpg'
  ], { duration: 10000, fade: 750 } );


  var solution_images = [ templateUrl + '/images/solution/Listen.jpg',
                          templateUrl + '/images/solution/Create.jpg',
                          templateUrl + '/images/solution/Distribute.jpg',
                          templateUrl + '/images/solution/Measure.jpg' ];

  var $solutionsContainer = $('.solutions-container');
  $solutionsContainer.backstretch( solution_images);
  $solutionsContainer.backstretch("pause");

  // Setup next and previous links for solution slideshow
  $('.next').on('click', function(e) {
    e.preventDefault();
    $('.solutions-container').data('backstretch').next();
    var currentSlide = $('.solutions-container').data("backstretch").index;
    var $numItem = $('.pages li')[currentSlide];
    highlightPageNum($($numItem));
  });

  $('.prev').on('click', function(e) {
    e.preventDefault();
    $('.solutions-container').data('backstretch').prev(); 
    var currentSlide = $('.solutions-container').data("backstretch").index;
    var $numItem = $('.pages li')[currentSlide];
    highlightPageNum($($numItem));
  });

  // Setup click events for page links
  $('.pages li').on('click', function(e) {
    e.preventDefault();
    var screen = $(this).find('a').data('screen');
    $('.solutions-container').backstretch("show", screen);
    highlightPageNum($(this));
  });

  function highlightPageNum(numItem) {
    // change background color of li
    numItem.parent().find('li').each(function(item) {
      $(this).css('background', 'transparent');
    });
    numItem.css('background', '#555');
  }

  // WAYPOINT (scroll detection)
  // ----------------------------------
  var navHeading = $('.navHeading');
  var nav = $('.navContainer');
  
  navHeading.waypoint({
    handler: function(event, direction) {
      nav.toggleClass('sticky', direction=='down');
      if (direction == 'down') nav.css({ 'height':'auto' });
      else nav.css({ 'height':'auto' });
    },
    offset: 15
  });
  
  var sections = $("section[id]");    
  var navigation_links = $("nav a");
  
  function setActive(event, direction) {
    var active_section;
    active_section = $(this);
    if (direction === "up") active_section = active_section.prev();
    var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
    navigation_links.removeClass("active");
    active_link.addClass("active");
  }
  
  sections.waypoint({
    handler: setActive,
    offset: '35%'
  });
  
  // Content selection 
  // ----------------------------------

  $('.content-items li a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.content-items li a').each(function() {
      $(this).removeClass('selected');
      $('.content-showcase').find('video')[0].pause();
    });
    $(this).addClass('selected');
    var contentSection = $(this).parent().attr('class');
    $('.showcase-all > section').removeClass('active').addClass('inactive');
    $('.content-items section').removeClass('active').addClass('inactive');

    $('.' + contentSection + '-section').removeClass('inactive').addClass('active');

    // Check if video link has been selected. We want to play the video right away.
    if ($(this).text() === 'Video') {
      $('.content-showcase').find('video')[0].play();
      $('li.video').find('video')[0].play();
    }
  });

  // Click event for contributor tiles.
  $('.topic').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    // Strip out any white space in the title
    var topic = $(this).find('p').text().replace(/\s+/g, '');

    // Make sure that category contributors is alway empty/removed
    $('.category-contributors').empty();

    // Load template for category contributors
    $('.category-contributors').append(_.template($('#category-contributors').html(), { info: contrib_info[topic] }));

    // Display category contributors
    $('.category-contributors').removeClass('inactive').addClass('active');
    // Hide category grid
    $(this).closest('.topics').removeClass('active').addClass('inactive');
  });

  // Click event for closing category contributor
  $('#contributors').on('click', '.close-contributor-panel', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).closest('.category-contributors').removeClass('active').addClass('inactive')
    $('.topics').removeClass('inactive').addClass('active');
  });

});

jQuery(window).on("backstretch.show", function (e, instance) { 
  var imageItem = instance.images[instance.index];
  if (instance.$container.attr('class') === 'solutions-container') {

    jQuery('.content').find('h2').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionHeading[instance.index]).animate({opacity:1});
    });

    jQuery('.content').find('.target-message').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionTgtMsg[instance.index]).animate({opacity:1});
    });

    jQuery('.content').find('.secondary-message').animate({opacity:0}, 20, function() {
      jQuery(this).text(solutionSecondaryMsg[instance.index]).animate({opacity:1});
    });

  }
});













