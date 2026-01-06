---
layout: distill
title: Be a better Software Engineer
date: 2025-12-19
description: On slowly becoming a better software engineer.
---

## Yapping

>*This section is context. Not a tutorial, not advice; just how I got here and what shaped the way I think about software.*

I started programming in 2016, at Junior College (what some of you may call A levels or 'Further Education' or '+2'). I learnt Web Development and I'm pretty sure that is when I decided to work exclusively on the backend. I despised JS (still do). I did not learn Python till the semester break of the second semester of my Bachelor's. I had exclusively focussed on C. (I will talk about why learning C as one of the first languages is better than learning C later in life in some other post). University education focuses on teaching the bare basics. It did for me. And that is great! Every learner must find their own path, through self-discovery. Force-fed knowledge is seldom used, and often doesn't explain the *why* of doing certain things.

## Better Software Engineering

Over this year, I think I have become a better Software Engineer. I am embarrassed that I was *not* one sooner but I am glad I found my way. Truth be told, it is hard to be a good SWE without knowing *what* a good SWE does. A lot of this knowledge is passed on through seniors and mentors, in one-on-ones with a project TL. I had no experience working in teams, or working in the industry in fact.

## So how to be a better SWE?

> *This is a live document; It has my experiences and things I've learnt over time. The goal is to track my progress as a SWE- I care about being better than my past self.*

### If it looks big and daunting, you've not broken it down enough

The first step (an obvious one) is to break the task into atomic components; things you see you will need immediately or are part of the core. Add them to a **Kanban** board. This board will give you a visual of the progress of the project. 

### Think before you start typing

Let's think of the architecture of the project. How do you want to structure it? Do you want it to scale? Who are the users? Answers to these questions will help you see your immediate goals through the fog of uncertainty and indecisiveness.

### Folders exist for a reason

> *Past me didn't care; present me suffers*

Now is the time to actually start working on the project. Remember, each language has an official / unofficial 'best practices' guide and you should read them. Most languages have a way to set up a project directory. For Python, I use [UV](https://docs.astral.sh/uv/) by [Astral](astral.sh), a Rust based fast package and project manager. You could also use Poetry. The benefit of using project managers is that they provide a way to solid structure (duh!) and package management your project. I was recently working on a project where I was pretraining a Language Model from scratch, along with 2 teammates. All of us used a different OS (I was on Linux, one was on Windows ARM), a Linux GPU server and so on. UV provides a way to specify optional dependencies in the ```pyproject.toml```. You may want to have different packages at each stage of your dev, staging and prod- project managers do that. 

### Version Control- So I can see when it all went wrong

Now that you have made a project directory, you should initialize a git repo to track your project over time. To add new features, create a branch, commit changes and open a pull request to merge with ```main```. You can avoid a huge mess of merge conflicts by developing on separate branches.

### Assume your code is wrong, before you've even written it

Before you write the core components, I suggest you write tests. This is Test Driven Development. Your tests go in ```tests/``` at the root of the project. Tests help catch bugs and undesirable behaviour early on making you think before writing about behaviour of the core logic. 

### Docstrings, because future me is an idiot

While writing code, you will need to write documentation. It will help your teammates and *future* you understand what's going on. [PEP 257](https://peps.python.org/pep-0257/) specifies how you write docstring for documentation in Python. Some extensions in VSCode will auto-generate a template docstring for your code. Use documentation generators like Sphinx for the project.

### Types are just honesty, enforced

One thing I see with a lot of devs is the lack of type-hints and type-checks in their code. The idea of type-hints is to explicitly state the behaviour of the code ([PEP 484](https://peps.python.org/pep-0484/)). If your function lets through an unintended type, you have lied about the behaviour of the function! Jk, but tools like mypy will highlight such errors before runtime. Type-hints are basically like comments, giving you more information about the parameters a function. It's always better to be explicit than implicit. Typecheckers like [typeguard](https://github.com/agronholm/typeguard) perform runtime checks of argument and return types of functions and classes.

## Conclusion

Looking back, none of this is revolutionary. But applying these ideas consistently changed how I work and how I think about software. This document will evolve as I learn more; the goal is simply to be better than I was yesterday.
