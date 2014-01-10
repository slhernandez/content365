window.solutionHeading = ["Listen", "Create", "Distribute", "Measure"];

window.solutionTgtMsg = ["To what content your audience wants", 
                      "Content written by experts that attract and engage your target audience", 
                      "Your content strategically to create search + social traffic", 
                      "Your content marketing ROI"]

window.solutionSecondaryMsg = ["Demand's proprietary algorithm analyzes millions of user-intent data to suggest titles optimized to perform on desktop and mobile.",
                            "Demand Media Studios employs network of contributors to create professional and engaging content in a myriad of innovative formats that captures your audience.",
                            "Demand Media's network of sites and digitally native talent allow our partners to reach new audiences.",
                            "Demand Media Analytics team monitors and tests core metrics to optimize content performance."]

jQuery.fn.anchorAnimate = function(settings) {

  settings = jQuery.extend({
    speed : 800 
  }, settings); 
  
  return this.each(function(){
    var caller = this
    jQuery(caller).click(function (event) {  
      event.preventDefault()
      var locationHref = window.location.href
      var elementClick = jQuery(caller).attr("href")
      
      var destination = jQuery(elementClick).offset().top - 0;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
        window.location.hash = elementClick
      });
      return false;
    })
  });

}

jQuery(document).ready(function($) {

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
    "Parenting&Family": {
      "category": "Parenting and Family",
      "meta": ["75+ parenting Talent", "40+ relationships Talent", "200+ writers", "Backgrounds in elementary and secondary education, tutoring, therapists, lifestyle bloggers, psychology and nursing."],
      "bios": [
         {
          "name": "Dupe Aleru",
          "img": "family_dupe.png",
          "bio": "self-published author, teacher and former education reporter who founded Tutors for Tots, Tweens & Teens, LLC."
        },
        {
          "name": "Dr. Cindy Bunin",
          "img": "family_cindy.png",
          "bio": "is a marriage and family therapist and child development specialist for over thirty years. She was honored as a 2004-2005 Who's Who in American Women."
        },
        {
          "name": "Bill Corbett",
          "img": "family_bill.png",
          "bio": "is the author of the award-winning parenting book series, 'Love, Limits & Lessons,' and the executive producer and host of the television show, 'Creating Cooperative Kids.'"
        }
      ] 
    },
    "HomeDIY&Design": {
      "category": "Home DIY and Design",
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
          "name": "Nick Larocci",
          "img": "home_nick.png",
          "bio": "has over 25 years of experience in all mediums of construction. Unlike most construction professionals, larocci started in a shop with a very detailed concentration and graduated to less-demanding forms of the trade."
        }
      ] 
    },
    "MakeUp/Hair": {
      "category": "MakeUp/Hair",
      "meta": ["500+ Beauty Talent", "75+ Style Writers", "All are makeup artists, hair stylists, colorists, dermatologists, or manicurists"],
      "bios": [
         {
          "name": "Christina Farrell",
          "img": "hair_christina.png",
          "bio": "is founder of The Makeup Blogger. She has been on-air beauty expert for E! and TLC's, 'What Not To Wear.' Her artistry has been seen at movie premieres, as well as the Emmy and Oscar award ceremonies institute."
        },
        {
          "name": "Michelle Saunders",
          "img": "hair_michelle.png",
          "bio": "is a highly sought-after celebrity manicurist who lives in Los Angeles. Her work has been featured in Vogue, Harper's Bazaar and Elle, and her celebrity clients include Jennifer Lopez, Kate Beckinsdale and Eva Longoria."
        },
        {
          "name": "Chistopher Drummond",
          "img": "hair_christopher.png",
          "bio": "has been in the beauty industry for over 17 years. He is a celebrity makeup artist (JLO, Brooke Shields, January Jones, Jane Fonda), and owns a line of all-natural makeup, too. Drummond has over 85 YouTube tutorials and 800 blog posts."
        }
      ] 
    },
    "Fashion": {
      "category": "Fashion",
      "meta": ["450+ Fashion Telent", "75+ Style writers", "All are stylists, personal shoppers, designers, fashion reality TV contestants, buyers, planners, etc..."],
      "bios": [
         {
          "name": "Danny Agnew",
          "img": "fashion_danny.png",
          "bio": "is the New York Editor of InsideHook. He founded LA-based clothing company, Kid Dangerous, in 2007. Agnew has also worked for 2009 GQ Best Menswear Designer in America, Billy Reid."
        },
        {
          "name": "Brandhyze Stanley",
          "img": "fashion_brandhyze.png",
          "bio": "has been featured on numerous media outlets such as The View, The Early Show, The Today Show, and Essence Magazine to name a few. Author of the blog, Frugal-nomics: The Art of Resourceful Living; MTVStyle said that 'We're totally jealous of her great thrifty finds.'"
        },
        {
          "name": "Stacey ",
          "img": "fashion_stacey.png",
          "bio": "spent five years as managing editor of the style and pop-culture magazine 'Savvy.' She traveled coast-to-coast covering all things fashion and beauty."
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
    "Fitness": {
      "category": "Fitness",
      "meta": ["500+ Fitness Talent", "50+ Fitness Writers", "Backgrounds include personal trainers, yoga teachers, Pilates instructors, fitness models, etc..."],
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
    "Tech": {
      "category": "Tech",
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

    }
  } 

  // Prepend an anchor tag for one-page scrolling.
  // This anchor tag is specifically for the hero image.
  $('body').prepend('<a name="top" id="hero"></a>');

  // Initiate scolling
  $('a.anchorLink').anchorAnimate();

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
        $('.headerAndNavContainer').css('height', '65px');
        $('.headerContent h1.logo img.white-logo').css('display', 'none');
        $('.headerContent h1.logo img.gray-logo').css('display', 'block');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 0.7)');
      } else if (direction == 'up') {
        $('.headerAndNavContainer.sticky').css({
          background: 'rgba(255,255,255,0.0)',
          'box-shadow': 'none'
        });
        $('.headerContent h1.logo img').css('width', '100%');
        $('.headerContent h1.logo img.white-logo').css('display', 'block');
        $('.headerContent h1.logo img.gray-logo').css('display', 'none');
        //$('.headerAndNavContainer.sticky').css('background', 'rgba(81, 87, 93, 1)');
      }

  });

  $('#contributors').waypoint( function(direction) {
      console.log('hey, you hit contributors... do something');
  });

  // Mobile menu
  // ----------------------------------
  $('.mobile-menu a').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var $navContainer = $('.navContent');
    $navContainer.slideToggle("fast");
    /*if ($navContainer.hasClass('inactive')) {
      $navContainer.addClass('active').removeClass('inactive');
    } else if ($navContainer.hasClass('active')) {
      $navContainer.addClass('inactive').removeClass('active');
    } else {
      $navContainer.addClass('inactive');
    }*/
  });

  // Load Backstretch image loader
  // ----------------------------------
  $('.hero-container').backstretch( [ 
    templateUrl + '/images/Content365_Family_1.jpg'
    ,templateUrl + '/images/Content365_Family_2.jpg'
    ,templateUrl + '/images/Content365_Family_3.jpg'
  ], { duration: 3000, fade: 750 } );


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
      $(this).css('background', '#7ecd65');
      $(this).find('a').css('color', '#FFF');
    });
    numItem.css('background', '#FFF');
    numItem.find('a').css('color', '#7ecd65');
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
    console.log('topic is ...', topic);
    console.log('contrib_info ...', contrib_info[topic]);

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













