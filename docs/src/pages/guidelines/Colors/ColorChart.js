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
import { cssModules } from 'bpk-react-utils';
import getContrastRatio from 'get-contrast-ratio';
import BpkText from 'bpk-component-text';
import BpkRadio from 'bpk-component-radio';
import { colors } from 'bpk-tokens/tokens/base.es6';

import STYLES from './color-chart.scss';
import brandColorCombinations from './brandColorCombinations';

const getClassName = cssModules(STYLES);

const chartColors = [
  colors.colorSkyBlue,
  colors.colorAbisko,
  colors.colorValensole,
  colors.colorTochigi,
  colors.colorKolkata,
  colors.colorErfoud,
  colors.colorBagan,

  colors.colorMonteverde,
  colors.colorGlencoe,
  colors.colorSagano,

  colors.colorBunol,
  colors.colorPetra,
  colors.colorNara,
  colors.colorPanjin,
  colors.colorHillier,
  colors.colorHarbour,
  colors.colorSkyGray,
  colors.colorWhite,
];

const MIN_CONTRAST_TEXT = 4.5;
const MIN_CONTRAST_LARGE_TEXT = 3;
const MIN_CONTRAST_OTHER = 0;

type DisplayCell = {
  c1: string,
  c2: string,
  show: boolean,
};

type DisplayRow = Array<DisplayCell>;

type State = {
  desiredContrast: number,
  displayRows: ?Array<DisplayRow>,
};

class ColorChart extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = { desiredContrast: MIN_CONTRAST_OTHER, displayRows: null };
  }

  componentDidMount() {
    const { desiredContrast } = this.state;
    this.recalculateDisplay(desiredContrast);
  }

  createColHeadings = () => {
    const colHeadings = [];
    colHeadings.push({
      c1: 'white',
      c2: 'white',
      show: true,
    });
    chartColors.forEach(c1 => {
      colHeadings.push({
        c1,
        c2: c1,
        show: true,
      });
    });
    return colHeadings;
  };

  isBrandCombination = (c1: string, c2: string) =>
    brandColorCombinations.includes(`${c1}_${c2}`);

  recalculateDisplay = (desiredContrast: number) => {
    const displayRows = [];
    const colHeadings = this.createColHeadings();
    displayRows.push(colHeadings);
    chartColors.forEach(c1 => {
      const displayRow = [];
      displayRow.push({
        c1,
        c2: c1,
        show: true,
      });
      chartColors.forEach(c2 => {
        displayRow.push({
          c1,
          c2,
          show:
            this.isBrandCombination(c1, c2) &&
            getContrastRatio(c1, c2) > desiredContrast,
        });
      });
      displayRows.push(displayRow);
    });

    this.setState({ displayRows, desiredContrast });
  };

  render() {
    const { displayRows, desiredContrast } = this.state;
    if (displayRows === null) {
      return null;
    }

    return (
      <Fragment>
        <BpkRadio
          checked={desiredContrast === MIN_CONTRAST_TEXT}
          name="textSizeSmall"
          aria-label="text size small"
          onChange={() => {
            this.recalculateDisplay(MIN_CONTRAST_TEXT);
          }}
          label="Small text (smaller than 18pt or 14pt bold) minimum ratio = 4.5:1"
        />
        <br />
        <BpkRadio
          checked={desiredContrast === MIN_CONTRAST_LARGE_TEXT}
          name="textSizeLarge"
          aria-label="text size large"
          onChange={() => {
            this.recalculateDisplay(MIN_CONTRAST_LARGE_TEXT);
          }}
          label={
            <Fragment>
              <BpkText>
                Large text (equal to or larger than 18pt or 14pt bold) minimum
                ratio = 3:1
              </BpkText>
              <br />
              <BpkText>
                Graphic elements (UI components or meaningful graphics) minimum
                ratio = 3:1
              </BpkText>
            </Fragment>
          }
        />
        <br />
        <BpkRadio
          checked={desiredContrast === MIN_CONTRAST_OTHER}
          name="decorativeGraphics"
          aria-label="decorativeGraphics"
          onChange={() => {
            this.recalculateDisplay(MIN_CONTRAST_OTHER);
          }}
          label="Decorative graphics (graphics that do not provide any information)"
        />
        <br />
        {/* Doesn't work when using a BpkTable */}
        {/* eslint-disable backpack/use-components */}
        <table
          aria-hidden="true"
          className={getClassName('bpk-docs-colors-chart')}
        >
          {displayRows &&
            displayRows.map(displayRow => (
              <tr>
                {displayRow.map(displayCell => (
                  <th>
                    <div
                      className={getClassName('bpk-docs-colors-chart__item')}
                      style={{
                        backgroundColor: displayCell.c1,
                        opacity: displayCell.show ? 1 : 0,
                      }}
                    >
                      <div
                        className={getClassName('bpk-docs-colors-chart__blob')}
                        style={{ backgroundColor: displayCell.c2 }}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
        </table>
        {/* eslint-enable backpack/use-components */}
      </Fragment>
    );
  }
}

export default ColorChart;
