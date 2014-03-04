var CONFIG = (function() {

  var my = {};

  my.solutionCopy = {
    "solutionHeading": [ "Listen", "Create", "Distribute", "Measure" ],
    "solutionTgtMsg": [ "To what content your audience wants",
                        "Content written by experts that attract and engage your target audience",
                        "Your content strategically to create search + social traffic",
                        "Your content marketing ROI"
                      ],
    "solutionSecondaryMsg": [ "Demand's proprietary algorithm analyzes millions of user-intent data to suggest titles optimized to perform on desktop and mobile.",
                              "Demand Media Studios employs a network of contributors to create professional and engaging content in a myriad of innovative formats that captures your audience.",
                              "Demand Media's network of digitally native talent allows partners to reach new audiences.",
                              "Demand Media Analytics team monitors and tests core metrics to optimize content performance."
                            ]
  }

  my.contributorInfo = {
   "Pets":{
      "category": "Pets",
      "meta": ["50+ Animal/Pet experts", "100+ Pet writers", "Contributors include qualified vets, vet techs, breed/animal nutrition specialist, or trainers."],
      "bios": [
         {
          "name": "Dr. Jena Questen",
          "img": "pets_jena.png",
          "bio": "travels and teaches holistic animal health and behavior, from horses to dogs and cats, and is also a well-known koi fish expert."
        },
        {
          "name": "Jenn Fadal",
          "img": "pets_jenn.png",
          "bio": "cut her leash to corporate life in 2005 and opened a holistic pet market in Tampa called Wag. Since then, Fadal has worked with Better TV as their pet expert, and is the Pet Wellness Expert for Daytime TV."
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
      "meta": ["75+ Real estate experts", "40+ Real estate writers", "Contributors include qualified real estate agents, brokers and property owners."],
      "bios": [
         {
          "name": "Jack McLaughlin",
          "img": "realestate_jack.png",
          "bio": "has been a broker for over 30 years and hosts the internet radio show, 'My Broker Donates.'"
        },
        {
          "name": "Herman Chan",
          "img": "realestate_herman.png",
          "bio": "is a real estate personality, broker, writer, speaker and video blogger. You've seen him on HGTV, speaking circuits, radio and countless print outlets pontificating about all things home & garden."
        },
        {
          "name": "Karina Hernandez",
          "img": "realestate_karina.png",
          "bio": "has been writing on real estate-related topics since 2009. She has worked full-time as a licensed real estate salesperson in San Diego since 2004."
        }
      ] 
    },
    "Business&Finance": {
      "category": "Personal Finance",
      "meta": ["100+ Personal Finance experts", "170+ Business and Finance writers", "Contributors include qualified CPAs, Certified Financial Planners, financial advisors, entrepreneurs and accountants."],
      "bios": [
         {
          "name": "Karen Lee",
          "img": "finance_karen.png",
          "bio": "has been a financial planner for over 24 years. She is the author of, 'It's just Money, So Why Does It Cause So Many Problems?', and she is a regular financial contributor on CNN."
        },
        {
          "name": "Hunkar Ozyasar",
          "img": "finance_hunkar.png",
          "bio": "is the former high-yield bond strategist for Deutsche Bank. He has been quoted in publications including 'Financial Times' and 'The Wall Street Journal.'"
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
      "meta": ["100+ Craft experts", "Contributors include qualified craft teachers, and bloggers."],
      "bios": [
         {
          "name": "Tracy Metro",
          "img": "crafts_tracy.png",
          "bio": "has appeared on Oprah Winfrey Network's Home Made Simple, TLC's Designing Spaces, HGTV's Posh Pets and the TODAY Show."
        },
        {
          "name": "Linda Facci",
          "img": "crafts_linda.png",
          "bio": "has been featured on two television shows for HGTV, showcased in several magazines for her jewelry, home and craft projects, and was featured in 'Design Sponge at Home.'"
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
      "meta": ["75+ Parenting experts", "100+ Parenting writers", "Contributors include therapists, lifestyle bloggers, doulas, psychologists and nurses."],
      "bios": [
         {
          "name": "Kathleen Sullivan",
          "img": "parenting_kathleen.png",
          "bio": "knows what your baby needs even before he does. She is a doula in Los Angeles and an active member of the National Association of Postpartum Care Services and the Child Birth and Postpartum Association."
        },
        {
          "name": "Tara West",
          "img": "parenting_tara.png",
          "bio": "specializes in parenting topics. She's a regular contributor for SocialMoms.com and has been featured on 'Reading Rainbow.'"
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
      "meta": ["100+ Home DIY experts", "60+ Home writers", "Contributors include certified carpenters, contractors, painters, appliance experts and cleaning specialists."],
      "bios": [
        {
          "name": "Nick Laorocci",
          "img": "home_nick.png",
          "bio": "has over 25 years of experience in all mediums of construction. Unlike most construction professionals, Laorocci started in a shop with a very detailed concentration and graduated to less-demanding forms of the trade."
        },
        {
          "name": "Monica D. Higgins",
          "img": "home_monica.png",
          "bio": "is a remodeling expert who prevents and protects homeowners. Higgins's proven process and expert knowledge has been featured by HGTV, DIY Network, 'Entrepreneur Magazine,' Lowe's for Pros and BobVila.com."
        },
        {
          "name": "Erick Nathan",
          "img": "home_erick.png",
          "bio": "works for Master Floor Service, a family-run hardwood flooring business that started on the North Shore of Chicago. He opened a division in Los Angeles about 20 years ago, and has specialized in luxury home his entire career."
        }
      ]
    },
    "Garden": {
      "category": "Garden",
      "meta": ["130 Gardening experts", "100+ Garden writers", "Contributors include certified landscapers, gardeners and horticulturalists. "],
      "bios": [
        {
          "name": "Angela Price",
          "img": "garden_angela.png",
          "bio": "is the owner of Eden Condensed in Los Angeles, California. She does garden consultation and design, as well as maintenance and harvesting. She specializes in design and installation of small space gardens."
        },
        {
          "name": "Nicholas Staddon",
          "img": "garden_nicholas.png",
          "bio": "has been with Monrovia Nursery for 20 years, and is the spokesperson for new plants. He is a frequent speaker at flower and garden shows, botanical gardens and gardening clubs."
        },
        {
          "name": "Teca Thompson",
          "img": "garden_teca.png",
          "bio": "is an expert gardener and farm-to-table chef. She grows many of her own ingredients for the kitchen."
        }
      ]
    },
    "HomeDécor": {
      "category": "Home Décor",
      "meta": ["350+ Interior design experts", "200+ Home décor writers", "Contributors include interior designers and professional organizers."],
      "bios": [
         {
          "name": "Kelli Ellis",
          "img": "home_kelli.png",
          "bio": "is an award-winning, celebrity interior designer with shows on HGTV, TLC and Bravo. Ellis has appeared on NBC, CBS and ABC. Ellis authored the Certified Design Psychology Coaching program through the nationally-accredited Spencer Institute."
        },
        {
          "name": "Leslie Ezelle",
          "img": "home_leslie.png",
          "bio": "is an acclaimed interior designer who was HGTV's first ever Design Star All-Stars winner. She is also the owner of Leslie Christine Designs."
        },
        {
          "name": "Yvette Mullings",
          "img": "decor_yvette.png",
          "bio": "is the owner and interior designer of Edgewater Design. Since setting up shop in Miami, she has worked with Sandals Resorts International, and collaborated on several projects throughout the Caribbean."
        }
      ] 
    },
    "Style": {
      "category": "Style",
      "meta": ["500+ Style experts", "75+ Style writers", "Contributors include makeup artists, hair stylists, colorists, dermatologists and manicurists."],
      "bios": [
         {
          "name": "Danny Agnew",
          "img": "fashion_danny.png",
          "bio": "is the New York Editor of InsideHook. He founded LA-based clothing company, Kid Dangerous, in 2007. Agnew has also worked for 2009 GQ Best Menswear Designer in America, Billy Reid."
        },
        {
          "name": "Christina Farrell",
          "img": "hair_christina.png",
          "bio": "is the founder of The Makeup Blogger. She has been an on-air beauty expert for E! and TLC's, 'What Not To Wear.' Her artistry has been seen at movie premieres, as well as the Emmy and Oscar award ceremonies."
        },
        {
          "name": "Melanie Pace",
          "img": "style_melanie.png",
          "bio": "is a wardrobe stylist, fashion consultant, fashion correspondent and personal shopper. With degrees in fashion merchandising and business, she started her own styling and wardrobe consulting business in 2006."
        }
      ] 
    },
    "Food": {
      "category": "Food",
      "meta": ["1000+ Food experts", "100+ Food writers", "Contributors include professional chefs, caterers, restaurant owners, food reality TV contestants and pastry chefs. "],
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
      "meta": ["200+ Healthy food experts", "100+ Nutrition writers", "Contributors include registered dietitians, nutrition consultants, professional chefs, gluten-free/vegan/dairy-free specialists."],
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
      "meta": ["25+ Legal experts", "100+ Legal writers", "Contributor's areas of expertise include civil litigation, family law, trusts and estates, corporate law, medical patents, legal research and social security/disability."],
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
          "img": "legal_maggie.png",
          "bio": "is a full-time attorney in southeast Michigan. She also teaches law at Cleary University in Ann Arbor. Her writing has been featured in 'Realtor Magazine,' the N.Y. State Bar's 'Health Law Journal,' and more."
        }
      ] 
    },
    "Health": {
      "category": "Health",
      "meta": ["75+ Health experts", "50+ Medical writers", "Contributors include doctors, registered nurses, chiropractors, pharmacists, gynecologists, naturopathic physicians and EMTs."],
      "bios": [
         {
          "name": "Dr. Holly Lucille",
          "img": "health_holly.png",
          "bio": "is a licensed Naturopathic Doctor and a Registered Nurse with a passion for facilitating good education in an entertaining way."
        },
        {
          "name": "Dr. Alice Holland",
          "img": "health_alice.png",
          "bio": "has a Doctorate in Physical Therapy from USC. She now runs Stride Strong Physical Therapy, a runner's physical therapy clinic."
        },
        {
          "name": "Dr. Robert R. Pomahac",
          "img": "health_robert.png",
          "bio": "was named the Top Chiropractor in the country and the Top Sports Physician in Los Angeles. He is the only chiropractor in Los Angeles certified in Chiropractic BioPhysics and the owner of MaxHealth Center in Los Angeles."
        }
      ] 
    },
    "Fitness&Well-being": {
      "category": "Fitness & Well-being",
      "meta": ["500+ Fitness experts", "250+ Fitness writers", "Contributors include personal trainers, yoga teachers, Pilates instructors and fitness models."],
      "bios": [
         {
          "name": "Robert Brace",
          "img": "fitness_robert.png",
          "bio": "has been dubbed a 'New York Top Fitness Guru' by the New York Daily News and a 'Top Celebrity Trainer' by Bloomberg Businessweek. Brace is a celebrity personal trainer and a star of the Food Network weight loss reality show, 'Fat Chef'."
        },
        {
          "name": "Juliet Kaska",
          "img": "fitness_juliet.png",
          "bio": "is one of the country's leading fitness experts and celebrity trainers. Kaska is a Master Pilates Teacher and also the creator of some of Hollywood's favorite fitness programs, including the Bombshell Bride, Picture Perfect, Packin' Lite, and the Executive's Workout."
        },
        {
          "name": "Amber Nimedez ",
          "img": "fitness_amber.png",
          "bio": "has 10 years of experience training clients in Greece, Kuwait, Bahrain, Canada, London, Italy and France. She was voted one of Los Angeles' Top Trainers by the LA Times, won Ms. Fitness Hawaiian Islands, and is co-creater of The Numi Method."
        }
      ] 
    },
    "Technology": {
      "category": "Technology",
      "meta": ["200+ Technology experts", "120+ Technology writers", "Contributors include computer technicians, IT technicians, web developers, Apple specialists, electronic gurus and social media experts."],
      "bios": [
         {
          "name": "Ali Rittenhous",
          "img": "tech_rittenhous.png",
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
          "bio": "is an information technology journalist, who has been writing about Web technology, hardware and software since 2002."
        }
      ] 
    },
    "Education": {
      "category": "Education",
      "meta": ["200+ Education experts", "90+ Education writers", "Contributors include teachers, professors, tutors, or industry-specific professionals (scientists and mathematicians)."],
      "bios": [
        {
          "name": "Dupe´ Aleru",
          "img": "family_dupe.png",
          "bio": "is a self-published author, teacher and former education reporter who founded Tutors for Tots, Tweens & Teens, LLC."
        },
        {
          "name": "James Lincoln",
          "img": "education_james.png", 
          "bio": "is a UCLA physicist, high school educator and appears in many physics and science videos. He has a master's degree in physics and a master's degree in education."
        },
        {
          "name": "Chelsea Duggan",
          "img": "education_chelsea.png",
          "bio": "is an entrepreneur, parent and advocate for early childhood development. Duggan is the Founder and Director of Milestar Babies, a graduate of Northwestern and a member of the Chicago Women Entrepreneurs Network."
        }
      ]
    },
    "Family&Relationships": {
      "category": "Family & Relationships",
      "meta": ["50+ Relationship experts", "75+ Relationship writers", "Contributors include therapists, couples specialists, lifestyle bloggers, dating coaches, etiquette teachers, mediators and psychologists."],
      "bios": [
        {
          "name": "Dr. Cindy Bunin",
          "img": "family_cindy.png",
          "bio": "has been a marriage and family therapist and child development specialist for over thirty years. She was honored as a 2004-2005 Who's Who in American Women."
        },
        {
          "name": "David Simonsen, Ph.D.",
          "img": "relationships_david.png",
          "bio": "has been a practicing therapist for 12 years. He appeared as a relationship expert on the Oprah Winfrey network and also filmed a TV pilot for the A&E network about stepfamilies. Simonsen has an M.S. in Marriage & Family Therapy."
        },
        {
          "name": "Dr. Jennifer Jones, Ph.D.",
          "img": "relationships_jennifer.png",
          "bio": "Dr. Jones received her education and training from UCLA Neuropsychiatric Institute, Alliant University, The Children's Hospital, University of Oregon, Harbor UCLA Medical Center, San Bernardino County Mental Health, The Children's Collective, and St. John's Hospital. She has been practicing psychology for 13 years."
        }
      ]
    },
    "Travel": {
      "category": "Travel",
      "meta": ["30 Travel talent", "60 Travel writers", "Contributors have backgrounds ranging from travel blogging to professional work experience in the travel industry."],
      "bios": [
        {
          "name": "Carolyn Paddock",
          "img": "travel_carolyn.png",
          "bio": "is a travel expert and the Founder and CEO of In-Flight Insider, the essential resource for traveling well. Her travel expertise has been featured in The Washington Post, MSNBC.com, USA Today, CNBC.com, The Huffington Post and CNN."
        },
        {
          "name": "Leslie Willmott",
          "img": "travel_leslie.png",
          "bio": "has spent much of her career packing and unpacking a suitcase. She was the marketing director for best-selling book, 'Smart Packing for Today\'s Traveler' and is the founder of Smart Women On The Go."
        },
        {
          "name": "Wendy K. Leigh",
          "img": "travel_wendy.png",
          "bio": "is a travel writer and photojournalist from Seattle. She is the Editor of 'Islands America', a travel website for visiting islands within the United States. Leigh holds a Bachelor of Arts in English from the University of Washington."
        }
      ] 
    } 
  }  

  return my;

}());
