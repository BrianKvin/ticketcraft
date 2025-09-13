import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const DashboardAbstracts = ({ eventData, user }) => {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // Here you would typically make an API call to submit the abstract
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmissionStatus('success');
      setTitle('');
      setAbstract('');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmissionStatus(null), 5000);
    } catch (err) {
      setError('Failed to submit abstract. Please try again.');
      console.error('Error submitting abstract:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">Submit Abstract / Session Proposal</h2>
          <p className="mt-1 text-sm text-gray-500">
            Submit your abstract or session proposal for {eventData?.title || 'this event'}.
          </p>
        </div>

        <div className="p-6">
          {submissionStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
              Your abstract has been submitted successfully! We'll review it and get back to you soon.
            </div>
          )}
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your abstract/session title"
              />
            </div>

            <div>
              <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-1">
                Abstract/Proposal <span className="text-red-500">*</span>
              </label>
              <textarea
                id="abstract"
                required
                rows={8}
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your abstract or session proposal details (minimum 200 words)"
              />
              <p className="mt-1 text-xs text-gray-500">
                Minimum 200 characters. Please include objectives, methodology, and expected outcomes.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                All fields marked with <span className="text-red-500">*</span> are required
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Abstract'}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">My Submissions</h3>
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <p className="text-gray-500">You haven't submitted any abstracts yet.</p>
            {/* In a real app, you would map through the user's submissions here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAbstracts;
