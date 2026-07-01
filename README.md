# Coding Assessments

This repository contains three React assessment projects submitted by the student.

## Projects

- `myfirstreact_source_A1/myfirstreact` — Basic React starter app.
- `scorecalculatorapp_source_A3/scorecalculatorapp` — Score calculator app with components and styles.
- `StudentApp_SourceCode_A2/StudentApp` — Multi-page student app with `About`, `Contact`, and `Home` components.

## How to run (each project)

For each project folder (example: `myfirstreact_source_A1/myfirstreact`):

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

4. Run tests (if present):

```bash
npm test
```

## Git & pushing

This workspace has been prepared for committing. To push to the remote GitHub repository that you provided (`https://github.com/Aakash-Lalwani/Coding-Assessments`), run these commands from the workspace root (`c:\Users\91985\Desktop\Asgns`):

```bash
# initialize repository (only run once)
git init
git checkout -b main

git add .
git commit -m "chore: add assessment projects"

git remote add origin https://github.com/Aakash-Lalwani/Coding-Assessments.git
# push to GitHub — you may be prompted for credentials or to authenticate via GitHub CLI

git push -u origin main
```

If push fails due to authentication, either authenticate with `gh auth login` (GitHub CLI) or create a personal access token and use that when prompted.

## Notes

- Each project is a normal `create-react-app` structure; installing dependencies is required before running.
- I created a `.gitignore` to avoid committing `node_modules` and build artifacts.

If you want, I can also create separate README files inside each project with more specific instructions, or try pushing now from this machine (you'll need to enter credentials in the terminal).