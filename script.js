const quations=[
    {
        quation:"1,which car compony make most luxury car",
        options:["1.lamborghini","2.Bugatti","3.konigseg","4.rolls royes"],
        answer:"4.rolls royes"
    },
    {
        quation:"2,which is fastest car in the world",
        options:["1.Koenigsegg Jesko Absolut","2.McLaren Speedtail","3.Bugatti Chiron","4.Aston Martin Valkyrie"],
        answer:"1.Koenigsegg Jesko Absolut"
    },
    {
        quation:"3,world's most expansive car",
        options:["1.lamborghini urus","2.Rolls-Royce Boat Tail","3.Bugatti chiron","4.la ferrari"],
        answer:"2.Rolls-Royce Boat Tail"
    }
]
let count=0;
let score=0;
let usel=false;
function myfunction(){
    document.getElementById("qu").style.display="block";
    document.getElementById("qu1").innerText=quations[count].quation;
    document.getElementById("l1").innerText=quations[count]["options"][0];
    document.getElementById("l2").innerText=quations[count]["options"][1];
    document.getElementById("l3").innerText=quations[count]["options"][2];
    document.getElementById("l4").innerText=quations[count]["options"][3];
    document.getElementById("r1").value=quations[count]["options"][0]
    document.getElementById("r2").value=quations[count]["options"][1]
    document.getElementById("r3").value=quations[count]["options"][2]
    document.getElementById("r4").value=quations[count]["options"][3]
}
let sel=0;
function submit(){
    let ans=quations[count]["answer"];
    if(document.getElementById("r1").checked){
        sel=document.getElementById("r1").value=quations[count]["options"][0]
    }
    else if(document.getElementById("r2").checked){
        sel=document.getElementById("r2").value=quations[count]["options"][1]
    }
    else if(document.getElementById("r3").checked){
        sel=document.getElementById("r3").value=quations[count]["options"][2]
    }
    else if(document.getElementById("r4").checked){
        sel=document.getElementById("r4").value=quations[count]["options"][3]
    }
    else{
        alert("button select nzhti")
        document.getElementById("ans").style.display="none";
    }
    if(sel==ans){
        score=score+1;
        document.getElementById("ans").style.display="block";
        document.getElementById("score").innerText=score
        document.getElementById("ans").innerText="your answer is true";
        document.getElementById("Submit").disabled=true;
    }
    
    else{
        document.getElementById("ans").innerText="your answer is false";
        document.getElementById("Submit").disabled=true;
    }
    usel=true;
}
function next(){
    console.log(usel)
    if(usel==false){
        alert("please give the answer")
    }
    else{
        usel=false;
        count=count+1;
        document.getElementById("ans").style.display="none";
        document.getElementById("Submit").disabled=false;
        document.getElementById("r1").checked=false;
        document.getElementById("r2").checked=false;
        document.getElementById("r3").checked=false;
        document.getElementById("r4").checked=false;
        myfunction()
    }
}
