function betterShop() {
    window.HCTG = window.HCTG || {}
    window.HCTG.consts = window.HCTG.consts || {
        "onetoken2usd": 5,
        "onehour2usd": 5,
        "REALLYdebuging": false
    }
    if (location.pathname !== "/shop") { return }
    console.log("HCTG+: betterShop running")
    if (!window.HCTG.datapage) {
        console.error("HCTG: datapage not found! ID:1s9f8g")
        return
    }

    let datapage = window.HCTG.datapage
    if (!datapage.props.items) {
        console.warn("HCTG+: need to refresh for some reason idk") // TODO: there has to be a better way to get the props.items. maybe its a problem in data.js?
        location.reload()
    }

    console.log(datapage.props.items)


    // shop ui now...

    // get shopcontainer
    let shopcontainer = null
    let possibleshopcontainers = document.getElementsByClassName("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3") 
    // i think this is bs cuz i think its never gonna change
    for (let posibility of possibleshopcontainers ) {
        if (posibility.children[0].className === "flex h-full flex-col") {
            shopcontainer = posibility
            break
        }
    }
    if (!shopcontainer) {
        console.error("HCTG: could not find shop container! ID: 1s9f8g")
        return
    }


    // keep first item as template, remove the rest
    while (shopcontainer.children.length > 1) {
        shopcontainer.removeChild(shopcontainer.lastChild)
    }

    const itemTemplate = shopcontainer.children[0]
    itemTemplate.hidden = true
    function renderitems() {
        let items = window.HCTG.datapage.props.items
        for (let item of items) { 
            let chud = itemTemplate.cloneNode(true)

            // featured?
            if (!item.featured) {
                chud.children[0].children[0].hidden = true
            }

            // image
            let imgthing = chud.children[1].children[0]
            imgthing.src = item.image

            // title
            let titlething = chud.children[1].children[1].children[0]
            titlething.innerText = item.name

            chud.hidden = false
            shopcontainer.appendChild(chud)
        }
    }
    renderitems()

}

window.addEventListener('pageChange', function() {
    setTimeout(betterShop, 200)
});

betterShop()
