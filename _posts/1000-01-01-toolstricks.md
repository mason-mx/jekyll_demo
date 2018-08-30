---
layout: post
title: Tools Tricks
description: Usage of popular softwares
categories: software
tags: software-usage
author: Mason
---

## Set Gvim Font

Now put a line in your vimrc to set guifont to this value, like this:

```
if has('gui_running')
  set guifont=Lucida_Console:h11
endif
```

## Screen

Screen Terminal Multiplexer
Screen Terminal Multiplexer also creates a new session with a single Terminal window and can be used and accessed from a single Terminal.

Install Screen Terminal Multiplexer in Ubuntu 14.04, Linux Mint and other Linux Ubuntu derivatives. Open Terminal and run the following command:

```
sudo apt-get install screen
```

How to Use Screen Terminal Multiplexer

Once you have installed the Screen Terminal Multiplexer, open it by typing screen in Terminal and press enter. You can control screen multiplexer with the following commands:

Screen Terminal Multiplexer Commands

![Screen-Commands](http://sourcedigit.com/wp-content/uploads/2014/09/Screen-Terminal-Multiplexer-Commands.png)

## Rsync

Refer to the [manual](http://man.linuxde.net/rsync).

To sync with my NAS, I use these commands in `MobaXterm` to remove useless files and upload changes:

```
export RSYNC_PASSWORD="BACKUP_PASSWORD_GOES_HERE"
rsync -av /var/backups/  rsync://backup@192.168.1.1:/backup/
find . -name "Thumbs.db" -exec rm -r "{}" \;
find . -name "englishpod_B*dg.mp3" -exec rm -r "{}" \;
rsync -rnv --size-only --delete /cygdrive/f/image/ rsync://image@192.168.1.98:/rsync/image
rsync -rv --size-only --delete /cygdrive/f/image/ rsync://image@192.168.1.98:/rsync/image
```

On NAS enable rsync on de share, I use the media share. Enable password en create a user and password for rsync.

On linux host use the rsync command:

```
rsync -rv /path/to/local/files rsync://username@ip-addres-nas:873/media
```

This will promt for the password for the user. If you use `-rnv` in stead of `-rv` you can check if it works without syncing (dry-run).

```
rsync -rv --delete Pictures/ rsync://rsync@10.65.12.246/rsync
rsync -rv --size-only Pictures/ rsync://rsync@10.65.12.246/rsync
rsync -rnv --size-only Pictures/ rsync://rsync@10.65.12.246/rsync
```

Refer to [Ubuntu下rsync同步文件实例](http://blog.csdn.net/bugouyonggan/article/details/21970867)

用户权限不够

```
rsync: recv_generator: mkdir "test" (in dest) failed: Permission denied (13)
*** Skipping everything below this failed directory ***
```

找了些资料，发现引起这个问题的原因是因为远程rsync的权限不够（是这样吗），不足以在目标目录下创建文件。
目前知道两个解决办法：
* 将目标目录dest的权限修改：`chmod 777 dest`；
* 在`rsyncd.conf`文件中加入`uid = root`和`gid = root`。

## VNC

```
sudo yum install tigervnc-server
```

## WGET

-O is the option to specify the path of the file you want to download to.

```
wget <file.ext> -O /path/to/folder/file.ext
```

-P is prefix where it will download the file in the directory

```
wget <file.ext> -P /path/to/folder
```

## Ubuntu中文输入法

```
sudo apt-get install fcitx fcitx-googlepinyin im-config
im-config
```

点击OK按钮，再点击Yes按钮，将fcitx设为默认的输入法框架，最后点击OK。
然后重启系统。在桌面右上角你会发现ibus的En图标不见了，fcitx的键盘图标会出现。 点击fcitx的键盘图标，选择text entry settings
在打开的窗口中点击+号
然后在文本框中输入pinyin查找谷歌拼音输入法，将其添加到输入法列表中。如果查找不到，重启系统后再试一次。
接下来你就能使用谷歌拼音输入法了。Ctrl+Space to switch to next source