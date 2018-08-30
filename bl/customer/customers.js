
 var passwordValidator = require('password-validator');
 const customersRepo = require('../../dal/customer/customers');

exports.getCustomerByID = (req, res, next) => {

}

exports.updateCustomerByID = (req, res, next) => {
    
}

exports.registerCustomer = (req, res) => {   
   var user=req.headers.user_name;
   var pass=req.headers.password;
   var schema= new passwordValidator();
   schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase().has().not().spaces();                              // Must have lowercase letters

    if (schema.validate(pass)){
        customersRepo.addUserToDB(user,pass);
        res.sendStatus(200);
    }
    else{
        res.sendStatus(403);
    }
    


}
