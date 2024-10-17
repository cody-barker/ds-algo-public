function printCharacters(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(i + ": " + string[i]);
  }
}

printCharacters("hello");

//You can make this function more space and time efficient by simply looping over the string without creating a new array to store your lines of strings.
//It's considered best practice to avoid using the var keyword unless absolutely necessary, to avoid scope errors later in your work. Use const or let instead.
//Your looping condition should be <, not <= because JS arrays and strings are zero indexed. In this scenario, you'll encounter an undefined variable on the last iteration.
//Otherwise it's formatted well and readable, but can be improved.
