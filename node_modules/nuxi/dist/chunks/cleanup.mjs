import { c as cleanupNuxtDirs } from '../shared/nuxi.4e0a1a70.mjs';
import { d as defineCommand } from '../shared/nuxi.a9f3bca7.mjs';
import { s as sharedArgs, l as legacyRootDirArgs, r as resolve } from '../shared/nuxi.a0d06cf3.mjs';
import { l as loadKit } from '../shared/nuxi.6740d53b.mjs';
import 'node:fs';
import 'node:util';
import 'node:path';
import 'node:process';
import 'node:tty';
import '../shared/nuxi.108cb1ad.mjs';
import 'node:url';
import '../shared/nuxi.4f212502.mjs';
import 'node:module';
import '../shared/nuxi.ad2c9e3f.mjs';
import 'node:assert';
import 'node:v8';
import 'node:perf_hooks';
import '../shared/nuxi.eaa29140.mjs';
import './satisfies.mjs';
import '../shared/nuxi.2155838d.mjs';
import '../shared/nuxi.cc8dd4a9.mjs';
import '../shared/nuxi.73800aa7.mjs';
import 'crypto';
import 'fs';
import 'module';
import 'path';
import 'perf_hooks';
import 'os';
import 'vm';
import 'url';
import 'assert';
import 'process';
import 'v8';
import 'util';
import 'tty';

const cleanup = defineCommand({
  meta: {
    name: "cleanup",
    description: "Cleanup generated nuxt files and caches"
  },
  args: {
    ...sharedArgs,
    ...legacyRootDirArgs
  },
  async run(ctx) {
    const cwd = resolve(ctx.args.cwd || ctx.args.rootDir || ".");
    const { loadNuxtConfig } = await loadKit(cwd);
    const nuxtOptions = await loadNuxtConfig({ cwd });
    await cleanupNuxtDirs(nuxtOptions.rootDir, nuxtOptions.buildDir);
  }
});

export { cleanup as default };
