
array_1=['pen','pizza','book','bottle','flower','vase'];

random_number = Math.floor((Math.random()*array_1.length)+1);

console.log(array_1[random_number]);
sketch = array_1[random_number];



document.getElementById("sketch_to_be_draw").innerHTML="Sketch to be drawn: " + sketch;


function updateCanvas(){
  background("white");
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

counter = 0;
timer_counter = 0;
timer_check = null;
answer_holder = null;
function draw(){
    check_sketch();

    if(canvas==sketch){
        answer_holder="set";
        counter++
        document.getElementById("score").innerHTML = "<span>Score: </span>" + counter;
    }
}

function new_sketch(){

}

function check_sketch(){
  timer_counter++
  document.getElementById("timer").innerHTML = "<span>Timer: </span>" + timer_counter;
  console.log(timer_counter);

  if(timer_counter > 400){
    timer_counter = 0;
    timer_check = "completed";
  }

  if(timer_check=="completed" || answer_holder=="set"){
    updateCanvas();
    
  }
}
