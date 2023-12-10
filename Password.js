function passwordValidation(password) {

    if (password.length < 8) {

      return 'Password must be at least 8 characters long.';
    }
  
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {

      return 'Password must contain both uppercase and lowercase letters.';
    }
  
    if (!/\d/.test(password)) {

      return 'Password must contain at least one digit.';
    }
  
    // Password meets the criteria
    return 'Password is valid!';
  }
  

  const password ='adewuyiRaihanat1608';
    
  console.log(passwordValidation(password)); 
  