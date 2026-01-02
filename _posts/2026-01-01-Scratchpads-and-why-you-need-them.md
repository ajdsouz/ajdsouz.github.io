---
layout: distill
title: Scratchpads and you and I and language models need them.
date: 2026-01-01
description: Transformer architectures have various capabilities; but long addition isn't one of them. Why is this the case? 
---

## Yapping

Till about a month and a half ago, I was looking at papers on LLM reasoning, especially where they forego the **thinking** tokens and perform latent reasoning. In hindsight, that was a time to which I raise my glass and toast it to "Science". It started off with a project on DeepFake detection, where I had an idea to rephrase the problem of DeepFake detection into a reasoning task from a classification task. I'm pretty sure I got into that line of thought because of multiple factors like a lack of high quality annotated data and compute power. Well the idea did not work out the way I had imagined it would, but I think I understand thinking tokens better now.

## What is Reasoning?

It is important that we first define what reasoning is. The end goal of reasoning is that we have the correct answer to our task AND that we arrive to this conclusion through sound logic. Our process looks something like

$$\text{task} \rightarrow \text{thinking} \rightarrow \text{answer}$$

This is how humans reason about things. We take available information, think and have an answer. But what exactly happens during tinking? I mean, we distill information, track how the state of this information changes and arrive to a conclusion from the final state. Based on the task, we may ponder for a while or arrive at a conclusion quickly, or we may need a "memory" to store and track information, in the form of a "rough work" area.

## LLMS & Reasoning

On first thought, one may think language models should be capable of reasoning. I mean, they are trained with a language modelling objective, processing information token by token so that line of thought is not entirely wrong. The thing is, the model has full context of the task only at the last token- it has only one forward pass to come up with an answer. This is kinda insufficient compute time for the model to do reasoning  *and* find an answer. This is somewhat seen in GPT-3's performance on Arithmetic tasks {% cite LMFewShot %}, where next token prediction only sometimes works because there is no implicit or explicit state tracking going on (as a matter of fact, next token prediction does not even teach arithmetic rules).

A simple way to improve the reasoning performance is to provide the model with a 'scratchpad' to track information and fine-tune it by providing step-by-step 'reasoning', also called Chain of Thought. To do this, we'd need a dataset $\mathcal{D} = \{ {x_i, r_i, y_i} \}_{i=1}^{N}$, where $x$, $r$ and $y$ are task, rationales and solution respectively. During test time, the model is given the task and it has to generate the correct reasoning following with the solution. The reasoning usually goes between the ```<scratch> </scratch>``` tokens. This scratchpad is a simple yet clever adaptation to the model to provide it with a way to track state of information, but more importantly, adapt compute time to the problem. 

### Can we elicit reasoning without rationales?

I think trying to elicit reasoning without rationales is very difficult. Training on just ${(x,y)}$ not only fails to provide a strong learning signal, it also gives the model no mechanism to adapt its compute time to the problem. With no explicit relationship between the task and the solution path, the model is incentivized to shortcut—and often falls back to hallucinating plausible answers instead of reasoning.

There is active research into models that can adapt their compute dynamically, such as S1 {% cite S1 %}, Hierarchical Reasoning Model {% cite hrm %}, and more recently TRMs {% cite trm %}, but this remains an open problem.A common thread among this area of research is to make the model generate a latent form of reasoning for the task and to modify the architecture to be recursive, allowing the model to decide how much computation a problem requires.
