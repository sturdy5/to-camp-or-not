import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { TripCalculator } from "../types/TripCalculator";

@customElement('trip-results')
class TripResults extends LitElement {

    @property()
    name: string = "Not Camping";
    @property()
    recommendStyle: string = 'not-recommended';
    @property()
    calculator!: TripCalculator;
    @property()
    distanceMeasurement: string = 'Miles';

    static get styles() {
        return [
        css`
        .value {
            font-weight: bold;
        }

        .recommended {
            color: #4FF04D
        }

        .not-recommended {
            color: #F06A4D
        }
        `];
    }

    render() {
        return html`
            <div class='trip-results-box'>
                <h3>${this.name}</h3>
                Travel distance per tank: <span class="value">${this.calculator.tankDistance} ${this.distanceMeasurement}</span><br/>
                Fuel cost per fill up: <span class="value">$${this.calculator.fuelCostPerFillUp}</span><br/>
                Minimum number of stops: <span class="value">${this.calculator.numberOfStops}</span><br/>
                Total fuel cost: <span class="value">$${this.calculator.totalFuelCost}</span><br/>
                Total lodging cost: <span class="value">$${this.calculator.totalLodgingCost}</span><br/>
                <br/>
                Total cost ${this.name}: <span class="value ${this.recommendStyle}">$${this.calculator.totalCost}</span>
            </div>
        `;
    }
}