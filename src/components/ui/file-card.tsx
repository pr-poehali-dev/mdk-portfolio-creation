
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface FileProps {
  id: string;
  title: string;
  description: string;
  fileType: "pdf" | "doc" | "ppt" | "xls" | "img" | "other";
  downloadUrl?: string;
  date?: string;
  size?: string;
}

const fileIcons = {
  pdf: "FileText",
  doc: "FileText",
  ppt: "BarChart",
  xls: "Table",
  img: "Image",
  other: "File"
};

export function FileCard({ file }: { file: FileProps }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
          <Icon 
            name={fileIcons[file.fileType]} 
            className="w-6 h-6 text-primary" 
          />
        </div>
        <CardTitle className="text-lg">{file.title}</CardTitle>
        {file.date && <CardDescription>{file.date}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">{file.description}</p>
        {file.size && (
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Icon name="HardDrive" className="w-3 h-3 mr-1" />
            {file.size}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          disabled={!file.downloadUrl}
          asChild={!!file.downloadUrl}
        >
          {file.downloadUrl ? (
            <a href={file.downloadUrl} download>
              <Icon name="Download" className="w-4 h-4 mr-2" />
              Скачать
            </a>
          ) : (
            <>
              <Icon name="Clock" className="w-4 h-4 mr-2" />
              Скоро
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
