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

import * as ROUTES from './routes';

// Deprecated routes, kept here for redirects
export default {
  '/components/atoms': ROUTES.COMPONENTS,
  '/components/atoms/badge': ROUTES.BADGE,
  '/components/atoms/buttons': ROUTES.BUTTON,
  '/components/atoms/cards': ROUTES.CARD,
  '/components/atoms/chips': ROUTES.CHIP,
  '/components/atoms/forms': ROUTES.FORM,
  '/components/atoms/icons': ROUTES.ICON,
  '/components/atoms/images': ROUTES.IMAGE,
  '/components/atoms/panels': ROUTES.PANEL,
  '/components/atoms/spinners': ROUTES.SPINNER,
  '/components/atoms/typography': ROUTES.TEXT,
  '/components/bonds': ROUTES.TOKENS,
  '/components/bonds/animation': ROUTES.ANIMATION,
  '/components/bonds/borders': ROUTES.BORDERS,
  '/components/bonds/colors': ROUTES.COLORS,
  '/components/bonds/layout': ROUTES.SPACINGS,
  '/components/bonds/radii': ROUTES.RADII,
  '/components/bonds/shadows': ROUTES.SHADOWS,
  '/components/bonds/typesetting': ROUTES.TYPESETTING,
  '/components/molecules': ROUTES.COMPONENTS,
  '/components/molecules/accordions': ROUTES.ACCORDION,
  '/components/molecules/autosuggest': ROUTES.AUTOSUGGEST,
  '/components/molecules/banner-alerts': ROUTES.BANNER_ALERT,
  '/components/molecules/barcharts': ROUTES.BARCHART,
  '/components/molecules/calendar': ROUTES.CALENDAR,
  '/components/molecules/datepicker': ROUTES.DATEPICKER,
  '/components/molecules/fieldsets': ROUTES.FIELDSET,
  '/components/molecules/horizontal-nav': ROUTES.HORIZONTAL_NAV,
  '/components/molecules/modals': ROUTES.MODAL,
  '/components/molecules/notifications': ROUTES.BANNER_ALERT,
  '/components/molecules/nudgers': ROUTES.NUDGER,
  '/components/molecules/popovers': ROUTES.POPOVER,
  '/components/molecules/progress': ROUTES.PROGRESS,
  '/components/molecules/star-rating': ROUTES.STAR_RATING,
  '/components/molecules/tickets': ROUTES.TICKET,
  '/components/molecules/tooltips': ROUTES.TOOLTIP,
  '/components/native': ROUTES.COMPONENTS,
  '/components/native/badge': ROUTES.BADGE,
  '/components/native/banner-alerts': ROUTES.BANNER_ALERT,
  '/components/native/button': ROUTES.BUTTON,
  '/components/native/button-link': ROUTES.LINK,
  '/components/button-link': ROUTES.LINK,
  '/components/native/cards': ROUTES.CARD,
  '/components/native/flat-list': ROUTES.FLAT_LIST,
  '/components/native/horizontal-nav': ROUTES.HORIZONTAL_NAV,
  '/components/native/icons': ROUTES.ICON,
  '/components/native/navigation-bar': ROUTES.NAVIGATION_BAR,
  '/components/native/navigation-stack': ROUTES.NAVIGATION_STACK,
  '/components/native/nudger': ROUTES.NUDGER,
  '/components/native/pagination-dots': ROUTES.PAGINATION_DOT,
  '/components/native/panels': ROUTES.PANEL,
  '/components/native/phone-input': ROUTES.PHONE_INPUT,
  '/components/native/picker': ROUTES.PICKER,
  '/components/native/progress': ROUTES.PROGRESS,
  '/components/native/section-list': ROUTES.SECTION_LIST,
  '/components/native/select': ROUTES.SELECT,
  '/components/native/spinners': ROUTES.SPINNER,
  '/components/native/star-rating': ROUTES.STAR_RATING,
  '/components/native/switches': ROUTES.SWITCH,
  '/components/native/text': ROUTES.TEXT,
  '/components/native/text-input': ROUTES.TEXT_INPUT,
  '/components/native/text-view': ROUTES.TEXT_VIEW,
  '/components/native/tappable-link-label': ROUTES.TAPPABLE_LINK_LABEL,
  '/components/native/touchable-native-feedback':
    ROUTES.TOUCHABLE_NATIVE_FEEDBACK,
  '/components/native/touchable-overlay': ROUTES.TOUCHABLE_OVERLAY,
  '/components/utilities': ROUTES.COMPONENTS,
  '/components/utilities/alignment': ROUTES.ALIGNMENT,
  '/components/utilities/theming': ROUTES.THEMING,
  '/components/web': ROUTES.COMPONENTS,
  '/components/web/accordions': ROUTES.ACCORDION,
  '/components/web/autosuggest': ROUTES.AUTOSUGGEST,
  '/components/web/badge': ROUTES.BADGE,
  '/components/web/banner-alerts': ROUTES.BANNER_ALERT,
  '/components/web/barcharts': ROUTES.BARCHART,
  '/components/web/blockquotes': ROUTES.BLOCKQUOTE,
  '/components/web/breakpoints': ROUTES.BREAKPOINT,
  '/components/web/buttons': ROUTES.BUTTON,
  '/components/web/calendar': ROUTES.CALENDAR,
  '/components/web/cards': ROUTES.CARD,
  '/components/web/chips': ROUTES.CHIP,
  '/components/web/code': ROUTES.CODE,
  '/components/web/datepicker': ROUTES.DATEPICKER,
  '/components/web/description-lists': ROUTES.DESCRIPTION_LIST,
  '/components/web/dialogs': ROUTES.DIALOG,
  '/components/web/drawer': ROUTES.DRAWER,
  '/components/web/fieldsets': ROUTES.FIELDSET,
  '/components/web/forms': ROUTES.FORM,
  '/components/web/horizontal-grid': ROUTES.HORIZONTAL_GRID,
  '/components/web/horizontal-nav': ROUTES.HORIZONTAL_NAV,
  '/components/web/icons': ROUTES.ICON,
  '/components/web/images': ROUTES.IMAGE,
  '/components/web/links': ROUTES.LINK,
  '/components/web/lists': ROUTES.LIST,
  '/components/web/mobile-scroll-container': ROUTES.MOBILE_SCROLL_CONTAINER,
  '/components/web/modals': ROUTES.MODAL,
  '/components/web/navigation-bar': ROUTES.NAVIGATION_BAR,
  '/components/web/navigation-stack': ROUTES.NAVIGATION_STACK,
  '/components/web/nudgers': ROUTES.NUDGER,
  '/components/web/pagination': ROUTES.PAGINATION,
  '/components/web/panels': ROUTES.PANEL,
  '/components/web/popovers': ROUTES.POPOVER,
  '/components/web/progress': ROUTES.PROGRESS,
  '/components/web/section-list': ROUTES.SECTION_LIST,
  '/components/web/sliders': ROUTES.SLIDER,
  '/components/web/spinners': ROUTES.SPINNER,
  '/components/web/star-rating': ROUTES.STAR_RATING,
  '/components/web/tables': ROUTES.TABLE,
  '/components/web/text': ROUTES.TEXT,
  '/components/web/tickets': ROUTES.TICKET,
  '/components/web/tooltips': ROUTES.TOOLTIP,
  '/components/web/typography': ROUTES.TEXT,
  '/resources': ROUTES.GETTING_STARTED,
  '/tokens/layout': ROUTES.SPACINGS,
  '/using/contributing': ROUTES.USING_BACKPACK,
};
