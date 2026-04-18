# Contributing
no ai slop


## cws action publishing
tbh its a pile of slop just use ai...
### instructions for agents
```md
## Release Workflow

The repository uses GitHub Actions workflow `Release Chrome Extension`.

Behavior:
1. Pushes to `main` create a release build and GitHub release artifact.
2. Manual runs can also publish to Chrome Web Store.

## Chrome Web Store Publish (Manual)

### 1) Configure repository secrets

Add these secrets in GitHub repository settings:

- `CHROME_EXTENSION_ID`
- `CHROME_CLIENT_ID`
- `CHROME_CLIENT_SECRET`
- `CHROME_REFRESH_TOKEN`

Path in GitHub UI:
`Settings -> Secrets and variables -> Actions -> Repository secrets`

### 2) Trigger publish

From GitHub:
1. Go to `Actions`.
2. Select `Release Chrome Extension`.
3. Click `Run workflow`.
4. Set `publish_to_store` to `true`.
5. Run it on `main`.

From CLI:

```bash
gh workflow run release-extension.yml -f publish_to_store=true
```

### 3) Verify publish step

Check the run logs for step `Publish to Chrome Web Store`.

CLI examples:

```bash
gh run list --workflow release-extension.yml --limit 5
gh run view <run_id> --json jobs
```

## Notes

- Manual publish with `publish_to_store=true` now forces stable release metadata for the run.
- If publish fails with auth errors, refresh/recreate `CHROME_REFRESH_TOKEN` and update secrets.
```