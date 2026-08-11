// =====================================================================
// ARTWORK CATALOG
// This is the only file you need to touch to manage your listings.
//
// To ADD a piece: copy one of the objects below, give it a new "id",
// and fill in the details.
//
// To mark something SOLD (after you've handled it with the artist):
// change  sold: false   to   sold: true
// That's it — the site will automatically grey it out and remove
// the buy button next time it's published.
//
// stripeLink: paste the Payment Link URL from your Stripe dashboard.
// Remember to set "Limit the number of payments" to 1 for originals
// (so it can never be bought twice), or to your stock count for prints.
// =====================================================================

export const artworks = [
  {
    id: 'piece-01',
    title: 'Low Tide, Onetangi',
    artist: 'Mere Tane',
    medium: 'Oil on linen',
    type: 'original', // 'original' or 'print'
    size: '760 x 610mm',
    price: 480,
    sold: false,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_01',
    image: '/images/placeholder-1.svg',
  },
  {
    id: 'piece-02',
    title: 'Olive Grove, Late Light',
    artist: 'Mere Tane',
    medium: 'Giclée print, edition of 30',
    type: 'print',
    size: '420 x 594mm',
    price: 95,
    sold: false,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_02',
    image: '/images/placeholder-2.svg',
  },
  {
    id: 'piece-03',
    title: 'Rangitoto from the Ferry',
    artist: 'Aroha Ngata',
    medium: 'Acrylic on board',
    type: 'original',
    size: '900 x 600mm',
    price: 650,
    sold: true,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_03',
    image: '/images/placeholder-3.svg',
  },
  {
    id: 'piece-04',
    title: 'Vineyard Rows',
    artist: 'Sam Whitcombe',
    medium: 'Screen print, edition of 50',
    type: 'print',
    size: '350 x 500mm',
    price: 75,
    sold: false,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_04',
    image: '/images/placeholder-4.svg',
  },
  {
    id: 'piece-05',
    title: 'Blackpool Beach, Dusk',
    artist: 'Aroha Ngata',
    medium: 'Watercolour on paper',
    type: 'original',
    size: '500 x 400mm',
    price: 320,
    sold: false,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_05',
    image: '/images/placeholder-5.svg',
  },
  {
    id: 'piece-06',
    title: 'Man O\u2019War Bay Ceramics Study',
    artist: 'Sam Whitcombe',
    medium: 'Ink and gouache',
    type: 'original',
    size: '297 x 420mm',
    price: 240,
    sold: false,
    stripeLink: 'https://buy.stripe.com/REPLACE_ME_06',
    image: '/images/placeholder-6.svg',
  },
];
