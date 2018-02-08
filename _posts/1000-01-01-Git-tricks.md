---
layout: post
title: Git Tricks
description: Source control tool
categories: software engineering
tags: control
author: Mason
---

## Git add KEY and push

```
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub gituser@git.server.com
```

## Common usage

```
git clone ssh://git@10.5.20.16:/home/git/bigdata/deploy.git
cd deploy
cp folders and files here
git status –s
git add .
git status –s
git commit -m 'Initial commit'
git log
git remote add origin ssh://git@10.5.20.16:/home/git/bigdata/deploy.git
git push origin master
git pull
```

## Push to Gerit

```
git push origin <local_branch>:refs/for/<remote_branch>
git clone ssh://
cd webservice
git branch -a
git checkout -b dev-br1 -t origin/dev-br1
git push origin HEAD:refs/for/master
```

## Restore Deleted Files In Git

```
git log --diff-filter=D --summary
git checkout <COMMIT>^ -- <file>
```

> Note: the file name is Case sensitive

## Migrate SVN to GitHub

```
sudo apt-get install git-svn
git svn clone file:///hdd/svn/SVN_175/YoyoSetup ./YoyoSetup
git remote add origin https://github.com/mason-mx/YoyoSetup.git
git push -u origin master
```

## GitHub

…or create a new repository on the command line

```
echo "# web" >> README.md
git init
git add README.mdgit commit -m "first commit"
git remote add origin https://github.com/mason-mx/web.git
git push -u origin master
```

…or push an existing repository from the command line

```
git remote add origin https://github.com/mason-mx/web.git
git push -u origin master
```

…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

## Troubleshooting

> Error pushing to GitHub - insufficient permission for adding an object to repository database

```
sudo chown -R 1680154:1680154 app/
```
