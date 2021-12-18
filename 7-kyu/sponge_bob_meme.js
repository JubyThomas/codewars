function spongeMeme(sentence) {
    let result=[];
    
    sentence.split("").forEach((x, index)=>{   
      if(index==0 || index%2==0)
       result.push(x.toUpperCase());        
      else
       result.push(x.toLowerCase());
      
    });
    
    return result.join('');
    
  }