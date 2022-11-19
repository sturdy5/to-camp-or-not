import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';
import { LocalConfig } from '../custom-types/Types.js';
import { TripCalculator } from '../custom-types/TripCalculator';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @state() _localConfig: LocalConfig = {
    efficiencyMeasurement: 'mpg',
    capacityMeasurement: 'Gallons',
    distanceMeasurement: 'Miles'
  };

  @state() _fuelUnits: any = {
    normalFuelEfficiency: 0,
    towingFuelEfficiency: 0,
    fuelCapacity: 0,
    fuelCost: 0,
    fuelUsage: 0
  };

  @state() _tripUnits: any = {
    totalDistance: 0,
    numberOfNights: 0,
    lodgingCost: 0,
    campingCost: 0
  };

  lodgingCalculator = new TripCalculator(this._fuelUnits.normalFuelEfficiency, this._fuelUnits.fuelCapacity, this._fuelUnits.fuelCost, this._fuelUnits.fuelUsage, this._tripUnits.totalDistance, this._tripUnits.numberOfNights, this._tripUnits.lodgingCost);
  campingCalculator = new TripCalculator(this._fuelUnits.towingFuelEfficiency, this._fuelUnits.fuelCapacity, this._fuelUnits.fuelCost, this._fuelUnits.fuelUsage, this._tripUnits.totalDistance, this._tripUnits.numberOfNights, this._tripUnits.campingCost);
  lodgingRecommendation = (this.lodgingCalculator.rawTotal() <= this.campingCalculator.rawTotal()) ? 'recommended' : 'not-recommended';
  campingRecommendation = (this.campingCalculator.rawTotal() <= this.lodgingCalculator.rawTotal()) ? 'recommended' : 'not-recommended';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      .criteria, .results {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 750px) {
        .criteria, .results {
          flex-direction: row;
        }
      }

      .criteria > fuel-criteria {
        flex: 1;
        padding: 20px;
      }

      .criteria > trip-criteria {
        flex: 1;
        padding: 20px;
      }

      .results > div {
        flex: 1;
        padding: 20px;
      }
    `];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header title='To Camp or Not'></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              Fill out the criteria below to determine the total cost for camping versus not camping
              <local-criteria @units=${this._unitsListener}></local-criteria>
            </div>
            <div class="criteria">
              <fuel-criteria @fuelUnits=${this._fuelUnitsListener} efficiencyMeasurement=${this._localConfig.efficiencyMeasurement} capacityMeasurement=${this._localConfig.capacityMeasurement}></fuel-criteria>
              <trip-criteria @tripUnits=${this._tripUnitsListener}></trip-criteria>
            </div>
            <div slot="footer">
              <div class="results">
                <div class='trip-results-box'>
                  <h3>Not Camping</h3>
                  Travel distance per tank: <span class="value">${this.lodgingCalculator.tankDistance} ${this._localConfig.distanceMeasurement}</span><br/>
                  Fuel cost per fill up: <span class="value">$${this.lodgingCalculator.fuelCostPerFillUp}</span><br/>
                  Minimum number of stops: <span class="value">${this.lodgingCalculator.numberOfStops}</span><br/>
                  Total fuel cost: <span class="value">$${this.lodgingCalculator.totalFuelCost}</span><br/>
                  Total lodging cost: <span class="value">$${this.lodgingCalculator.totalLodgingCost}</span><br/>
                  <br/>
                  Total cost Not Camping: <span class="value ${this.lodgingRecommendation}">$${this.lodgingCalculator.totalCost}</span>
                </div>
                <div class='trip-results-box'>
                  <h3>Camping</h3>
                  Travel distance per tank: <span class="value">${this.campingCalculator.tankDistance} ${this._localConfig.distanceMeasurement}</span><br/>
                  Fuel cost per fill up: <span class="value">$${this.campingCalculator.fuelCostPerFillUp}</span><br/>
                  Minimum number of stops: <span class="value">${this.campingCalculator.numberOfStops}</span><br/>
                  Total fuel cost: <span class="value">$${this.campingCalculator.totalFuelCost}</span><br/>
                  Total lodging cost: <span class="value">$${this.campingCalculator.totalLodgingCost}</span><br/>
                  <br/>
                  Total cost Camping: <span class="value ${this.campingRecommendation}">$${this.campingCalculator.totalCost}</span>
                </div>
              </div>
            </div>
          </sl-card>

          <sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">About</sl-button>
        </div>

        <pwa-install>Install To Camp or Not</pwa-install>
      </main>
    `;
  }

  _unitsListener(e: CustomEvent) {
    this._localConfig = {...e.detail};
  }

  _fuelUnitsListener(e: CustomEvent) {
    this._fuelUnits = {...e.detail};
    this.campingCalculator.fuelEfficiency = +this._fuelUnits.towingFuelEfficiency;
    this.lodgingCalculator.fuelEfficiency = +this._fuelUnits.normalFuelEfficiency;
    this.campingCalculator.fuelCapacity = +this._fuelUnits.fuelCapacity;
    this.lodgingCalculator.fuelCapacity = +this._fuelUnits.fuelCapacity;
    this.campingCalculator.fuelCost = +this._fuelUnits.fuelCost;
    this.lodgingCalculator.fuelCost = +this._fuelUnits.fuelCost;
    this.campingCalculator.fuelCapacityUsageRatio = +this._fuelUnits.fuelUsage;
    this.lodgingCalculator.fuelCapacityUsageRatio = +this._fuelUnits.fuelUsage;
  }

  _tripUnitsListener(e: CustomEvent) {
    this._tripUnits = {...e.detail};
    this.campingCalculator.totalDistance = +this._tripUnits.totalDistance;
    this.lodgingCalculator.totalDistance = +this._tripUnits.totalDistance;
    this.campingCalculator.numberOfNights = +this._tripUnits.numberOfNights;
    this.lodgingCalculator.numberOfNights = +this._tripUnits.numberOfNights;
    this.campingCalculator.lodgingCost = +this._tripUnits.campingCost;
    this.lodgingCalculator.lodgingCost = +this._tripUnits.lodgingCost;
  }
}
