function notificationsBetter() {
    if (location.pathname !== "/notifications") { return }
    console.log("HCTG+: notificationsBetter running")
    window.HCTG = window.HCTG || {}

    let datapage = window.HCTG.datapage
    
    // check if the datapage is old
    if (datapage.url !== "/notifications") {
        console.warn("need to refresh")
        location.reload()
    }
    let notifs = datapage.props.notifications
    let notifscontainer = document.getElementsByClassName("my-5 flex flex-col gap-4")[0]
    // could recycle most of this from gallery.js wtf

    // link each notif to their id
    for (let notifcard of notifscontainer.children) {
        let desc = notifcard.children[1].innerText
        for (let notifobject of notifs) {
            let cleanmsg = notifobject.message.replace(/\n/g, " ")
            cleanmsg = cleanmsg.replace(/\s+/g, " ").trim()
            desc = desc.replace(/\s+/g, " ").trim()
            // console.log(cleanmsg)
            // console.log(desc)
            // console.log("--------------")
            if (cleanmsg == desc) {
                notifcard.setAttribute("hctg-notification-id", notifobject.id)
            }
        }
    }


    for (let notifcard of notifscontainer.children) {
        let notifid = notifcard.getAttribute("hctg-notification-id")
        let notif = notifs.find(n => n.id == notifid)

        // // change desc
        // let descContainer = notifcard.children[1]
        // let cleanmsg = notif.message.replace(" >", "/n")
        // console.log(cleanmsg)
        // descContainer.innerText = cleanmsg

        // slime everything out and make room for new things
        notifcard.children[0].remove()
        notifcard.children[0].remove()

        if (notif.notifiable_type == "Project::Review") {




            slop = `
            
            <div class="flex gap-3">
                <img alt="Avatar of ascpixi" class="h-10 w-10 rounded-md" src="https://avatars.slack-edge.com/2026-01-14/10299410841394_d43f91bb6b15095f06a2_512.png" title="">
                <div class="flex flex-col gap-1">
                    <p class="leading-0.5">
                        <span class="font-bold">ascpixi</span>
                        <span class="italic">approved for 17h 30m</span><span class="text-sm"><br>on 4/16/2026, 2:33:37 PM</span>
                    </p>
                    <p class="max-w-sm wrap-break-word">
                        woaw!! really cool seeing people mess around with our platform! :3c
                        I had to subtract 1.5 hours for AI usage - but otherwise, this is a great project!
                    </p>
                </div>
            </div>
`
            notifcard.innerHTML = slop
        }else {
            notif.innerHtml = "not implemented :("
        }


    }

}

window.addEventListener('pageChange', function() {
    setTimeout(notificationsBetter, 200)
});







notificationsBetter()
