# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a server can hang due to long-running requests in a single thread. The provided code simulates a long-running task that blocks the event loop, preventing the server from responding to other requests.

## Problem

The `server.js` file contains a simple HTTP server that simulates a long-running task (a `while` loop that runs for 5 seconds).  When this task is executed, the server becomes unresponsive to subsequent requests.  This is because Node.js uses a single-threaded event loop, and the long-running task blocks the event loop, preventing other events from being processed.

## Solution

The `server-solution.js` file offers a solution to this problem by using worker threads to offload the computationally intensive task to a separate thread. This prevents blocking the main thread and allows the server to remain responsive.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node server.js` to see the problematic server.
4. Run `node server-solution.js` to see the improved solution.

## Note

This example highlights the importance of asynchronous programming and using appropriate techniques like worker threads or Promises for long-running operations in Node.js to avoid blocking the event loop and maintaining the responsiveness of the server.