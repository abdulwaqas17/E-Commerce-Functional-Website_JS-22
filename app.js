var users = JSON.parse(window.localStorage.getItem("USERS")) || [
  {
    userName: "Admin",
    userEmail: "admin@gmail.com",
    userPhone: "03123456",
    userPassword: 123,
    userCity: "Karachi",
    usersAddToCarts: [],
  },
];

window.localStorage.setItem('USERS',JSON.stringify(users));
console.log(users);

// for storing add to carts products
var addToCartArray =
  JSON.parse(window.localStorage.getItem("addToCartArray")) || [];
console.log(addToCartArray);

function signupDataStore() {
  // obj for users data
  let usersData = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value,
    userPhone: document.getElementById("userPhone").value,
    userPassword: document.getElementById("userPassword").value,
    userCity: document.getElementById("userCity").value,
    usersAddToCarts: [],
  };

  // // push an obj in the users array
  // users.push(usersData);
  console.log(users);
  console.log("here");

  // check user puts all the values
  if (
    usersData.userName &&
    usersData.userEmail &&
    usersData.userPhone &&
    usersData.userPassword &&
    usersData.userCity
  ) {
    console.log("heloo");

    // console.log('yeloo');

    // users.push(usersData);

    // for check if any users already exits
    if (users.length >= 1) {
      console.log("teloo");

      // loop to check all the users one by one
      for (var i = 0; i < users.length; i++) {
        console.log("yeloo");
        var userIs;

        // if exciting users email does not match to new user email, So assign 'new' in userIs,
        if (usersData.userEmail !== users[i].userEmail) {
          userIs = "new";
          console.log(userIs);
        } else {
          alert("this email already exits, use another email");
          userIs = "already Exit";
          console.log(userIs);
          break;
        }
      }

      console.log(userIs);

      if (userIs == "new") {
        // push an obj in the users array
        users.push(usersData);
        console.log(users);
        // convert array into string
        let usersStr = JSON.stringify(users);
        console.log(usersStr);
        // store user array (string form) in local storage
        window.localStorage.setItem("USERS", usersStr);
        // to render login page
        window.location.href = "./login.html";
      }
    } else {
      //if user is first

      users.push(usersData);
      console.log(users);
      // convert array into string
      let usersStr = JSON.stringify(users);
      console.log(usersStr);
      // store user array (string form) in local storage
      window.localStorage.setItem("USERS", usersStr);

      alert("Sign Up Successfully");
      // to render login page
      window.location.href = "./login.html";
    }
  } else {
    //if user doesn't fill details

    alert("Kindly fill all the details");
  }

  console.log("meloo");
}

// match the data to local storage and go to homepage
function loginMatchData() {
  // get the value of login field through id
  // var userLoginName = document.getElementById('userLoginName').value;
  var userLoginEmail = document.getElementById("userLoginEmail").value;
  var userLoginPassword = document.getElementById("userLoginPassword").value;

  // check by console value of above field
  // console.log(userLoginName,userLoginEmail,userLoginPassword);

  // get values through localStorage
  var getUsersStr = window.localStorage.getItem("USERS");
  console.log(getUsersStr);
  var parseUsers = JSON.parse(getUsersStr);
  console.log(parseUsers);

  // if local Storage m kuch nhe, means ap ne signup hi nhe kia
  if (!parseUsers) {
    alert("You are not Sign up!");
    // back to sign up page, sign up FIRST
    window.location.href = "./signUp.html";
  } else {
    if (userLoginEmail == "admin@gmail.com" && userLoginPassword == 123) {
      alert("Login Successfully, Go to Dashboard");
      window.location.href = "./dashboard.html";
    } else {
      // condition to check if data match, then go to homegape, other wise You write wrong data in login
      for (var i = 0; i < parseUsers.length; i++) {
        // declare isUser for prevent Multiple times answer
        var isUser;

        // if userLoginData match with any userData so assign 'match' in isUser
        if (
          userLoginEmail == parseUsers[i].userEmail &&
          userLoginPassword == parseUsers[i].userPassword
        ) {
          isUser = "match";
          var currUserData = parseUsers[i];
          console.log(currUserData);
          var currUserDataStr = JSON.stringify(currUserData);
          window.localStorage.setItem("currUserData", currUserDataStr);
          //    var lastLoginUserName = parseUsers[i].userName;

          //    console.log(lastLoginUserName);

          //    var currUserName = document.getElementById('currUserName');

          //    console.log(currUserName);

          //    currUserName.innerHTML = lastLoginUserName;

          //    console.log(lastLoginUserName);
          alert("Login Successfully, Go to Homepage");
          window.location.href = "./index.html";
          break;
        } else {
          isUser = "not match";
          // alert('Incorrect Name , Email or Password');
        }
      }

      if (isUser == "not match") {
        alert("Incorrect Name , Email or Password");
      }
    }
  }
}

// onlneStore for all company data
var OnlineStore = {
  storeName: "Metro",
  storeLocation: "Karachi, Pakistan",

  // product categoreis list
  categoreis:  ["Laptops", "Smart Phones", "Accessories"],

  // all products of the store in the array of obj
  products: JSON.parse(window.localStorage.getItem("PRODUCTS")) ||  [
    // product information obj 1
    {
      pID: 1001,
      pImage: "./assets/asset 16.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 30000,
      pStock: 45,

      // product additional details
      pDetails: {
        pBrand: "hp",
        pModel: "2024",
        pColor: "gray",
        pSize: "Small",
      },
    },

    // product information obj 2
    {
      pID: 1002,
      pImage: "./assets/asset 20.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 15000,
      pStock: 20,

      // product additional details
      pDetails: {
        pBrand: "lenovo",
        pModel: "2023",
        pColor: "black",
        pSize: "Large",
      },
    },

    // product information obj 3
    {
      pID: 1003,
      pImage: "./assets/asset 21.jpeg",
      pName: "Officia including shoes beautiful samde",
      pCategory: "Headphones",
      pPrice: 3500,
      pStock: 90,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2022",
        pColor: "red",
        pSize: "Medium",
      },
    },

    // product information obj 4
    {
      pID: 1004,
      pImage: "./assets/asset 22.jpeg",
      pName: "Rutrum onvopxe sapiente delectus",
      pCategory: "Accessories",
      pPrice: 1500,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "X Large",
      },
    },

    // product information obj 5
    {
      pID: 1005,
      pImage: "./assets/asset 23.jpeg",
      pName: "Simdora Maneu koer Metersa Infre Aze loke",
      pCategory: "Accessories",
      pPrice: 1700,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "Medium",
      },
    },

    // product information obj 6
    {
      pID: 1006,
      pImage: "./assets/asset 24.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 30000,
      pStock: 45,

      // product additional details
      pDetails: {
        pBrand: "hp",
        pModel: "2024",
        pColor: "gray",
        pSize: "Small",
      },
    },

    // product information obj 7
    {
      pID: 1007,
      pImage: "./assets/asset 25.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 15000,
      pStock: 20,

      // product additional details
      pDetails: {
        pBrand: "lenovo",
        pModel: "2023",
        pColor: "black",
        pSize: "Large",
      },
    },

    // product information obj 8
    {
      pID: 1008,
      pImage: "./assets/asset 26.jpeg",
      pName: "Officia including shoes beautiful samde",
      pCategory: "Headphones",
      pPrice: 3500,
      pStock: 90,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2022",
        pColor: "red",
        pSize: "Medium",
      },
    },

    // product information obj 9
    {
      pID: 1009,
      pImage: "./assets/asset 27.jpeg",
      pName: "Rutrum onvopxe sapiente delectus",
      pCategory: "Accessories",
      pPrice: 1500,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "X Large",
      },
    },

    // product information obj 10
    {
      pID: 1010,
      pImage: "./assets/asset 34.jpeg",
      pName: "Simdora Maneu koer Metersa Infre Aze loke",
      pCategory: "Accessories",
      pPrice: 1700,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "Medium",
      },
    },

    // product information obj  11
    {
      pID: 1011,
      pImage: "./assets/asset 35.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 30000,
      pStock: 45,

      // product additional details
      pDetails: {
        pBrand: "hp",
        pModel: "2024",
        pColor: "gray",
        pSize: "Small",
      },
    },

    // product information obj 12
    {
      pID: 1012,
      pImage: "./assets/asset 36.jpeg",
      pName: "Swine voluptate reiciendis votibus",
      pCategory: "Laptops",
      pPrice: 15000,
      pStock: 20,

      // product additional details
      pDetails: {
        pBrand: "lenovo",
        pModel: "2023",
        pColor: "black",
        pSize: "Large",
      },
    },

    // product information obj 13
    {
      pID: 1013,
      pImage: "./assets/asset 37.jpeg",
      pName: "Officia including shoes beautiful samde",
      pCategory: "Headphones",
      pPrice: 3500,
      pStock: 90,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2022",
        pColor: "red",
        pSize: "Medium",
      },
    },

    // product information obj 14
    {
      pID: 1014,
      pImage: "./assets/asset 38.jpeg",
      pName: "Rutrum onvopxe sapiente delectus",
      pCategory: "Accessories",
      pPrice: 1500,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "X Large",
      },
    },

    // product information obj 15
    {
      pID: 1015,
      pImage: "./assets/asset 39.jpeg",
      pName: "Simdora Maneu koer Metersa Infre Aze loke",
      pCategory: "Accessories",
      pPrice: 1700,
      pStock: 110,

      // product additional details
      pDetails: {
        pBrand: "apple",
        pModel: "2020",
        pColor: "white",
        pSize: "Medium",
      },
    },
  ],

  usersDetail: JSON.parse(window.localStorage.getItem("USERS")) || [],

  ordersDetail: JSON.parse(window.localStorage.getItem("ORDERS")) || [],
};
// console.log(OnlineStore.usersDetail);

window.localStorage.setItem('PRODUCTS',JSON.stringify(OnlineStore.products));




// ---------  FOR SHOWING PRODUCTS IN HOME PAGE  -----------
if (document.querySelector(".productsBoxes")) {
  // console.log("ye home pr hi chaly gi bs,");

  var productShowSection = document.querySelector(".productsBoxes");
  // console.log(productShowSection.tagName);

  for (var i = 0; i < OnlineStore.products.length; i++) {
    productShowSection.innerHTML += `
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

        `;
  }
} else {
  console.log("home page not found");
}



//  ------  FOR SHOWING ADDTOCART IN CART PAGE ----------
if (document.querySelector(".shoppingCartBoxes")) {
  // ager (shoppingCartBoxes) milay ga tab hi ye block chaly ga, kisi aur page per ye chaly Ga hi nhe

  console.log("ye carts k page pr chaly ga Boss");

  // FOR SHOWING ADDTOCART IN CART PAGE

  // get currUser form local storage for getting id of productsPurchase through currUser.usersAddToCarts
  // var currUser = JSON.parse(window.localStorage.getItem("currUserData"));

  // var cartQuantity = 1;

  // cartsTotalPrice is 0, in intail
  var cartsTotalPrice = 0;

  // totalItems assign 0, in initial
  var totalItems = 0;

  // for get quatity of product

  // (SHOPPING CARTS) for find user ne kitnay products khariday aur kia kia kharida
  for (var i = 0; i < addToCartArray.length; i++) {
    var cartIDInNumForm = parseInt(addToCartArray[i].productID);
    console.log(cartIDInNumForm);

    document.getElementById("isCarts").style.display = "none";

    // ---- [i] wala aik bar chaly Ga, phir [j] wala complete chaly ga, then same process again for 2nd value

    // (cartIDInNumForm) se OnlineStore.products.pID ko match kr wa rhay hn
    for (var j = 0; j < OnlineStore.products.length; j++) {
      if (cartIDInNumForm === OnlineStore.products[j].pID) {
        // yhn pr desire object ki hi quantity aur price aye gi Sab k lien Respectively
        var cartTotalPrice =
          addToCartArray[i].cartsQuantity * OnlineStore.products[j].pPrice;
        console.log(cartTotalPrice);

        // for Total Price of all carts
        cartsTotalPrice = cartsTotalPrice + cartTotalPrice; // a = 0 + 5; in 2nd time, a = 5 + 10 = 15
        console.log(cartsTotalPrice);

        // for total number of carts items
        totalItems += addToCartArray[i].cartsQuantity; // 0 + 1 = 1, 1 += 3 = 4, 4 + 5 = 9

        window.localStorage.setItem('totalItems',totalItems)

        // get shoppingCartBoxes for showing carts in it
        var shoppingCartBoxes = document.querySelector(".shoppingCartBoxes");
        shoppingCartBoxes.innerHTML += `

        <div class="shoppingCartBox flex">
        
                               
                                <div class="shoppingCartBoxImg">
        
                                    <img src="${OnlineStore.products[j].pImage}" alt="product">
        
                                </div>
        
                                
                                <div class="shoppingCartBoxText">
        
                                    <p>${OnlineStore.products[j].pName}</p>
                                    <p>${OnlineStore.products[j].pPrice}</p>
        
                                    <div class="shoppingCartBoxExtra">
        
                                        <p>Color : ${OnlineStore.products[j].pDetails.pColor}</p>
                                        <p>Size : ${OnlineStore.products[j].pDetails.pSize}</p>
        
                                    </div>
        
                                    
        
                                </div>
        
                               
                                <div class="shoppingCartBoxQunatity flex">
        
                                    <div class="shoppingCartBoxQunatityNum">
                                        ${addToCartArray[i].cartsQuantity}
                                    </div>
        
                                    <div class="shoppingCartBoxQunatityArrow">
                                        <div class="Increase" id="Inc-${i}" onclick="IncThis(this)">+1</div>
                                        <div class="Decrease" id="Dec-${i}" onclick="DecThis(this)">-1</div>
                                    </div>
        
                                </div>
        
                              
                                <p class="shoppingCartBoxPrice">
                                    ${cartTotalPrice}
                                </p>
        
                                <div class="shoppingCartBoxDelete">
                                    <i class="fa-solid fa-trash-can" id="del-${i}" onclick="delThis(this)"></i>
                                </div>
        </div>`;

        var checkOutBoxes = document.querySelector(".checkOutBoxes");
        checkOutBoxes.innerHTML = `
        
        <div class="cartsbill">

                    <!-- itemPrices is here  -->
                    <div class="itemPrices">
    
                        <div class="numOfItems flex">
    
                            <p >${totalItems} items</p>
                            <p id="totalItemsPrice">${cartsTotalPrice}</p>
    
                        </div>
    
                        <div class="shippingDetails flex">
    
                            <p>Shipping</p>
                            <p id="shippingTax">7</p>
    
                        </div>
    
                    </div>
    
                    <!-- totalAmount is here  -->
                    <div class="totalAmount">
    
                        <div class="taxadd flex">
    
                            <p>Tax</p>
                            <p>4.80</p>
    
                        </div>
    
                        <div class="total flex">
    
                            <p>Total</p>
                            <p>${cartsTotalPrice + 7 + 4.8}</p>
    
                        </div>
    
    
                    </div>
    
                    <!-- checkOut is here  -->
                    <div class="checkOut">
    
                        <button class="payNow" onclick="checkOut()">CHECK OUT</button>
    
                    </div>
    
                </div>`;

        break;
      }
    }
  }
} else {
  console.log("not found page");
}


console.log(totalItems);



// ----------  function for addToCart the products ------------
function addCart(e) {
  if (currUser) {
    console.log(e);
    var cartID = e.getAttribute("id");
    // alert(`Product ID ${cartID} has added in your cart.`);
    var addToCartPage = document.querySelector('.modal-content');

    var numOfCart = window.localStorage.getItem('addToCartArray');

    for (var k = 0; k < OnlineStore.products.length; k++) {
      if (cartID == OnlineStore.products[k].pID) {
        var desireAddToCartObj = OnlineStore.products[k];
        console.log(desireAddToCartObj);
      }
    }

    console.log(desireAddToCartObj);

  
    addToCartPage.innerHTML = `
    <div class="modal-header">
        
        <h4 class="modal-title h6 text-xs-center" id="myModalLabel"><i class="material-icons"></i>Product successfully added to your shopping cart</h4>

        <div class="cross" onclick='cancelAddToCartBox()'>x</div>

      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 divide-right">
            <div class="row">
              <div class="col-md-6">
									<img class="product-image" src="${desireAddToCartObj.pImage}" alt="" title="" itemprop="image">
				              </div>
              <div class="col-md-6">
                <h6 class="h6 product-name">${desireAddToCartObj.pName}</h6>
                <p>${desireAddToCartObj.pPrice}</p>
                
                                  <p><strong>Color</strong>: Grey </p>
                                  <p><strong>Size</strong>: S</p>
                                <p><strong>Quantity:</strong>&nbsp;1</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="cart-content">
                              <p class="cart-products-count">Your carts are available on carts page</p>
                            <p><strong>Total products:</strong>&nbsp;$1,788.00</p>
              <p><strong>Total shipping:</strong>&nbsp;$7.00 </p>
                            	<p><strong>Taxes</strong>&nbsp;$0.00</p>
                            <p><strong>Total:</strong>&nbsp;$1,795.00 (tax excl.)</p>
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick='cancelAddToCartBox()'>Continue shopping</button>
              <a class="btn btn-primary" onclick='proceedToCheckOut()'><i class="material-icons"></i>proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    `;

    var shadow = document.querySelector('.shadow');

    addToCartPage.classList.add('show');
    shadow.classList.add('show');
    console.log(cartID);
    console.log(users);
    console.log(currUser);

    // for get currUser data from users
    // for (var i = 0; i < users.length; i++) {
    //   if (currUser.userEmail == users[i].userEmail) {
    //     // because we want change in the All users Array, not a Last Login that's why we get user in this way
    //     var getCurrUser = users[i];
    //     console.log(getCurrUser);
    //     break;
    //   }
    // }
    // getCurrUser of users (sign up wala )
    // console.log(getCurrUser);

    // this is currUser (lastLoginUser) , login wala
    // console.log(currUser);

    // store OnlineStore.ordersDetail in a variable (onlineStore k orders ka array)
    // var arrayOfOrdersObj = OnlineStore.ordersDetail;
    // console.log(arrayOfOrdersObj);

    // for signup and login walay k lien
    // var cardIDandQuantity = {
    //   productID: cartID,
    //   cartsQuantity: 1,
    // };

    // for storing this obj in addToCartArray
    var cardIDQuantityAndCurrUserEmail = {
      productID: cartID,
      cartsQuantity: 1,
      buyerEmail: currUser.userEmail,
      buyerName: currUser.userName,
    };

    // for check if the product already add to cartID, so we just ++ its quantity
    if (addToCartArray.length > 0) {
      for (var i = 0; i < addToCartArray.length; i++) {
        var isExit = "No";

        if (addToCartArray[i].productID == cartID) {
          addToCartArray[i].cartsQuantity++;
          window.localStorage.setItem(
            "addToCartArray",
            JSON.stringify(addToCartArray)
          );
          isExit = "Yes";
          break;
        }
      }

      if (isExit == "No") {
        addToCartArray.push(cardIDQuantityAndCurrUserEmail);
        window.localStorage.setItem(
          "addToCartArray",
          JSON.stringify(addToCartArray)
        );
      }
    } else {
      addToCartArray.push(cardIDQuantityAndCurrUserEmail);
      window.localStorage.setItem(
        "addToCartArray",
        JSON.stringify(addToCartArray)
      );
    }

    console.log(addToCartArray);

    // for signup wala
    // getCurrUser.usersAddToCarts.push(cardIDandQuantity);
    // var strCartsUsers = JSON.stringify(users);
    // window.localStorage.setItem("USERS", strCartsUsers);

    // // for login wala
    // currUser.usersAddToCarts.push(cardIDandQuantity);
    // var strCartsUsersForLogin = JSON.stringify(currUser);
    // window.localStorage.setItem("currUserData", strCartsUsersForLogin);

    // // store OnlineStore.ordersDetail in a variable
    // var arrayOfOrdersObj = OnlineStore.ordersDetail;
    // arrayOfOrdersObj.push(cardIDQuantityAndCurrUserEmail);

    // var strArrayOfOrdersObj = JSON.stringify(arrayOfOrdersObj);
    // // store Orders in the localStorage
    // window.localStorage.setItem("ORDERS", strArrayOfOrdersObj);

    // console.log(OnlineStore.ordersDetail);

    console.log("before conditions");

    // ----- signup wala user
    // if (getCurrUser.usersAddToCarts[0]) {
    //   var isIDMatch = "NO";

    //   getCurrUser.usersAddToCarts.forEach(forCheckCartID);
    //   // currUser.usersAddToCarts.forEach(forCheckCartID);

    //   function forCheckCartID(objOfIndex) {
    //     //  isIDMatch = 'NO';

    //     console.log(isIDMatch);

    //     if (objOfIndex.productID == cartID) {
    //       objOfIndex.cartsQuantity += 1;

    //       console.log(objOfIndex);

    //       var strCartsUsers = JSON.stringify(users);
    //       window.localStorage.setItem("USERS", strCartsUsers);
    //       isIDMatch = "Yes";
    //       console.log(isIDMatch);

    //       return;
    //     } else {
    //       isIDMatch = "NO";
    //     }
    //   }

    //   // console.log(forCheckCartID());

    //   if (isIDMatch == "NO") {
    //     getCurrUser.usersAddToCarts.push(cardIDandQuantity);
    //     var strCartsUsers = JSON.stringify(users);
    //     window.localStorage.setItem("USERS", strCartsUsers);
    //     console.log(isIDMatch);
    //   }
    // } else {
    //   getCurrUser.usersAddToCarts.push(cardIDandQuantity);
    //   var strCartsUsers = JSON.stringify(users);
    //   window.localStorage.setItem("USERS", strCartsUsers);
    // }

    // // ----- login wala user
    // if (currUser.usersAddToCarts[0]) {
    //   var isIDMatchForLogin = "NO";

    //   currUser.usersAddToCarts.forEach(forCheckCartIDOfLogin);
    //   // currUser.usersAddToCarts.forEach(forCheckCartID);

    //   function forCheckCartIDOfLogin(objOfInd) {
    //     //  isIDMatch = 'NO';

    //     console.log(isIDMatchForLogin);

    //     if (objOfInd.productID == cartID) {

    //       objOfInd.cartsQuantity += 1;

    //       console.log(objOfInd);

    //       var strCartsUsersForLogin = JSON.stringify(currUser);
    //       window.localStorage.setItem("currUserData", strCartsUsersForLogin);
    //       isIDMatchForLogin = "Yes";
    //       console.log(isIDMatchForLogin);

    //       return;
    //     } else {
    //       isIDMatchForLogin = "NO";
    //     }
    //   }

    //   // console.log(forCheckCartID());

    //   if (isIDMatchForLogin == "NO") {
    //     currUser.usersAddToCarts.push(cardIDandQuantity);
    //     var strCartsUsersForLogin = JSON.stringify(currUser);
    //     window.localStorage.setItem("currUserData", strCartsUsersForLogin);

    //     console.log(isIDMatchForLogin);
    //   }
    // } else {
    //   currUser.usersAddToCarts.push(cardIDandQuantity);
    //   var strCartsUsersForLogin = JSON.stringify(currUser);
    //   window.localStorage.setItem("currUserData", strCartsUsersForLogin);
    // }

    // for (var i = 0; i < users.length; i++) {
    //   if (currUser.userEmail == users[i].userEmail) {
    //     // because we want change in the All users Array, not a Last Login that's why we get user in this way
    //     var getCurrUser = users[i];
    //     console.log(getCurrUser);

    //     // push the id and Quantity as a form of obj of products in currUser usersAddToCarts (all users array k users m, last login k obj m nhe, Q K lastLogin wala khud, allUser array se bun rha h)
    //     var cardIDandQuantity = {
    //       productID: cartID,
    //       cartsQuantity: 1,
    //     };

    //     var cardIDandQuantity = {
    //       productID: cartID,
    //       cartsQuantity: 1,
    //     };

    //     console.log("before if");

    //     if (getCurrUser.usersAddToCarts[0]) {
    //       getCurrUser.usersAddToCarts.forEach();

    //       if (item.productID == cartID) {
    //         item.cartsQuantity += 1;
    //         var strCartsUsers = JSON.stringify(users);
    //         window.localStorage.setItem("USERS", strCartsUsers);
    //       } else {
    //         getCurrUser.usersAddToCarts.push(cardIDandQuantity);

    //         console.log(users);
    //         // re store user in local storage (USERS) for get usersAddToCarts
    //         var strCartsUsers = JSON.stringify(users);
    //         window.localStorage.setItem("USERS", strCartsUsers);
    //       }

    //       //   for(var k = 0; k < getCurrUser.usersAddToCarts.length; k++ ) {

    //       //     getCurrUser.usersAddToCarts.forEach( (item) => {

    //       //       if (getCurrUser.usersAddToCarts[k].productID == item.productID) {

    //       //       var matchProductID = getCurrUser.usersAddToCarts[k];
    //       //       matchProductID.cartsQuantity += 1;

    //       //       console.log(matchProductID);
    //       //       console.log(k,getCurrUser.usersAddToCarts);

    //       //       console.log('afer add');

    //       //           // re store user in local storage (USERS) for get usersAddToCarts
    //       //           var strCartsUsers = JSON.stringify(users);
    //       //           window.localStorage.setItem("USERS", strCartsUsers);

    //       //       } else {

    //       //                 // also in the currUser obj m bhi push krwa dete hn
    //       // currUser.usersAddToCarts.push(cartID);
    //       // var strCurrUser = JSON.stringify(currUser);
    //       // window.localStorage.setItem("currUserData", strCurrUser);

    //       //       }
    //       //     });

    //       //   }
    //       // } else {

    //       // console.log('inside  esle');

    //       // getCurrUser.usersAddToCarts.push(cardIDandQuantity);

    //       // console.log(users);
    //       // // re store user in local storage (USERS) for get usersAddToCarts
    //       // var strCartsUsers = JSON.stringify(users);
    //       // window.localStorage.setItem("USERS", strCartsUsers);

    //       // }

    //       console.log("alse of if");

    //       // also in the currUser obj m bhi push krwa dete hn
    //       currUser.usersAddToCarts.push(cartID);
    //       var strCurrUser = JSON.stringify(currUser);
    //       window.localStorage.setItem("currUserData", strCurrUser);

    //       console.log(OnlineStore.ordersDetail);

    //       // create obj for orders detail, which have, product id and user email
    //       var ordersObj = {
    //         productID: cartID,
    //         cartsQuantity: 1,
    //         pusrchaseBy: currUser.userEmail,
    //       };

    //       // store OnlineStore.ordersDetail in a variable
    //       var arrayOfOrdersObj = OnlineStore.ordersDetail;
    //       arrayOfOrdersObj.push(ordersObj);

    //       var strArrayOfOrdersObj = JSON.stringify(arrayOfOrdersObj);

    //       // store Orders in the localStorage
    //       window.localStorage.setItem("ORDERS", strArrayOfOrdersObj);

    //       // console.log(OnlineStore.ordersDetail);
    //     }

    //     break;
    //   }
    // }
  } else {
    alert("Kindly Sign Up First");
    window.location.href = "./signUp.html";
  }
}



// --------- for hide to cart box 
// for cancel the product box 
function cancelAddToCartBox() {

  var shadow = document.querySelector('.shadow');
  var addToCartPage = document.querySelector('.modal-content');
  addToCartPage.classList.remove('show');
  shadow.classList.remove('show');

}


// ---------- for move to carts page 
function proceedToCheckOut() {
  window.location.href = './carts.html'
}



 // ------ FUNCTION FOR DELETE THE CART -------
function delThis(del) {
  console.log(del);
  // get id of desire cart form desire button For delete the cart
  var delCartID = del.getAttribute("id");
  console.log(delCartID);

  // get the desire Index number of addToCartArray For delete this index
  var delCartIDNum = delCartID.slice(4);
  console.log(delCartIDNum);

  // delete the desire index of addToCartArray, in order to remove desire cart
  addToCartArray.splice(delCartIDNum, 1);

  // and also set in the local Storage
  window.localStorage.setItem("addToCartArray", JSON.stringify(addToCartArray));

  location.reload(); // page refresh
}

// ------ FUNCTION FOR (++) IN THE CART QUANTITY -------
function IncThis(Inc) {
  console.log(Inc);

  // get id of desire cart form desire button For ++
  var IncCartID = Inc.getAttribute("id"); // Inc-2
  console.log(IncCartID);

  // get the desire Index number of addToCartArray For delete this index
  var IncCartIDNum = IncCartID.slice(4); // for extracting 2 Form (Inc-2), 2 is our desire cart index
  console.log(IncCartIDNum);

  // ++ in the carts quantity of desire cart
  addToCartArray[IncCartIDNum].cartsQuantity++;

  // and also set in the local Storage
  window.localStorage.setItem("addToCartArray", JSON.stringify(addToCartArray));

  location.reload(); // page refresh
}

// ------ FUNCTION FOR (--) IN THE CART QUANTITY -------
function DecThis(Dec) {
  console.log(Dec);

  // get id of desire cart form desire button For ++
  var DecCartID = Dec.getAttribute("id"); // Inc-2
  console.log(DecCartID);

  // get the desire Index number of addToCartArray For delete this index
  var DecCartIDNum = DecCartID.slice(4); // for extracting 2 Form (Inc-2), 2 is our desire cart index
  console.log(DecCartIDNum);

  if (addToCartArray[DecCartIDNum].cartsQuantity > 1) {
    // -- in the carts quantity of desire cart
    addToCartArray[DecCartIDNum].cartsQuantity--;

    // and also set in the local Storage
    window.localStorage.setItem(
      "addToCartArray",
      JSON.stringify(addToCartArray)
    );

    location.reload(); // page refresh
  } else {
    alert("if you don't need this cart, You Can Remove It!");
  }
}

// ------ FUNCTION FOR CHECK OUT / BUY THE CARTS (ORDER DONE) -------
function checkOut() {
  addToCartArray.push({
    totalItems: totalItems,
    totalPrice: cartsTotalPrice + 7 + 4.8,
  });

  // and also set in the local Storage
  window.localStorage.setItem("addToCartArray", JSON.stringify(addToCartArray));

  OnlineStore.ordersDetail.push(addToCartArray);

  // and also set in the local Storage
  window.localStorage.setItem(
    "ORDERS",
    JSON.stringify(OnlineStore.ordersDetail)
  );

  addToCartArray.length = 0;

  // and also set in the local Storage
  window.localStorage.setItem("addToCartArray", JSON.stringify(addToCartArray));

  alert("Your Order Done Successfully");

  location.reload(); // then refereash the page
}

// console.log(OnlineStore.usersDetail);
// console.log(OnlineStore.ordersDetail);

// ------ GOLBALY WORK FOR 2 FILES (HOME,CART )------

// phelay products is lien show nhe ho rhi thin, Q K hum ne Ye kam upper kia tha aur phie erroe A rha tha aur us se nichay ka code chal nhe rha tha
// Jab bhi globlay koi kam kisi aik specific page k lien kro wao to End m krwao Ta k code m Ager error aye to last m aye, Aur upper ka sara code chal gye
if (document.getElementById("currUserName")) {
  var currUser = JSON.parse(window.localStorage.getItem("currUserData"));
  console.log(currUser);

  var currUserName = document.getElementById("currUserName");
  console.log(currUserName.tagName);

  if (currUser){
    currUserName.innerHTML = currUser.userName;
  }
  // currUserName.innerHTML = currUser.userName;
}

// console.log(OnlineStore.usersDetail);
// console.log(OnlineStore.ordersDetail);

// console.log("product show krwany ka kam hogia");
console.log(addToCartArray);

// ----------------- FOR DASHBOARD -----------------------



// for showDashboard()
function showDashboard() {
  var showDashboard = document.querySelector(".content-area");

  showDashboard.innerHTML = `
  
  <div class="dashboard-activities">
  <h2>Dashboard Activities</h2>
  <div class="activity-cards">
      <div class="activity-card">
          <i class="fa fa-shopping-cart"></i>
          <h3>New Orders</h3>
          <p>10 new orders received today</p>
      </div>
      <div class="activity-card">
          <i class="fa fa-user-plus"></i>
          <h3>New Users</h3>
          <p>5 new users registered today</p>
      </div>
      <div class="activity-card">
          <i class="fa fa-dollar-sign"></i>
          <h3>Total Sales</h3>
          <p>$1000 sales generated today</p>
      </div>
      <div class="activity-card">
          <i class="fa fa-product-hunt"></i>
          <h3>New Products</h3>
          <p>10 new products added today</p>
      </div>
  </div>
  <div class="activity-graph">
      <h3>Sales Graph</h3>
      <!-- <img src="./assets/graph.png" alt=""> -->
      <div id="sales-graph">
          <img src="./assets/graph.png" alt="">
      </div>
  </div>
</div>

  `;
}





// for showUsers()
function showUsers() {
  var showUsers = document.querySelector(".content-area");

  showUsers.innerHTML = `
  
  
    <h2>Selected Link Heading</h2>
    <table>
        <thead>
            <tr>
                <th>User Number</th>
                <th>User Name</th>
                <th>User City</th>
                <th>User Email</th>
                <th>User Phone</th>
            </tr>
        </thead>
        <tbody class='trForShowUsers'>
   
        </tbody>
    </table>`;

  var showUsersTr = document.querySelector(".trForShowUsers");

  for (var i = 0; i < users.length; i++) {
    showUsersTr.innerHTML += `
      
  <tr>
      <td>${i + 1}</td>
      <td>${users[i].userName}</td>
      <td>${users[i].userCity}</td>
      <td>${users[i].userEmail}</td>
      <td>${users[i].userPhone}</td>
  </tr>`;
  }
}



// for showOrders()
function showOrders() {
  var showUsers = document.querySelector(".content-area");

  showUsers.innerHTML = `

              <h2>Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Items</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody class="odersTr">
                     
                    </tbody>
                </table>
  
  
   `;

  var odersTr = document.querySelector(".odersTr");

  for (var i = 0; i < OnlineStore.ordersDetail.length; i++) {
    odersTr.innerHTML += `
      
  <tr>
      <td># ${i + 1}</td>
      <td>${OnlineStore.ordersDetail[i][0].buyerName}</td>
      <td>${OnlineStore.ordersDetail[i][0].buyerEmail}</td>
      <td>${
        OnlineStore.ordersDetail[i][OnlineStore.ordersDetail[i].length - 1]
          .totalItems
      }</td>
      <td>${
        OnlineStore.ordersDetail[i][OnlineStore.ordersDetail[i].length - 1]
          .totalPrice
      }</td>
  </tr>`;
  }
}



// for showOrders()
function showProducts() {
  var showUsers = document.querySelector(".content-area");

  showUsers.innerHTML = `

              <h2>Products</h2>
                <table>
                    <thead>
                        <tr>

                            <th>Product</th>
                            <th>Category</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody class="productsTr">


                     
                    </tbody>
                </table>
  
  
   `;

  var productsTr = document.querySelector(".productsTr");

  for (var i = 0; i < OnlineStore.products.length; i++) {
    productsTr.innerHTML += `
      
  <tr>
      <td><img src="${OnlineStore.products[i].pImage}" alt="product img"><span>${OnlineStore.products[i].pName}</span></td>
      <td>${OnlineStore.products[i].pCategory}</td>
      <td>${OnlineStore.products[i].pStock}</td>
      <td>${OnlineStore.products[i].pPrice} <span onclick="editProduct(this)" id = "edit-${i}" >edit</span></td>
      <td>
      <span onclick="editProduct(this)" class='editCard' id = "edit-${i}" >edit</span> 
      <span onclick="delProduct(this)" class='delCard'  id = "delCard-${i}" >Del</span>
      </td>
      
  </tr>`;

  }
}



// for del product box 
function delProduct(d) {

  console.log(d);
  var delButtonId = d.getAttribute("id");
  var idOFProdForDel = delButtonId.slice(8);
  console.log(idOFProdForDel);

  OnlineStore.products.splice(idOFProdForDel,1);
  window.localStorage.setItem('PRODUCTS',JSON.stringify(OnlineStore.products));
  Swal.fire({
    title: "Product Delete Successfully",
    icon: "success",
    draggable: true
  }).then( () => {   
    location.reload();
    // then ka keyword ais liye use kiya ky condition true hoa he ya alert se phla he redirect kr rha tha dosre page pa               
  
}) ;


}



// for edit product box 
function editProduct(edit) {
  console.log(edit);
  var editButtonID = edit.getAttribute("id");
  var idOFProduct = editButtonID.slice(5);
  console.log(idOFProduct);

  var editProductBox  = document.querySelector('.editProductBox');
  var shadow = document.querySelector('.shadow');

  editProductBox.innerHTML = `
  <div class="product-image">
  <img src="${OnlineStore.products[idOFProduct].pImage}" alt="Product Image">
</div>
<div class="product-details">
  <form>
    <label for="product-name">Product Name:</label>
    <input type="text" id="pname" name="product-name" value="${OnlineStore.products[idOFProduct].pName}">

    <label for="description">Description:</label>
    <textarea id="description" name="description" rows="3">This is a sample product description.</textarea>

    <label for="price">Price:</label>
    <input type="number" id="pprice" name="price" value="${OnlineStore.products[idOFProduct].pPrice}" step="0.01">

    <label for="stock">Stock:</label>
    <input type="number" id="pstock" name="stock" value="${OnlineStore.products[idOFProduct].pStock}">

    <button onclick="saveChanges(this)" id= "save-${idOFProduct}">Save</button>
  </form>
  <span class ="cancle" onclick="cancel()">X</span>
</div>`;

  
  editProductBox.classList.add('show');
  shadow.classList.add('show');


}



// for save changes 
function saveChanges(save) {

  var saveID = save.getAttribute("id");
  var saveIDNum = saveID.slice(5);
  
  var editProductBox  = document.querySelector('.editProductBox');
  var shadow = document.querySelector('.shadow');
 
  var pstock = document.getElementById('pstock').value;
  var pprice = document.getElementById('pprice').value;
  var pname = document.getElementById('pname').value;

  OnlineStore.products[saveIDNum].pName = pname;
  OnlineStore.products[saveIDNum].pPrice = pprice;
  OnlineStore.products[saveIDNum].pStock = pstock;

  window.localStorage.setItem('PRODUCTS',JSON.stringify(OnlineStore.products));

  editProductBox.classList.remove('show');
  shadow.classList.remove('show');

  console.log(saveIDNum);
}



// for cancel the product box 
function cancel() {

  var shadow = document.querySelector('.shadow');
  var editProductBox  = document.querySelector('.editProductBox');
  editProductBox.classList.remove('show');
  shadow.classList.remove('show');

}

















// ---------- for slider ----------------
var counter = 1;
setInterval(function(){
  document.getElementById('r' + counter).checked = true;
  counter++;

  if(counter > 3) {
    counter = 1;
  }
},5000)

// console.log(OnlineStore.products);
// var editProductBox = document.querySelector('.editProductBox');
// editProductBox.innerHTML = `

// <div class="editProductBoxImg">
// <img src="" alt="">
// </div>
// <div class="editProductBoxContent">
// <input type="text" value="">
// <input type="text" value="">
// <input type="text" value="">
// <input type="text" value="">
// </div>

// `;





// ASSIGNMENT TODO LIST
/*

==> ORDERS  IN localStorage    ---- (DONE)

==> USERS IN localStorage     ---- (DONE)

==> currUser IN localStorage   ---- (DONE)

==> SPECIFIC OEDER OF USER AND ALL USER IN COMPAY ---- (DONE)

==> SHOW CARTS IN CART PAGE ---- (TODO)

*/

// ISSUES
/*
(1) ==> AGER HUMARAY PAS 3 PAGE HON, SIGNUP,LOGIN,HOME, AUR HUM SIGUNP KA KAM LINE NO.1 M KRWYN THEN LINE NO.2 AND LINE NO.3 RESPECTIVILY ACCORDING TO PAGE NUMBERING, PHIR JAB HUM HOME PAGE OPEN KREN GY TO, USKA TO KAM HI NHE HOGA, Q K LINE NO. 1 ERROR DE GI, NOT FOUND.

ANS : MY TEMPORARY SOLUTION IS, AGER HER FILE K LIEN KAM KRWANA H TO UPPER LIKHO AGER, KISI SPECIFC FILE K LIEN KAM KRWANA H TO WO LAST LIKHO, BUT IS SE BHI KAM NHE HOGA. BECAUSE AGER SIGNUP KA PHELAY LIKHA H AUR LOGIN KA BAD M, TO JAB LGOGIN PAGE PR HON GY TO WO MILAY GA HI NHE, Q K PHELAY TO SIGN UP KA LIKHA H, TO WHN ERROR A GYE GA, AUR CODE AGAY CHALY GA HI NHE,

2ND CORRECT SOLUTION IS, AP KO JIS FILE K LIEN JO KAM KRWANA H, US KO IF KI CONDITION M CHECK KRLO WO MIL BHI RHA H YA NHE, PHIR US IF KI CONDITION M KAM KRWA, FOR PREVENT FORM ERROR

*/

/*Work Todo 


1) Todo            
2) Calculator
3) 14 % OFF Task
4) OPPS
5) Objects
6) Array Methods
7) E Commerce







*/
