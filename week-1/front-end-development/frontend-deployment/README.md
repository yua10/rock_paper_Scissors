# Deploying a frontend application 

Workshop in which students deploy a frontend application to a cloud service provider

## Organisation

### Duration

30 minutes

## Learning objectives

- **Deploy** a frontend application using appropriate tools and techniques

## Sequence

### Introduction to deployment

**Remind** students what deployment means - running your code on someone elses computer that's accessible via the web - aka running the code in the "cloud"

**Re-iterate** the different platforms that can be used to deploy applications, e.g. AWS, Azure, Google, Heroku, Digital Ocean, Render, Netlify etc

**State** that we'll be using a new service today - Render

**Direct** students to [Render](https://render.com/) and get them to sign-in using Github

**Explore** the services available and in particular the free services
- Static site - for serving front-ends, e.g. HTML, JS and CSS
- Web service - another name for an API that's accessible over the web
- PostgreSQL - a database that we'll explore this afternoon

**Select** `New Static site` and note how it asks for a Github repository.

**State** that services like Render, AWS etc are capable of seeing when changes are made to a Github repository and then automatically redeploy the application. The details, depend on how the repo is set up - we'll come back to this.

### Github setup 

**Tell** students we've already initialised our app with git, but if we hadn't, we would just need to run `git init` at this point

**Explain** that we don't want to push our `node_modules` to our Github repository, so we'll need to use a `.gitignore` file

**Add** a `.gitignore` with the following:

```
node_modules
.DS_Store
```

**Run** the following commands:
- `git add .`
- `git commit -m "first commit"`

**Create** a Github public repository, connect it to the local repo & push the changes

**Describe** in high level terms that Render will essentially do what we do locally, i.e. `git clone`, `npm install`, `npm start`

### Deploy from a Github repo

**Revisit** Render's `New Static Site` dashboard

**Explain** the different ways auto-deployment works:
- The cloud service periodically checks a repos RSS activity feed (`https://github.com/:user/:repo/commits.atom`). Show the RSS feed for your repo.
- The owner of the repo has set-up a "webhook" which pings a specific server when changes are made. Show where webhook settings live in your Github repo.
- The owner of the repo authorises a Github App which automatically sets up its own webhook behind the scenes.

**Deploy** code from your repo to Render: 
- Select `Configure account` under Github
- Install the Render Github app
- Select `Connect` next to the Github repo with the frontend code
- Name - choose unique name for the static service
- Branch - should be `main` by default, but if there were more branches, you can switch to whatever branch needs to be deployed
- Root directory - it has to be wherever the `index.html` is - in our case, it can be left empty as our `index.html` is in the direct repo
- Build Command - this field usually includes any scripts that installs libraries or dependencies for the project to work or any scripts to launch the app (e.g - `npm install`/ `npm start`). In our case, it can be left empty as there isn't any dependencies that need to be installed for our project to work in production. 
- Publish directory - for a static site, Render will look for an `index.html` file by default, so we can just put `./` in this field. If our html file was called another way, we would have to specify this in the settings for Render to successfully deploy the site.  

**Click** on the `Create Static Site` button 

**Explore** the different tabs while deployment finishes, in particular: 
- Logs
- Environment
- Settings

**Test** out the frontend application in the browser once the site is live 

**Celebrate** their first deployment of a front-end

**Signpost** that now we've got our frontend deployed, they'll spend the rest of the day working on the challenges mentionned earlier 

**Direct** students to the following [exercise](https://github.com/LaFosseAcademy/discovery-student-repos/tree/main/week-1/front-end-development/fruit-salad-exercise)

---

[Back](./README.md)

---