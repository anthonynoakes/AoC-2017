#For each row
# determine the difference between the largest value and the smallest value
# the checksum is the sum of all of these differences.

import re
import sys

input = open('Day 2\input.txt', 'r').readlines()
total = 0;

for line in input:
    min = sys.maxint
    max = 0

    for seg in re.split(r'\t', line):
        val = int(seg)
        if val > max:
            max = val
        if val < min:
            min = val
    total += max - min
    print max - min
    
print total