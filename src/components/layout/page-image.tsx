import Image from "next/image";

type PageImageProps = { src: string; alt: string; className?: string };

export function PageImage({ src, alt, className = "" }: PageImageProps) {
  return <div className={`academy-page-image ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" /></div>;
}
