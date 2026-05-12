import React, { useMemo, useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Search, Home, Recycle, BookOpen, Star, MessageSquare, BarChart3, Globe2, MapPin, Menu, X, CheckCircle2, AlertTriangle, Leaf, Database, Layers, Send } from "lucide-react";
import { trashData } from "./trashData";
import "./styles.css";

const categories = ["すべて", ...Array.from(new Set(trashData.map(i => i.category)))];

const categoryLabels = {
  "すべて": { ja: "すべて", zh: "全部", en: "All" },
  "資源ごみ": { ja: "資源ごみ", zh: "资源垃圾", en: "Recyclables" },
  "古紙・段ボール": { ja: "古紙・段ボール", zh: "旧纸・纸箱", en: "Paper & cardboard" },
  "燃えるごみ": { ja: "燃えるごみ", zh: "可燃垃圾", en: "Burnable waste" },
  "プラスチック": { ja: "プラスチック", zh: "塑料垃圾", en: "Plastic" },
  "不燃ごみ": { ja: "不燃ごみ", zh: "不燃垃圾", en: "Non-burnable" },
  "危険ごみ": { ja: "危険ごみ", zh: "危险垃圾", en: "Hazardous waste" },
  "粗大ごみ": { ja: "粗大ごみ", zh: "大件垃圾", en: "Bulky waste" },
  "家電リサイクル": { ja: "家電リサイクル", zh: "家电回收", en: "Appliance recycling" },
  "小型家電": { ja: "小型家電", zh: "小型家电", en: "Small electronics" },
  "専門回収": { ja: "専門回収", zh: "专门回收", en: "Special collection" }
};

const categoryDescriptions = {
  "資源ごみ": {
    ja: "びん・缶・ペットボトルなど、資源として再利用できるものです。中をすすぎ、分けて出します。",
    zh: "瓶、罐、塑料瓶等可回收资源。请简单清洗后分类投放。",
    en: "Bottles, cans, and plastic bottles that can be recycled. Rinse and separate them before disposal."
  },
  "古紙・段ボール": {
    ja: "新聞、雑誌、段ボールなどの紙類です。折りたたみ、ひもで束ねると出しやすくなります。",
    zh: "报纸、杂志、纸箱等纸类。折叠并捆扎后投放更安全。",
    en: "Paper items such as newspapers, magazines, and cardboard. Fold and tie them in bundles."
  },
  "燃えるごみ": {
    ja: "生ごみ、汚れた紙、小さな木製品など、焼却処理されるごみです。",
    zh: "厨余、脏纸、小型木制品等会被焚烧处理的垃圾。",
    en: "Waste that is incinerated, such as food scraps, soiled paper, and small wooden items."
  },
  "プラスチック": {
    ja: "食品トレー、容器、袋などのプラスチック類です。汚れが強い場合は自治体ルールを確認します。",
    zh: "食品托盘、容器、袋子等塑料类。污渍较重时请确认当地规则。",
    en: "Plastic trays, containers, and bags. Check local rules when they are heavily soiled."
  },
  "不燃ごみ": {
    ja: "金属、ガラス、陶器など燃えにくい素材です。割れ物や刃物は包んで危険表示をします。",
    zh: "金属、玻璃、陶瓷等不易燃材料。碎片或刀具请包好并标注危险。",
    en: "Non-burnable materials such as metal, glass, and ceramics. Wrap sharp or broken items safely."
  },
  "危険ごみ": {
    ja: "電池、スプレー缶、蛍光灯など火災やけがにつながりやすいものです。専用回収を使います。",
    zh: "电池、喷雾罐、荧光灯等有火灾或受伤风险的物品，应使用专门回收。",
    en: "Items such as batteries, spray cans, and fluorescent lamps that need special collection."
  },
  "粗大ごみ": {
    ja: "家具や布団など大きなごみです。事前申込や処理券が必要な場合があります。",
    zh: "家具、被褥等大件垃圾。很多地区需要提前申请或购买处理券。",
    en: "Large items such as furniture and futons. Many areas require booking or disposal tickets."
  },
  "家電リサイクル": {
    ja: "テレビ、冷蔵庫、洗濯機など、家電リサイクル法の対象です。販売店や指定方法で処理します。",
    zh: "电视、冰箱、洗衣机等家电回收法对象，请通过店铺或指定方式处理。",
    en: "Appliances covered by recycling rules, such as TVs, refrigerators, and washing machines."
  },
  "小型家電": {
    ja: "スマートフォンや小型機器などです。回収ボックスや自治体の小型家電回収を利用します。",
    zh: "手机、小型设备等。请使用回收箱或自治体的小型家电回收。",
    en: "Small devices such as phones and compact electronics. Use collection boxes where available."
  },
  "専門回収": {
    ja: "自治体の通常回収では出せないものです。販売店、専門業者、指定窓口を確認します。",
    zh: "不能作为普通垃圾投放的物品，请确认店铺、专业回收或指定窗口。",
    en: "Items that need a store, specialist collector, or designated counter instead of normal pickup."
  }
};

const quickKeywords = ["ペットボトル", "段ボール", "乾電池", "布団", "陶器の茶碗"];

const categoryLabel = (category, lang) => categoryLabels[category]?.[lang] || category;

const scrollMobileTargetIntoView = node => {
  if (!node || !window.matchMedia?.("(max-width: 640px)").matches) return;
  const top = node.getBoundingClientRect().top + window.scrollY - 16;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};

const surveyMessages = {
  ja: { required: "必須項目を入力してください。", successTitle: "回答を送信しました", successText: "ご協力ありがとうございます。回答はこの端末に保存されました。", again: "もう一度回答する" },
  zh: { required: "请填写必填项目。", successTitle: "问卷已提交", successText: "感谢你的回答。结果已保存在本机浏览器中。", again: "再次填写" },
  en: { required: "Please complete the required fields.", successTitle: "Response submitted", successText: "Thank you. Your response was saved in this browser.", again: "Submit another" }
};

const i18n = {
  ja: {
    title: "留学生ごみ分別サポート", sub: "SDGs Web App", area: "Kansai Area",
    subtitle: "京都・大阪で生活する留学生向けのごみ分別支援アプリ",
    purpose: "目的：留学生が地域のごみ分別ルールを理解し、地域社会と共生できるよう支援する。",
    pages: { dashboard: "ホーム", search: "分別検索", dictionary: "分別辞典", favorites: "お気に入り", survey: "アンケート", admin: "統計", project: "プロジェクト" },
    lang: "Language", heroTag: "SDGs 11 × 留学生支援 × 地域共生", heroTitle: "ごみ分別を、もっと分かりやすく。",
    heroText: "来日したばかりの留学生が「何を、いつ、どうやって捨てるか」を簡単に確認できるWebアプリです。",
    start: "分別チェックを始める", projectBtn: "プロジェクト説明を見る",
    itemCount: "登録品目", catCount: "分類カテゴリ", favCount: "お気に入り", answerCount: "回答数",
    bgTitle: "プロジェクト背景", bgText: "留学生は日本語の行政資料を読むことが難しく、ごみ分別のルールを誤解しやすいです。特に粗大ごみ、プラスチック、資源ごみは間違えやすく、マンションや地域でのトラブルにつながります。",
    effectTitle: "期待される効果", effects: ["ごみ出しミスの減少", "留学生の生活不安の軽減", "リサイクル率の向上", "地域社会との共生促進"],
    searchTitle: "ごみ分別チェック", searchDesc: "ごみの名前を入力すると、分類・出し方・注意点を表示します。", placeholder: "例：ペットボトル、布団、電池、段ボール",
    result: "検索結果", detail: "詳細", empty: "左の結果から品目を選んでください。", how: "出し方", caution: "注意点",
    addFav: "お気に入りに追加", removeFav: "お気に入りから削除", favDesc: "よく使うごみを保存して、あとで出し方をすぐ確認できます。", favEmpty: "まだお気に入りがありません。", viewSearch: "検索ページで見る",
    dictTitle: "分別辞典", dictDesc: "100種類のごみをカテゴリ別に一覧で確認できます。検索ページとは違い、辞典ページは全体を眺めるためのページです。",
    all: "すべて", noData: "該当する品目がありません。",
    surveyTitle: "アンケート入力", surveyDesc: "留学生の困りごとを集め、サイト改善に利用します。", name: "名前", difficult: "一番分かりにくい分類", score: "分かりやすさ評価", comment: "コメント", submit: "送信する", answers: "回答一覧",
    adminTitle: "プロジェクト統計", projectTitle: "留学生ごみ分別サポートとは",
  },
  zh: {
    title: "留学生垃圾分类支援", sub: "SDGs Web 应用", area: "关西地区",
    subtitle: "面向京都・大阪留学生的垃圾分类支援应用",
    purpose: "目的：帮助留学生理解当地垃圾分类规则，更好地融入社区生活。",
    pages: { dashboard: "首页", search: "分类搜索", dictionary: "分类词典", favorites: "收藏", survey: "问卷", admin: "统计", project: "项目说明" },
    lang: "语言", heroTag: "SDGs 11 × 留学生支援 × 地域共生", heroTitle: "让垃圾分类更简单。",
    heroText: "帮助刚来日本的留学生快速确认“什么垃圾、什么时候扔、怎么扔”的 Web 应用。",
    start: "开始分类查询", projectBtn: "查看项目说明",
    itemCount: "登记品目", catCount: "分类类别", favCount: "收藏", answerCount: "回答数",
    bgTitle: "项目背景", bgText: "留学生阅读日语行政资料比较困难，容易误解垃圾分类规则，尤其是大件垃圾、塑料垃圾和资源垃圾。",
    effectTitle: "预期效果", effects: ["减少垃圾投放错误", "减轻留学生生活不安", "提高资源回收率", "促进与当地社区共生"],
    searchTitle: "垃圾分类查询", searchDesc: "输入垃圾名称后，显示分类、投放方法和注意点。", placeholder: "例：塑料瓶、被子、电池、纸箱",
    result: "搜索结果", detail: "详情", empty: "请从左侧结果中选择品目。", how: "投放方法", caution: "注意点",
    addFav: "加入收藏", removeFav: "取消收藏", favDesc: "保存常查垃圾，之后可以快速查看投放方法。", favEmpty: "还没有收藏。", viewSearch: "在搜索页查看",
    dictTitle: "分类词典", dictDesc: "可以按类别浏览100种不同垃圾。和搜索页不同，词典页用于整体查看数据。",
    all: "全部", noData: "没有符合条件的品目。",
    surveyTitle: "问卷填写", surveyDesc: "收集留学生遇到的问题，用于改进网站。", name: "姓名", difficult: "最难理解的分类", score: "易懂程度评分", comment: "评论", submit: "提交", answers: "回答列表",
    adminTitle: "项目统计", projectTitle: "什么是留学生垃圾分类支援",
  },
  en: {
    title: "Student Garbage Sorting Support", sub: "SDGs Web App", area: "Kansai Area",
    subtitle: "A garbage sorting support app for international students in Kyoto and Osaka",
    purpose: "Purpose: Help international students understand local garbage rules and live smoothly in the community.",
    pages: { dashboard: "Home", search: "Search", dictionary: "Dictionary", favorites: "Favorites", survey: "Survey", admin: "Stats", project: "Project" },
    lang: "Language", heroTag: "SDG 11 × Student Support × Local Community", heroTitle: "Make garbage sorting easier.",
    heroText: "A Web App that helps new international students quickly check what to throw away, when, and how.",
    start: "Start Sorting Check", projectBtn: "View Project",
    itemCount: "Items", catCount: "Categories", favCount: "Favorites", answerCount: "Responses",
    bgTitle: "Project Background", bgText: "International students may find municipal Japanese difficult and misunderstand garbage sorting rules, especially bulky waste, plastics, and recyclable resources.",
    effectTitle: "Expected Effects", effects: ["Reduce sorting mistakes", "Lower daily-life anxiety", "Improve recycling awareness", "Support community coexistence"],
    searchTitle: "Garbage Sorting Check", searchDesc: "Enter an item name to see its category, disposal method, and notes.", placeholder: "e.g. bottle, futon, battery, cardboard",
    result: "Search Results", detail: "Detail", empty: "Select an item from the results.", how: "How to dispose", caution: "Caution",
    addFav: "Add to Favorites", removeFav: "Remove from Favorites", favDesc: "Save frequently checked items and review disposal methods quickly.", favEmpty: "No favorites yet.", viewSearch: "View in Search",
    dictTitle: "Sorting Dictionary", dictDesc: "Browse 100 garbage items by category. Unlike the search page, this page is designed for overview browsing.",
    all: "All", noData: "No matching item.",
    surveyTitle: "Survey Form", surveyDesc: "Collect students' difficulties and use them to improve the site.", name: "Name", difficult: "Most difficult category", score: "Clarity score", comment: "Comment", submit: "Submit", answers: "Responses",
    adminTitle: "Project Stats", projectTitle: "About Student Garbage Sorting Support",
  }
};

const pages = [
  ["dashboard", Home], ["search", Search], ["dictionary", BookOpen], ["favorites", Star], ["survey", MessageSquare], ["admin", BarChart3], ["project", Leaf]
];

function useLocalStorage(key, initial) {
  const [v, setV] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) || initial; } catch { return initial; }
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(v)), [key, v]);
  return [v, setV];
}

function App() {
  const [page, setPage] = useState("dashboard");
  const [lang, setLang] = useLocalStorage("gomi_final_language", "ja");
  const [keyword, setKeyword] = useState("");
  const [cat, setCat] = useState("すべて");
  const [selected, setSelected] = useState(trashData[0]);
  const [favorites, setFavorites] = useLocalStorage("gomi_final_favorites_v2", []);
  const [surveys, setSurveys] = useLocalStorage("gomi_final_surveys", [
    { id: 1, name: "王さん", difficulty: "粗大ごみ", score: 4, comment: "家具の出し方が分かりやすかったです。" },
    { id: 2, name: "Kim", difficulty: "プラスチック", score: 5, comment: "検索機能が便利です。" }
  ]);
  const [open, setOpen] = useState(false);
  const t = i18n[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [page]);

  const itemName = item => lang === "zh" ? (item.zh || item.name) : lang === "en" ? (item.en || item.name) : item.name;
  const itemNote = item => item.note;
  const itemMistake = item => item.mistake;
  const displayName = item => [item.name, item.zh, item.en].filter(Boolean).join(" / ");

  const filtered = useMemo(() => trashData.filter(item => {
    const text = [item.name, item.zh, item.en, item.category, item.note, item.mistake].filter(Boolean).join(" ").toLowerCase();
    return (!keyword || text.includes(keyword.toLowerCase())) && (cat === "すべて" || item.category === cat);
  }), [keyword, cat]);

  const toggleFav = item => setFavorites(v => {
    const exists = v.some(x => x.id === item.id);
    return exists ? v.filter(x => x.id !== item.id) : [...v, item];
  });

  const goPage = id => {
    setPage(id);
    setOpen(false);
  };

  const side = (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand"><div className="brandIcon"><Recycle /></div><div><h1>{t.title}</h1><p>{t.sub}</p></div></div>
      <nav className="navList">
        {pages.map(([id, Icon]) => <button type="button" key={id} className={`navButton ${page === id ? "active" : ""}`} onClick={() => goPage(id)}><Icon size={18}/><span>{t.pages[id]}</span></button>)}
      </nav>
      <div className="sideCard"><Globe2 size={18}/><div><strong>{t.lang}</strong><LanguageSelect lang={lang} setLang={setLang} label={t.lang}/></div></div>
      <div className="sideNote">{t.purpose}</div>
    </aside>
  );

  return <div className="app">
    {side}
    <button type="button" className={`scrim ${open ? "show" : ""}`} aria-label="Close menu" onClick={()=>setOpen(false)} />
    <main className="main">
      <header className="top">
        <button type="button" className="mobileMenu" aria-label="Open menu" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <div className="topTitle"><h2>{t.pages[page]}</h2><p>{t.subtitle}</p></div>
        <div className="topActions">
          <div className="topBadge"><MapPin size={16}/>{t.area}</div>
          <LanguageSelect lang={lang} setLang={setLang} label={t.lang} compact />
        </div>
      </header>
      <div className="content">
        {page === "dashboard" && <Dashboard t={t} setPage={goPage} setKeyword={setKeyword} favorites={favorites} surveys={surveys}/>}
        {page === "search" && <SearchPage t={t} lang={lang} keyword={keyword} setKeyword={setKeyword} cat={cat} setCat={setCat} filtered={filtered} selected={selected} setSelected={setSelected} favorites={favorites} toggleFav={toggleFav} itemName={itemName} itemNote={itemNote} itemMistake={itemMistake} displayName={displayName}/>}
        {page === "dictionary" && <DictionaryPage t={t} lang={lang} setPage={goPage} cat={cat} setCat={setCat} setKeyword={setKeyword} itemName={itemName} itemNote={itemNote} itemMistake={itemMistake} displayName={displayName} favorites={favorites} toggleFav={toggleFav} />}
        {page === "favorites" && <FavoritesPage t={t} lang={lang} items={favorites} itemName={itemName} displayName={displayName} toggleFav={toggleFav} setPage={goPage} setKeyword={setKeyword} itemNote={itemNote} itemMistake={itemMistake}/>}
        {page === "survey" && <SurveyPage t={t} lang={lang} surveys={surveys} setSurveys={setSurveys}/>}
        {page === "admin" && <AdminPage t={t} lang={lang} surveys={surveys} favorites={favorites}/>}
        {page === "project" && <ProjectPage t={t}/>}
      </div>
    </main>
    <nav className="bottomNav" aria-label="Mobile navigation">
      {pages.map(([id, Icon]) => (
        <button type="button" key={id} className={`bottomNavButton ${page === id ? "active" : ""}`} onClick={() => goPage(id)}>
          <Icon size={20}/>
          <span>{t.pages[id]}</span>
        </button>
      ))}
    </nav>
  </div>
}

function LanguageSelect({lang,setLang,label,compact=false}) {
  return (
    <div className={`languageSelect ${compact ? "compact" : ""}`} role="group" aria-label={label}>
      <span>{label}</span>
      <div className="langOptions">
        {[
          ["ja", "JA"],
          ["zh", "中"],
          ["en", "EN"]
        ].map(([id, text]) => (
          <button type="button" key={id} className={lang === id ? "active" : ""} onClick={()=>setLang(id)}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

function Dashboard({t,setPage,setKeyword,favorites,surveys}) {
  const openKeyword = word => {
    setKeyword(word);
    setPage("search");
  };

  return <>
    <section className="hero">
      <div className="heroCopy">
        <span className="pill">{t.heroTag}</span>
        <h2>{t.heroTitle}</h2>
        <p>{t.heroText}</p>
        <div className="heroActions">
          <button type="button" className="primary" onClick={()=>{setKeyword(""); setPage("search")}}>{t.start}</button>
          <button type="button" className="secondary" onClick={()=>setPage("project")}>{t.projectBtn}</button>
        </div>
        <div className="quickKeywords" aria-label="Quick search keywords">
          {quickKeywords.map(word => <button type="button" key={word} onClick={()=>openKeyword(word)}>{word}</button>)}
        </div>
      </div>
      <div className="phoneMock" aria-hidden="true"><b>Today Tips</b><div>🥤 ペットボトル<br/><small>キャップ・ラベルを外す</small></div><div>🪑 椅子<br/><small>粗大ごみ申し込み</small></div><div>🔋 電池<br/><small>回収ボックス利用</small></div></div>
    </section>
    <section className="kpiGrid"><Stat title={t.itemCount} value={trashData.length} icon={<Database/>}/><Stat title={t.catCount} value={categories.length-1} icon={<Layers/>}/><Stat title={t.favCount} value={favorites.length} icon={<Star/>}/><Stat title={t.answerCount} value={surveys.length} icon={<MessageSquare/>}/></section>
    <section className="grid2"><div className="panel"><h3>{t.bgTitle}</h3><p>{t.bgText}</p></div><div className="panel"><h3>{t.effectTitle}</h3><ul>{t.effects.map(x=><li key={x}>{x}</li>)}</ul></div></section>
  </>
}

function SearchPage({t,lang,keyword,setKeyword,cat,setCat,filtered,selected,setSelected,favorites,toggleFav,itemName,itemNote,itemMistake,displayName}) {
  const detailRef = useRef(null);

  useEffect(() => {
    if (filtered.length === 0) {
      setSelected(null);
    } else if (!selected || !filtered.some(item => item.id === selected.id)) {
      setSelected(filtered[0]);
    }
  }, [keyword, cat, filtered, selected, setSelected]);

  const chooseItem = item => {
    setSelected(item);
    requestAnimationFrame(() => scrollMobileTargetIntoView(detailRef.current));
  };

  return <>
    <section className="panel bigSearch">
      <h3>{t.searchTitle}</h3>
      <p>{t.searchDesc}</p>
      <div className="searchRow">
        <input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder={t.placeholder} enterKeyHint="search"/>
        <select value={cat} onChange={e=>setCat(e.target.value)} aria-label={t.difficult}>
          {categories.map(c=><option key={c} value={c}>{categoryLabel(c, lang)}</option>)}
        </select>
      </div>
      <div className="chipScroller" aria-label="Category filters">
        {categories.map(c => (
          <button type="button" key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={()=>setCat(c)}>
            {categoryLabel(c, lang)}
          </button>
        ))}
      </div>
    </section>
    <section className="grid2 searchLayout">
      <div className="panel">
        <h3>{t.result}</h3>
        <div className="resultList">
          {filtered.map(item=>(
            <button type="button" className={`resultItem ${selected?.id === item.id ? "selectedItem" : ""}`} key={item.id} onClick={()=>chooseItem(item)}>
              <span className="emoji">{item.icon}</span>
              <span><strong>{itemName(item)}</strong><small>{displayName(item)}</small></span>
              <span className={`cat ${item.color}`}>{categoryLabel(item.category, lang)}</span>
            </button>
          ))}
          {filtered.length===0 && <div className="empty compact">{t.noData}</div>}
        </div>
      </div>
      <div className="panel detailPanel" ref={detailRef}>
        {selected ? <>
          <div className="detailHead"><span className="largeEmoji">{selected.icon}</span><div><h3>{itemName(selected)}</h3><p>{displayName(selected)}</p><span className={`cat ${selected.color}`}>{categoryLabel(selected.category, lang)}</span></div></div>
          <div className="infoBox"><CheckCircle2/><p><b>{t.how}：</b>{itemNote(selected)}</p></div>
          <div className="warningBox"><AlertTriangle/><p><b>{t.caution}：</b>{itemMistake(selected)}</p></div>
          <button type="button" className="secondary full" onClick={(e)=>{e.stopPropagation(); toggleFav(selected)}}><Star size={18}/>{favorites.some(x => x.id === selected.id)?t.removeFav:t.addFav}</button>
        </> : <div className="empty">{t.empty}</div>}
      </div>
    </section>
  </>
}

function DictionaryPage({t,lang,setPage,cat,setCat,setKeyword,itemName,itemNote,itemMistake,displayName,favorites,toggleFav}) {
  const detailRef = useRef(null);
  const availableCategories = categories.slice(1);
  const activeCat = cat === "すべて" ? availableCategories[0] : cat;
  const shown = useMemo(() => trashData.filter(x => x.category === activeCat), [activeCat]);
  const [selectedItem, setSelectedItem] = useState(shown[0] || null);

  useEffect(() => {
    if (shown.length === 0) {
      setSelectedItem(null);
    } else if (!selectedItem || !shown.some(item => item.id === selectedItem.id)) {
      setSelectedItem(shown[0]);
    }
  }, [activeCat, shown, selectedItem]);

  const chooseCategory = nextCat => {
    setCat(nextCat);
    requestAnimationFrame(() => scrollMobileTargetIntoView(document.querySelector(".categoryInfo")));
  };

  const chooseItem = item => {
    setSelectedItem(item);
    requestAnimationFrame(() => scrollMobileTargetIntoView(detailRef.current));
  };

  const openInSearch = item => {
    setKeyword(item.name);
    setPage("search");
  };

  return <>
    <section className="panel bigSearch">
      <h3>{t.dictTitle}</h3>
      <p>{t.dictDesc}</p>
      <select className="categoryWide" value={activeCat} onChange={e=>chooseCategory(e.target.value)} aria-label={t.dictTitle}>
        {availableCategories.map(c=><option key={c} value={c}>{categoryLabel(c, lang)}</option>)}
      </select>
    </section>

    <section className="dictionaryFlow">
      <div className="categoryCards">
        {availableCategories.map(c => {
          const count = trashData.filter(item => item.category === c).length;
          return (
            <button type="button" key={c} className={`categoryCard ${activeCat === c ? "active" : ""}`} onClick={()=>chooseCategory(c)}>
              <strong>{categoryLabel(c, lang)}</strong>
              <span>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="panel categoryInfo">
        <span className={`cat ${shown[0]?.color || "green"}`}>{categoryLabel(activeCat, lang)}</span>
        <h3>{categoryLabel(activeCat, lang)}</h3>
        <p>{categoryDescriptions[activeCat]?.[lang]}</p>
      </div>

      <div className="panel itemPanel">
        <h3>{categoryLabel(activeCat, lang)}</h3>
        <div className="dictGrid">
          {shown.map(item=>(
            <button type="button" className={`dictCard ${selectedItem?.id === item.id ? "active" : ""}`} key={item.id} onClick={()=>chooseItem(item)}>
              <span>{item.icon}</span>
              <div><strong>{itemName(item)}</strong><small>{displayName(item)}</small></div>
            </button>
          ))}
          {shown.length===0 && <div className="empty compact">{t.noData}</div>}
        </div>
      </div>

      <div className="panel detailPanel dictDetail" ref={detailRef}>
        {selectedItem ? <>
          <div className="detailHead"><span className="largeEmoji">{selectedItem.icon}</span><div><h3>{itemName(selectedItem)}</h3><p>{displayName(selectedItem)}</p><span className={`cat ${selectedItem.color}`}>{categoryLabel(selectedItem.category, lang)}</span></div></div>
          <div className="infoBox"><CheckCircle2/><p><b>{t.how}：</b>{itemNote(selectedItem)}</p></div>
          <div className="warningBox"><AlertTriangle/><p><b>{t.caution}：</b>{itemMistake(selectedItem)}</p></div>
          <div className="favActions">
            <button type="button" className="primary darkText" onClick={()=>openInSearch(selectedItem)}><Search size={18} /> {t.viewSearch}</button>
            <button type="button" className="secondary" onClick={(e)=>{e.stopPropagation(); toggleFav(selectedItem)}}><Star size={18}/>{favorites.some(x => x.id === selectedItem.id)?t.removeFav:t.addFav}</button>
          </div>
        </> : <div className="empty">{t.empty}</div>}
      </div>
    </section>
  </>
}

function FavoritesPage({t,lang,items,itemName,displayName,toggleFav,setPage,setKeyword,itemNote,itemMistake}) {
  const [currentId, setCurrentId] = useState(items[0]?.id || null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (items.length === 0) {
      setCurrentId(null);
      return;
    }
    if (!items.some(i => i.id === currentId)) {
      setCurrentId(items[0].id);
    }
  }, [items, currentId]);

  const current = items.find(i => i.id === currentId);

  const chooseFavorite = item => {
    setCurrentId(item.id);
    requestAnimationFrame(() => scrollMobileTargetIntoView(detailRef.current));
  };

  if (items.length === 0) {
    return (
      <section className="panel favoriteEmpty">
        <h3>{t.pages.favorites}</h3>
        <p>{t.favDesc}</p>
        <div className="empty">{t.favEmpty}</div>
      </section>
    );
  }

  return (
    <>
      <section className="panel favoriteHeader">
        <div>
          <h3>{t.pages.favorites}</h3>
          <p>{t.favDesc}</p>
        </div>
        <span className="favCount">{items.length}</span>
      </section>

      <section className="grid2 favoriteLayout">
        <div className="panel">
          <h3>{t.pages.favorites}</h3>
          <div className="resultList">
            {items.map(item => (
              <button
                type="button"
                key={item.id}
                className={`resultItem ${currentId === item.id ? "selectedItem" : ""}`}
                onClick={() => chooseFavorite(item)}
              >
                <span className="emoji">{item.icon}</span>
                <span>
                  <strong>{itemName(item)}</strong>
                  <small>{displayName(item)}</small>
                </span>
                <span className={`cat ${item.color}`}>{categoryLabel(item.category, lang)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="panel detailPanel" ref={detailRef}>
          {current && (
            <>
              <div className="detailHead">
                <span className="largeEmoji">{current.icon}</span>
                <div>
                  <h3>{itemName(current)}</h3>
                  <p>{displayName(current)}</p>
                  <span className={`cat ${current.color}`}>{categoryLabel(current.category, lang)}</span>
                </div>
              </div>

              <div className="infoBox">
                <CheckCircle2 />
                <p><b>{t.how}：</b>{itemNote(current)}</p>
              </div>

              <div className="warningBox">
                <AlertTriangle />
                <p><b>{t.caution}：</b>{itemMistake(current)}</p>
              </div>

              <div className="favActions">
                <button
                  type="button"
                  className="primary darkText"
                  onClick={() => {
                    setKeyword(current.name);
                    setPage("search");
                  }}
                >
                  <Search size={18} /> {t.viewSearch}
                </button>
                <button type="button" className="danger" onClick={(e) => { e.stopPropagation(); toggleFav(current); }}>
                  <Star size={18} /> {t.removeFav}
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function SurveyPage({t,lang,surveys,setSurveys}) {
  const [form,setForm] = useState({name:"",difficulty:"粗大ごみ",score:5,comment:""});
  const [errors,setErrors] = useState({});
  const [submitted,setSubmitted] = useState(false);
  const m = surveyMessages[lang];

  const submit = e => {
    e.preventDefault();
    const nextErrors = {};
    if(!form.name.trim()) nextErrors.name = m.required;
    if(!form.comment.trim()) nextErrors.comment = m.required;
    setErrors(nextErrors);
    if(Object.keys(nextErrors).length > 0) return;
    setSurveys([{id:Date.now(),...form,name:form.name.trim(),comment:form.comment.trim(),score:Number(form.score)},...surveys]);
    setForm({name:"",difficulty:"粗大ごみ",score:5,comment:""});
    setSubmitted(true);
  };

  return <section className="grid2 surveyLayout">
    <div className="panel">
      <h3>{t.surveyTitle}</h3>
      <p>{t.surveyDesc}</p>
      {submitted ? (
        <div className="surveySuccess">
          <CheckCircle2 />
          <h3>{m.successTitle}</h3>
          <p>{m.successText}</p>
          <button type="button" className="primary darkText" onClick={()=>setSubmitted(false)}>{m.again}</button>
        </div>
      ) : (
        <form className="form" onSubmit={submit}>
          <label htmlFor="survey-name">{t.name}</label>
          <input id="survey-name" value={form.name} onChange={e=>{setForm({...form,name:e.target.value}); setErrors({...errors,name:null});}} autoComplete="name"/>
          {errors.name && <p className="fieldError">{errors.name}</p>}

          <label>{t.difficult}</label>
          <div className="chipScroller formChips" role="group" aria-label={t.difficult}>
            {categories.slice(1).map(c=>(
              <button type="button" key={c} className={`chip ${form.difficulty === c ? "active" : ""}`} onClick={()=>setForm({...form,difficulty:c})}>
                {categoryLabel(c, lang)}
              </button>
            ))}
          </div>

          <label>{t.score}: {form.score}</label>
          <div className="scoreButtons" role="group" aria-label={t.score}>
            {[1,2,3,4,5].map(score => (
              <button type="button" key={score} className={Number(form.score) === score ? "active" : ""} onClick={()=>setForm({...form,score})}>
                {score}
              </button>
            ))}
          </div>

          <label htmlFor="survey-comment">{t.comment}</label>
          <textarea id="survey-comment" value={form.comment} onChange={e=>{setForm({...form,comment:e.target.value}); setErrors({...errors,comment:null});}}/>
          {errors.comment && <p className="fieldError">{errors.comment}</p>}

          <button type="submit" className="primary submitButton"><Send size={16}/>{t.submit}</button>
        </form>
      )}
    </div>
    <div className="panel answersPanel">
      <h3>{t.answers}</h3>
      {surveys.map(s=><div className="surveyItem" key={s.id}><b>{s.name}</b><span>{categoryLabel(s.difficulty, lang)}</span><p>{s.comment}</p><small>{"★".repeat(s.score)}</small></div>)}
    </div>
  </section>
}

function AdminPage({t,lang,surveys,favorites}) {
  const stats = categories.slice(1).map(c => ({cat:c, count: trashData.filter(i=>i.category===c).length}));
  const max = Math.max(...stats.map(s=>s.count));
  return <><section className="kpiGrid"><Stat title={t.itemCount} value={trashData.length} icon={<Database/>}/><Stat title={t.catCount} value={stats.length} icon={<Layers/>}/><Stat title={t.favCount} value={favorites.length} icon={<Star/>}/><Stat title={t.answerCount} value={surveys.length} icon={<MessageSquare/>}/></section><section className="panel chartPanel"><h3>{t.adminTitle}</h3>{stats.map(s=><div className="barLine" key={s.cat}><div><span>{categoryLabel(s.cat, lang)}</span><b>{s.count}</b></div><div className="bar"><span style={{width:`${s.count/max*100}%`}}/></div></div>)}</section></>
}

function ProjectPage({t}) {
  return <><section className="panel"><span className="pill dark">Project Overview</span><h3>{t.projectTitle}</h3><p>{t.bgText}</p></section><section className="grid2"><div className="panel"><h3>SDGs</h3><p>SDG 11「住み続けられるまちづくりを」に関連し、留学生と地域社会の共生を支援します。</p></div><div className="panel"><h3>Features</h3><ul><li>100 items database</li><li>Search and dictionary separated</li><li>Favorites and survey saved locally</li><li>Japanese / Chinese / English UI</li></ul></div></section></>
}

function Stat({title,value,icon}) { return <div className="statCard"><div>{icon}</div><p>{title}</p><strong>{value}</strong></div> }

const rootElement = document.getElementById("root");
const root = rootElement._reactRoot || createRoot(rootElement);
rootElement._reactRoot = root;
root.render(<App />);
