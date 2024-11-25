
var users = JSON.parse(window.localStorage.getItem('USERS')) || [];
console.log(users);


function signupDataStore() {
   
    // obj for users data 
    let usersData = {

        userName : document.getElementById('userName').value,
        userEmail : document.getElementById('userEmail').value,
        userPhone : document.getElementById('userPhone').value,
        userPassword : document.getElementById('userPassword').value,
        userCity : document.getElementById('userCity').value,
    
    }

    // // push an obj in the users array 
    // users.push(usersData);
    console.log(users);
    console.log('here')

    // check user puts all the values 
    if ( usersData.userName && usersData.userEmail && usersData.userPhone && usersData.userPassword && usersData.userCity) {

        console.log('heloo');

        // console.log('yeloo');

        // users.push(usersData);

        // for check if any users already exits 
        if ( users.length >= 1 ) {

            console.log('teloo');
                
            // loop to check all the users one by one 
            for (var i = 0; i < users.length; i++) {

                console.log('yeloo');
                var userIs;

                // if exciting users email does not match to new user email, So assign 'new' in userIs,
                if (usersData.userEmail !== users[i].userEmail) {
                  
                    userIs = 'new';
                    console.log(userIs);
                    
                } else {
    
                    alert('this email already exits, use another email');
                    userIs = 'old';
                    console.log(userIs);
                    break;
                }

            } 

            console.log(userIs);
            
            if (userIs == 'new') {

                 // push an obj in the users array 
                 users.push(usersData);
                 console.log(users);         
                 // convert array into string 
                 let usersStr = JSON.stringify(users);
                 console.log(usersStr);
                 // store user array (string form) in local storage 
                 window.localStorage.setItem('USERS',usersStr);
                 // to render login page 
                 window.location.href ='./login.html'; 

            }


        } else { //if user is first

            users.push(usersData);
            console.log(users);         
            // convert array into string 
            let usersStr = JSON.stringify(users);
            console.log(usersStr);
            // store user array (string form) in local storage 
            window.localStorage.setItem('USERS',usersStr);
            // to render login page 
            window.location.href ='./login.html';  

        }
        

    } else { //if user doesn't fill details 

        alert('Kindly fill all the details');

    }

    console.log('meloo');

}





// match the data to local storage and go to homepage 
function loginMatchData() {

    // get the value of login field through id 
    // var userLoginName = document.getElementById('userLoginName').value;
    var userLoginEmail = document.getElementById('userLoginEmail').value;
    var userLoginPassword = document.getElementById('userLoginPassword').value;

    // check by console value of above field 
    // console.log(userLoginName,userLoginEmail,userLoginPassword);

    // get values through localStorage 
    var getUsersStr = window.localStorage.getItem('USERS');
    console.log(getUsersStr);
    var parseUsers = JSON.parse(getUsersStr);
    console.log(parseUsers);

    // if local Storage m kuch nhe, means ap ne signup hi nhe kia
    if(!parseUsers) {

        alert('You are not Sign up!');
        // back to sign up pageXOffset, sign up FIRST 
        window.location.href =  './signUp.html';

    } else {
       
    // condition to check if data match, then go to homegape, other wise You write wrong data in login 
      for ( var i = 0; i < parseUsers.length; i++) {

        // declare isUser for prevent Multiple times answer
        var isUser;

        // if userLoginData match with any userData so assign 'match' in isUser 
        if (

            userLoginEmail == parseUsers[i].userEmail &&
            userLoginPassword == parseUsers[i].userPassword
            
        ) {

           isUser = 'match';  
           var currUserData = parseUsers[i];    
           console.log(currUserData);  
           var currUserDataStr = JSON.stringify(currUserData);
           window.localStorage.setItem('currUserData',currUserDataStr);
        //    var lastLoginUserName = parseUsers[i].userName;

        //    console.log(lastLoginUserName);
           
        //    var currUserName = document.getElementById('currUserName');

        //    console.log(currUserName);

        //    currUserName.innerHTML = lastLoginUserName;

        //    console.log(lastLoginUserName);
           alert('Login Successfully, Go to Homepage');
           window.location.href = './index.html';
           break;

        } else {

            isUser = 'not match'
            // alert('Incorrect Name , Email or Password');

        }

      } 

      if (isUser == 'not match') {

        alert('Incorrect Name , Email or Password');

      }

    }

       
}

var currUser = JSON.parse(window.localStorage.getItem('currUserData'));
console.log(currUser);

var currUserName = document.getElementById("currUserName");
console.log(currUserName.tagName);

currUserName.innerHTML = currUser.userName;






// onlneStore for all company data
var OnlineStore = {

    storeName : 'Metro',
    storeLocation : 'Karachi, Pakistan',

    // product categoreis list 
    categoreis : ['Laptops', 'Smart Phones', 'Accessories'],

    // all products of the store in the array of obj
    products : [
        
        // product information obj 1
        {
            pID : 1001,
            pImage : './assets/asset 16.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 30000,
            pStock : 45,

            // product additional details 
            pDetails : {

                pBrand : 'hp',
                pModel : '2024',
                pColor : 'gray',
                pSize : 'Small'

            }

        },
        
        // product information obj 2
        {
            pID : 1002,
            pImage : './assets/asset 20.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 15000,
            pStock : 20,

            // product additional details 
            pDetails : {

                pBrand : 'lenovo',
                pModel : '2023',
                pColor : 'black',
                pSize : 'Large'

            }

        },

        // product information obj 3
        {
            pID : 1003,
            pImage : './assets/asset 21.jpeg',
            pName : 'Officia including shoes beautiful samde',
            pCategory : 'Headphones',
            pPrice : 3500,
            pStock : 90,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2022',
                pColor : 'red',
                pSize : 'Medium'


            }

        },

        // product information obj 4
        {
            pID : 1004,
            pImage : './assets/asset 22.jpeg',
            pName : 'Rutrum onvopxe sapiente delectus',
            pCategory : 'Accessories',
            pPrice : 1500,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'X Large'


            }

        },

        // product information obj 5
        {
            pID : 1005,
            pImage : './assets/asset 23.jpeg',
            pName : 'Simdora Maneu koer Metersa Infre Aze loke',
            pCategory : 'Accessories',
            pPrice : 1700,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'Medium'


            }

        },
        
        // product information obj 1
        {
            pID : 1001,
            pImage : './assets/asset 16.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 30000,
            pStock : 45,

            // product additional details 
            pDetails : {

                pBrand : 'hp',
                pModel : '2024',
                pColor : 'gray',
                pSize : 'Small'

            }

        },
        
        // product information obj 2
        {
            pID : 1002,
            pImage : './assets/asset 20.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 15000,
            pStock : 20,

            // product additional details 
            pDetails : {

                pBrand : 'lenovo',
                pModel : '2023',
                pColor : 'black',
                pSize : 'Large'

            }

        },

        // product information obj 3
        {
            pID : 1003,
            pImage : './assets/asset 21.jpeg',
            pName : 'Officia including shoes beautiful samde',
            pCategory : 'Headphones',
            pPrice : 3500,
            pStock : 90,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2022',
                pColor : 'red',
                pSize : 'Medium'


            }

        },

        // product information obj 4
        {
            pID : 1004,
            pImage : './assets/asset 22.jpeg',
            pName : 'Rutrum onvopxe sapiente delectus',
            pCategory : 'Accessories',
            pPrice : 1500,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'X Large'


            }

        },

        // product information obj 5
        {
            pID : 1005,
            pImage : './assets/asset 23.jpeg',
            pName : 'Simdora Maneu koer Metersa Infre Aze loke',
            pCategory : 'Accessories',
            pPrice : 1700,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'Medium'


            }

        },
        
        // product information obj 1
        {
            pID : 1001,
            pImage : './assets/asset 16.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 30000,
            pStock : 45,

            // product additional details 
            pDetails : {

                pBrand : 'hp',
                pModel : '2024',
                pColor : 'gray',
                pSize : 'Small'

            }

        },
        
        // product information obj 2
        {
            pID : 1002,
            pImage : './assets/asset 20.jpeg',
            pName : 'Swine voluptate reiciendis votibus',
            pCategory : 'Laptops',
            pPrice : 15000,
            pStock : 20,

            // product additional details 
            pDetails : {

                pBrand : 'lenovo',
                pModel : '2023',
                pColor : 'black',
                pSize : 'Large'

            }

        },

        // product information obj 3
        {
            pID : 1003,
            pImage : './assets/asset 21.jpeg',
            pName : 'Officia including shoes beautiful samde',
            pCategory : 'Headphones',
            pPrice : 3500,
            pStock : 90,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2022',
                pColor : 'red',
                pSize : 'Medium'


            }

        },

        // product information obj 4
        {
            pID : 1004,
            pImage : './assets/asset 22.jpeg',
            pName : 'Rutrum onvopxe sapiente delectus',
            pCategory : 'Accessories',
            pPrice : 1500,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'X Large'


            }

        },

        // product information obj 5
        {
            pID : 1005,
            pImage : './assets/asset 23.jpeg',
            pName : 'Simdora Maneu koer Metersa Infre Aze loke',
            pCategory : 'Accessories',
            pPrice : 1700,
            pStock : 110,

            // product additional details 
            pDetails : {

                pBrand : 'apple',
                pModel : '2020',
                pColor : 'white',
                pSize : 'Medium'


            }

        },
        

    ]
}


var productShowSection = document.querySelector('.productsBoxes');
console.log(productShowSection.tagName);

for(var i = 0; i < OnlineStore.products.length; i++) {

    productShowSection.innerHTML += 

        `
        <div class="productBox">

                    <div class="productBoxTop">

                        <img src="${OnlineStore.products[i].pImage}" alt="product">
                        <div class="addToCart" id="${OnlineStore.products[i].pID}" onclick="addCart(this)">Add to  <i class="fa-solid fa-cart-arrow-down"></i></div>

                    </div>

                    <div class="productBoxBottom">

                        <p>${OnlineStore.products[i].pName}</p>
                        <p class="productBoxPrice">${OnlineStore.products[i].pPrice}</p>
                        <p><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>

                    </div>

         </div>

        `
    
}

function addCart(e) {

    console.log(e);
    var cartID = e.getAttribute('id');
    alert(`Product ID ${cartID} has added in your cart.`)
    console.log(cartID);

}

console.log('product show krwany ka kam hogia');