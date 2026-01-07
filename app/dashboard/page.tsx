'use client';

import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { fetchAllContributions } from '@/lib/api';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { DetailModal } from '@/components/dashboard/DetailModal';
import { Header } from '@/components/layout/header';

const ITEMS_PER_PAGE = 5;

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      fetchAllContributions(token)
        .then((data: any) => {
          setSubmissions(data.contributions || []);
        })
        .catch(err => console.error("Failed to fetch contributions", err));
    }
  }, []);

  const totalPages = Math.ceil(submissions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSubmissions = submissions.slice(startIndex, endIndex);

  const handleRowClick = (submission: any) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const handleUpdate = (id: string, updates: Partial<any>) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, ...updates } : sub))
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-green-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Admin Dashboard</h1>
          <p className="text-lg text-green-50">
            Review all submitted contributions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-gray-600 mb-6">
          Showing {startIndex + 1}-{Math.min(endIndex, submissions.length)} of {submissions.length} contributions
        </p>

        <div className="space-y-4">
          {currentSubmissions.map((submission) => (
            <div
              key={submission.id}
              onClick={() => handleRowClick(submission)}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    {submission.organization} →
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {submission.message}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded">
                      Submitted by {submission.user?.name}
                    </span>
                    <span className="px-2 py-1 border border-gray-300 rounded text-gray-600">
                      {submission.request_type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 ml-4">
                  <StatusBadge status={submission.status} />
                  <div className="text-xs text-gray-500">
                    📅 {new Date(submission.created_at).toLocaleDateString('en-US', { 
                      month: 'short', day: 'numeric', year: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border bg-white text-sm disabled:opacity-50">
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border text-sm ${
                  currentPage === page
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border bg-white text-sm disabled:opacity-50">
              Next
            </button>
          </nav>
        </div>
      </div>

      {selectedSubmission && (
        <DetailModal
          submission={selectedSubmission}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
