
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GiftedChildren = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Верхняя секция с заголовком */}
        <section className="py-12 bg-gradient-to-b from-primary/10 to-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Памятка для учителей:
                <br />
                <span className="text-primary mt-2">Работа с одаренными детьми</span>
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                Методические рекомендации для педагогов по выявлению и развитию
                детской одаренности в условиях внеурочной деятельности
              </p>
            </div>
          </div>
        </section>

        {/* Основное содержание */}
        <section className="py-10">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex justify-between items-center">
                <Link
                  to="/"
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-primary"
                >
                  <Icon name="ArrowLeft" className="w-4 h-4 mr-1" />
                  На главную
                </Link>
                <Button variant="outline" size="sm">
                  <Icon name="Printer" className="w-4 h-4 mr-2" />
                  Распечатать памятку
                </Button>
              </div>

              <Tabs defaultValue="recognition" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recognition">Выявление одаренности</TabsTrigger>
                  <TabsTrigger value="methods">Методы работы</TabsTrigger>
                  <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
                </TabsList>

                {/* Вкладка выявления одаренности */}
                <TabsContent value="recognition">
                  <Card>
                    <CardHeader>
                      <CardTitle>Выявление и диагностика одаренности</CardTitle>
                      <CardDescription>
                        Ключевые признаки и инструменты для выявления различных видов одаренности у детей
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h3 className="text-lg font-medium text-primary mb-3">
                          Виды одаренности у детей
                        </h3>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Brain" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Интеллектуальная одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Высокие способности к логическому мышлению, анализу информации, решению сложных задач
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Palette" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Творческая одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Оригинальность мышления, богатое воображение, художественные способности
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Music" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Музыкальная одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Чувство ритма, музыкальный слух, восприимчивость к музыкальным произведениям
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Trophy" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Спортивная одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Хорошая координация движений, физическая выносливость, спортивные достижения
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Users" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Социальная одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Лидерские качества, высокий эмоциональный интеллект, коммуникативные навыки
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name="Compass" className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Академическая одаренность</h4>
                              <p className="text-sm text-gray-600">
                                Высокие достижения в конкретной предметной области или нескольких предметах
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4">Признаки одаренности у ребенка</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Когнитивные признаки</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Любознательность и активность</strong> — задает много вопросов, проявляет интерес к сложным темам
                                </li>
                                <li>
                                  <strong>Хорошая память</strong> — быстро запоминает информацию и долго ее сохраняет
                                </li>
                                <li>
                                  <strong>Широкий словарный запас</strong> — использует сложные термины, речь развита не по возрасту
                                </li>
                                <li>
                                  <strong>Способность к абстрактному мышлению</strong> — понимает сложные концепции, устанавливает причинно-следственные связи
                                </li>
                                <li>
                                  <strong>Быстрое усвоение новых знаний</strong> — легко и быстро обучается
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Личностные и поведенческие признаки</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Перфекционизм</strong> — стремится делать все идеально, часто не удовлетворен результатами
                                </li>
                                <li>
                                  <strong>Независимость суждений</strong> — имеет собственное мнение, которое может отличаться от мнения большинства
                                </li>
                                <li>
                                  <strong>Высокая концентрация внимания</strong> — длительное время может заниматься интересующим делом
                                </li>
                                <li>
                                  <strong>Нестандартное мышление</strong> — находит необычные решения проблем
                                </li>
                                <li>
                                  <strong>Внутренняя мотивация</strong> — стремится к знаниям не из-за оценок, а из интереса
                                </li>
                                <li>
                                  <strong>Чувство юмора</strong> — часто замечает и понимает тонкости, недоступные сверстникам
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Социальные признаки</AccordionTrigger>
                            <AccordionContent>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Трудности в общении со сверстниками</strong> — может предпочитать общение со старшими детьми или взрослыми
                                </li>
                                <li>
                                  <strong>Лидерские качества</strong> — часто организует деятельность других детей
                                </li>
                                <li>
                                  <strong>Сензитивность</strong> — повышенная эмоциональная чувствительность
                                </li>
                                <li>
                                  <strong>Чувство справедливости</strong> — остро реагирует на несправедливость
                                </li>
                                <li>
                                  <strong>Эмпатия</strong> — способность понимать чувства других
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-5">
                        <h3 className="text-lg font-medium mb-4">Методы диагностики одаренности</h3>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Психологические тесты</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Тест Векслера (WISC)</li>
                                <li>Тест структуры интеллекта Амтхауэра</li>
                                <li>Диагностика творческого мышления Торренса</li>
                                <li>Методика "Карта одаренности" Хаана и Каффа</li>
                                <li>Прогрессивные матрицы Равена</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Педагогическая диагностика</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Наблюдение за деятельностью ребенка</li>
                                <li>Анализ продуктов творческой деятельности</li>
                                <li>Анализ учебных достижений</li>
                                <li>Портфолио достижений</li>
                                <li>Оценка способности решать нестандартные задачи</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Вкладка методов работы */}
                <TabsContent value="methods">
                  <Card>
                    <CardHeader>
                      <CardTitle>Методы и приемы работы с одаренными детьми</CardTitle>
                      <CardDescription>
                        Эффективные педагогические подходы для развития потенциала одаренных детей во внеурочной деятельности
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Icon name="LightbulbIcon" className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Проблемное обучение</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Создание учебных проблемных ситуаций, которые требуют от обучающихся самостоятельного поиска решения.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Приемы реализации:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Постановка проблемных вопросов</li>
                              <li>Создание проблемных ситуаций на основе противоречий</li>
                              <li>Задания с недостающими или избыточными данными</li>
                              <li>Организация дискуссий и дебатов</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Icon name="Search" className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Исследовательская деятельность</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Вовлечение детей в самостоятельный исследовательский поиск, формирование навыков научного мышления.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Приемы реализации:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Организация мини-исследований</li>
                              <li>Формулировка гипотез и их проверка</li>
                              <li>Сбор и анализ информации</li>
                              <li>Подготовка исследовательских проектов</li>
                              <li>Участие в научно-практических конференциях</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Icon name="Sparkles" className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Творческие задания</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Развитие креативности, нестандартного мышления и воображения через творческие активности.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Приемы реализации:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Создание собственных произведений (рассказов, стихов)</li>
                              <li>Разработка новых подходов к решению задач</li>
                              <li>Творческие преобразования известного материала</li>
                              <li>Применение методик ТРИЗ (теория решения изобретательских задач)</li>
                              <li>Организация творческих мастерских</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                              <Icon name="Users" className="w-5 h-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">Групповая работа</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Развитие социальных навыков, умения работать в команде, учитывая особенности одаренных детей.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Приемы реализации:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Создание гетерогенных групп с разными ролями</li>
                              <li>Организация групповых проектов</li>
                              <li>Метод "мозгового штурма"</li>
                              <li>Взаимное обучение (peer teaching)</li>
                              <li>Распределение ролей с учетом сильных сторон каждого</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="p-5 bg-primary/5 rounded-lg mt-6">
                        <h3 className="text-lg font-medium mb-4">Дифференцированный подход в обучении</h3>
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            Дифференцированный подход позволяет учитывать индивидуальные особенности одаренных детей,
                            предоставляя им оптимальный уровень сложности и темп обучения.
                          </p>

                          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-medium text-primary mb-2">Обогащение содержания</h4>
                              <p className="text-sm text-gray-700">
                                Расширение и углубление учебного материала, добавление тем, выходящих за
                                рамки стандартной программы, но соответствующих интересам ребенка.
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-medium text-primary mb-2">Ускорение обучения</h4>
                              <p className="text-sm text-gray-700">
                                Возможность освоения учебного материала в более быстром темпе,
                                перескакивание через классы или раннее поступление в школу/вуз.
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="font-medium text-primary mb-2">Индивидуальная траектория</h4>
                              <p className="text-sm text-gray-700">
                                Разработка индивидуального образовательного маршрута с учетом интересов,
                                потребностей и возможностей ребенка.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">Формы организации внеурочной деятельности</h3>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Интеллектуальные клубы и кружки</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Научные общества учащихся</li>
                                <li>Клубы интеллектуальных игр</li>
                                <li>Шахматные кружки</li>
                                <li>Клубы программирования и робототехники</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Творческие объединения</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Литературные студии</li>
                                <li>Художественные мастерские</li>
                                <li>Театральные студии</li>
                                <li>Музыкальные ансамбли</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Олимпиады и конкурсы</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Предметные олимпиады различного уровня</li>
                                <li>Творческие конкурсы</li>
                                <li>Научно-практические конференции</li>
                                <li>Интеллектуальные марафоны</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Проектная деятельность</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Исследовательские проекты</li>
                                <li>Социальные проекты</li>
                                <li>Инженерно-технические проекты</li>
                                <li>Междисциплинарные проекты</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Вкладка рекомендаций */}
                <TabsContent value="recommendations">
                  <Card>
                    <CardHeader>
                      <CardTitle>Практические рекомендации</CardTitle>
                      <CardDescription>
                        Советы для педагогов по организации эффективной работы с одаренными детьми
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Психолого-педагогические рекомендации</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Создание благоприятной психологической атмосферы</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-3 text-gray-700">
                                <p>
                                  Одаренные дети часто испытывают психологический дискомфорт из-за своих особенностей.
                                  Важно создать среду, где ребенок чувствует себя принятым и понятым.
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Принимайте индивидуальность и уникальность каждого ребенка</li>
                                  <li>Поощряйте проявление инициативы и самостоятельности</li>
                                  <li>Создавайте ситуации успеха, но не бойтесь допускать и ошибки</li>
                                  <li>Формируйте положительную самооценку и уверенность в своих силах</li>
                                  <li>Учите детей справляться с неудачами и извлекать из них уроки</li>
                                </ul>
                                <p className="italic text-sm">
                                  Важно: Избегайте чрезмерного давления и завышенных ожиданий от одаренного ребенка,
                                  это может привести к эмоциональному выгоранию и потере интереса.
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Развитие мотивации и интереса</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-3 text-gray-700">
                                <p>
                                  Внутренняя мотивация — ключевой фактор развития одаренности. Задача педагога — 
                                  поддерживать и развивать естественный интерес ребенка.
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Связывайте учебный материал с реальной жизнью и интересами ребенка</li>
                                  <li>Предлагайте открытые задания, имеющие несколько вариантов решения</li>
                                  <li>Создавайте проблемные ситуации, стимулирующие любознательность</li>
                                  <li>Поощряйте инициативу и самостоятельный выбор тем для изучения</li>
                                  <li>Используйте соревновательные элементы, но без излишнего давления</li>
                                </ul>
                                <div className="bg-primary/5 p-3 rounded">
                                  <h4 className="font-medium text-primary mb-1">Пример:</h4>
                                  <p className="text-sm">
                                    Вместо традиционного задания "Решите задачу" предложите: "Придумайте три разных способа решения
                                    этой задачи" или "Создайте свою задачу, используя эти формулы".
                                  </p>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Работа с социальными аспектами одаренности</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-3 text-gray-700">
                                <p>
                                  Одаренные дети часто испытывают трудности в социальной адаптации и общении со сверстниками.
                                  Важно помогать им развивать социальные навыки.
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Обучайте навыкам сотрудничества и работы в команде</li>
                                  <li>Формируйте эмпатию и понимание чувств других людей</li>
                                  <li>Развивайте коммуникативные навыки через ролевые игры и дискуссии</li>
                                  <li>Учите справляться с конфликтными ситуациями</li>
                                  <li>Создавайте возможности для общения с единомышленниками</li>
                                </ul>
                                <p>
                                  В групповой работе давайте одаренным детям разные роли: иногда лидера, иногда 
                                  рядового участника. Это поможет им научиться взаимодействовать с разных позиций.
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="p-5 bg-primary/5 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">Распространенные ошибки в работе с одаренными детьми</h3>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon name="XCircle" className="w-5 h-5 text-red-500" />
                              <h4 className="font-medium">Навешивание ярлыков</h4>
                            </div>
                            <p className="text-sm text-gray-700">
                              Постоянное акцентирование внимания на одаренности ребенка ("наш гений", "вундеркинд")
                              может создавать психологическое давление и формировать завышенные ожидания.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon name="XCircle" className="w-5 h-5 text-red-500" />
                              <h4 className="font-medium">Перегрузка ребенка</h4>
                            </div>
                            <p className="text-sm text-gray-700">
                              Чрезмерное количество дополнительных занятий, кружков и секций может привести
                              к эмоциональному выгоранию и потере интереса к обучению.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon name="XCircle" className="w-5 h-5 text-red-500" />
                              <h4 className="font-medium">Игнорирование эмоциональных потребностей</h4>
                            </div>
                            <p className="text-sm text-gray-700">
                              Фокус только на интеллектуальном развитии в ущерб эмоциональному и социальному
                              развитию может привести к дисгармоничному развитию личности.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon name="XCircle" className="w-5 h-5 text-red-500" />
                              <h4 className="font-medium">Недостаточная сложность заданий</h4>
                            </div>
                            <p className="text-sm text-gray-700">
                              Отсутствие интеллектуальных вызовов приводит к скуке, потере интереса к учебе
                              и формированию привычки не прилагать усилий.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Взаимодействие с родителями</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Эффективная работа с одаренными детьми невозможна без сотрудничества с родителями.
                              Важно выстроить партнерские отношения и объединить усилия.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Рекомендации:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Регулярно информируйте родителей о достижениях и трудностях ребенка</li>
                              <li>Проводите индивидуальные консультации о способах развития одаренности</li>
                              <li>Организуйте семинары и лекции для родителей по вопросам воспитания</li>
                              <li>Привлекайте родителей к участию в проектах и мероприятиях</li>
                              <li>Рекомендуйте дополнительные ресурсы для развития способностей ребенка</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Профессиональное развитие педагога</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 mb-3">
                              Работа с одаренными детьми требует от педагога постоянного профессионального
                              совершенствования и расширения компетенций.
                            </p>
                            <h4 className="font-medium text-sm mb-2">Направления развития:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Изучение современных методик выявления и развития одаренности</li>
                              <li>Освоение инновационных педагогических технологий</li>
                              <li>Развитие навыков дифференцированного обучения</li>
                              <li>Повышение психологической компетентности</li>
                              <li>Участие в профессиональных сообществах и обмен опытом</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="text-lg font-medium mb-3">Полезные ресурсы для работы с одаренными детьми</h3>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Литература</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Богоявленская Д.Б. "Психология творческих способностей"</li>
                                <li>Савенков А.И. "Одаренные дети в детском саду и школе"</li>
                                <li>Фримен Дж. "Обучение одаренных детей в школе"</li>
                                <li>Лейтес Н.С. "Возрастная одаренность и индивидуальные различия"</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Интернет-ресурсы</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Федеральный портал "Одаренные дети"</li>
                                <li>Сайт "Интеллектуально-творческий потенциал России"</li>
                                <li>Образовательная платформа "Сириус"</li>
                                <li>Международное общество по изучению развития одаренности (NAGC)</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">Образовательные платформы</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Khan Academy - видеоуроки по различным предметам</li>
                                <li>Coursera - онлайн-курсы от ведущих университетов</li>
                                <li>Stepik - образовательная платформа и конструктор онлайн-курсов</li>
                                <li>Фоксфорд - онлайн-школа для углубленного изучения предметов</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать полную версию памятки (PDF)
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GiftedChildren;
