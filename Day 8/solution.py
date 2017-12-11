#For each row
# determine the difference between the largest value and the smallest value
# the checksum is the sum of all of these differences.

import re
import sys

def checkCondition(x, cond, value):
    result = {
        '>':  lambda x: x > value,
        '>=': lambda x: x >= value,
        '<':  lambda x: x < value,
        '<=': lambda x: x <= value,
        '==': lambda x: x == value,
        '!=': lambda x: x != value
    }[cond](x)

    return result

def processLine (segs, dict):
    # smi   inc 781   if epx >    -2
    # index op  shift    x   cond value
    # get value

    if len(segs) < 7:
        return

    index = segs[0]
    op = segs[1]
    shift = int(segs[2])
    x = segs[4]
    cond = segs[5]
    value = int(segs[6])

    if checkCondition(dict.get(x, 0), cond, value):
        if op == "inc":
            dict[index] = dict.get(index, 0) + shift
        else :
            dict[index] = dict.get(index, 0) - shift

    # if()

    return 0;

dict = {}

input = open('Day 8\input.txt', 'r').readlines()
total = 0;

for line in input:
    # split lines, and remove trailing newline charactor 
    segs = re.split(r' ', line.translate(None, "\n"));
    processLine(segs, dict);
    
key = max(dict, key=dict.get)
print (key, dict[key])

