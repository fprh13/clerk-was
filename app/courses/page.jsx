'use client';
import Courses from '@/components/Courses';
import { useState, useEffect } from 'react';

import LoadingPage from '../loading';
import CourseSearch from '@/components/CourseSearch';
import Link from 'next/link';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Learn </h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to ➤ MainPage
      </Link>
      <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
    </div>
  );
};

export default CoursesPage;
