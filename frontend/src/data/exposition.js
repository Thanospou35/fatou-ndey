import { images } from './images'

export const regions = ['Toutes', 'Dakar', 'Thiés', 'Casamance']
export const categories = ['Toutes', 'Textile', 'Menuiserie', 'Transformation']

export const exhibitors = [
  {
    id: 1,
    title: 'Couture Excellence',
    region: 'Dakar',
    sector: 'Textile',
    image: images.exposition.coutureExcellence,
  },
  {
    id: 2,
    title: 'Art Bois Sénégal',
    region: 'Thiés',
    sector: 'Menuiserie',
    image: images.exposition.artBoisSenegal,
  },
  {
    id: 3,
    title: 'Gie teranga Fruits',
    region: 'Casamance',
    sector: 'Textile',
    image: images.exposition.terangaFruits,
  },
  {
    id: 4,
    title: 'Produits locaux',
    region: 'Casamance',
    sector: 'Transformation',
    image: images.exposition.produitsLocaux,
  },
]

export const carouselSlides = [
  {
    id: 1,
    label: 'Bissap',
    image: images.carousel.bissap,
  },
  {
    id: 2,
    label: 'Ananas',
    image: images.carousel.ananas,
  },
  {
    id: 3,
    label: 'Produits locaux',
    image: images.carousel.produitsLocaux,
  },
]
