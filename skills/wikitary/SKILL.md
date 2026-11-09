---
name: wikitary
description: Visualise this LLM wiki as a living solar system, and tune how its topics map onto planets. Use when the user wants to see, explore, present or export the wiki visually, or asks to rename planets or change how pages are clustered.
---

# Wikitary

Wikitary renders this wiki as a solar system: each topic cluster is a planet with its own civilisation, each page a landmark, each link a road, flight route or starship line.

## Commands

```bash
npx wikitary            # open the viewer; it live-reloads when pages change
npx wikitary inspect    # print which pages live on which planet
npx wikitary build      # write a self-contained wikitary.html
```

Pass `--wiki <folder>` if the wiki is not in `./wiki` or the current folder.

## Improving the map

Automatic clusters are often good but their names are guesses. You have read the wiki, so you can do better:

1. Run `npx wikitary inspect` and read the clusters.
2. Edit `wikitary.config.json`. Keys under `planets` are the names `inspect` printed:

```json
{
  "title": "Name of this wiki",
  "planets": {
    "Name From Inspect": { "name": "A Better Name", "civ": "prisma" }
  },
  "assign": { "path/to/page.md": "A cluster name" },
  "cluster": { "mode": "auto", "count": 6 }
}
```

3. Run `inspect` again to confirm the result.

Civilisations: `terra` (humans), `vektor` (machines), `ignis` (forges), `prisma` (crystal), `myzel` (fungal), `auris` (desert), `thalassa` (ocean), `kronos` (clockwork), `sylva` (forest). Match them to the character of a topic where you can.

Expeditions are guided tours readers can take through the wiki. Wikitary offers some on its own, but a good one needs someone who has read the pages, so add them when you know a sensible reading order:

```json
{
  "expeditions": [
    {
      "title": "Where to start",
      "description": "The five pages a newcomer should read first",
      "stops": [
        { "page": "overview", "note": "One sentence on why this stop matters." },
        "concepts/some-page.md"
      ]
    }
  ]
}
```

Stops resolve the way wiki links do. `inspect` reports any it cannot find.

The reader recognises a few habits, so pages written this way read better without any configuration:

- Open a page with `**Summary**: one or two sentences`. It becomes the first thing a reader sees, and every link preview shows it.
- Cite mid-sentence as `(Source: file.pdf; other.md)`. These become footnote marks and a list of sources.
- Set notes apart with `> **Note:** …` or `> [!warning] …`. They become plaques.
- Divide long pages with `##` headings. Each becomes a district that folds and has its own building, and readers can see how long each one takes.

Cluster modes: `auto` uses links, text similarity, index headings and topic-named folders; `graph` ignores folders; `folders` makes each top-level folder a planet; `frontmatter` uses a `planet:` or `cluster:` field on each page. In every other mode, a page with `planet:` or an entry in `assign` still moves to the planet it names (generated name or renamed name; an unknown name founds a new planet), so a single misplaced page can be fixed without switching modes.

## What the map reveals about wiki health

- **Asteroids** are orphan pages. Link them from somewhere relevant.
- **Construction sites** are dead links. Write the page, or fix the link.
- **A planet with almost no interplanetary traffic** is an isolated topic; look for missing cross-references.
- **City size** follows how linked and how long a page is. `inspect` marks it from `·` (hamlet) to `█████` (metropolis). A page you consider central that shows up as a hamlet is probably under-linked.
- **Tower cranes** mark pages that are new or changed since the reader's last visit, so what you just wrote is easy to find.

Mention these when you lint the wiki. `npx wikitary inspect` lists the asteroids and construction sites.
