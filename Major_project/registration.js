function validateform(){  
    var fname=document.regform.firstname.value;  
    var lname=document.regform.lastname.value; 
    var emaill=document.regform.email.value;
    var pwd=document.regform.pwd.value;
    
    var checking=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    
    
      
    if (fname==null || fname==""){  
      alert("First Name can't be blank");  
      return false;  
    }
   else if (lname==null || lname==""){  
      alert("Last Name can't be blank");  
      return false;  
    }
      else if(emaill == "" || !checking.test(emaill) ){
            alert("Email can't be blank and in @ format.");
            return false;
      }
      else if(pwd.length<6)
      {
        alert("select strong password \n password length must be at least 6 char's long");
        return false;
      }
      else if(country.selectedIndex==0){
        alert("select your country");
        return false;
      }else{
        alert("Registered successfully");
      }
}