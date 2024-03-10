def reverse_string(str)
  reversed = ""
  i = str.length - 1
  while i >= 0 
    reversed += str[i]
    i = i - 1
  end
  p reversed == str
end

reverse_string("racecar")

# if __FILE__ == $PROGRAM_NAME
#   puts "Expecting: 'ih'"
#   puts "=>", reverse_string('hi')

#   puts

#   puts "Expecting: 'ybabtac'"
#   puts "=>", reverse_string('catbaby')

#   # Don't forget to add your own!
# end

# Please add your pseudocode to this file
# And a written explanation of your solution