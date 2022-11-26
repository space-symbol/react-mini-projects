import React, {useState} from 'react';
import './index.scss';
import Modal from "./Modal";

function App() {
    const [open, setOpen] = useState(false)
    return (
    <div className="App">
      <button className="open-modal-btn" onClick={()=>setOpen(true)}>✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen}>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="modal"/>
          <h1>Это модальное окно</h1>
      </Modal>
    </div>
  );
}

export default App;
