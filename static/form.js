let no_of_people = 0;
let fridge_quantity = 0;
let fridge_hrs = 0;
let freezer_quantity = 0;
let freezer_hrs = 0;
let oven_quantity = 0;
let oven_hrs = 0;
let stovetop_quantity = 0;
let stovetop_hrs = 0;
let dishwasher_quantity = 0;
let dishwasher_hrs = 0;
let microwave_quantity = 0;
let microwave_hrs = 0;
let tv_quantity = 0;
let tv_hrs = 0;
let gaming_quantity = 0;
let gaming_hrs = 0;
let computer_quantity = 0;
let computer_hrs = 0;
let speaker_quantity = 0;
let speaker_hrs = 0;
let ac_quantity = 0;
let ac_hrs = 0;
let fan_quantity = 0;
let fan_hrs = 0;
let cooler_quantity = 0;
let cooler_hrs = 0;
let incandbulb_quantity = 0;
let incandbulb_hrs = 0;
let ledbulb_quantity = 0;
let ledbulb_hrs = 0;
let incandtube_quantity = 0;
let incandtube_hrs = 0;
let ledtube_quantity = 0;
let ledtube_hrs = 0;
let daily_commute_check = false;
let daily_commute_distance = 0;
let daily_commute_bus = false;
let daily_commute_rail = false;
let daily_commute_metro = false;
let daily_commute_car = false;
let daily_commute_carpool = false;
let daily_commute_taxi = false;
let daily_commute_walking = false;
let air_travel_frequency = 0;
let air_travel_distance = 0;
let crypto_check = false;

function main_func(){
    no_of_people = document.querySelector("#no_of_people").value;
    fridge_quantity = document.querySelector("#fridge_quantity").value;
    fridge_hrs = document.querySelector("#fridge_hrs").value;
    freezer_quantity = document.querySelector("#freezer_quantity").value;
    freezer_hrs = document.querySelector("#freezer_hrs").value;
    oven_quantity = document.querySelector("#oven_quantity").value;
    oven_hrs = document.querySelector("#oven_hrs").value;
    stovetop_quantity = document.querySelector("#stovetop_quantity").value;
    stovetop_hrs = document.querySelector("#stovetop_hrs").value;
    dishwasher_quantity = document.querySelector("#dishwasher_quantity").value;
    dishwasher_hrs = document.querySelector("#dishwasher_hrs").value;
    microwave_quantity = document.querySelector("#microwave_quantity").value;
    microwave_hrs = document.querySelector("#microwave_hrs").value;
    tv_quantity = document.querySelector("#tv_quantity").value;
    tv_hrs = document.querySelector("#tv_hrs").value;
    gaming_quantity = document.querySelector("#gaming_quantity").value;
    gaming_hrs = document.querySelector("#gaming_hrs").value;
    computer_quantity = document.querySelector("#computer_quantity").value;
    computer_hrs = document.querySelector("#computer_hrs").value;
    speaker_quantity = document.querySelector("#speaker_quantity").value;
    speaker_hrs = document.querySelector("#speaker_hrs").value;
    ac_quantity = document.querySelector("#ac_quantity").value;
    ac_hrs = document.querySelector("#ac_hrs").value;
    fan_quantity = document.querySelector("#fans_quantity").value;
    fan_hrs = document.querySelector("#fans_hrs").value;
    cooler_quantity = document.querySelector("#cooler_quantity").value;
    cooler_hrs = document.querySelector("#cooler_hrs").value;
    incandbulb_quantity = document.querySelector("#incandbulb_quantity").value;
    incandbulb_hrs = document.querySelector("#incandbulb_hrs").value;
    ledbulb_quantity = document.querySelector("#ledbulb_quantity").value;
    ledbulb_hrs = document.querySelector("#ledbulb_hrs").value;
    incandtube_quantity = document.querySelector("#incandtube_quantity").value;
    incandtube_hrs = document.querySelector("#incandtube_hrs").value;
    ledtube_quantity = document.querySelector("#ledtube_quantity").value;
    ledtube_hrs = document.querySelector("#ledtube_hrs").value;


    if(document.querySelector("#daily_commute_check").checked == true){
        daily_commute_check = true;
    }
    daily_commute_distance = document.querySelector("#daily_commute_distance").value;

    if(document.querySelector("#daily_commute_bus").checked == true){
        daily_commute_bus = true;
    }
    if(document.querySelector("#daily_commute_metro").checked == true){
        daily_commute_metro = true;
    }
    if(document.querySelector("#daily_commute_rail").checked == true){
        daily_commute_rail = true;
    }
    if(document.querySelector("#daily_commute_car").checked == true){
        daily_commute_car = true;
    }
    if(document.querySelector("#daily_commute_carpool").checked == true){
        daily_commute_carpool = true;
    }
    if(document.querySelector("#daily_commute_taxi").checked == true){
        daily_commute_taxi = true;
    }
    if(document.querySelector("#daily_commute_walking").checked == true){
        daily_commute_walking = true;
    }

    air_travel_frequency = document.querySelector("#air_travel_frequency").value;
    air_travel_distance = document.querySelector("#air_travel_distance").value;
    if(document.querySelector("#crypto_check").checked == true){
        crypto_check = true;
    }

    //calculating electricity (kwH / year)
    let power_fridge = ((((175*fridge_hrs) / 1000) * 365) * fridge_quantity) ;
    let power_freezer = ((((65*freezer_hrs) / 1000) * 365) * freezer_quantity) ;
    let power_oven = ((((2400*oven_hrs) / 1000) * 365) * oven_quantity) ;
    let power_stovetop = ((((1500*stovetop_hrs) / 1000) * 365) * stovetop_quantity) ;
    let power_dishwasher = ((((1800*dishwasher_hrs) / 1000) * 365) * dishwasher_quantity) ;
    let power_microwave = ((((1200*microwave_hrs) / 1000) * 365) * microwave_quantity) ;
    let power_tv = ((((50*tv_hrs) / 1000) * 365) * tv_quantity) ;
    let power_gaming = ((((50*gaming_hrs) / 1000) * 365) * gaming_quantity) ;
    let power_computer = ((((60*computer_hrs) / 1000) * 365) * computer_quantity) ;
    let power_speaker = ((((50*speaker_hrs) / 1000) * 365) * speaker_quantity) ;
    let power_ac = ((((1500*ac_hrs) / 1000) * 365) * ac_quantity) ;
    let power_fan = ((((40*fan_hrs) / 1000) * 365) * fan_quantity) ;
    let power_cooler = ((((250*cooler_hrs) / 1000) * 365) * cooler_quantity) ;
    let power_incandbulb = ((((60*incandbulb_hrs) / 1000) * 365) * incandbulb_quantity) ;
    let power_ledbulb = ((((10*ledbulb_hrs) / 1000) * 365) * ledbulb_quantity) ;
    let power_incandtube = ((((60*incandtube_hrs) / 1000) * 365) * incandtube_quantity) ;
    let power_ledtube = ((((10*ledtube_hrs) / 1000) * 365) * ledtube_quantity) ;
    let electricity_emission = (((power_fridge + power_freezer + power_oven + power_stovetop + power_dishwasher + power_microwave + power_tv + power_gaming + power_computer + power_speaker + power_ac + power_fan + power_cooler + power_incandbulb + power_ledbulb + power_incandtube + power_ledtube) * 0.7) / no_of_people);
    
    let commute_emission = 0;
    console.log(daily_commute_walking)
    //calculating daily commute
    if(daily_commute_walking==false)
    {
        commute_emission = (((daily_commute_distance * 0.1)*2)*365) + (((air_travel_distance * 4.18) / 150) * air_travel_frequency);
    }
    if(daily_commute_walking){
        commute_emission = (((air_travel_distance * 4.18) / 150) * air_travel_frequency);
        console.log("Excellent");
    }
    let total_emission = electricity_emission + commute_emission;
  }

  
  