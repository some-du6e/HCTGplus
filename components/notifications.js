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
            if (notifobject.message === desc) {
                notifcard.setAttribute("hctg-notification-id", notifobject.id)
            }
        }
    }


}

window.addEventListener('pageChange', function() {
    setTimeout(notificationsBetter, 200)
});







notificationsBetter()
