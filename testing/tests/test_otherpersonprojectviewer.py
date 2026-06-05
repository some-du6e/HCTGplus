from components.componenttest import test_component


def testOtherPersonProjectViewer(page):
    return test_component(
        page,
        "otherpersonprojectviewer.js",
        "https://game.hackclub.com/me#view",
        error_codes=("4jv1mn", "a2q7kp", "8r3jwy"),
        running_message="HCTG+: projectViewer running",
    )
