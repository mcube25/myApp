               const basket = ['apples','orange','grapes'];
               for (let i = 0; i < basket.length; i++){
                   console.log(basket[i]);
               }
               //can also se the form
               basket.forEach(item => {
                   console.log(item);
               })
               // for of loop
               //iterating over d array n strings
                   for (item of basket){console.log(item);}
               //for  in works with objects
               //enumerating
               const detailedBasket = {apples: 5, oranges: 10, grapes: 22}
                    for (item in detailedBasket){
                   console.log(item);
               };
               

