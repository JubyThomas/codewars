function bump(x){
    let countBump =0, cuntFlat=0;
    
    x.split('').filter(x=>x=="n"?countBump+=1 :cuntFlat+=1)
    if(countBump>15)
      return "Car Dead" ;
    else
      return "Woohoo!";
  }