const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Discuss-App:chatApp@discuss-app-sclyb.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true });


mongoose.connection.on('connected', () => {
  // console.log('hello')
  let curryingPractice =
    a =>
      b =>
        c => {
          console.log(a + ' ' + b + ' ' + c);
        };
  let curriedOnce = curryingPractice('Mongoose');
  let curriedTwice = curriedOnce('Is');
  curriedTwice('Connected!! (Curryied OVER!)');
  // curryingPractice('Is');
  // curryingPractice('Connected!');
});

mongoose.connection.on('error', (err) => {
  console.log(err, 'Mongoose failed to connect')
});


mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});
