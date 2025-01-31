import React, { useState, useMemo, useCallback, useContext } from 'react';
import { FixedSizeList as List } from 'react-window';

const DataGrid = ({ data, columns }) => {
  const [sortField, setSortfield] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');
  const [selectedRows, setSelectedRows] = useState();

  return (
    <>
      <div>
        
      </div>
    </>
  );
};

export default compoundImplementation;
