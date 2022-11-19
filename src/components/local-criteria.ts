import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

@customElement('local-criteria')
class LocalCriteria extends LitElement {

    render() {
        return html`
            <div class='local-criteria-box'>
                <sl-radio-group label="Select an option" name="a" value="1">
                    <sl-radio-button pill size="small" value="1" @click=${this._setImperial}>Imperial</sl-radio-button>
                    <sl-radio-button pill size="small" value="2" @click=${this._setMetric}>Metric</sl-radio-button>
                </sl-radio-group>
            </div>
        `;
    }

    _setMetric() {
        this._dispatchUseMetric(true);
    }

    _setImperial() {
        this._dispatchUseMetric(false);
    }

    _dispatchUseMetric(useMetric: boolean) {
        const options = {
            detail: {
                efficiencyMeasurement: useMetric ? 'km/L' : 'mpg',
                capacityMeasurement: useMetric ? 'Litres' : 'Gallons',
                distanceMeasurement: useMetric ? 'Kilometers' : 'Miles'
            },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('units', options));
    }
}