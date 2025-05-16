// App.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Box, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: '活動名稱', width: 250 },
  { field: 'location', headerName: '地點', width: 200 },
  { field: 'price', headerName: '票價', width: 150 },
];

function App() {
  const [rawData, setRawData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch(
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
    )
      .then((res) => res.json())
      .then((data) => {
        const processed = data.map((item, index) => ({
          id: index + 1,
          title: item.title || '無標題',
          location:
            item.showInfo && item.showInfo.length > 0
              ? item.showInfo[0].location
              : '未知地點',
          price:
            item.showInfo && item.showInfo.length > 0
              ? item.showInfo[0].price
              : '免費或未知',
        }));
        setRawData(processed);
        setFilteredData(processed);
      });
  }, []);

  const handleSearch = () => {
    const lowerKeyword = keyword.toLowerCase();
    const result = rawData.filter((item) =>
      item.title.toLowerCase().includes(lowerKeyword)
    );
    setFilteredData(result);
  };

  return (
    <Box sx={{ height: 600, width: '90%', margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        活動查詢
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <TextField
          label="搜尋活動名稱"
          variant="outlined"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          搜尋
        </Button>
      </Box>
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}

export default App;
