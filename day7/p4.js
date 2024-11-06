const fetchdata = new Promise((resolve, reject) => {
    let data = [
        { id: 1, name: "Rahul", age: 22 },
        { id: 2, name: "Rahul", age: 21 },
        { id: 3, name: "Rahul", age: 23 },
        { id: 4, name: "Rahul", age: 29 }
    ];

    setTimeout(() => {
        resolve(data);
    }, 3000);
});

fetchdata
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
