 // const person = {
//       name: "John",
//       age: 20,
//       phone: "123456789",
//       email: "ezekiel@email.com",
//       isSubscribed: true,
//     };

//     const student = {
//       name: "Ezekiel",
//       age: 13,
//       score: 50,
//     }
//     console.log(student);
//     console.log("Hello " + student.name)
//     let person = new Map([
//       ["name", "John"],
//       ["age", 30],
//     ]);
//     person.clear();
//     person.delete("name")
//     console.log(person)
    
//     let number = [4,3,8,6,9,5];
//     let text = number.toString("number")
//     console.log(text)
//     let age = 20;
//     if (age >= 18 ) {
//       console.log("Adult");
//     } else {
//       console.log("Minor");
//     }
//    let userLoginIn = false;
//    if (userLoginIn) {
//     console.log("Login")
//    } else {
//     console.log("Error")
//    }
//   let batteryPercentage = 5;

//   if (batteryPercentage >= 80) {
//     console.log("Green");
//   } else if (batteryPercentage >= 20) {
//     console.log("Yellow");
//   } else {
//     console.log("Red");
//   }
//   let grade = 35;

//   if (grade >= 70) {
//     console.log("A");
//   } else if (grade >= 60) {
//     console.log("B");
//   } else if (grade >= 50) {
//     console.log("C");
//   } else if (grade >= 45) {
//     console.log("D");
//   } else {
//     console.log("Fail");
//   }
//   let day = "Monday"
//   switch (day) {
//     case "Monday":
//       console.log("Start of week");
//       break;
//       case "Friday":
//         console.log("Weekend is near");
//         break;
//         case "Wednesday": 
//         console.log("Mid week");
//         break;
//         default:
//           console.log("Just another day")
//   }
//       let Switch = "Green"
//       switch (Switch) {
//         case "Green":
//           alert("Go");
//           break;
//           case "Yellow":
//           alert("Ready");
//           break;
//           case "Red":
//           alert("Stop");
//           break;
//           default:
//             alert("Wait")
//       }
//       let age = 15;
//       let message = age >= 18 ? "Adult" : "Minor";
//       console.log(message);
//       let number = 21;
//       let result = number % 2 == 0 ? "Even" : "Odd";
//       console.log(result);
//       function greet() {
//         console.log("Hello world");
//       }

//       greet()
//       function greet(name) {
//         console.log("Hello " + name);
//       }

//       greet("John");

//       function add(a, b) {
//         return a + b
//       }
//       console.log(add(1, 2));
//       const example = (a, b) => a + b;
//       console.log(example(4, 2));
//       setTimeout(() => {
//         console.log("Hello world");
//       }, 10000)

//       function square(a) {
//         return a ** 2
//       }
//       console.log(square(5));

//       function even(a) {
//         if (a % 2 === 0) {
//           console.log( a + " is an even number");
//         } else {
//           console.log(a + " is an odd number");
//         }
//       }
//       even(10);

//       const fruits = ["Banana", "Orange", "Apple", "Mango"];
//       fruits.pop()
//       console.log(fruits)

//       const foods = ["Rice", "Beans", "Potato", "Yam"];
//       foods.push("Indomie")
//       console.log(foods)

//       let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//       let evenNumbers = 
//       numbers.filter(function(element) {
//         return element % 2 == 0;
//       });
//       console.log(evenNumbers);

//       const value = [10, 20, 30, 40, 50];
//       const result = value.find(function(value) {
//         return value > 25;
//       });
//       console.log(result);

//       let time = 24;

//       if (time < 10) {
//         console.log("Good morning")
//       } else if (time < 20) {
//         console.log("Good day")
//       } else {
//         console.log("Good evening")
//       }

//       let day = "Monday"
//   switch (day) {
//     case "Monday":
//       console.log("First day of week");
//       break;
//       case "Tuesday":
//         console.log("2nd day of the week");
//         break;
//         case "Wednesday": 
//         console.log("Mid week");
//         break;
//         case "Thursday":
//           console.log("Fourth day of the week");
//           break;
//           case "Friday":
//             console.log("Fifth day of the week");
//             break;
//         default:
//           console.log("Just another day")
//   }

//   let grade = 69;

//   if (grade >= 70) {
//     console.log("A");
//   } else if (grade >= 60) {
//     console.log("B");
//   } else if (grade >= 50) {
//     console.log("C");
//   } else if (grade >= 45) {
//     console.log("D");
//   } else {
//     console.log("Fail");
//   }

//   let num = 20;
//     if (num > 0) {
//     console.log(num + " is positive");
//   } else if (num < 0) {
//     console.log(num + " is negative");
//   } else {
//     console.log(num + " is zero");
//   }
      // const str = "she said hello to everyone"
      // const result = /she/.test(str)
      // console.log(result) 

      // const str = "My phone number is 123456789"
      // const result = /\s/.test(str)
      // console.log(result)

      // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      //const emailPattern2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/;


      //console.log(emailPattern2.test("testT12-ezekiel@example.com.ng"));
    // username = "Eze"
    //   document.querySelector(".paragraph").style.color = "blue";
    //   document.querySelector(".paragraph").style.fontSize = "30px";
    //   function example() {
    //     document.querySelector(".paragraph").innerHTML = username
    //   }

    // const button = document.querySelector("button");

    // button.addEventListener("click", function () {
    //   const message = document.createElement("p");
    //   message.innerText = "Registration successful";
    //   document.body.appendChild(message)
    // });

    // const btn = document.querySelector("#add-note-btn");

    // btn.addEventListener("click", function () {
    //   const note = document.createElement("p");
    //   note.innerText = "This is a note";
    //   document.body.appendChild(note)
    // })

    // const yesbtn = document.querySelector("#yes-btn");
    // const nobtn = document.querySelector("#no-btn");
   

    // yesbtn.addEventListener("click", function () {
    //   nobtn.remove();
    // })

    // nobtn.addEventListener("click", function () {
    //   yesbtn.remove();
    // })

    // const input = document.querySelector("input");
    // const btn = document.querySelector("button");

    // btn.addEventListener("click", function () {
    //   const inputValue = input.value;
    //   alert(inputValue);
    // });

    // const addButton = document.querySelector(".add-btn");
    // const removeButton = document.querySelector(".remove-btn");
    // const resetButton = document.querySelector(".reset-btn");

    // let counter = 0;

    // addButton.addEventListener("click", function () {
    //   counter++;
    //   document.querySelector("#counter").textContent = counter;
    // })
    // removeButton.addEventListener("click", function () {
    //   if (counter >= 1) {
    //     counter--;
    //   document.querySelector("#counter").textContent = counter;
    //   }
    // })
    // resetButton.addEventListener("click", function () {
    //   counter = 0;
    //   document.querySelector("#counter").textContent = counter;
    // })

// document.getElementById("addBtn").addEventListener("click", function () {


//   const input = document.getElementById("taskInput");
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("please enter valid input");
//     return;
//   }

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   const completeBtn = document.createElement("button");
//   completeBtn.textContent = "✅";
//   completeBtn.onclick = () => li.classList.toggle("completed")

// const deleteBtn = document.createElement("button");
// deleteBtn.textContent = "delete";
// deleteBtn.onclick = () => li.remove();

// li.appendChild(completeBtn);
// li.appendChild(deleteBtn);

// document.getElementById("taskList").appendChild(li);

// input.value = "";
// })


// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => console.log("error", error));

const getApi = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data  = await response.json();
  //  const filteredProduct=data.products.filter((p) => p.price <= 10);
    displayProducts(data.products)
    console.log(data.products)
  } catch(error) {
    console.error("Error", error);
  }
};


function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product";
    li.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>Price: $${product.price}</p>
    <p>${product.description.slice(0, 60)}...</p>
    <p>review: $${product.reviews[0].comment}</p>
    <p>Brand: ${product.brand}</p>
    <h4>Availability Status: ${product.availabilityStatus}</h4>
    <h5>Shipping Information: ${product.shippingInformation}</h5>
    `; //add the brand availability status and shipping information
    list.appendChild(li);
  })
}

window.addEventListener("DOMContentLoaded", getApi);
    

   
   
    