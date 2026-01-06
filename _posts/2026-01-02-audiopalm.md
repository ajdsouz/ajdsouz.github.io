---
layout: distill
title: AudioPaLM
date: 2026-01-02
description: 
---

## Yapping

During my Bachelor's, I started watching Anime. Uni was not really exciting and most times I'd just read the recommended books for the class. When everythong moved online due to the pandemic, I found myself with with a lot of time on hand, with relatively little to do. I decided that the best use of my time would be to watch a lot of anime (this is also the time I came across Akira and Jin-roh). There were some that did not do that well in Japan so were not dubbed in English. It was a little frustrating to to find out that the studio discontinued international release halfway through the season. Around the same time, I had to come up with a topic for my B.Eng Final project. One day I was ranting about being unable to find an English dub of Season 4 (I think?) of Initial-D, a street racing series and thought "What if there was a way to use neural networks to dub videos?". Over the next 2 semesters, I managed to build a working prototype of a video / audio dubbing pipeline with okayish results. Also, funny enough, a day before my presentation, some guy releaded Tortoise-TTS, which basically dwarved my idea, but sparked this curiosity about audio models. 

Last winter, I presented about AudioPaLM in the Multimodality seminar by Dr. Varsha Suresh. This blog is just me going over the paper as I did in the presentation with some other stuff I learnt since then.

## How AudioPaLM works

The beauty of AudioPaLM lies in its simplicity- many models have tried performing Speech2SpeechTranslation (S2ST) before, either using multiple different models (the way I did it for my Bachelor's project) or used a god-awful looking architecture with tons of stability issues. The backbone of AudioPaLM is PaLM. You could use any decoder LM here. Lets call this $\mathcal{LM}$. Next, use an audio-encoder like Wav2Vec2 to generate audio embeddings, and cluster them, creating a vocab of size $\mathcal{A}, \mathcal{A} \ll \mathcal{T}$. Now, extend the embedding \& unembedding layers of \textt{LM} from $\mathcal{T}$ to $\mathcal{T+A}$. 

### Why use an audio encoder to generate audio tokens?

Why should you do this? Well, audio has a lot of datapoints in comparison to text. High quality audio (44.1kHz) has 44.100 datapoints in a second! Most text LLMs have a context of 8K tokens at max at training phase WITH a ton of compute, and have a lot more information. Audio, on the other hand, has a ton of data for a *single* second. One may think that by lowering the sampling rate will help with this problem, but we lose a ton of important information with lower sampling rates. A better way is to encode audio information into audio embeddings and somehow inject them into the transformer.  