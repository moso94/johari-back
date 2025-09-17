import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, languages, switchLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage.name}</span>
      </button>
      
      <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[120px]">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              currentLanguage.code === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
            }`}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;