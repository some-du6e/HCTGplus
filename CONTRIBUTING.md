# Contributing
no ai slop


## Chrome Web Store publish from GitHub Actions
The release workflow can publish directly to the web store for stable builds.

1. Add these repository secrets:
- `CHROME_EXTENSION_ID`
- `CHROME_CLIENT_ID`
- `CHROME_CLIENT_SECRET`
- `CHROME_REFRESH_TOKEN`
2. Run the `Release Chrome Extension` workflow manually.
3. Set `publish_to_store` to `true`.

Notes:
- Publish runs only for stable channel builds.
- Pushes to `main` still create GitHub releases, but do not auto-publish to the web store.
