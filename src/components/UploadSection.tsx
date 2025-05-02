
import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const UploadSection = () => {
  const [fileName, setFileName] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Имитация процесса загрузки
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      
      // Сбросить сообщение через 3 секунды
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="upload" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Загрузите свои материалы</h2>
          <p className="text-lg text-gray-600">
            Поделитесь вашими методическими разработками и опытом с коллегами
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Название материала</Label>
                  <Input 
                    id="title" 
                    placeholder="Введите название вашего методического материала" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Описание</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Опишите ваш материал (назначение, для кого предназначен и т.д.)" 
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Категория</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="method">Методические рекомендации</SelectItem>
                      <SelectItem value="program">Рабочие программы</SelectItem>
                      <SelectItem value="didactic">Дидактические материалы</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file">Файл для загрузки</Label>
                  <div className="flex items-center gap-4">
                    <Input 
                      id="file" 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById("file")?.click()}
                      className="w-full"
                    >
                      <Icon name="Upload" className="w-4 h-4 mr-2" />
                      Выбрать файл
                    </Button>
                    {fileName && (
                      <div className="text-sm text-gray-600 truncate max-w-[200px]">
                        {fileName}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" disabled={isUploading}>
                    {isUploading ? (
                      <>
                        <Icon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                        Загрузка...
                      </>
                    ) : (
                      <>
                        <Icon name="Upload" className="w-4 h-4 mr-2" />
                        Загрузить материал
                      </>
                    )}
                  </Button>
                </div>
                
                {uploadSuccess && (
                  <div className="p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                    <Icon name="CheckCircle" className="w-5 h-5 mr-2" />
                    Материал успешно загружен и будет доступен после проверки модератором.
                  </div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UploadSection;
