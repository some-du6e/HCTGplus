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
        // console.log(itemtitle)
        // console.log(itempictureurl)
        for (shopitem of itemlist) {
            // check for the picture since that shi is never ever gonna change and theres never ever gonna be the same one
            // check name as a backup bc of the mac neos
            if (itempictureurl.endsWith(shopitem.image) && shopitem.name === itemtitle) {
                item.id = "HCTGplus-item-" + shopitem.id
            }
            
        }
    }



    function renderCategory(category) {
        if (category === "none") {
            for (let item of shopcontainer.children) {
                item.style.display = "block"
            }
            return
        }   
        let standard = window.HCTG.shop.categories[category]
        for (let item of shopcontainer.children) {
            let itemid = parseInt(item.id.replace("HCTGplus-item-", ""))
            if (standard.includes(itemid)) {
                item.style.display = "block"
            }else {
                item.style.display = "none"
            }
        }
    }

    renderCategory("tech")

    function renderCategoryButtons() {
        let categories = Object.keys(window.HCTG.shop.categories)
        // thank you font awesome
        let iconmapping = {
            "featured": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3%205.1-21.4%2013.1L193.1%20125.3%2033.2%20150.7c-8.9%201.4-16.3%207.7-19.1%2016.3s-.5%2018%205.8%2024.4l114.4%20114.5-25.2%20159.9c-1.4%208.9%202.3%2017.9%209.6%2023.2s16.9%206.1%2025%202L288.1%20417.6%20432.4%20491c8%204.1%2017.7%203.3%2025-2s11-14.2%209.6-23.2L441.7%20305.9%20556.1%20191.4c6.4-6.4%208.6-15.8%205.8-24.4s-10.1-14.9-19.1-16.3L383%20125.3%20309.5-18.9z%22%2F%3E%3C%2Fsvg%3E",
            "travel": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M200%2048l112%200c4.4%200%208%203.6%208%208l0%2040-128%200%200-40c0-4.4%203.6-8%208-8zm-56%208l0%20424%20224%200%200-424c0-30.9-25.1-56-56-56L200%200c-30.9%200-56%2025.1-56%2056zM416%2096l0%20384%2032%200c35.3%200%2064-28.7%2064-64l0-256c0-35.3-28.7-64-64-64l-32%200zM96%20480l0-384-32%200C28.7%2096%200%20124.7%200%20160L0%20416c0%2035.3%2028.7%2064%2064%2064l32%200z%22%2F%3E%3C%2Fsvg%3E",
            "grants": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M160%2032c-35.3%200-64%2028.7-64%2064l0%20224c0%2035.3%2028.7%2064%2064%2064l352%200c35.3%200%2064-28.7%2064-64l0-224c0-35.3-28.7-64-64-64L160%2032zm176%2096a80%2080%200%201%201%200%20160%2080%2080%200%201%201%200-160zM160%20152l0-48c0-4.4%203.6-8%208-8l48%200c4.4%200%208.1%203.6%207.5%208-3.6%2029-26.6%2051.9-55.5%2055.5-4.4%20.5-8-3.1-8-7.5zm0%20112c0-4.4%203.6-8.1%208-7.5%2029%203.6%2051.9%2026.6%2055.5%2055.5%20.5%204.4-3.1%208-7.5%208l-48%200c-4.4%200-8-3.6-8-8l0-48zM504%20159.5c-29-3.6-51.9-26.6-55.5-55.5-.5-4.4%203.1-8%207.5-8l48%200c4.4%200%208%203.6%208%208l0%2048c0%204.4-3.6%208.1-8%207.5zM512%20264l0%2048c0%204.4-3.6%208-8%208l-48%200c-4.4%200-8.1-3.6-7.5-8%203.6-29%2026.6-51.9%2055.5-55.5%204.4-.5%208%203.1%208%207.5zM48%20152c0-13.3-10.7-24-24-24S0%20138.7%200%20152L0%20416c0%2035.3%2028.7%2064%2064%2064l392%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24L64%20432c-8.8%200-16-7.2-16-16l0-264z%22%2F%3E%3C%2Fsvg%3E",
            "tech": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M128%2032C92.7%2032%2064%2060.7%2064%2096l0%20240%2064%200%200-240%20384%200%200%20240%2064%200%200-240c0-35.3-28.7-64-64-64L128%2032zM19.2%20384C8.6%20384%200%20392.6%200%20403.2%200%20445.6%2034.4%20480%2076.8%20480l486.4%200c42.4%200%2076.8-34.4%2076.8-76.8%200-10.6-8.6-19.2-19.2-19.2L19.2%20384z%22%2F%3E%3C%2Fsvg%3E",
            "hardware": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M176%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024l0%2040c-35.3%200-64%2028.7-64%2064l-40%200c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024l40%200%200%2056-40%200c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024l40%200%200%2056-40%200c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024l40%200c0%2035.3%2028.7%2064%2064%2064l0%2040c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24l0-40%2056%200%200%2040c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24l0-40%2056%200%200%2040c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24l0-40c35.3%200%2064-28.7%2064-64l40%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24l-40%200%200-56%2040%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24l-40%200%200-56%2040%200c13.3%200%2024-10.7%2024-24s-10.7-24-24-24l-40%200c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24%2010.7-24%2024l0%2040-56%200%200-40c0-13.3-10.7-24-24-24s-24%2010.7-24%2024l0%2040-56%200%200-40zM160%20128l192%200c17.7%200%2032%2014.3%2032%2032l0%20192c0%2017.7-14.3%2032-32%2032l-192%200c-17.7%200-32-14.3-32-32l0-192c0-17.7%2014.3-32%2032-32zm16%2048l0%20160%20160%200%200-160-160%200z%22%2F%3E%3C%2Fsvg%3E",
            "audio": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M64%20224c0-88.4%2071.6-160%20160-160s160%2071.6%20160%20160l0%2037.5c-10-3.5-20.8-5.5-32-5.5l-16%200c-26.5%200-48%2021.5-48%2048l0%20128c0%2026.5%2021.5%2048%2048%2048l16%200c53%200%2096-43%2096-96l0-160C448%20100.3%20347.7%200%20224%200S0%20100.3%200%20224L0%20384c0%2053%2043%2096%2096%2096l16%200c26.5%200%2048-21.5%2048-48l0-128c0-26.5-21.5-48-48-48l-16%200c-11.2%200-22%201.9-32%205.5L64%20224z%22%2F%3E%3C%2Fsvg%3E",
            "gaming": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M224%2064c-79%200-144.7%2057.3-157.7%20132.7%209.3-3%2019.3-4.7%2029.7-4.7l16%200c26.5%200%2048%2021.5%2048%2048l0%2096c0%2026.5-21.5%2048-48%2048l-16%200c-53%200-96-43-96-96l0-64C0%20100.3%20100.3%200%20224%200S448%20100.3%20448%20224l0%20168.1c0%2066.3-53.8%20120-120.1%20120l-87.9-.1-32%200c-26.5%200-48-21.5-48-48s21.5-48%2048-48l32%200c26.5%200%2048%2021.5%2048%2048l0%200%2040%200c39.8%200%2072-32.2%2072-72l0-20.9c-14.1%208.2-30.5%2012.8-48%2012.8l-16%200c-26.5%200-48-21.5-48-48l0-96c0-26.5%2021.5-48%2048-48l16%200c10.4%200%2020.3%201.6%2029.7%204.7-13-75.3-78.6-132.7-157.7-132.7z%22%2F%3E%3C%2Fsvg%3E",
            "misc": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M0%20256a56%2056%200%201%201%20112%200%2056%2056%200%201%201%20-112%200zm168%200a56%2056%200%201%201%20112%200%2056%2056%200%201%201%20-112%200zm224-56a56%2056%200%201%201%200%20112%2056%2056%200%201%201%200-112z%22%2F%3E%3C%2Fsvg%3E",
            
            "smile": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%20v7.2.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202026%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M256%20512a256%20256%200%201%200%200-512%20256%20256%200%201%200%200%20512zM165.4%20321.9c20.4%2028%2053.4%2046.1%2090.6%2046.1s70.2-18.1%2090.6-46.1c7.8-10.7%2022.8-13.1%2033.5-5.3s13.1%2022.8%205.3%2033.5C356.3%20390%20309.2%20416%20256%20416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7%205.3-33.5s25.7-5.4%2033.5%205.3zM144%20208a32%2032%200%201%201%2064%200%2032%2032%200%201%201%20-64%200zm192-32a32%2032%200%201%201%200%2064%2032%2032%200%201%201%200-64z%22%2F%3E%3C%2Fsvg%3E"
        }
        let possibleohiogubby = document.getElementsByClassName("smoothing-black mt-5 pl-16 text-xl leading-snug text-black/80")
        let ohiogubby = null
        // this prob doesnt need to be checked since theres only 1
        for (let posibility of possibleohiogubby) {
            // if (posibility.children[0].textContent === "Spend your hard-earned tickets on cool stuff!") {
            //     ohiogubby = posibility
            //     break
            // }
            ohiogubby = posibility
        }
        let categoriesdiv = document.createElement("div")
        categoriesdiv.className = "flex items-center gap-2"



        
        for (let placeholder of categories) {
            let bullshit = document.createElement("div")
            bullshit.className = "mt-2 bg-black px-4 py-1.5 font-bold text-white no-underline transition-colors hover:bg-[#fecb0d] hover:text-black cursor-pointer flex items-center gap-2"

            let pic = document.createElement("img")
            pic.src = iconmapping[placeholder] || iconmapping["smile"]
            pic.style.width = "20px"
            pic.style.height = "20px"
            pic.style.filter = "invert(1)"
            
            categoryname = document.createElement("span")
            categoryname.textContent = placeholder[0].toUpperCase() + placeholder.slice(1)
            bullshit.appendChild(pic)
            bullshit.appendChild(categoryname)
            
            categoriesdiv.appendChild(bullshit)
            
            
            bullshit.addEventListener('mouseenter', () => {
                pic.style.filter = "invert(0)"
            })
            bullshit.addEventListener('mouseleave', () => {
                pic.style.filter = "invert(1)"
            })
            bullshit.onclick = () => {
                renderCategory(placeholder)
            }
        }

        ohiogubby.appendChild(document.createElement("br"))
        ohiogubby.appendChild(categoriesdiv)
    }
    renderCategoryButtons()
}

window.addEventListener('pageChange', function() {
    setTimeout(betterShop, 200)
});

betterShop()
