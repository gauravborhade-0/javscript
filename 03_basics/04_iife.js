//Immediately Invoked Function Expression(IIFE)

(function chai(){//(This is known as named IIfe)to avoid the problem of gloobal scope pollution we should use iise
    console.log('Db connected')
}) ();

((name) =>{  //This is know as unkonwn IIfe
    console.log(`DB connected Two ${name}`);
})('Gaurav')

