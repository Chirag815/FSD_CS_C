console.log("start");
setTimeout(() => {
    console.log("first task complited");
    setTimeout(() => {
    console.log("second task complited");
    setTimeout(() => {
        console.log("first task complited");
        setTimeout(() => {
            console.log("third task complited");
    },3000);
    },2000);
},1000);
console.log("End");