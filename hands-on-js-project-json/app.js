// let start = '{"favColor":"orange", "favSeason":"Fall"}';

// let myObject = JSON.parse(start);
// console.log(myObject);

// let myString = JSON.stringify(myObject);
// console.log(myString);

// let theData1 = '{"first":"Paul", "last":"Cheney", "city":"Salem"}';

// let myObj = JSON.parse(theData1);
// console.log(myObj);

// document.querySelector('.message').innerHTML = myObj.city;

// let theData2 = '{"Jane":{"age":"29","degree":{"AAS":"VMI","BA":"UVA"}}, "Jim":{"age":"49","":"MA"}}';
// let myObj = JSON.parse(theData2);
// console.log(myObj);
// document.querySelector('.message').innerHTML = myObj.Jane.degree.BA;


// let myReq = new XMLHttpRequest();
// myReq.open('GET', 'data.json', true);

// myReq.onload = function() {
//     let cup = JSON.parse(myReq.responseText);
//     console.log(cup);
// }

// myReq.send();


// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'data.json', true);
// xhr.responseType = 'text';

// xhr.onload = function() {
//     if(xhr.status === 200) {
//         let myStuff = JSON.parse(xhr.responseText);
//         console.log(myStuff);
//     }
// }

// xhr.send();

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'data.json', true);
// xhr.response = 'text';

// xhr.onload = function() {
//     if(xhr.status === 200) {
//         let myStuff = JSON.parse(xhr.responseText);
//         console.log(myStuff);

//         console.log(myStuff[0].first);
//     }
// }

// xhr.send();


let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);

xhr.onload = function() {
    if(xhr.status === 200) {
        let myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);

        for(let i=0; i < myStuff.presidents.length; i++) {
            console.log(myStuff.presidents[i].first);
            console.log(myStuff.presidents[i].last);
            console.log(myStuff.presidents[i].served);

            console.log(myStuff.vicepresidents[i].first);
            console.log(myStuff.vicepresidents[i].last);
        }

        let myString = '';

        for (let i = 0; i < myStuff.presidents.length; i++) {
            let value = i + 1;
            myString += `<br> President ${value} was ${myStuff.presidents[i].first} ${myStuff.presidents[i].last}. `;
            myString += `He served from ${myStuff.presidents[i].served} with ${myStuff.vicepresidents[i].first} ${myStuff.vicepresidents[i].last}. `;
        }
        document.querySelector('.message').innerHTML = myString;
    }
}

xhr.send();