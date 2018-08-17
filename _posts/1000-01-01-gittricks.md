---
layout: post
title: Git Tricks
description: Source control tool
categories: software
tags: programming
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
git show commitID
git remote add origin ssh://git@10.5.20.16:/home/git/bigdata/deploy.git
git push origin master
git pull
```

## Get specific version by a commit ID

```
git reset --hard <commit-hash>
```

## Determine the URL that a local Git repository was originally cloned from

```
git remote show origin
```

## Branch

```
git checkout webnotes
```

Change old to new

```
git branch -m gh-pages gh-pages-beforebs
git branch -m webnotes-bootstrap gh-pages
git remote set-head origin gh-pages-beforebs
```

Set the Master branch to another on GitHub, then do

```
git push origin --delete gh-pages
git push origin gh-pages
git remote set-head origin gh-pages
```

## Merge

Update a branch then switch to another one

```
git push -u origin gh-pages
git checkout webnotes
```

Merge all commits
```
git merge origin/gh-pages
```

Merge files or a particular file, not the whole instead
```
git checkout gh-pages _sass/_base.scss
git checkout gh-pages-beforebs _posts
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

## Reset one or more commits

```
git reset --hard HEAD~1
```

Be cautious about doing this, since all your changes will be abandoned. So, please backup useful files in advance.

## Restore Deleted Files In Git

```
git log --diff-filter=D --summary
git checkout <COMMIT>^ -- <file>
```
![Demo](https://pic002.cnblogs.com/images/2012/26318/2012033016575974.png)

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
