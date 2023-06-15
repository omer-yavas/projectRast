import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import {
  DataGrid,
  Column,
  Sorting,
  Paging,
  Pager,
} from 'devextreme-react/data-grid';
import { useState } from 'react';
import { magnifier_svg } from '../assets/svgFiles';
import { union_svg } from '../assets/svgFiles';
import AddNewAccount from './AddNewAccount';
import { AiOutlinePlus } from 'react-icons/ai';
import './Body.css';

const pageSizes = [4, 8, 12, 16, 20];

const Body = () => {
  const [addingNewAccount, setAddingNewAccount] = useState(false);
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(4);

  //localStorage dan alınan veriler kontrol ediliyor. Eğer bizim sosyal medya hesaplarını depoladığımız
  // items nesnesi varsa object haline getiriliyor, yoksa boş array dönüyor.
  const localData = () => {
    if (!JSON.parse(localStorage.getItem('items'))) {
      return [];
    }
    const data = JSON.parse(localStorage.getItem('items'));
    const indexedData = data.map((item, index) => {
      return { id: index, ...item };
    });

    return indexedData;
  };

  //Kullanıcının search kısmında girdiği text burada filtreleniyor.
  const filteredData = localData().filter((data) => {
    return (
      data.socialMediaName.toLowerCase().includes(search.toLowerCase()) ||
      data.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="body_container">
      {addingNewAccount ? (
        <AddNewAccount changeState={setAddingNewAccount} />
      ) : (
        <div>
          <div className="body_search_section">
            <div className="search-panel">
              <div className="search-input-group">
                <input
                  type="text"
                  placeholder="Search objects..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span>{magnifier_svg}</span>
              </div>
              <button>
                <>{union_svg}</>
              </button>
            </div>
            <button
              className="body_search_section_addButton"
              onClick={() => setAddingNewAccount(true)}
            >
              <AiOutlinePlus size={18} className="icon" />
              <p>Yeni Hesap Ekle</p>
            </button>
          </div>
          <div className="datagrid_box">
            <DataGrid
              dataSource={filteredData}
              rowAlternationEnabled={true}
              keyExpr="id"
              showBorders={false}
            >
              <Sorting mode="multiple" />
              <Column
                dataField="socialMediaLink"
                caption="Sosyal Medya Linki"
              ></Column>
              <Column
                dataField="socialMediaName"
                caption="Sosyal Medya Adı"
              ></Column>
              <Column dataField="description" caption="Açıklama"></Column>
              <Paging defaultPageSize={pageSize} />
              <Pager
                allowedPageSizes={pageSizes}
                showPageSizeSelector={true}
                displayMode={'compact'}
                showNavigationButtons={true}
                visible={true}
              />
            </DataGrid>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
