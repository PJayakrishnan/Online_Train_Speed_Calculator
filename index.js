function speedCalculation()
{
    var coachtype = document.getElementById("coachType").value;
    var coachnumber = document.getElementById("coachNumber").value;
    var locotype = document.getElementById("locoType").value;
    var loconumber = document.getElementById("locoNumber").value;
    var timetaken = document.getElementById("timeTaken").value;

    var speed = ((coachtype*coachnumber) + (locotype*loconumber))/timetaken;

    var speed_inKMPH = speed *18/5 ;

    document.getElementById("display").innerHTML = String(speed_inKMPH) +" km/hr";

}