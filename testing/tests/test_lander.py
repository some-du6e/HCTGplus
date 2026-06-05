from components.componenttest import test_component


def testLanderComponent(page):
    return test_component(
        page,
        "lander.js",
        "https://game.hackclub.com/",
        error_codes=("WDZE8G", "9s8f7g", "EQBH7g"),
        running_message="HCTG+: betterLander running",
        check=lambda page: (
            "login link added",
            page.get_by_role("link", name="Log in").count() > 0,
        ),
    )
