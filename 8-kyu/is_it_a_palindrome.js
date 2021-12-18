function isPalindrome(x) {
    // your code here
    
    if(x.toLowerCase()==x.split('').reverse().join('').toLowerCase())
      return true;
    else
      return false;
  }