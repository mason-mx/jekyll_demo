---
layout: post
title: C Qualifiers
description: Programming with C
categories: software
tags: programming
author: Mason
---

## Const in C

const是一个C语言的关键字，它限定一个变量不允许被改变。使用const在一定程度上可以提高程序的安全性和可靠性，另外，在观看别人代码的时候，清晰理解const所起的作用，对理解对方的程序也有一些帮助。

常量是被编译器放在内存中的只读区域，当然也就不能够去修改它。而“只读变量”则是在内存中开辟一个地方来存放它的值，只不过这个值由编译器限定不允许被修改。C语言关键字const就是用来限定一个变量不允许被改变的修饰符（Qualifier）。

在ANSI C 语言中用什么来定义常量呢？答案是enum类型和#define宏，这两个都可以用来定义常量。

C中常用:“ #define 变量名 变量值”定义一个值替代,然而却有个致命缺点:缺乏类型检测机制,这样预处理在C++中成为可能引发错误的隐患,于是引入const。
const使用: 　　

1.用于指针的两种情况:const是一个左结合的类型修饰符.

```
int const *A; //A可变,*A不可变 　　int *const A; //A不可变,*A可变
```

2.限定函数的传递值参数:

```
void function(const int Var); //传递过来的参数在函数内不可以改变.
```
　
3.限定函数返回值型.

```
const int function(); //此时const无意义
const myclassname function(); //函数返回自定义类型myclassname.
```

4.限定函数类型.

```
void function()const; //常成员函数, Const成员函数不能改变对象的成员函数。
```

例如：`int Point::GetY() 　　{ 　　return yVal; 　　}`这个函数被调用时，不改变Point对象，而下面的函数改变Point对象:`void Point:: SetPt (int x, int y) 　　{ 　　xVal=x; 　　yVal=y; 　　} `

为了使成员函数的意义更加清楚，我们可在不改变对象的成员函数的函数原型中加上const说明：

```
class Point
{
   　public:
    int GetX() const;
     int GetY() const;
     void SetPt (int, int);
     void OffsetPt (int, int);
     private:
     int xVal, yVal;
}; 　　
```

const成员函数应该在函数原型说明和函数定义中都增加const限定：

```
int Point::GetY() const 　　{ 　　return yVal; 　　}
class Set { 　　public: 　　Set (void){ card = 0; }
bool Member(const int) const;
void AddElem(const int); 　　//... 　　};
bool Set::Member (const int elem) const 　　{ 　　//... 　　}
```

非常量成员函数不能被常量成员对象调用，因为它可能企图修改常量的数据成员：

```
const Set s;
s.AddElem(10); // 非法: AddElem不是常量成员函数
s.Member(10); // 正确
```
　　
但构造函数和析构函数对这个规则例外，它们从不定义为常量成员，但可被常量对象调用（被自动调用）。它们也能给常量的数据成员赋值，除非数据成员本身是常量

## Inline

* 首先谈一下在C中使用这种形式宏定义的原因，C语言是一个效率很高的语言，这种宏定义在形式及使用上像一个函数，但它使用预处理器实现，没有了参数压栈，代码生成 等一系列的操作,因此，效率很高，这是它在C中被使用的一个主要原因。 　　

* 这种宏定义在形式上类似于一个函数，但在使用它时，仅仅只是做预处理器符号表中的简单替换，因此它不能进行参数有效性的检测，也就不能享受C++编译器严格类型检查的好处，另外它的返回值也不能被强制转换为可转换的合适的类型，这样，它的使用就存在着一系列的隐患和局限性。 　　
* 在C++中引入了类及类的访问控制，这样，如果一个操作或者说一个表达式涉及到类的保护成员或私有成员，你就不可能使用这种宏定义来实现(因为无法将this指针放在合适的位置)。 　　

* inline 推出的目的，也正是为了取代这种表达式形式的宏定义，它消除了它的缺点，同时又很好地继承了它的优点。

## Bonus

Platform_driver:
Drivers/Video/au1200fb.c
block driver:
character driver:
network driver:
