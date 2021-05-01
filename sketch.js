//Create variables here\
var dog , dogImg,happyDogImg,database,foods,foodStock;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database
  foodStock = database.ref("food")
  foodStock.on ("value",redStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,60)
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  

  background("green")
  if(food==undefined){
    textSize(20)
    fill(225)
    text("note: Press UP ARROW to feed the drago milk",50,50)
    text("food remaining: "+ foods,150,150) 

    if(keyWentDown(UP_ARROW)){
      writeStock(foods);
      dog.addImage(happyDogImg)
    }

    
    if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg)
    }

   if(foods === 0){
     food=20;
   }


  }
  drawSprites();
  //add styles here

  function writeStock(x){
    if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
food:x
  })

  }

  function readStock(data){
    food = data.val()
  }

}



