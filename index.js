// Write your solution in this file!
var customerName = 'bob';

function getCustomerName() {
    return customerName;
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
var bestCustomer;

function setBestCustomer(){ 
     bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer ='Assignment to constant variable.';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer =" unsuccessfully tries to reassign the least favorite customer";
    return leastFavoriteCustomer;
}