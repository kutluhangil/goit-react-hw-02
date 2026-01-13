// React hook'larını içe aktarma işlemi
import { useState, useEffect } from "react";

// Bileşenleri içe aktarma işlemi
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

// LocalStorage anahtarı
const STORAGE_KEY = "feedback";

export default function App() {
  // FEEDBACK STATE'İNİ LOCALSTORAGE'DAN BAŞLATMA İŞLEMİ
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(STORAGE_KEY);

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // FEEDBACK DEĞİŞTİĞİNDE LOCALSTORAGE'A KAYDEtME İŞLEMİ
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  // GERİ BİLDİRİMİ ARTIRAN FONKSİYON işlemi
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  // TÜM GERİ BİLDİRİMLERİ SIFIRLAMA İŞLEMİ
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // TOPLAM GERİ BİLDİRİM SAYISI
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // OLUMLU GERİ BİLDİRİM YÜZDESİ
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  // JSX – ARAYÜZÜ RENDER ETME İŞLEMİ
  return (
    <div>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
