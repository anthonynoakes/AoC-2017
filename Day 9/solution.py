# Read only first line.
input = open('Day 9\input.txt', 'r').readline()

inGarbage = False
depth = 0
total = 0
totalGarbage = 0
i = 0
while i < len(input):
    c = input[i]

    if c == '!':
        i += 1 # skip next
    elif inGarbage:
        if c == '>':
            inGarbage = False
        else:
            totalGarbage += 1            
    else:
        if c == '<':
            inGarbage = True
        elif c == '{':
            depth += 1
        elif c == '}' and depth > 0:
            total += depth
            depth -= 1
    i+=1

print (total, totalGarbage)