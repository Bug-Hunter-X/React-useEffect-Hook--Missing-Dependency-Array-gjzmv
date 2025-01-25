# React useEffect Hook: Missing Dependency Array

This repository demonstrates a common error in React's `useEffect` hook: omitting the dependency array.  This leads to an infinite re-render loop because the effect runs on every render.

## Bug
The `bug.js` file contains a component that fetches data using `useEffect` without specifying a dependency array.  This causes the effect to run on every render, creating an infinite loop.

## Solution
The `bugSolution.js` file shows the corrected component with the dependency array included. The dependency array ensures the effect only runs when the relevant dependencies change.
