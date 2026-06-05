# Test coverage
- [X] consts.js
    - Not needed
- [X] data.js
    - Just checking for errors
    - TODO: some sort of javascript bs to check if the values are properly getting set
- [X] gallery.js
- [X] goals.js
- [X] lander.js
- [X] larping.js
- [X] larping_reviewing.js
- [X] larp_reviewer.js
- [X] notifications.js
- [X] otherpersonprojectviewer.js
- [X] projects.js
- [X] settings.js
- [X] shop.js
- [X] sidebar.js
- [X] utils.js

Each component has a separate Playwright test in `tests/test_<component>.py`.
Tests load the real extension, visit the component route, watch known console
error IDs, catch uncaught JavaScript errors, and verify visible page behavior.
