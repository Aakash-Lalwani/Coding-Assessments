#!/usr/bin/env bash
# ============================================================
# Git-T03-HOL_001 : Conflict Resolution Hands-On Lab
# Objective: Resolve a merge conflict created when master and a
#            feature branch both modify the same file.
# ============================================================

# ---- Step 1: Verify master is in a clean state -------------
git init
git config user.email "trainee@example.com"
git config user.name  "Git Trainee"
printf 'Initial repo setup on master\n' > README.md
git add README.md
git commit -m "Initial commit on master"
git status                                   # -> "nothing to commit, working tree clean"

# ---- Step 2: Create branch "GitWork", add hello.xml --------
git checkout -b GitWork
printf '<?xml version="1.0"?>\n<hello>\n  <message>Hello from branch</message>\n</hello>\n' > hello.xml
git add hello.xml
git status                                   # -> "new file: hello.xml" (staged)

# ---- Step 3: Update content of hello.xml, observe status ---
git commit -m "Add hello.xml on GitWork branch"
printf '<?xml version="1.0"?>\n<hello>\n  <message>Hello from branch - UPDATED</message>\n  <author>GitWork</author>\n</hello>\n' > hello.xml
git status                                   # -> "modified: hello.xml" (unstaged)

# ---- Step 4: Commit the branch changes ----------------------
git commit -am "Update hello.xml content on GitWork branch"

# ---- Step 5: Switch to master --------------------------------
git checkout master

# ---- Step 6: Add hello.xml to master with different content -
printf '<?xml version="1.0"?>\n<hello>\n  <message>Hello from master</message>\n  <author>master</author>\n</hello>\n' > hello.xml
git add hello.xml
git commit -m "Add hello.xml on master branch with different content"

# ---- Step 7: Observe the log ---------------------------------
git log --oneline --graph --decorate --all

# ---- Step 8: Check differences with git diff ------------------
git diff master GitWork -- hello.xml

# ---- Step 9: Visual diff (P4Merge) -----------------------------
# In a full desktop environment this step is done interactively:
#   git config --global diff.tool p4merge
#   git config --global difftool.p4merge.cmd "p4merge \$LOCAL \$REMOTE"
#   git difftool master GitWork -- hello.xml
# P4Merge opens a GUI window showing hello.xml side-by-side for
# master and GitWork, highlighting the changed <message>/<author>
# lines. (No GUI/display is available in this automated environment,
# so this step must be run on your own machine with P4Merge installed.)

# ---- Step 10: Merge the branch into master ----------------------
git merge GitWork
# -> CONFLICT (add/add): Merge conflict in hello.xml

# ---- Step 11: Observe the git mark-up ----------------------------
cat hello.xml
# <<<<<<< HEAD ... ======= ... >>>>>>> GitWork markers appear

# ---- Step 12: Use a 3-way merge tool to resolve the conflict ------
# Interactively:  git mergetool   (launches P4Merge / configured tool)
# Manual resolution used here (equivalent end result):
printf '<?xml version="1.0"?>\n<hello>\n  <message>Hello from branch - UPDATED</message>\n  <author>master merged with GitWork</author>\n</hello>\n' > hello.xml
git add hello.xml

# ---- Step 13: Commit the resolved merge ----------------------------
git commit -m "Merge branch GitWork into master, resolve conflict in hello.xml"

# ---- Step 14: Observe status; add backup file to .gitignore --------
touch hello.xml.orig                 # backup file left behind by merge tool
git status
echo "hello.xml.orig" > .gitignore
git add .gitignore

# ---- Step 15: Commit the .gitignore change --------------------------
git commit -m "Add backup file hello.xml.orig to .gitignore"

# ---- Step 16: List all available branches ----------------------------
git branch

# ---- Step 17: Delete the branch that was merged to master -----------
git branch -d GitWork

# ---- Step 18: Observe the final log -----------------------------------
git log --oneline --graph --decorate
