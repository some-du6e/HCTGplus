const onetoken2usd = 5
const onehour2usd = 5
const REALLYdebuging = false

if (!window.HCTG) {
  window.HCTG = {}
}

window.HCTG.consts = {
  onetoken2usd: onetoken2usd,
  onehour2usd: onehour2usd,
  REALLYdebuging: REALLYdebuging,
}

if (!window.HCTG.shop) {
  window.HCTG.shop = {}
}

window.HCTG.shop.categories = {
  featured: [64, 25, 29, 3, 27, 26, 101, 98, 99, 100],
  travel: [64, 25, 3, 101, 99, 100],
  grants: [64, 25, 29, 16, 9, 73, 76, 63, 71, 90, 10, 96, 66, 97],
  tech: [29, 27, 26, 80, 69, 87, 86, 83],
  hardware: [11, 74, 72, 82],
  audio: [68, 67, 91, 78, 81, 85],
  gaming: [15, 70, 75, 77, 89],
  misc: [65, 79, 88, 95, 98],
}

if (!window.HCTG.roles) {
  window.HCTG.roles = {}
}

// prob really bad but wtv
window.HCTG.roles = {
  98: {
    id: 98,
    avatar: "https://avatars.slack-edge.com/2025-07-20/9220922723411_77b5657506d5c607a606_512.jpg",
    role: "reviewer",
    username: "Adhyys",
  },
  424: {
    id: 424,
    avatar: "https://avatars.slack-edge.com/2026-01-14/10299410841394_d43f91bb6b15095f06a2_512.png",
    role: "admin",
    username: "ascpixi",
  },
  539: {
    id: 539,
    avatar: "https://avatars.slack-edge.com/2026-01-02/10222102531364_81897bd5a29daff5c6c7_512.jpg",
    role: "admin",
    username: "phthallo",
  },
  1683: {
    id: 1683,
    avatar: "https://avatars.slack-edge.com/2025-11-22/9966719883203_8e7a52fe549bb55071ce_512.png",
    role: "reviewer",
    username: "iau",
  },
  578: {
    id: 578,
    avatar: "https://avatars.slack-edge.com/2026-01-16/10345469199216_84aca69f87c315112438_512.png",
    role: "reviewer",
    username: "maxstellar",
  },
}
if (!window.HCTG.quickresponses) {
  window.HCTG.quickresponses = []
}

window.HCTG.quickresponses = [
  "Hi! You need to include a proper README for your project. This should include a short description of the project, how you built it, and instructions on how to run/play/experience it. Feel free to resubmit when you've done this!",
  "Hey, it looks like you submitted this project to both Hack Club The Game and another YSWS program, which isn't allowed. Feel free to create and submit an original project just for Hack Club: The Game :) - ask in #hack-club-the-game if you need help!",
  `It looks like your submission relied on AI for its creation. We respect the value of AI as a coding tool, but a Hack Club project should be something that, when you look at it, you feel proud of how hard you worked to ship it. If you are using AI to help you code, then that means manually reviewing and adjusting the code so that the finished project is polished. You should also keep the use of AI to generally under 30% of your total project's code!
    
    Keep working until you have something that you can honestly say is your best work! Add a couple of features yourself, and once you feel confident that you've done the work to make this project your own, feel free to submit again! See slide 17 of https://hack.club/hctg/guide for more context.`
]
