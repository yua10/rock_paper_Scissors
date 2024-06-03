# Steps to setup an SSH connection on Github (for Windows users)

These instructions are taken from the following [Github docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) - you can refer to it if needed

### 1. Generate an SSH Key Pair

- Open Git Bash.

- Generating an SSH key pair involves creating two files: a **private key (id_rsa)** and a **public key (id_rsa.pub)**. 

- Paste the text below, replacing the email used in the example with your GitHub email address:

  ```sh
  ssh-keygen -t ed25519 -C "your_email@example.com"
  ```

  **Note:** if you are using a legacy system that doesn't support the `Ed25519` algorithm, use:
  
  ```sh
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  **Note:** when you're prompted to `Enter a file in which to save the key`, you can press `Enter` to accept the default file location. Please note that if you created SSH keys previously, `ssh-keygen` may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace `id_ALGORITHM` with your custom key name.
  
  ```sh
  > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM): [Press enter]
  ```

### 2. Add the SSH Key to the SSH Agent

- The SSH agent is a program that runs in the background and keeps track of your private keys, so you don't have to enter your passphrase each time you use the key.

- Here is the **2nd** command to enter in your terminal:

  ```sh
  eval "$(ssh-agent -s)"
  ```

- This command starts the SSH agent in the background.


### 3. Start the ssh-agent in the background

- In a new admin elevated PowerShell window, ensure the ssh-agent is running. You can use the "Auto-launching the ssh-agent" instructions in `Working with SSH key passphrases`, or start it manually with this command:

  ```sh
  # start the ssh-agent in the background
  Get-Service -Name ssh-agent | Set-Service -StartupType Manual
  Start-Service ssh-agent
  ```

- In a terminal window without elevated permissions, add your SSH private key to the `ssh-agent`. If you created your key with a different name, or if you are adding an existing key that has a different name, replace `id_ed25519` in the command with the name of your private key file.

  ```sh
  ssh-add c:/Users/YOU/.ssh/id_ed25519
  ```

### 4. Add the Public Key to GitHub

- Copy the public key, using the following command:

  ```sh
  cat ~/.ssh/id_rsa.pub
  ```

- This command displays the contents of the public key file.

- Go to GitHub and navigate to: `Settings -> SSH and GPG keys -> New SSH key`

- Paste the public key into the provided field and save.

### 5. Test the Connection

- Test the SSH connection to GitHub, using the following command:

  ```sh
  ssh -T git@github.com
  ```

- A successful connection will result in a welcome message from GitHub.

### 6. Using SSH with GitHub Repositories

- You can clone a repository using SSH, with the following command:

  ```sh
  git clone git@github.com:username/repository.git
  ```

- Using SSH for interactions with GitHub repositories will not require entering the username and password for each operation.

