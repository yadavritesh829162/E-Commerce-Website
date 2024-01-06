//========================= signup=================
var Name=document.querySelector("#uName")
var num=document.querySelector("#number")
var email=document.querySelector("#mail")
var pass=document.querySelector("#pass")
var cpass=document.querySelector("#cpass")
var ssubmit=document.querySelector("#ssubmit")
var img=document.querySelector("#img")
var ename=document.querySelector("#ename")
var Enum=document.querySelector("#enum")
var eemail=document.querySelector("#eemail")
var epass=document.querySelector("#epass")
var ecpass=document.querySelector("#ecpass")
var singupform=document.querySelectorAll("form")[0]
var logSign=document.querySelector("#logSign")
var olduser=document.querySelector("#olduser")
var addres=document.querySelector("#add")
var eadd=document.querySelector("#eadd")
var store=[]

var bname=false
var bnum=false
var bpass=false
var bcpass=false
var badd=false
singupform.addEventListener("submit",(e)=>{
  
    regx=/^[a-zA-z]{2,10}$/
    regx2=/^[7-9][0-9]{9}$/
    regx3=/^[a-zA-z0-9@]{8,15}$/
    regx4=/^[a-zA-z0-9 " "]{10,50}$/
    if(Name.value=="")
    {
        ename.innerHTML=`*Name Is Reqiured <br>`
        e.preventDefault()
    }
    else if(regx.test(Name.value))
    {
        ename.innerHTML=""
        bname=true
    }
    else
    {
        ename.innerHTML=` *Invalid Name <br>`
        e.preventDefault()
    }

    if(num.value=="")
    {
        Enum.innerHTML=`*Number is Required<br>`
        e.preventDefault()
    }
    else if(regx2.test(num.value))
    {
        Enum.innerHTML=""
        bnum=true
    }
    else
    {
        Enum.innerHTML=`Invalid Number Number Should be 10digit<br>`
        e.preventDefault()
    }

    if(addres.value=="")
    {
        eadd.innerHTML=`Address Is Required <br>`
        e.preventDefault()
    }
    else if(regx4.test(addres.value))
    {
        eadd.innerHTML=""
        badd=true
    }
    else
    {
        eadd.innerHTML=`Invalid Addres <br>`
        e.preventDefault()
    }

    if(pass.value=="")
    {
        epass.innerHTML=`Password is Required<br>`
        e.preventDefault()

    }
    else if(regx3.test(pass.value))
    {
        epass.innerHTML=""
        bpass=true
    }
    else
    {
        epass.innerHTML`pass Should contain Number alpa Special Char<br>`
        e.preventDefault()
    }

    if(cpass.value=="")
    {
        ecpass.innerHTML=`Confrim Password Is Required<br>`
        e.preventDefault()
    }
    else if(cpass.value==pass.value)
    {
        ecpass.innerHTML=""
        bcpass=true
    }
    else
    {
        ecpass=`Confrim Pass Match to Password<br>`
        e.preventDefault()
    }


    if(bname && bnum && bpass && bcpass && badd)
    {
        img.style.left="0"
        var obj=
        {
            Name:Name.value,
            Num:num.value,
            Email:email.value,
            address:addres.value,
            password:pass.value
        }
        store.push(obj)
        console.log(store);
        localStorage.setItem("loginDetails",JSON.stringify(store))
    }
    else
    {
        e.preventDefault()
    }

})
console.log(store)
olduser.addEventListener("click",()=>{
    
    img.style.transition="0.5s"
    img.style.left="0%"
    img.style.height="100%"
    
})

logSign.addEventListener("click",()=>{
    img.style.left="50%"
})


//====================login===============================
var logform=document.querySelectorAll("form")[1]
var un=document.querySelector("#un")
var upass=document.querySelector("#upass")
var eun=document.querySelector("#eun")
var eupass=document.querySelector("#eupass")
var loginDetails = JSON.parse(localStorage.getItem("loginDetails"))
let log=

logform.addEventListener("submit",(e)=>{
    var matching = loginDetails.find((f)=>{
        if((un.value==f.Num || un.value==f.Email) && upass.value == f.password)
        {
            return f
        }

    })
    var flag=true
    if(un.value=="" && upass.value=="")
    {
        eun.innerHTML=`User name is Required<br>`
        eupass.innerHTML=`Password is Required<br>`
        e.preventDefault()
        flag=false
    }
    else if(un.value=="")
    {
        eun.innerHTML=`User name is Required<br>`  
        e.preventDefault() 
        flag=false
    }
    else if(upass.value=="")
    {
        eupass.innerHTML=`Password is Required<br>`
        e.preventDefault()
        flag=false
    }
    else if(matching)
    {
        alert("Welcome To our Page")
    }
    else
    {
        eun.innerHTML=`Enter Valid User Name<br>`
        eupass.innerHTML=`Enter Valid Password<br>`
        e.preventDefault()
        flag=false
    }
    if(flag)
    {
        localStorage.setItem("logininfo",JSON.stringify(matching))
        console.log(matching);
    }
    else
    {
        e.preventDefault()
    }
})