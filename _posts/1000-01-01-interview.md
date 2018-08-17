---
layout: post
title: Interview Questions
categories: career
tags: interview
author: Mason
---

高通面试题：

　　1. Can you describe the trend of wireless mobile communication industry? (2000 letters)

　　2. Compare the major third generation technologies.(2000 letters)

　　3. Describe the characteristics of Walsh function. Explain how to generate Walsh Function. (2000 letters)

　　4. List factors that will affect the capacity of forward and reverse links of a CDMA system. (2000 letters)

　　5. What are the differences between IS-95 A/B and cdma2000 1X? (2000 letters)

1. Write code: check if 'a' is in a c style string
    follow up: what if the string never ends.
2.describe scope variable 
3.difference of preempritve and round robin. 
4.describe thread safe programming, sample code. 

[5-10] project related questions. -go

en, below are the two questions they asked, depends on the answer, it can go many different ways.  Keep in mind there are many possible answers. 

If you are writting a program for a DSP processor, you found it to be slow, what are possible causes? How would you optimize your program?

Naturally, this is a very board and very general question, so your answer can vary greatly.  For example, I answered one of the possible reason is due to memory conflict, then they asked me how would you optimize against memory conflict.  Then I said you have to figure out what kind of conflict first. Then they said assuming bank conflict ... You get the picture.  For me, this Q and A took nearly two hours (I was on site).  Other possible answers are scheduling, the lack of SIMD unit, etc, and I had to go into detail on each and everyone of them.

After the programming question, they asked me about DSP algorithms.  They asked me about Kalman filter, Kalman smoother, Markov, Hidden Markov, 3D programming (mainly linear algerba), and Transform theory, etc  Your garden varity questions regarding signal processing, no big deal if you studied them

They gave me an offer right away after the interview, but I heard for on-campus, it could take a while even if your interview went well.
  
Anyway, good luck

“給你20個易碎燈泡(這些燈泡到了一定高度就會碎裂)和一棟一百層高的大樓，你如何確定燈泡在什麽高度會碎裂?”——高通公司(Qualcomm)工程師面試題。

汇总自己经历了一些来自百度，360 ，淘宝，腾讯，高通中国，htc 上海 的电话面试及现场面试，还有笔试相关题目
百度：百度在北京中关村上地七街奎科科技大厦，不大但是很安静的一个办公地点。

百度技术面试分为两轮，第一轮基础技术面试，一般为项目负责人，主要考察基本知识及知识广度，第二轮面试一般为部门负责人，主要考察技术深度。基础面试感觉个人答的还不错，主要询问了一些关于android 基本知识的考察，涉及到Activity 之间的跳转，然后问了一些关于所参与项目中遇到的问题，比如现在做的云信项目中，如何提供传输效率等，然后讨论了一下关于View 刷新机制等问题。总体来看一面比较容易，时间差不多一个半小时。
第二轮面试，面试官看起来挺严肃的，当然由于是考技术深度，所以难度加大了，当然自己也败在这里边了。由于看到简历边有说JNI 这块，他就特地主要文这块了，所有问题基本都是以C 和数据结构为主。
主要问道：
1.  实现Strlen （char* str ）
2. 说说常见的两种数据结构之间的区别，这里边问道了MAP,TREE, 队列，数据，栈等。并且说说时间复杂度及空间复杂度。
3. 说说地图定位方式，详细说说wifi 定位是如何实现的。
总体而言，之所以答的不好，对常见的数据结构确实并不是很熟悉，没有做好充分准备，建议如果去面试，好好复习《剑指名企Offer 》。第三个问题，面试官让发挥想象去考虑wifi 是怎么实现定位的，没有答出来。
 
360 ：位于北京朝阳区大望路地铁站不远处，办公地点环境很好。

涉及的主要问题：
1.  笔试，hashcode 与 equals （）区别？
2.  冒泡排序算法实现
3.  常见的排序算法时间复杂度
4.  dp,px,sp 区别及使用场景
5.  lauchmode 及应用场景
6.  说说你对android 的理解。
7.  Android sqlite3 是否支持并发访问？
8.  有没有遇到过各个版本之间android api 接口的区别？试列举1~2 个
9.  Android wap 访问方式。
360 此次面试总体而言，表现挺失败的，笔试题没有答好。面试也没表现好。
 
腾讯面试：地点在腾讯大厦隔壁的楼里边。

腾讯在电话面试中主要问道了：
1.  C++ 引用与指针的区别。
2.  Android aidl 原理。
3.  如何保证service 在后台不被kill
现场笔试题如下：
1.  Broadcast 生命周期。
2.  Requestlayout ，onlayout ，onDraw ，DrawChild 区别与联系
3.  Invalidate 与 postInvaliate 区别
4.  Android 2D 动画框架实现原理
5.  Java 状态机
6.  线程wait(),yelid(),sleep() 区别
7.  Java 垃圾回收机制
8.  两种单例模式的实现方式
9.  与操作
10. 递归算法
11. Map 原理
12. Java 中int char long 各占多少字节数
13. Android 为每个应用程序分配的内存大小是多少？
14. Integer 与Int 的区别。
笔试大概耗时30 分钟。
面试过程中，主要是问关于算法与数据结构的题，问了C 里边比较经典的一个算法题，求一个数N 的2 进制表现形式中1 的个数。如3 （0x0011 ）中为2 个。
没答出来。
腾讯面试兼顾android 及java 基础知识，并且在面试中主要考察数据结构与算法，但是面试前没有花时间与精力复习此。悲剧的收场。
 
淘宝：淘宝面试只参与了电话面试，电话面试耗时约1 小时，在电话面试中主要问了如下问题：
1.  自我介绍
2.  参考自我介绍，问了很多关于目前所做项目中遇到的问题
3.  在项目中遇到的最大的问题，回答，listview 图片缓存机制。
4.  项目亮点：网络架构，说说对AsyncTask 的理解。
5.  如何防止service 被kill 掉。
6.  说说View 的刷新机制。
7.  对Java 虚拟机的理解。Java 内存回收机制的理解。
8.  AIDL
淘宝电话面试时由于当时刚入门android 没多久，只接触了一个项目，项目经验不够，并且由于对java 理解很浅，所以得到的面试结果是：技术基础还可以，但是技术深度不够。
 
Qualcomm 中国：
Qualcomm 简历是在51job 上投放的，这也是唯一一个通过网投简历获得的面试机会，其余全都是通过内部推荐获取，这也验证了，其实网投被HR 看到的几率是很低，效率不高。不能完全依赖网投的方式进行找工作。、
此次电话面试的是Qualcomm 中国上海的 android 研发测试工程师，虽然是测试工程师职位，但是在面试过程中问到的问题，丝毫不比开发工程师难度低并且远胜过开发职位。
具体面试问题如下：
1.  谈谈对SurfaceView 的理解
2.  如何防止进程死锁。
3.  OO 里边多态的概念
4.  ContentProvider 实现原理，为什么能够共享数据
5.  下载模块的优化
6.  A a 与 A a = new A(); 的区别
7.  说说常用的Intent Flag 。
具体问题，目前只记得这几个了，但是面试交谈大概耗时一个小时，一个小时中问道了很多问题，包括linux 系统知识，OO ，C/C++ 知识，android 及java 。覆盖范围比较广。
 
HTC 中国上海：
HTC 面试也是通过网投的。看来HTC 跟Qualcomm 等外企通过网投的概率比较大。
HTC 也是采取电话面试：
HTC 电话面试，从对方听筒的声音来看，对方一共有5~6 人参与面试，包括技术与人力。鸭梨山大。
主要问道如下问题：
1.  AIDL
2.  强引用，软引用，弱引用之前的区别
3.  Epub 格式解析过程
4.  网络访问方式。
5.  Davink 与jvm 的区别
6.  Jni 相关知识
7.  ConentProvider 实现过程，这个比较偏像于如何实现。
8.  数据库联表查询。
9.  抽象类跟接口的区别。
总体来看，其实HTC 电话面试所问问题相对都比较容易答上，并且实际情况也是很容易通过电话面试了，但是考虑到个人职业规划安排，后续没有去上海总部面试。
 
经历过以上这些面经历，发现自己学到很多，也认识到很多不足：
1. 在不断的面试过程中，自己对如何自我介绍这个环节有了一定提高，比如在baidu 的面试自我介绍过程中，完美结合自己对产品的理解，以及如何把这个理念在开发中实现，摆脱了之前面试一位的补充简历的弊端。
2. 通过不断的面试，发现了自己在技术上的不足，找到了后续提高的点。技术深度上下苦工，并且面试前要好好做好数据结构复习。
3. 面试过程中，适度的低调，隐藏自己的知识面，通过 虽然我不知道是怎么做的，但是我想**** 这种方式来增强面试官对你的印象。
接下来自己要努力的点：
1.  解决上述面试过程中遇到的问题。
2.  在平时的工作中，多问为什么，多想想优缺点。
3.  研究SurfaceView ，JNI,view 工作原理，2D 动画框架
4.  深入理解BINDER,CONTENTPROVIDER 。
5.  深入学习java ，多问几个为什么。
