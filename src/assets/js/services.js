angular.module('ddjSite.services', [])
.factory('Images',function(){
  var mirrorart = {
    title: "Mirror aRt",
    state: "app.mirror",
    description: "Mirrors are very difficult to photograph unless you know how! With my friend Antonio Herrera we captured my Mirror aRt perfectly. They measure 22cm x 22cm and are presented in a silver frame. They are currently in the bedrooms of Urban Spaces Hotel, Ibiza where we have a collaboration to sell these pieces.",
    photos: []
  }
  for (var i = 1; i < 10; i++) {
    mirrorart.photos.push(
      {
        url: "/assets/images/art/mirrorart/"+ i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/art/mirrorart/" + i + ".jpg",
        id: i
      }
    )
  }

  var adart = {
    title: "Ad aRt",
    state: "app.adart",
    description: "When passing some advertising I have sometimes decided to add my own aRt to it.   Also with some magazine advertising I have taken a liberty and added to it, trying to entice the onlooker to stay focused on the matter, longer.",
    photos: [
      {
        url: "/assets/images/art/adart/dlegsafter.jpg",
        id: "1"
      },
      {
        url :"/assets/images/art/adart/ladyafter.jpg",
        id: "2"

      },
      {
        url: "/assets/images/art/adart/ladycompare.jpg",
        id: "3"
      },
      {
        url: "/assets/images/art/adart/legsafter.jpg",
        id: "4"

      },
      {
        url: "/assets/images/art/adart/legscompare.jpg",
        id: "5"

      },
      {
        url: "/assets/images/art/adart/blondecompare.jpg",
        id: "6"
      },
      {
        url: "/assets/images/art/adart/5.jpg",
        id: "7"
      }

    ]
  }
  var holoart = {
    title: "Holo aRt",
    state: "app.holo",
    description: "Having started to use glitter paper in my aRt, I then came across a new material - holographic paper.   This was to revolutionise the way I presented my aRt. I went on to have my first exhibition of my 'HoloaRt' at the Holocentre in New York.  I have since exhibited in Ibiza and am currently showing in Barcelona.",
    photos: []
  }
  for (var i = 1; i < 9; i++) {
    holoart.photos.push(
      {
        url: "/assets/images/art/holo/"+ i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/art/holo/" + i + ".jpg",
        id: i
      }
    )
  };
  var rockart = {
    title: "Stone aRt",
    state: "app.rock",
    description: "",
    lleiniog: [],
    penmon: []
  };
  for (var i = 1; i < 7; i++) {
    rockart.lleiniog.push(
      {
        url: "/assets/images/art/rock/lleiniog/"+ i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/art/rock/lleiniog/" + i + ".jpg",
        id: i
      }
    )
  };
  for (var i = 1; i < 10; i++) {
    rockart.penmon.push(
      {
        url: "/assets/images/art/rock/penmon/"+ i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/art/rock/penmon/" + i + ".jpg",
        id: i
      }
    )
  };

  var streetart = {
    title: "Street aRt",
    state: "app.street",
    description: "When a friend rang up and told me she'd seen my aRt taped to a wall on Ibiza in view of all the passing cars, I told her I'd opened my gallery! Putting my aRt 'on the street' is to me like being a graffiti artist.   And because my aRt 'changes' colour with light and direction, I put them in places to maximise their effect. Each piece I put up was stolen!",
    photos: []
  }
  for (var i = 1; i < 7
    ; i++) {
    streetart.photos.push(
      {
        url: "/assets/images/art/street/"+ i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/art/street/" + i + ".jpg",
        id: i
      }
    )
  }
  var series = [
    {
      seriesId: 1,
      title: holoart.title,
      photo: holoart.photos[0],
      state: holoart.state
    },
    {
      seriesId: 2,
      title: streetart.title,
      photo: streetart.photos[0],
      state: streetart.state
    },
    {
      seriesId: 3,
      title: mirrorart.title,
      photo: mirrorart.photos[0],
      state: mirrorart.state
    },
    {
      seriesId: 4,
      title: adart.title,
      photo: adart.photos[0],
      state: adart.state
    },
    {
      seriesId: 4,
      title: rockart.title,
      photo: rockart.lleiniog[0],
      state: rockart.state
    }
  ]
  var arthouseArray = [
    {
      id: 1,
      url: "bar1805ibiza.com/",
      name: "Bar1805",
      image: "https://pbs.twimg.com/profile_images/378800000734028460/0490b6409a9cd02d6db1f92f4c042ef7.jpeg"
    },
    {
      id: 2,
      url: "http://www.nirvanafitnesscenter.com/",
      name: "Nirvana Fitness Center",
      image: "http://www.comerciosdeibiza.com/s/cc_images/cache_2444748598.jpg"
    },
    {
      id: 3,
      url: "http://urbanspacesibiza.com/",
      name: "Urban Spaces",
      image: "http://wearetouch.org/wp-content/uploads/2013/08/urbanspaces-featured.jpg"
    },
    {
      id: 4,
      url: "http://www.restaurantebeachclubibizalipsreartes.es/",
      name: "Lips Reartes",
      image: "http://media-cdn.tripadvisor.com/media/photo-s/07/07/22/f6/lips-por-la-manana.jpg"
    },
    {
      id: 5,
      url: "http://www.holocenter.org/",
      name: "Holocenter Parallax: Perspectives",
      image: "http://holocenter.org/wp-content/uploads/photoHolocenterHouse1-460x345.jpg"
    }
  ]


  return {
    mirrorArt: mirrorart,
    adArt: adart,
    series: series,
    arthouse: arthouseArray,
    getSeries: function(seriesId) {
      if (seriesId == "mirror") {
        return mirrorart
      }
      if (seriesId == "adart") {
        return adart
      }
      if (seriesId ==  "holo") {
        return holoart
      }
      if (seriesId == "street") {
        return streetart
      }
      if (seriesId == "rock") {
        return rockart
      }
    }

  }
})
.factory('Property', function(){
  var propArray = [
    {
      title: "Quebec House, Manchester",
      id: "1",
      description: "This site assembly, buying in a car park and two factory units, developed into 152 apartments, 500sq.ft of offices and 94 underground parking places. The car park was purchased for £300,000 and washed it's face.  The first factory unit took a £100,000 deposit with a delayed completion in September.   The second unit was bought with the same terms for £550,000.   All three were exchanged on in December. Our outlay was no more than £200,000 to obtain a site valuation of £4.2 M. Planning was obtained the following March and the site built out with a GDV of £30 M",
      photos: [
        {id: "1", url: "/assets/images/property/quebec/IMG_1526.jpg"},
        {id: "2", url: "/assets/images/property/quebec/IMG_1527.jpg"},
        {id: "3", url: "/assets/images/property/quebec/IMG_1528.jpg"},
        {id: "4", url: "/assets/images/property/quebec/IMG_1529.jpg"},
        {id: "5", url: "/assets/images/property/quebec/IMG_1530.jpg"},
        {id: "6", url:"/assets/images/property/quebec/IMG_1531.jpg" },
        {id: "0", url: "/assets/images/property/quebec/IMG_1532.jpg"}
          ]
    },
    {
      title: "Pen-y-Parc, Anglesey, Wales.",
      id: "2",
      description: "A unique location with fantastic views over Snowdonia and the Great Orme. Being advertised for £1.2M . Agreed to purchase for £700,000 with a 5% deposit and a six month delayed completion.   Planning was obtained within three months to convert the main house into three smaller sellable units. My clients bought the property for their own keeping due to the location, tranquillity and view.   One of the units recently came on the market at £700,000.",
      photos: [
        {id: "0", url: "/assets/images/property/penparc/IMG_1538.jpg"},
       {id:"1", url: "/assets/images/property/penparc/IMG_1541.jpg"},
        {id:"2", url: "/assets/images/property/penparc/IMG_1542.jpg"},
        {id:"3", url: "/assets/images/property/penparc/IMG_1500.jpg"}
      ]
    },
    {
      title: "Old Kent Rd, London",
      id: "3",
      description: "I passed this building whilst on a bus! I was so 'taken' by it, I got off. I negotiated a £1 option at a strike price of £600,000 in eight months.   We traded the building for £825,000 six weeks later, assigning the benefit of the option securing our immediate profit.",
      photos: [
        {id: "0", url: "/assets/images/property/oldkentrd/IMG_1533.PNG"}
      ]
    },
    {
      title: "Barn Development, Anglesey, Wales",
      id: "4",
      description: "Purchased the old cow shed and barn from a local farmer to develop into a residential dwelling.   Negotiated the lifting of a non-residential covenant from neighbouring land owner. Obtained planning permission and sold the project on.",
      photos: [
        {id: "0", url: "/assets/images/property/barnwales/IMG_1543.jpg"},
        {id: "1", url: "/assets/images/property/barnwales/IMG_1544.jpg"},
        {id: "2", url: "/assets/images/property/barnwales/IMG_1545.jpg"},
        {id: "3", url: "/assets/images/property/barnwales/IMG_1546.jpg"}
      ]
    },
    {
      title: "Streatham, London",
      id: "5",
      description: "I saw this building which was in disrepair, with five businesses running from the ground floor, and what looked like squatters in the upper parts.   I found the owners, and the property was in probate.   I secured the building at a purchase price of £900,000 with a 50,000 deposit with completion on vacant possession.   During this period we worked on a planning application and helped in securing vacant possession.   Planning was approved for 16 one bedroom, 6 two bedders and 3 three bedroom units, and retaining five retail units, reduced from seven.   The build costs were estimated at a million pounds, and the residential GDV was three and a half million, and the commercial came as profit too.",
      photos: [
        {id: "0", url: "/assets/images/property/streatham/IMG_1534.jpg"},
        {id: "1", url: "/assets/images/property/streatham/IMG_1535.jpg"},
        {id: "2", url: "/assets/images/property/streatham/IMG_1536.jpg"},
        {id: "3", url: "/assets/images/property/streatham/IMG_1537.jpg"},
        {id: "4", url: "/assets/images/property/streatham/IMG_1539.jpg"},
        {id: "5", url: "/assets/images/property/streatham/IMG_1540.jpg"}
      ]
    },
    {
      title: "Harrods, Buenos Aires.",
      id: "6",
      description: "I first saw this building in 2005. On seeing it once or twice more over the next couple of visits to Argentina, I looked into the story and ownership.   My friend, Malcolm McClean was the bank manager for Harrods in London at this time and was able to help in many ways.   I met with the 'owner', Artilio Gibertoni.   I worked on a scheme with Brandon Haw of Foster & Patners.   The scheme was to include shopping, offices, hotel and residential spaces",
      photos: [
        { id: "1", url: "http://2.bp.blogspot.com/_AbNytNzp2SY/S8sfg6tVZHI/AAAAAAAACa4/Fk4VizBPby0/s1600/harrods-ba-hoy2.jpg"},
        {id: "2", url: "http://www.buenosairestravelplanet.com/wp-content/uploads/2011/08/harrods-buenos-aires.jpg"}
      ]
    }
  ]
  var collabs = [
    {
      id: 1,
      image: "http://nemolighting.com/files/201403/31/foster-and-partners-4.jpg",
      url: "http://www.fosterandpartners.com"
    }
  ]
  var proptext = {text: "Between 1999 and 2001 I teamed up with Craig Griffin (Caring Homes Ltd) and started with a £2,500 deposit and a £1 option to trade over £20m worth of property. I travelled constantly during this period to Marrakech, New York, Miami and the Carribean. I was interested to see where, and how people lived, and WHY. Buildings were built. I moved to Anglesey in Wales in 2002 and soon found opportunities there and in Manchester. With the help of Barry Owen OBE (Mason Owen) and Malcolm McClean (ex bank manager at Harrods Bank) as my funders, I went on to buy a pub, barns, a chapel, two garage sites, a country house, a car park and factories. Each were traded or developed with my prize deal assembling a £30,000,000 mixed use scheme in Manchester. I have spent the last few years living on Ibiza, London, Wales and the last two in Argentina. I am currently based in Barcelona and pursuing new projects here. Should you wish to contact me to discuss any requirements or want to get involved in any of my projects, I look forward to hearing from you."}
  return {
    allProp: propArray,
    propText: proptext
  }
})
.factory('Design', function(){
  var boards = {
    title: "Boards",
    description: "Living in London, I often used a skateboard to travel around. I have visited, and ridden on many parks, but might now enjoy the serene longboard more! I currently have a collaboration with 'Whatever Skateboards' and am also negotiating with State to put my aRt on their longboards etc. We will shortly be bringing in a range of t-shirts and accessories for the enthusiast!",
    links: [
      {
        id: 1,
        url: "http://www.whateverskateboards.com/" ,
        text: "Whatever Skateboards",
        image: "https://img1.etsystatic.com/035/0/51674409/iusa_400x400.27343381_hhnr.jpg"
      },
      {
        id: 2,
        url: "http://statebcn.com" ,
        text: "State",
        image: "http://images.trickon.com/sites/default/files/styles/large/public/field/image/state-bcn-portada-original.jpg?itok=h116jB1B"
      }
    ],
    photos: []
  }
  for (var i = 1; i < 9; i++) {
    boards.photos.push(
      {
        url: "/assets/images/design/boards/board" + i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/boards/board" + i + ".jpg",
        id: i
      }
    )
  }
  var chairs = {
    title: "Chairs",
    description: "This furnishing set resides at the Urban Spaces Hotel, Ibiza.",
    links: [
      {
        id: 1,
        url: "http://www.moonkandfigus.es/",
        text: "Moonk & Figus",
        image: "https://lh5.googleusercontent.com/-99r7AmmAHQE/AAAAAAAAAAI/AAAAAAAAAA0/aY1hYPC0AoQ/photo.jpg"
      },
      {
        id: 2,
        url: "http://urbanspacesibiza.com/",
        text: "Urban Spaces",
        image: "http://wearetouch.org/wp-content/uploads/2013/08/urbanspaces-featured.jpg"
      },
      {
        id: 3,
        url: "https://www.facebook.com/palco.ibiza",
        text: "Palco Ibiza",
        image: "assets/images/palco.jpg"
      }
    ],
    photos: []
  }
  for (var i = 2; i < 8; i++) {
    chairs.photos.push(
      {
        url: "/assets/images/design/chairs/" + i + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/chairs/" + i + ".jpg",
        id: i
      }
    )
  }

  var wardrobe = {
    title: "Wardrobe",
    description: "With the success of the Mirror Art at the urban spaces, I was commissioned to 'decorate' a wardrobe in their chill out area. I was able to combine both my slogans and 'holographic explosions' on the piece.",
    links: [
      {
        id: 1,
        url: "http://urbanspacesibiza.com/",
        text: "Urban Spaces",
        image: "http://wearetouch.org/wp-content/uploads/2013/08/urbanspaces-featured.jpg"
      }
    ],
    photos: [
      {
        url: "/assets/images/design/wardrobe/FullSizeRender1.jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/FullSizeRender1.jpg",
        id: "1"
      },
      {
        url :"/assets/images/design/wardrobe/FullSizeRender2.jpg",
        shareurl :"http://www.ddjbydesign.com/assets/images/design/wardrobe/FullSizeRender2.jpg",
        id: "2"
      },
      {
        url: "/assets/images/design/wardrobe/FullSizeRender3.jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/FullSizeRender3.jpg",
        id: "3"
      },
      {
        url: "/assets/images/design/wardrobe/FullSizeRender4.jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/FullSizeRender4.jpg",
        id: "4"
      },
      {
        url: "/assets/images/design/wardrobe/IMG_0713.JPG",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0713.JPG",
        id: "5"
      },
      {
        url: "/assets/images/design/wardrobe/IMG_0724.JPG",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0724.JPG",
        id: "6"
      },
      {
        url: "/assets/images/design/wardrobe/IMG_0725.JPG",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0725.JPG",
        id: "7"
      },
      {
        url: "/assets/images/design/wardrobe/IMG_0726.JPG",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0726.JPG",
        id: "8"
      },
      {
        url: "/assets/images/design/wardrobe/IMG_0728.JPG",
        shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0728.JPG",
        id: "9"
      }
    ]
  }
  var urbanInfo =
    {
      title: "Urban Spaces Hotel",
      location: "Via Punica, Ibiza Town",
      hotelabout: "Deeply inspired by a book he was given outlining NYC’s art project cum hostel – The Carlton Arms, Urban Spaces’ owner, Ian Francis-Smith, decided that it was time that the island of Ibiza came up with a similar concept of its own. A few years later and Ian’s dream is a reality with the acquisition and transformation of the 15 room boutique hotel on Via Punica, Ibiza Town.",
      hoteldream: "Since its conception, the project has gone from strength to strength through the involvement of an incomparable list of artists. Even better, is the fact that they just keep coming… with a combination of local and international artists collaborating as a team to help piece together Ian’s dream, through hard work, commitment and, it’s fair to say, a whole lot of love.",
      hoteltwist: "Urban Spaces, once a blank canvas, now has all the markings of a veritable art project. Fresh life and fresh paint is being added every single day, with the added bonus of  being a fully operational hotel. From floor to ceiling, reception to roof terrace, plus everything in between, in each corner you’ll find a different style, a different concept, a different artist, a different feeling… ",
      link: "http://urbanspacesibiza.com/about-us/"
    }

  var series = [
    {
      seriesId: 1,
      title: boards.title,
      photo: boards.photos[0],
      state: "app.boards"
    },
    {
      seriesId: 2,
      title: chairs.title,
      photo: chairs.photos[3],
      state: "app.chairs"
    },
    {
      seriesId: 3,
      title: wardrobe.title,
      photo: wardrobe.photos[0],
      state: "app.wardrobe"
    }
  ]

  return {
    boardArray: boards,
    seriesArray: series,
    urbanInfo: urbanInfo,
    getDesignSeries: function(designId) {
      if (designId == "boards") {
        return boards
      }
      if (designId == "chairs") {
        return chairs
      }
      if (designId ==  "wardrobe") {
        return wardrobe
      }
    }
  }
})
.factory('Photo', function(){
  var photo = {
    title: "Photography",
    description: "I have always enjoyed capturing people, places and things. It can be the colour or light too that attracts me to the shot. I use my iPhone 4 which may not deliver the best quality, but it is on my person the whole time. I feel carrying a professional camera makes the photo more 'sought after' and not spontaneous. Should you require any wedding, party, event or property photos taken professionally, I can recommend two or three photographers whom have worked for me.",
    images: []
    }
    for (var i = 1; i < 31; i++) {
      photo.images.push(
        {
          url: "/assets/images/photo/"+ i + ".jpg",
          shareurl: "http://www.ddjbydesign.com/assets/images/photo/" + i + ".jpg",
          id: i
        }
      )
    };
  return {
    photoObj: photo,
    getPhoto: function(photoId){
      return {
        url: "/assets/images/photo/"+ photoId + ".jpg",
        shareurl: "http://www.ddjbydesign.com/assets/images/photo/" + photoId + ".jpg",
        id: photoId
      }
    }
  }
})
.factory('MobileCheck', function(){
  return {
    check: function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      console.log(check);
      return check;
    }
  }
})
.factory('Parade', function(){
  var parade = [
    {
      url: "/assets/images/design/wardrobe/IMG_0713.JPG",
      shareurl: "http://www.ddjbydesign.com/assets/images/design/wardrobe/IMG_0713.JPG",
      id: 1
    },
    {
      url: "/assets/images/design/boards/board1.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/design/boards/board1.jpg",
      id: 2
    },
    {
      url: "/assets/images/design/chairs/4.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/design/chairs/4.jpg",
      id: 3
    },
    {
      url: "/assets/images/design/chairs/2.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/design/chairs/2.jpg",
      id: 4
    },
    {
      url: "/assets/images/design/chairs/5.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/design/chairs/5.jpg",
      id: 5
    },
    {
      url: "/assets/images/art/mirrorart/3.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/mirrorart/3.jpg",
      id: 6
    },
    {
      url: "/assets/images/art/adart/dlegsafter.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/adart/dlegsafter.jpg",
      id: 7
    },
    {
      url :"/assets/images/art/adart/ladyafter.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/adart/ladyafter.jpg",
      id: 8

    },
    {
      url: "/assets/images/art/holo/1.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/holo/1.jpg",
      id: 9
    },
    {
      url: "/assets/images/art/holo/5.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/holo/5.jpg",
      id: 10
    },
    {
      url: "/assets/images/art/street/2.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/street/2.jpg",
      id: 11
    },
    {
      url: "/assets/images/art/mirrorart/13.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/art/mirrorart/13.jpg",
      id: 12
    },
    {
      url: "/assets/images/property/quebec/IMG_1531.jpg",
      shareurl: "http://www.ddjbydesign.com/assets/images/property/quebec/IMG_1531.jpg",
      id: 13
    },
    {
      url: "/assets/images/property/streatham/IMG_1540.jpg",
      shareurl: "http://www.ddjbydesign.comassets/images/property/streatham/IMG_1540.jpg",
      id: 14
    },
    {
      url: "http://2.bp.blogspot.com/_AbNytNzp2SY/S8sfg6tVZHI/AAAAAAAACa4/Fk4VizBPby0/s1600/harrods-ba-hoy2.jpg",
      shareurl: "http://2.bp.blogspot.com/_AbNytNzp2SY/S8sfg6tVZHI/AAAAAAAACa4/Fk4VizBPby0/s1600/harrods-ba-hoy2.jpg",
      id: 15
    }

  ]
  return {
    parade: parade
  }
})
.factory('Blog', function(){
  var stories = [
    {
      id: 1,
      title: "Love Stones",
      text: "I first started using stones in my installations. I then started to use the stones as a way of marketing. I painted each stone with an unforgettable “Love” on one side and my web page on the other. It has proved to be extremely popular amongst those who have found them and sent me their photo proudly holding their stone. Each stone is a rolling stone- like me!",
      images: [
        {
          id: 1,
          url: "assets/images/blog/stones1.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones1.jpg"
        },
        {
          id: 2,
          url: "assets/images/blog/stones2.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones2.jpg"
        },
        {
          id: 3,
          url: "assets/images/blog/stones3.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones3.jpg"
        },
        {
          id: 4,
          url: "assets/images/blog/stones4.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones4.jpg"
        },
        {
          id: 5,
          url: "assets/images/blog/stones5.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones5.jpg"
        },
        {
          id: 6,
          url: "assets/images/blog/stones6.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/stones6.jpg"
        }

      ]
    },
    {
      id: 2,
      title: "Chairs",
      text: "On my return to Ibiza from Argentina I had some chairs hand made from local Ibicenc craftsmen.   I painted and then decorated the chairs with slogans.   I took photos of the chairs in various places, including hanging one from a flyover on Ibiza!   The chairs were used for a time at Palco Cafe, Plaza de Parque, Ibiza, and then went on to Moonk and Figus, Jesus, Ibiza to be exhibited and sold. The chairs are also used at Urban Spaces Hotel, Ibiza.",
      images: [
        {
          id: 1,
          url: "assets/images/blog/chairs2.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs2.jpg"
        },
        {
          id: 2,
          url: "assets/images/blog/chairs3.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs3.jpg"
        },
        {
          id: 3,
          url: "assets/images/blog/chairs4.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs4.jpg"
        },
        {
          id: 4,
          url: "assets/images/blog/chairs5.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs5.jpg"
        },
        {
          id: 5,
          url: "assets/images/blog/chairs6.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs6.jpg"
        },
        {
          id: 6,
          url: "assets/images/blog/chairs7.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs7.jpg"
        },
        {
          id: 7,
          url: "assets/images/blog/chairs8.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/chairs8.jpg"
        }
      ]
    },
    {
      id: 3,
      title: "Andrea Oliva",
      text: "On seeing the flyers for the different clubs and DJs on Ibiza, I picked up a flyer for DJ Andrea Oliva.  I cut up the flyer, added my aRt, and had it framed.  I wrapped up the aRt and left it as a gift for Andrea at the reception of Ushuaia Hotel.  That day, when he played, he held up my aRtwork to the crowd and demanded the artist make himself known - I wasn’t there!",
      images: [
        {
          id: 1,
          url: "assets/images/blog/oliva.jpg",
          shareurl: "www.ddjbydesign.com/assets/images/blog/oliva.jpg"
        }
      ]
    }
  ]
  return {
    stories: stories,
    getStory: function(postId){
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id == postId) {
          return stories[i]
        }
      };
    }
  }
})
