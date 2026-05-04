from playwright.sync_api import Page

def testLogin(page: Page):
    results = {
        "section": "Login test",
        "tests": {
            "Logged in successfully": False,
        }
    }
    if page.url != ("https://game.hackclub.com/"):
        page.goto("https://game.hackclub.com/")

    page.wait_for_load_state("domcontentloaded", timeout=10000)

    loginbutton = page.get_by_role("link", name="Log in")

    loginbutton.click()
    page.wait_for_load_state("domcontentloaded", timeout=10000)
    
    passedurl = page.url == "https://game.hackclub.com/home"
    passedlogin = page.get_by_text("Nice!Successfully logged in!").is_visible()

    if passedurl and passedlogin:
        results["tests"]["Logged in successfully"] = True

    return page, results
