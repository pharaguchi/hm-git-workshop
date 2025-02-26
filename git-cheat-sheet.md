# Git Basics Cheat Sheet

### Setting Up Git
- `git config --global user.name "Your Name"` → Set your name.
- `git config --global user.email "you@example.com"` → Set your email.
- `git init` → Initialize a new Git repository.
- `git clone <repo_url>` → Clone an existing repository.

### Working with Files
- `git status` → Check the status of your working directory.
- `git add <file>` → Stage a specific file.
- `git add .` → Stage all changes.
- `git commit -m "Your commit message"` → Commit staged changes.
- `git commit --amend -m "New commit message"` → Modify the last commit message.

### Branching and Merging
- `git branch` → List branches.
- `git branch <branch_name>` → Create a new branch.
- `git checkout <branch_name>` or `git switch <branch_name>` → Switch branches.
- `git merge <branch_name>` → Merge a branch into the current branch.
- `git branch -d <branch_name>` → Delete a branch.

### Syncing with Remote
- `git remote -v` → Show remote repositories.
- `git pull origin <branch>` → Get latest changes from remote.
- `git push origin <branch>` → Push committed changes to remote.
- `git push -u origin <branch>` → Push and set upstream for easy future pushes.

### Viewing History
- `git log` → View commit history.
- `git log --oneline` → View a compact commit history.
- `git diff` → View changes between commits and working directory.
- `git show <commit_hash>` → View details of a specific commit.

### Undoing Changes
- `git reset <file>` → Unstage a file before committing.
- `git reset --hard <commit_hash>` → Reset to a previous commit (WARNING: Deletes changes!).
- `git revert <commit_hash>` → Create a new commit that undoes changes from a specific commit.

### Helpful Shortcuts
- `git stash` → Temporarily save uncommitted changes.
- `git stash pop` → Restore stashed changes.
- `git tag <tag_name>` → Tag a specific commit.
