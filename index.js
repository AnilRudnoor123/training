const input=[
{id:1, useName:"Arjun"},
{id:2, useName:"Saif Ali"},
{id:3, useName:"Katrina"},
{id:4, useName:"Saif Ali"},
]
const uniqueInput = input.filter((item, index) => {

    console.log(index,input.findIndex(obj => obj.useName === item.useName))
  return index === input.findIndex(obj => obj.useName === item.useName);
});

console.log(uniqueInput);


	
	function removeDuplicates(arr) {

		return arr.filter((item,index) => arr.indexOf(item) === index);
	}
	
	// console.log(removeDuplicates(input));

   

    arr11 = input.filter( function( item, index, inputArray ) {
               return inputArray.indexOf(item) == index;
        });
    // console.log(arr11)

   const itemtoadd={id:5 ,name:"anil"}

const result22=[]
for(const items of input){
    if(itemtoadd.name!=items.useName){
        console.log(input.push(itemtoadd))


    }else{
        return
    }
   
}

console.log("WW",result22)
    array1()