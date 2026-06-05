from components.componenttest import test_component


def testDataComponent(page):
    return test_component(
        page,
        "data.js",
        "https://game.hackclub.com/home",
        error_codes=("xj8sqv", "exnwqi"),
        check=lambda page: (
            "data-dependent sidebar rendered",
            page.locator("[data-hctg-stat='hours'], [data-hctg-stat='usd']").count() == 2,
        ),
    )
