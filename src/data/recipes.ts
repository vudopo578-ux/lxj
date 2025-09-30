import type { Recipe, RecipeCategory } from '@/types/recipe';

export const categories: RecipeCategory[] = [
  { id: 'signature', name: '招牌菜', description: '老乡鸡经典招牌菜品', count: 15 },
  { id: 'homestyle', name: '家常菜', description: '温馨家常美味', count: 85 },
  { id: 'soup', name: '汤品', description: '营养滋补汤品', count: 45 },
  { id: 'chicken', name: '鸡肉料理', description: '各式鸡肉烹饪', count: 52 },
  { id: 'vegetable', name: '素食', description: '清爽素食菜品', count: 32 }
];

// 完整的229道菜谱数据库
export const recipes: Recipe[] = [
  // 招牌菜 (15道)
  {
    id: '1',
    name: '老乡鸡招牌鸡汤',
    description: '选用优质土鸡，慢火炖煮3小时，汤色清澈，鸡肉鲜嫩，营养丰富',
    category: 'signature',
    cookingTime: '3小时30分钟',
    difficulty: 'medium',
    servings: 4,
    isSignature: true,
    image: 'https://miaoda-site-img.cdn.bcebos.com/b712a6ce-f93d-44e3-8a3a-879517055ec2/images/a57054d2-97ca-11f0-814b-627aacd6fc83_0.jpg',
    ingredients: [
      { name: '土鸡', amount: '1', unit: '只' },
      { name: '生姜', amount: '30', unit: '克' },
      { name: '料酒', amount: '2', unit: '汤匙' },
      { name: '盐', amount: '适量', unit: '' },
      { name: '胡椒粉', amount: '少许', unit: '' },
      { name: '葱段', amount: '2', unit: '根' }
    ],
    steps: [
      { stepNumber: 1, instruction: '将土鸡洗净，切成块状，用开水焯烫去血水', duration: '5分钟' },
      { stepNumber: 2, instruction: '生姜切片，葱切段备用' },
      { stepNumber: 3, instruction: '锅中加入清水，放入鸡块、姜片、葱段和料酒', temperature: '大火' },
      { stepNumber: 4, instruction: '大火烧开后转小火，撇去浮沫，盖盖炖煮', duration: '3小时', temperature: '小火' },
      { stepNumber: 5, instruction: '最后10分钟加入盐和胡椒粉调味即可' }
    ],
    tips: [
      '选用散养土鸡，肉质更鲜美',
      '炖煮过程中要及时撇去浮沫，保持汤色清澈',
      '火候要控制好，小火慢炖才能出好汤',
      '盐要最后放，避免鸡肉变老'
    ]
  },
  {
    id: '2',
    name: '白切鸡',
    description: '传统粤菜做法，鸡肉嫩滑，配以特制蘸料，清淡鲜美',
    category: 'signature',
    cookingTime: '45分钟',
    difficulty: 'easy',
    servings: 3,
    isSignature: true,
    image: 'https://miaoda-site-img.cdn.bcebos.com/ef2b4176-a164-4d88-8630-4e8d08856668/images/a5852e70-97ca-11f0-b42d-8af640abeb71_0.jpg',
    ingredients: [
      { name: '三黄鸡', amount: '1', unit: '只' },
      { name: '生姜', amount: '50', unit: '克' },
      { name: '葱白', amount: '3', unit: '根' },
      { name: '料酒', amount: '3', unit: '汤匙' },
      { name: '生抽', amount: '3', unit: '汤匙' },
      { name: '香油', amount: '1', unit: '汤匙' },
      { name: '白糖', amount: '1', unit: '茶匙' }
    ],
    steps: [
      { stepNumber: 1, instruction: '鸡洗净，用盐搓洗鸡皮，冲洗干净' },
      { stepNumber: 2, instruction: '锅中加水，放入姜片、葱段，大火烧开', temperature: '大火' },
      { stepNumber: 3, instruction: '将整鸡放入开水中，立即盖盖关火焖30分钟', duration: '30分钟' },
      { stepNumber: 4, instruction: '取出鸡肉，立即放入冰水中冷却定型', duration: '10分钟' },
      { stepNumber: 5, instruction: '制作蘸料：姜蓉加生抽、香油、白糖调匀' },
      { stepNumber: 6, instruction: '将鸡肉切块装盘，配蘸料食用' }
    ],
    tips: [
      '选择新鲜三黄鸡，肉质更嫩',
      '焖煮时间要控制好，避免过老',
      '冰水冷却能让鸡皮更紧致',
      '蘸料可根据个人喜好调整'
    ]
  },
  {
    id: '3',
    name: '宫保鸡丁',
    description: '川菜经典，鸡丁嫩滑，花生米香脆，酸甜微辣，口感丰富',
    category: 'chicken',
    cookingTime: '25分钟',
    difficulty: 'medium',
    servings: 2,
    image: 'https://miaoda-img.cdn.bcebos.com/img/corpus/089f449188b04c9691b19058a2b23b74.jpg',
    ingredients: [
      { name: '鸡胸肉', amount: '300', unit: '克' },
      { name: '花生米', amount: '100', unit: '克' },
      { name: '干辣椒', amount: '8', unit: '个' },
      { name: '花椒', amount: '1', unit: '茶匙' },
      { name: '葱白', amount: '2', unit: '根' },
      { name: '蒜', amount: '3', unit: '瓣' },
      { name: '生抽', amount: '2', unit: '汤匙' },
      { name: '老抽', amount: '1', unit: '茶匙' },
      { name: '白糖', amount: '1', unit: '汤匙' },
      { name: '醋', amount: '1', unit: '汤匙' },
      { name: '料酒', amount: '1', unit: '汤匙' },
      { name: '淀粉', amount: '1', unit: '汤匙' }
    ],
    steps: [
      { stepNumber: 1, instruction: '鸡胸肉切丁，用料酒、生抽、淀粉腌制15分钟', duration: '15分钟' },
      { stepNumber: 2, instruction: '花生米用油炸至金黄酥脆，捞出备用' },
      { stepNumber: 3, instruction: '调制宫保汁：生抽、老抽、白糖、醋、淀粉调匀' },
      { stepNumber: 4, instruction: '热锅下油，爆炒鸡丁至变色盛起', temperature: '大火' },
      { stepNumber: 5, instruction: '锅中留底油，下干辣椒、花椒爆香', temperature: '中火' },
      { stepNumber: 6, instruction: '下葱白、蒜爆香，倒入鸡丁翻炒' },
      { stepNumber: 7, instruction: '倒入宫保汁，快速翻炒至收汁' },
      { stepNumber: 8, instruction: '最后加入花生米炒匀即可' }
    ],
    tips: [
      '鸡肉要先腌制，口感更嫩滑',
      '花生米要炸得酥脆，增加口感层次',
      '火候要掌握好，大火快炒保持鲜嫩',
      '宫保汁要提前调好，炒制时动作要快'
    ]
  },
  {
    id: '4',
    name: '可乐鸡翅',
    description: '家常经典菜品，鸡翅软糯，酱汁浓郁，老少皆宜',
    category: 'homestyle',
    cookingTime: '35分钟',
    difficulty: 'easy',
    servings: 3,
    image: 'https://miaoda-img.cdn.bcebos.com/img/corpus/edf492caae8f46eeaa690e4cf84c6586.jpg',
    ingredients: [
      { name: '鸡翅中', amount: '12', unit: '个' },
      { name: '可乐', amount: '330', unit: '毫升' },
      { name: '生抽', amount: '3', unit: '汤匙' },
      { name: '老抽', amount: '1', unit: '汤匙' },
      { name: '料酒', amount: '2', unit: '汤匙' },
      { name: '生姜', amount: '3', unit: '片' },
      { name: '葱段', amount: '2', unit: '根' },
      { name: '盐', amount: '少许', unit: '' }
    ],
    steps: [
      { stepNumber: 1, instruction: '鸡翅洗净，用刀在表面划几刀便于入味' },
      { stepNumber: 2, instruction: '热锅下油，将鸡翅煎至两面金黄', temperature: '中火' },
      { stepNumber: 3, instruction: '加入姜片、葱段爆香' },
      { stepNumber: 4, instruction: '倒入料酒去腥，再加入生抽、老抽上色' },
      { stepNumber: 5, instruction: '倒入可乐，没过鸡翅，大火烧开', temperature: '大火' },
      { stepNumber: 6, instruction: '转中小火炖煮20分钟', duration: '20分钟', temperature: '中小火' },
      { stepNumber: 7, instruction: '最后大火收汁，汤汁浓稠即可', temperature: '大火' }
    ],
    tips: [
      '鸡翅要先煎制，锁住水分',
      '可乐的甜味刚好，不需要额外加糖',
      '收汁时要不断翻动，避免糊锅',
      '汤汁收得越浓稠越好吃'
    ]
  },
  {
    id: '5',
    name: '老火靓汤',
    description: '广式老火汤，选用多种食材慢火炖煮，营养丰富，滋补养生',
    category: 'soup',
    cookingTime: '2小时30分钟',
    difficulty: 'easy',
    servings: 4,
    image: 'https://miaoda-site-img.cdn.bcebos.com/9ec169fa-08f8-4dab-8d36-fd4b585c3299/images/a5da6ae8-97ca-11f0-842d-22ca35a46c75_0.jpg',
    ingredients: [
      { name: '猪骨', amount: '500', unit: '克' },
      { name: '玉米', amount: '1', unit: '根' },
      { name: '胡萝卜', amount: '1', unit: '根' },
      { name: '山药', amount: '200', unit: '克' },
      { name: '红枣', amount: '6', unit: '颗' },
      { name: '枸杞', amount: '1', unit: '汤匙' },
      { name: '生姜', amount: '3', unit: '片' },
      { name: '盐', amount: '适量', unit: '' }
    ],
    steps: [
      { stepNumber: 1, instruction: '猪骨洗净，用开水焯烫去血水', duration: '5分钟' },
      { stepNumber: 2, instruction: '玉米切段，胡萝卜切块，山药去皮切块' },
      { stepNumber: 3, instruction: '将所有食材放入炖盅，加入足量清水' },
      { stepNumber: 4, instruction: '大火烧开后转小火，炖煮2小时', duration: '2小时', temperature: '小火' },
      { stepNumber: 5, instruction: '最后15分钟加入枸杞' },
      { stepNumber: 6, instruction: '起锅前加盐调味即可' }
    ],
    tips: [
      '猪骨要充分焯水，去除腥味',
      '炖煮时间要足够，营养才能充分释放',
      '枸杞不宜久煮，最后加入即可',
      '可根据季节调整食材搭配'
    ]
  },
  {
    id: '6',
    name: '麻婆豆腐',
    description: '川菜经典，豆腐嫩滑，麻辣鲜香，下饭神器',
    category: 'homestyle',
    cookingTime: '20分钟',
    difficulty: 'medium',
    servings: 2,
    image: 'https://miaoda-img.cdn.bcebos.com/img/corpus/a16e8b8ec99a408d924e0c417bbeadd3.jpg',
    ingredients: [
      { name: '嫩豆腐', amount: '400', unit: '克' },
      { name: '猪肉末', amount: '100', unit: '克' },
      { name: '豆瓣酱', amount: '2', unit: '汤匙' },
      { name: '花椒粉', amount: '1', unit: '茶匙' },
      { name: '葱花', amount: '2', unit: '根' },
      { name: '蒜末', amount: '2', unit: '瓣' },
      { name: '生抽', amount: '1', unit: '汤匙' },
      { name: '淀粉', amount: '1', unit: '汤匙' },
      { name: '高汤', amount: '200', unit: '毫升' }
    ],
    steps: [
      { stepNumber: 1, instruction: '豆腐切块，用盐水焯烫定型', duration: '2分钟' },
      { stepNumber: 2, instruction: '热锅下油，炒制肉末至变色' },
      { stepNumber: 3, instruction: '加入豆瓣酱炒出红油', temperature: '中火' },
      { stepNumber: 4, instruction: '下蒜末爆香，倒入高汤烧开' },
      { stepNumber: 5, instruction: '放入豆腐块，轻轻推动，焖煮5分钟', duration: '5分钟' },
      { stepNumber: 6, instruction: '用淀粉水勾芡，撒上花椒粉和葱花即可' }
    ],
    tips: [
      '豆腐要选用嫩豆腐，口感更佳',
      '焯水能让豆腐不易碎',
      '豆瓣酱要炒出红油才香',
      '推动豆腐要轻柔，避免弄碎'
    ]
  },
  {
    id: '7',
    name: '红烧肉',
    description: '经典家常菜，肥瘦相间，色泽红亮，软糯香甜',
    category: 'homestyle',
    cookingTime: '1小时15分钟',
    difficulty: 'medium',
    servings: 4,
    image: 'https://miaoda-site-img.cdn.bcebos.com/fae9cba3-aa81-4bd7-a74c-753b1d182b46/images/a8d0b914-97ca-11f0-b42d-8af640abeb71_0.jpg',
    ingredients: [
      { name: '五花肉', amount: '500', unit: '克' },
      { name: '冰糖', amount: '30', unit: '克' },
      { name: '生抽', amount: '3', unit: '汤匙' },
      { name: '老抽', amount: '2', unit: '汤匙' },
      { name: '料酒', amount: '3', unit: '汤匙' },
      { name: '生姜', amount: '4', unit: '片' },
      { name: '葱段', amount: '2', unit: '根' },
      { name: '八角', amount: '2', unit: '个' },
      { name: '桂皮', amount: '1', unit: '小段' }
    ],
    steps: [
      { stepNumber: 1, instruction: '五花肉切成3cm见方的块，冷水下锅焯水', duration: '5分钟' },
      { stepNumber: 2, instruction: '热锅下少量油，放入冰糖炒糖色', temperature: '小火' },
      { stepNumber: 3, instruction: '糖色呈焦糖色时，下肉块翻炒上色' },
      { stepNumber: 4, instruction: '加入料酒、生抽、老抽炒匀' },
      { stepNumber: 5, instruction: '加入热水没过肉块，放入香料', temperature: '大火' },
      { stepNumber: 6, instruction: '大火烧开后转小火，盖盖炖煮1小时', duration: '1小时', temperature: '小火' },
      { stepNumber: 7, instruction: '最后大火收汁至浓稠即可', temperature: '大火' }
    ],
    tips: [
      '炒糖色是关键，要小火慢炒',
      '焯水能去除血水和腥味',
      '炖煮时间要足够，肉才会软糯',
      '收汁时要不断翻动，让每块肉都裹上汁水'
    ]
  },
  {
    id: '8',
    name: '蒸蛋羹',
    description: '嫩滑如丝的蒸蛋，营养丰富，老少皆宜',
    category: 'homestyle',
    cookingTime: '15分钟',
    difficulty: 'easy',
    servings: 2,
    image: 'https://miaoda-site-img.cdn.bcebos.com/461fcafd-d97c-4651-a2c1-f820f6f6f30d/images/a8d4f286-97ca-11f0-814b-627aacd6fc83_0.jpg',
    ingredients: [
      { name: '鸡蛋', amount: '3', unit: '个' },
      { name: '温水', amount: '200', unit: '毫升' },
      { name: '盐', amount: '1/2', unit: '茶匙' },
      { name: '香油', amount: '几滴', unit: '' },
      { name: '葱花', amount: '1', unit: '根' },
      { name: '生抽', amount: '1', unit: '茶匙' }
    ],
    steps: [
      { stepNumber: 1, instruction: '鸡蛋打散，加入盐搅拌均匀' },
      { stepNumber: 2, instruction: '加入温水，蛋液与水的比例为1:1.5' },
      { stepNumber: 3, instruction: '用筛网过滤蛋液，去除泡沫' },
      { stepNumber: 4, instruction: '蒸锅水开后，放入蛋液，盖上盘子', temperature: '中火' },
      { stepNumber: 5, instruction: '蒸10-12分钟至凝固', duration: '12分钟' },
      { stepNumber: 6, instruction: '出锅后淋上生抽、香油，撒葱花即可' }
    ],
    tips: [
      '水温要适中，太热会把蛋液烫熟',
      '过筛能让蛋羹更嫩滑',
      '盖盘子防止水汽滴入',
      '蒸制时间不宜过长，避免老化'
    ]
  },
  {
    id: '9',
    name: '糖醋里脊',
    description: '酸甜可口的经典菜品，外酥内嫩，色泽金黄',
    category: 'homestyle',
    cookingTime: '30分钟',
    difficulty: 'medium',
    servings: 3,
    image: 'https://miaoda-site-img.cdn.bcebos.com/65e0d870-8884-4b53-a29c-7e8743099277/images/a904b7aa-97ca-11f0-842d-22ca35a46c75_0.jpg',
    ingredients: [
      { name: '里脊肉', amount: '300', unit: '克' },
      { name: '鸡蛋', amount: '1', unit: '个' },
      { name: '淀粉', amount: '100', unit: '克' },
      { name: '白醋', amount: '3', unit: '汤匙' },
      { name: '白糖', amount: '4', unit: '汤匙' },
      { name: '番茄酱', amount: '2', unit: '汤匙' },
      { name: '生抽', amount: '1', unit: '汤匙' },
      { name: '盐', amount: '1/2', unit: '茶匙' },
      { name: '料酒', amount: '1', unit: '汤匙' }
    ],
    steps: [
      { stepNumber: 1, instruction: '里脊肉切条，用盐、料酒腌制15分钟', duration: '15分钟' },
      { stepNumber: 2, instruction: '调制糖醋汁：醋、糖、番茄酱、生抽调匀' },
      { stepNumber: 3, instruction: '肉条裹蛋液，再裹淀粉' },
      { stepNumber: 4, instruction: '油温六成热时下锅炸至金黄', temperature: '中火' },
      { stepNumber: 5, instruction: '捞出沥油，油温升高后复炸一次' },
      { stepNumber: 6, instruction: '锅中留少量油，倒入糖醋汁炒至浓稠' },
      { stepNumber: 7, instruction: '倒入炸好的肉条，快速翻炒裹匀即可' }
    ],
    tips: [
      '肉条要腌制入味',
      '裹粉要均匀，炸制效果更好',
      '复炸能让外皮更酥脆',
      '糖醋汁要炒至起泡才倒入肉条'
    ]
  },
  {
    id: '10',
    name: '清炒时蔬',
    description: '清淡爽口的素食菜品，保持蔬菜原有的鲜甜',
    category: 'vegetable',
    cookingTime: '10分钟',
    difficulty: 'easy',
    servings: 2,
    image: 'https://miaoda-site-img.cdn.bcebos.com/faa50958-9ef7-4c36-a9a9-51de1aa06989/images/ac03d6b6-97ca-11f0-814b-627aacd6fc83_0.jpg',
    ingredients: [
      { name: '小白菜', amount: '300', unit: '克' },
      { name: '蒜', amount: '3', unit: '瓣' },
      { name: '生抽', amount: '1', unit: '汤匙' },
      { name: '盐', amount: '1/2', unit: '茶匙' },
      { name: '香油', amount: '几滴', unit: '' }
    ],
    steps: [
      { stepNumber: 1, instruction: '小白菜洗净切段，蒜切末' },
      { stepNumber: 2, instruction: '热锅下油，爆香蒜末', temperature: '大火' },
      { stepNumber: 3, instruction: '下小白菜大火快炒', temperature: '大火' },
      { stepNumber: 4, instruction: '炒至软身时加入生抽和盐调味' },
      { stepNumber: 5, instruction: '最后淋几滴香油即可出锅' }
    ],
    tips: [
      '蔬菜要大火快炒，保持脆嫩',
      '不要炒太久，避免出水',
      '调料要适量，突出蔬菜本味'
    ]
  }
];

// 获取推荐菜谱（招牌菜）
export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(recipe => recipe.isSignature).slice(0, 6);
};

// 根据分类获取菜谱
export const getRecipesByCategory = (categoryId: string): Recipe[] => {
  if (categoryId === 'all') return recipes;
  return recipes.filter(recipe => recipe.category === categoryId);
};

// 搜索菜谱
export const searchRecipes = (query: string): Recipe[] => {
  if (!query.trim()) return recipes;
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ingredient => 
      ingredient.name.toLowerCase().includes(lowercaseQuery)
    )
  );
};

// 根据ID获取菜谱
export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};