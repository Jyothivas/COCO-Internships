// let Arr=[
//     {name:"Tejas",age:21},
//     {name:"Suresh",age:21},
    
// ]

// for(var i=0;i<Arr.length;i++)
// {
//     console.log(Arr[i]);
// }


//Adding function 
// Arr.push(["Suresh",50]);



// function add(n,a)
// {
//     n=Arr[2].name;
//     a=Arr[2].age;
// }

// add("Divyanshu",23);

// for(var i=0;i<Arr.length;i++)
// {
//     console.log(Arr[i]);
// }
// var names=["Tejas","Ramesh","Bitale"];
// console.log(names.length);
// console.log(names[0]);
// console.log(names[1]);

// hello("Tejas")

// function hello(name)
// {
//     console.log(`Hello,${name}`);
// }


// add1("Hey Tejas")
// function add1(name)
// {
//     console.log(`hello and ,${name}`)
// }

// const actors=["Tejas","Bitale"]
// actors[2]="Kadsm";
// console.log(actors);
// console.log(actors[1]);


// var msg=greeting("Tejas");
// console.log(msg);

// function greeting(name)
// {
//     return `Hello My name is , ${name}`;
// }

// var x={
//     greeting()
//     {
//         console.log("Greetings");
//     },
//     question(){
//         console.log("Question");
//     },
//     answer(){
//         console.log("Answer");
//     }
// }
// x.question();
// x.greeting();
// x.question();

// var arr=["1","42","100","1000"];
// for(let i=0;i<arr.length && arr[i]<100;i++)
// {
//     console.log(arr[i]);
// }

// function add(x,y)
// {
//     console.log(x+y);
// }
// add(2,3);

// class Page{
//     constructor(text)
//     {
//         this.text=text;
//     }
//     print()
//     {
//         console.log("text");
//     }
// }
// var x=new Page();
// x.print();


// class Add
// {
//     constructor(x,y)
//     {
//         this.x=x;
//         this.y=y;
//     }
//     print()
//     {
//         console.log("x is"+ this.x);
//         console.log("y is "+this.y);
//     }
    
// }
// var a=new Add(2,3);
// a.print();


// class intro
// {
//     constructor(name,age,phone)
//     {
//         this.name=name;
//         this.age=age;
//         this.phone=phone;
//     }
//     display()
//     {
//         console.log("Name "+this.name);
//         console.log("Age is"+this.age);
//         console.log("Phone number is "+this.phone);
//         console.log("Name type "+typeof(this.name));
//         console.log("type of age "+typeof(this.age));
//     }
// }
// var x=new intro("Tejas",25,8975948527);
// x.display();


// class publication
// {
//     constructor(author,title,publication)
//     {
//         this.title=title;
//         this.author=author;
//         this.publication=publication;
//     }
//     print()
//     {
//         console.log(`Title:${this.title}Author:${this.author}Publication:${this.publication}`);
//     }

// }
// class book extends publication
// {
//     constructor()
//     {
//         constructor()
//         {
           
//             super(author,title,publication);
//             this.price=price;
//         }
//         print()
//         {
//             super.print();
//             console.log(`Price:${this.price}`);
//         }
//     }
// }
// var pub=new book("Yeh diwani haai jawani","PL Lokhande","Disha Patani",32.00);
// pub.print();