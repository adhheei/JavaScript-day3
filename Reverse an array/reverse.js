function reverse(arr){
    let reversed=[];
    for (let i=arr.length-1;i>=0;i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
let original=[1,2,3,4,5];
let reversed=reverse(original);

document.getElementById("reverse").innerHTML="Reversed Array :"+reversed;