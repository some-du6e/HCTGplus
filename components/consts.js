const onetoken2usd = 5
const onehour2usd = 5
const REALLYdebuging = false



if (!window.HCTG) {
    window.HCTG = {}
}


window.HCTG.consts = {
    "onetoken2usd": onetoken2usd,   
    "onehour2usd": onehour2usd,
    "REALLYdebuging": REALLYdebuging
}

if (!window.HCTG.shop) {
    window.HCTG.shop = {}
}

window.HCTG.shop.categories = {
    "featured": [64, 25, 29, 3, 27, 26],
    "travel": [64, 25, 3],
    "grants": [16, 9, 73, 76, 63, 71, 90, 10, 96, 66, 97],
    "tech": [29, 27, 26, 80, 69, 87, 86, 83],
    "hardware": [11, 74, 72, 82],
    "audio": [68, 67, 91, 78, 81, 85],
    "gaming": [15, 70, 75, 77, 89, 65, 79, 88, 95]
}