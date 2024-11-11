let count = document.getElementById("count");
let time = 0;

let interval = setInterval(() => {
    count.innerText = `${time}k+`;
    count.style.fontSize = "60px"; // You can change this value as needed
    count.style.fontWeight = "bold"; // Optional: Make it bold
    
    time++;

    if (time > 30) {
        clearInterval(interval);
    }
   let h1=document.createElement("h2")
   h1.innerText="RESTAURANTS"
   count.append(h1)

}, 200);

let count1 = document.getElementById("count1");
let time1 = 0;

let interval1 = setInterval(() => {
    count1.innerHTML = `${time1.toFixed(1)}M`;  // Use toFixed to format it to one decimal place
    count1.style.fontSize = "60px"; // You can change this value as needed
    count1.style.fontWeight = "bold"; // Optional: Make it bold
    time1 += 0.1;  // Increment by 0.1

    if (time1 > 1) {
        count1.innerHTML = "1M";  
        clearInterval(interval1);
    }
  
   let h2 = document.createElement("h2");
   h2.innerText = "TEAM MEMBERS";
   count1.append(h2);
}, 600);

let count2 = document.getElementById("count2");
let time2 = 0;

let interval2 = setInterval(() => {
    count2.innerHTML = `${time2}`;  // Use toFixed to format it to one decimal place
    count2.style.fontSize = "60px"; // You can change this value as needed
    count2.style.fontWeight = "bold"; // Optional: Make it bold
    time2++;  

    if (time2 > 150) {
        clearInterval(interval2);
    }
    let h1=document.createElement("h2")
    h1.innerText="COUNTRIES WITH KFC"
    count2.append(h1)
}, 40);


let count3 = document.getElementById("count3");
let time3 = 0;

let interval3 = setInterval(() => {
    count3.innerHTML = `${time3.toFixed(3.5)}`;  // Use toFixed to format it to one decimal place
    count3.style.fontSize = "60px"; // You can change this value as needed
    count3.style.fontWeight = "bold"; // Optional: Make it bold
    time3 += 0.1;  // Increment by 0.1

    if (time3 > 3.5) {
        count3.innerHTML = "3.5";  
        clearInterval(interval3);
    }
  
   let h2 = document.createElement("h2");
   h2.innerText = "HOURS BEFORE NEXT KFC IS BUILT";
   count3.append(h2);
}, 80);



