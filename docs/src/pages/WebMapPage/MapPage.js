/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import React, { Component, Fragment } from 'react';
import BpkMap, {
  withGoogleMapsScript,
  BpkMapMarker,
  BpkPriceMarker,
  MARKER_TYPES,
  PRICE_MARKER_STATUSES,
  type BpkMapLatLong,
} from 'bpk-component-map';
import { cssModules } from 'bpk-react-utils';
import LandmarkIconLg from 'bpk-component-icon/lg/landmark';
import BusIconSm from 'bpk-component-icon/sm/bus';
import FoodIconSm from 'bpk-component-icon/sm/food';
import LeisureIconSm from 'bpk-component-icon/sm/leisure';
import { withRtlSupport } from 'bpk-component-icon';
import mapReadme from 'bpk-component-map/README.md';

import { WebComponentPage } from '../../components/ComponentPage';

import STYLES from './MapPage.scss';

const AlignedLandmarkIconLg = withRtlSupport(LandmarkIconLg);
const AlignedBusIconSm = withRtlSupport(BusIconSm);
const AlignedFoodIconSm = withRtlSupport(FoodIconSm);
const AlignedLeisureIconLg = withRtlSupport(LeisureIconSm);

const BpkMapWithScript = withGoogleMapsScript(BpkMap);
const API_KEY = process.env.GOOGLE_MAPS_API_KEY || '';
const MAP_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}&libraries=geometry,drawing,places`;

const getClassName = cssModules(STYLES);

// Shibuya crossing, Tokyo.
const COORDINATES: BpkMapLatLong = {
  latitude: 35.661777,
  longitude: 139.704051,
};

class StatefulBpkMapMarkers extends Component<{}, { selected: number }> {
  constructor() {
    super();
    this.state = { selected: 0 };
  }

  selectMarker = selected => {
    this.setState({ selected });
  };

  render() {
    return (
      <Fragment>
        <BpkMapMarker
          selected={this.state.selected === 0}
          icon={<AlignedBusIconSm />}
          position={{
            latitude: 35.661777,
            longitude: 139.704051,
          }}
          onClick={() => {
            this.selectMarker(0);
          }}
        />
        <BpkMapMarker
          selected={this.state.selected === 1}
          large
          icon={<AlignedLandmarkIconLg />}
          position={{
            latitude: 35.6625,
            longitude: 139.705051,
          }}
          onClick={() => {
            this.selectMarker(1);
          }}
        />
        <BpkMapMarker
          selected={this.state.selected === 2}
          type={MARKER_TYPES.secondary}
          icon={<AlignedFoodIconSm />}
          position={{
            latitude: 35.6615,
            longitude: 139.705051,
          }}
          onClick={() => {
            this.selectMarker(2);
          }}
        />
        <BpkMapMarker
          selected={this.state.selected === 3}
          type={MARKER_TYPES.plain}
          icon={<AlignedLeisureIconLg />}
          position={{
            latitude: 35.6605,
            longitude: 139.704041,
          }}
          onClick={() => {
            this.selectMarker(3);
          }}
        />
      </Fragment>
    );
  }
}

const venues = [
  {
    id: '1',
    name: 'Hotel Monteverde',
    latitude: 35.68,
    longitude: 139.69,
    price: '£48',
    disabled: false,
  },
  {
    id: '2',
    name: 'Abisko Inn & Suites',
    latitude: 35.67,
    longitude: 139.7,
    price: '£151',
    disabled: false,
  },
  {
    id: '3',
    name: 'The Panjin Lounge',
    latitude: 35.65,
    longitude: 139.71,
    price: '£62',
    disabled: false,
  },
  {
    id: '4',
    name: 'Nara Bed & Breakfast',
    latitude: 35.63,
    longitude: 139.7,
    price: '£342',
    disabled: false,
  },
  {
    id: '5',
    name: 'Kolkata Springs Hotel',
    latitude: 35.635,
    longitude: 139.72,
    price: 'Sold out',
    disabled: true,
  },
];

type PriceMarkerState = {
  selectedId: string,
  viewedVenues: Array<string>,
};

class StatefulBpkPriceMarker extends Component<{}, PriceMarkerState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: '1',
      viewedVenues: ['1'],
    };
  }

  getStatus = id => {
    if (this.state.selectedId === id) {
      return PRICE_MARKER_STATUSES.focused;
    }
    if (this.state.viewedVenues.includes(id)) {
      return PRICE_MARKER_STATUSES.viewed;
    }
    return PRICE_MARKER_STATUSES.default;
  };

  selectVenue = id => {
    this.setState(prevState => ({
      selectedId: id,
      viewedVenues: [...prevState.viewedVenues, id],
    }));
  };

  render() {
    return (
      <Fragment>
        {venues.map(venue => (
          <BpkPriceMarker
            id={venue.id}
            label={venue.price}
            position={{ latitude: venue.latitude, longitude: venue.longitude }}
            disabled={venue.disabled}
            onClick={() => {
              this.selectVenue(venue.id);
            }}
            status={this.getStatus(venue.id)}
          />
        ))}
      </Fragment>
    );
  }
}

const components = [
  {
    id: 'default',
    title: 'Default',
    examples: [
      <div className={getClassName('bpkdocs-map-page__map')}>
        <BpkMapWithScript
          googleMapURL={MAP_URL}
          zoom={17}
          center={COORDINATES}
        />
      </div>,
    ],
  },
  {
    id: 'map-markers',
    title: 'Map markers',
    blurb:
      'Add custom markers to the map. You can customise the icon and the type to change the colour.',
    examples: [
      <div className={getClassName('bpkdocs-map-page__map')}>
        <BpkMapWithScript googleMapURL={MAP_URL} zoom={17} center={COORDINATES}>
          <StatefulBpkMapMarkers />
        </BpkMapWithScript>
      </div>,
    ],
  },
  {
    id: 'price-markers',
    title: 'Price markers',
    blurb:
      'Use price markers to display a collection of prices on a map. By default, they appear in sky blue. When focused, they grow in size and turn white, and when viewed they turn light blue.',
    examples: [
      <div className={getClassName('bpkdocs-map-page__map')}>
        <BpkMapWithScript googleMapURL={MAP_URL} zoom={12} center={COORDINATES}>
          <StatefulBpkPriceMarker />
        </BpkMapWithScript>
      </div>,
    ],
  },
];

const WebSubpage = () => (
  <WebComponentPage examples={components} readme={mapReadme} />
);

export default WebSubpage;
