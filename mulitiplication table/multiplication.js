let output="";

for(let i =1;i<=10;i++) {
    output +=`<h3>table of ${i}</h3>`;
    for(let j=1;j<=10;j++) {
        output +=`${i}x${j}=${i*j}<br>`;
    }
    output+="<hr>";
}
document.getElementById("tables").innerHTML=output;