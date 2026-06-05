from components.componenttest import test_component


def testShop(page):
    return test_component(
        page,
        "shop.js",
        "https://game.hackclub.com/shop",
        error_codes=("1s9f8g",),
        running_message="HCTG+: betterShop running",
        check=lambda page: (
            "shop items enhanced",
            page.locator("[data-hctg-item-id]").count() > 0,
        ),
    )
