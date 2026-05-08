from playwright.sync_api import Page
import time

def pregame(page: Page):
    
    # goto hctg but a lowkey page
    page.goto("https://game.hackclub.com/404")
    page.wait_for_load_state("domcontentloaded", timeout=10000)

    # clear hctg localstorage
    page.evaluate("window.localStorage.clear()")

    # clear hctg cookies only
    for cookie in page.context.cookies():
        domain = cookie.get("domain", "")
        name = cookie.get("name", "")
        if domain and "game.hackclub.com" in domain and name:
            page.context.clear_cookies(name=name)

    # go back to about:blank
    page.goto("about:blank")    
    
    page.wait_for_load_state("domcontentloaded", timeout=10000)

    time.sleep(1.5)
    return page