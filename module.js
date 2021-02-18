let everyOther = () => {

    let a = ['My', 'has', 'many', 'open'];
    let b = ['brain', 'too', 'tabs', '!'];

    let newArray = [];

    for (let i = 0; i < a.length; i++) {
        newArray.push(a[i]);
        newArray.push(b[i]);
    };

    console.log(newArray);
}

let myArray = [1,2,3,4,5,6,7];

export default {everyOther, myArray};