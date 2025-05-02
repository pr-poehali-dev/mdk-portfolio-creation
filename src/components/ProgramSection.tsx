
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProgramSection = () => {
  const programFeatures = [
    {
      title: "Теоретические основы",
      description: "Изучение базовых принципов и методик внеурочной деятельности",
      icon: "BookOpen"
    },
    {
      title: "Практические навыки",
      description: "Развитие умений организации внеурочных мероприятий",
      icon: "Puzzle"
    },
    {
      title: "Индивидуальный подход",
      description: "Методы учета особенностей каждого обучающегося",
      icon: "Users"
    }
  ];
  
  return (
    <section id="program" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">О программе МДК.02.03</h2>
          <p className="text-lg text-gray-600">
            Программа направлена на формирование компетенций по методическому обеспечению внеурочной деятельности 
            в компенсирующем и коррекционно-развивающем образовании
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {programFeatures.map((feature, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={feature.icon} className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
