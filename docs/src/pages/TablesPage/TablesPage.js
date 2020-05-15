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
import {
  BpkTable,
  BpkTableHead,
  BpkTableBody,
  BpkTableRow,
  BpkTableHeadCell,
  BpkTableCell,
} from 'bpk-component-table';
import tablesReadme from 'bpk-component-table/README.md';
import { BpkDataTable, BpkDataTableColumn } from 'bpk-component-datatable';
import dataTablesReadme from 'bpk-component-datatable/README.md';

import DocsPageBuilder from '../../components/DocsPageBuilder';
import DocsPageWrapper from '../../components/DocsPageWrapper';
import IntroBlurb from '../../components/IntroBlurb';

const DataTableExample = () => {
  const rows = [
    { name: 'Hermione', house: 'Gryffindor' },
    { name: 'Luna', house: 'Ravenclaw' },
    { name: 'Cedric', house: 'Hufflepuff' },
    { name: 'Draco', house: 'Slytherin' },
  ];

  // eslint-disable-next-line no-alert
  const onRowClick = row => alert(`${row.name} is in ${row.house}.`);
  return (
    <BpkDataTable rows={rows} height={300} onRowClick={onRowClick}>
      <BpkDataTableColumn label="Name" dataKey="name" width={100} />
      <BpkDataTableColumn
        label="House"
        dataKey="house"
        width={100}
        flexGrow={1}
      />
    </BpkDataTable>
  );
};

const components = [
  {
    id: 'default',
    title: 'Standard table',
    blurb: (
      <IntroBlurb>
        A simple table component for displaying data in a tabular form.
      </IntroBlurb>
    ),
    examples: [
      <BpkTable>
        <BpkTableHead>
          <BpkTableRow>
            <BpkTableHeadCell>Heading 1</BpkTableHeadCell>
            <BpkTableHeadCell>Heading 2</BpkTableHeadCell>
            <BpkTableHeadCell>Heading 3</BpkTableHeadCell>
            <BpkTableHeadCell>Heading 4</BpkTableHeadCell>
          </BpkTableRow>
        </BpkTableHead>
        <BpkTableBody>
          <BpkTableRow>
            <BpkTableCell>Row 1, Data 1</BpkTableCell>
            <BpkTableCell>Row 1, Data 2</BpkTableCell>
            <BpkTableCell>Row 1, Data 3</BpkTableCell>
            <BpkTableCell>Row 1, Data 4</BpkTableCell>
          </BpkTableRow>
          <BpkTableRow>
            <BpkTableCell>Row 2, Data 1</BpkTableCell>
            <BpkTableCell>Row 2, Data 2</BpkTableCell>
            <BpkTableCell>Row 2, Data 3</BpkTableCell>
            <BpkTableCell>Row 2, Data 4</BpkTableCell>
          </BpkTableRow>
        </BpkTableBody>
      </BpkTable>,
    ],
    readme: tablesReadme,
  },
  {
    id: 'datatable',
    title: 'Data Table',
    blurb: (
      <IntroBlurb>
        For more advanced use cases, data tables take an array of data and
        automatically generate a table. Data tables support dynamically sorting
        rows.
      </IntroBlurb>
    ),
    examples: [<DataTableExample />],
    readme: dataTablesReadme,
  },
];

const TablesSubPage = ({ ...rest }) => (
  <DocsPageBuilder title="Table" components={components} {...rest} />
);

const TablesPage = () => (
  <DocsPageWrapper
    title="Table"
    components={components}
    webSubpage={<TablesSubPage wrapped />}
  />
);

export default TablesPage;
