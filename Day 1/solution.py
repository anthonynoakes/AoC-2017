
input = open('Day 1\input.txt', 'r').read()

length = len(input) - 1; # remove white space at end of file.
total = 0

for i, val in enumerate(input):
    if val == input[(i+length/2) % length]:
        total += int(val)

print total
