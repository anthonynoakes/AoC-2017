
# Problem 1, math boo
    # input = 277678
    # Sqrt of 277678 =  ~526.95
    # need +- odds, 525 and 527
    #     (527 * 527) - (526 * 526) = 2104
    # get lend of sides
    #     2104 / 4 = 526
    # get location of input, get corner - location
    #     (527 * 527) - 277678 = 51
    # location of x
    #     (526 / 2) - 51 = 212
    # location of y
    #     (526 / 2) = 263
    # 
    # total distance = 263 + 212
    #     Solution 1: 475

# Problem 2
# 147  142  133  122   59
# 304    5    4    2   57
# 330   10    1    1   54
# 351   11   23   25   26
# 362  747  806--->   ..

# corners are sum of
#     previous
#     corner from level below

# non corners are sum of 
#     previous
#     one below
#     one below and over

# how to detect corner
#     number % (odd * odd) / 4 = 0

#What is the first value written that is larger than your puzzle input?

input = 277678