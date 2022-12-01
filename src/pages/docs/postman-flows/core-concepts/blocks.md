---
title: "About blocks"
updated: 2022-11-15
---

Blocks are the atomic pieces used to create a flow. Every block has a specific purpose, such as performing tasks, creating data, transforming data, and much more.

## Contents

* [Fundamentals](#fundamentals)
* [Block anatomy](#block-anatomy)
* [Types of blocks](#types-of-blocks)

## Fundamentals

Every block has either an input, an output, or both. You can pass a message packet from one block to another. Blocks can perform tasks, have values, or run an operation. For more information on each block, see [Types of Blocks](#types-of-blocks).

> A block isn't a function but a process.

## Block anatomy

![](https://assets.postman.com/postman-labs-docs/block/updated-block-anatomy.png)

1. **Name** - Name of the block.

2. **Request to run** - Which request from your collection is going to be run.

3. **Send event input** - Starts running the block when this port receives an input.

4. **Environment** - Which Postman environment to use.

5. **Body Type** - Schema the request uses.

6. **Variables** - The variables that are either provided in the flow or from the environment.

7. **Success** - When the block returns a successful status code it emits the response data.

8. **Failure** - When the block returns an unsuccessful status code it emits the response data.

## Types of blocks

There are three types of blocks:

* **Task blocks** perform a particular asynchronous task.
* **Data blocks** create data of a specific type.
* **Logic blocks** perform actions on data to transform them. These are synchronous in nature.
