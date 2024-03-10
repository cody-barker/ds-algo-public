def fibonacci(num)
  if num <= 1
    return num
  end

  a = 0
  b = 1
  i = 2

  until i > num do
    c = a + b
    a = b
    b = c
    i = i + 1
  end

  b
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
