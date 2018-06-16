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

function setup() {
    createCanvas(windowWidth - 50, windowHeight - 50);
    background(0);
}

function draw() {
    background(0);
    textSize(60);
    textAlign(CENTER);
    fill(255);
    let index = +(frameCount < 100 ? 0 : ("" + frameCount).charAt(("" + frameCount).length - 3));
    let crewMember = castCrew[index];
    text(crewMember, width / 2, height / 2);
}