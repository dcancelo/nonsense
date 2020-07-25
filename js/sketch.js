/**
 * 
 * Crew cast's Star Trek: First Contact (1996)
 * 
 */
var castCrew = [
    'Patrick Stewart',
    'Jonathan Frakes',
    'Brent Spiner',
    'Levar Burton',
    'Michael Dorn',
    'Gates McFadden',
    'Marina Sirtis',
    'Alfre Woodard',
    'James Cromwell',
    'Alice Kridge'];

var fontSize;
var previousCrewMember;
var index;
const initialFontSize = 230;
var member;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //noCanvas();
    background(0);
    index = 0;
    fontSize = initialFontSize;
    previousCrewMember = castCrew[index];
}


function draw() {
    background(0);
    textSize(fontSize);
    fill(255);
    textAlign(CENTER);
    index = (fontSize < 35) ? index + 1 : index;
    if (index === castCrew.length) {
        index = 0;
    }
    let crewMember = castCrew[index];
    if (crewMember !== previousCrewMember) {
        fontSize = initialFontSize;
        previousCrewMember = crewMember;
    } else {
        fontSize -= 0.5;
    }
    text(crewMember, width / 2, height / 2);
}