import React from 'react';

interface DetailModalProps {
  submission: any;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<any>) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  submission,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [editedSubmission, setEditedSubmission] = React.useState(submission);

  React.useEffect(() => {
    // Parse files if it's a JSON string
    let parsedSubmission = { ...submission };
    
    if (submission.files && typeof submission.files === 'string') {
      try {
        const filesArray = JSON.parse(submission.files);
        // Convert file paths to file objects
        parsedSubmission.files = filesArray.map((filePath: string, index: number) => {
          const fileName = filePath.split('/').pop()?.replace(/\\\//g, '/') || 'Unknown file';
          const fileExtension = fileName.split('.').pop()?.toLowerCase() || '';
          
          return {
            id: index,
            file_name: fileName,
            file_path: filePath,
            file_type: fileExtension,
            file_url: `/storage/${filePath.replace(/\\\//g, '/')}`,
            uploaded_at: submission.created_at
          };
        });
      } catch (e) {
        console.error('Failed to parse files:', e);
        parsedSubmission.files = [];
      }
    } else if (!Array.isArray(submission.files)) {
      parsedSubmission.files = [];
    }
    
    setEditedSubmission(parsedSubmission);
  }, [submission]);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdate(submission.id, editedSubmission);
    onClose();
  };

  const getFileIcon = (type: string) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('pdf')) return '📄';
    if (lowerType.includes('xlsx') || lowerType.includes('xls') || lowerType.includes('excel') || lowerType.includes('csv')) return '📊';
    if (lowerType.includes('doc') || lowerType.includes('docx') || lowerType.includes('word')) return '📝';
    if (lowerType.includes('zip') || lowerType.includes('rar') || lowerType.includes('7z')) return '🗜️';
    if (lowerType.includes('image') || lowerType.includes('png') || lowerType.includes('jpg') || lowerType.includes('jpeg') || lowerType.includes('gif')) return '🖼️';
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
              <h2 className="text-2xl font-bold text-white">Contribution Details</h2>
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
            {/* Organization and Request Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={editedSubmission.organization || ''}
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
                  value={editedSubmission.request_type || 'other'}
                  onChange={(e) =>
                    setEditedSubmission({ ...editedSubmission, request_type: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="data_contribution">Data Contribution</option>
                  <option value="data_request">Data Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
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
                  {editedSubmission.user?.name || 'Unknown User'}
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
                  {new Date(editedSubmission.created_at).toLocaleDateString('en-US', {
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
                    status: e.target.value,
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
                Message
              </label>
              <textarea
                value={editedSubmission.message || ''}
                onChange={(e) =>
                  setEditedSubmission({ ...editedSubmission, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Enter contribution message..."
              />
            </div>

            {/* Uploaded Files */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Uploaded Files {Array.isArray(editedSubmission.files) && editedSubmission.files.length > 0 && `(${editedSubmission.files.length})`}
              </label>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="max-h-64 overflow-y-auto">
                  {!Array.isArray(editedSubmission.files) || editedSubmission.files.length === 0 ? (
                    <div className="px-4 py-8 text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">No files uploaded</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {editedSubmission.files.map((file: any, index: number) => (
                        <div
                          key={file.id || index}
                          className="px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-2xl flex-shrink-0">{getFileIcon(file.file_type || '')}</span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.file_name || 'Unnamed file'}
                              </p>
                              <p className="text-xs text-gray-500">
                                {file.file_size ? `${(file.file_size / 1024).toFixed(2)} KB` : 'Unknown size'} • 
                                Uploaded {new Date(file.uploaded_at || file.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {file.file_url && (
                            <a
                              href={file.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-3 text-green-600 hover:text-green-700 text-sm font-medium flex-shrink-0"
                            >
                              Download
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            {(editedSubmission.metadata || editedSubmission.notes) && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-md">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(editedSubmission.metadata || editedSubmission.notes, null, 2)}
                  </pre>
                </div>
              </div>
            )}
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
};