import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('fuel-criteria')
class FuelCriteria extends LitElement {

    @property()
    efficiencyMeasurement: string = 'mpg'

    @property()
    capacityMeasurement: string = 'Gallons'

    @query('#normalFuelEfficiency')
    normalFuelEfficiency!: HTMLInputElement;

    @query('#towingFuelEfficiency')
    towingFuelEfficiency!: HTMLInputElement;

    @query('#fuelCapacity')
    fuelCapacity!: HTMLInputElement

    @query('#fuelCost')
    fuelCost!: HTMLInputElement

    @query('#fuelUsage')
    fuelUsage!: HTMLInputElement

    changeFuelUnits() {
        const options = {
            detail: {
                normalFuelEfficiency: this.normalFuelEfficiency.value,
                towingFuelEfficiency: this.towingFuelEfficiency.value,
                fuelCapacity: this.fuelCapacity.value,
                fuelCost: this.fuelCost.value,
                fuelUsage: this.fuelUsage.value
            },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('fuelUnits', options));
    }

    render() {
        return html`
            <div class='fuel-criteria-box'>
                <sl-input @input=${this.changeFuelUnits} label='Normal Fuel Efficiency (${this.efficiencyMeasurement})' type='number' min='0' id='normalFuelEfficiency' help-text='Average fuel efficiency when not towing'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Towing Fuel Efficiency (${this.efficiencyMeasurement})' type='number' min='0' id='towingFuelEfficiency' help-text='Average fuel efficiency when towing or fully loaded'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Fuel Capacity (${this.capacityMeasurement})' type='number' min='0' id='fuelCapacity' help-text='How big is the fuel tank on your vehicle'></sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Average Fuel Cost' type='number' step='0.01' min='0' id='fuelCost' help-text='What is the average cost of fuel'>
                  <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
                <sl-input @input=${this.changeFuelUnits} label='Average Fuel Capacity Usage' type='number' min='0' max='1' step='0.01' id='fuelUsage' help-text='What percentage of your tank do you use before you fill up' value='0.9'></sl-input>
            </div>
        `;
    }
}