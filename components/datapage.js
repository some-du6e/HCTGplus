function parseDataPage() {
    window.HCTG = window.HCTG || {}

    // get data-page from the app div
    const appdiv = document.getElementById("app")
    if (!appdiv) { return }

    let datapageslop = appdiv.getAttribute("data-page")
    if (!datapageslop) { return }

    // parse the slop into something more usable
    // i didnt think it was this easy...
    let datapage = null
    try {
        datapage = JSON.parse(datapageslop)
    } catch {
        console.error("HCTG: could not parse data-page JSON. ID:xj8sqv")
        return
    }
    // console.log("HCTG+: parsed datapage", datapage)
    let user = datapage?.props?.user
    if (user) {
        window.HCTG.user = user
    }else {
        console.error("HCTG: something has happened and the user prop was not found! ID:exnwqi")
        return
    }
    // i think this is in seconds
    let hours = {
        "totalTime": user.total_reported_seconds ?? 0,
        "secondsInReview": user.total_in_review_seconds ?? 0,
        "approvedSeconds": user.total_approved_seconds ?? 0
    
    }
    window.HCTG.hours = hours
    
}

window.addEventListener('pageChange', function() {
    setTimeout(parseDataPage, 100)
});

parseDataPage()
