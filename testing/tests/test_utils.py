from components.componenttest import test_component


def testUtils(page):
    return test_component(
        page,
        "utils.js",
        "https://game.hackclub.com/home",
        check=lambda page: (
            "utility namespace loaded",
            page.evaluate("typeof window.HCTG?.utils?.changeTag === 'function'"),
        ),
    )
