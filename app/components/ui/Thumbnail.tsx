"use client"
import Image, { ImageLoaderProps,ImageProps } from "next/image"
import { cn } from "@/lib/utils/classNames";

interface ThumbnailProps extends ImageProps {
    className?: string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const Thumbnail = ({
    className,
    src,
    alt,
    width,
    height,
}: ThumbnailProps) => {
    return (
        <Image
            loader={imageLoader}
            className={cn(className)}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
}

export default Thumbnail;