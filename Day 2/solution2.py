#For each row
# find the only two numbers in each row where one evenly divides the other
# find those numbers on each line, divide them, and add up each line's result

import re
import sys

input = open('Day 2\input.txt', 'r').readlines()
total = 0

for line in input:
    x = 0
    y = 0

    segs = re.split(r'\t', line)
    for i, nseg in enumerate(segs):
        n = int(nseg)
        for p, mseg in enumerate(segs):
            if i != p:
                m = int(mseg)
                if(m / n > 0 and m % n == 0):
                    x = n
                    y = m
    a = x if x > y else y
    b = x if x < y else y
    total += a / b
    
print total
