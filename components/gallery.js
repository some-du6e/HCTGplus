function galleryBetter() {
    if (location.pathname !== "/explore") { return }
    console.log("HCTG+: galleryBetter running")
    window.HCTG = window.HCTG || {}

    let now = new Date()


    let oldcache = null
    let rawCache = localStorage.getItem("hctg-gallery-cache")
    if (rawCache) {
        try {
            oldcache = JSON.parse(rawCache)
        } catch (error) {
            console.warn("HCTG: invalid gallery cache, clearing it. ID: k3d8sz")
            localStorage.removeItem("hctg-gallery-cache")
        }
    }
    if (oldcache) {
        let cachedate = new Date(oldcache.date)
        let cachediffMs = now - cachedate

        let cachediffMins = cachediffMs / (1000 * 60)
        // todo: idk what to do after
    }

    let newcache = {
        "projects": null,
        "date": now
    }

    // get projects and cache them
    let datapage = window.HCTG.datapage
    
    // check if the datapage is old
    if (datapage.url !== "/explore") {
        console.warn("need to refresh")
        location.reload()
    }
    let projects = datapage.props.projects


    
    newcache.projects = projects

    console.log(newcache)
    localStorage.setItem("hctg-gallery-cache", JSON.stringify(newcache))
    console.log("HCTG+: saved gallery cache")



}

window.addEventListener('pageChange', function() {
    setTimeout(galleryBetter, 200)
});







galleryBetter()
