
var maximum69Number  = function(num) {
        
        // #  69 -> 9, 9 
        // #  69 -> 6, 6
        // # 9, 6, 6, 9 -> (9) = 6, 6, 6, 9
        // # 9, 6, 6, 9 -> 9, 9, 6, 9
        // # 9, 6, 6, 9 -> 9, 6, 9, 9
        // # 9, 6, 6, 9 -> 9, 6, 6, 6

    let num_str = num.toString();
    let non = [];
    let swap = [];
    let res = [];
    
    for (let i = 0; i < num_str.length; i++) { 
        non += num_str[i];

        for (let j = 1; j < num_str[i] + 1; j++ ) {
            res += num_str[j];

            // num_str[j] = num_str[i];
            
            // res  += swap[j];
        }
        
    }
    console.log(non)
    console.log(res)
    
}
// FInal solution
 // let num_str = num.toString()
    // for (let i = 0; i < num_str.length; i++) { 
        
    //     if (num_str[i] === '6') {
    //         return parseInt(num_str.substring(0, i) + '9' + num_str.substring(i + 1))
    //     }
    // }
    // return num;

  
  // SHorter solution - less Optimum  
    return parseInt(num.toString().replace('6', '9'));


console.log(maximum69Number(9996));