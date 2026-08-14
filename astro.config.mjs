// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';

/** Lazy-loads and async-decodes every markdown image (hast plugin). */
function rehypeLazyImages() {
  return (/** @type {import('hast').Root} */ tree) => {
    /** @type {(node: import('hast').Root | import('hast').RootContent) => void} */
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'img' && node.properties) {
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
      }
      if ('children' in node) node.children.forEach(walk);
    };
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: { processor: unified({ rehypePlugins: [rehypeLazyImages] }) },
  output: 'static',
  site: 'https://marwaattefsaleh.github.io',
  base: '/portfolio/',
});
