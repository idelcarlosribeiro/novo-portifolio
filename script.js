/*  Avaliação*/
var coravazi = document.getElementById("cora-vazio");
var coracheio = document.getElementById("cora-cheio");
var test = false;

function avaliar(){
    test = !test;
    if (test){
        coracheio.style.display = 'block';
        coravazi.style.display = 'none';

            let circle = document.querySelector("#circleProgress");
            var number = 68
            document.querySelector(".number").innerHTML = number + "%";
            circle.style.strokeDashoffset = 320 - (320 * number) / 100;
    }else{
        coracheio.style.display = "none";
        coravazi.style.display = 'block'

        let circle = document.querySelector("#circleProgress");
        var number = 67;
        document.querySelector(".number").innerHTML = number + "%";
        circle.style.strokeDashoffset = 320 - (320 * number) / 100;
    }
}



