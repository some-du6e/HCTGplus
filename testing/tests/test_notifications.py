from components.componenttest import test_component


def testNotifications(page):
    return test_component(
        page,
        "notifications.js",
        "https://game.hackclub.com/notifications",
        running_message="HCTG+: notificationsBetter running",
        check=lambda page: (
            "notifications page rendered",
            page.locator("#app").count() == 1,
        ),
    )
