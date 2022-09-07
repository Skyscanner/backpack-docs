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

import { themeAttributes as badgeThemeAttributes } from 'backpack/packages/bpk-component-badge';
import { themeAttributes as bannerAlertThemeAttributes } from 'backpack/packages/bpk-component-banner-alert';
import { themeAttributes as barchartThemeAttributes } from 'backpack/packages/bpk-component-barchart';
import { themeAttributes as blockquoteThemeAttributes } from 'backpack/packages/bpk-component-blockquote';
import {
  buttonThemeAttributes,
  primaryThemeAttributes,
  secondaryThemeAttributes,
  destructiveThemeAttributes,
  featuredThemeAttributes,
} from 'backpack/packages/bpk-component-button';
import { themeAttributes as calendarThemeAttributes } from 'backpack/packages/bpk-component-calendar';
import { themeAttributes as checkboxThemeAttributes } from 'backpack/packages/bpk-component-checkbox';
import { themeAttributes as datepickerThemeAttributes } from 'backpack/packages/bpk-component-datepicker';
import { themeAttributes as drawerThemeAttributes } from 'backpack/packages/bpk-component-drawer';
import { themeAttributes as fieldsetThemeAttributes } from 'backpack/packages/bpk-component-fieldset';
import { themeAttributes as formValidationThemeAttributes } from 'backpack/packages/bpk-component-form-validation';
import { themeAttributes as horizontalNavThemeAttributes } from 'backpack/packages/bpk-component-horizontal-nav';
import { themeAttributes as inputThemeAttributes } from 'backpack/packages/bpk-component-input';
import {
  linkAlternateThemeAttributes,
  themeAttributes as linkThemeAttributes,
} from 'backpack/packages/bpk-component-link';
import {
  defaultIconMarkerThemeAttributes,
  priceMarkerThemeAttributes,
} from 'backpack/packages/bpk-component-map';
import { themeAttributes as modalThemeAttributes } from 'backpack/packages/bpk-component-modal';
import { themeAttributes as nudgerThemeAttributes } from 'backpack/packages/bpk-component-nudger';
import { themeAttributes as paginationThemeAttributes } from 'backpack/packages/bpk-component-pagination';
import { themeAttributes as popoverThemeAttributes } from 'backpack/packages/bpk-component-popover';
import { themeAttributes as progressThemeAttributes } from 'backpack/packages/bpk-component-progress';
import { themeAttributes as radioThemeAttributes } from 'backpack/packages/bpk-component-radio';
import { themeAttributes as selectThemeAttributes } from 'backpack/packages/bpk-component-select';
import { themeAttributes as sliderThemeAttributes } from 'backpack/packages/bpk-component-slider';
import { themeAttributes as spinnerThemeAttributes } from 'backpack/packages/bpk-component-spinner';
import { themeAttributes as switchThemeAttributues } from 'backpack/packages/bpk-component-switch';
import { themeAttributes as starRatingThemeAttributes } from 'backpack/packages/bpk-component-star-rating';
import { themeAttributes as textareaThemeAttributes } from 'backpack/packages/bpk-component-textarea';
import { themeAttributes as navigationBarThemeAttributes } from 'backpack/packages/bpk-component-navigation-bar';

const docsThemeAttributes = [
  'docsSidebarBackground',
  'docsSidebarLink',
  'docsSidebarLinkBorder',
  'docsSidebarSelectedArrowColor',
  'primaryColor',
  'themeName',
];

export default [
  ...badgeThemeAttributes,
  ...bannerAlertThemeAttributes,
  ...barchartThemeAttributes,
  ...blockquoteThemeAttributes,
  ...buttonThemeAttributes,
  ...primaryThemeAttributes,
  ...secondaryThemeAttributes,
  ...destructiveThemeAttributes,
  ...featuredThemeAttributes,
  ...calendarThemeAttributes,
  ...checkboxThemeAttributes,
  ...datepickerThemeAttributes,
  ...drawerThemeAttributes,
  ...fieldsetThemeAttributes,
  ...formValidationThemeAttributes,
  ...horizontalNavThemeAttributes,
  ...inputThemeAttributes,
  ...linkThemeAttributes,
  ...linkAlternateThemeAttributes,
  ...modalThemeAttributes,
  ...nudgerThemeAttributes,
  ...paginationThemeAttributes,
  ...popoverThemeAttributes,
  ...progressThemeAttributes,
  ...radioThemeAttributes,
  ...selectThemeAttributes,
  ...sliderThemeAttributes,
  ...spinnerThemeAttributes,
  ...starRatingThemeAttributes,
  ...switchThemeAttributues,
  ...textareaThemeAttributes,
  ...navigationBarThemeAttributes,
  ...defaultIconMarkerThemeAttributes,
  ...priceMarkerThemeAttributes,
  ...docsThemeAttributes,
];
