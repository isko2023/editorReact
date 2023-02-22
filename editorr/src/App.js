import './App.css';
import {React , useState}    from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const modules = {
  toolbar:[
  [{header: [1 ,2 , 3 , 4 , 5 , 6 , false ]}],
  [{font: []}],
  [{size: []}],
  ['bold', 'italic', 'underline','strike', 'blockquote'],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image' , "video"],
  ['clean'],  
  [{color: ["red" , "yellow" , "blue" , "black"]}],
  

],  clipboard: {
  matchVisual: false, },
};

function App() {

  const [value , setValue ] = useState("")
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='editor'>
        <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue}
        className="editor-value"
        modules={modules}
         /></div>
        <div className='show' dangerouslySetInnerHTML={{__html: value}}></div>
      </div>
    </div>
  );

}

export default App;
