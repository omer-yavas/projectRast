import 'devextreme/dist/css/dx.light.css';
import { DataGrid, Column, Paging } from 'devextreme-react/data-grid';
import { content } from '../content';
import { useState } from 'react';
import AddNewAccount from './AddNewAccount';

const Body = () => {
  const [addingNewAccount, setAddingNewAccount] = useState(false);
  return (
    <div>
      {addingNewAccount ? (
        <AddNewAccount changeState={setAddingNewAccount} />
      ) : (
        <div>
          <div>
            <input></input>
            <button onClick={() => setAddingNewAccount(true)}>
              Yeni Hesap Ekle
            </button>
          </div>
          <DataGrid id="dataGrid" dataSource={content}>
            <Column dataField="socialMediaLink"></Column>
            <Column dataField="socialMediaName"></Column>
            <Column dataField="description"></Column>
            <Paging defaultPageSize={15} defaultPageIndex={1} />
          </DataGrid>
        </div>
      )}
    </div>
  );
};

export default Body;
