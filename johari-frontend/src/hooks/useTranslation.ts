import { useLanguage } from './useLanguage';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    create: 'Create Window',
    feedback: 'Give Feedback',
    
    // Home page
    welcome: 'Welcome to Johari Window',
    subtitle: 'Discover yourself through the eyes of others',
    description: 'The Johari Window is a technique that helps people better understand their relationship with themselves and others. Create your window and get feedback from friends and colleagues.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    features: 'Features',
    feature1Title: 'Self Discovery',
    feature1Desc: 'Understand your personality through different perspectives',
    feature2Title: 'Anonymous Feedback',
    feature2Desc: 'Get honest feedback from friends and colleagues',
    feature3Title: 'Visual Analysis',
    feature3Desc: 'See your results in an intuitive Johari Window format',
    
    // Create window
    createWindow: 'Create Your Johari Window',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    selectAdjectives: 'Select 5-6 adjectives that describe you',
    selectedCount: 'Selected: {{count}}/6',
    createProject: 'Create Window',
    
    // Feedback
    giveFeedback: 'Give Feedback',
    feedbackFor: 'Feedback for {{name}}',
    selectAdjectivesForPerson: 'Select 5-6 adjectives that describe this person',
    submitFeedback: 'Submit Feedback',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    
    // Messages
    windowCreated: 'Your Johari Window has been created successfully!',
    feedbackSubmitted: 'Your feedback has been submitted successfully!',
    errorCreatingWindow: 'Error creating window. Please try again.',
    errorSubmittingFeedback: 'Error submitting feedback. Please try again.',
    
    // Adjectives (sample)
    able: 'Able',
    accepting: 'Accepting',
    adaptable: 'Adaptable',
    bold: 'Bold',
    brave: 'Brave',
    calm: 'Calm',
    caring: 'Caring',
    cheerful: 'Cheerful',
    clever: 'Clever',
    complex: 'Complex',
    confident: 'Confident',
    dependable: 'Dependable',
    dignified: 'Dignified',
    empathetic: 'Empathetic',
    energetic: 'Energetic',
    extroverted: 'Extroverted',
    friendly: 'Friendly',
    giving: 'Giving',
    happy: 'Happy',
    helpful: 'Helpful',
    idealistic: 'Idealistic',
    independent: 'Independent',
    ingenious: 'Ingenious',
    intelligent: 'Intelligent',
    introverted: 'Introverted',
    kind: 'Kind',
    knowledgeable: 'Knowledgeable',
    logical: 'Logical',
    loving: 'Loving',
    mature: 'Mature',
    modest: 'Modest',
    nervous: 'Nervous',
    observant: 'Observant',
    organized: 'Organized',
    patient: 'Patient',
    powerful: 'Powerful',
    proud: 'Proud',
    quiet: 'Quiet',
    reflective: 'Reflective',
    relaxed: 'Relaxed',
    religious: 'Religious',
    responsive: 'Responsive',
    searching: 'Searching',
    self_assertive: 'Self-assertive',
    self_conscious: 'Self-conscious',
    sensible: 'Sensible',
    sentimental: 'Sentimental',
    shy: 'Shy',
    silly: 'Silly',
    spontaneous: 'Spontaneous',
    sympathetic: 'Sympathetic',
    tense: 'Tense',
    trustworthy: 'Trustworthy',
    warm: 'Warm',
    wise: 'Wise',
    witty: 'Witty'
  },
  fa: {
    // Navigation
    home: 'خانه',
    about: 'درباره',
    create: 'ایجاد پنجره',
    feedback: 'ارسال بازخورد',
    
    // Home page
    welcome: 'به پنجره جوهاری خوش آمدید',
    subtitle: 'خودتان را از نگاه دیگران کشف کنید',
    description: 'پنجره جوهاری تکنیکی است که به افراد کمک می‌کند تا رابطه خود با خودشان و دیگران را بهتر درک کنند. پنجره خود را بسازید و از دوستان و همکاران بازخورد دریافت کنید.',
    getStarted: 'شروع کنید',
    learnMore: 'بیشتر بدانید',
    
    // Features
    features: 'ویژگی‌ها',
    feature1Title: 'خودشناسی',
    feature1Desc: 'شخصیت خود را از دیدگاه‌های مختلف درک کنید',
    feature2Title: 'بازخورد ناشناس',
    feature2Desc: 'بازخورد صادقانه از دوستان و همکاران دریافت کنید',
    feature3Title: 'تحلیل بصری',
    feature3Desc: 'نتایج خود را در قالب پنجره جوهاری مشاهده کنید',
    
    // Create window
    createWindow: 'پنجره جوهاری خود را بسازید',
    yourName: 'نام شما',
    yourEmail: 'ایمیل شما',
    selectAdjectives: '۵ تا ۶ صفت که شما را توصیف می‌کند انتخاب کنید',
    selectedCount: 'انتخاب شده: {{count}}/۶',
    createProject: 'ایجاد پنجره',
    
    // Feedback
    giveFeedback: 'ارسال بازخورد',
    feedbackFor: 'بازخورد برای {{name}}',
    selectAdjectivesForPerson: '۵ تا ۶ صفت که این فرد را توصیف می‌کند انتخاب کنید',
    submitFeedback: 'ارسال بازخورد',
    
    // Common
    loading: 'در حال بارگذاری...',
    error: 'خطا',
    success: 'موفقیت',
    cancel: 'لغو',
    save: 'ذخیره',
    edit: 'ویرایش',
    delete: 'حذف',
    confirm: 'تأیید',
    
    // Messages
    windowCreated: 'پنجره جوهاری شما با موفقیت ایجاد شد!',
    feedbackSubmitted: 'بازخورد شما با موفقیت ارسال شد!',
    errorCreatingWindow: 'خطا در ایجاد پنجره. لطفاً دوباره تلاش کنید.',
    errorSubmittingFeedback: 'خطا در ارسال بازخورد. لطفاً دوباره تلاش کنید.',
    
    // Adjectives (sample)
    able: 'توانا',
    accepting: 'پذیرنده',
    adaptable: 'انطباق‌پذیر',
    bold: 'جسور',
    brave: 'شجاع',
    calm: 'آرام',
    caring: 'مهربان',
    cheerful: 'شاد',
    clever: 'باهوش',
    complex: 'پیچیده',
    confident: 'مطمئن',
    dependable: 'قابل اعتماد',
    dignified: 'باوقار',
    empathetic: 'همدل',
    energetic: 'پرانرژی',
    extroverted: 'برون‌گرا',
    friendly: 'دوستانه',
    giving: 'بخشنده',
    happy: 'خوشحال',
    helpful: 'کمک‌کننده',
    idealistic: 'آرمان‌گرا',
    independent: 'مستقل',
    ingenious: 'نبوغ‌آمیز',
    intelligent: 'باهوش',
    introverted: 'درون‌گرا',
    kind: 'مهربان',
    knowledgeable: 'دانا',
    logical: 'منطقی',
    loving: 'عاشق',
    mature: 'بالغ',
    modest: 'فروتن',
    nervous: 'عصبی',
    observant: 'مشاهده‌گر',
    organized: 'منظم',
    patient: 'صبور',
    powerful: 'قدرتمند',
    proud: 'مغرور',
    quiet: 'ساکت',
    reflective: 'متفکر',
    relaxed: 'آرام',
    religious: 'مذهبی',
    responsive: 'پاسخگو',
    searching: 'جستجوگر',
    self_assertive: 'خودابرازگر',
    self_conscious: 'خودآگاه',
    sensible: 'عاقل',
    sentimental: 'احساساتی',
    shy: 'خجالتی',
    silly: 'احمق',
    spontaneous: 'خودجوش',
    sympathetic: 'همدرد',
    tense: 'متشنج',
    trustworthy: 'قابل اعتماد',
    warm: 'گرم',
    wise: 'حکیم',
    witty: 'شوخ‌طبع'
  }
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key: string, params?: Record<string, string | number>) => {
    const translation = translations[currentLanguage.code as keyof typeof translations];
    let text = translation[key as keyof typeof translation] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{{${param}}}`, String(value));
      });
    }
    
    return text;
  };
  
  return { t };
};