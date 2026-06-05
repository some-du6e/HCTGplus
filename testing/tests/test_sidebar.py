from components.componenttest import test_component


def testSidebar(page):
    return test_component(
        page,
        "sidebar.js",
        "https://game.hackclub.com/home",
        error_codes=("9s8f7g", "h5d0zt", "3a6jqn"),
        check=lambda page: (
            "extra sidebar stats rendered",
            page.locator("[data-hctg-stat='hours'], [data-hctg-stat='usd']").count() == 2,
        ),
    )
