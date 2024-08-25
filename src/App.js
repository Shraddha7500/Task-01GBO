import React, { useState } from 'react';
import './App.css';

function App() {
  const initialData = [
    ['MONTH 1', ''],
    ['Onboarding Call', '', '', '', '', ''],
    ['Google Search Console Access', '', '', '', '', ''],
    ['Google Analytics Access', '', '', '', '', ''],
    ['Website Access', '', '', '', '', ''],
    ['Technical Audit', '', '', '', '', ''],
    ['Anchor Text and Semantic Analysis', '', '', '', '', ''],
    ['Competitor Analysis', '', '', '', '', ''],
    ['Anchor Text / URL Mapping', '', '', '', '', ''],
    ['Google Data Studio Report + Local Reporting Suite', '', '', '', '', ''],
    ['Site Level Optimization', '', '', '', '', ''],
    ['On Page Optimization', '', '', '', '', ''],
    ['Content Creation', '', '', '', '', ''],
    ['Content Publishing', '', '', '', '', ''],
    ['Premium Press Release', '', '', '', '', ''],
    ['Authority Niche Placements', '', '', '', '', ''],
    ['Review Management', '', '', '', '', ''],
    ['Index Links', '', '', '', '', ''],
    ['Video Recap', '', '', '', '', '']
  ];

  const [data, setData] = useState(initialData);

  const handleEdit = (rowIndex, columnIndex, event) => {
    const newData = data.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((cell, cIndex) => {
          if (cIndex === columnIndex) {
            return event.target.textContent;
          }
          return cell;
        });
      }
      return row;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td
                  key={columnIndex}
                  contentEditable={rowIndex > 0} // Make first row non-editable
                  suppressContentEditableWarning={true}
                  onBlur={(event) => handleEdit(rowIndex, columnIndex, event)}
                  colSpan={rowIndex === 0 && columnIndex === 1 ? 6 : 1} // Make first row span all columns
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
