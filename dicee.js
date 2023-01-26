var randomeInd1 = Math.floor(Math.random()*6)+1;
var randomeInd2 = Math.floor(Math.random()*6)+1;
var path1 = "images/dice"+randomeInd1+".png";
var path2 = "images/dice"+randomeInd2+".png";


document.querySelector(".img1").setAttribute("src",path1);
document.querySelector(".img2").setAttribute("src",path2);




function winner(){

    if(randomeInd1>randomeInd2){
        document.querySelector("h1").textContent = "🥇Player 1 Wins!!";
    }
    else if(randomeInd1<randomeInd2){
        document.querySelector("h1").textContent = "Player 2 wins!!🥇";
    }
    else{
        document.querySelector("h1").textContent = "Match Draw🤯!! Play again..";
    }

}

winner();
var SIT=window.setTimeout(function(){
    document.querySelector('h1').textContent = "Refresh me!!";
    window.clearTimeout(SIT);
  },3000);

