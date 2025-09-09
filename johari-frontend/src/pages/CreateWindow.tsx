import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { User, Mail, Sparkles, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../hooks/useLanguage';
import { usersApi, adjectivesApi } from '../services/api';
import AdjectiveSelector from '../components/AdjectiveSelector';
import LoadingSpinner from '../components/LoadingSpinner';

const CreateWindow: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedAdjectives: [] as number[]
  });

  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch adjectives
  const { data: adjectives = [], isLoading: adjectivesLoading } = useQuery({
    queryKey: ['adjectives'],
    queryFn: () => adjectivesApi.getAll().then(res => res.data)
  });

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: usersApi.create,
    onSuccess: (response) => {
      setIsSuccess(true);
      setTimeout(() => {
        navigate(`/feedback/${response.data.id}`);
      }, 2000);
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdjectiveChange = (selectedIds: number[]) => {
    setFormData(prev => ({ ...prev, selectedAdjectives: selectedIds }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (formData.name.trim() && formData.email.trim()) {
        setStep(2);
      }
    } else {
      if (formData.selectedAdjectives.length >= 3) {
        createUserMutation.mutate({
          name: formData.name,
          email: formData.email
        });
      }
    }
  };

  const canProceedStep1 = formData.name.trim() && formData.email.trim();
  const canProceedStep2 = formData.selectedAdjectives.length >= 3;

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
              {t('windowCreated')}
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
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('createWindow')}
          </h1>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                1
              </div>
              <span className="hidden sm:inline font-medium">
                {isRTL ? 'اطلاعات شخصی' : 'Personal Info'}
              </span>
            </div>
            
            <div className="w-12 h-0.5 bg-gray-300">
              <div className={`h-full bg-primary-600 transition-all duration-500 ${
                step >= 2 ? 'w-full' : 'w-0'
              }`}></div>
            </div>
            
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                2
              </div>
              <span className="hidden sm:inline font-medium">
                {isRTL ? 'انتخاب صفات' : 'Select Traits'}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder={isRTL ? 'نام خود را وارد کنید' : 'Enter your name'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    {t('yourEmail')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder={isRTL ? 'ایمیل خود را وارد کنید' : 'Enter your email'}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canProceedStep1}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    canProceedStep1
                      ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105 shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isRTL ? 'مرحله بعد' : 'Next Step'}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                {adjectivesLoading ? (
                  <div className="flex justify-center py-12">
                    <LoadingSpinner size="lg" />
                  </div>
                ) : (
                  <>
                    <AdjectiveSelector
                      adjectives={adjectives}
                      selectedIds={formData.selectedAdjectives}
                      onSelectionChange={handleAdjectiveChange}
                      maxSelection={6}
                      className="mb-8"
                    />

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                      >
                        {isRTL ? 'مرحله قبل' : 'Previous'}
                      </button>
                      
                      <button
                        type="submit"
                        disabled={!canProceedStep2 || createUserMutation.isPending}
                        className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          canProceedStep2 && !createUserMutation.isPending
                            ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:scale-105 shadow-lg'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {createUserMutation.isPending ? (
                          <LoadingSpinner size="sm" />
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            {t('createProject')}
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateWindow;