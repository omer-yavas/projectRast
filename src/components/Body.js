import 'devextreme/dist/css/dx.light.css';
import { DataGrid, Column, Paging } from 'devextreme-react/data-grid';
import { content } from '../content';
import { useState } from 'react';
import { magnifier_svg } from '../assets/svgFiles';
import { union_svg } from '../assets/svgFiles';
import AddNewAccount from './AddNewAccount';

const Body = () => {
  const [addingNewAccount, setAddingNewAccount] = useState(false);
  return (
    <div className="body_container">
      {addingNewAccount ? (
        <AddNewAccount changeState={setAddingNewAccount} />
      ) : (
        <div>
          <div className="body_search_section">
            <div style={{ display: 'flex' }}>
              <div className="body_search_section_input">
                <input className="body_search_section_input_self"></input>
                <button className="body_search_section_magnifyButton">
                  {magnifier_svg}
                </button>
              </div>
              <div className="body_search_section_filter">{union_svg}</div>
            </div>

            <button
              className="body_search_section_addButton"
              onClick={() => setAddingNewAccount(true)}
            >
              + Yeni Hesap Ekle
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
