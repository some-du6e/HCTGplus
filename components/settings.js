function addSettings() {
    if (location.pathname !== "/me") { return }
    if (location.hash !== "") { return }
    console.log("HCTG+: addSettings running")

    let mainContainer = document.getElementsByClassName("relative -ml-2 h-screen w-full flex-1 overflow-y-scroll px-6 py-10")[0]

    let settingsContainer = document.createElement("div")
    settingsContainer.className = "p-8"
    settingsContainer.innerHTML = `
    <h2 class="mb-2 text-3xl font-bold">HCTG+ settings</h2>
    <div id="settingscontainer">

    </div>
    `

    mainContainer.appendChild(settingsContainer)

    
    function addSetting(title, localstoragetochange, inputtype, callback) {
        let setting = document.createElement("div")
        setting.className = "px-6 py-4"

        // title
        let titlee = document.createElement("h3")
        titlee.className = "smoothing-black mb-4 text-2xl font-bold tracking-[-0.02em]"
        titlee.innerText = title
        setting.appendChild(titlee)

        if (inputtype === "boolean") {
            let input = document.createElement("select")
            input.className = ""
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
        if (inputtype === "button") {
            let input = document.createElement("a")
            input.className = "mt-2 bg-black px-4 py-1.5 font-bold text-white no-underline transition-colors hover:bg-[#fecb0d] hover:text-black cursor-pointer"
            input.innerText = title
            input.onclick = callback
            setting.appendChild(input)
        }

        settingsContainer.appendChild(setting)
    }

    addSetting("Hide black market items", "hctg-hideblackmarket", "boolean")
    addSetting("Developer mode", "hctg-devmode", "boolean")
    addSetting("Larp as admin", "hctg-larp-admin", "boolean")
    addSetting("Larp as reviewer", "hctg-larp-reviewer", "boolean")
    
    addSetting("Bring back help", null, "button", function() {
        localStorage.removeItem('hctg-dismiss-help')
        location.reload()
    })



    
}

window.addEventListener('pageChange', function() {
    setTimeout(addSettings, 200)
});


window.HCTG = window.HCTG || {}






addSettings()
