import Image from "next/image";
import type { PropsWithProduct } from "@/types/product";
import { ExitButton } from "@/components/ExitButton";
import { BackButton } from "@/components/BackButton";
import { Rating } from "@/components/Rating";
import { Info } from "@/components/Info";
import { Detail } from "@/components/Detail";
import {
  StyledContainer,
  StyledDetails,
  StyledImageContainer,
  StyledTitle,
  StyledDescription,
} from "./Card.styled";
import Skeleton from "react-loading-skeleton";

export function CardBig({ product }: PropsWithProduct) {
  return (
    <StyledContainer.Big>
      <StyledImageContainer.Big>
        <Image
          src={product.thumbnail}
          alt={`product ${product.title} image`}
          fill
        />
      </StyledImageContainer.Big>
      <ExitButton />
      <StyledDetails.Big>
        <StyledTitle.Big>{product.title}</StyledTitle.Big>
        <Detail label="Price">$ {product.price.toFixed(2)}</Detail>
        <Detail label="Rating" noText>
          <Rating value={product.rating} />
        </Detail>
        <Detail label="Discount">{product.discountPercentage} %</Detail>
        <Detail label="Stock">{product.stock} units</Detail>
        <Detail label="Brand">{product.brand}</Detail>
        <Detail label="Category">{product.category}</Detail>
        <StyledDescription>{product.description}</StyledDescription>
      </StyledDetails.Big>
      <BackButton />
    </StyledContainer.Big>
  );
}

export function SkeletonCardBig() {
  return (
    <StyledContainer.Big>
      <StyledImageContainer.Big>
        <Skeleton height={"100%"} />
      </StyledImageContainer.Big>
      <ExitButton />
      <StyledDetails.Big>
        <StyledTitle.Big>
          <Skeleton />
        </StyledTitle.Big>
        <Detail label="Price" noText>
          <Skeleton />
        </Detail>
        <Detail label="Rating" noText>
          <Skeleton />
        </Detail>
        <Detail label="Discount" noText>
          <Skeleton />
        </Detail>
        <Detail label="Stock" noText>
          <Skeleton />
        </Detail>
        <Detail label="Brand" noText>
          <Skeleton />
        </Detail>
        <Detail label="Category" noText>
          <Skeleton />
        </Detail>
        <StyledDescription>
          <Skeleton count={3} />
        </StyledDescription>
      </StyledDetails.Big>
      <BackButton />
    </StyledContainer.Big>
  );
}
