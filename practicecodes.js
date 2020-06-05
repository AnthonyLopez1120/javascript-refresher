//function that returns a negative number

function makeNegative(num){
    if (num > 0){ // checks to see if num is already negative by checking if its less than zero
        return num * -1
    }else{
        return num // incase num is already negative
    }
}