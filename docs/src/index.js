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
import PropTypes from 'prop-types';
import 'bpk-stylesheets/base';
import ReactDOM from 'react-dom';
import 'bpk-stylesheets/base.css';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import {
  BrowserRouter,
  StaticRouter,
  withRouter,
  matchPath,
} from 'react-router-dom';
import 'es6-promise/auto';
import BpkLink from 'bpk-component-link';

import Routes, { ROUTES_MAPPINGS } from './routes';
import template from './template';
import { extractAssets } from './webpackStats';
import TopBanner from './components/TopBanner/TopBanner';
import Meta from './meta';

/*
 In our Webpack config file, we allow the base path to be set,
 which lets this website be served from paths other than '/'.

 This allows us to host pull request builds on subpaths of the main
 website.
 */
const basePath = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : '';

const ScrollToTop = withRouter(
  class extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    componentDidUpdate(prevProps) {
      const isNewLocation = this.props.location !== prevProps.location;
      const hashIsEmpty = !this.props.location.hash;

      if (isNewLocation && hashIsEmpty) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  },
);

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const root = document.getElementById('react-mount');

  ReactDOM.render(
    <BrowserRouter basename={basePath}>
      <ScrollToTop>
        <Meta basePath={basePath} />
        {basePath !== '' && (
          <TopBanner>
            <strong>Pull request build</strong>
            <BpkLink href="https://backpack.github.io">
              Return to main site
            </BpkLink>
          </TopBanner>
        )}
        <Routes />
      </ScrollToTop>
    </BrowserRouter>,
    root,
  );
}

export default (() => {
  const flattenRoutes = routes =>
    routes.reduce((all, route) => {
      all.push(route);

      if (route.routes) {
        return all.concat(flattenRoutes(route.routes));
      }

      return all;
    }, []);

  const flattenedRoutes = flattenRoutes(ROUTES_MAPPINGS);

  return (locals, callback) => {
    const assets = extractAssets(locals.webpackStats);

    const match = flattenedRoutes.find(route =>
      matchPath(locals.path, { exact: true, path: route.path }),
    );

    if (!match) {
      return callback(new Error(`React Router failed to match ${locals.path}`));
    }

    if (match.redirect) {
      return callback(
        null,
        `<script>window.location = '${match.redirect}';</script>`,
      );
    }

    const html = ReactDOMServer.renderToStaticMarkup(
      <StaticRouter location={locals.path} context={{}}>
        <Routes />
      </StaticRouter>,
    );
    const head = Helmet.renderStatic();
    return callback(null, template({ head, html, assets, basePath }));
  };
})();
