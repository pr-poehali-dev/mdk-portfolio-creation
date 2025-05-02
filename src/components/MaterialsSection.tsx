
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MaterialsSection = () => {
  const materials = [
    {
      title: "Рабочая программа",
      description: "Документация по организации внеурочной деятельности",
      icon: "FileText"
    },
    {
      title: "Методические рекомендации",
      description: "Практические советы по проведению мероприятий",
      icon: "BookMarked"
    },
    {
      title: "Дидактические материалы",
      description: "Пособия для использования во внеурочной работе",
      icon: "FolderOpen"
    }
  ];

  return (
    <section id="materials" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Методические материалы</h2>
          <p className="text-lg text-gray-600">
            Полезные ресурсы для организации и проведения внеурочной деятельности 
            в компенсирующем и коррекционно-развивающем образовании
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {materials.map((material, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="pb-0">
                <div className="mb-2">
                  <Icon name={material.icon} className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">{material.description}</p>
                <Button variant="outline" size="sm" className="absolute bottom-4">
                  Просмотреть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
