'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  User,
  Calendar,
  BookOpen,
  Award,
  GraduationCap,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
  ShieldCheck,
  Sparkles,
  Bookmark
} from 'lucide-react';

function VerificationPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('student_id');
  const [studentData, setStudentData] = useState(null);
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/student/verification/?student_id=${id}`);
        const result = await response.json();
        
        if (result.success) {
          setStudentData(result.data);
          setTeacherData(result.teacher);
        } else {
          setError(result.message || 'Failed to fetch student data');
        }
      } catch (err) {
        setError('An error occurred while fetching data');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    } else {
      setError('No student ID provided');
      setLoading(false);
    }
  }, [id]);

  const handleDownload = () => {
    const printContent = document.getElementById('verification-card').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = `
      <div style="padding: 20px; max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
        ${printContent}
      </div>
      <style>
        body { font-family: Arial, sans-serif; background: white !important; }
        .no-print { display: none !important; }
        .print-only { display: block !important; }
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
        }
      </style>
    `;
    
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Verifying student information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-100">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Verification Failed</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <a 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-100">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">Student Not Found</h1>
          <p className="text-gray-600 mb-6">The requested student record could not be found.</p>
          <a 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            
            <h1 className="text-3xl md:text-5xl  text-primary tracking-wider lowercase font-virtual">Pixi Education Verification</h1>
          </div>
          <p className="text-gray-600">Official student record verification portal</p>
        </div>

        {/* Verification Card */}
        <div id="verification-card" className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100">
          {/* Certificate Header */}
          <div className="bg-primary p-6 text-white text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl  mb-2 font-virtual lowercase">Certificate of Verification</h2>
              <p className="opacity-90">This document certifies the following academic achievements</p>
            </div>
          </div>

          {/* Status Banner */}
          <div className={`p-4 text-white text-center bg-primary`}>
            <div className="flex items-center justify-center">
              {studentData.graduate_status === 'completed' ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Graduated - Program Completed</span>
                </>
              ) : studentData.graduate_status === 'inprogress' ? (
                <>
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Currently Enrolled - Program In Progress</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Program Discontinued</span>
                </>
              )}
            </div>
          </div>

          <div className="p-8">
            {/* Student Info Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
              <div className="flex-shrink-0 relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white">
                    {studentData.image ? (
                      <img 
                        src={studentData.image} 
                        alt={`${studentData.first_name} ${studentData.last_name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="h-12 w-12 text-primary" />
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-1 border-2 border-white">
                  <Bookmark className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl text-primary mb-1 font-virtual lowercase">
                  {studentData.first_name} {studentData.last_name}
                </h2>
                <p className="text-lg text-secondary mb-2 font-medium">{studentData.course_title}</p>
                <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-700">Student ID: {studentData.student_id}</span>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                <p className="text-xs text-primary font-semibold mb-1">Verification Date</p>
                <p className="font-bold text-primary text-lg">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Program Details */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-virtual lowercase text-primary mb-5 flex items-center border-b border-color-primary pb-3">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Program Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Course Title</p>
                    <p className="font-semibold text-primary">{studentData.course_title}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Start Date</p>
                      <p className="font-semibold text-primary">
                        {new Date(studentData.course_start_date).toLocaleDateString()}
                      </p>
                    </div>
                    
                    {studentData.completed_date && (
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Completion Date</p>
                        <p className="font-semibold text-primary">
                          {new Date(studentData.completed_date).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Status</p>
                   <p className="font-semibold text-primary">    {studentData.graduate_status === 'completed' 
                        ? 'Completed' 
                        : studentData.graduate_status === 'inprogress'
                          ? 'In Progress'
                          : 'Dropped'
                      }</p>  
                  </div>
                </div>
              </div>

              {/* Teacher Information */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                 <h3 className="text-2xl font-virtual lowercase text-primary mb-5 flex items-center border-b border-color-primary pb-3">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Instructor Details
                </h3>
                
                {studentData.teacher_first_name ? (
                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm mr-4">
                        {studentData.teacher_image ? (
                          <img 
                            src={studentData.teacher_image} 
                            alt={`${studentData.teacher_first_name} ${studentData.teacher_last_name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {studentData.teacher_first_name} {studentData.teacher_last_name}
                        </p>
                        <p className="text-sm text-gray-600">{studentData.teacher_qualification}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Specialization</p>
                      <p className="font-semibold text-primary">{studentData.teacher_specialization}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Experience</p>
                      <p className="font-semibold text-primary">{studentData.teacher_experience || "5+ years"}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No instructor assigned</p>
                )}
              </div>
            </div>

            {/* Verification Seal */}
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Officially Verified Record</p>
                  <p className="text-xs text-gray-500">Pixi Educational Institution • {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              
              <button 
                onClick={handleDownload}
                className="flex items-center px-5 py-3 bg-primary text-white rounded-xl hover:bg-secondary transition-colors shadow-md hover:shadow-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Verification
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 bg-white p-4 rounded-xl border border-gray-100">
          <p>This is an officially verified student record. For any discrepancies, please contact the institution.</p>
          <p className="mt-1">© {new Date().getFullYear()} Pixi Educational Institution. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading verification...</p>
        </div>
      </div>
    }>
      <VerificationPage />
    </Suspense>
  );
};

export default Page;