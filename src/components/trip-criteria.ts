import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

@customElement('trip-criteria')
class TripCriteria extends LitElement {

    @query('#totalDistance')
    totalDistance!: HTMLInputElement;

    @query('#numberOfNights')
    numberOfNights!: HTMLInputElement;

    @query('#lodgingCost')
    lodgingCost!: HTMLInputElement;

    @query('#campingCost')
    campingCost!: HTMLInputElement;

    changeTripUnits() {
        const options = {
            detail: {
                totalDistance: this.totalDistance.value,
                numberOfNights: this.numberOfNights.value,
                lodgingCost: this.lodgingCost.value,
                campingCost: this.campingCost.value
            },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('tripUnits', options));
    }

    render() {
        return html`
            <div class='trip-criteria-box'>
                <sl-input @input=${this.changeTripUnits} label='Total Distance' id='totalDistance' type='number' min='0' help-test='How far will you travel roundtrip'></sl-input>
                <sl-input @input=${this.changeTripUnits} label='Number of Nights' id='numberOfNights' type='number' min='0' help-text='How many nights will you need to stay somewhere'></sl-input>
                <sl-input @input=${this.changeTripUnits} label='Average Lodging Cost' id='lodgingCost' type='number' min='0' step='0.01' help-text='Average nightly cost to stay in lodging'>
                    <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
                <sl-input @input=${this.changeTripUnits} label='Average Camping Cost' id='campingCost' type='number' min='0' step='0.01' help-text='Average nightly cost to camp'>
                    <sl-icon name='currency-dollar' slot='prefix'></sl-icon>
                </sl-input>
            </div>
        `;
    }
}