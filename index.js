function scuberGreetingForFeet(trip){
  // Write your code here!
  
  if (trip <= 400){
    return "This one is on me!"
  }else if(trip > 2000 && trip < 2500){
    return "I will gladly take your thirty bucks."
  }else if(trip > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const isNYC = city === "NYC" ? "Ok, sounds good." : "No go.";
  return isNYC;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
 

  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much."; 
      return response;
      break;
    case 'not as generous':
      response = "Thank you.";
      return response;
      break;
    default:
      response = 'Bye.';
      return response;
      break;  
        
  }
}