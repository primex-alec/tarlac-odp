// components/DetailModal.tsx
import React from 'react';
import { Submission, availableCategories, availableTags, availableRequestTypes } from '@/lib/mockData';
import { MultiSelect } from './MultiSelect';

interface DetailModalProps {
  submission: Submission;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Submission>) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  submission,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [editedSubmission, setEditedSubmission] = React.useState(submission);

  React.useEffect(() => {
    setEditedSubmission(submission);
  }, [submission]);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdate(submission.id, editedSubmission);
    onClose();
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return '📄';
    if (type.includes('excel') || type.includes('csv')) return '📊';
    if (type.includes('word') || type.includes('docx')) return '📝';
    if (type.includes('zip')) return '🗜️';
    if (type.includes('image')) return '🖼️';
    return '📎';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header with Green Accent */}
        <div className="bg-green-700 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Dataset Details</h2>
              <p className="text-sm text-green-100 mt-1">Review and manage submission information</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-green-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={editedSubmission.title}
                onChange={(e) =>
                  setEditedSubmission({ ...editedSubmission, title: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Organization and Request Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={editedSubmission.organization}
                  onChange={(e) =>
                    setEditedSubmission({ ...editedSubmission, organization: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Request Type
                </label>
                <select
                  value={editedSubmission.requestType}
                  onChange={(e) =>
                    setEditedSubmission({ ...editedSubmission, requestType: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {availableRequestTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submitted By and Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Submitted By
                </label>
                <div className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {editedSubmission.submittedBy}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Submitted Date
                </label>
                <div className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(editedSubmission.submittedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={editedSubmission.status}
                onChange={(e) =>
                  setEditedSubmission({
                    ...editedSubmission,
                    status: e.target.value as Submission['status'],
                  })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="disapproved">Disapproved</option>
              </select>
            </div>

            {/* Message/Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={editedSubmission.message}
                onChange={(e) =>
                  setEditedSubmission({ ...editedSubmission, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Enter dataset description..."
              />
            </div>

            {/* Uploaded Files */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Uploaded Files ({editedSubmission.uploadedFiles.length})
              </label>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  {editedSubmission.uploadedFiles.length === 0 ? (
                    <div className="px-4 py-8 text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">No files uploaded</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {editedSubmission.uploadedFiles.map((file) => (
                        <div
                          key={file.id}
                          className="px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-2xl flex-shrink-0">{getFileIcon(file.type)}</span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <button className="ml-3 text-green-600 hover:text-green-700 text-sm font-medium flex-shrink-0">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Categories */}
            <MultiSelect
              label="Categories"
              options={availableCategories}
              selected={editedSubmission.categories}
              onChange={(categories) =>
                setEditedSubmission({ ...editedSubmission, categories })
              }
            />

            {/* Tags */}
            <MultiSelect
              label="Tags"
              options={availableTags}
              selected={editedSubmission.tags}
              onChange={(tags) =>
                setEditedSubmission({ ...editedSubmission, tags })
              }
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">ID:</span> {submission.id}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}