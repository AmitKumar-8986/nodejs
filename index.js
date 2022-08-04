const colors=require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
   
  // outputs red text
  console.log("this is an error".error);
   
  // outputs yellow text
  console.log("this is a warning".warn);

// outputs blue text
console.log("this is an debug".debug);
   
// outputs cyan text
console.log("this is a information".help);

// outputs rainbow text
console.log("this is an error".silly);
   
// outputs yellow text
console.log("this is a warning".warn);
