function addTokens(input, tokens){
    if(typeof input != 'string') throw new Error("Invalid input");
    if(input.length<6) throw new Error("Input should have at least 6 characters");
    
    for(var i=0;i<tokens.length;i++)
        if( typeof tokens[i].tokenName !== 'string' ) throw new Error("Invalid array format");
        
    if(input.includes("...")==false) return input;
    else{
    
    var positions_array=[input.indexOf("...",0)];
    var pos1=positions_array[0]+3;
    var pos2=pos1;
    
    while(pos2<input.length)
    {
        pos2=input.indexOf("...",pos2);
        if(pos1!=pos2) positions_array.push(pos2);
        pos1=pos2;
        pos2=pos2+3;
    }
    
    var pi=0;
    for(var i=0;i<positions_array.length;i++)
        {input=(input.substring(pi,positions_array[i])).concat("${",tokens[i].tokenName,"}",input.substring(positions_array[i]+3,input.length));
        pi=pi+tokens[i].tokenName.length;
        }
    
    return input;
    
    }  
}

const app = {
    addTokens: addTokens
}

module.exports = app;

console.log(addTokens("Input ...",[{tokenName: "aaa"}]));