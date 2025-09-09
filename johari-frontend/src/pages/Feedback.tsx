import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../hooks/useLanguage';
import { usersApi, adjectivesApi } from '../services/api';
import AdjectiveSelector from '../components/AdjectiveSelector';
import LoadingSpinner from '../components/LoadingSpinner';

const Feedback: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const [selectedAdjectives, setSelectedAdjectives] = useState<number[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch user data
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => usersApi.getById(Number(userId)).then(res => res.data),
    enabled: !!userId
  });

  // Fetch adjectives
  const { data: adjectives = [], isLoading: adjectivesLoading } = useQuery({
    queryKey: ['adjectives'],
    queryFn: () => adjectivesApi.getAll().then(res => res.data)
  });

  // Submit feedback mutation (Note: This endpoint needs to be implemented in your Django backend)
  const submitFeedbackMutation = useMutation({
    mutationFn: async (data: { adjectives: number[] }) => {
      // This is a placeholder - you'll need to implement the feedback endpoint
      console.log('Submitting feedback:', data);
      return Promise.resolve({ success: true });
    },
    onSuccess: () => {
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    },
    onError: (error) => {
      console.error('Error submitting feedback:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAdjectives.length >= 3) {
      submitFeedbackMutation.mutate({
        adjectives: selectedAdjectives
      });
    }
  };

  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'کاربر یافت نشد' : 'User not found'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {isRTL ? 'بازگشت به خانه' : 'Go back home'}
          </button>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('success')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('feedbackSubmitted')}
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              {isRTL ? 'در حال انتقال...' : 'Redirecting...'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isRTL ? 'بازگشت' : 'Back'}
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              {t('giveFeedback')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('feedbackFor', { name: user.name || user.email })}
            </p>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {user.name ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {user.name || 'Anonymous User'}
              </h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            {adjectivesLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {t('selectAdjectivesForPerson')}
                  </h2>
                  <p className="text-gray-600">
                    {isRTL 
                      ? 'صفاتی را انتخاب کنید که به نظر شما این فرد را بهترین شکل توصیف می‌کند'
                      : 'Choose the adjectives that best describe this person in your opinion'
                    }
                  </p>
                </div>

                <AdjectiveSelector
                  adjectives={adjectives}
                  selectedIds={selectedAdjectives}
                  onSelectionChange={setSelectedAdjectives}
                  maxSelection={6}
                  className="mb-8"
                />

                <button
                  type="submit"
                  disabled={selectedAdjectives.length < 3 || submitFeedbackMutation.isPending}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                    selectedAdjectives.length >= 3 && !submitFeedbackMutation.isPending
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:scale-105 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {submitFeedbackMutation.isPending ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('submitFeedback')}
                    </>
                  )}
                </button>

                {selectedAdjectives.length < 3 && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    {isRTL 
                      ? 'لطفاً حداقل ۳ صفت انتخاب کنید'
                      : 'Please select at least 3 adjectives'
                    }
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;