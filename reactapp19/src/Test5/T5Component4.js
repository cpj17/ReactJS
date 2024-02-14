import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//method 1
// const Table = ({ config, data }) => {
//     const visibleColumns = config.filter(column => column.visibility);

//     return (
//         <table className='table table-responsive-md '>
//             <thead>
//                 <tr>
//                     {visibleColumns
//                         .sort((a, b) => a.view_position - b.view_position)
//                         .map(column => (
//                             <th key={column.column_name} style={{ width: column.width, height: column.height, ...column.style }}>
//                                 {column.display_name}
//                             </th>
//                         ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((row, rowIndex) => (
//                     <tr key={rowIndex}>
//                         {visibleColumns.map(column => (
//                             <td key={column.column_name}  style={{ width: column.width, height: column.height, ...column.style }}>
//                                 {row[column.column_name]}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

//method 2
const Table = ({ config, data }) => {
    const visibleColumns = config.filter(column => column.visibility);
  
    return (
        <table className='table table-responsive-md '>
        <thead>
          <tr>
            {visibleColumns
              .sort((a, b) => a.view_position - b.view_position)
              .map(column => (
                <th key={column.column_name} style={{ width: column.width, height: column.height, ...column.style }}>
                  {column.display_name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {visibleColumns.map(column => (
                <td key={column.column_name}>
                  {row[column.column_name] !== undefined ? (
                    row[column.column_name]
                  ) : (
                    <span style={{ color: 'red' }}>
                      Error: Column mismatch for {column.column_name}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

const App2 = () => {
    const config = [
        {
            column_name: "id",
            display_name: "S.No",
            width: 100,
            height: 0,
            style: {},
            view_position: 1,
            visibility: true,
        },
        {
            column_name: "product_id",
            display_name: "Product ID",
            width: 100,
            height: 0,
            style: {},
            view_position: 2,
            visibility: true,
        },
        {
            column_name: "product_name",
            display_name: "Product Name",
            width: 100,
            height: 0,
            style: {},
            view_position: 2,
            visibility: true,
        },
        {
            column_name: "color_id",
            display_name: "Color",
            width: 100,
            height: 0,
            style: {},
            view_position: 2,
            visibility: true,
        },
        {
            column_name: "color_name",
            display_name: "Color Name",
            width: 100,
            height: 0,
            style: {},
            view_position: 2,
            visibility: true,
        },
    ];

    const data = [
        {
            id: 1,
            product_id: "927000220",
            product_name: "Logitech MK220 Wireless	",
            color_i: "red",
        },
    ];

    return (
        <div>
            <Table config={config} data={data} />
        </div>
    );
};

export default App2;
