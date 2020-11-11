
function decodeString (ystring :string){
    let l :number =  ystring.length ;

    let startt :number =ystring.search('\\[');
    if (startt == -1 )
    {
        return ystring ;
        
    }
    let e :number =ystring.search('\\]');
    e++;

    let m :number = parseInt( ystring[startt-1]);

    let arr1 :string =  (ystring.slice(0,startt-1));
    
    let arr2 :string =  (ystring.slice(e,l));
    
    let arr3 :string =  (ystring.slice(startt+1,e-1));

    let arr33 : string ='';

    for (let i :number = 0 ; i < m ; i++ )
    {
        arr33 += arr3;
    }

    let finalArr: string = arr1+arr33+arr2;

    return finalArr;
}

let ystring: string = `A3[v]BC2[M]ZZ6[R]h`;// לקלוט מהמשתמש

console.log("\nPlease enter a encoded string :\n");
console.log(ystring);
let x = 1; 
while (x){
    let startt :number =ystring.search('\\[');
    if (startt == -1 )
    {
        console.log("\ndecoded string :\n");
        console.log(ystring);
        x = 0 ;
    }
    else 
        ystring = decodeString(ystring); 

}
