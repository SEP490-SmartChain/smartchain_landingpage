"use client";

import { useEffect, useRef } from "react";
import { Edit3 } from "lucide-react";

interface PdfPageProps {
  pdfDoc: any;
  pageNumber: number;
  scale: number;
  showSignatureBox?: boolean;
  onVisible: (pageNum: number) => void;
}

export function PdfPage({ 
  pdfDoc, 
  pageNumber, 
  scale, 
  showSignatureBox,
  onVisible
}: PdfPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderTask: any = null;
    let isMounted = true;

    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current) return;

      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (!isMounted) return;

        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        renderTask = page.render({
          canvasContext: context,
          viewport: viewport
        });
        
        await renderTask.promise;
      } catch (e: any) {
        if (e?.name !== "RenderingCancelledException") {
           console.error(`Error rendering page ${pageNumber}:`, e);
        }
      }
    };

    renderPage();

    return () => {
      isMounted = false;
      if (renderTask) renderTask.cancel();
    }
  }, [pdfDoc, pageNumber, scale]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible(pageNumber);
          }
        });
      },
      {
        threshold: 0.4, // Update when 40% of page is visible in viewport
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [pageNumber, onVisible]);

  return (
    <div 
      id={`viewer-page-${pageNumber}`}
      ref={containerRef}
      style={{ position: "relative", marginBottom: "2rem" }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ display: "block", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", backgroundColor: "white" }}
      />
      {showSignatureBox && (
        <div className="absolute bottom-32 right-16 bg-amber-100 border border-dashed border-amber-600 px-8 py-6 flex items-center gap-4 cursor-pointer transition-colors duration-200 w-[320px] hover:bg-amber-200">
          <Edit3 className="text-amber-600" size={28} />
          <div>
            <div className="text-base font-bold text-amber-900 mb-1">Vị trí đặt chữ ký</div>
            <div className="text-xs text-amber-700">Click ở vị trí mới để thay đổi</div>
          </div>
        </div>
      )}
    </div>
  );
}
