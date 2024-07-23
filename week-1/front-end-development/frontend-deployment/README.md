# Deploying a frontend app with Render

### Github setup 

**Make sure** to initialise your app with git, but if we hadn't, we would just need to run `git init` at this point

**Add** a `.gitignore` with the following:

```
node_modules
.DS_Store
```

**Run** the following commands:
- `git add .`
- `git commit -m "first commit"`

**Create** a Github public repository, connect it to the local repo & push the changes

### Deploy from a Github repo

**Head** to Render 

**Make sure** to choose `New Static Site` when choosing what type of service to deploy

**Follow** these steps to deploy code from your repo to Render: 
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
