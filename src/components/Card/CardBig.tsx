import Image from 'next/image';
import type { PropsWithProduct } from '@/types/product';
import { ExitButton } from '@/components/ExitButton';
import { BackButton } from '@/components/BackButton';
import { Rating } from '@/components/Rating';
import { Info } from '@/components/Info';
import { Detail } from '@/components/Detail';
import {StyledContainer,StyledDetails,StyledImageContainer,StyledTitle,StyledDescription} from './Card.styled'

export function CardBig({product}: PropsWithProduct) {
	return (
		<StyledContainer.Big>
			<StyledImageContainer.Big>
				<Image src={product.thumbnail} alt={`product ${product.title} image`} fill />
			</StyledImageContainer.Big>
			<ExitButton />
			<StyledDetails.Big>
				<StyledTitle.Big>{product.title}</StyledTitle.Big>
				<Detail label='Price'>$ {product.price.toFixed(2)}</Detail>
				<Detail label='Rating' noText>
					<Rating value={product.rating} />
				</Detail>
				<Detail label='Discount'>{product.discountPercentage} %</Detail>
				<Detail label='Stock'>{product.stock} units</Detail>
				<Detail label='Brand'>{product.brand}</Detail>
				<Detail label='Category'>{product.category}</Detail>
				<StyledDescription>
					{product.description}
				</StyledDescription>
			</StyledDetails.Big>
			<BackButton />
		</StyledContainer.Big>
	);
}

export function SkeletonCardFocused() {
	return (
		<StyledContainer.Big>
			<ExitButton />
			<BackButton />
		</StyledContainer.Big>
	);
}