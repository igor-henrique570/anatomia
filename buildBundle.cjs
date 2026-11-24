const fs = require('fs');
const path = require('path');

const files = [
  'js/data/bonesData.js',
  'js/data/jointsData.js',
  'js/data/quizData.js',
  'js/three/boneGenerators.js',
  'js/three/stlExporter.js',
  'js/three/jointSimulator.js',
  'js/three/sceneManager.js',
  'js/app.js'
];

let bundleContent = `/**
 * ATLAS DE ANATOMIA 3D - BUNDLE UNIFICADO (COMPATÍVEL COM FILE:// E HTTP://)
 * Funciona diretamente ao abrir o index.html por dois cliques no Windows, sem erro de CORS.
 */
(function() {
  'use strict';

`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Remove import lines
  content = content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '');
  
  // Replace export const / export class / export function / export default
  content = content.replace(/^export\s+(const|let|var|class|function)\s+/gm, '$1 ');
  content = content.replace(/^export\s+default\s+/gm, '');

  bundleContent += `\n/* ===== ${path.basename(file)} ===== */\n` + content + '\n';
});

// Garante inicialização mesmo se o DOM já estiver pronto
bundleContent += `
  // Inicialização Robusta
  function startAtlasApp() {
    if (window._atlasAppStarted) return;
    window._atlasAppStarted = true;
    try {
      const app = new AtlasApp();
      app.init();
      window.atlasApp = app;
      console.log("Atlas de Anatomia 3D iniciado com sucesso!");
    } catch(err) {
      console.error("Erro ao inicializar o Atlas 3D:", err);
    }
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(startAtlasApp, 10);
  } else {
    window.addEventListener("DOMContentLoaded", startAtlasApp);
  }
})();
`;

fs.writeFileSync('js/atlasBundle.js', bundleContent, 'utf-8');
console.log('Bundle gerado com sucesso: js/atlasBundle.js');
