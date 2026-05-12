export const categories = [
  {
    id: 'burnable',
    icon: 'Flame',
    color: '#ef6f4e',
    softColor: '#fff0e8',
    names: { ja: '可燃ごみ', zh: '可燃垃圾', en: 'Burnable Waste' },
    description: {
      ja: '紙くず、木製品、革製品など、燃やして処理できる日常ごみです。',
      zh: '纸屑、木制品、皮革制品等可焚烧处理的日常垃圾。',
      en: 'Daily waste that can be incinerated, such as paper scraps, wood, and leather goods.',
    },
  },
  {
    id: 'nonBurnable',
    icon: 'Hammer',
    color: '#64748b',
    softColor: '#eef2f7',
    names: { ja: '不燃ごみ', zh: '不可燃垃圾', en: 'Non-burnable Waste' },
    description: {
      ja: '陶器、金属、ガラス製品など、燃やせない小型のごみです。',
      zh: '陶瓷、金属、玻璃制品等不能焚烧的小型垃圾。',
      en: 'Small items that cannot be burned, including ceramics, metal, and glassware.',
    },
  },
  {
    id: 'plastic',
    icon: 'Package',
    color: '#14b8a6',
    softColor: '#e6fffb',
    names: { ja: 'プラスチック製容器包装', zh: '塑料容器包装', en: 'Plastic Containers and Packaging' },
    description: {
      ja: '商品を包んでいたプラスチック容器や包装です。汚れが強い場合は可燃ごみになることがあります。',
      zh: '商品外包装或容器类塑料。严重脏污时可能需要作为可燃垃圾处理。',
      en: 'Plastic containers and wrapping used for products. Heavily soiled items may become burnable waste.',
    },
  },
  {
    id: 'petBottle',
    icon: 'Bottle',
    color: '#0ea5e9',
    softColor: '#e8f7ff',
    names: { ja: 'ペットボトル', zh: 'PET塑料瓶', en: 'PET Bottles' },
    description: {
      ja: '飲料や調味料の PET マーク付きボトルです。キャップとラベルは外します。',
      zh: '带 PET 标识的饮料或调味料瓶。需要取下瓶盖和标签。',
      en: 'PET-marked drink and seasoning bottles. Remove caps and labels before disposal.',
    },
  },
  {
    id: 'cans',
    icon: 'CircleDot',
    color: '#f59e0b',
    softColor: '#fff7df',
    names: { ja: '缶', zh: '罐', en: 'Cans' },
    description: {
      ja: '飲料缶、食品缶、スプレー缶などです。中身を空にして出します。',
      zh: '饮料罐、食品罐、喷雾罐等。投放前需清空内容物。',
      en: 'Drink cans, food cans, spray cans, and similar items. Empty them before disposal.',
    },
  },
  {
    id: 'bottles',
    icon: 'Wine',
    color: '#8b5cf6',
    softColor: '#f3edff',
    names: { ja: 'びん', zh: '玻璃瓶', en: 'Glass Bottles' },
    description: {
      ja: '飲料、調味料、化粧品などのガラスびんです。軽くすすいで出します。',
      zh: '饮料、调味料、化妆品等玻璃瓶。请简单冲洗后投放。',
      en: 'Glass bottles for drinks, seasonings, and cosmetics. Rinse lightly before disposal.',
    },
  },
  {
    id: 'paper',
    icon: 'Newspaper',
    color: '#3b82f6',
    softColor: '#eaf2ff',
    names: { ja: '古紙・紙類', zh: '废纸类', en: 'Paper' },
    description: {
      ja: '新聞、雑誌、段ボール、紙箱など、資源として回収できる紙類です。',
      zh: '报纸、杂志、纸箱等可以作为资源回收的纸类。',
      en: 'Recyclable paper such as newspapers, magazines, cardboard, and paper boxes.',
    },
  },
  {
    id: 'textiles',
    icon: 'Shirt',
    color: '#ec4899',
    softColor: '#fff0f7',
    names: { ja: '衣類・布類', zh: '衣物布类', en: 'Clothes and Textiles' },
    description: {
      ja: '衣類、タオル、シーツなどの布製品です。濡れたものや汚れたものは別扱いになることがあります。',
      zh: '衣服、毛巾、床单等布类物品。潮湿或严重脏污时可能另行处理。',
      en: 'Clothing, towels, sheets, and other fabric items. Wet or heavily soiled items may be treated differently.',
    },
  },
  {
    id: 'oversized',
    icon: 'Sofa',
    color: '#7c3aed',
    softColor: '#f1ebff',
    names: { ja: '粗大ごみ', zh: '大件垃圾', en: 'Oversized Waste' },
    description: {
      ja: '家具や大型家電など、通常の袋に入らない大きなごみです。多くの場合、事前申し込みと処理券が必要です。',
      zh: '家具、大型家电等无法放入普通垃圾袋的大件物品。通常需要提前预约并购买处理券。',
      en: 'Large items such as furniture and larger appliances. Booking and paid disposal tickets are usually required.',
    },
  },
  {
    id: 'smallAppliances',
    icon: 'Smartphone',
    color: '#2563eb',
    softColor: '#eaf0ff',
    names: { ja: '小型家電', zh: '小型家电', en: 'Small Appliances' },
    description: {
      ja: 'ドライヤー、スマートフォン、充電器などの小型電気製品です。回収ボックスを利用できる場合があります。',
      zh: '吹风机、手机、充电器等小型电器。很多地区可使用小型家电回收箱。',
      en: 'Small electronic devices such as dryers, phones, and chargers. Collection boxes may be available.',
    },
  },
  {
    id: 'hazardous',
    icon: 'TriangleAlert',
    color: '#ef4444',
    softColor: '#fff1f1',
    names: { ja: '危険ごみ', zh: '危险垃圾', en: 'Hazardous Waste' },
    description: {
      ja: '電池、ライター、刃物、割れたガラスなど、けがや発火の危険があるごみです。',
      zh: '电池、打火机、刀具、碎玻璃等有受伤或起火风险的垃圾。',
      en: 'Items that may cause injury or fire, including batteries, lighters, blades, and broken glass.',
    },
  },
  {
    id: 'recyclable',
    icon: 'Recycle',
    color: '#22c55e',
    softColor: '#eafff0',
    names: { ja: '資源ごみ', zh: '资源垃圾', en: 'Recyclable Waste' },
    description: {
      ja: '紙、金属、びん、缶、ペットボトルなど、資源化できるごみの総称です。',
      zh: '纸、金属、玻璃瓶、罐、PET瓶等可资源化垃圾的统称。',
      en: 'A broad category for recyclable paper, metal, bottles, cans, PET bottles, and similar resources.',
    },
  },
  {
    id: 'kitchenWaste',
    icon: 'CookingPot',
    color: '#84cc16',
    softColor: '#f1ffd9',
    names: { ja: '生ごみ', zh: '厨余垃圾', en: 'Kitchen Waste' },
    description: {
      ja: '野菜くず、果物の皮、残飯などの食品由来のごみです。水気を切ることが大切です。',
      zh: '菜叶、果皮、剩饭等食品来源垃圾。投放前请尽量沥干水分。',
      en: 'Food-related waste such as vegetable scraps, fruit peels, and leftovers. Drain liquids well.',
    },
  },
  {
    id: 'special',
    icon: 'Ban',
    color: '#111827',
    softColor: '#eef0f3',
    names: { ja: '市では収集できないもの', zh: '市政府不回收的物品', en: 'Items Not Collected by City' },
    description: {
      ja: '家電リサイクル法対象品、タイヤ、バイクなど、自治体の通常回収に出せないものです。',
      zh: '家电回收法对象、轮胎、摩托车等不能作为普通市政垃圾投放的物品。',
      en: 'Items not accepted in normal municipal collection, such as home-appliance recycling law items, tires, and motorcycles.',
    },
  },
];

const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));

const guideTemplates = {
  burnable: {
    disposal: {
      ja: ({ names }) => `${names.ja}は水気や汚れを軽く落とし、自治体指定の可燃ごみ袋に入れて収集日に出します。`,
      zh: ({ names }) => `${names.zh}请尽量去除水分或明显污渍，放入当地指定的可燃垃圾袋，在可燃垃圾日投放。`,
      en: ({ names }) => `Put ${names.en.toLowerCase()} in the designated burnable-waste bag after removing excess moisture or dirt, then dispose of it on the burnable-waste day.`,
    },
    caution: {
      ja: '地域によって袋の色や収集日が異なります。生ごみは水気を切るとにおいを抑えられます。',
      zh: '垃圾袋颜色和回收日期会因自治体不同而变化。含水垃圾请沥干以减少异味。',
      en: 'Bag colors and collection days vary by municipality. Draining wet waste helps reduce odor.',
    },
  },
  nonBurnable: {
    disposal: {
      ja: ({ names }) => `${names.ja}は中身や汚れを取り除き、不燃ごみの日に出します。割れやすいものは紙で包みます。`,
      zh: ({ names }) => `${names.zh}请清空并去除明显污渍，在不可燃垃圾日投放。易碎物请用纸包好。`,
      en: ({ names }) => `Empty and clean ${names.en.toLowerCase()} as much as possible, then dispose of it on the non-burnable-waste day. Wrap fragile items in paper.`,
    },
    caution: {
      ja: '刃物や割れ物はけが防止のため紙で包み、「キケン」と書いてください。',
      zh: '刀具和易碎品请用纸包好，并标明「キケン」，避免清运人员受伤。',
      en: 'Wrap sharp or broken items in paper and label them “キケン” to prevent injuries.',
    },
  },
  plastic: {
    disposal: {
      ja: ({ names }) => `${names.ja}は中身を使い切り、軽くすすいでからプラスチック製容器包装として出します。`,
      zh: ({ names }) => `${names.zh}请清空内容物并简单冲洗后，作为塑料容器包装投放。`,
      en: ({ names }) => `Empty and lightly rinse ${names.en.toLowerCase()}, then dispose of it as plastic containers and packaging.`,
    },
    caution: {
      ja: '汚れが落ちないものは、無理に洗わず可燃ごみになる場合があります。',
      zh: '如果油污或食物残渣很难清洗，可能需要作为可燃垃圾处理。',
      en: 'If food or oil stains cannot be removed, the item may need to be treated as burnable waste.',
    },
  },
  petBottle: {
    disposal: {
      ja: ({ names }) => `${names.ja}はキャップとラベルを外し、中をすすいで軽くつぶしてからペットボトル回収に出します。`,
      zh: ({ names }) => `${names.zh}请取下瓶盖和标签，冲洗内部并轻轻压扁后，投放到 PET 塑料瓶回收。`,
      en: ({ names }) => `Remove the cap and label from ${names.en.toLowerCase()}, rinse the inside, crush it lightly, and dispose of it as a PET bottle.`,
    },
    caution: {
      ja: 'キャップとラベルはプラスチック製容器包装に分ける地域が多いです。',
      zh: '多数地区会要求瓶盖和标签作为塑料容器包装分开投放。',
      en: 'Caps and labels are often sorted as plastic containers and packaging.',
    },
  },
  cans: {
    disposal: {
      ja: ({ names }) => `${names.ja}は中身を空にし、軽くすすいで缶の回収日に出します。`,
      zh: ({ names }) => `${names.zh}请清空内容物，简单冲洗后在罐类回收日投放。`,
      en: ({ names }) => `Empty ${names.en.toLowerCase()}, rinse it lightly, and dispose of it on the can collection day.`,
    },
    caution: {
      ja: 'スプレー缶やカセットボンベは、必ず中身を使い切り、自治体の指示に従ってください。',
      zh: '喷雾罐和卡式气罐必须先用完内容物，并按照当地规则处理。',
      en: 'Spray cans and cassette gas cylinders must be emptied completely and handled according to local rules.',
    },
  },
  bottles: {
    disposal: {
      ja: ({ names }) => `${names.ja}はキャップを外し、中を軽くすすいでびんの回収日に出します。`,
      zh: ({ names }) => `${names.zh}请取下瓶盖，简单冲洗内部后在玻璃瓶回收日投放。`,
      en: ({ names }) => `Remove the cap from ${names.en.toLowerCase()}, rinse it lightly, and dispose of it on the glass-bottle collection day.`,
    },
    caution: {
      ja: '割れたびんは危険ごみや不燃ごみ扱いになる場合があります。自治体ルールを確認してください。',
      zh: '破碎玻璃瓶可能需要按危险垃圾或不可燃垃圾处理，请确认当地规则。',
      en: 'Broken bottles may be treated as hazardous or non-burnable waste. Check local rules.',
    },
  },
  paper: {
    disposal: {
      ja: ({ names }) => `${names.ja}は種類ごとにまとめ、ひもで十字にしばって古紙回収に出します。`,
      zh: ({ names }) => `${names.zh}请按种类整理，用绳子十字捆好后作为废纸类回收。`,
      en: ({ names }) => `Sort ${names.en.toLowerCase()} by type, tie it crosswise with string, and place it out for paper recycling.`,
    },
    caution: {
      ja: '雨の日は濡れないように注意してください。汚れた紙や感熱紙は可燃ごみになることがあります。',
      zh: '雨天请避免纸类被淋湿。脏纸、热敏纸等可能需要作为可燃垃圾处理。',
      en: 'Keep paper dry on rainy days. Dirty paper and thermal paper may be treated as burnable waste.',
    },
  },
  textiles: {
    disposal: {
      ja: ({ names }) => `${names.ja}は洗って乾かし、衣類・布類の回収日またはリユース回収に出します。`,
      zh: ({ names }) => `${names.zh}请清洗并晾干后，在衣物布类回收日或再利用回收点投放。`,
      en: ({ names }) => `Wash and dry ${names.en.toLowerCase()}, then use textile collection or reuse collection when available.`,
    },
    caution: {
      ja: '濡れた衣類や油で汚れた布はリサイクルできない場合があります。',
      zh: '潮湿衣物或被油污严重污染的布类可能无法回收。',
      en: 'Wet clothes or oily textiles may not be recyclable.',
    },
  },
  oversized: {
    disposal: {
      ja: ({ names }) => `${names.ja}は粗大ごみ受付に事前申し込みをし、必要な処理券を購入して指定日に出します。`,
      zh: ({ names }) => `${names.zh}通常需要提前向粗大垃圾受理中心预约，购买处理券，并在指定日期投放。`,
      en: ({ names }) => `${names.en} usually requires advance booking with the oversized-waste center, purchase of a disposal ticket, and placement on the assigned date.`,
    },
    caution: {
      ja: '粗大ごみは多くの自治体で予約制・有料です。回収場所と時間を必ず確認してください。',
      zh: '粗大垃圾在多数自治体需要预约并付费。请务必确认回收地点和投放时间。',
      en: 'Oversized waste is usually reservation-based and paid. Confirm the collection point and time carefully.',
    },
  },
  smallAppliances: {
    disposal: {
      ja: ({ names }) => `${names.ja}は小型家電回収ボックスや自治体の回収日に出せる場合があります。個人情報は消去します。`,
      zh: ({ names }) => `${names.zh}可根据当地规则投放到小型家电回收箱或指定回收日。含个人信息的设备请先清除数据。`,
      en: ({ names }) => `${names.en} may be accepted in small-appliance collection boxes or on local collection days. Delete personal data first.`,
    },
    caution: {
      ja: 'バッテリー内蔵品は発火防止のため、通常ごみに混ぜないでください。',
      zh: '内置电池的物品存在起火风险，请不要混入普通垃圾。',
      en: 'Items with built-in batteries can cause fires and should not be mixed with ordinary waste.',
    },
  },
  hazardous: {
    disposal: {
      ja: ({ names }) => `${names.ja}は危険ごみとして、指定回収日または回収ボックスを利用して出します。`,
      zh: ({ names }) => `${names.zh}请作为危险垃圾，在指定回收日或使用专用回收箱投放。`,
      en: ({ names }) => `Dispose of ${names.en.toLowerCase()} as hazardous waste on the designated day or through a collection box.`,
    },
    caution: {
      ja: '発火・けがの原因になるため、可燃ごみや資源ごみに混ぜないでください。',
      zh: '为避免起火或受伤，请不要混入可燃垃圾或资源垃圾。',
      en: 'Do not mix hazardous items with burnable or recyclable waste because they may cause fires or injuries.',
    },
  },
  recyclable: {
    disposal: {
      ja: ({ names }) => `${names.ja}は汚れを落とし、素材ごとに分けて資源ごみとして出します。`,
      zh: ({ names }) => `${names.zh}请清除明显污渍，并按材质分开作为资源垃圾投放。`,
      en: ({ names }) => `Clean ${names.en.toLowerCase()} and sort it by material before disposing of it as recyclable waste.`,
    },
    caution: {
      ja: '同じ資源ごみでも、紙・缶・びん・ペットボトルは出し方が違う場合があります。',
      zh: '即使都属于资源垃圾，纸、罐、玻璃瓶和 PET 瓶的投放方式也可能不同。',
      en: 'Even within recyclable waste, paper, cans, bottles, and PET bottles may have different disposal rules.',
    },
  },
  kitchenWaste: {
    disposal: {
      ja: ({ names }) => `${names.ja}は水気をよく切り、においが出ないように包んで可燃ごみの日に出します。`,
      zh: ({ names }) => `${names.zh}请充分沥干水分，包好以减少异味，并在可燃垃圾日投放。`,
      en: ({ names }) => `Drain ${names.en.toLowerCase()} well, wrap it to reduce odor, and dispose of it on the burnable-waste day.`,
    },
    caution: {
      ja: '水分が多いとにおいや袋破れの原因になります。汁は流してから捨てましょう。',
      zh: '水分过多容易产生异味或导致垃圾袋破裂。请先倒掉汤汁。',
      en: 'Too much liquid causes odors and bag leaks. Drain liquids before disposal.',
    },
  },
  special: {
    disposal: {
      ja: ({ names }) => `${names.ja}は市の通常収集に出せません。販売店、メーカー、専門業者、自治体窓口に相談してください。`,
      zh: ({ names }) => `${names.zh}不能作为普通市政垃圾投放。请联系销售店、制造商、专业回收业者或自治体窗口。`,
      en: ({ names }) => `${names.en} is not collected as ordinary city waste. Contact the retailer, manufacturer, licensed collector, or municipal office.`,
    },
    caution: {
      ja: '家電リサイクル法対象品や処理困難物は、リサイクル料金や運搬料金が必要になることがあります。',
      zh: '家电回收法对象和处理困难物通常需要支付回收费用或搬运费用。',
      en: 'Home-appliance recycling law items and difficult-to-process items may require recycling and transportation fees.',
    },
  },
};

const defaultFlags = {
  oversized: { needReservation: true, needFee: true },
  special: { needReservation: true, needFee: true },
};

const sprayCanOverride = {
  disposal: {
    ja: 'スプレー缶は必ず中身を使い切り、火気のない風通しの良い場所で自治体の指示に従って出します。',
    zh: '喷雾罐必须先用完内容物，在远离火源且通风良好的地方按当地规则处理。',
    en: 'Use up all contents of the spray can, then follow local rules in a well-ventilated place away from fire.',
  },
  caution: {
    ja: '室内で穴を開けないでください。穴開けが必要かどうかは自治体によって異なります。',
    zh: '不要在室内打孔。是否需要打孔取决于当地自治体规则。',
    en: 'Do not pierce it indoors. Whether piercing is required depends on the municipality.',
  },
  japanesePhrase: 'スプレー缶は中身を使い切ってから出します。',
};

const brokenGlassOverride = {
  disposal: {
    ja: '割れたガラスは厚紙や新聞紙で包み、袋や紙に「キケン」と書いて危険ごみとして出します。',
    zh: '碎玻璃请用厚纸或报纸包好，并在袋子或纸上写「キケン」，作为危险垃圾投放。',
    en: 'Wrap broken glass in thick paper or newspaper, write “キケン” on the bag or paper, and dispose of it as hazardous waste.',
  },
  caution: {
    ja: 'そのまま袋に入れると収集員がけがをする恐れがあります。必ず包んで表示してください。',
    zh: '直接放入袋中可能导致清运人员受伤，请务必包好并标注危险。',
    en: 'Loose broken glass can injure collection workers. Always wrap and label it clearly.',
  },
  japanesePhrase: '割れたガラスなので、紙で包んで「キケン」と書きます。',
};

const mobileBatteryOverride = {
  disposal: {
    ja: 'モバイルバッテリーは普通ごみに出さず、家電量販店や自治体の回収ボックスを利用します。',
    zh: '移动电源不要丢进普通垃圾，请使用家电量贩店或自治体设置的回收箱。',
    en: 'Do not throw a mobile battery into ordinary waste. Use collection boxes at electronics stores or municipal facilities.',
  },
  caution: {
    ja: 'リチウムイオン電池は発火の危険があります。端子をテープで絶縁するとより安全です。',
    zh: '锂离子电池有起火风险。用胶带包住端子会更安全。',
    en: 'Lithium-ion batteries can catch fire. Taping the terminals is safer.',
  },
  japanesePhrase: 'モバイルバッテリーは回収ボックスに入れます。',
};

const lighterOverride = {
  disposal: {
    ja: 'ライターはガスを使い切り、自治体の危険ごみルールに従って出します。',
    zh: '打火机请先用完气体，并按照当地危险垃圾规则投放。',
    en: 'Use up the gas in the lighter, then dispose of it according to local hazardous-waste rules.',
  },
  caution: {
    ja: 'ガスが残っていると発火の危険があります。火の近くで作業しないでください。',
    zh: '如果残留气体，可能有起火风险。不要在火源附近处理。',
    en: 'Remaining gas may cause fire. Do not handle it near flames.',
  },
  japanesePhrase: 'ライターはガスを抜いて危険ごみに出します。',
};

const homeApplianceLawOverride = {
  disposal: {
    ja: '家電リサイクル法の対象品です。通常のごみには出せないため、購入店、買い替え店、指定引取場所、自治体窓口に相談します。',
    zh: '这是家电回收法对象，不能作为普通垃圾丢弃。请联系购买店、换购店、指定取回场所或自治体窗口。',
    en: 'This is covered by the Home Appliance Recycling Law and cannot be put out as ordinary waste. Contact the retailer, replacement store, designated collection site, or municipal office.',
  },
  caution: {
    ja: 'リサイクル料金と運搬料金が必要になることがあります。無断投棄は絶対にしないでください。',
    zh: '可能需要支付回收费用和搬运费用。绝对不要非法丢弃。',
    en: 'Recycling and transportation fees may apply. Never dump it illegally.',
  },
  japanesePhrase: '家電リサイクル法の対象なので、販売店に相談します。',
};

const e = (id, categoryId, icon, names, keywords = [], overrides = {}) => ({
  id,
  categoryId,
  icon,
  names,
  keywords,
  ...overrides,
});

const rawWasteItems = [
  e('burnable-paper-scraps', 'burnable', 'FileText', { ja: '紙くず', zh: '纸屑', en: 'Paper scraps' }, ['紙', '纸', 'scrap paper']),
  e('burnable-tissues', 'burnable', 'ScrollText', { ja: 'ティッシュ', zh: '纸巾', en: 'Tissues' }, ['ティッシュペーパー', '面纸', 'tissue paper']),
  e('burnable-disposable-chopsticks', 'burnable', 'Utensils', { ja: '割り箸', zh: '一次性筷子', en: 'Disposable chopsticks' }, ['箸', '筷子', 'wooden chopsticks']),
  e('burnable-wood-chips', 'burnable', 'TreePine', { ja: '木くず', zh: '木屑', en: 'Wood scraps' }, ['木片', '木头碎片', 'wood pieces']),
  e('burnable-leather-shoes', 'burnable', 'Footprints', { ja: '革靴', zh: '皮鞋', en: 'Leather shoes' }, ['靴', '鞋', 'leather footwear']),
  e('burnable-leather-bag', 'burnable', 'Briefcase', { ja: '革製バッグ', zh: '皮包', en: 'Leather bag' }, ['革製品', '皮革制品', 'leather goods']),
  e('burnable-rubber-gloves', 'burnable', 'Hand', { ja: 'ゴム手袋', zh: '橡胶手套', en: 'Rubber gloves' }, ['手袋', '手套', 'gloves']),
  e('burnable-paper-diaper', 'burnable', 'Baby', { ja: '紙おむつ', zh: '纸尿裤', en: 'Paper diapers' }, ['おむつ', '尿布', 'diaper'], {
    disposal: {
      ja: '紙おむつは汚物をトイレに流してから、小さく包んで可燃ごみに出します。',
      zh: '纸尿裤请先将污物倒入厕所，再包好作为可燃垃圾投放。',
      en: 'Remove solid waste into the toilet first, then wrap paper diapers and dispose of them as burnable waste.',
    },
    caution: {
      ja: 'におい対策のため、袋の口をしっかり閉じてください。',
      zh: '为减少异味，请把袋口扎紧。',
      en: 'Seal the bag tightly to reduce odor.',
    },
  }),
  e('burnable-desiccant', 'burnable', 'BadgeAlert', { ja: '乾燥剤', zh: '干燥剂', en: 'Desiccant packets' }, ['シリカゲル', '干燥包', 'silica gel']),
  e('burnable-ice-pack', 'burnable', 'Snowflake', { ja: '保冷剤', zh: '保冷剂', en: 'Ice packs' }, ['保冷パック', '冰袋', 'gel ice pack']),

  e('nonburnable-ceramic-bowl', 'nonBurnable', 'Circle', { ja: '陶器の茶碗', zh: '陶瓷碗', en: 'Ceramic bowl' }, ['陶器', '瓷器', 'ceramics']),
  e('nonburnable-glass-cup', 'nonBurnable', 'GlassWater', { ja: 'ガラスコップ', zh: '玻璃杯', en: 'Glass cup' }, ['コップ', '杯子', 'drinking glass']),
  e('nonburnable-metal-item', 'nonBurnable', 'Wrench', { ja: '金属製品', zh: '金属制品', en: 'Metal item' }, ['金属', '金属用品', 'metal goods']),
  e('nonburnable-frying-pan', 'nonBurnable', 'CookingPot', { ja: 'フライパン', zh: '平底锅', en: 'Frying pan' }, ['鍋', '锅', 'pan']),
  e('nonburnable-pot', 'nonBurnable', 'Soup', { ja: '鍋', zh: '锅', en: 'Cooking pot' }, ['なべ', '汤锅', 'pot']),
  e('nonburnable-umbrella', 'nonBurnable', 'Umbrella', { ja: '傘', zh: '雨伞', en: 'Umbrella' }, ['かさ', '伞', 'parasol']),
  e('nonburnable-small-tool', 'nonBurnable', 'Hammer', { ja: '小型工具', zh: '小型工具', en: 'Small tools' }, ['ドライバー', '螺丝刀', 'screwdriver']),
  e('nonburnable-aluminum-foil', 'nonBurnable', 'PanelTop', { ja: 'アルミホイル', zh: '铝箔', en: 'Aluminum foil' }, ['ホイル', '锡纸', 'foil']),
  e('nonburnable-mirror', 'nonBurnable', 'ScanFace', { ja: '鏡', zh: '镜子', en: 'Mirror' }, ['ミラー', '镜', 'mirror glass']),
  e('nonburnable-light-bulb', 'nonBurnable', 'Lightbulb', { ja: '電球', zh: '灯泡', en: 'Light bulb' }, ['白熱電球', '电灯泡', 'bulb']),

  e('plastic-food-tray', 'plastic', 'PackageOpen', { ja: '食品トレー', zh: '食品托盘', en: 'Food tray' }, ['トレー', '生鲜托盘', 'meat tray']),
  e('plastic-instant-noodle-cup', 'plastic', 'CupSoda', { ja: 'カップ麺容器', zh: '泡面杯', en: 'Instant noodle cup' }, ['カップラーメン', '方便面杯', 'cup noodles']),
  e('plastic-pudding-cup', 'plastic', 'Dessert', { ja: 'プリンカップ', zh: '布丁杯', en: 'Pudding cup' }, ['デザートカップ', '甜品杯', 'dessert cup']),
  e('plastic-shopping-bag', 'plastic', 'ShoppingBag', { ja: 'レジ袋', zh: '购物袋', en: 'Plastic shopping bag' }, ['ビニール袋', '塑料袋', 'carrier bag']),
  e('plastic-wrapping-film', 'plastic', 'Layers', { ja: '包装フィルム', zh: '包装膜', en: 'Wrapping film' }, ['フィルム', '塑料膜', 'plastic wrap']),
  e('plastic-detergent-bottle', 'plastic', 'Bottle', { ja: '洗剤ボトル', zh: '洗涤剂瓶', en: 'Detergent bottle' }, ['洗剤容器', '洗衣液瓶', 'laundry bottle']),
  e('plastic-shampoo-bottle', 'plastic', 'Bottle', { ja: 'シャンプーボトル', zh: '洗发水瓶', en: 'Shampoo bottle' }, ['シャンプー容器', '洗发液瓶', 'shampoo container']),
  e('plastic-styrofoam', 'plastic', 'Box', { ja: '発泡スチロール', zh: '泡沫塑料', en: 'Styrofoam' }, ['発泡材', '泡沫箱', 'foam packaging']),
  e('plastic-egg-pack', 'plastic', 'Egg', { ja: '卵パック', zh: '鸡蛋盒', en: 'Egg carton pack' }, ['たまごパック', '鸡蛋包装', 'egg pack']),
  e('plastic-snack-bag', 'plastic', 'Package', { ja: 'お菓子の袋', zh: '零食包装袋', en: 'Snack bag' }, ['菓子袋', '薯片袋', 'chip bag']),

  e('pet-drink-bottle', 'petBottle', 'Bottle', { ja: '飲料用ペットボトル', zh: '饮料PET瓶', en: 'Drink PET bottle' }, ['飲み物', '饮料瓶', 'beverage bottle']),
  e('pet-tea-bottle', 'petBottle', 'Bottle', { ja: 'お茶ボトル', zh: '茶饮料瓶', en: 'Tea bottle' }, ['緑茶', '茶瓶', 'green tea bottle']),
  e('pet-water-bottle', 'petBottle', 'Bottle', { ja: '水ボトル', zh: '矿泉水瓶', en: 'Water bottle' }, ['ミネラルウォーター', '水瓶', 'mineral water']),
  e('pet-carbonated-bottle', 'petBottle', 'Bottle', { ja: '炭酸飲料ボトル', zh: '碳酸饮料瓶', en: 'Carbonated drink bottle' }, ['ソーダ', '汽水瓶', 'soda bottle']),
  e('pet-soy-sauce-bottle', 'petBottle', 'Bottle', { ja: 'しょうゆボトル', zh: '酱油PET瓶', en: 'Soy sauce PET bottle' }, ['醤油', '酱油瓶', 'soy sauce']),
  e('pet-mirin-bottle', 'petBottle', 'Bottle', { ja: 'みりんボトル', zh: '味醂瓶', en: 'Mirin bottle' }, ['調味料', '调味料瓶', 'seasoning bottle']),
  e('pet-sports-drink-bottle', 'petBottle', 'Bottle', { ja: 'スポーツドリンクボトル', zh: '运动饮料瓶', en: 'Sports drink bottle' }, ['スポドリ', '运动饮料', 'sports drink']),
  e('pet-coffee-bottle', 'petBottle', 'Bottle', { ja: 'コーヒーペットボトル', zh: '咖啡PET瓶', en: 'Coffee PET bottle' }, ['ボトルコーヒー', '咖啡瓶', 'bottled coffee']),
  e('pet-juice-bottle', 'petBottle', 'Bottle', { ja: 'ジュースボトル', zh: '果汁瓶', en: 'Juice bottle' }, ['果汁', '果汁PET瓶', 'fruit juice bottle']),

  e('can-aluminum', 'cans', 'CircleDot', { ja: 'アルミ缶', zh: '铝罐', en: 'Aluminum can' }, ['ビール缶', '易拉罐', 'beer can']),
  e('can-steel', 'cans', 'CircleDot', { ja: 'スチール缶', zh: '钢罐', en: 'Steel can' }, ['缶コーヒー', '铁罐', 'steel tin']),
  e('can-food', 'cans', 'CircleDot', { ja: '缶詰', zh: '罐头', en: 'Canned food can' }, ['ツナ缶', '食品罐', 'tin can']),
  e('can-spray', 'cans', 'SprayCan', { ja: 'スプレー缶', zh: '喷雾罐', en: 'Spray can' }, ['ヘアスプレー', '喷罐', 'aerosol can'], sprayCanOverride),
  e('can-cassette-gas', 'cans', 'FlameKindling', { ja: 'カセットボンベ', zh: '卡式气罐', en: 'Cassette gas cylinder' }, ['ガスボンベ', '瓦斯罐', 'gas canister'], sprayCanOverride),
  e('can-snack', 'cans', 'CircleDot', { ja: 'お菓子の缶', zh: '点心铁罐', en: 'Snack tin' }, ['クッキー缶', '饼干罐', 'cookie tin']),
  e('can-tea', 'cans', 'CircleDot', { ja: 'お茶の缶', zh: '茶叶罐', en: 'Tea can' }, ['茶筒', '茶罐', 'tea tin']),
  e('can-pet-food', 'cans', 'CircleDot', { ja: 'ペットフード缶', zh: '宠物食品罐', en: 'Pet food can' }, ['猫缶', '猫罐头', 'cat food can']),
  e('can-empty-paint', 'cans', 'PaintBucket', { ja: '空の塗料缶', zh: '空油漆罐', en: 'Empty paint can' }, ['ペンキ缶', '油漆桶', 'paint tin'], {
    caution: {
      ja: '塗料が残っている場合は通常の缶回収に出せないことがあります。完全に使い切ってください。',
      zh: '如果油漆仍有残留，可能不能作为普通罐类回收。请彻底用完。',
      en: 'If paint remains, it may not be accepted as an ordinary can. Use it up completely first.',
    },
  }),

  e('bottle-drink', 'bottles', 'Wine', { ja: '飲料びん', zh: '饮料玻璃瓶', en: 'Drink bottle' }, ['ジュースびん', '饮料瓶', 'beverage glass bottle']),
  e('bottle-seasoning', 'bottles', 'Wine', { ja: '調味料びん', zh: '调味料瓶', en: 'Seasoning bottle' }, ['ソース瓶', '酱料瓶', 'sauce bottle']),
  e('bottle-cosmetic', 'bottles', 'Sparkles', { ja: '化粧品びん', zh: '化妆品玻璃瓶', en: 'Cosmetic bottle' }, ['香水瓶', '香水瓶', 'perfume bottle']),
  e('bottle-jam', 'bottles', 'Wine', { ja: 'ジャム瓶', zh: '果酱瓶', en: 'Jam jar' }, ['ジャムびん', '果酱罐', 'jam glass jar']),
  e('bottle-sake', 'bottles', 'Wine', { ja: '酒瓶', zh: '酒瓶', en: 'Sake bottle' }, ['日本酒', '清酒瓶', 'sake glass bottle']),
  e('bottle-wine', 'bottles', 'Wine', { ja: 'ワインボトル', zh: '葡萄酒瓶', en: 'Wine bottle' }, ['ワイン瓶', '红酒瓶', 'wine glass bottle']),
  e('bottle-medicine', 'bottles', 'Pill', { ja: '薬のびん', zh: '药品玻璃瓶', en: 'Medicine bottle' }, ['薬瓶', '药瓶', 'medicine jar']),
  e('bottle-vinegar', 'bottles', 'Wine', { ja: '酢のびん', zh: '醋瓶', en: 'Vinegar bottle' }, ['お酢', '食醋瓶', 'vinegar glass bottle']),
  e('bottle-olive-oil', 'bottles', 'Wine', { ja: 'オリーブオイル瓶', zh: '橄榄油瓶', en: 'Olive oil bottle' }, ['油瓶', '食用油瓶', 'oil bottle']),

  e('paper-newspaper', 'paper', 'Newspaper', { ja: '新聞', zh: '报纸', en: 'Newspapers' }, ['新聞紙', '新聞', 'newsprint']),
  e('paper-magazine', 'paper', 'BookOpen', { ja: '雑誌', zh: '杂志', en: 'Magazines' }, ['本', '刊物', 'magazine']),
  e('paper-cardboard', 'paper', 'Boxes', { ja: '段ボール', zh: '纸箱', en: 'Cardboard' }, ['ダンボール', '瓦楞纸箱', 'cardboard box']),
  e('paper-paper-box', 'paper', 'Package', { ja: '紙箱', zh: '纸盒', en: 'Paper box' }, ['お菓子箱', '包装纸盒', 'paper packaging']),
  e('paper-milk-carton', 'paper', 'Milk', { ja: '牛乳パック', zh: '牛奶盒', en: 'Milk carton' }, ['紙パック', '纸盒饮料', 'paper carton'], {
    disposal: {
      ja: '牛乳パックは洗って開き、乾かしてから紙パック回収に出します。',
      zh: '牛奶盒请洗净、剪开并晾干后，投放到纸盒回收。',
      en: 'Rinse milk cartons, cut them open, dry them, and place them in carton recycling.',
    },
  }),
  e('paper-copy-paper', 'paper', 'FileText', { ja: 'コピー用紙', zh: '复印纸', en: 'Copy paper' }, ['プリント', '打印纸', 'printer paper']),
  e('paper-envelope', 'paper', 'Mail', { ja: '封筒', zh: '信封', en: 'Envelopes' }, ['手紙', '信件', 'mail envelope']),
  e('paper-flyer', 'paper', 'ScrollText', { ja: 'チラシ', zh: '传单', en: 'Flyers' }, ['広告', '广告传单', 'leaflet']),
  e('paper-paperback-book', 'paper', 'Book', { ja: '文庫本', zh: '文库本', en: 'Paperback book' }, ['本', '书', 'book']),
  e('paper-paper-bag', 'paper', 'ShoppingBag', { ja: '紙袋', zh: '纸袋', en: 'Paper bag' }, ['ショップ袋', '购物纸袋', 'shopping paper bag']),

  e('textile-tshirt', 'textiles', 'Shirt', { ja: 'Tシャツ', zh: 'T恤', en: 'T-shirt' }, ['シャツ', '短袖', 'tee']),
  e('textile-pants', 'textiles', 'Shirt', { ja: 'ズボン', zh: '裤子', en: 'Pants' }, ['パンツ', '长裤', 'trousers']),
  e('textile-coat', 'textiles', 'Shirt', { ja: 'コート', zh: '外套', en: 'Coat' }, ['上着', '大衣', 'jacket']),
  e('textile-towel', 'textiles', 'Shirt', { ja: 'タオル', zh: '毛巾', en: 'Towel' }, ['バスタオル', '浴巾', 'bath towel']),
  e('textile-sheets', 'textiles', 'Bed', { ja: 'シーツ', zh: '床单', en: 'Bed sheets' }, ['寝具', '床品', 'sheet']),
  e('textile-curtain', 'textiles', 'PanelTop', { ja: 'カーテン', zh: '窗帘', en: 'Curtain' }, ['レースカーテン', '窗帘布', 'curtains']),
  e('textile-blanket', 'textiles', 'Bed', { ja: '毛布', zh: '毯子', en: 'Blanket' }, ['ブランケット', '毛毯', 'throw blanket']),
  e('textile-plush-toy', 'textiles', 'Heart', { ja: 'ぬいぐるみ', zh: '毛绒玩具', en: 'Plush toy' }, ['人形', '玩偶', 'stuffed toy']),
  e('textile-socks', 'textiles', 'Shirt', { ja: '靴下', zh: '袜子', en: 'Socks' }, ['ソックス', '短袜', 'stockings']),

  e('oversized-chair', 'oversized', 'Armchair', { ja: '椅子', zh: '椅子', en: 'Chair' }, ['イス', '座椅', 'seat']),
  e('oversized-desk', 'oversized', 'Table2', { ja: '机', zh: '书桌', en: 'Desk' }, ['デスク', '桌子', 'table']),
  e('oversized-bookshelf', 'oversized', 'BookOpen', { ja: '本棚', zh: '书架', en: 'Bookshelf' }, ['棚', '书柜', 'bookcase']),
  e('oversized-bed-frame', 'oversized', 'Bed', { ja: 'ベッド', zh: '床架', en: 'Bed frame' }, ['ベッドフレーム', '床', 'bed']),
  e('oversized-mattress', 'oversized', 'BedDouble', { ja: 'マットレス', zh: '床垫', en: 'Mattress' }, ['寝具', '床垫子', 'bed mattress']),
  e('oversized-bicycle', 'oversized', 'Bike', { ja: '自転車', zh: '自行车', en: 'Bicycle' }, ['チャリ', '单车', 'bike']),
  e('oversized-carpet', 'oversized', 'PanelTop', { ja: 'カーペット', zh: '地毯', en: 'Carpet' }, ['ラグ', '毯子', 'rug']),
  e('oversized-sofa', 'oversized', 'Sofa', { ja: 'ソファ', zh: '沙发', en: 'Sofa' }, ['ソファー', '沙发椅', 'couch']),
  e('oversized-microwave', 'oversized', 'Microwave', { ja: '電子レンジ', zh: '微波炉', en: 'Microwave oven' }, ['レンジ', '微波炉', 'microwave']),
  e('oversized-fan', 'oversized', 'Fan', { ja: '扇風機', zh: '电风扇', en: 'Electric fan' }, ['ファン', '风扇', 'fan']),

  e('appliance-hair-dryer', 'smallAppliances', 'Wind', { ja: 'ドライヤー', zh: '吹风机', en: 'Hair dryer' }, ['ヘアドライヤー', '电吹风', 'dryer']),
  e('appliance-electric-kettle', 'smallAppliances', 'Coffee', { ja: '電気ケトル', zh: '电热水壶', en: 'Electric kettle' }, ['ケトル', '烧水壶', 'kettle']),
  e('appliance-rice-cooker', 'smallAppliances', 'CookingPot', { ja: '炊飯器', zh: '电饭锅', en: 'Rice cooker' }, ['炊飯ジャー', '电饭煲', 'rice cooker']),
  e('appliance-game-console', 'smallAppliances', 'Gamepad2', { ja: 'ゲーム機', zh: '游戏机', en: 'Game console' }, ['Switch', '游戏主机', 'console']),
  e('appliance-smartphone', 'smallAppliances', 'Smartphone', { ja: 'スマートフォン', zh: '智能手机', en: 'Smartphone' }, ['スマホ', '手机', 'phone']),
  e('appliance-charger', 'smallAppliances', 'PlugZap', { ja: '充電器', zh: '充电器', en: 'Charger' }, ['ACアダプター', '电源适配器', 'adapter']),
  e('appliance-earphones', 'smallAppliances', 'Headphones', { ja: 'イヤホン', zh: '耳机', en: 'Earphones' }, ['ヘッドホン', '入耳耳机', 'headphones']),
  e('appliance-keyboard', 'smallAppliances', 'Keyboard', { ja: 'キーボード', zh: '键盘', en: 'Keyboard' }, ['PCキーボード', '电脑键盘', 'computer keyboard']),
  e('appliance-mouse', 'smallAppliances', 'MousePointer2', { ja: 'マウス', zh: '鼠标', en: 'Computer mouse' }, ['PCマウス', '电脑鼠标', 'mouse']),
  e('appliance-shaver', 'smallAppliances', 'Zap', { ja: '電気シェーバー', zh: '电动剃须刀', en: 'Electric shaver' }, ['ひげそり', '剃须刀', 'razor']),

  e('hazard-dry-battery', 'hazardous', 'Battery', { ja: '乾電池', zh: '干电池', en: 'Dry cell batteries' }, ['単三電池', '电池', 'AA battery']),
  e('hazard-button-battery', 'hazardous', 'Battery', { ja: 'ボタン電池', zh: '纽扣电池', en: 'Button batteries' }, ['コイン電池', '扣式电池', 'coin battery']),
  e('hazard-mobile-battery', 'hazardous', 'BatteryCharging', { ja: 'モバイルバッテリー', zh: '移动电源', en: 'Mobile battery' }, ['充電池', '充电宝', 'power bank'], mobileBatteryOverride),
  e('hazard-lighter', 'hazardous', 'Flame', { ja: 'ライター', zh: '打火机', en: 'Lighter' }, ['使い捨てライター', '火机', 'disposable lighter'], lighterOverride),
  e('hazard-fluorescent-lamp', 'hazardous', 'Lightbulb', { ja: '蛍光灯', zh: '荧光灯', en: 'Fluorescent lamp' }, ['蛍光管', '日光灯', 'fluorescent tube']),
  e('hazard-mercury-thermometer', 'hazardous', 'Thermometer', { ja: '水銀体温計', zh: '水银体温计', en: 'Mercury thermometer' }, ['体温計', '温度计', 'mercury thermometer']),
  e('hazard-knife', 'hazardous', 'UtilityKnife', { ja: '刃物', zh: '刀具', en: 'Blades and knives' }, ['包丁', '菜刀', 'knife']),
  e('hazard-broken-glass', 'hazardous', 'TriangleAlert', { ja: '割れたガラス', zh: '碎玻璃', en: 'Broken glass' }, ['破片', '玻璃碎片', 'glass shards'], brokenGlassOverride),
  e('hazard-needle', 'hazardous', 'Syringe', { ja: '針', zh: '针', en: 'Needles' }, ['縫い針', '针头', 'sewing needle'], {
    caution: {
      ja: '針は硬い容器に入れ、飛び出さないようにしてから危険ごみに出します。医療用は薬局や医療機関に相談してください。',
      zh: '针请放入坚硬容器中，避免刺出后作为危险垃圾处理。医疗用针请咨询药店或医疗机构。',
      en: 'Place needles in a hard container before hazardous-waste disposal. For medical needles, consult a pharmacy or medical institution.',
    },
  }),
  e('hazard-nail-polish-remover', 'hazardous', 'Droplets', { ja: '除光液', zh: '卸甲水', en: 'Nail polish remover' }, ['アセトン', '去光水', 'acetone'], {
    caution: {
      ja: '引火性があります。中身が残っている場合は排水口に流さず、自治体の案内を確認してください。',
      zh: '具有易燃性。如有残留，请不要倒入下水道，先确认当地处理方法。',
      en: 'It is flammable. If liquid remains, do not pour it down the drain; check municipal guidance.',
    },
  }),

  e('recyclable-clean-paper', 'recyclable', 'FileText', { ja: '資源化できる紙', zh: '可回收纸类', en: 'Recyclable paper' }, ['紙資源', '废纸', 'paper recycling']),
  e('recyclable-metal-lid', 'recyclable', 'CircleDot', { ja: '金属のふた', zh: '金属盖', en: 'Metal lids' }, ['キャップ', '金属瓶盖', 'metal cap']),
  e('recyclable-clean-bottle', 'recyclable', 'Wine', { ja: 'きれいなびん', zh: '干净玻璃瓶', en: 'Clean glass bottle' }, ['びん資源', '玻璃瓶回收', 'recycling bottle']),
  e('recyclable-clean-can', 'recyclable', 'CircleDot', { ja: 'きれいな缶', zh: '干净罐', en: 'Clean can' }, ['缶資源', '罐回收', 'recycling can']),
  e('recyclable-pet-bottle', 'recyclable', 'Bottle', { ja: '資源用ペットボトル', zh: '资源PET瓶', en: 'Recyclable PET bottle' }, ['PET', '塑料瓶回收', 'pet recycling']),
  e('recyclable-cardboard', 'recyclable', 'Boxes', { ja: '資源用段ボール', zh: '可回收纸箱', en: 'Recyclable cardboard' }, ['段ボール資源', '纸箱回收', 'cardboard recycling']),
  e('recyclable-milk-carton', 'recyclable', 'Milk', { ja: '紙パック', zh: '纸盒包装', en: 'Paper cartons' }, ['牛乳パック', '牛奶盒', 'carton recycling']),
  e('recyclable-newspaper-bundle', 'recyclable', 'Newspaper', { ja: '新聞束', zh: '捆好的报纸', en: 'Newspaper bundle' }, ['古新聞', '旧报纸', 'bundled newspaper']),
  e('recyclable-plastic-caps', 'recyclable', 'CircleDot', { ja: 'ペットボトルキャップ', zh: 'PET瓶盖', en: 'PET bottle caps' }, ['キャップ', '塑料瓶盖', 'bottle caps']),

  e('kitchen-vegetable-scraps', 'kitchenWaste', 'Carrot', { ja: '野菜くず', zh: '菜叶菜皮', en: 'Vegetable scraps' }, ['野菜の皮', '蔬菜废料', 'vegetable peels']),
  e('kitchen-fruit-peels', 'kitchenWaste', 'Apple', { ja: '果物の皮', zh: '果皮', en: 'Fruit peels' }, ['バナナの皮', '水果皮', 'banana peel']),
  e('kitchen-fish-bones', 'kitchenWaste', 'Fish', { ja: '魚の骨', zh: '鱼骨', en: 'Fish bones' }, ['魚ごみ', '鱼刺', 'fish waste']),
  e('kitchen-eggshells', 'kitchenWaste', 'Egg', { ja: '卵の殻', zh: '蛋壳', en: 'Eggshells' }, ['たまごの殻', '鸡蛋壳', 'egg shells']),
  e('kitchen-tea-leaves', 'kitchenWaste', 'Leaf', { ja: '茶葉', zh: '茶叶渣', en: 'Tea leaves' }, ['お茶がら', '茶渣', 'used tea leaves']),
  e('kitchen-coffee-grounds', 'kitchenWaste', 'Coffee', { ja: 'コーヒーかす', zh: '咖啡渣', en: 'Coffee grounds' }, ['珈琲かす', '咖啡粉渣', 'used coffee']),
  e('kitchen-leftovers', 'kitchenWaste', 'Utensils', { ja: '残飯', zh: '剩饭剩菜', en: 'Leftovers' }, ['食べ残し', '剩菜', 'food leftovers']),
  e('kitchen-cooked-rice', 'kitchenWaste', 'Bowl', { ja: 'ご飯', zh: '米饭', en: 'Cooked rice' }, ['白米', '剩米饭', 'rice']),
  e('kitchen-shellfish-shells', 'kitchenWaste', 'Shell', { ja: '貝殻', zh: '贝壳', en: 'Shellfish shells' }, ['しじみ殻', '贝类外壳', 'clam shells']),
  e('kitchen-meat-bones', 'kitchenWaste', 'Drumstick', { ja: '肉の骨', zh: '肉骨头', en: 'Meat bones' }, ['鶏の骨', '鸡骨', 'chicken bones']),

  e('special-television', 'special', 'Tv', { ja: 'テレビ', zh: '电视机', en: 'Television' }, ['TV', '电视', 'TV set'], homeApplianceLawOverride),
  e('special-refrigerator', 'special', 'Refrigerator', { ja: '冷蔵庫', zh: '冰箱', en: 'Refrigerator' }, ['冷凍庫', '电冰箱', 'fridge'], homeApplianceLawOverride),
  e('special-washing-machine', 'special', 'WashingMachine', { ja: '洗濯機', zh: '洗衣机', en: 'Washing machine' }, ['洗濯乾燥機', '洗衣干衣机', 'washer'], homeApplianceLawOverride),
  e('special-air-conditioner', 'special', 'AirVent', { ja: 'エアコン', zh: '空调', en: 'Air conditioner' }, ['空調', '冷气', 'AC'], homeApplianceLawOverride),
  e('special-computer', 'special', 'Laptop', { ja: 'パソコン', zh: '电脑', en: 'Computer' }, ['PC', '笔记本电脑', 'desktop computer'], {
    disposal: {
      ja: 'パソコンは通常ごみに出せません。メーカー回収、認定回収業者、小型家電回収などを確認してください。',
      zh: '电脑不能作为普通垃圾投放。请确认制造商回收、认证回收业者或小型家电回收方式。',
      en: 'Computers cannot be disposed of as ordinary waste. Check manufacturer collection, certified recyclers, or small-appliance collection options.',
    },
    caution: {
      ja: '個人情報を必ず消去してください。バッテリー内蔵品は発火にも注意が必要です。',
      zh: '请务必清除个人信息。内置电池的电脑还需注意起火风险。',
      en: 'Delete personal data first. Devices with built-in batteries also require fire-risk care.',
    },
    japanesePhrase: 'パソコンはメーカー回収を確認します。',
  }),
  e('special-tire', 'special', 'Circle', { ja: 'タイヤ', zh: '轮胎', en: 'Tire' }, ['車のタイヤ', '汽车轮胎', 'car tire']),
  e('special-motorcycle', 'special', 'Bike', { ja: 'バイク', zh: '摩托车', en: 'Motorcycle' }, ['原付', '机车', 'scooter']),
  e('special-fire-extinguisher', 'special', 'FireExtinguisher', { ja: '消火器', zh: '灭火器', en: 'Fire extinguisher' }, ['消火設備', '消防瓶', 'extinguisher'], {
    disposal: {
      ja: '消火器は市の通常収集に出せません。消火器リサイクル推進センターや販売店に相談してください。',
      zh: '灭火器不能作为普通市政垃圾投放。请咨询灭火器回收推进中心或销售店。',
      en: 'Fire extinguishers are not collected as ordinary city waste. Contact the fire extinguisher recycling center or a retailer.',
    },
  }),
  e('special-piano', 'special', 'Music', { ja: 'ピアノ', zh: '钢琴', en: 'Piano' }, ['楽器', '大型乐器', 'upright piano']),
  e('special-construction-waste', 'special', 'HardHat', { ja: '建築廃材', zh: '建筑废材', en: 'Construction waste' }, ['木材', '装修垃圾', 'renovation waste']),
];

const localize = (template, entry) =>
  Object.fromEntries(
    ['ja', 'zh', 'en'].map((lang) => [
      lang,
      typeof template?.[lang] === 'function' ? template[lang](entry) : template?.[lang],
    ])
  );

const unique = (values) => [...new Set(values.filter(Boolean))];

export const wasteItems = rawWasteItems.map((entry) => {
  const category = categoryById[entry.categoryId];
  const guide = guideTemplates[entry.categoryId];
  const flags = defaultFlags[entry.categoryId] || {};

  return {
    id: entry.id,
    icon: entry.icon || category.icon,
    names: entry.names,
    keywords: unique([
      entry.names.ja,
      entry.names.zh,
      entry.names.en,
      category.names.ja,
      category.names.zh,
      category.names.en,
      ...entry.keywords,
    ]),
    categoryId: entry.categoryId,
    disposal: localize(entry.disposal || guide.disposal, entry),
    caution: localize(entry.caution || guide.caution, entry),
    needReservation: entry.needReservation ?? flags.needReservation ?? false,
    needFee: entry.needFee ?? flags.needFee ?? false,
    japanesePhrase:
      entry.japanesePhrase ||
      `「${entry.names.ja}」は${category.names.ja}として出します。`,
  };
});

export const getCategoryById = (categoryId) => categoryById[categoryId];

export const getItemsByCategory = (categoryId) =>
  wasteItems.filter((item) => item.categoryId === categoryId);

export const categoryCounts = categories.map((category) => ({
  categoryId: category.id,
  count: getItemsByCategory(category.id).length,
}));
