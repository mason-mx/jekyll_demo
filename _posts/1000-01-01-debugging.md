---
layout: post
title: Coding and Debugging Tricks
description: Debugging
categories: software
tags: programming
author: Mason
---

## Debugging

### Run OpenHPC cluster

The Basic HPC with 2 compute nodes(named c0 and c1) should work, from ohpc-sms(10.64.0.76), with `sinfo` command you can see the compute node state.
To do an interactive job, you can run command `srun -N 2 -n 32 -t 00:30:00 --pty /bin/bash` to allocate resource, `-N` indicate node number, and `-n` indicate process, `-t` indicate required time, more detail can refer to the man page.
After get the resource, sms will auto login into the head compute node, then you can run job with `prun` command.
Before run job, you can check the modules status with `ml` command, and load any modules as needed.
To remote login into any compute node, you can use the `mrsh c0` command.

```
ml netcdf-fortran
prun ./wrf.exe
```

### 加上可执行权限

```
chmod +x myshell.sh
chown yangzongde testfile //修改文件拥有者为 yangzongde
chown -R your_username:your_group folder
```
### Find and replace strings in vim on multiple lines

```
:%s/foo/bar/g
:6,10s/foo/bar/g
```

Find each occurrence of `foo` (in all lines or from line 6 to line 10) and replace it with `bar`

### grep

`grep man * `会匹配 ‘Batman’、‘manic’、‘man’等，
`grep \'<man\' * `匹配‘manic’和‘man’，但不是‘Batman’，
`grep \'<man>\' `只匹配‘man’，而不是‘Batman’或‘manic’等其他的字符串。

### Find file

```
find . -name *.mp3 | wc -l
find /home/shantanu/processed/ -name '*2011*.xml' -exec cp {} /home/shantanu/tosend  \;
find . -name '*.phtml' -type f -mmin -30
```

find ./ -mtime 0：返回最近24小时内修改过的文件。
find ./ -mtime 1 ： 返回的是前48~24小时修改过的文件。而不是48小时以内修改过的文件。
那怎么返回10天内修改过的文件？find还可以支持表达式关系运算，所以可以把最近几天的数据一天天的加起来：
$ find ./ -mtime 0 -o -mtime 1 -o -mtime 2 ……虽然比较土，但也算是个方法了。

to exclude a specific file in fine

```
find $1 -name 'index.html' -prune -o -type f -name '*.htm' -print
```

## Coding

### GCC

```
gcc -o HelloWorld HelloWorld.c
gcc -o demo -g -rdynamic demo.c
```

### Patch

```
diff -urN old/ new/ > mysoft.patch
diff -q -urN -x *.o -x *.ko /home/wxing/workspace/sdk302/sdk-base/buildroot/output/build/linux/ linux/ > my.patch
```
