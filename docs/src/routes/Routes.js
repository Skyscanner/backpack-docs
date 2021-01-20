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

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import redirects from '../constants/redirect-routes';
import DefaultLayout from '../layouts/DefaultLayout';
import UsingLayout from '../layouts/UsingLayout';
import TokensLayout from '../layouts/TokensLayout';
import GuidelinesLayout from '../layouts/GuidelinesLayout';
import DocsLayout from '../layouts/DocsLayout';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';
import AccordionsPage from '../pages/components/Accordions';
import AlertPage from '../pages/components/Alert';
import AlignmentPage from '../pages/components/Alignment';
import AriaLivePage from '../pages/components/AriaLive';
import AutosuggestPage from '../pages/components/Autosuggest';
import BadgePage from '../pages/components/Badge';
import BannerAlertPage from '../pages/components/BannerAlert';
import BarchartsPage from '../pages/components/Barcharts';
import BottomNavPage from '../pages/components/BottomNav';
import BottomSheetPage from '../pages/components/BottomSheet';
import BlockquotesPage from '../pages/components/Blockquotes';
import BreakpointsPage from '../pages/components/Breakpoints';
import BreadcrumbPage from '../pages/components/Breadcrumb';
import ButtonPage from '../pages/components/Button';
import CalendarPage from '../pages/components/Calendar';
import CardPage from '../pages/components/Card';
import CarouselPage from '../pages/components/Carousel';
import ChipsPage from '../pages/components/Chips';
import CodePage from '../pages/components/Code';
import DatepickerPage from '../pages/components/Datepicker';
import DescriptionListsPage from '../pages/components/DescriptionLists';
import DialogsPage from '../pages/components/Dialogs';
import DrawerPage from '../pages/components/Drawer';
import FieldsetsPage from '../pages/components/Fieldsets';
import FlarePage from '../pages/components/Flare';
import FloatingActionButtonPage from '../pages/components/FloatingActionButton';
import RatingPage from '../pages/components/Rating';
import FormsPage from '../pages/components/Forms';
import FormLabelPage from '../pages/components/FormLabel';
import FormValidationPage from '../pages/components/FormValidation';
import HorizontalGridPage from '../pages/components/HorizontalGrid';
import HorizontalNavPage from '../pages/components/HorizontalNav';
import IconPage from '../pages/components/Icon';
import ImagesPage from '../pages/components/Images';
import LinkPage from '../pages/components/Link';
import ListsPage from '../pages/components/Lists';
import MapPage from '../pages/components/Map';
import InfiniteScrollPage from '../pages/components/InfiniteScroll';
import MobileScrollContainerPage from '../pages/components/MobileScrollContainer';
import ModalsPage from '../pages/components/Modals';
import FlatListPage from '../pages/components/FlatList';
import PickerPage from '../pages/components/Picker';
import SelectPage from '../pages/components/Select';
import TouchableNativeFeedbackPage from '../pages/components/TouchableNativeFeedback';
import TouchableOverlayPage from '../pages/components/TouchableOverlay';
import NavigationBarPage from '../pages/components/NavigationBar';
import NavigationStackPage from '../pages/components/NavigationStack';
import NudgerPage from '../pages/components/Nudger';
import PaginationPage from '../pages/components/Pagination';
import PanelPage from '../pages/components/Panel';
import PhoneInputPage from '../pages/components/PhoneInput';
import PopoversPage from '../pages/components/Popovers';
import ProgressPage from '../pages/components/Progress';
import RadioButtonPage from '../pages/components/RadioButton';
import ScrollableCalendarPage from '../pages/components/ScrollableCalendar';
import SectionListPage from '../pages/components/SectionList';
import SlidersPage from '../pages/components/Sliders';
import SkipLinkPage from '../pages/components/SkipLink';
import SpinnerPage from '../pages/components/Spinner';
import StarRatingPage from '../pages/components/StarRating';
import SwitchPage from '../pages/components/Switch';
import TablesPage from '../pages/components/Tables';
import TextInputPage from '../pages/components/TextInput';
import TextPage from '../pages/components/Text';
import ThemingPage from '../pages/components/Theming';
import TicketsPage from '../pages/components/Tickets';
import TooltipsPage from '../pages/components/Tooltips';
import ToastPage from '../pages/components/Toast';
import SnackbarPage from '../pages/components/Snackbar';
import CheckboxPage from '../pages/components/Checkbox';
import OverlayPage from '../pages/components/Overlay';
import { GridColumnDemoPage, GridOffsetDemoPage } from '../pages/GridDemos';
import ResetAnalyticsPage from '../pages/ResetAnalyticsPage';

import {
  using as autogeneratedUsingPages,
  guidelines as autogeneratedGuidelinesPages,
  tokens as autogeneratedTokensPages,
} from './generated/Routes';
import withPageViewEvent from './withPageViewEvent';

export const ROUTES_MAPPINGS = [
  { path: ROUTES.HOME, component: HomePage },
  {
    path: ROUTES.USING_BACKPACK,
    layout: UsingLayout,
    redirect: autogeneratedUsingPages[0].path,
    routes: [...autogeneratedUsingPages],
  },
  {
    path: ROUTES.TOKENS,
    layout: TokensLayout,
    redirect: autogeneratedTokensPages[0].path,
    routes: [...autogeneratedTokensPages],
  },
  {
    path: ROUTES.GUIDELINES,
    layout: GuidelinesLayout,
    redirect: '/guidelines/strategy',
    routes: [...autogeneratedGuidelinesPages],
  },
  {
    path: ROUTES.COMPONENTS,
    layout: DocsLayout,
    redirect: ROUTES.ACCORDION,
    routes: [
      { path: ROUTES.ACCORDION, component: AccordionsPage },
      { path: ROUTES.ALERT, component: AlertPage },
      { path: ROUTES.ALIGNMENT, component: AlignmentPage },
      { path: ROUTES.ARIA_LIVE, component: AriaLivePage },
      {
        path: ROUTES.AUTOSUGGEST,
        component: AutosuggestPage,
      },
      { path: ROUTES.BADGE, component: BadgePage },
      {
        path: ROUTES.BANNER_ALERT,
        component: BannerAlertPage,
      },
      { path: ROUTES.BARCHART, component: BarchartsPage },
      {
        path: ROUTES.BOTTOM_NAV,
        component: BottomNavPage,
      },
      {
        path: ROUTES.BOTTOM_SHEET,
        component: BottomSheetPage,
      },
      {
        path: ROUTES.BLOCKQUOTE,
        component: BlockquotesPage,
      },
      { path: ROUTES.BREADCRUMB, component: BreadcrumbPage },
      {
        path: ROUTES.BREAKPOINT,
        component: BreakpointsPage,
      },
      { path: ROUTES.BUTTON, component: ButtonPage },
      { path: ROUTES.CALENDAR, component: CalendarPage },
      { path: ROUTES.CARD, component: CardPage },
      { path: ROUTES.CAROUSEL, component: CarouselPage },
      { path: ROUTES.CHIP, component: ChipsPage },
      { path: ROUTES.CODE, component: CodePage },
      { path: ROUTES.DATEPICKER, component: DatepickerPage },
      {
        path: ROUTES.DESCRIPTION_LIST,
        component: DescriptionListsPage,
      },
      { path: ROUTES.DIALOG, component: DialogsPage },
      { path: ROUTES.DRAWER, component: DrawerPage },
      { path: ROUTES.FIELDSET, component: FieldsetsPage },
      { path: ROUTES.FLARE, component: FlarePage },
      {
        path: ROUTES.FLAT_LIST,
        component: FlatListPage,
      },
      {
        path: ROUTES.FLOATING_ACTION_BUTTON,
        component: FloatingActionButtonPage,
      },
      {
        path: ROUTES.TOAST,
        component: ToastPage,
      },
      {
        path: ROUTES.CHECKBOX,
        component: CheckboxPage,
      },
      {
        path: ROUTES.RATING,
        component: RatingPage,
      },
      {
        path: ROUTES.OVERLAY,
        component: OverlayPage,
      },
      {
        path: ROUTES.SNACKBAR,
        component: SnackbarPage,
      },
      { path: ROUTES.FORM, component: FormsPage },
      { path: ROUTES.FORM_LABEL, component: FormLabelPage },
      { path: ROUTES.FORM_VALIDATION, component: FormValidationPage },
      {
        path: ROUTES.HORIZONTAL_GRID,
        component: HorizontalGridPage,
      },
      {
        path: ROUTES.HORIZONTAL_NAV,
        component: HorizontalNavPage,
      },
      { path: ROUTES.ICON, component: IconPage },
      { path: ROUTES.IMAGE, component: ImagesPage },
      {
        path: ROUTES.INFINITE_SCROLL,
        component: InfiniteScrollPage,
      },
      { path: ROUTES.LINK, component: LinkPage },
      { path: ROUTES.LIST, component: ListsPage },
      { path: ROUTES.MAP, component: MapPage },
      {
        path: ROUTES.MOBILE_SCROLL_CONTAINER,
        component: MobileScrollContainerPage,
      },
      { path: ROUTES.MODAL, component: ModalsPage },
      {
        path: ROUTES.NAVIGATION_BAR,
        component: NavigationBarPage,
      },
      {
        path: ROUTES.NAVIGATION_STACK,
        component: NavigationStackPage,
      },
      { path: ROUTES.NUDGER, component: NudgerPage },
      { path: ROUTES.PAGINATION, component: PaginationPage },
      { path: ROUTES.PANEL, component: PanelPage },
      {
        path: ROUTES.PHONE_INPUT,
        component: PhoneInputPage,
      },
      { path: ROUTES.PICKER, component: PickerPage },
      { path: ROUTES.POPOVER, component: PopoversPage },
      { path: ROUTES.PROGRESS, component: ProgressPage },
      {
        path: ROUTES.RADIO_BUTTON,
        component: RadioButtonPage,
      },
      {
        path: ROUTES.SCROLLABLE_CALENDAR,
        component: ScrollableCalendarPage,
      },
      {
        path: ROUTES.SECTION_LIST,
        component: SectionListPage,
      },
      { path: ROUTES.SELECT, component: SelectPage },
      { path: ROUTES.SLIDER, component: SlidersPage },
      { path: ROUTES.SKIP_LINK, component: SkipLinkPage },
      { path: ROUTES.SPINNER, component: SpinnerPage },
      {
        path: ROUTES.STAR_RATING,
        component: StarRatingPage,
      },
      { path: ROUTES.SWITCH, component: SwitchPage },
      { path: ROUTES.TABLE, component: TablesPage },
      { path: ROUTES.TEXT, component: TextPage },
      {
        path: ROUTES.TEXT_INPUT,
        component: TextInputPage,
      },
      { path: ROUTES.THEMING, component: ThemingPage },
      { path: ROUTES.TICKET, component: TicketsPage },
      { path: ROUTES.TOOLTIP, component: TooltipsPage },
      {
        path: ROUTES.TOUCHABLE_NATIVE_FEEDBACK,
        component: TouchableNativeFeedbackPage,
      },
      {
        path: ROUTES.TOUCHABLE_OVERLAY,
        component: TouchableOverlayPage,
      },
    ],
  },
  { path: ROUTES.GRID_COLUMN_DEMO, component: GridColumnDemoPage },
  { path: ROUTES.GRID_OFFSET_DEMO, component: GridOffsetDemoPage },
  { path: ROUTES.RESET_ANALYTICS, component: ResetAnalyticsPage },
  ...Object.keys(redirects).map(from => ({
    path: from,
    redirect: redirects[from],
  })),
  { path: '*', component: NotFoundPage },
];

const expandRoutes = routes =>
  routes.reduce((all, routeConfig) => {
    const {
      component: Component,
      routes: childRoutes,
      layout: RouteLayout,
      redirect,
      path,
      ...routeProps
    } = routeConfig;
    if (Component) {
      all.push(
        <Route
          key={path}
          path={path}
          render={withPageViewEvent(Component)}
          exact
          {...routeProps}
        />,
      );
    }

    if (redirect) {
      all.push(<Redirect exact key={redirect} from={path} to={redirect} />);
    }

    if (childRoutes && childRoutes.length) {
      all.push(
        <Route key={path} path={path}>
          <RouteLayout>
            <Switch>{expandRoutes(childRoutes)}</Switch>
          </RouteLayout>
        </Route>,
      );
    }

    return all;
  }, []);

const allRoutes = expandRoutes(ROUTES_MAPPINGS);

const Routes = () => (
  <DefaultLayout>
    <Switch>{allRoutes}</Switch>
  </DefaultLayout>
);

export default Routes;
