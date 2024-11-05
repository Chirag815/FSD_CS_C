async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        if (name === "burger") reject("burger not available");
        setTimeout(() => {
            resolve("Order for " + name + " has been prepared");
        }, time);
    });
}

async function restaurant() {
    console.log("Order food");
    let pizza;
    try {
        pizza = await orderfood("pizza", 2000);
        console.log(pizza);
    } catch (error) {
        console.log(error);
    }

    try {
        let burger = await orderfood("burger", 3000);
        console.log(burger);
    } catch (error) {
        console.log(error);
    }

    try {
        let noodles = await orderfood("noodles", 4000); // Changed "burger" to "noodles"
        console.log(noodles);
    } catch (error) {
        console.log(error);
    }

    console.log("All orders prepared");
}

restaurant();