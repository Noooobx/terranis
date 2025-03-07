import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Eye, Download } from "lucide-react";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CertificateVerifier = () => {
  const query = useQuery();
  const ucParam = query.get("uc");

  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ucParam || ucParam.length !== 10) {
      setError("🚫 Invalid or missing certificate code. Please check and try again.");
      setLoading(false);
      return;
    }

    const fetchCertificateInfo = async () => {
      try {
        const response = await axios.get(
          `https://teranisbackend.vercel.app/verifycertificate/${ucParam}/`
        );
        setCertificateData(response.data);
      } catch (err) {
        setError("❌ Certificate not found. Please ensure you have entered the correct code.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificateInfo();
  }, [ucParam]);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen w-screen flex items-center mt-20 md:mt-0 justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 p-6">
      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 w-full max-w-3xl text-center shadow-xl transform transition-all hover:shadow-2xl">
        {loading ? (
          <div className="flex items-center justify-center gap-3 text-gray-400 animate-pulse">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h-8z" />
            </svg>
            <p className="text-lg">Verifying...</p>
          </div>
        ) : error ? (
          <p className="text-red-400 font-semibold text-lg">{error}</p>
        ) : (
          <div className="space-y-10">
            {/* Success Message */}
            <p className="text-xl font-semibold text-green-400 animate-fade-in">
              ✅ {certificateData.message}
            </p>

            {/* User Details */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-inner transition-all hover:bg-opacity-70">
              <h3 className="text-2xl font-semibold text-white mb-6">User Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Name:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.name}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Event:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.event_name}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Date:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.event_date}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Department:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.department}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Semester:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.semester}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 font-medium min-w-[100px]">Email:</p>
                  <p className="text-white ml-2 truncate">{certificateData.user_details.email}</p>
                </div>
              </div>
            </div>

            {/* Certificate Actions */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-inner transition-all hover:bg-opacity-70">
              <h3 className="text-2xl font-semibold text-white mb-4">Certificate</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => openLink(certificateData.certificate_details.view_link)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <Eye size={20} /> View
                </button>
                <button
                  onClick={() => openLink(certificateData.certificate_details.download_link)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <Download size={20} /> Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateVerifier;