# The Makers Collective — site guide

This is a plain-English guide to the two things you'll actually do yourself:
adding artwork, and marking a piece sold. Everything else (design, layout)
is already built.

## Adding or editing artwork

Open the file: `src/data/artworks.js`

Each artwork is a block that looks like this:

```
{
  id: 'piece-01',
  title: 'Low Tide, Onetangi',
  artist: 'Mere Tane',
  medium: 'Oil on linen',
  type: 'original',
  size: '760 x 610mm',
  price: 480,
  sold: false,
  stripeLink: 'https://buy.stripe.com/REPLACE_ME_01',
  image: '/images/placeholder-1.svg',
}
```

To add a new piece: copy one whole block (including the `{` and `}`),
paste it at the end of the list, give it a new `id`, and change the details.

To mark a piece sold: change `sold: false` to `sold: true`. Save the file.
That's the entire process — no other edits needed.

## Adding real photos

Product photos go in the `public/images` folder. Upload your photo there,
then update that artwork's `image:` line to point to it, e.g.
`image: '/images/low-tide-onetangi.jpg'`.

## Setting up a Stripe Payment Link (do this once per artwork)

1. In your Stripe Dashboard, go to Payment Links → create a new link.
2. Add the artwork as a product with its price.
3. Turn on **"Limit the number of payments"**:
   - For an original (one-of-a-kind): set it to **1**.
   - For a print: set it to your edition size (e.g. 30).
4. Copy the link Stripe gives you and paste it into that artwork's
   `stripeLink:` field in `artworks.js`.

This guarantees the same piece can never be bought twice, even if two
people click "buy" at the same moment.

## Publishing changes

Once your GitHub and Vercel accounts are connected (see the chat for those
steps), any time you save a change to `artworks.js` and upload it to
GitHub, Vercel automatically rebuilds and publishes the live site within
a minute or two — no separate "publish" button needed.
