function smallEnough(a, limit){
    let arr=a.map(x=>x<=limit ? true:false);
    if(arr.includes(false))
      {
        return false
      }
    else return true;
  }