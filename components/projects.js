function makeProjectsBetter() {
    window.HCTG = window.HCTG || {}
    if (!window.HCTG.economics) { return }

    if (window.location.pathname !== "/projects") { return } // zero clue why i added this

    if (!window.HCTG.datapage.props.projects || window.HCTG.datapage.url === "/explore") {
        console.warn("HCTG+: need to refresh cuz of the datapage shinanigans.... ")
        location.reload()
        return
    }


    let projectscontainer = null
    let possibleprojectscontainers = document.getElementsByClassName("grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3")
    // TODO: only one, but still need to fix
    projectscontainer = possibleprojectscontainers[0]

    // link the id to each project card
    let projects = window.HCTG.datapage.props.projects
    for (let card of projectscontainer.children) {
        let cardID = card.href.split("/projects/")[1].trim()
        
        if (cardID !== "new") {
            console.log("HCTG+: cardID:", cardID)
            for (let project of projects) {
                if (project.id == cardID) {
                    card.id = "hctg-project-" + projects.indexOf(project)
                    card.setAttribute("data-hctg-project-id", projects.indexOf(project))
                    break
                }
            }
        }
    }


}

window.addEventListener('pageChange', function() {
    setTimeout(makeProjectsBetter, 100)
});

window.addEventListener('hctg:dataReady', function() {
    setTimeout(makeProjectsBetter, 0)
});

makeProjectsBetter()
