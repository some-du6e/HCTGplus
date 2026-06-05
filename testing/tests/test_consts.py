from components.componenttest import test_component


def testConsts(page):
    return test_component(
        page,
        "consts.js",
        "https://game.hackclub.com/home",
        check=lambda page: (
            "host page rendered after constants loaded",
            page.locator("#app").count() == 1,
        ),
    )
