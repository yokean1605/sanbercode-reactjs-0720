import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Apps">
      <div className="app-content">
        <h1>Form Pembelian Buah</h1>
        <table className="table-input">
          <tr>
            <td className="b">
              Nama Pelanggan
            </td>
            <td>
              <input type="text" id="" name="nama_pelanggan" />
            </td>
          </tr>
          <tr>
            <td className="b">Daftar Item</td>
            <td>
              <form>
                <input type="radio" id="smk" name="buah" value="semangka" />
                <label for="smk">Semangka</label>
                <br />
                <input type="radio" id="jrk" name="buah" value="jeruk" />
                <label for="jrk">Jeruk</label>
                <br />
                <input type="radio" id="nns" name="buah" value="nanas" />
                <label for="nns">Nanas</label>
                <br />
                <input type="radio" id="slk" name="buah" value="salak" />
                <label for="slk">Salak</label>
                <br />
                <input type="radio" id="aggr" name="buah" value="anggur" />
                <label for="aggr">Anggur</label>
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" name="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
