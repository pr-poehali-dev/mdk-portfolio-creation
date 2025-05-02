
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { FileCard, FileProps } from "@/components/ui/file-card";
import { Link } from "react-router-dom";

const MaterialsSection = () => {
  const categories = [
    {
      title: "Методические рекомендации",
      description: "Практические советы по проведению мероприятий",
      icon: "BookMarked",
      files: [
        {
          id: "1",
          title: "Организация внеурочной деятельности",
          description: "Методические рекомендации по планированию и организации внеурочной деятельности в компенсирующем образовании",
          fileType: "pdf",
          downloadUrl: "#",
          date: "10.04.2025",
          size: "1.2 МБ"
        },
        {
          id: "2",
          title: "Работа с особыми детьми",
          description: "Рекомендации по индивидуальному подходу к учащимся с особыми образовательными потребностями",
          fileType: "doc",
          downloadUrl: "#",
          date: "15.03.2025",
          size: "850 КБ"
        },
        {
          id: "3",
          title: "Инклюзивное образование",
          description: "Методические материалы по организации инклюзивного образования во внеурочной деятельности",
          fileType: "pdf",
          downloadUrl: "#",
          date: "20.02.2025",
          size: "1.5 МБ"
        },
        {
          id: "9",
          title: "Работа с одаренными детьми",
          description: "Памятка для учителей по выявлению и развитию детской одаренности в условиях внеурочной деятельности",
          fileType: "doc",
          downloadUrl: "/gifted-children",
          date: "02.05.2025",
          size: "420 КБ"
        }
      ]
    },
    {
      title: "Рабочие программы",
      description: "Документация по организации внеурочной деятельности",
      icon: "FileText",
      files: [
        {
          id: "4",
          title: "Рабочая программа внеурочной деятельности",
          description: "Примерная рабочая программа внеурочной деятельности для 1-4 классов компенсирующего образования",
          fileType: "doc",
          downloadUrl: "#",
          date: "05.01.2025",
          size: "1.8 МБ"
        },
        {
          id: "5",
          title: "Календарно-тематическое планирование",
          description: "Шаблон календарно-тематического планирования внеурочной деятельности",
          fileType: "xls",
          downloadUrl: "#",
          date: "12.01.2025",
          size: "720 КБ"
        },
        {
          id: "8",
          title: "Рекомендации по написанию программ внеурочной деятельности",
          description: "Подробное руководство по составлению программ внеурочной деятельности",
          fileType: "doc",
          downloadUrl: "/recommendations",
          date: "02.05.2025",
          size: "368 КБ"
        }
      ]
    },
    {
      title: "Рефераты",
      description: "Исследовательские и теоретические работы по методике",
      icon: "FileText",
      files: [
        {
          id: "6",
          title: "Особенности организации внеурочных занятий по общекультурному направлению",
          description: "Реферат на тему особенностей организации и проведения внеурочных занятий по общекультурному направлению",
          fileType: "doc",
          downloadUrl: "/referat",
          date: "02.05.2025",
          size: "245 КБ"
        },
        {
          id: "7",
          title: "Интерактивные методы обучения",
          description: "Роль интерактивных методов обучения во внеурочной деятельности в коррекционно-развивающем образовании",
          fileType: "pdf",
          downloadUrl: "#",
          date: "18.04.2025",
          size: "1.7 МБ"
        }
      ]
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

        <Tabs defaultValue={categories[0].title} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.title} 
                value={category.title}
                className="flex items-center space-x-2"
              >
                <Icon name={category.icon} className="w-4 h-4" />
                <span>{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category.title} value={category.title}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.files.map((file) => (
                  <FileCard key={file.id} file={file} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button asChild>
                  <a href="#upload">
                    <Icon name="Upload" className="w-4 h-4 mr-2" />
                    Загрузить свои материалы
                  </a>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Выделенные секции для новых материалов */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-primary/10 rounded-lg">
            <div className="flex flex-col items-start gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Реферат</h3>
                <p className="text-gray-700">
                  «Особенности организации внеурочных занятий по общекультурному направлению»
                </p>
              </div>
              <Button asChild>
                <Link to="/referat">
                  <Icon name="FileText" className="w-4 h-4 mr-2" />
                  Читать реферат
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="p-6 bg-primary/10 rounded-lg">
            <div className="flex flex-col items-start gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Рекомендации</h3>
                <p className="text-gray-700">
                  Подробное руководство по написанию программ внеурочной деятельности
                </p>
              </div>
              <Button asChild>
                <Link to="/recommendations">
                  <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                  Смотреть рекомендации
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="p-6 bg-primary/10 rounded-lg">
            <div className="flex flex-col items-start gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Памятка</h3>
                <p className="text-gray-700">
                  Работа с одаренными детьми во внеурочной деятельности
                </p>
              </div>
              <Button asChild>
                <Link to="/gifted-children">
                  <Icon name="Sparkles" className="w-4 h-4 mr-2" />
                  Открыть памятку
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
