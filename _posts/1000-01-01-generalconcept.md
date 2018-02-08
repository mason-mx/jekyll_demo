---
layout: post
title: Concepts in Software Industry
description: Understanding
categories: software
tags: Definition
author: Mason
---

## Computing

### Edge Computing

> Mobile Edge Computing (MEC) is a network architecture concept that enables cloud computing capabilities and an IT service environment at the edge of the cellular network. The basic idea behind MEC is that by running applications and performing related processing tasks closer to the cellular customer, network congestion is reduced and applications perform better. MEC technology is designed to be implemented at the cellular base stations, and enables flexible and rapid deployment of new applications and services for customers. Combining elements of information technology and telecommunications networking, MEC also allows cellular operators to open their radio access network (RAN) to authorized third-parties, such as application developers and content providers.

This is the definition according to Wikipedia

### 分布式计算 vs. 并行计算

相似点很简单，都是为了实现比较复杂的任务，将大的任务分解成小的任务，在多台计算机上同时计算。麻烦的是他们的区别，可能主要是以下几点吧，不太肯定。 

* 应用的场合和解决的问题不一样。分布式计算比较倾向于在计算寻找模式的东西，穷举暴力之类的计算。分布式的计算被分解后的小任务互相之间有独立性，节点之间的结果几乎不互相影响，实时性要求不高。而并行计算则比较倾向于一些海量数据进行分析处理的场合，每个节点的每一个任务块都是必要的，计算的结果相互影响，要求每个节点的计算结果要绝对正确，并且在时间上做到同步。举例来说，像MD5破解，就比较适合使用大规模的分布式计算来穷举，但对海量日志数据进行处理来分析用户行为就比较适合并行计算处理。 

* 实现方式区别比较大。分布式计算会是一个比较松散的结构，并行计算则是各节点之间通过高速网络或其它总线之类的东西连接。因此并行计算一般在企业内部进行，而分布式计算可能会跨越局域网，或者直接部署在互联网上，节点之间几乎不互相通信。很多公益性的项目，就是的使用分布式计算的方式在互联网上实现，比如以寻找外星人为目的的SETI项目。 

