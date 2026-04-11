function makeProjectsBetter() {
    window.HCTG = window.HCTG || {}
    if (!window.HCTG.economics) { return }

    if (window.location.pathname !== "/projects") { return } // zero clue why i added this

    if (!window.HCTG.datapage.props.projects || window.HCTG.datapage.url === "/explore") {
        console.warn("HCTG+: need to refresh cuz of the datapage shinanigans.... ")
        location.reload()
        return
    }
    
}

window.addEventListener('pageChange', function() {
    setTimeout(makeProjectsBetter, 100)
});

window.addEventListener('hctg:dataReady', function() {
    setTimeout(makeProjectsBetter, 0)
});

makeProjectsBetter()
