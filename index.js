const cluster = require ('cluster');
//if the file is bean executed

if (cluster.isMaster) {
  //this cause execution of index,js in  a child mode
cluster.fork();
/*cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();
cluster.fork();*/



}else {
      //this section represent  an server
    const express = require('express');
    const app = express();

    function doWork (duration) {
      const start = Date.now();
      while (Date.now() - start < duration) {}

    }
    app.get ('/', (req,res) => {
      doWork(5000);
      res.send('Hello there');
    });

    app.get ('/fast' ,(req,res) => {
      res.send('This was fast');
    });

    app.listen(3000);
}
