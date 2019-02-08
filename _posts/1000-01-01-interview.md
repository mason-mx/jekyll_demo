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

世界500强公司的面试问题

1. 你让某些人为你工作了七天，你要用一根金条作为报酬。这根金条要被分成七块。你必须在每天的活干完后交给他们一块。如果你只能将这根金条切割两次，你怎样给这些工人分？（摘自微软面试题）
2. 乌鲁木齐距离喀什1500公里。一列火车以每小时10公里的速度离开乌鲁木齐，朝喀什进发。另外一列火车以每小时20公里的速度离开喀什，朝乌鲁木齐进发。如果一只每小时飞行25公里的鸟同时离开乌鲁木齐，在两列火车之间往返飞行，请问当两列火车相遇时，鸟飞了多远？（摘自可口可乐面试题，地名已改动）
3. 假设时钟到了零点，注意时针和分针重叠在一起。在一天之中，时针和分针共重叠多少次？你知道它们重叠时的具体时间吗（只要计算第一次重叠的具体时间）？（摘自P&G面试题）
4. 如果你有一个5夸脱的水桶和一个3夸脱的水桶，如何准确量出4夸脱的水？（摘自可口可乐面试题）
5. 假设你有8个球，其中一个略微重一些，但是找出这个球的惟一方法是将两个球放在天平上对比。最少要称多少次才能找出这个较重的球？(摘自微软面试题)
6. 有4个女人要过一座桥。她们都站在桥的某一边，要让她们在17分钟内全部通过这座桥。这时是晚上。她们只有一个手电筒。最多只能让两个人同时过桥。不管是谁过桥，不管是一个人还是两个人，必须要带着手电筒。手电筒必须要传来传去，不能扔过去。每个女人过桥的速度不同，两个人的速度必须以较慢的那个人的速度过桥。
第一个女人：过桥需要1分钟；第二个女人：过桥需要2分钟；第三个女人：过桥需要5分钟；第四个女人：过桥需要10分钟。
比如，如果第一个女人与第4个女人首先过桥，等她们过去时，已经过去了10分钟。如果让第4个女人将手电筒送回去，那么等她到达桥的另一端时，总共用去了20分钟，行动也就失败了。怎样让这4个女人在17分钟内过桥？还有别的什么方法？(摘自微软面试题)
7. 如果你有两个桶，一个装的是红色的颜料，另一个装的是蓝色的颜料。你从蓝色颜料桶里舀一杯，倒入红色颜料桶，再从红色颜料桶里舀一杯倒入蓝颜料桶。两个桶中红蓝颜料的比例哪个更高？通过算术的方式来证明这一点。（摘自P&G面试题）

世界500强公司的面试问题与答案提示
　　　　
1. 有一个长方形蛋糕，切掉了长方形的一块(大小和位置随意)，你怎样才能直直的一刀下去，将剩下的蛋糕切成大小相等的两块？

答案：将完整的蛋糕的中心与被切掉的那块蛋糕的中心连成一条线。这个方法也适用于立方体！请注意，切掉的那块蛋糕的大小和位置是随意的，不要一心想着自己切生日蛋糕的方式，要跳出这个圈子。

2. 有三筐水果，一筐装的全是苹果，第二筐装的全是橘子，第三筐是橘子与苹果混在一起。筐上的标签都是骗人的，(比如，如果标签写的是橘子，那么可以肯定筐里不会只有橘子，可能还有苹果)你的任务是拿出其中一筐，从里面只拿一只水果，然后正确写出三筐水果的标签。

提示：从标着“混合”标签的筐里拿一只水果，就可以知道另外两筐装的是什么水果了。

3. 你有八个球。其中一个有破损，因此比其他球轻了一些。你有一架天平用来比较这些球的重量。如果只称两次，如何找出有破损的那个球？
4. 为什么下水道的井盖是圆的？

提示：方形的对角线比边长！

其他答案：1圆形的井盖可以由一个人搬动，因为它可以在地上滚。2圆形的井盖不必为了架在井口上而旋转它的位置。
5. 美国有多少辆车？
6. 你让一些人为你工作了七天，你要用一根金条作为报酬。金条被分成七小块，每天给出一块。如果你只能将金条切割两次，你怎样分给这些工人？
7. 一列时速15英里的火车从洛杉矶出发，驶向纽约。另外一列时速20英里的火车从纽约出发，驶向洛杉矶。如果一只鸟以每小时25英里的速度飞行，在同一时间从洛杉矶出发，在两列火车之间往返飞行，到火车相遇时为止，鸟飞了多远？

提示：想想火车的相对速度。
8. 你有两个罐子，分别装着50个红色的玻璃球和50个蓝色的玻璃球。随意拿起一个罐子，然后从里面拿出一个玻璃球。怎样最大程度地增加让自己拿到红色球的机会？利用这种方法，拿到红色球的几率有多大？
9. 假设你站在镜子前，抬起左手，抬起右手，看看镜中的自己。当你抬起左手时，镜中的自己抬起的似乎是右手。可是当你仰头时，镜中的自己也在仰头，而不是低头。为什么镜子中的影像似乎颠倒了左右，却没有颠倒上下？
10. 你有5瓶药，每个药丸重10克，只有一瓶受到污染的药丸重量发生了变化，每个药丸重9克。给你一个天平，你怎样一次就能测出哪一瓶是受到污染的药呢？

答案：给5个瓶子标上1、2、3、4、5。
　　　从1号瓶中取1个药丸，2号瓶中取2个药丸，3号瓶中取3个药丸，4号瓶中取4个药丸，5号瓶中取5个药丸。
　　　把它们全部放在天平上称一下重量。
　　　现在用1×10＋2×10＋3×10＋4×10＋5×10的结果减去测出的重量。
　　　结果就是装着被污染的药丸的瓶子号码。

11. 如果你有一个容量为5夸脱的水桶和一个容量为3夸脱的水桶，怎样准确地量出4夸脱的水？
12. 在开汽车的锁时，应该往哪个方向旋转钥匙？
13. 如果你可以移动50个州中的任何一个，你会挑哪个，为什么？
14. 有4条狗(4只蚂蚁或4个人)分别在一个广场的4个角落里。突然，它们同时以同样的速度追赶在自己顺时针方向的一个人，而且会紧追这个目标不放。它们需要多少时间才能相遇，相遇地点在哪里？

提示：它们将在广场中央相遇，所跑的距离与它们跑的路线无关。
15. 从空中放下两列火车，每列火车都带着降落伞，降落到一条没有尽头的笔直的铁道上。两列火车之间的距离不清楚。两列车都面向同一个方向。在落地后，降落伞掉在地上，与火车分离。两列火车都有一个微芯片，可以控制它们的运动。两个芯片是相同的。两列火车都不知道自己的位置。你需要在芯片中写入编码，让这两列火车相遇。每行编码都有一定的执行命令的时间。

你能使用以下指令(而且只能用这些指令)：

MF—让火车朝前开

MB—让火车朝后开

IF(P)—如果火车旁边有降落伞，这个条件就得到了满足。

GOTO
　　　　
答案：A：MF
　　　IF(P)
　　　GOTO B
　　　GOTO A
　　　B：MF
　　　GOTO B

解释：第一行只是让它们离开各自的降落伞。必须让它们离开自己的降落伞，这样后面的火车才能发现前面火车的降落伞，这样就满足了一个条件，它们就可以跳出起初遵守的编码。它们起初都在A这部分循环，直到后面的火车发现前面火车的降落伞，这时就转入B：并陷入B的循环。前面的火车还是没有找到降落伞，所以就不停地在A里面循环。由于每行编码都有一定的执行命令时间，完成A循环就比完成B费时，因此后面的火车(在B循环中)最终将赶上前面的火车。
