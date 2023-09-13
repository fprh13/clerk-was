import React from 'react';
import Header from '@/components/Header';

const DashboardPage = () => {
  return (
    <>
      <Header />

      <div>
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <p className="mb-5">
          Welcome to Dashboard. 로그인된 사용자의 정보를 보여주는 페이지 입니다.
        </p>
      </div>
    </>
  );
};

export default DashboardPage;
