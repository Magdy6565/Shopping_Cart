let myaddtocart = document.querySelectorAll(".addtocart") ;
let boxs = document.querySelectorAll(".box")
let mypics = document.querySelectorAll("img") ;
let prices = document.querySelectorAll(".price")
let mynames = document.getElementsByTagName("h3")
let quantity = [0,0,0,0,0,0]
let myspan = document.querySelector("header .logo span")
let mycards = document.querySelector(".checkout .cards")
let myprice = document.querySelector(".checkout .price")
console.log(myprice)
let logo = document.querySelector(".logo i")
let checkoutmenu = document.querySelector(".checkout")
logo.onclick=function(){
 checkoutmenu.style.display = "block"
}
document.addEventListener("click",(e)=>{
    for(let h =0 ; h<myaddtocart.length  ; h++){
        
        if(myaddtocart[h] === e.target && quantity[h] === 0){
            console.log(e.target)
            quantity[h] =quantity[h]+1 ;
            let newcard =  document.createElement("div")
            newcard.className = "newcard"
            let minusbutton = document.createElement("button") ;
            let minus = document.createTextNode("-") ;
            minusbutton.appendChild(minus)
            minusbutton.className = "butt"
            minusbutton.classList.add("minus")
            let plusbutton = document.createElement("button") ;
            let plus = document.createTextNode("+") ;
            plusbutton.appendChild(plus)
            plusbutton.className = "butt"
            plusbutton.classList.add("plus")

            let myquan = document.createElement("p")
            myquan.className= `quan${h}`
            myquan.classList.add("quantity")
            let quan = document.createTextNode(quantity[h])
            myquan.appendChild(quan)
            
            let newname = mynames[h].cloneNode(true)
       
            let newprice = prices[h].cloneNode(true)
            let newpic = mypics[h].cloneNode() ;
            newpic.style.borderRadius = "50%" ;
            newcard.appendChild(newpic)  ;
            newcard.appendChild(newname)
            newcard.appendChild(newprice)
            newcard.appendChild(minusbutton)
            newcard.appendChild(myquan)
            newcard.appendChild(plusbutton)
            mycards.appendChild(newcard)
           

        }
        else if(myaddtocart[h] === e.target && quantity[h] !== 0){
            quantity[h]++ ;
            document.querySelector(`.quan${h}`).innerHTML ++ ;
            

        }
        updatered()
        updateprice()

    }
 

})

function sum (arr){
    let s =0 ;
    for(let i =0 ; i<arr.length ; i++){
        s+= arr[i] ;
    }
    return s;
}

document.addEventListener("click",function(e){
    if(e.target.classList.contains("plus")){
    e.target.parentNode.querySelector(".quantity").innerHTML = +e.target.parentNode.querySelector(".quantity").innerHTML+1;

sumation()}
else if(e.target.classList.contains("minus")){
e.target.parentNode.querySelector(".quantity").innerHTML =  +e.target.parentNode.querySelector(".quantity").innerHTML-1;
if(+e.target.parentNode.querySelector(".quantity").innerHTML === 0){
    mycards.removeChild(e.target.parentNode)
}
}
updatered(e.target.parentNode.querySelector(".price").innerHTML)
updateprice()
}
)
function sumation(){
    let mynodes  = document.querySelectorAll(".quantity");
    let sum = 0 
    for(let i =0 ; i<mynodes.length ; i++){
        sum += +mynodes[i].innerHTML
    }
    return sum
}
function updatered(){
    let x= sumation() ;
    myspan.innerHTML = x;
}
function updateprice(){
    let mynodes  = document.querySelectorAll(".quantity");
    
    let sum = 0
    let no =0  
    for(let i =0 ; i<mynodes.length ; i++){

        no = +mynodes[i].innerHTML ;
        sum +=parseInt (mynodes[i].parentElement.querySelector(".price").innerHTML) * no

    }
    myprice.innerHTML =sum ;
}

document.querySelector(".closebtn").onclick=function(){
    checkoutmenu.style.display = "none"
}