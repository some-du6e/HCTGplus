from components.componenttest import test_component


def testProjects(page):
    return test_component(
        page,
        "projects.js",
        "https://game.hackclub.com/projects",
        check=lambda page: (
            "projects page rendered",
            page.locator("#app").count() == 1,
        ),
    )
