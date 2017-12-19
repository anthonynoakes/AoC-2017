import re

# Read only first line.
input = open('Day 10\input.txt', 'r').readline()
segs = map(int, re.split(r',',input))

sequence = []
for i in range(0, 256):
    sequence.append(i)
print sequence

position = 0
skip = 0
for idx, s in enumerate(segs):
    # reverse list, within s
    for p in range (0, s / 2):
        x = (position + p) % 256
        y = (position - p + s - 1) % 256
        hold = sequence[x];
        sequence[x] = sequence[y]
        sequence[y] = hold

    # move position and increase skip
    position = (position + s + skip) % 256 #255 ? 
    skip += 1

part1 = sequence[0] * sequence[1]
print part1