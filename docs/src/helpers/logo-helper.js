/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import BackpackLogoWhite from '../static/backpack-logo-white.svg';
import BackpackLogoGrey from '../static/backpack-logo-sky-grey.svg';
import BackpackLogoPinkWhite from '../static/backpack-logo-pink-white.svg';
import BackpackLogoPinkGrey from '../static/backpack-logo-pink-sky-grey.svg';
import BackpackLogoPride from '../static/backpack-logo-pride.svg';
import BackpackLogoPrideGrey from '../static/backpack-logo-pride-sky-grey.svg';
import BackpackLogoSpooky from '../static/backpack-logo-spooky.svg';
import BackpackLogoChristmas from '../static/backpack-logo-christmas.svg';
import BackpackLogoChristmasGrey from '../static/backpack-logo-christmas-sky-grey.svg';

export const getBackpackLogo = (overImage = false) => {
  const companyUpdateLogo = false;

  const dateToday = new Date();
  const isPride = dateToday.getMonth() === 5;
  const isSpooky = dateToday.getMonth() === 9;
  const isChristmas =
    dateToday.getMonth() === 11 ||
    (dateToday.getMonth() === 0 && dateToday.getDate() < 7);

  // These logos are used for the main homepage hero
  if (overImage) {
    if (isPride) {
      return BackpackLogoPrideGrey;
    }
    if (isSpooky) {
      return BackpackLogoSpooky;
    }
    if (isChristmas) {
      return BackpackLogoChristmasGrey;
    }
    if (companyUpdateLogo) {
      return BackpackLogoPinkGrey;
    }
    return BackpackLogoGrey;
  }

  if (isPride) {
    return BackpackLogoPride;
  }
  if (isSpooky) {
    return BackpackLogoSpooky;
  }
  if (isChristmas) {
    return BackpackLogoChristmas;
  }
  if (companyUpdateLogo) {
    return BackpackLogoPinkWhite;
  }
  return BackpackLogoWhite;
};

export default { getBackpackLogo };
