import Image from 'next/image';
import type { PropsWithProduct } from '@/types/product';
import { Rating } from '@/components/Rating';
import { Detail } from '@/components/Detail';
import {StyledContainer,StyledDetails,StyledImageContainer,StyledTitle} from './Card.styled'

function CardDetails({product}: PropsWithProduct) {
	return (
		<StyledDetails.Small>
			<StyledTitle.Small>{product.title}</StyledTitle.Small>
			<Detail label='Price' highlight>$ {product.price.toFixed(2)}</Detail>
			<Detail label='Rating' noText>
				<Rating value={product.rating} />
			</Detail>
			<Detail label='Discount'>{product.discountPercentage} %</Detail>
			<Detail label='Stock'>{product.stock} units</Detail>
			<Detail label='Brand'>{product.brand}</Detail>
			<Detail label='Category'>{product.category}</Detail>
		</StyledDetails.Small>
	);
}

export function Card({product}: PropsWithProduct) {
	return (
		<StyledContainer.Small href={`products/${product.id}`}>
			<StyledImageContainer.Small>
				<Image src={product.thumbnail} alt={`product ${product.title} image`} fill />
			</StyledImageContainer.Small>
			<CardDetails product={product} />
		</StyledContainer.Small>
	);
}

export function SkeletonCard() {
	return (
		<StyledContainer.Small href={`products`}>
		</StyledContainer.Small>
	);
}