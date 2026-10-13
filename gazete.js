async function yapayZekaFiltresi(gelenMetin) {
    // Yapay zeka metni okur, küfürleri kırmızı yapar, altına tek cümlelik açıklama ekler.
    const response = await fetch("https://openai.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer AI_ANAHTARINIZ" // Buraya OpenAI anahtarın gelecek
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "Metindeki küfür ve doğrudan ağır hakaret kelimelerini <span style='color:red; font-weight:bold;'>[Sansürlendi]</span> kelimesiyle değiştir. Siyasi veya toplumsal eleştirilere asla dokunma. İşlem bitince metnin en altına '[Yasal Analiz]:' başlığı açarak, hangi sorunların temizlendiğini tekrara düşmeden tek bir kısa cümleyle açıkla."
                },
                {
                    role: "user",
                    content: gelenMetin
                }
            ]
        })
    });

    const veri = await response.json();
    return veri.choices[0].message.content;
}
