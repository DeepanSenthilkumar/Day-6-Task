class uberprice{
    constructor(distance,time)
    {
        this.distance = distance;
        this.time = time;
        this.fare = 5.00;
        this.minfare = 0.5;
        this.kmfare = 3;
    }
    calculation()
    {
        const timecost = this.time * this.minfare;
        const distcost = this.distance * this.kmfare;
        const uberfare = this.fare + timecost + distcost;
        return uberfare;
    }
}
let a = prompt("enter the distance in KM");
let b = prompt("enter the time in Seconds");
const rride = new uberprice(a,b);
console.log(rride.calculation());
