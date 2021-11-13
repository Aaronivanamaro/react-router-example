import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
    </div>
  );
}