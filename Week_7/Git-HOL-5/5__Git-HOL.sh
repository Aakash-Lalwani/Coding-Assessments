#!/usr/bin/env bash
# ============================================================
# Git-T03-HOL_002 : Clean Up and Push Back to Remote Git
# Objective: Pull the latest remote history and push pending
#            local commits back to the remote repository.
#
# NOTE: This lab requires a real GitHub remote and a GitHub
# account (create one at https://github.com — do NOT use
# corporate credentials, per the lab prerequisites). The
# commands below are identical to what you would run against
# a real "origin" pointing at GitHub; only the remote URL
# changes. Substitute your own repository URL for
# <YOUR_GITHUB_REPO_URL> below.
# ============================================================

# ---- Step 1: Verify master is in a clean state ---------------
git status                                    # -> "nothing to commit, working tree clean"

# ---- Step 2: List all available branches ----------------------
git branch -a

# ---- Step 3: Add the remote (first time only) and pull --------
git remote add origin <YOUR_GITHUB_REPO_URL>  # e.g. git@github.com:you/repo.git
git remote -v
git config pull.rebase false                  # merge strategy for reconciling
git pull origin master --allow-unrelated-histories

# ---- Step 4: Push pending changes from Git-T03-HOL_002 ---------
git push origin master

# ---- Step 5: Confirm the changes are reflected in the remote ---
# On GitHub: open the repository in a browser and confirm the new
# commits/files appear. From the command line, a fresh clone proves
# the push landed on the server:
git clone <YOUR_GITHUB_REPO_URL> verify-clone
cd verify-clone
git log --oneline --graph --decorate --all
ls -la
