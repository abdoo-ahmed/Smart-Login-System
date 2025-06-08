let input_p1=document.querySelector(".p1")
let input_p3=document.querySelector(".p3")
let input_p2=document.querySelector(".p2")
let btn_1=document.querySelector(".btn")
let arr=[];
// variabls
if(localStorage.getItem("arr") != null){
    arr= JSON.parse(localStorage.getItem("arr"))
}
else{
    arr=[]
}
function CheckValid(){
    btn_1.addEventListener( "click" , function(){

    let reg1=/^[^@]+@[^@]+\.[^@]+$/;
    let reg2= /^\d+[A-Za-z\d!#$%&?]{7,31}$/;
    let obj ={
        name:input_p3.value,
        emil:input_p1.value,
        password:input_p2.value,
    }
    if(  reg1.test(obj.emil) == true  &&  reg2.test(obj.password) == true ){
        arr.push(obj)
        localStorage.setItem("arr" , JSON.stringify(arr))
        cartona=` <div class="inner">
        <div class=" parant pt-5 vh-100">
            <div class="child pt-5 m-auto ">
                <div class="content ">
                    <h1 class=" text-center "> Smart Login System </h1>
                    <form>
                        <input class="form-control p1" type="text" placeholder="Enter your email">
                        <input class="form-control p2" type="password" placeholder="Enter your password">
                        <button class="btn btn-outline-info mb-3">Login</button>
                        <p class="text-center">          </p>
                        <p class="text-center text-white">Don’t have an account? 
                            <a onclick="Logout()" class=" text-white a1" href=""> Sign Up </a>
                        </p>
                    </form>

                </div>
            

            </div>
        </div>

    </div>`
   
    document.querySelector(".inner").innerHTML= cartona
    location.href="./Sin Up/SinUp.html"
    }
    else if(obj.emil =="" || obj.password =="" || obj.name==""){
        let cartona =`    
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
                                <p class="text-center text-danger">  All inputs is required</p>
                                <p class="text-center text-white">Don’t have an account? 
                                    <a class=" text-white a1" href=""> Signin </a>
                                </p>
                            </form>

                        </div>
                    

                    </div>
                </div>

            </div>`
        document.querySelector(".inner").innerHTML= cartona
    }
    else {
        let cartona = `
            <div class="inner">
                <div class="parant pt-5 vh-100">
                    <div class="child pt-5 m-auto">
                        <div class="content">
                            <h1 class=" text-center "> Smart Login System </h1>
                            <form>
                                <input class="form-control p3" type="text" placeholder="Enter your name">
                                <input class="form-control p1" type="text" placeholder="Enter your email">
                                <input class="form-control p2" type="password" placeholder="Enter password">
                                <button class="btn btn-outline-info mb-3">Sign Up</button>
                                <p class="text-center text-danger">  incorrect email or password </p>
                                <p class="text-center text-white">Don’t have an account? 
                                    <a class=" text-white a1" href=""> Signin </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        `
     
        document.querySelector(".inner").innerHTML= cartona
    }

})

}

CheckValid()
