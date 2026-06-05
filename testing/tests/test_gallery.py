from components.componenttest import test_component


def testGalleryComponent(page):
    return test_component(
        page,
        "gallery.js",
        "https://game.hackclub.com/explore",
        check=lambda page: (
            "gallery rendered projects",
            page.locator("a[href*='/me?projectId='], .grid a").count() > 0,
        ),
    )
