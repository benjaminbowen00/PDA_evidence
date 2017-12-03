### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  #not necessary but best to have parameter in brackets
  if val = 1
    #this needs to be == so it is the comparison operator
  return true
  #this line should be indented
  else
  return false
  #this line should also be indented
  end
end

dif max a b
  #should be def to define a function
  #have parameters inside brackets separated by a comma
  if a > b
      return a
  #should only be indented once
  else
  b
  #better to have return b so it is clear that the function will end here.
  #should be indented
  #Also the function would return b when a and b are equal - this may be fine or an elsif condition could be used.
  end
end
end
#this second end is not needed

def looper
  #could put () to make it clear the function has no parameters
  for i in 1..10
  puts i
  #this line should be indented
  end
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
  #need to end the block with 'end'


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  #looks like a copy and paste from above without the necessary changes - should be "max(100,1) failed"
  failrues = failures + 1
  #typo -  should be failures
end


if failures
  #failures is 0 not nil so failures will always be true. Should be failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
