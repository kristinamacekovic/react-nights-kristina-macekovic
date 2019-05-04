import React, { FC } from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import { Link } from 'react-router-dom'

import * as routes from '../../routes'
import { List, ListItem } from './styled'
import { SizeSelect } from './SizeSelect'

const renderPaginationItem = (size: string) => (number: number) => (
  <ListItem key={number}>
    <Link to={`${routes.PRODUCT_LIST}?page=${number}&size=${size}`}>
      {number}
    </Link>
  </ListItem>
)

export type PaginationProps = {
  pages: number
  size: string
  onSizeChange(): void
}

export const Pagination: FC<PaginationProps> = ({
  pages,
  size,
  onSizeChange,
}) => (
  <>
    <List>{map(renderPaginationItem(size), range(1, pages + 1))}</List>
    <SizeSelect onChange={onSizeChange} value={size} />
  </>
)
