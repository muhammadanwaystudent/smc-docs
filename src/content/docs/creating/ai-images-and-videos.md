---
title: Creating AI Images and Videos Overview
description: A work in progress guide for using AI to create SMC content.
tableOfContents:
  maxHeadingLevel: 5
---

For those interested in using AI to make images and videos, it can be quite overwhelming to get started. This page will attempt to simplify some things.

## Paid tools

As of right now, the best AI tools are paid services.

### Creating Images

1. [Adobe Firefly](https://firefly.adobe.com)

   This is probably the easiest tool to use, and if you spend time with it you can guide to toward refining the image to what you want pretty well

2. Stable Diffusion which is an open source tool, can be run at [RunDiffusion](https://rundiffusion.com) and [GridMarket](https://www.gridmarkets.com/ai-image-gen)

   This is a great option if you are also interested in trying to use your own GPU, because most of the interfaces here can be run on your computer. There is also a huge community for stable diffusion and flux, and you can "fine tune" [LoRAs](https://huggingface.co/docs/peft/main/en/conceptual_guides/lora) with relatively small amount of resources

3. [Midjourney](https://www.midjourney.com/home)

   This is a discord based service, so you'll pay for a subscription then it is best to create your own server and add the bot to it

4. [Openai DALLE3](https://openai.com/index/dall-e-3/)

   This is the most expensive, but a subscription lets you use the sora video tools as well. You can also create a custom GPT where you can configure it to make SMC style images reliably and quickly. If you have made one please share it in the discord.

### Creating Videos

Most of these are all around the same price, except Sora is twice as expensive

1. [Adobe Firefly](https://firefly.adobe.com)

   Both the image and video tools are public beta now

2. [Hailuoai aka Minimax](https://hailuoai.video)

   Highly regarded for its image to video abilities

3. [Klingai](https://klingai.com/)

   Before Minimax this was regarded as the best image to video

4. [Runway Gen3](https://app.runwayml.com/login)

   Reliable, opinion based but many consider this the 3rd best image to video

5. [Openai Sora](https://openai.com/sora/)

   If you have $20/ month subscription you can create videos sufficient for clips in short videos

## Use your own GPU

If you want to get into running image and video generation models on your own computer, there are some powerful resources available. You can create images as well as the paid tools, but video will be a struggle to get the same quality.

These tools can run on just a CPU with normal RAM but right now the best way to do this is with an Nvidia GPU. The cheapest entry point GPU at the moment would be a RTX 3060, and you can find them used. VRAM is the most important factor for running these models, and the 3060 comes with a respectable 12gb. Nvidia has the best driver support, but AMD and Intel are coming along.

1. [ComfyUI](https://www.comfy.org/download)

   This is a very powerful tool, that works to bring stable diffusion models to consumer grade hardware. It works by allowing users to create and share workflows for creating images with certain models and tools etc, here is a good resource for getting started [Runcomfy](https://www.runcomfy.com). It does support Intel and AMD GPUs, but with some exceptions. 

## Technique

For our purposes we want to generate two kinds of images, large horizontal images (9:16) to serve as "Hero" images for blog posts and vertical images (16:9) to use in short videos.

### Image Technique

Often times it can be very difficult to get the AI to make the images how you want with the turbans correctly, and other minor details. So usually the path of least resistance is to get an image close enough and then try to edit it manually.

#### Image Editing software

1. [Adobe photoshop](https://www.adobe.com/products/photoshop.html)

   This is the industry standard, but can be very complex to get started with. It costs $22 USD a month. It has many plugins and online resources available if you're willing to learn.

2. [Adobe Express](https://new.express.adobe.com/)

   This is a more user friendly and easier to use editing tool by Adobe. It has a nice mobile app and is very powerful. It can be used with limited features for free but costs $ 10 USD a month.

2. [Photopea](https://www.photopea.com)

   This is an ad supported free alternative to Adobe photoshop, loved by many but it is sort of "clunky".

3. [Figma](https://www.figma.com/login)

   This is a free tool, that isn't exactly designed to replace photoshop but it is quite powerful. It has a paid version, but all the features are available for free and the paid version mostly just let's you save more files.

4. [Penpot](https://penpot.app/pricing)

   This is a free version of figma, which is quickly growing in community support.

5. [GIMP](https://www.gimp.org)

   This is FREE software (like linux), and is very powerful but feels old and is also quite complex like photoshop.

6. [Canva](https://www.canva.com)

   This is a paid service, but will let you some features for free. This tool provides a lot of assets and templates for creating various types of images, and does have its own AI features built in. The full version costs $15 USD a month.



#### Image Editing tools

1. [Photoroom](https://www.photoroom.com)

   This is a free tool, it has editing ability but what it is really good for is removing objects from photos and removing backgrounds. Many consider it to be the best background remover.

   The trick to getting good object removal is to do it in small batches, where you only have it remove a small bit of the object at a time so it doesn't end up looking blurry.

### Video Technique

The "META" (most efficient technique available) for creating short videos with AI is to start with an image, and then use an image to video tool to "animate" it. Usually the AI tools won't give you a very long clip, and if they do they're often not very valuable.

Typically the best way to go is what the official youtube channel posts is a transition from our beloved Shaykh (QS) talking to an "animated" AI generated image, then back to our beloved Shaykh (QS) talking. This keeps people engaged and makes the AI videos seem much more impressive.

After you get your AI generated clips you'll need to stitch them together and add captions, which is done in a video editing software.

#### Video Editing Software

1. [Capcut](https://www.capcut.com)

   This is a very popular tool because it is easy to use compared to the alternatives. It also features AI caption creation with high quality audio to text AI. It is also the cheapest.

2. [VN Video Editor](https://www.vlognow.me)

   This is another tool similar to capcut, it is slightly more expensive but does try to offer some more "pro" features.

3. [Adobe Premiere Pro](https://www.adobe.com/products/premiere.html)

   This is about 23$/month but it is very powerful and is professional grade.

4. [Davinici Resolve](https://www.blackmagicdesign.com/event/davinciresolvedownload)

   This is a professional grade tool, but it is completely free and has a large community behind it.
