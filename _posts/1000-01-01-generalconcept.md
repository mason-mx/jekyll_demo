---
layout: post
title: Concepts in Software Industry
description: Understanding
categories: software
tags: definition
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

## Graphic Technology

### OpenGL

OpenGL（全写Open Graphics Library）是个定义了一个跨编程语言、跨平台的编程接口的规格，它用于三维图象（二维的亦可）。OpenGL是个专业的图形程序接口，是一个功能强大，调用方便的底层图形库。

OpenGL™ 是行业领域中最为广泛接纳的 2D/3D 图形 API, 其自诞生至今已催生了各种计算机平台及设备上的数千优秀应用程序。OpenGL™ 是独立于视窗操作系统或其它操作系统的，亦是网络透明的。在包含CAD、内容创作、能源、娱乐、游戏开发、制造业、制药业及虚拟现实等行业领域中，OpenGL™ 帮助程序员实现在 PC、工作站、超级计算机等硬件设备上的高性能、极具冲击力的高视觉表现力图形处理软件的开发。

OpenGL的前身是SGI公司为其图形工作站开发的IRIS GL。IRIS GL是一个工业标准的3D图形软件接口，功能虽然强大但是移植性不好，于是SGI公司便在IRIS GL的基础上开发了OpenGL。OpenGL的英文全称是“Open Graphics Library”，顾名思义，OpenGL便是“开放的图形程序接口”。虽然DirectX在家用市场全面领先，但在专业高端绘图领域，OpenGL是不能被取代的主角。

OpenGL是个与硬件无关的软件接口，可以在不同的平台如Windows 95、Windows NT、Unix、Linux、MacOS、OS／2之间进行移植。因此，支持OpenGL的软件具有很好的移植性，可以获得非常广泛的应用。由于OpenGL是图形的底层图形库，没有提供几何实体图元，不能直接用以描述场景。但是，通过一些转换程序，可以很方便地将AutoCAD、3DS/3DSMAX等3D图形设计软件制作的DXF和3DS模型文件转换成OpenGL的顶点数组。

在OpenGL的基础上还有Open Inventor、Cosmo3D、Optimizer等多种高级图形库，适应不同应用。其中，Open Inventor应用最为广泛。该软件是基于OpenGL面向对象的工具包，提供创建交互式3D图形应用程序的对象和方法，提供了预定义的对象和用于交互的事件处理模块，创建和编辑3D场景的高级应用程序单元，有打印对象和用其它图形格式交换数据的能力。

OpenGL的发展一直处于一种较为迟缓的态势，每次版本的提高新增的技术很少，大多只是对其中部分做出修改和完善。1992年7月，SGI公司发布了OpenGL的1.0版本，随后又与微软公司共同开发了Windows NT版本的OpenGL，从而使一些原来必须在高档图形工作站上运行的大型3D图形处理软件也可以在微机上运用。1995年OpenGL的1.1版本面市，该版本比1.0的性能有许多提高，并加入了一些新的功能。其中包括改进打印机支持，在增强元文件中包含OpenGL的调用，顶点数组的新特性，提高顶点位置、法线、颜色、色彩指数、纹理坐标、多边形边缘标识的传输速度，引入了新的纹理特性等等。OpenGL 1.5又新增了“OpenGL Shading Language”，该语言是“OpenGL 2.0”的底核，用于着色对象、顶点着色以及片断着色技术的扩展功能。

OpenGL 2.0标准的主要制订者并非原来的SGI，而是逐渐在ARB中占据主动地位的3DLabs。2.0版本首先要做的是与旧版本之间的完整兼容性，同时在顶点与像素及内存管理上与DirectX共同合作以维持均势。OpenGL 2.0将由OpenGL 1.3的现有功能加上与之完全兼容的新功能所组成(如图一)。借此可以对在ARB停滞不前时代各家推出的各种纠缠不清的扩展指令集做一次彻底的精简。此外，硬件可编程能力的实现也提供了一个更好的方法以整合现有的扩展指令。

目前，随着DirectX的不断发展和完善，OpenGL的优势逐渐丧失，至今虽然已有3Dlabs提倡开发的2.0版本面世，在其中加入了很多类似于DirectX中可编程单元的设计，但厂商的用户的认知程度并不高，未来的OpenGL发展前景迷茫。

OpenGL是一个开放的三维图形软件包，它独立于窗口系统和操作系统，以它为基础开发的应用程序可以十分方便地在各种平台间移植；OpenGL可以与Visual C++紧密接口，便于实现机械手的有关计算和图形算法，可保证算法的正确性和可靠性；OpenGL使用简便，效率高。它具有七大功能：

* 建模：OpenGL图形库除了提供基本的点、线、多边形的绘制函数外，还提供了复杂的三维物体（球、锥、多面体、茶壶等）以及复杂曲线和曲面绘制函数。
* 变换：OpenGL图形库的变换包括基本变换和投影变换。基本变换有平移、旋转、变比镜像四种变换，投影变换有平行投影（又称正射投影）和透视投 影两种变换。其变换方法有利于减少算法的运行时间，提高三维图形的显示速度。
* 颜色模式设置：OpenGL颜色模式有两种，即RGBA模式和颜色索引（Color Index）。
* 光照和材质设置：OpenGL光有辐射光（Emitted Light）、环境光（Ambient Light）、漫反射光（Diffuse Light）和镜面光（Specular Light）。材质是用光反射率来表示。场景（Scene）中物体最终反映到人眼的颜色是光的红绿蓝分量与材质红绿蓝分量的反射率相乘后形成的颜色。
* 纹理映射（Texture Mapping）。利用OpenGL纹理映射功能可以十分逼真地表达物体表面细节。
* 位图显示和图象增强图象功能除了基本的拷贝和像素读写外，还提供融合（Blending）、反走样（Antialiasing）和雾（fog）的特殊图象效果处理。以上三条可使被仿真物更具真实感，增强图形显示的效果。
* 双缓存动画（Double Buffering）双缓存即前台缓存和后台缓存，简言之，后台缓存计算场景、生成画面，前台缓存显示后台缓存已画好的画面。

此外，利用OpenGL还能实现深度暗示（Depth Cue）、运动模糊（Motion Blur）等特殊效果。从而实现了消隐算法。
