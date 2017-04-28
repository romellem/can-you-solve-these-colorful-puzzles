https://fivethirtyeight.com/features/can-you-solve-these-colorful-puzzles/

-----

Looks like answer is:

**Distinct Balls**:  
 - 2: 1 turn (_base case_)
 - 3: 4 turns
 - **4: 9 turns (example in problem)
 - 5: 16 turns
 - 6: 25 turns
 - . . .

You see the pattern. For `n` distinct balls, on average, it takes `(n - 1)^2`
turns before the game stops.
