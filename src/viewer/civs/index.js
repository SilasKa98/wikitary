// Every civilisation is one self-contained module; adding a world means adding a file here
// and its id to CIV_IDS in src/core/pipeline.mjs.
import terra from './terra.js';
import vektor from './vektor.js';
import ignis from './ignis.js';
import prisma from './prisma.js';
import myzel from './myzel.js';
import auris from './auris.js';
import thalassa from './thalassa.js';
import kronos from './kronos.js';
import sylva from './sylva.js';

export const CIVS = { terra, vektor, ignis, prisma, myzel, auris, thalassa, kronos, sylva };
