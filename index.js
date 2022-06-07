// Code your solution in this file!
const distanceFromHqInBlocks = (distance) => {
    return Math.abs(distance - 42);
  };

const distanceFromHqInFeet = (distance) =>{
    
    return Math.abs((distance-42)*264)
}

function distanceTravelledInFeet(start,destination){
    return Math.abs((destination - start) * 264)
    
}


 function calculatesFarePrice(start,destination){
     var distance = destination-start;
     const feet = Math.abs(distance)  * 264;
    if (Math.abs(distance)=== 1) {
      return 0
  }
    else if ( feet <= 2000) {
      return (Math.abs(feet)-400) * 0.02;
  }
    else if ( feet<2500) {
        return 25;
  }
  else if (feet >2500) {
      return 'cannot travel that far'
  }


 
 }
