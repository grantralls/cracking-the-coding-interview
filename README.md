# Coding Practice Problems
This repo is here to store and track Cracking the Coding Interview problems I practice. Everything is written in node using [tsx](npmjs.com/package/tsx). Which should not be confused with typescript enabled JSX. TSX stands for "typescript execute" which uses esbuild to run typescript in Node. The tsx command in this case is an alternative to the node command. None of the code written here is "runnable" in the sense of being used anywhere. The only place the solutions are ran are within the test files.

## Code Organization
- src/
    - chapter-name/
        - problem-number/
            - index.ts (solution)
            - test.ts (tests)

## Running tests
1. cd to the root of the repo
2. run `npm run test <problem-number>`
