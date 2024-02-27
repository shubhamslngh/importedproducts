import { execa } from './index3.mjs';
import { l as loadKit, w as writeTypes } from '../shared/nuxi.6740d53b.mjs';
import { t as tryResolveModule } from '../shared/nuxi.4f212502.mjs';
import { d as defineCommand } from '../shared/nuxi.a9f3bca7.mjs';
import { s as sharedArgs, l as legacyRootDirArgs, r as resolve } from '../shared/nuxi.a0d06cf3.mjs';
import 'node:buffer';
import 'node:path';
import 'node:child_process';
import 'node:process';
import '../shared/nuxi.2155838d.mjs';
import 'child_process';
import 'path';
import 'fs';
import 'node:url';
import 'node:os';
import 'node:fs';
import 'node:timers/promises';
import 'stream';
import 'node:util';
import 'node:perf_hooks';
import '../shared/nuxi.eaa29140.mjs';
import 'node:tty';
import './satisfies.mjs';
import '../shared/nuxi.cc8dd4a9.mjs';
import '../shared/nuxi.73800aa7.mjs';
import 'crypto';
import 'module';
import 'perf_hooks';
import 'os';
import 'vm';
import 'url';
import 'assert';
import 'process';
import 'v8';
import 'util';
import 'tty';
import '../shared/nuxi.ad2c9e3f.mjs';
import 'node:module';
import 'node:assert';
import 'node:v8';

const typecheck = defineCommand({
  meta: {
    name: "typecheck",
    description: "Runs `vue-tsc` to check types throughout your app."
  },
  args: {
    ...sharedArgs,
    ...legacyRootDirArgs
  },
  async run(ctx) {
    process.env.NODE_ENV = process.env.NODE_ENV || "production";
    const cwd = resolve(ctx.args.cwd || ctx.args.rootDir || ".");
    const {
      loadNuxt,
      buildNuxt,
      writeTypes: writeTypes$1 = writeTypes
    } = await loadKit(cwd);
    const nuxt = await loadNuxt({
      rootDir: cwd,
      overrides: {
        _prepare: true,
        logLevel: ctx.args.logLevel,
        .../*ctx.options?.overrides || */
        {}
      }
    });
    await writeTypes$1(nuxt);
    await buildNuxt(nuxt);
    await nuxt.close();
    const hasLocalInstall = await tryResolveModule("typescript", cwd) && await tryResolveModule("vue-tsc/package.json", cwd);
    if (hasLocalInstall) {
      await execa("vue-tsc", ["--noEmit"], {
        preferLocal: true,
        stdio: "inherit",
        cwd
      });
    } else {
      await execa(
        "npx",
        "-p vue-tsc -p typescript vue-tsc --noEmit".split(" "),
        { stdio: "inherit", cwd }
      );
    }
  }
});

export { typecheck as default };
