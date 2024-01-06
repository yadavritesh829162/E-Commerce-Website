// =============carosal===============
var right=document.querySelector("#rightbtn")
var left=document.querySelector("#leftbtn")
var cimg=document.querySelector("#carosalimg")
var carosalstore=["./img/slide1.jpg","./img/slide2.jfif","./img/slide3.avif","./img/slide4.webp"]

var index=0
function main()
{
    cimg.src=carosalstore[index]
}
left.addEventListener("click",()=>{
    index--
    if(index<0)
    {
        index=carosalstore.length-1
    }
    main()
})

right.addEventListener("click",auto)
function auto()
{
    index++
    if(index==carosalstore.length)
    {
        index=0
    }
    main()
}
setInterval(auto,1000);

//========nav user name=========================================
var right=document.querySelector("#right")
var address=document.querySelector("#Addres")
var logn=JSON.parse(localStorage.getItem("logininfo"))
if(logn)
{
    address.innerHTML=`${logn.address}`
    right.innerHTML=`<span>${logn.Name}</span> <button id="logout">logout</button> <button id="cart"><i class="fa-solid fa-cart-shopping"></i></button> <button class="wistlist"><i class="fa-solid fa-heart"></i></button>`
}
// if(address.innerHTML=="")
// {
//     address.innerHTML=""
// }
var logout=document.querySelector("#logout")
try 
{
    logout.addEventListener("click",()=>{
        localStorage.removeItem("logininfo")
        right.innerHTML=`<button> <a href="./index.html">Signup</a></button>
        <button> <a href="./index.html">Login</a></button> <button id="cart"><i class="fa-solid fa-cart-shopping"></i></button> <button class="wistlist"><i class="fa-solid fa-heart"></i></button>`
    })    
} 
catch (error) 
{
    
}

//=============feature product=========================
var featurerow=document.querySelector(".featurerow")

var featurestore=
[
    {id:"fp1",src:"./img/shirt3.jpg",name:"feature product 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"s,m,l,xl",rating:"4"},
    {id:"fp2",src:"./img/pant5.webp",name:"feature product 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1999,size:"30,32,34,36",rating:"4.5"},
    {id:"fp3",src:"./img/tshirt5.jfif",name:"feature product 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"s,m,l,xl",rating:"3.5"},
    {id:"fp4",src:"./img/shirt6.jpg",name:"feature product 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,size:"s,m,l,xl",rating:"4"}
]
function featurepro()
{

    featurestore.map((f)=>{
        var{id,src,name,desc,price,size,rating}=f
        featurerow.innerHTML+=`
            <div id="${id}" class="prod">
                <img src="${src}" alt="">
                <h2>${name}</h2>
                <p>${desc}</p>
                <div>
                    <span>RS : ${price}</span>
                    <span>Size : 
                    <select class="size">
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                </select>
                    </span>
                </div>
                <h4>Rating : ${rating}</h4>
                <div class="add">
                    <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button class="wist"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>`
    })
}
//======================mens Shirt=========================
var shirtrow=document.querySelector(".shirtrow")
shitrstore=
[
    {id:"ms1",src:"./img/shirt1.jfif",name:"Shirt 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"S,M,L,XL",rating:"4"},
    {id:"ms2",src:"./img/shirt2.webp",name:"Shirt 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:799,size:"S,M,L,XL",rating:"3.8"},
    {id:"ms3",src:"./img/shirt3.jpg",name:"Shirt 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1199,size:"S,M,L,XL",rating:"4"},
    {id:"ms4",src:"./img/shirt4.jfif",name:"Shirt 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,size:"S,M,L,XL",rating:"4.1"},
    {id:"ms5",src:"./img/shirt5.webp",name:"Shirt 5",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:699,size:"S,M,L,XL",rating:"3.5"},
    {id:"ms6",src:"./img/shirt6.jpg",name:"Shirt 6",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:599,size:"S,M,L,XL",rating:"3.9"},
    {id:"ms7",src:"./img/shirt7.avif",name:"Shirt 7",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:799,size:"S,M,L,XL",rating:"4"},
    {id:"ms8",src:"./img/shirt8.webp",name:"Shirt 8",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:699,size:"S,M,L,XL",rating:"3.8"}
]
function mensshirt()
{
    shitrstore.map((e)=>{
        var{id,src,name,desc,price,size,rating}=e
        shirtrow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>Size : 
                <select  class="size">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}
//=====================Mens pant==============================
var pantrow=document.querySelector(".pantrow")

pantstore=
[
    {id:"mp1",src:"./img/pant1.webp",name:"pant 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"30,32,34,36",rating:"4"},
    {id:"mp2",src:"./img/pant2.webp",name:"pant 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1199,size:"30,32,34,36",rating:"4.1"},
    {id:"mp3",src:"./img/pant3.webp",name:"pant 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1289,size:"30,32,34,36",rating:"3.8"},
    {id:"mp4",src:"./img/pant4.webp",name:"pant 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1399,size:"30,32,34,36",rating:"4.4"},
    {id:"mp5",src:"./img/pant5.webp",name:"pant 5",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"30,32,34,36",rating:"4.6"},
    {id:"mp6",src:"./img/pant6.webp",name:"pant 6",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1499,size:"30,32,34,36",rating:"4"},
    {id:"mp7",src:"./img/pant7.jfif",name:"pant 7",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1199,size:"30,32,34,36",rating:"4.3"},
    {id:"mp8",src:"./img/pant8.avif",name:"pant 8",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"30,32,34,36",rating:"4.7"}
]
function menspant()
{
    pantstore.map((e)=>{
        var{id,src,name,desc,price,size,rating}=e
        pantrow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>Size : 
                <select  class="size">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}

//======================mens tshirt======================
var tshirtrow=document.querySelector(".tshirtrow")

tshirtstore=
[
    {id:"mts1",src:"./img/tshirt1.webp",name:"Tshirt 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:499,size:"S,M,L,XL",rating:"4"},
    {id:"mts2",src:"./img/tshirt2.webp",name:"Tshirt 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:699,size:"S,M,L,XL",rating:"4.3"},
    {id:"mts3",src:"./img/tshirt3.webp",name:"Tshirt 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,size:"S,M,L,XL",rating:"3.8"},
    {id:"mts4",src:"./img/tshirt4.webp",name:"Tshirt 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,size:"S,M,L,XL",rating:"4"},
    {id:"mts5",src:"./img/tshirt5.jfif",name:"Tshirt 5",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:599,size:"S,M,L,XL",rating:"3.9"},
    {id:"mts6",src:"./img/tshirt6.jfif",name:"Tshirt 6",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,size:"S,M,L,XL",rating:"4.8"},
    {id:"mts7",src:"./img/tshirt7.webp",name:"Tshirt 7",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:499,size:"S,M,L,XL",rating:"4.2"},
    {id:"mts8",src:"./img/tshirt8.jpg",name:"Tshirt 8",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,size:"S,M,L,XL",rating:"4.8"}
]
function menstshirt()
{
    tshirtstore.map((e)=>{
        var{id,src,name,desc,price,size,rating}=e
        tshirtrow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>Size : 
                <select  class="size">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}
//=====================Women top wear======================
var topwearrow=document.querySelector(".topwearrow")
topwearstore=
[
    {id:"tw1",src:"./img/top1.webp",name:"Top Wear 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:799,rating:"4"},
    {id:"tw2",src:"./img/top2.webp",name:"Top Wear 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:999,rating:"4.4"},
    {id:"tw3",src:"./img/top3.webp",name:"Top Wear 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1199,rating:"4.1"},
    {id:"tw4",src:"./img/top4.webp",name:"Top Wear 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:1299,rating:"3.8"},
]
function womentop()
{
    topwearstore.map((t)=>{
        var{id,src,name,desc,price,rating}=t
        topwearrow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>Size : 
                <select class="size">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })    
}


//======================lahenga==================
var lahengarow=document.querySelector(".lahengarow")
lahengastore=
[
    {id:"la1",src:"./img/lahenga1.webp",name:"Lahenga 1",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:2999,rating:"4"},
    {id:"la2",src:"./img/lahenga2.webp",name:"Lahenga 2",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:9999,rating:"4.4"},
    {id:"la3",src:"./img/lahenga3.webp",name:"Lahenga 3",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:5199,rating:"4.1"},
    {id:"la4",src:"./img/lahenga4.webp",name:"Lahenga 4",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:7299,rating:"3.8"},
]
function lahenga()
{
    lahengastore.map((t)=>{
        var{id,src,name,desc,price,rating}=t
        lahengarow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>Size : 
                <select  class="size">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
    
}

//=========================earphone======================
var earphonerow=document.querySelector(".earphonerow")
var earphonestore=
[
    {id:"ep1",src:"./img/earphone1.jpg",name:"Boat BassHead 162",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:489,rating:"4"},
    {id:"ep2",src:"./img/earphone2.jfif",name:"Boat RokerzPro",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:899,rating:"4.3"},
    {id:"ep3",src:"./img/earphone3.jpg",name:"JBL Bass",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:799,rating:"4.6"},
    {id:"ep4",src:"./img/earphone4.webp",name:"Urbanears",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:889,rating:"4.8"}
]
function earphone()
{
    earphonestore.map((e)=>
    {
        var{id,src,name,desc,price,rating}=e
        earphonerow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
            
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}
//===========================Phone=================
var phonerow=document.querySelector(".phonerow")
var phonestore=
[
    {id:"p1",src:"./img/phone1.jpg",name:"OnePlus 11",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:56999,rating:"4.4"},
    {id:"p2",src:"./img/phone2.jpg",name:"OnePlus Nord",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:33139,rating:"4.6"},
    {id:"p3",src:"./img/phone3.jfif",name:"Vivo",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:24990,rating:"4.2"},
    {id:"p4",src:"./img/phone4.webp",name:"Realme",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:20000,rating:"4.4"}
]

function phone()
{
    phonestore.map((p)=>
    {
        var{id,src,name,desc,price,rating}=p
        phonerow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>RAM : 
                <select class="size">
                <option value="">8GB</option>
                <option value="">16GB</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}

//=====================laptop===============================
var laptoprow=document.querySelector(".laptoprow")

var laptopstore=
[
    {id:"l1",src:"./img/laptop1.webp",name:"Hp Laptop",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:48999,rating:"4.4"},
    {id:"l2",src:"./img/laptop2.webp",name:"Dell Laptop",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:50999,rating:"4.6"},
    {id:"l3",src:"./img/laptop3.jpg",name:"Asus Laptop",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:78999,rating:"4.8"},
    {id:"l4",src:"./img/laptop4.webp",name:"Acer Laptop",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",price:60999,rating:"4.7"}
]

function laptop()
{
    laptopstore.map((l)=>
    {
        var{id,src,name,desc,price,rating}=l
        laptoprow.innerHTML+=`
        <div id="${id}" class="prod">
            <img src="${src}" alt="">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="div">
                <span>RS : ${price}</span>
                <span>RAM : 
                <select class="size">
                <option value="">8GB</option>
                <option value="">16GB</option>
            </select>
                </span>
            </div>
            <h4>Rating : ${rating}</h4>
            <div class="add">
                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                <button class="wist"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>`
    })
}
//=====================Wishlist=========================
var wish=document.querySelector(".wistlist")
var wishcont=document.querySelector("#wish")
var x=document.querySelector("#x")
wish.addEventListener("click",()=>{
    wishcont.style.right="0%"
})
x.addEventListener("click",()=>{
    wishcont.style.right="-100%"
})

//===============wistlist add prod remove pro adn==============
function addwishlist()
{
    var addwishstore=[]
    var allitem=[featurestore,shitrstore,pantstore,tshirtstore,topwearstore,lahengastore,earphonestore,phonestore,laptopstore]
    var addwish=document.querySelectorAll(".wist")

    addwish.forEach((item)=>{
        item.addEventListener("click",()=>{
            var parent=item.parentElement.parentElement.id
            var wishmenu=document.querySelector("#wishitem")
            // var wishflag=false
            // console.log(parent);
            // if(wishflag)
            // {
            //     alert("item is Already present in Wishlist")
            // }
            // else
            // {
                allitem.forEach((b)=>{
                    b.forEach((i)=>{
                        if(i.id==parent)
                        {
                            // addwishstore.pop(i.id)
                            alert(`${i.name} add Sucessfully`)
                            wishmenu.innerHTML+=`
                            <div class="wistmenu">
                                <div><img src="${i.src}" alt=""></div>
                                <div>
                                    <h4>Name:${i.name}</h4>
                                    <h3>price :${i.price}</h3>
                                    <select  >
                                        <option value="S">S</option>
                                        <option value="L">L</option>
                                        <option value="M">M</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="del"><i class="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                            `
                            // wishflag=false
                        }
                    })
                })
                
                delwish()  
            // }
            
        })
    })
}

//=================wish delete======================
function delwish()
{
    var del=document.querySelectorAll(".del")
    del.forEach((btn)=>{
        var par=btn.parentElement.parentElement
        btn.addEventListener("click",()=>{
            par.remove()
        })
    })

}
//=========================Cart========================
var cancel=document.querySelector("#cx")
var cartconter=document.querySelector("#cartlist")
var apearcart=document.querySelector("#cart")
cancel.addEventListener("click",()=>{
    cartconter.style.top="-100%"
})
apearcart.addEventListener("click",()=>{
    cartconter.style.top="0%"
    
})

//====add to cart======================================
var count =0
function addcart()
{
    var allitem=[featurestore,shitrstore,pantstore,tshirtstore,topwearstore,lahengastore,earphonestore,phonestore,laptopstore]
    var addtocart=document.querySelectorAll(".addtocrat")
    addtocart.forEach((catbtn)=>{
        catbtn.addEventListener("click",()=>{
            var cartparent=catbtn.parentElement.parentElement.id
            var cartcont=document.querySelector("#cartcont")
            allitem.forEach((e)=>{
                e.forEach((p)=>{
                    if(p.id==cartparent)
                    {
                        alert(`${p.name} is added Sucessfully`)
                        cartcont.innerHTML+=`
                        <div class="cartmenu">
                        
                            <div class="check">
                            <input type="checkbox" checked  class="ck">
                            <img src="${p.src}" alt=""></div>
                            <div>
                                <h3>Name :${p.name}</h3>
                                <h3 id="itemprice">Rs : ${p.price}</h3>
                                <input type="number" placeholder="Quantity" value="1" class="num">
                                <select >
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <div>
                                <h4 class="sub">Subtotal : ${p.price}</h4>
                                <i class="fa-solid fa-trash  cartdel"></i>
                            </div>
                        </div>
                        `
                        count++
                    }
                })
            })
            delcart()
            subtotalcart()
        })  
    })
}  
//============product view=========================
var px=document.querySelector("#px")
var prodcard=document.querySelector("#prodVeiw")
px.addEventListener("click",()=>
{
    prodcard.style.left="-100%"
})
function proview()
{
    var prodcont=document.querySelector("#prodcont")
    var allitems=[featurestore,shitrstore,pantstore,tshirtstore,topwearstore,lahengastore,earphonestore,phonestore,laptopstore]
    var prods=document.querySelectorAll(".prod")
    prods.forEach((c)=>
    {
        c.addEventListener("dblclick",()=>{
            prodcard.style.left="0%"
            allitems.forEach((i)=>
            {
               i.forEach((e)=>
               {
                if(e.id==c.id)
                {
                    prodcont.innerHTML=`
                    <div id="${e.id}">
                        <div class="prodimg">
                            <div>
                                <img src="${e.src}" alt="">
                            </div>
                        </div>                            <div class="prodesc">
                                <h2>Name : ${e.name}</h2>
                                <P>Desc : ${e.desc}</p>
                                <h2>Price : ${e.price}</h2>
                                <h2>Rating : ${e.rating}</h2>
                            </div>
                            <div class="btns">
                                <button class="addtocrat"><i class="fa-solid fa-cart-shopping"></i></button>
                                <button class="wist"><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                    `
                    addcart()
                    addwishlist()
                }
                
               })
            })
        })
    })
    
}
//=============buynow=========

function box()
{
    var cartbox=document.querySelectorAll(".cartmenu")
    var itemselect=document.querySelector("#itemselcted")
    var checkbox=document.querySelectorAll(".ck")
    cartbox.forEach((e)=>
            {
                e.style.border="2px solid green"
                

            })
            checkbox.forEach((check)=>
            {
                check.style.display="inline-block"

                    check.addEventListener("change",()=>
                    {
                        if(check.checked)
                        {    
                            count++
                            console.log("+:"+ count);
                            itemselect.innerHTML=`Items Selcted : ${count}`
                            var addparent=check.parentElement.parentElement
                            var addsubtt=addparent.querySelector(".sub").innerHTML.replace("Subtotal : ","")
                            addsubtt=+addsubtt
                            // console.log(typeof addsubtt);
                            addchecktotal(addsubtt)
                        }
                        else 
                        {
                            count--
                            if(count<0)
                            {
                                count=0
                            }
                            console.log("-:"+ count);
                            itemselect.innerHTML=`Items Selcted : ${count}`
                            var parent=check.parentElement.parentElement
                            console.log(parent);
                            var subtt=parent.querySelector(".sub").innerHTML.replace("Subtotal : ","")
                            subtotal(subtt)
                        }
                        
                    })
            })
           
}
function Remove()
{
    var checkbox=document.querySelectorAll(".ck")
    checkbox.forEach((c)=>
                    {
                        var parent =c.parentElement.parentElement
                            if(c.checked)
                            {    
                                parent.remove()
                                // console.log("remove");
                                // count--
                            }
                            else 
                            {
                                parent.style.border="none"
                                c.style.display="none"
                                c.checked=true
                            }                            
                    })
}
function buynow()
{
    var itemselect=document.querySelector("#itemselcted")
    var buy=document.querySelector("#buynow")
    var order=document.querySelector("#order")
    var pay=document.querySelector("#pay")
    var continu=document.querySelector("#homep")
    var cartcont=document.querySelector("#cartcont")
    var bynow=document.querySelector("#div")
    var suces=document.querySelector("#sucess")
    buy.addEventListener("click",()=>{
        if(count>0 )
        {
            box()
            // subtotalcart()
            buy.style.display="none"
            order.style.display="block"
            itemselect.style.display="block"
           
            itemselect.innerHTML=`Items Selcted : ${count}`
            pay.style.display="block"
   
            order.addEventListener("click",()=>
            {
                if(count>0)
                {
                    alert(" !!order placed  Sucessfully!!")
                    bynow.style.display="none"
                    suces.style.display=" inline-block"
                    Remove()
                    continu.addEventListener("click",()=>
                    {
                        cartconter.style.top="-100%"
                        bynow.style.display="inline-block"
                        suces.style.display="none"
                        buy.style.display="block"
                        itemselect.style.display="none"
                        order.style.display="none"
                        if(cartcont.innerHTML!="")
                        {
                            var ccount=0
                            var cartboxs=document.querySelectorAll(".cartmenu")
                            cartboxs.forEach(()=>{
                                ccount++
                                console.log(ccount);
                            })
                            count=ccount
                        }
                        else
                        {
                            count=0
                        }
                        subtotalcart()
                        
                    })
                }
                else
                {
                    alert("select order frist")
                    alert("cart is empty")
                    buy.style.display="block"
                    order.style.display="none"
                    itemselect.style.display="none"
                    pay.style.display="none"
                } 
           })  
        }
        else
        {
            alert("cart is Empty")
            alert("please add to cart")
        }
    })
}


//=============cart del===============
function delcart()
{
    var itemselect=document.querySelector("#itemselcted")
    var del=document.querySelectorAll(".cartdel")
    del.forEach((e)=>
    {
         var par=e.parentElement.parentElement
        e.addEventListener("click",()=>
        {
            par.remove()
            count--
            itemselect.innerHTML=`Items Selcted : ${count}`
            subtotalcart()
        })
      
    })
}
//==========================sbutract total===================
function subtotal(subsum)
{
    var totalc=document.querySelector("#ctotal")
    var sum=document.querySelector("#ctotal").innerHTML.replace("Total :","")
    sum=sum-subsum
    if(sum<0)
    {
        sum=0
    }
    totalc.innerHTML=`Total : ${sum}` 
}

//==========================add total===================
function addchecktotal(addsum)
{
    // console.log(typeof addsum);
    var totalc=document.querySelector("#ctotal")
    var sum=document.querySelector("#ctotal").innerHTML.replace("Total :","")
    sum=+sum
    // console.log(typeof sum);
    sum=sum+addsum
    
    totalc.innerHTML=`Total : ${sum}` 
}

//===============subtotal==================

function subtotalcart()
{
    var input=document.querySelectorAll(".num")
    input.forEach((qty)=>{
        qty.addEventListener("input",()=>{
            // var par=qty.parentElement.parentElement
            // var tup=par.querySelector(".ck")
            // if(qty.value<=0)
            // {
            //     qty.value=1
            // }
            // if(tup.checked)
            // {
            //     console.log("checked");
                
            //     var parent=qty.parentElement.parentElement
            //     var sub=parent.querySelector(".sub")
            //     var price = parent.querySelector("#itemprice").innerHTML.replace("Rs :","")
            //     var cal=qty.value*price
            //     sub.innerHTML = `Subtotal : `+cal
            //     total()
            // }

            if(qty.value<=0)
            {
                qty.value=1
            }
            var parent=qty.parentElement.parentElement
            var sub=parent.querySelector(".sub")
            var price = parent.querySelector("#itemprice").innerHTML.replace("Rs :","")
            var cal=qty.value*price
            sub.innerHTML = `Subtotal : `+cal
            total()
        })
    })
    total()
}
//==================total======================
function total()
{
    var totalc=document.querySelector("#ctotal")
    var allsub=document.querySelectorAll(".sub")
    var sum=0
    allsub.forEach((t)=>{
        var par=t.parentElement.parentElement
        var ch=par.querySelector(".ck")
        if(ch.checked)
        {
            console.log("total");
            t = parseInt(t.innerHTML.replace("Subtotal :","")) 
            sum=sum+t
        }
        // t = parseInt(t.innerHTML.replace("Subtotal :","")) 
        // sum=sum+t
    })
    totalc.innerHTML=`Total : ${sum}` 
}




//=================================================================

//===================MAIN FUNTION========================
function mains()
{
    main()
    featurepro()
    mensshirt()
    menspant()
    menstshirt()
    womentop()
    lahenga()
    earphone()
    phone()
    laptop()
    addwishlist()
    addcart()
    buynow()
    proview()
}
mains()