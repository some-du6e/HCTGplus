from components.componenttest import test_component


def testLarping(page):
    return test_component(
        page,
        "larping.js",
        "https://game.hackclub.com/home",
        check=lambda page: (
            "main-world script stayed healthy",
            page.locator("#app").count() == 1,
        ),
    )
