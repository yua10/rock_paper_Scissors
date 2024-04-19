# Version control - exercise 

Use your knowledge of version control (git + Github) to collaborate on a project effectively 

## Organisation

### Duration

You have **3 hours** to make as much progress on this task as possible.

### Team

Pairs of students

## Brief

**Please note that this is a continuation of the end to end project you've been working on for the past two days.**

The objective of the exercise is to transfer a basic website project (your end to end project) from local machines to GitHub and collaborate using version control with Git. The [Git flow document](../git_flow.md) can be used to help with the exercise. 

Instructions:

**Create GitHub Repository:**
- One member of each pair should create a new repository on GitHub to host the website project.
- Choose a descriptive name for the repository and add a brief description if necessary.
- Make sure to select the option to initialize the repository with a README file.

**Transfer Website Project:**
- The same member of the pair (let's call you partner A) should navigate to the directory containing their website project on their local machines.
- Initiate a Git repository in the project directory using the command `git init`
- Add all the files in the project to the staging area using the command `git add .`
- Commit the changes to the repository with a descriptive commit message using the command `git commit -m "Initial commit"`
- Link the local repository to the GitHub repository created earlier by copying the repository's URL and using the command `git remote add origin <repository_url>`.
- Push the local repository to GitHub using the command `git push -u origin main`.

**Collaboration:**
- The same member of the pair should make their partner collaborators of the Github repo (use this [link](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) for help)
- The other member of the pair (let's call you partner B) should now be able to clone the Github repository to their local machine using the command `git clone <repository_url>`.
- Partner B can now create their own individual branch off the `main` using `git checkout -b <branch-name>` or `git switch <branch-name>`
- Partner B can add their changes to the website project as needed, committing changes locally using `git add` and `git commit`.
- Partner B can push changes to the GitHub repository using `git push` (the first push will require a longer command provided by the terminal)
- Partner B can create a Pull Request (PR) from their individual branch to `main` using Github (use this [link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for help) & make sure to request a pull request review from your partner (Partner A) (use this [link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) for help)

**Testing and Review:**
- Partner A should now be able to access the Pull Request & review it - you can play around with the `Request changes` option but ultimately, you want to approve the PR
- Once approved, you should be able to merge the Pull Request to `main` & both members' code should now be on `main` 

**Updating local repo:**
- Both members should now be able to pull the latest changes from `main` using `git pull` to keep the local repository up to date with any changes made by Partner B 

**Conclusion:**
- Repeat the workflow again where partner A makes changes from their individual branch, create a PR & requests a review from partner B
- Simulate a merging conflict to practice handling them 
- Once the collaborative work is complete, reflect on the experience of using Git and GitHub for version control.
- Discuss the benefits and challenges encountered during the collaboration process.

## Output

Share the Github repository containing your end to end project code with your trainer
