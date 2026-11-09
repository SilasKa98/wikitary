// Writes examples/demo-wiki: a small original LLM wiki about bread. It exists to exercise every
// shape a real wiki takes: nested folders, frontmatter, Obsidian links and plain Markdown links,
// a deliberately dead link, an orphan page, an index and a log.
import { mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'examples', 'demo-wiki');

const page = (title, { tags = [], summary, updated = '2026-10-02', body }) => `---
title: ${title}
tags: [${tags.join(', ')}]
updated: ${updated}
---

# ${title}

**Summary**: ${summary}

${body.trim()}
`;

const files = {
  'index.md': `# The Bread Wiki

A compiled knowledge base on how bread works, from microbes to markets.

## Science

- [[yeast]]: the organism that raises bread
- [[fermentation]]: what happens while dough rests
- [[gluten]]: the protein network that holds gas
- [[maillard-reaction]]: where crust flavour comes from
- [[starch-gelatinisation]]: why crumb sets in the oven

## Technique

- [[sourdough-starter]]: keeping a wild culture alive
- [[autolyse]]: resting flour and water first
- [[kneading]]: building structure by hand or machine
- [[stretch-and-fold]]: building structure with time instead
- [[proofing]]: judging when dough is ready
- [[scoring]]: controlling where the loaf opens
- [[baking-with-steam]]: keeping the crust soft for longer

## Breads

- [[sourdough-loaf]], [[baguette]], [[ciabatta]], [[rye-bread]], [[flatbreads]]

## History and culture

- [[ancient-egypt]]: the earliest leavened loaves
- [[bread-guilds]]: how medieval bakers organised
- [[chorleywood-process]]: the industrial turn
- [[bread-and-politics]]: price, riots and policy

## Log

See [[log]].
`,
  'log.md': `# Log

## 2026-10-02: Ingested two books on rye

Added [[rye-bread]] and expanded [[fermentation]].

## 2026-09-14: First compile

Created the initial structure from the raw notes.
`,
  'science/yeast.md': page('Yeast', {
    tags: ['microbiology'],
    summary: 'Saccharomyces cerevisiae turns sugars into carbon dioxide and ethanol, and this is what makes dough rise.',
    body: `Baker's yeast is a single-celled fungus. During [[fermentation]] it consumes simple sugars released from flour by enzymes.

## Commercial yeast

Instant and active dry yeast are highly selected strains, which act faster than the mixed culture of a [[sourdough-starter]].

## Temperature

Activity roughly doubles every 8 °C up to about 35 °C. This is why [[proofing]] is so sensitive to room temperature.

## Wild yeast

Wild strains live on grain and in the air. See [the starter page](../technique/sourdough-starter.md).`,
  }),
  'science/fermentation.md': page('Fermentation', {
    tags: ['microbiology', 'chemistry'],
    summary: 'Microbes convert sugars into gas, acids and aroma while the dough rests.',
    body: `Fermentation does three things at once: it produces gas, develops flavour and changes dough strength.

## Gas production

[[Yeast]] produces the carbon dioxide trapped by [[gluten]].

## Acid production

Lactic acid bacteria dominate in a [[sourdough-starter]] and give a [[sourdough-loaf]] its tang. They also matter a great deal in [[rye-bread]], where acidity tames enzymes.

## Bulk and final

The first rise builds flavour; the second is [[proofing]]. Long cold fermentation is described in [[retarding-dough]], which has not been written yet.`,
  }),
  'science/gluten.md': page('Gluten', {
    tags: ['chemistry', 'protein'],
    summary: 'Glutenin and gliadin hydrate to form the elastic network that traps gas.',
    body: `Gluten is not present in dry flour. It forms when water meets glutenin and gliadin.

## Development

Structure is developed by [[kneading]] or by [[stretch-and-fold]], and starts on its own during [[autolyse]].

## Strength and extensibility

Glutenin gives elasticity, gliadin gives extensibility. A [[baguette]] needs extensibility; a tin loaf needs strength.

## Low-gluten grains

Rye forms little gluten, which is why [[rye-bread]] relies on pentosans instead.`,
  }),
  'science/maillard-reaction.md': page('Maillard reaction', {
    tags: ['chemistry', 'flavour'],
    summary: 'Sugars and amino acids react above about 140 °C, producing crust colour and most of its flavour.',
    body: `The Maillard reaction is why crust tastes unlike crumb.

## Conditions

It needs a dry surface, so it begins only after [[baking-with-steam|the steam phase]] ends.

## Residual sugar

Long [[fermentation]] leaves less sugar, unless enzymes keep producing it. A pale crust usually signals over-fermentation.`,
  }),
  'science/starch-gelatinisation.md': page('Starch gelatinisation', {
    tags: ['chemistry'],
    summary: 'Starch granules absorb water and swell between 60 and 80 °C, setting the crumb.',
    body: `As the loaf heats, starch takes water from [[gluten]] and sets into crumb.

## Staling

Staling is the slow recrystallisation of starch. Acidic loaves such as a [[sourdough-loaf]] stale more slowly.

## Oven spring

Spring ends when the structure sets, which is why [[baking-with-steam]] and [[scoring]] have to work early.`,
  }),
  'technique/sourdough-starter.md': page('Sourdough starter', {
    tags: ['culture'],
    summary: 'A stable community of wild yeast and lactic acid bacteria, kept alive by regular feeding.',
    body: `A starter is a small ecosystem. It relies on the same chemistry as any [[fermentation]], with far more species.

## Feeding

Regular feeding keeps acidity in check. Whole grain flour feeds it faster.

## Use

It leavens a [[sourdough-loaf]] and most traditional [[rye-bread]]. Commercial [[yeast]] gives more predictable timing but less flavour.`,
  }),
  'technique/autolyse.md': page('Autolyse', {
    tags: ['mixing'],
    summary: 'Resting flour and water before adding salt or leaven, so gluten develops with little work.',
    body: `Autolyse gives enzymes time to act and water time to hydrate, starting [[gluten]] development without [[kneading]].

## Timing

Twenty minutes to an hour is typical. It pairs well with [[stretch-and-fold]].`,
  }),
  'technique/kneading.md': page('Kneading', {
    tags: ['mixing'],
    summary: 'Mechanical work that aligns gluten into a strong, smooth network.',
    body: `Kneading is the fast route to [[gluten]] structure.

## By hand

Hand kneading is limited by hydration. Very wet doughs such as [[ciabatta]] need [[stretch-and-fold]].

## By machine

High-speed mixing made the [[chorleywood-process]] possible.`,
  }),
  'technique/stretch-and-fold.md': page('Stretch and fold', {
    tags: ['mixing'],
    summary: 'Gentle folds during bulk fermentation build strength in wet dough.',
    body: `Folding trades effort for time. It is the usual way to develop [[gluten]] in a [[sourdough-loaf]] or [[ciabatta]], usually after an [[autolyse]].

## Frequency

Three or four sets during the first half of [[fermentation]] are typical.`,
  }),
  'technique/proofing.md': page('Proofing', {
    tags: ['timing'],
    summary: 'The final rise, judged by feel more than by the clock.',
    body: `Proofing is the last stage of [[fermentation]], after shaping.

## The poke test

A floured finger leaves a dent that slowly springs back when the dough is ready.

## Effects

Under-proofed loaves burst unevenly; over-proofed ones collapse when [[scoring|scored]]. [[Yeast]] activity depends strongly on temperature.`,
  }),
  'technique/scoring.md': page('Scoring', {
    tags: ['shaping'],
    summary: 'A shallow cut that decides where a loaf expands in the oven.',
    body: `Scoring directs oven spring. The classic ear on a [[baguette]] comes from a shallow, angled cut.

## Timing

It only works if [[proofing]] is right and the surface stays flexible, which is what [[baking-with-steam]] is for.`,
  }),
  'technique/baking-with-steam.md': page('Baking with steam', {
    tags: ['oven'],
    summary: 'Humidity in the first minutes keeps the crust soft and gives a glossy finish.',
    body: `Steam delays crust formation, so the loaf can expand further.

## Gloss

Condensed water gelatinises surface starch; see [[starch-gelatinisation]]. Colour then develops through the [[maillard-reaction]].

## At home

A covered pot traps the moisture from the dough itself and works well for a [[sourdough-loaf]].`,
  }),
  'breads/sourdough-loaf.md': page('Sourdough loaf', {
    tags: ['bread', 'wheat'],
    summary: 'A naturally leavened wheat loaf with an open crumb and a tangy flavour.',
    body: `The modern country loaf combines a [[sourdough-starter]], long [[fermentation]] and [[stretch-and-fold]].

## Method

1. [[Autolyse]] flour and water.
2. Add the leaven and salt, then fold during bulk.
3. Shape, complete [[proofing]] cold overnight.
4. Apply [[scoring]] and bake in a covered pot; see [[baking-with-steam]].

## Keeping

Acidity slows [[starch-gelatinisation|starch staling]].`,
  }),
  'breads/baguette.md': page('Baguette', {
    tags: ['bread', 'wheat', 'france'],
    summary: 'A long, thin French wheat loaf with a crackling crust.',
    body: `Its shape maximises crust. It depends on extensible [[gluten]] and very precise [[scoring]].

## Regulation

The French *décret pain* of 1993 protects the traditional recipe, a late echo of [[bread-and-politics]].

## Baking

Good colour needs strong [[baking-with-steam|steam]] followed by the [[maillard-reaction]].`,
  }),
  'breads/ciabatta.md': page('Ciabatta', {
    tags: ['bread', 'wheat', 'italy'],
    summary: 'A very wet Italian loaf with a wide, irregular crumb.',
    body: `Created in 1982 as a response to the baguette's popularity, it uses a high hydration that rules out [[kneading]] by hand.

## Structure

It is built by [[stretch-and-fold]] and a pre-ferment; see [[fermentation]].`,
  }),
  'breads/rye-bread.md': page('Rye bread', {
    tags: ['bread', 'rye'],
    summary: 'Dense, moist loaves from a grain that forms little gluten and needs acidity.',
    body: `Rye behaves differently from wheat. It forms little [[gluten]], and its active enzymes would turn the crumb gummy without the acidity of a [[sourdough-starter]].

## Fermentation

Rye sours are usually kept warmer and wetter; see [[fermentation]].

## Resting

Rye should rest for a day after baking, as [[starch-gelatinisation]] finishes settling.`,
  }),
  'breads/flatbreads.md': page('Flatbreads', {
    tags: ['bread'],
    summary: 'The oldest breads of all, baked quickly at very high heat.',
    body: `Flatbreads predate leavening, and archaeological evidence for them is older than agriculture. Their later leavened forms link to [[ancient-egypt]].

## Heat

Very high temperatures produce steam inside the dough and a strong [[maillard-reaction]] within a minute.`,
  }),
  'history/ancient-egypt.md': page('Ancient Egypt', {
    tags: ['history'],
    summary: 'Where tomb evidence shows leavened bread and brewing on an organised, near-industrial scale.',
    body: `Egyptian tomb models show bakeries beside breweries. Wild [[yeast]] was likely shared between them, a precursor to [[sourdough-starter|kept cultures]].

## Bread as wages

Workers were partly paid in bread and beer, tying grain directly to the state, an early case of [[bread-and-politics]].

## Earlier breads

[[Flatbreads]] came long before.`,
  }),
  'history/bread-guilds.md': page('Bread guilds', {
    tags: ['history', 'europe'],
    summary: 'Medieval bakers organised to control quality, prices and entry to the trade.',
    body: `Guilds fixed weights and punished short measure. The price rules made them central to [[bread-and-politics]].

## Specialisation

Separate guilds often covered white and dark bread; [[rye-bread]] was the staple across northern Europe.

## End of the guilds

Their power faded long before the [[chorleywood-process]] industrialised baking.`,
  }),
  'history/chorleywood-process.md': page('Chorleywood process', {
    tags: ['history', 'industry'],
    summary: 'Developed in 1961, it replaced long fermentation with intense mechanical work.',
    body: `High-speed mixing does in minutes what long [[fermentation]] does in hours, and allows lower-protein flour.

## Consequences

It uses intense [[kneading]] and additional [[yeast]]. Today it accounts for most British sliced bread, and critics link it to the loss of flavour that drove the revival of the [[sourdough-loaf]].`,
  }),
  'history/bread-and-politics.md': page('Bread and politics', {
    tags: ['history', 'policy'],
    summary: 'From Roman grain doles to modern subsidies, bread prices have repeatedly toppled governments.',
    body: `Bread has long been the most political food. Its price set the mood of cities.

## Riots

Bread riots recur throughout European history, and shortages preceded the French Revolution.

## Regulation

[[Bread guilds]] fixed prices long before states did, and France still regulates the [[baguette]].`,
  }),
  'notes/old-oven-notes.md': page('Old oven notes', {
    tags: ['draft'],
    summary: 'Unsorted notes on masonry ovens. Nothing links here yet, so it drifts in the asteroid belt.',
    body: `Masonry ovens hold heat in the mass of the dome and bake on falling temperature. To be merged someday.`,
  }),
};

await rm(root, { recursive: true, force: true });
for (const [rel, content] of Object.entries(files)) {
  const abs = path.join(root, rel);
  await mkdir(path.dirname(abs), { recursive: true });
  await writeFile(abs, content);
}
console.log(`Wrote ${Object.keys(files).length} pages to ${root}`);
