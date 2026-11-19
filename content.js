/* ==========================================================
   EVERYTHING YOU EDIT LIVES IN THIS FILE.
   - Reorder: cut a { ... } block and paste it higher or lower.
   - Hide without deleting: add  hidden: true,  inside a block.
   - Videos: type is "youtube" or "vimeo", id is the part after
     youtu.be/ (before the ?) or vimeo.com/.
   - Posters: poster: "still-03.jpg" uses a file from /images.
     Leave poster out and YouTube's own thumbnail is used.
   ========================================================== */
window.SITE = {
  name: "Harsh Sharma",
  role: "Filmmaker",
  tagline: "I write, direct and shoot stories from the hills of Kalimpong. Next stop: narrative features.",
  nav: [["Films", "films"], ["Stills", "stills"], ["About", "about"], ["Contact", "contact"]],

  showreel: {
    title: "Showreel",
    type: "youtube", id: "gF8JYzRWJxE",
    note: "Start here: a quiet introduction, the range of work I take on, and what I believe films are for."
  },

  awards: {
    festival: "Amader International Short Film Festival",
    logo: "aisf-logo.png",
    title: "Seven awards at the Amader International Short Film Festival",
    list: ["Best Short Film", "Best Director", "Best Screenplay", "Best Cinematography", "Best Actor", "Best Supporting Actor", "Best Short Film Mastery"]
  },

  films: [
    {
      title: "Struggle for Existence",
      meta: "Narrative short · Writer, director, cinematographer, editor · 2025",
      video: { type: "youtube", id: "0ianN95q-N4", poster: "still-03.jpg" },
      badge: "Winner · Amader International Short Film Festival",
      text: "I never thought I could pull this miracle off until this film. It arrived as one idea, and making it taught everyone involved something. I never imagined it would bring glory. It will always hold a special place for me as my first step into professional filmmaking.",
      quote: "“From a flicker of an idea to the flickering image onscreen, the whole process is a miracle.” Tom Hanks"
    },
    {
      title: "A Quality Time for a Healthy Life",
      meta: "Narrative short · Writer, director · 2024",
      video: { type: "youtube", id: "2ZLg67mM1vQ", poster: "still-08.jpg" },
      highlight: "Disconnect to connect.",
      text: "A visually immersive short set in the monsoon of Kalimpong, about a man looking for peace away from the chaos of town. It began with a simple lesson I learned from HH S.B. Keshava Swami Maharaj."
    },
    {
      title: "Let's Talk",
      meta: "Mental health awareness film · Writer, director, cinematographer, editor · 2025",
      video: { type: "youtube", id: "zIqtX6tJMnk", poster: "still-16.jpg" },
      text: "Made while I was in the Leo Club of Kalimpong Youngs. It created a lot of buzz across Lions District 322H, was submitted to several short film competitions in the Lions circuit, and was requested by the then District Magistrate of Kalimpong."
    },
    {
      title: "Gangjong Handmade Paper Factory",
      meta: "Documentary · Director · 2024",
      video: { type: "youtube", id: "dEfew4LBaP8" },
      text: "Conceived as school content, it turned personal when we reached the oldest paper factory in Kalimpong. Its founder, Mr. P.D. Bhutia, told us how other factories closed during COVID-19 because the work was tiring and the profit negligible. His still runs because he wants to keep the town's heritage alive. I made this film as an act of gratitude, and to show how choosing paper over plastic helps the environment."
    },
    {
      title: "The Heart of a Leo",
      meta: "Institutional film · Leo Club of Kalimpong Youngs",
      video: { type: "youtube", id: "F94YXQV2iq0" },
      text: "A short film for the Leo Club of Kalimpong Youngs on what being a Lion or a Leo means to the people who live it."
    },
    {
      title: "The Best Way I Could Give You a Good Farewell",
      meta: "Personal film · Vimeo",
      video: { type: "vimeo", id: "1248170264" },
      text: "My sister Bidhya started the club and brought in most of its members. As head of marketing and media, I wanted her to leave the way she entered: as a queen. One of the most personal things I have made."
    },
    {
      title: "On camera",
      meta: "Performer showreel",
      video: { type: "youtube", id: "ldaKLcrcrqI" },
      text: "Behind the camera or in front of it, for the love of art and creativity I will do anything."
    }
  ],

  // Add a still: upload the image into /images, then add its file name here. Order here = order on the page.
  stills: [
    "still-01.jpg", "still-02.jpg", "still-03.jpg", "still-04.jpg", "still-05.jpg", "still-06.jpg",
    "still-07.jpg", "still-08.jpg", "still-09.jpg", "still-10.jpg", "still-11.jpg", "still-12.jpg",
    "still-13.jpg", "still-14.jpg", "still-15.jpg", "still-16.jpg", "still-17.jpg", "still-18.jpg"
  ],

  about: {
    paras: [
      "I write, direct, and often shoot and edit my own work. I am as comfortable leading a crew as I am running solo.",
      "My films have swept a festival, travelled across an entire town, and been requested by the District Magistrate of Kalimpong. A school, two Lions and Leo service clubs, a century-old convent and a spiritual organisation have trusted me with their stories.",
      "I want to direct narrative features, in the tradition of Martin Scorsese and Christopher Nolan. I make things to express, not to impress."
    ],
    quote: "The content that has some impact on you is called cinema.",
    cite: "My own definition, built from years of watching films.",
    lists: [
      { title: "Work", items: ["Narrative shorts", "Documentaries", "Campaign and awareness films", "Institutional films", "Event trailers", "Screenwriting"] },
      { title: "Trusted by", items: ["Kumudini Homes Higher Secondary School", "Leo Club of Kalimpong Youngs", "Lions Club of Kalimpong Greater", "Pahadi Sports Foundation", "St. Joseph's Convent Kalimpong", "Rockvale Academy", "Untold Krishna Katha"] }
    ]
  },

  contact: {
    heading: "Let's make something.",
    email: "creativeharsh.05@gmail.com",   // <-- replace with your real email
    links: [                            // links with an empty url are hidden
      { label: "YouTube", url: "" },
      { label: "Instagram", url: "" },
      { label: "Vimeo", url: "" }
    ]
  }
};
