function makeSidebarBetter() {
    if (window.location.pathname !== "/projects") { return }

    // slip in the hours
    // TODO: see if dollars can be fitted in (prob too cramped)
    let iconsdiv = null
    let possibleiconsdivs = document.getElementsByClassName("flex items-center justify-between")
    for (let div of possibleiconsdivs) {
        const leftCell = div.children[0]
        if (
            leftCell &&
            leftCell.classList?.contains("flex") &&
            leftCell.classList?.contains("items-center") &&
            leftCell.classList?.contains("gap-1.5")
        ) {
            iconsdiv = div
            break
        }
    }
    if (!iconsdiv) {
        console.error("HCTG: could not find icons div! ID: 9s8f7g")
        return
    }

    let littleiconsdiv = null
    let possiblelittleiconsdivs = document.getElementsByClassName("flex items-center justify-between")
    for (let div of possiblelittleiconsdivs) {
        if (div.children[0].className === "flex items-center gap-1.5") {
            littleiconsdiv = div
            break
        }
    }

    let tokensdiv = iconsdiv.children[0]
    if (!tokensdiv) { return }

    let hoursdiv = tokensdiv.cloneNode(true)
    iconsdiv.insertBefore(hoursdiv, iconsdiv.children[1])

}

window.addEventListener('pageChange', function() {
    setTimeout(makeSidebarBetter, 100)
});

makeSidebarBetter()
