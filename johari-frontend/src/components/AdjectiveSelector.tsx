import React from 'react';
import { Check } from 'lucide-react';
import { Adjective } from '../types';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../hooks/useLanguage';

interface AdjectiveSelectorProps {
  adjectives: Adjective[];
  selectedIds: number[];
  onSelectionChange: (ids: number[]) => void;
  maxSelection?: number;
  className?: string;
}

const AdjectiveSelector: React.FC<AdjectiveSelectorProps> = ({
  adjectives,
  selectedIds,
  onSelectionChange,
  maxSelection = 6,
  className = ''
}) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleToggle = (id: number) => {
    if (selectedIds.includes(id)) {
      onSelectionChange(selectedIds.filter(selectedId => selectedId !== id));
    } else if (selectedIds.length < maxSelection) {
      onSelectionChange([...selectedIds, id]);
    }
  };

  return (
    <div className={className}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          {t('selectAdjectives')}
        </h3>
        <span className={`text-sm px-3 py-1 rounded-full ${
          selectedIds.length >= maxSelection 
            ? 'bg-green-100 text-green-700' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {t('selectedCount', { count: selectedIds.length })}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {adjectives.map((adjective) => {
          const isSelected = selectedIds.includes(adjective.id);
          const isDisabled = !isSelected && selectedIds.length >= maxSelection;
          
          return (
            <button
              key={adjective.id}
              onClick={() => handleToggle(adjective.id)}
              disabled={isDisabled}
              className={`relative p-3 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                isSelected
                  ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-md scale-105'
                  : isDisabled
                  ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-25 hover:scale-105 cursor-pointer'
              } ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {/* Translated adjective title */}
              <span className="block">
                {t(adjective.title.toLowerCase().replace(/[^a-z0-9]/g, '_')) || adjective.title}
              </span>
              
              {/* Selection indicator */}
              {isSelected && (
                <div className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg`}>
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {selectedIds.length === 0 && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm">
            {isRTL 
              ? 'لطفاً حداقل یک صفت انتخاب کنید'
              : 'Please select at least one adjective'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default AdjectiveSelector;