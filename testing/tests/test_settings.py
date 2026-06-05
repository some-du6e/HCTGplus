from components.componenttest import test_component


def testSettings(page):
    return test_component(
        page,
        "settings.js",
        "https://game.hackclub.com/me",
        running_message="HCTG+: addSettings running",
        check=lambda page: (
            "settings UI rendered",
            page.locator("#settingscontainer").count() == 1,
        ),
    )
