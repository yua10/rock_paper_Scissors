# Git/Github Flow 🏆

This is the Git/Github flow you will need to follow in your Project weeks: 

1. Choose a person from your group who will be in charge of **Steps 2-13**
2. This one person creates a folder on their local machine
3. Navigate to the folder and run `git init` to initialise the repo with Git
4. Add an initial `README.md` to the project using `touch README.md`
5. Add your change using `git add .`
6. Commit your change using `git commit -m "initialised repo with readme"`
7. Navigate to **Github** and create a new repo (click on the `+` symbol at the top of your Github page and click on `New repository`)
8. Run the following in your terminal: `git remote add origin <repo address here>`
9. Run the following in your terminal: `git push -u origin main` (may be `master` ) - after this, you should be able to reload your Github repo and see the `README.md` there
10. Create a **development** branch based off the `main` branch (this will be the branch where you will be testing your code before merging to main) - to do so, run `git checkout -b "development"` from the `main` branch
11. Add this branch remotely with `git push -u origin <branch-name>` (branch-name here should be `development`) - after this, you should be able to reload your Github repo and see the `development` branch
13. Make your peers collaborators of the Github repo - follow this [link](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) for help on how to do that
14. As a person who's been added as a collaborator, you will receive an invitation to accept. Once accepted, you will have to **clone** the repo to your own machines using `git clone <ssh-repo-link>`
16. Each individual in the team will then need to create an **individual** branch based off the `development` branch - to do so, run `git checkout -b "<name>"` from the `development` branch
18. Work on your individual branches then once happy with changes, **add**, **commit** and **push** your changes to your branch
19. Create a **PR** from your **individual** branch to the **development** branch
20. At least two people from the team will need to approve the **PR** 
21. Once approved, **merge** the PR to `development` 
22. Once merged, **check** it works fine on the `development` branch, then create a **PR** from the **development** branch to the **main** branch
23. Repeat **step 17** 
24. Merge to **main**
25. Always make sure to `git pull origin development` if you are in your individual branch or `git pull origin main` if you are in the development branch to get the latest changes

**NB** In reality you will probably create your project file structure etc. before sorting out your development branches etc. so that everyone in your group has a 'base' to work from.
