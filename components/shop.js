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
    let itemlist = datapage.props.items
    console.log(itemlist)


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

    // lets add the id to each child because my last method was stupid 
    for (let item of shopcontainer.children) {
        let itempictureurl = item.children[1].children[0].src
        let itemtitle = item.children[1].children[0].alt // the picture alt is the title lol
        console.log(itemtitle)
        console.log(itempictureurl)
        for (shopitem of itemlist) {
            // check for the picture since that shi is never ever gonna change and theres never ever gonna be the same one
            // check name as a backup bc of the mac neos
            if (itempictureurl.endsWith(shopitem.image) && shopitem.name === itemtitle) {
                item.id = "HCTGplus-item-" + shopitem.id
            }
            
        }
    }



    

}

window.addEventListener('pageChange', function() {
    setTimeout(betterShop, 200)
});

betterShop()
