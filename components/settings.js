function addSettings() {
    if (location.pathname !== "/me") { return }
    if (location.hash !== "") { return }
    console.log("HCTG+: addSettings running")

    let mainContainer = document.getElementsByClassName("relative -ml-2 h-screen w-full flex-1 overflow-y-scroll px-6 py-10")[0]

    let settingsContainer = document.createElement("div")
    settingsContainer.className = "p-8"
    settingsContainer.innerHTML = `
    <h2 class="mb-2 text-3xl font-bold">HCTG+ settings</h2>
    <div id="settingscontainer>

    </div>
    `

    mainContainer.appendChild(settingsContainer)

    
    function addSetting(title, localstoragetochange, inputtype) {
        let setting = document.createElement("div")
        setting.className = "px-6 py-4"

        // title
        let titlee = document.createElement("h3")
        titlee.className = "smoothing-black mb-4 text-2xl font-bold tracking-[-0.02em]"
        titlee.innerText = title
        setting.appendChild(titlee)

        if (inputtype === "boolean") {
            let input = document.createElement("select")
            input.className = "block mx-auto"
            input.innerHTML = `
            <option value="false">No</option>
            <option value="true">Yes</option>
            `
            input.onchange = function() {
                localStorage.setItem(localstoragetochange, input.value)
            }
            let lsitem = localStorage.getItem(localstoragetochange) ? localStorage.getItem(localstoragetochange) : false
            input.value = lsitem
            localStorage.setItem(localstoragetochange, lsitem)
            setting.appendChild(input)
        }

        settingsContainer.appendChild(setting)
    }

    addSetting("Hide black market items", "hctg-hideblackmarket", "boolean")
    addSetting("Developer mode", "hctg-devmode", "boolean")
    
}

window.addEventListener('pageChange', function() {
    setTimeout(addSettings, 200)
});


window.HCTG = window.HCTG || {}






addSettings()
