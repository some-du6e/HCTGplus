# HCTG+
Adds some qol features to [HCTG](https://game.hackclub.com) that i would like
## Feature list
Heres a list of what every file does
### `consts.js`
nothing much, just set the categories and dollars per hour
### `data.js`
parses the data-page from the app div and sets some stuff on `window.HCTG`
### `gallery.js`
sets the gallery projects on localstorage (probably a bad idea) and also changes every projects link to a new one
### `goals.js`
the main goal manager, gets hours done today and how much of the goal and all the calculations and also makes a "new" page
### `lander.js`
just adds a login button on the lander page so u dont need to add ur email
### `otherpersonprojectviewer.js`
adds a new page that gets the cached project(s) and creates a project card with the author and the demo links and everything
### `projects.js`
adds a green glow to projects that have been aproved
### `sidebar.js`
adds dollars and hours and goals if you have it, also adds goals tab
### `utils.js`
helper for running stuff