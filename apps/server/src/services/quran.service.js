export const fetchVerse = async (surah, ayat) => {
    const response = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surah}:${ayat}/en.asad`
    );
    const data = await response.json();
    
    if (data.code !== 200) throw new Error('Verse not found');
    
    return {
      translation: data.data.text,
      surahName: data.data.surah.englishName,
      surahNameArabic: data.data.surah.name,
    };
  };