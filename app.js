var order = prompt("what do you want coffee or tea ??");


while(order != "cofee" && order != "tea"){
    order = prompt("what do you want coffee or tea ??");
}
var itemOrder = '';

if(order == "coffee")
{
  itemOrder = '<img src="coffee.jpd"/>';
}
else if(order == "tea")
{
    itemOrder = '<img src="tea.png"/>';
}
var numofcups = prompt('How many cups do you want ?'); 

var result = '';
for(var i= 0; i<numofcups; i++)
{
    result = result + numofcups;
}
document.write(result);
