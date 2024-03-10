# def find_first_duplicate(arr)
#   store = Hash.new()
#   i = 0;
#   while i < arr.length
#     if store[arr[i]]
#       return arr[i]
#     else
#       store[arr[i]] = 1
#     end
#     i = i + 1
#   end
#   -1
# end

def find_first_duplicate(arr)
  store = Hash.new()
  arr.each do |element|
    return element if store.key?(element)
    store[element] = 1
  end
  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
