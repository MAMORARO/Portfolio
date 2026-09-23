import React from 'react';
import Process from './Process';
import { FaCss3, FaJava, FaJsSquare, FaPython, FaGithub, FaDownload } from "react-icons/fa";

// Images
import senepeImg from '../assets/senepe.png';
import excelImg from '../assets/image.png';

// PDFs
import codeCertPdf from '../Documents/Certificate_Tshepho_Maimela.pdf';
import excelCertPdf from '../Documents/LPCertificate_142427_110_2r96v.pdf';

const certifications = [
  {
    title: "100 days of code programme",
    issuer: "UWC IT Society",
    date: "2026",
    image: senepeImg,
    file: codeCertPdf
  },
  {
    title: "Excel",
    issuer: "Microsoft",
    date: "2026",
    image: excelImg,
    file: excelCertPdf
  },
];

function Skills() {
  const handleDownload = (cert) => {
    const link = document.createElement("a");
    link.href = cert.file;
    link.download = `${cert.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-bg py-2">
      <div className="max-w-[1280px] mx-auto px-2 mt-7 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

        <Process />

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors">
              <FaCss3 className="text-xl" />
              <span>CSS</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors">
              <FaJava className="text-xl" />
              <span>Java</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors">
              <FaJsSquare className="text-xl" />
              <span>JavaScript</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors">
              <FaPython className="text-xl" />
              <span>Python</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white hover:border-blue-500 hover:text-blue-500 transition-colors">
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </button>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-3">Certifications</h2>

            {certifications.length > 0 ? (
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <button
                    key={i}
                    onClick={() => handleDownload(cert)}
                    className="group flex items-center gap-3 px-3 py-3 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-blue-500 transition-colors text-left"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-14 h-14 object-cover rounded-md border border-neutral-700 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{cert.title}</p>
                      <p className="text-neutral-400 text-sm">{cert.issuer} · {cert.date}</p>
                    </div>
                    <FaDownload className="text-neutral-500 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-neutral-400 text-sm">Add your certs here</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;