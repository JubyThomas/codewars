function numObj(s){
    let result=[];
    for (let res of s)
    {
      let obj={
        [res.toString()]:String.fromCharCode(res)
      }
      result.push(obj)
    }
    return result;
  }