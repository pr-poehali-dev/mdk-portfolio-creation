
import { Progress } from "@/components/ui/progress";

const AchievementsSection = () => {
  const achievements = [
    { name: "Разработка методических пособий", progress: 85 },
    { name: "Организация внеурочных мероприятий", progress: 92 },
    { name: "Индивидуальная работа с учащимися", progress: 78 },
    { name: "Взаимодействие с родителями", progress: 88 }
  ];

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Достижения</h2>
          <p className="text-lg text-gray-600">
            Результаты работы в области методического обеспечения внеурочной деятельности
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{achievement.name}</span>
                <span className="font-medium">{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
