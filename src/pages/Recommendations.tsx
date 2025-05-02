
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Recommendations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Верхняя секция с заголовком */}
        <section className="py-12 bg-gradient-to-b from-primary/10 to-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Рекомендации по написанию программ
                <br />
                <span className="text-primary mt-2">внеурочной деятельности</span>
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                Методические рекомендации для педагогов, работающих в компенсирующем и 
                коррекционно-развивающем образовании
              </p>
            </div>
          </div>
        </section>

        {/* Основная часть */}
        <section className="py-10">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex justify-between items-center">
                <Link to="/" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                  <Icon name="ArrowLeft" className="w-4 h-4 mr-1" />
                  На главную
                </Link>
                <Button variant="outline" size="sm">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Скачать PDF
                </Button>
              </div>

              <Tabs defaultValue="structure" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="structure">Структура программы</TabsTrigger>
                  <TabsTrigger value="method">Методические рекомендации</TabsTrigger>
                  <TabsTrigger value="examples">Примеры и шаблоны</TabsTrigger>
                </TabsList>
                
                {/* Вкладка структуры программы */}
                <TabsContent value="structure">
                  <Card>
                    <CardHeader>
                      <CardTitle>Структура программы внеурочной деятельности</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-700">
                        Программа внеурочной деятельности должна содержать следующие обязательные 
                        структурные элементы, обеспечивающие её полноту и соответствие нормативным требованиям:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">1</span>
                              </div>
                              Титульный лист
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p>Содержит информацию о:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Полном наименовании образовательного учреждения</li>
                              <li>Названии программы</li>
                              <li>Направлении внеурочной деятельности</li>
                              <li>Сроке реализации</li>
                              <li>Возрасте обучающихся</li>
                              <li>ФИО и должности автора</li>
                              <li>Годе разработки</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">2</span>
                              </div>
                              Пояснительная записка
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p>Включает:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Актуальность и педагогическую целесообразность программы</li>
                              <li>Нормативно-правовую базу</li>
                              <li>Цель и задачи</li>
                              <li>Принципы построения программы</li>
                              <li>Особенности возрастной группы</li>
                              <li>Особенности реализации программы</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">3</span>
                              </div>
                              Результаты освоения
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <p>Описание:</p>
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Личностных результатов</li>
                              <li>Метапредметных результатов</li>
                              <li>Предметных результатов</li>
                              <li>Способов оценки достижения этих результатов</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">4</span>
                              </div>
                              Содержание программы
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Учебно-тематический план (таблица с разделами и часами)</li>
                              <li>Содержание изучаемого курса (описание разделов и тем)</li>
                              <li>Формы организации и виды деятельности учащихся</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">5</span>
                              </div>
                              Организационный раздел
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Календарно-тематическое планирование</li>
                              <li>Материально-техническое обеспечение</li>
                              <li>Учебно-методическое обеспечение</li>
                              <li>Кадровое обеспечение</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <span className="text-primary font-bold">6</span>
                              </div>
                              Информационное обеспечение
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm">
                            <ul className="list-disc ml-5 mt-2 space-y-1">
                              <li>Список литературы для учителя</li>
                              <li>Список литературы для обучающихся</li>
                              <li>Интернет-ресурсы</li>
                              <li>Приложения (диагностические материалы, шаблоны и т.д.)</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Вкладка методических рекомендаций */}
                <TabsContent value="method">
                  <Card>
                    <CardHeader>
                      <CardTitle>Методические рекомендации по разработке</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Основные принципы построения программы</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 text-gray-700">
                              <p>
                                При разработке программы внеурочной деятельности в компенсирующем и 
                                коррекционно-развивающем образовании следует руководствоваться следующими принципами:
                              </p>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Учет индивидуальных особенностей обучающихся</strong> — программа должна 
                                  предусматривать возможность адаптации к особым образовательным потребностям обучающихся,
                                  учитывать их психофизические возможности.
                                </li>
                                <li>
                                  <strong>Коррекционно-развивающая направленность</strong> — включение в содержание 
                                  программы упражнений и заданий, направленных на коррекцию имеющихся нарушений 
                                  и развитие высших психических функций.
                                </li>
                                <li>
                                  <strong>Доступность</strong> — содержание и методы должны соответствовать возрастным 
                                  и психофизическим возможностям обучающихся, быть понятными для восприятия.
                                </li>
                                <li>
                                  <strong>Наглядность</strong> — активное использование различных средств наглядности, 
                                  что повышает эффективность восприятия материала обучающимися с ОВЗ.
                                </li>
                                <li>
                                  <strong>Практическая направленность</strong> — ориентация на формирование практических 
                                  навыков, необходимых в повседневной жизни.
                                </li>
                                <li>
                                  <strong>Комплексный подход</strong> — согласованная работа педагогов, специалистов 
                                  сопровождения и родителей.
                                </li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Формулировка целей и задач программы</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 text-gray-700">
                              <p>
                                Корректная формулировка целей и задач – один из важнейших этапов проектирования 
                                программы внеурочной деятельности:
                              </p>
                              
                              <h4 className="font-semibold text-primary">Рекомендации по формулировке цели:</h4>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Цель должна быть конкретной, достижимой и измеримой</li>
                                <li>Цель должна отражать образовательный, воспитательный и коррекционно-развивающий аспекты</li>
                                <li>В цели следует избегать формулировок "формирование у учащихся...", лучше использовать "создание условий для..."</li>
                              </ul>
                              
                              <h4 className="font-semibold text-primary">Виды задач программы:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Образовательные</strong> — приобретение определенных знаний, умений, навыков.
                                  <p className="italic text-sm mt-1">Пример: обогащать знания о культурном наследии региона</p>
                                </li>
                                <li>
                                  <strong>Воспитательные</strong> — формирование ценностных ориентаций, отношения к себе и окружающему миру.
                                  <p className="italic text-sm mt-1">Пример: воспитывать бережное отношение к природе родного края</p>
                                </li>
                                <li>
                                  <strong>Развивающие</strong> — развитие познавательных процессов, способностей.
                                  <p className="italic text-sm mt-1">Пример: развивать коммуникативные навыки через групповую деятельность</p>
                                </li>
                                <li>
                                  <strong>Коррекционные</strong> — преодоление или ослабление недостатков развития.
                                  <p className="italic text-sm mt-1">Пример: корректировать нарушения внимания через игровые упражнения</p>
                                </li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Особенности проектирования результатов</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 text-gray-700">
                              <p>
                                Результаты освоения программы внеурочной деятельности должны быть описаны конкретно, 
                                реалистично и измеримо. В компенсирующем и коррекционно-развивающем образовании 
                                важно учитывать особенности обучающихся при проектировании результатов.
                              </p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Личностные результаты</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Развитие самооценки</li>
                                      <li>Формирование нравственных ценностей</li>
                                      <li>Развитие мотивации к деятельности</li>
                                      <li>Развитие навыков самоконтроля</li>
                                    </ul>
                                  </CardContent>
                                </Card>
                                
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Метапредметные результаты</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Развитие коммуникативных УУД</li>
                                      <li>Развитие регулятивных УУД</li>
                                      <li>Развитие познавательных УУД</li>
                                      <li>Умение работать с информацией</li>
                                    </ul>
                                  </CardContent>
                                </Card>
                                
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Предметные результаты</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <ul className="list-disc pl-5 space-y-1">
                                      <li>Освоение конкретных знаний</li>
                                      <li>Формирование умений</li>
                                      <li>Развитие навыков в определенной сфере</li>
                                      <li>Практическое применение знаний</li>
                                    </ul>
                                  </CardContent>
                                </Card>
                              </div>
                              
                              <p className="mt-4">
                                <strong>Важно!</strong> При проектировании результатов для обучающихся в системе 
                                компенсирующего и коррекционно-развивающего образования необходимо:
                              </p>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Учитывать диагностируемый уровень развития обучающихся</li>
                                <li>Проектировать результаты с учетом возможности их достижения</li>
                                <li>Предусматривать разные уровни достижения результатов</li>
                                <li>Включать результаты, связанные с коррекцией имеющихся нарушений</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-4">
                          <AccordionTrigger>Разработка содержания программы</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 text-gray-700">
                              <p>
                                Содержание программы должно быть логически выстроено, разделено на разделы и темы, 
                                соответствовать поставленным целям и задачам.
                              </p>
                              
                              <h4 className="font-semibold text-primary">Рекомендации по разработке содержания:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Учебно-тематический план</strong> — представляется в виде таблицы с указанием наименования разделов/тем, 
                                  количества часов на теорию и практику.
                                </li>
                                <li>
                                  <strong>Логика построения содержания</strong> — содержание должно выстраиваться по принципу от простого к сложному, 
                                  учитывать преемственность и взаимосвязь тем.
                                </li>
                                <li>
                                  <strong>Коррекционно-развивающий компонент</strong> — в содержание должны быть интегрированы задания и упражнения, 
                                  направленные на коррекцию имеющихся нарушений.
                                </li>
                                <li>
                                  <strong>Практико-ориентированность</strong> — в содержании должны преобладать практические виды деятельности.
                                </li>
                                <li>
                                  <strong>Разнообразие форм работы</strong> — включение индивидуальных, групповых, коллективных форм работы.
                                </li>
                              </ul>
                              
                              <div className="bg-gray-50 p-4 rounded-md mt-4">
                                <h4 className="font-semibold mb-2">Пример оформления тематического плана:</h4>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full border text-sm">
                                    <thead>
                                      <tr className="bg-gray-100">
                                        <th className="border p-2">№</th>
                                        <th className="border p-2">Наименование раздела/темы</th>
                                        <th className="border p-2">Всего часов</th>
                                        <th className="border p-2">Теория</th>
                                        <th className="border p-2">Практика</th>
                                        <th className="border p-2">Формы контроля</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border p-2">1</td>
                                        <td className="border p-2">Вводное занятие</td>
                                        <td className="border p-2">2</td>
                                        <td className="border p-2">1</td>
                                        <td className="border p-2">1</td>
                                        <td className="border p-2">Опрос</td>
                                      </tr>
                                      <tr>
                                        <td className="border p-2">2</td>
                                        <td className="border p-2">Раздел 1. Название раздела</td>
                                        <td className="border p-2">10</td>
                                        <td className="border p-2">4</td>
                                        <td className="border p-2">6</td>
                                        <td className="border p-2">Творческая работа</td>
                                      </tr>
                                      <tr>
                                        <td className="border p-2 text-right" colSpan={2}>Итого:</td>
                                        <td className="border p-2">12</td>
                                        <td className="border p-2">5</td>
                                        <td className="border p-2">7</td>
                                        <td className="border p-2"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-5">
                          <AccordionTrigger>Специфика программ для компенсирующего и коррекционно-развивающего образования</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 text-gray-700">
                              <p>
                                Программы внеурочной деятельности в системе компенсирующего и коррекционно-развивающего образования 
                                имеют ряд особенностей, которые необходимо учитывать при их разработке:
                              </p>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Коррекционный компонент</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <p>
                                      В программу должны быть включены специальные упражнения и задания, направленные на коррекцию имеющихся 
                                      у обучающихся нарушений. Важно указать коррекционные задачи для каждого раздела/темы программы.
                                    </p>
                                    <p className="mt-2 italic">
                                      Пример: включение упражнений на развитие мелкой моторики, пространственного восприятия, 
                                      коммуникативных навыков и т.д.
                                    </p>
                                  </CardContent>
                                </Card>
                                
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Адаптация содержания</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <p>
                                      Содержание программы должно быть адаптировано с учетом особых образовательных потребностей обучающихся. 
                                      Необходимо предусмотреть возможность упрощения содержания или его дифференциации.
                                    </p>
                                    <p className="mt-2 italic">
                                      Пример: разноуровневые задания, вариативность содержания, дополнительное время на выполнение заданий.
                                    </p>
                                  </CardContent>
                                </Card>
                                
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Специальные приемы и методы</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <p>
                                      В программе должны быть указаны специальные приемы и методы, используемые для повышения 
                                      эффективности коррекционно-развивающей работы.
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                      <li>Наглядное моделирование</li>
                                      <li>Использование алгоритмов</li>
                                      <li>Многократное повторение</li>
                                      <li>Использование опорных схем</li>
                                      <li>Арт-терапевтические методы</li>
                                    </ul>
                                  </CardContent>
                                </Card>
                                
                                <Card className="shadow-sm">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">Комплексное сопровождение</CardTitle>
                                  </CardHeader>
                                  <CardContent className="text-sm">
                                    <p>
                                      Важно предусмотреть взаимодействие различных специалистов (педагога-психолога, 
                                      учителя-логопеда, социального педагога и др.) при реализации программы.
                                    </p>
                                    <p className="mt-2">
                                      В программе следует указать:
                                    </p>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                      <li>Роль каждого специалиста</li>
                                      <li>Формы взаимодействия</li>
                                      <li>Механизмы сопровождения обучающихся</li>
                                    </ul>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Вкладка примеров */}
                <TabsContent value="examples">
                  <Card>
                    <CardHeader>
                      <CardTitle>Примеры и шаблоны документов</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="FileText" className="w-5 h-5 mr-2 text-primary" />
                              Шаблон программы внеурочной деятельности
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Стандартный шаблон для разработки программы внеурочной деятельности 
                              с рекомендациями по заполнению каждого раздела.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать шаблон (.docx)
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="Table" className="w-5 h-5 mr-2 text-primary" />
                              Шаблон учебно-тематического плана
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Табличная форма для составления учебно-тематического плана программы 
                              с примером заполнения.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать таблицу (.xlsx)
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="FileText" className="w-5 h-5 mr-2 text-primary" />
                              Примерная программа художественно-эстетического направления
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Образец программы внеурочной деятельности художественно-эстетического направления 
                              для обучающихся начальных классов.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать пример (.pdf)
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="FileText" className="w-5 h-5 mr-2 text-primary" />
                              Примерная программа спортивно-оздоровительного направления
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Образец программы внеурочной деятельности спортивно-оздоровительного направления 
                              для обучающихся с ОВЗ.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать пример (.pdf)
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="CheckSquare" className="w-5 h-5 mr-2 text-primary" />
                              Критерии оценки программы внеурочной деятельности
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Перечень критериев для самопроверки разработанной программы на соответствие 
                              нормативным требованиям.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать чек-лист (.pdf)
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-sm hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center">
                              <Icon name="BarChart" className="w-5 h-5 mr-2 text-primary" />
                              Диагностические материалы
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="text-sm pb-2">
                            <p className="text-gray-700 mb-4">
                              Подборка диагностических методик для оценки результативности программы 
                              внеурочной деятельности.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Download" className="w-4 h-4 mr-2" />
                              Скачать материалы (.zip)
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/20 p-2 rounded-full">
                            <Icon name="LightbulbIcon" className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Нужна помощь в разработке программы?</h4>
                            <p className="text-gray-700">
                              Вы можете обратиться за индивидуальной консультацией по разработке программы внеурочной деятельности. 
                              Просто заполните форму запроса в разделе "Контакты".
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recommendations;
