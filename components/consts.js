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
  grants: [16, 9, 73, 76, 63, 71, 90, 10, 96, 66, 97],
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
