
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Crime from './components/Crime/Crime'
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function App() {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [5, 6.5]
      });

      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
    <div className='flex justify-center items-center'>
      <div>
        <div className='px-3 py-4 actual-receipt'>
          <Header></Header>
          <Crime></Crime>
          <Footer></Footer>
        </div>

        {/* Action */}
        <div className='text-center'>
          <button className='px-2 py-1 bg-blue-600 text-white rounded-2xl'
            onClick={downloadPDF}
            disabled={!(loader === false)}

          >Generate PDF</button>
        </div>
      </div>
    </div>
  )
}

export default App
