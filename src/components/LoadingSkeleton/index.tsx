import React from 'react';

import { Loader, LoaderXL, Td, Tr } from '../AbsencesTable/styles';

const TableLoader = (): JSX.Element => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {rows.map((i) => {
        return (
          <Tr key={i}>
            <Td>
              <LoaderXL />
            </Td>
            <Td>
              <Loader />
            </Td>
            <Td>
              <Loader />
            </Td>
            <Td>
              <Loader />
            </Td>
            <Td>
              <Loader />
            </Td>
            <Td>
              <Loader />
            </Td>
          </Tr>
        );
      })}
    </>
  );
};

export default TableLoader;
