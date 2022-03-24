/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2022 Skyscanner Ltd
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

import * as routes from '../constants/routes';
import * as externalRoutes from '../constants/external-routes';

import autogeneratedLinks from './generated/links';

const ComponentsLinks = [
  {
    id: 'COMPONENTS',
    category: 'Components',
    sort: true,
    links: [
      {
        id: 'GRAPHIC_PROMOTION',
        route: routes.GRAPHIC_PROMOTION,
        children: 'Graphic promotion',
        tags: ['web'],
        keywords: ['graphic promotion', 'advert'],
      },
      {
        id: 'SKIP_LINK',
        route: routes.SKIP_LINK,
        children: 'Skip link',
        tags: ['web'],
        keywords: ['skiplink'],
      },
      {
        id: 'BOTTOM_NAV',
        route: routes.BOTTOM_NAV,
        children: 'Bottom Nav',
        tags: ['android'],
        keywords: ['navigation bar'],
      },
      {
        id: 'BOTTOM_SHEET',
        route: routes.BOTTOM_SHEET,
        children: 'Bottom sheet',
        tags: ['ios', 'android'],
      },
      {
        id: 'TEXT',
        route: routes.TEXT,
        children: 'Text',
        tags: ['web', 'native', 'android', 'ios', 'compose'],
      },
      {
        id: 'LINK',
        route: routes.LINK,
        children: 'Link',
        tags: ['web', 'ios', 'native'],
      },
      {
        id: 'LIST',
        route: routes.LIST,
        children: 'List',
        tags: ['web'],
      },
      {
        id: 'DESCRIPTION_LIST',
        route: routes.DESCRIPTION_LIST,
        children: 'Description list',
        tags: ['web'],
      },
      {
        id: 'TABLE',
        route: routes.TABLE,
        children: 'Table',
        tags: ['web'],
      },
      {
        id: 'TOAST',
        route: routes.TOAST,
        children: 'Toast',
        tags: ['android', 'ios'],
      },
      {
        id: 'CHECKBOX',
        route: routes.CHECKBOX,
        children: 'Checkbox',
        tags: ['android', 'web'],
        keywords: ['switch', 'toggle'],
      },
      {
        id: 'SNACKBAR',
        route: routes.SNACKBAR,
        children: 'Snackbar',
        tags: ['android', 'ios', 'native'],
      },
      {
        id: 'BLOCKQUOTE',
        route: routes.BLOCKQUOTE,
        children: 'Blockquote',
        tags: ['web'],
      },
      {
        id: 'CODE',
        route: routes.CODE,
        children: 'Code',
        tags: ['web'],
      },
      {
        id: 'BUTTON',
        route: routes.BUTTON,
        children: 'Button',
        tags: ['web', 'native', 'android', 'ios', 'compose'],
      },
      {
        id: 'ICON',
        route: routes.ICON,
        children: 'Icon',
        tags: ['design', 'web', 'native', 'android', 'ios'],
      },
      {
        id: 'SPINNER',
        route: routes.SPINNER,
        children: 'Spinner',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'FLOATING_ACTION_BUTTON',
        route: routes.FLOATING_ACTION_BUTTON,
        children: 'Floating action button',
        tags: ['android'],
      },
      {
        id: 'RATING',
        route: routes.RATING,
        children: 'Rating',
        tags: ['web', 'android', 'ios', 'native'],
      },
      {
        id: 'FORM',
        route: routes.FORM,
        children: 'Form elements',
        tags: ['web'],
      },
      {
        id: 'FORM_LABEL',
        route: routes.FORM_LABEL,
        children: 'Form label',
        tags: ['web'],
      },
      {
        id: 'FORM_VALIDATION',
        route: routes.FORM_VALIDATION,
        children: 'Form validation',
        tags: ['web'],
      },
      {
        id: 'OVERLAY',
        route: routes.OVERLAY,
        children: 'Overlay',
        tags: ['android', 'web', 'ios'],
        keywords: ['tint', 'scrim'],
      },
      {
        id: 'CARD',
        route: routes.CARD,
        children: 'Card',
        tags: ['web', 'native', 'android', 'ios', 'compose'],
      },
      {
        id: 'CHIP',
        route: routes.CHIP,
        children: 'Chip',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'BADGE',
        route: routes.BADGE,
        children: 'Badge',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'PANEL',
        route: routes.PANEL,
        children: 'Panel',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'IMAGE',
        route: routes.IMAGE,
        children: 'Image',
        tags: ['web', 'native'],
      },
      {
        id: 'INFINITE_SCROLL',
        route: routes.INFINITE_SCROLL,
        children: 'Infinite scroll',
        tags: ['web'],
      },
      {
        id: 'BANNER_ALERT',
        route: routes.BANNER_ALERT,
        children: 'Banner alert',
        tags: ['web', 'native'],
      },
      {
        id: 'MOBILE_SCROLL_CONTAINER',
        route: routes.MOBILE_SCROLL_CONTAINER,
        children: 'Mobile scroll container',
        tags: ['web'],
      },
      {
        id: 'MODALS',
        route: routes.MODAL,
        children: 'Modal',
        tags: ['web'],
      },
      {
        id: 'AUTOSUGGEST',
        route: routes.AUTOSUGGEST,
        children: 'Autosuggest',
        tags: ['web'],
      },
      {
        id: 'POPOVER',
        route: routes.POPOVER,
        children: 'Popover',
        tags: ['web'],
      },
      {
        id: 'CALENDAR',
        route: routes.CALENDAR,
        children: 'Calendar',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'DATEPICKER',
        route: routes.DATEPICKER,
        children: 'Date picker',
        tags: ['web'],
      },
      {
        id: 'TOOLTIP',
        route: routes.TOOLTIP,
        children: 'Tooltip',
        tags: ['web'],
      },
      {
        id: 'ACCORDION',
        route: routes.ACCORDION,
        children: 'Accordion',

        tags: ['web'],
      },
      {
        id: 'NUDGER',
        route: routes.NUDGER,
        children: 'Nudger',
        tags: ['web', 'native', 'ios', 'android'],
      },
      {
        id: 'PROGRESS',
        route: routes.PROGRESS,
        children: 'Progress bar',
        tags: ['web', 'native', 'ios'],
      },
      {
        id: 'RADIO_BUTTON',
        route: routes.RADIO_BUTTON,
        children: 'Radio button',
        tags: ['web', 'android'],
      },
      {
        id: 'TICKET',
        route: routes.TICKET,
        children: 'Ticket',
        tags: ['web'],
      },
      {
        id: 'HORIZONTAL_NAV',
        route: routes.HORIZONTAL_NAV,
        children: 'Horizontal navigation',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'FIELDSET',
        route: routes.FIELDSET,
        children: 'Fieldset',
        tags: ['web'],
      },
      {
        id: 'STAR_RATING',
        route: routes.STAR_RATING,
        children: 'Star rating',
        tags: ['web', 'native', 'android', 'ios'],
      },
      {
        id: 'BAR_CHART',
        route: routes.BARCHART,
        children: 'Bar chart',
        tags: ['web', 'android', 'ios'],
      },
      {
        id: 'SLIDER',
        route: routes.SLIDER,
        children: 'Slider',
        tags: ['web', 'android'],
      },
      {
        id: 'DRAWER',
        route: routes.DRAWER,
        children: 'Drawer',
        tags: ['web'],
      },
      {
        id: 'PAGINATION',
        route: routes.PAGINATION,
        children: 'Pagination',
        tags: ['web'],
      },
      {
        id: 'DIALOG',
        route: routes.DIALOG,
        children: 'Dialog',
        tags: ['web', 'android', 'native', 'ios'],
      },
      {
        id: 'NAVIGATION_BAR',
        route: routes.NAVIGATION_BAR,
        children: 'Navigation bar',
        tags: ['web', 'android', 'native', 'ios'],
      },
      {
        id: 'NAVIGATION_STACK',
        route: routes.NAVIGATION_STACK,
        children: 'Navigation stack',
        tags: ['web'],
      },
      {
        id: 'BREAKPOINT',
        route: routes.BREAKPOINT,
        children: 'Breakpoint',
        tags: ['web'],
      },
      {
        id: 'HORIZONTAL_GRID',
        route: routes.HORIZONTAL_GRID,
        children: 'Horizontal grid',
        tags: ['web'],
      },
      {
        id: 'MAP',
        route: routes.MAP,
        children: 'Map',
        tags: ['web', 'native', 'ios', 'android'],
      },

      {
        id: 'PHONE_INPUT',
        route: routes.PHONE_INPUT,
        children: 'Phone input',
        tags: ['native', 'web'],
      },
      {
        id: 'BREADCRUMB',
        route: routes.BREADCRUMB,
        children: 'Breadcrumb',
        tags: ['web'],
      },
      // Native components.
      {
        id: 'NATIVE_FLAT_LIST',
        route: routes.FLAT_LIST,
        children: 'Flat list',
        tags: ['native'],
      },
      {
        id: 'NATIVE_INPUT',
        route: routes.TEXT_INPUT,
        children: 'Text input',
        tags: ['native', 'ios', 'android', 'web'],
      },
      // TODO: Uncomment later.
      // {
      //   id: 'NATIVE_PAGINATION_DOT',
      //   route: routes.PAGINATION_DOT,
      //   children: 'Pagination Dot',
      // },
      {
        id: 'NATIVE_PICKER',
        route: routes.PICKER,
        children: 'Picker',
        tags: ['native'],
      },
      {
        id: 'NATIVE_SECTION_LIST',
        route: routes.SECTION_LIST,
        children: 'Section list',
        tags: ['web', 'native'],
      },
      {
        id: 'NATIVE_SELECT',
        route: routes.SELECT,
        children: 'Select',
        tags: ['native', 'web'],
      },
      {
        id: 'NATIVE_SWITCH',
        route: routes.SWITCH,
        children: 'Switch',
        tags: ['native', 'android', 'ios', 'web'],
        keywords: ['switch', 'toggle', 'checkbox'],
      },
      {
        id: 'NATIVE_CAROUSEL',
        route: routes.CAROUSEL,
        children: 'Carousel',
        tags: ['native'],
      },
      {
        id: 'SCROLLABLE_CALENDAR',
        route: routes.SCROLLABLE_CALENDAR,
        children: 'Scrollable calendar',
        tags: ['web'],
      },
      {
        id: 'NATIVE_TOUCHABLE_OVERLAY',
        route: routes.TOUCHABLE_OVERLAY,
        children: 'Touchable overlay',
        tags: ['native'],
      },
      {
        id: 'NATIVE_TOUCHABLE_NATIVE_FEEDBACK',
        route: routes.TOUCHABLE_NATIVE_FEEDBACK,
        children: 'Touchable native feedback',
        tags: ['native'],
      },
      {
        id: 'NATIVE_ALERT',
        route: routes.ALERT,
        children: 'Alert',
        tags: ['native'],
      },
      {
        id: 'FLARE',
        route: routes.FLARE,
        children: 'Flare',
        tags: ['web', 'ios', 'native', 'android'],
      },
      {
        id: 'ARIA_LIVE',
        route: routes.ARIA_LIVE,
        children: 'ARIA Live',
        tags: ['web'],
        keywords: ['accessibility'],
      },
      // Utilities.
      {
        id: 'ALIGNMENT',
        route: routes.ALIGNMENT,
        children: 'Alignment',
        tags: ['web'],
      },
      {
        id: 'THEMING',
        route: routes.THEMING,
        children: 'Theming',
        tags: ['web', 'native', 'android', 'ios'],
      },
    ],
  },
];

export default [
  ...ComponentsLinks,
  {
    id: 'TOKENS',
    category: 'Tokens',
    sort: true,
    links: [...autogeneratedLinks.tokens],
  },
  {
    id: 'USING_BACKPACK',
    category: 'Using Backpack',
    sort: true,
    links: [...autogeneratedLinks.using],
  },
  {
    id: 'GUIDELINES',
    category: 'Guidelines',
    sort: true,
    links: [...autogeneratedLinks.guidelines],
  },
  {
    id: 'MISC',
    category: 'Miscellaneous',
    links: [
      {
        id: 'SASSDOC',
        route: '/sassdoc',
        children: 'SassDoc',
        blank: true,
      },
      {
        id: 'REQUESTS',
        route: externalRoutes.REQUEST,
        children: 'Request',
        blank: true,
      },
    ],
  },
];
