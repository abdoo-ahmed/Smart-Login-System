document.querySelector(".nameUser").innerHTML=localStorage.getItem("nameuser")

let clicklog=document.querySelector(".b2")
clicklog.addEventListener( "click" , function(){
    location.href="../Smart.html"
    document.querySelector(".section").innerHTML=` 
    <div class="inner">
       <div class="parant pt-5 vh-100">
           <div class="child pt-5 m-auto ">
               <div class="content ">
                   <h1 class=" text-center "> Smart Login System </h1>
                   <form>
                       <input class="form-control p3" type="text" placeholder="Enter your name">
                       <input class="form-control p1" type="text" placeholder="Enter your email">
                       <input class="form-control p2" type="password" placeholder="Enter password">
                       <button class="btn btn-outline-info mb-3">Sign Up</button>
                       <p class="text-center inner1"></p>
                       <p class="text-center text-white">Don’t have an account? 
                           <a class=" text-white a1" href="./Sin Up/SinUp.html">Signin </a>
                       </p>
                   </form>
   
               </div>
           
   
           </div>
       </div>
   
   </div>
   `
})


