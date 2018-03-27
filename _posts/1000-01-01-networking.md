---
layout: post
title: Networking
description: 
categories: software
tags: system
author: Mason
---

## How to Ping explicitly from eth1 instead of eth0

```
ping -I eth1 123.123.123.123
```

## Linux and Unix ifconfig command

```
ifconfig eth1 up
ifconfig wlan0 69.72.169.1
ifconfig eth1 netmask 255.255.255.0
ifconfig eth0 192.168.2.5 netmask 255.255.255.0 broadcast 192.168.2.7
```

## See if an ethernet device is up

```
ethtool eth0
```

## Set static IP address

### Ubuntu

```
sudo vim /etc/network/interfaces
auto eth0
iface eth0 inet static
address 192.168.0.101
gateway 192.168.0.1
netmask 255.255.255.0
dns-nameservers 8.8.8.8 8.8.4.4
systemctl restart networking.service
```

### CentOS

Refer to [Configure Static IP Address in CentOS](http://www.mustbegeek.com/configure-static-ip-address-in-centos/) and [CentOS IP/DNS setting](https://blog.csdn.net/iamfafa/article/details/6209009)

Modify the file named /etc/sysconfig/network-scripts/ifcfg-eth0 as follows:

```
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
PREFIX=24
IPADDR=192.168.2.203
GATEWAY=192.168.2.1
```

Then restart the networking service by running: `systemctl restart network` or `service network restart`

Then add `nameserver` into `/etc/resolv.conf` as: `nameserver 8.8.8.8`

For more servers, refer to [this link](https://support.rackspace.com/how-to/changing-dns-settings-on-linux/)

To use `ifconfig` instead of `ip addr` or `ip link` in a minimal installation of CentOS7, we could install net tools after accessing internet is passable

```
yum install net-tools
```

See also [this link](https://www.unixmen.com/ifconfig-command-found-centos-7-minimal-installation-quick-tip-fix/)
