---
layout: post
title: Scratchpads and why you need them.
date: 2025-11-18
description: Transformer architectures have various capabilities; but long addition isn't one of them. Why is this the case? 
---

Transformer architectures have various capabilities; but long addition isn't one of them. Why is this the case? 

Modern transformers have fixed configurations; i.e. they have fixed model dimensions, ffn layers, attention heads and most importantly, a fixed compute time. They cannot adapt their compute according to the problem at hand. Especially not for a problem that is sequential in nature, like long addition.

There are other models that allow for dynamically chosen amounts of computation time to be dedicated to a problem, like Neural Turing Machines. These models use recurrance to support extended computations.

A 'fix' to this problem is to use a *scratchpad*; Basically allowing the model to generate an arbitrary sequence of intermediate tokens ```<scratch> ... </scratch>``` before producing the final answer. Let us consider the case of addition.

```text
Input:
2 9 + 5 7
Target:
<scratch>
2 9 + 5 7 , C: 0
2 + 5 , 6 C: 1 # added 9 + 7 = 6 carry 1
, 8 6 C: 0 # added 2 + 5 + 1 = 8 carry 0
0 8 6
</scratch>
8 6
```

During training, the model is provided with the input and the target along with the scratchpad in a for a standard LM objective. During test, the model will be provided only the input, and will have to generate the scratchpad and the target, by beam search or temperature sampling. 

## So why a scratchpad?

Standard transformers don't have an adaptive compute time. 


Using a scratchpad, we give the model extra compute time, and it can process information for as long as needed. 

We can store intermediate state of computation in a buffer and reder back by attending the context, removing the need to store this information in the activatons. 

Lastly, by storing intermediate steps of computation, we can minimize propagation and compounding of small errors as states are quantized to token embeddings.

