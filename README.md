# PoleProof

PoleProof is a static Hack Michigan DTE challenge demo for utility pole prioritization.

It turns pole-level risk evidence into crew-ready work packets and defensible receipts: each selected pole shows why it was prioritized, what a crew should do next, what public layers support the decision, and how DTE inspection/outage/work-order data would validate it in production.

## Live Demo

https://pole-proof.vercel.app

## Demo Path

1. Open the app.
2. Review the Wayne County public proof slice.
3. Open the top ranked receipt.
4. Show the public-data badge, scoring formula, validation plan, and exportable crew packet.

## What Is Real vs Demo

- Statewide pole inventory is deterministic synthetic demo coverage.
- Wayne County includes a real public-data proof slice: NOAA storm history, FEMA flood risk, USDA soil/drainage, USGS elevation/slope, public imagery references, and OSM/open map infrastructure context.
- DTE asset IDs, inspection outcomes, outage history, and work orders are not included. The app shows where those private layers plug into the receipt pipeline.

## Run Locally

```sh
npm start
```

Open `http://127.0.0.1:4173/`.

## Verify

```sh
npm test
```

The smoke test checks the app shell, Wayne proof slice, receipt workflow, exports, and removed WebGL/Street View dependencies.

## Deployment

This repo is Vercel-ready as a dependency-free static site. The production entry point is `index.html`.

## License

MIT
