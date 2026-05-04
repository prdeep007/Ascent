import Image from 'next/image';

export function MediaFrame({ src, alt, aspectRatio, priority, objectFit='cover', cloudinaryTransform }: {src:string;alt:string;aspectRatio:'16/9'|'4/3'|'3/2'|'1/1'|'21/9';priority?:boolean;blurhash?:string;objectFit?:'cover'|'contain';cloudinaryTransform?:string;}) {
  const finalSrc = cloudinaryTransform ? `${src}${src.includes('?') ? '&' : '?'}${cloudinaryTransform}` : src;
  return <div style={{ position:'relative', aspectRatio }}><Image src={finalSrc} alt={alt} fill priority={priority} sizes='100vw' style={{ objectFit }} /></div>;
}
