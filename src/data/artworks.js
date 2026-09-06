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
//
// PLACEHOLDER PHOTOS: the images below are free-license stock photos
// from Unsplash (unsplash.com), used here only as stand-ins until real
// photos of each artist's actual piece are ready. Credits: Steve A
// Johnson, Paul Blenkhorn, Raymond Petrik, Anne Nygård, Chloe Bolton.
// Replace each "image:" line with your own photo before launch — see
// the README for how.
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
    image: 'https://images.unsplash.com/photo-1536851101967-55988a52f455?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1566807387450-b74aea0e727e?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1552510373-4a5a165dbfb7?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1729625561980-be4546863105?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1589051079002-b140a970f568?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?auto=format&fit=crop&w=1200&q=80',
  },
];
