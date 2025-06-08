let input_p1=document.querySelector(".p1")
let input_p2=document.querySelector(".p2")
let btn_1=document.querySelector(".btn")

let arr=[]
arr=JSON.parse(localStorage.getItem("arr"))
function CheckValid(){
    btn_1.addEventListener( "click" , function(){

    if(input_p1.value =="" || input_p2.value  =="" ){
        let cartona =`    
        <div class="inner">
                <div class="parant pt-5 vh-100">
                    <div class="child pt-5 m-auto ">
                        <div class="content ">
                            <h1 class=" text-center "> Smart Login System </h1>
                            <form>
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
    else if(input_p1.value =="" || input_p2.value ==""){
        let cartona =`    
        <div class="inner">
                <div class="parant pt-5 vh-100">
                    <div class="child pt-5 m-auto ">
                        <div class="content ">
                            <h1 class=" text-center "> Smart Login System </h1>
                            <form>
                            
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
    else{

        function check(){
            

            for (let i = 0; i < arr.length; i++) {

                if(input_p1.value==arr[i].emil && input_p2.value==arr[i].password){

                    var x= arr[i].name
                    localStorage.setItem("nameuser" , x)
                    document.querySelector(".inner").innerHTML=`
                    <div class="section vh-100 ">
                        <nav class="navbar nav1">
                            <div class="container">
                                <a class="navbar a2 text-white" href="">SMART LOGIN </a>
                                <form class="d-flex">
                                    <button class="btn b2 btn-outline-warning" >Logout</button>
                                </form>
                            </div>
                        </nav>
                        <div class="content2 d-flex justify-content-center align-items-center text-center ">
                
                            <div class="inner_h1">
                                <h1 class=" pt-5 pb-5"> Welcome <span> ${ localStorage.getItem("nameuser")} </span> </h1>
                            </div>
                
                        </div>
                    </div>`;
                    location.href="../login/login.html"
                    break;
                }
                
            }

        }

        check()


    }
   

})

}

CheckValid()























