// 症状-产品映射库
const symptomProductMap = {
    "肝火旺": {
        reason: "可能属于肝气郁结或肝阳上亢的体质表现",
        suggestion: "建议保持情绪舒畅，避免熬夜，饮食清淡，可适当饮用菊花茶、决明子茶等清热平肝的饮品。",
        foods: [
            {
                name: "菊花",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chrysanthemum%20flower%20herb%20medicine%20food&image_size=square",
                description: "具有散风清热、平肝明目的作用，适合肝火旺、眼睛干涩的人群。"
            },
            {
                name: "决明子",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cassia%20seed%20herb%20medicine%20food&image_size=square",
                description: "具有清肝明目、润肠通便的作用，适合肝火旺、便秘的人群。"
            },
            {
                name: "枸杞",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wolfberry%20goji%20berry%20herb%20medicine%20food&image_size=square",
                description: "具有滋补肝肾、益精明目的作用，适合肝血不足、视力下降的人群。"
            }
        ]
    },
    "睡眠不好": {
        reason: "可能属于心脾两虚或肝郁气滞的体质表现",
        suggestion: "建议保持规律作息，睡前避免使用电子设备，可适当饮用酸枣仁茶、百合粥等宁心安神的食物。",
        foods: [
            {
                name: "酸枣仁",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ziziphus%20seed%20sour%20jujube%20seed%20herb%20medicine%20food&image_size=square",
                description: "具有养心安神、敛汗生津的作用，适合失眠多梦、心悸的人群。"
            },
            {
                name: "百合",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lily%20bulb%20herb%20medicine%20food&image_size=square",
                description: "具有养阴润肺、清心安神的作用，适合失眠、干咳的人群。"
            },
            {
                name: "莲子",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lotus%20seed%20herb%20medicine%20food&image_size=square",
                description: "具有补脾止泻、益肾涩精、养心安神的作用，适合失眠、心悸的人群。"
            }
        ]
    },
    "眼睛干涩": {
        reason: "可能属于肝血不足或肝肾阴虚的体质表现",
        suggestion: "建议减少用眼时间，保持眼部湿润，可适当食用枸杞、胡萝卜等明目食物。",
        foods: [
            {
                name: "枸杞",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wolfberry%20goji%20berry%20herb%20medicine%20food&image_size=square",
                description: "具有滋补肝肾、益精明目的作用，适合肝血不足、视力下降的人群。"
            },
            {
                name: "菊花",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chrysanthemum%20flower%20herb%20medicine%20food&image_size=square",
                description: "具有散风清热、平肝明目的作用，适合肝火旺、眼睛干涩的人群。"
            },
            {
                name: "胡萝卜",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carrot%20vegetable%20herb%20medicine%20food&image_size=square",
                description: "富含胡萝卜素，可转化为维生素A，有助于保护眼睛健康。"
            }
        ]
    },
    "疲劳乏力": {
        reason: "可能属于脾气虚或气血两虚的体质表现",
        suggestion: "建议保证充足睡眠，适当运动，饮食上可多食用山药、大枣等健脾益气的食物。",
        foods: [
            {
                name: "山药",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20yam%20herb%20medicine%20food&image_size=square",
                description: "具有健脾益胃、滋肾益精的作用，适合脾胃虚弱、疲劳乏力的人群。"
            },
            {
                name: "大枣",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20dates%20jujube%20herb%20medicine%20food&image_size=square",
                description: "具有补中益气、养血安神的作用，适合气血不足、疲劳乏力的人群。"
            },
            {
                name: "黄芪",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=astragalus%20root%20herb%20medicine%20food&image_size=square",
                description: "具有补气升阳、固表止汗的作用，适合气虚乏力、自汗的人群。"
            }
        ]
    },
    "脾胃虚弱": {
        reason: "可能属于脾气虚或脾胃虚寒的体质表现",
        suggestion: "建议饮食规律，避免生冷油腻食物，可适当食用山药、小米等健脾养胃的食物。",
        foods: [
            {
                name: "山药",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20yam%20herb%20medicine%20food&image_size=square",
                description: "具有健脾益胃、滋肾益精的作用，适合脾胃虚弱、疲劳乏力的人群。"
            },
            {
                name: "小米",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=millet%20grain%20herb%20medicine%20food&image_size=square",
                description: "具有健脾和胃、补益虚损的作用，适合脾胃虚弱、消化不良的人群。"
            },
            {
                name: "生姜",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ginger%20root%20herb%20medicine%20food&image_size=square",
                description: "具有温中散寒、止呕的作用，适合脾胃虚寒、胃寒呕吐的人群。"
            }
        ]
    },
    "睡眠不好": {
        reason: "可能属于心脾两虚或肝郁气滞的体质表现",
        suggestion: "建议保持规律作息，睡前避免使用电子设备，可适当饮用酸枣仁茶、百合粥等宁心安神的食物。",
        foods: [
            {
                name: "酸枣仁",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ziziphus%20seed%20sour%20jujube%20seed%20herb%20medicine%20food&image_size=square",
                description: "具有养心安神、敛汗生津的作用，适合失眠多梦、心悸的人群。"
            },
            {
                name: "百合",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lily%20bulb%20herb%20medicine%20food&image_size=square",
                description: "具有养阴润肺、清心安神的作用，适合失眠、干咳的人群。"
            },
            {
                name: "莲子",
                image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lotus%20seed%20herb%20medicine%20food&image_size=square",
                description: "具有补脾止泻、益肾涩精、养心安神的作用，适合失眠、心悸的人群。"
            }
        ]
    }
};

// 危急重症关键词
const emergencyKeywords = ["胸痛", "呼吸困难", "剧烈头痛", "意识模糊", "大出血", "高热不退", "严重腹痛", "晕厥", "抽搐", "重度外伤"];

// 养生知识文章
const healthArticles = [
    {
        title: "中医养生基础：四季养生法",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20medicine%20health%20knowledge%20article%20illustration&image_size=landscape_16_9",
        content: "根据中医理论，四季养生应顺应自然规律，春季养肝，夏季养心，秋季养肺，冬季养肾。春季宜多吃绿色蔬菜，夏季宜清淡饮食，秋季宜滋阴润肺，冬季宜温补养肾。"
    },
    {
        title: "药食同源：日常饮食中的养生智慧",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20diet%20nutrition%20illustration&image_size=landscape_16_9",
        content: "药食同源是中医的重要理论，许多日常食材同时具有药用价值，合理搭配可以起到调理身体的作用。例如，生姜可以温中散寒，大枣可以补中益气，枸杞可以滋补肝肾等。"
    },
    {
        title: "睡眠养生：如何拥有高质量睡眠",
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sleep%20health%20wellness%20illustration&image_size=landscape_16_9",
        content: "良好的睡眠是健康的基础，中医认为睡眠与人体气血运行密切相关，调整睡眠习惯可以改善整体健康状况。建议保持规律作息，睡前避免使用电子设备，创造安静舒适的睡眠环境。"
    }
];

// DOM元素
const symptomInput = document.getElementById('symptom-input');
const consultBtn = document.getElementById('consult-btn');
const consultResult = document.getElementById('consult-result');
const reasonElement = document.querySelector('.reason');
const suggestionElement = document.querySelector('.suggestion');
const warningElement = document.querySelector('.warning');
const tags = document.querySelectorAll('.tag');
const navLinks = document.querySelectorAll('.nav-link');

// 初始化页面
function init() {
    // 绑定事件
    bindEvents();
    // 初始化养生知识文章
    initHealthArticles();
}

// 绑定事件
function bindEvents() {
    // 症状咨询按钮点击事件
    consultBtn.addEventListener('click', handleConsult);
    
    // 标签点击事件
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            symptomInput.value = tag.textContent;
        });
    });
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // 移除所有活动状态
            navLinks.forEach(item => item.classList.remove('active'));
            // 添加当前活动状态
            link.classList.add('active');
            // 滚动到对应区域
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 阅读更多按钮点击事件
    const readMoreBtns = document.querySelectorAll('.read-more');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const articleCard = btn.closest('.article-card');
            const fullContent = articleCard.querySelector('.full-content');
            const summary = articleCard.querySelector('.summary');
            
            if (fullContent.classList.contains('hidden')) {
                // 展开内容
                fullContent.classList.remove('hidden');
                btn.textContent = '收起';
            } else {
                // 折叠内容
                fullContent.classList.add('hidden');
                btn.textContent = '阅读更多';
            }
        });
    });
    
    // 滚动事件，更新导航活动状态
    window.addEventListener('scroll', updateNavActive);
}

// 更新导航活动状态
function updateNavActive() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 处理症状咨询
async function handleConsult() {
    const symptom = symptomInput.value.trim();
    if (!symptom) {
        alert('请描述您的不适症状');
        return;
    }
    
    // 检查是否包含危急重症关键词
    const hasEmergencyKeyword = emergencyKeywords.some(keyword => 
        symptom.includes(keyword)
    );
    
    // 显示加载动画
    consultBtn.innerHTML = '<span class="loading"></span> 分析中...';
    consultBtn.disabled = true;
    
    try {
        // 调用大型语言模型API获取分析结果
        const analysisResult = await callLLMApi(symptom);
        
        // 重置按钮状态
        consultBtn.innerHTML = '获取分析建议';
        consultBtn.disabled = false;
        
        // 显示结果区域
        consultResult.classList.remove('hidden');
        
        // 显示分析结果
        reasonElement.innerHTML = `<strong>可能原因：</strong>${analysisResult.reason}`;
        suggestionElement.innerHTML = `<strong>养生建议：</strong>${analysisResult.suggestion}`;
        
        // 显示或隐藏警告
        if (hasEmergencyKeyword) {
            warningElement.classList.remove('hidden');
        } else {
            warningElement.classList.add('hidden');
        }
        
        // 滚动到结果区域
        consultResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // 智能联动：自动触发药食同源推荐
        await handleRecommendWithSymptom(symptom);
    } catch (error) {
        console.error('API调用失败:', error);
        
        // 重置按钮状态
        consultBtn.innerHTML = '获取分析建议';
        consultBtn.disabled = false;
        
        // 显示错误信息
        consultResult.classList.remove('hidden');
        reasonElement.innerHTML = '<strong>分析失败：</strong>无法连接到分析服务，请稍后再试。';
        suggestionElement.innerHTML = '';
        warningElement.classList.add('hidden');
        
        // 滚动到结果区域
        consultResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 根据症状自动获取推荐食材
async function handleRecommendWithSymptom(symptom) {
    try {
        // 调用大型语言模型API获取推荐结果
        const foods = await getFoodRecommendations(symptom);
        
        // 获取推荐食材显示区域
        const foodRecommendation = document.querySelector('.food-recommendation');
        const foodList = document.querySelector('.food-recommendation .food-list');
        
        // 显示推荐食材区域
        foodRecommendation.classList.remove('hidden');
        
        // 清空食物列表
        foodList.innerHTML = '';
        
        // 显示推荐食物
        foods.forEach(food => {
            const foodItem = createFoodItem(food);
            foodList.appendChild(foodItem);
        });
    } catch (error) {
        console.error('推荐获取失败:', error);
        
        // 获取推荐食材显示区域
        const foodRecommendation = document.querySelector('.food-recommendation');
        const foodList = document.querySelector('.food-recommendation .food-list');
        
        // 显示推荐食材区域
        foodRecommendation.classList.remove('hidden');
        
        // 显示错误信息
        foodList.innerHTML = '<p style="text-align: center; color: #ff0000;">无法获取推荐，请稍后再试。</p>';
    }
}

// 调用大型语言模型API
async function callLLMApi(symptom) {
    // 使用DeepSeek API获取分析结果
    const apiKey = 'sk-9e9c5d587ffd45a68da2bfe011863837';
    const apiEndpoint = 'https://api.deepseek.com/v1/chat/completions';
    
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: '你是一个专业的中医养生顾问，根据用户描述的症状，提供可能的原因分析和养生建议。请注意，你不是医生，不能提供医疗诊断，只能提供养生调理建议。请按照"可能原因：[原因分析]\n养生建议：[具体建议]"的格式返回结果。'
                    },
                    {
                        role: 'user',
                        content: `请分析以下症状可能的原因并提供养生建议：${symptom}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });
        
        if (!response.ok) {
            throw new Error(`API调用失败：${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const result = data.choices[0].message.content;
        
        // 解析LLM响应
        const reasonMatch = result.match(/可能原因：(.*?)\n养生建议：/s);
        const suggestionMatch = result.match(/养生建议：(.*)/s);
        
        return {
            reason: reasonMatch ? reasonMatch[1].trim() : '根据您的描述，可能属于体质失衡的表现',
            suggestion: suggestionMatch ? suggestionMatch[1].trim() : '建议保持良好的生活习惯，均衡饮食，适当运动，保持心情舒畅。'
        };
    } catch (error) {
        console.error('DeepSeek API调用失败:', error);
        
        // 备用方案：使用本地症状库
        let matchedSymptom = null;
        for (const key in symptomProductMap) {
            if (symptom.includes(key)) {
                matchedSymptom = key;
                break;
            }
        }
        
        if (matchedSymptom) {
            const data = symptomProductMap[matchedSymptom];
            return {
                reason: data.reason,
                suggestion: data.suggestion
            };
        } else {
            // 默认响应
            return {
                reason: '根据您的描述，可能属于体质失衡的表现，具体可能与生活习惯、饮食结构或环境因素有关。',
                suggestion: '建议保持良好的生活习惯，均衡饮食，适当运动，保持心情舒畅。如有需要，可咨询专业的中医医师获取个性化的调理方案。'
            };
        }
    }
}

// 处理药食同源推荐
async function handleRecommend() {
    const need = needInput.value.trim();
    if (!need) {
        alert('请输入您的需求或症状');
        return;
    }
    
    // 显示加载动画
    recommendBtn.innerHTML = '<span class="loading"></span> 推荐中...';
    recommendBtn.disabled = true;
    
    try {
        // 调用大型语言模型API获取推荐结果
        const foods = await getFoodRecommendations(need);
        
        // 重置按钮状态
        recommendBtn.innerHTML = '获取推荐';
        recommendBtn.disabled = false;
        
        // 显示结果区域
        recommendationResult.classList.remove('hidden');
        
        // 清空食物列表
        foodList.innerHTML = '';
        
        // 显示推荐食物
        foods.forEach(food => {
            const foodItem = createFoodItem(food);
            foodList.appendChild(foodItem);
        });
        
        // 滚动到结果区域
        recommendationResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        console.error('API调用失败:', error);
        
        // 重置按钮状态
        recommendBtn.innerHTML = '获取推荐';
        recommendBtn.disabled = false;
        
        // 显示错误信息
        recommendationResult.classList.remove('hidden');
        foodList.innerHTML = '<p style="text-align: center; color: #ff0000;">无法获取推荐，请稍后再试。</p>';
        
        // 滚动到结果区域
        recommendationResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 获取药食同源推荐
async function getFoodRecommendations(need) {
    // 使用DeepSeek API获取推荐结果
    const apiKey = 'sk-9e9c5d587ffd45a68da2bfe011863837';
    const apiEndpoint = 'https://api.deepseek.com/v1/chat/completions';
    
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: '你是一个专业的中医养生顾问，根据用户的需求或症状，推荐适合的药食同源食材。请提供3种食材，每种食材包括名称和功效说明。请注意，你不是医生，不能提供医疗诊断，只能提供养生调理建议。请按照"1. [食材名称]：[功效说明]\n2. [食材名称]：[功效说明]\n3. [食材名称]：[功效说明]"的格式返回结果。'
                    },
                    {
                        role: 'user',
                        content: `请根据以下需求推荐药食同源食材：${need}`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });
        
        if (!response.ok) {
            throw new Error(`API调用失败：${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const result = data.choices[0].message.content;
        
        // 解析LLM响应
        const foodItems = [];
        const foodMatches = result.match(/\d+\.\s*([^：]+)：([^\n]+)/g);
        
        if (foodMatches) {
            foodMatches.forEach(match => {
                const [, name, description] = match.match(/\d+\.\s*([^：]+)：([^\n]+)/);
                foodItems.push({
                    name: name.trim(),
                    image: `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(name)}%20herb%20medicine%20food&image_size=square`,
                    description: description.trim()
                });
            });
        }
        
        // 如果解析失败，使用默认推荐
        if (foodItems.length === 0) {
            return [
                {
                    name: "枸杞",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wolfberry%20goji%20berry%20herb%20medicine%20food&image_size=square",
                    description: "具有滋补肝肾、益精明目的作用，适合多种体质的人群。"
                },
                {
                    name: "山药",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20yam%20herb%20medicine%20food&image_size=square",
                    description: "具有健脾益胃、滋肾益精的作用，适合脾胃虚弱的人群。"
                },
                {
                    name: "红枣",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20dates%20jujube%20herb%20medicine%20food&image_size=square",
                    description: "具有补中益气、养血安神的作用，适合气血不足的人群。"
                }
            ];
        }
        
        return foodItems;
    } catch (error) {
        console.error('DeepSeek API调用失败:', error);
        
        // 备用方案：使用本地症状库
        let matchedFoods = [];
        for (const key in symptomProductMap) {
            if (need.includes(key)) {
                matchedFoods = symptomProductMap[key].foods;
                break;
            }
        }
        
        if (matchedFoods.length > 0) {
            return matchedFoods;
        } else {
            // 默认推荐
            return [
                {
                    name: "枸杞",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wolfberry%20goji%20berry%20herb%20medicine%20food&image_size=square",
                    description: "具有滋补肝肾、益精明目的作用，适合多种体质的人群。"
                },
                {
                    name: "山药",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20yam%20herb%20medicine%20food&image_size=square",
                    description: "具有健脾益胃、滋肾益精的作用，适合脾胃虚弱的人群。"
                },
                {
                    name: "红枣",
                    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20dates%20jujube%20herb%20medicine%20food&image_size=square",
                    description: "具有补中益气、养血安神的作用，适合气血不足的人群。"
                }
            ];
        }
    }
}

// 创建食物项元素
function createFoodItem(food) {
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <h4>${food.name}</h4>
        <p>${food.description}</p>
        <a href="https://v.douyin.com/UdRJcrT96Uo/" target="_blank" class="buy-link">去购买</a>
    `;
    return foodItem;
}

// 初始化养生知识文章
function initHealthArticles() {
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card, index) => {
        if (healthArticles[index]) {
            const article = healthArticles[index];
            const imgElement = card.querySelector('img');
            const titleElement = card.querySelector('h3');
            const contentElement = card.querySelector('p');
            
            if (imgElement) imgElement.src = article.image;
            if (titleElement) titleElement.textContent = article.title;
            if (contentElement) contentElement.textContent = article.content;
        }
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 添加返回顶部按钮
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (scrollPosition > 300) {
        if (!backToTopBtn) {
            const btn = document.createElement('button');
            btn.id = 'back-to-top';
            btn.className = 'back-to-top';
            btn.innerHTML = '↑';
            btn.style.position = 'fixed';
            btn.style.bottom = '30px';
            btn.style.right = '30px';
            btn.style.width = '50px';
            btn.style.height = '50px';
            btn.style.borderRadius = '50%';
            btn.style.backgroundColor = '#3a8f8f';
            btn.style.color = '#fff';
            btn.style.border = 'none';
            btn.style.fontSize = '24px';
            btn.style.cursor = 'pointer';
            btn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            btn.style.zIndex = '999';
            btn.addEventListener('click', scrollToTop);
            document.body.appendChild(btn);
        } else {
            backToTopBtn.style.display = 'block';
        }
    } else {
        if (backToTopBtn) {
            backToTopBtn.style.display = 'none';
        }
    }
});
