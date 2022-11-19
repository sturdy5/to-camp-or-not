export class TripCalculator {
    private _fuelEfficiency: number = 0.0;
    private _fuelCapacity: number = 0.0;
    private _fuelCost: number = 0.0;
    private _fuelCapacityUsageRatio: number = 0.0;
    private _totalDistance: number = 0.0;
    private _numberOfNights: number = 0;
    private _lodgingCost: number = 0.0;

    public constructor(fuelEfficiency: number, fuelCapacity: number, fuelCost: number, fuelCapacityUsageRatio: number, totalDistance: number, numberOfNights: number, lodgingCost: number) {
        this._fuelCapacity = fuelCapacity;
        this._fuelEfficiency = fuelEfficiency;
        this._fuelCost = fuelCost;
        this._fuelCapacityUsageRatio = fuelCapacityUsageRatio;
        this._totalDistance = totalDistance;
        this._numberOfNights = numberOfNights;
        this._lodgingCost = lodgingCost;
    }

    public set fuelCapacity(fuelCapacity: number) {
        this._fuelCapacity = fuelCapacity;
    }

    public set fuelEfficiency(fuelEfficiency: number) {
        this._fuelEfficiency = fuelEfficiency;
    }

    public set fuelCost(fuelCost: number) {
        this._fuelCost = fuelCost;
    }

    public set fuelCapacityUsageRatio(fuelCapacityUsageRatio: number) {
        this._fuelCapacityUsageRatio = fuelCapacityUsageRatio;
    }

    public set totalDistance(totalDistance: number) {
        this._totalDistance = totalDistance;
    }

    public set numberOfNights(numberOfNights: number) {
        this._numberOfNights = numberOfNights;
    }

    public set lodgingCost(lodgingCost: number) {
        this._lodgingCost = lodgingCost;
    }

    public get tankDistance() {
        return this._fuelCapacity * this._fuelCapacityUsageRatio * this._fuelEfficiency;
    }

    public get fuelCostPerFillUp() {
        return this._getCurrency(this._fuelCapacity * this._fuelCapacityUsageRatio * this._fuelCost);
    }

    public get numberOfStops() {
        return Math.floor(this._totalDistance / this.tankDistance);
    }

    public get totalFuelCost() {
        return this._getCurrency((this._totalDistance / this.tankDistance) * (this._fuelCapacity * this._fuelCapacityUsageRatio * this._fuelCost));
    }

    public get totalLodgingCost() {
        return this._getCurrency(this._numberOfNights * this._lodgingCost);
    }

    public rawTotal() {
        return ((this._totalDistance / this.tankDistance) * (this._fuelCapacity * this._fuelCapacityUsageRatio * this._fuelCost)) +
        (this._numberOfNights * this._lodgingCost);
    }

    public get totalCost() {
        return this._getCurrency(this.rawTotal());
    }

    private _getCurrency(value: number) {
        return (Math.round(value * 100) / 100).toFixed(2);
    }
}