let products = [
    {
        id:1,
        name:"red and black shirt",
        price:1000,
        image:"./Images/shirt1.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:2,
        name:"nice cap",
        price:300,
        image:"./Images/cap1.jpg",
        category: "cap",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:3,
        name:"awesome shoe",
        price:500,
        image:"./Images/shoe1.jpg",
        category: "shoe",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:4,
        name:"nice trouser",
        price:1000,
        image:"./Images/trouser1.jpg",
        category: "trouser",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:5,
        name:"awesome",
        price:1000,
        image:"./Images/shoe2.jpg",
        category: "shoe",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:6,
        name:"awesome trouser",
        price:1000,
        image:"./Images/trouser2.jpg",
        category: "trouser",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:7,
        name:"cool shirt",
        price:1000,
        image:"./Images/shirt5.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:8,
        name:"awesome shirt",
        price:1000,
        image:"./Images/shirt4.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:8,
        name:"good cap",
        price:1000,
        image:"./Images/cap3.jpeg",
        category: "cap",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:9,
        name:"best shoe",
        price:1000,
        image:"./Images/shoe3.jpg",
        category: "shoe",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:10,
        name:"red and black shirt",
        price:1000,
        image:"./Images/shirt1.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:11,
        name:"nice shirt",
        price:1000,
        image:"./Images/shirt3.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:12,
        name:"Nice trouser",
        price:1000,
        image:"./Images/trouser3.jpg",
        category: "trouser",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:13,
        name:"fancy cap",
        price:1000,
        image:"./Images/cap2.jpg",
        category: "cap",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:14,
        name:"good shirt",
        price:1000,
        image:"./Images/shirt2.jpg",
        category: "shirt",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    },
    {
        id:15,
        name:"amazing trouser",
        price:1000,
        image:"./Images/trouser1.jpg",
        category: "trouser",
        info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos autem magni debitis odit quibusdam impedit eveniet itaque nostrum alias."

    }
]


let itemsContainer = document.querySelector('.items-container')
let menuBox = document.querySelector('.menu')


window.addEventListener('DOMContentLoaded',()=>{
mapThrough(products)
displayMenuBtns()
// window bracket

})








// map Through
const mapThrough =(arr)=> {
    let product = arr.map(item =>{
    return `<div class="item">
        <figure>
            <img src="${item.image}" alt="">
        </figure>
        <div class="info">
            <div class="item-top-info">
<h5>${item.name}</h5>
<h3>${item.price}</h3>
            </div>
            <div class="item-bottom-info">
             ${item.info}
            </div>
        </div>
    </div>`
})


itemsContainer.innerHTML = product.join("")
}


// display Menu Btns
const displayMenuBtns =()=>{
    
let setMenu = products.reduce((values,currentValue)=>{
if (!values.includes(currentValue.category)) {
    values.push(currentValue.category)
}

return values
},["all"])


let mapThroughSetMenu = setMenu.map(item=>{
    return `<button class="trousers"  data-id=${item}>${item}</button>`
})

menuBox.innerHTML = mapThroughSetMenu.join("") 
let allBtn = document.querySelectorAll('.menu button')
console.log(allBtn);

allBtn.forEach(btn =>{
   btn.addEventListener('click',(e)=>{

let filterProduct = []
let datasetValue = e.target.dataset.id


filterProduct = products.filter(item=>{
    if (item.category === datasetValue) {
        return item
    }
})
if (datasetValue == "all") {
    mapThrough(products)
}
else{
    mapThrough(filterProduct)
}



    // if (btn.innerText === "caps") {
    //  filterProduct = products.filter(item=>{
    //     if (item.category === "cap") {
    //         return item
    //     }
    // })
    // }
    // if (btn.innerText === "shoes") {
    //  filterProduct = products.filter(item=>{
    //     if (item.category === "shoe") {
    //         return item
    //     }
    // })
    // }
    // if (btn.innerText === "trousers") {
    //  filterProduct = products.filter(item=>{
    //     if (item.category === "trouser") {
    //         return item
    //     }
    // })
    // }
    // if (btn.innerText === "shirts") {
    //  filterProduct = products.filter(item=>{
    //     if (item.category === "shirt") {
    //         return item
    //     }
    // })
    // }
    // if (btn.innerText === "all") {
    //     filterProduct = products
    // }

   })
})
}

























// let workers = [
//     {name:'james',age:39,position:"developer",salary:400},
//     {name:'Bayo',age:25,position:"attendant",salary:250},
//     {name:'jennifer',age:31,position:"cashier",salary:320},
//     {name:'josephine',age:37,position:"sales rep",salary:500},
//     {name:'odunlade',age:30,position:"Marketer",salary:340}
// ]





// let myWorkers = workers.reduce((acc,currItem)=>{
// console.log(`acc: ${acc}`);
// console.log(`currItem: ${currItem.salary}`);
// acc += currItem.salary
//     return acc
// },10)

// console.log(myWorkers);

