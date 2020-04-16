# Lighthouse

The budget is set as a single 'score', from `0` to `1`, which is calculated as a weighted average of several different audits that Lighthouse performs.

We currently use Lighthouse 5, and can see details on the weighted averages it uses in the [Lighthouse 5 performance docs](https://web.dev/performance-scoring/#lighthouse-5).

## Running Lighthouse locally

Be aware Lighthouse results will be better on your local machine versus other sources as your laptop is more powerful. 

To run locally first start up the docs site locally

```js
npm start
```

then once the docs site is up and running, run the lighthouse command to analyse the docs site

```js
npm run lighthouse
```
