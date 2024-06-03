# Git/Github Summary 🏆

### Introduction to Git

- Project → Repositories or Repos
    - **Local** repository → stored on your machine/computer
    - **Remote** repository → stored on a server/ Github
- To initialise a repo - `git init` - make sure changes are tracked by Git (ONLY USED ONCE)
- `git status` - have an overview of the changes that have been tracked
- Tracking changes
    - `git add <name of file>` or `git add .`- add the change
    - `git commit -m "message"` - commit the change
- Pushing changes to Github - `git push`
- `git log` - have history of commits

### Five stages of Git

- Work area - where your current files are
- Staging area - where files are moved when you use the `add` command
- Local area/repo - where files are moved to once you commit them
- Remote area/repo - where files are moved to once they are pushed (on this later)
- Stash area
    - `git stash` - move files somewhere temporarily - when you don’t want to commit or lose changes when changing branches
    - `git stash pop` - bring back files

### Git branching

- `git branch` - check which branch you’re on
- `git checkout -b "<name-of-branch>"` - create a new branch (no space allowed when creating branches)
- `git checkout <name-of-branch>` / `git switch <name-of-branch>` - switch to another branch (no need to have quotes there)
- `git merge <branch-name>` - Merge a branch into another branch (you need to run this command from the branch you want to merge another branch in)
- `git branch -d <branch-name>` - Delete a branch (locally)
- `git push origin --delete <branch-name>` - Delete a branch (remotely)

### Introduction to Github

- Github - web-based platform for version control using Git → store repositories remotely, manage changes, collaborate on projects with other people etc…
- Once you create a repo on Github, you need to connect your push your local Git repo to the Github repo → `git remote add origin git@github.com:username/my-first-github-repo.git` (replace `username` with your GitHub username and `my-first-github-repo` with the name of their GitHub repository)
- N.B: if you branch is called master, you can rename it to `main` with `git branch -M main`
- Then, you’ll need to push the changes made in the local repository to GitHub with the following command: `git push -u origin main`
- After pushing the first time around, you can push any further changes with `git push` after doing `git add .` and `git commit -m "message"`
- Remember to always pull from main to have the latest changes with `git pull origin main`

### Collaborating on Github

- The two most commonly used methods for copying a repository on Github are cloning and forking
    - **Forking** a repository creates a copy of the repository under your own GitHub account. This allows you to make changes to the code without affecting the original repository. A fork differs from a cloned copy in that it doesn't allow for direct collaboration with the root using local commands such as `git push` and `git pull` . With a forked repo, you can only contribute back to the original project using `Pull Requests`, which will have to be approved by the owner of the original repository.
    - **Cloning**, on the other hand, is ideal for contributing directly to a repository alongside other users while utilizing branching and other collaboration tools to manage changes. Cloning a repository involves creating a local copy on your computer that you can sync with the remote on GitHub.
        - **In order to contribute to a cloned repository, they need to be added as `Collaborators` to the repo**
        - `git clone <repository-ssh-link>` - to clone a repo to your machine (copy a repo locally)
    
    —> Forking would be useful when contributing to an open-source repository where you can experiment with your own features and modifications for e.g while cloning is commonly used when contributing to a project directly within a team of developers. Cloning is the preferred method when it comes to your projects, so you will need to make sure that whoever creates the repo adds everyone from the group as collaborators
    
    ### Best practices (summary)
    
    - When starting a project, one person in the team will need to setup a Github repository
    - That same person will need to add everyone else from the group as collaborators to the repo
    - On the repository, you will need to have a `main` branch and a `development` branch based off the main - the `development` branch will be where code is tested before being merged to `main`
    - Each person in the group will then need to create their own individual branch to push their own changes. Each individual branch will be based off the `development` branch.
    - All changes will then be merged from your individual branch to your `development` branch to your `main` branch
    - It's important to always pull the latest changes from the `development` branch before adding/changing code. Same goes for the `development` branch synced with the `main`.

Refer to the [Git flow](./git-flow.md) steps for step-by-step guide on collaborating on Github!