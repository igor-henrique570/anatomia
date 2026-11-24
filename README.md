# Atlas de Anatomia Humana 3D — Osteologia e Artrologia

Aplicação interativa e moderna para estudo aprofundado dos ossos do esqueleto humano, biomecânica das articulações e modelagem/impressão tridimensional.

---

## 🌟 Principais Recursos

### 1. 📖 Atlas de Osteologia Interativo
- **Catálogo Anatômico Completo**: Ossos do esqueleto axial e apendicular organizados por regiões (Crânio, Coluna Vertebral, Caixa Torácica, Cintura Escapular & Membro Superior, Pelve, Membro Inferior).
- **Terminologia Anatômica Internacional (SBA/IFAA)**: Nomes em português e latim.
- **Filtros e Busca em Tempo Real**: Localize ossos instantaneamente por nome, latim, região anatômica ou classificação morfológica (Longos, Curtos, Planos, Irregulares, Sesamóides).
- **Isolamento de Ossos**: Selecione um cartão para exibir o grupo ósseo correspondente ou use o botão `+` para combinar vários grupos; clique em um osso individual no esqueleto completo para isolá-lo.
- **Marcos Anatômicos Interativos**: Consulte os acidentes ósseos por cartão; a câmera foca o osso correspondente e o dossiê apresenta sua descrição.
- **Dossiê Clínico & Traumatológico**: Fraturas clássicas, mecanismos de trauma e vias cirúrgicas.

### 2. 🔄 Laboratório de Articulações & Cinemática 3D
- **Seleção Dinâmica de Articulações**:
  - Articulação do Joelho (*Femorotibial e Femoropatelar*)
  - Articulação do Ombro (*Glenoumeral*)
  - Articulação do Cotovelo (*Umeroulnar, Umerorradial e Radioulnar*)
  - Articulação do Quadril (*Coxofemoral*)
  - Segmento Móvel da Coluna Vertebral (*Lombar L3-L4 com Disco*)
  - Articulação Temporomandibular (*ATM com Disco Bicôncavo*)
- **Simulador de Amplitude de Movimento (ADM)**: Controle angular em graus (°), com ossos segmentados do modelo Écorché e movimento demonstrativo nas articulações principais.
- **Estruturas Associadas**: Fichas informativas sobre ligamentos cruzados e colaterais, labrum, meniscos e disco articular.
- **Lateralidade e movimentos por articulação**: seleção direita/esquerda nas articulações pares; coluna e ATM permanecem bilaterais. Os controles oferecem flexão/extensão, abdução/adução ou rotações apenas quando esses movimentos são pertinentes à articulação; cotovelo também inclui pronação/supinação, coluna inclinação lateral e ATM movimentos mandibulares.
- **Amplitudes de referência**: limites educacionais aproximados acompanhados de fontes médicas na ficha da articulação. No ombro, o controle representa elevação glenoumeral isolada (com escápula fixa), por isso não confunde a amplitude da articulação com a elevação total do braço. A abdução é orientada para fora no lado selecionado e a adução no sentido inverso.
- Os intervalos variam com pessoa, posicionamento e método de medição; o modelo usa geometria e cinemática demonstrativas, não é uma avaliação clínica ou instrumento diagnóstico.

### 3. ⚙️ Gerador e Modelador 3D Paramétrico
- **Modelagem baseada nas malhas ósseas reais segmentadas do Écorché**, selecionando o osso representativo e ajustando escala geral e proporções nos eixos X, Y e Z.
- **Unidades de exportação anatômicas aproximadas**: a altura normalizada do esqueleto é interpretada como cerca de 1,8 m (150 mm por unidade 3D) para dimensões em STL, OBJ e métricas.
- **Estatísticas Volumétricas & Geométricas**: Cálculo instantâneo de polígonos 3D (triângulos e vértices), dimensões em milímetros ($X \times Y \times Z$), volume em $\text{cm}^3$ e estimativa do peso mineral ósseo *in vivo*.
- **Exportação 3D Direta**:
  - **Baixar STL**: Arquivo binário pronto para fatiamento e impressão 3D (Bambu Studio, Cura, PrusaSlicer).
  - **Baixar OBJ**: Arquivo compatível com Blender, Maya, Unity e softwares de animação.

### 4. 🩻 Modos de Visualização & Radiologia (HUD 3D)
- **Realístico**: Textura óssea marfim com canais osteônicos e micro-poros corticais.
- **Raio-X / Negatoscópio**: Shader translúcido ciano para inspeção estrutural.
- **Wireframe**: Malha poligonal 3D cirúrgica.
- **Mapa de Carga**: Mapeamento de tensões mecânicas e linhas de compressão de Wolff.
- **Fatiamento Anatômico**: Corte coronal/sagital ativo para visualização da cavidade medular interna.
- **Captura HD**: Exportação de imagens em alta definição da peça inspecionada.

### 5. 🧍 Modo Esqueleto Completo
- Modelo anatômico de estudo com 198 malhas ósseas nomeadas individualmente, organizado em posição anatômica e com braços levemente afastados para facilitar a leitura.
- Isolamento exato de um osso, de pares bilaterais e de conjuntos anatômicos pelo catálogo; o modelo de tomografia continua acessível como referência separada.
- O Gerador Paramétrico permanece disponível para ajustar proporções e exportar modelos derivados das malhas ósseas segmentadas.

### 6. 🧠 Modo Quiz & Estudo Ativo
- Desafios anatômicos com pontuação, feedback didático imediato e direcionamento automático da câmera 3D para o osso e acidente em questão.

### 7. 🩹 Fraturas para Estudo
- Exemplos de fraturas conhecidas organizados por região, com estruturas anatômicas, classificações usadas em estudo e pontos de revisão.
- A seleção destaca no visualizador 3D o osso representativo da região; a lista não substitui imagens diagnósticas nem avaliação profissional.
- Categorias de OPME aparecem como referências educacionais. Não são recomendações de tratamento nem confirmação de compatibilidade.

### 8. 📋 Cadastro Local de OPMEs
- Cadastre empresa/fabricante, produto, categoria, fraturas relacionadas e notas de técnica; anexe um PDF de até 25 MB.
- Os registros e documentos são armazenados no IndexedDB do navegador/dispositivo atual. Não há servidor, envio externo ou sincronização entre dispositivos.
- A disponibilidade depende do armazenamento e das permissões do navegador. Limpar os dados do site pode apagar os cadastros; exporte/guarde seus documentos originais separadamente.
- Cadastros são informados pelo usuário e não são verificados. Confirme compatibilidade, instruções de uso, técnica e decisões clínicas com profissionais habilitados, fabricante e protocolos institucionais. Não inclua dados de pacientes.

---

## 🚀 Como Executar

A aplicação usa dependências e modelos armazenados no próprio projeto e pode funcionar sem internet. Os links de fontes e referências só precisam de conexão quando forem abertos. Use um navegador moderno (Google Chrome, Microsoft Edge, Firefox ou Safari).

### Servidor local (necessário inclusive offline)
Não abra `index.html` diretamente por duplo clique: os módulos JavaScript são bloqueados pelo navegador em `file://`. Inicie um servidor na pasta do projeto:

```bash
# Python 3 (incluído em muitas instalações)
python -m http.server 8080
```
Depois, abra `http://localhost:8080` no navegador. Isso funciona sem conexão com a internet; o Live Server do VS Code também pode ser usado.

Alternativamente, se o pacote `serve` já estiver instalado:
```bash
serve
```

---

## 📁 Estrutura de Arquivos

```text
trabalho para estudo futuro/
├── index.html                   # Página principal com interface de 3 colunas e viewport 3D
├── css/
│   └── styles.css               # Tema escuro cirúrgico / bio-tech com glassmorphism
├── assets/
│   └── models/                  # Modelos 3D e imagens de referência licenciados
├── js/
│   ├── app.js                   # Controlador mestre da aplicação e manipulação de estado
│   ├── data/
│   │   ├── bonesData.js         # Base de dados osteológica com marcos, inserções e clínica
│   │   ├── jointsData.js        # Base de dados artrológica, ligamentos e amplitudes
│   │   └── quizData.js          # Banco de questões anatômicas
│   │   ├── fracturesData.js     # Exemplos educacionais de fraturas por região
│   │   └── opmeRepository.js    # Persistência local de cadastros e PDFs via IndexedDB
│   └── three/
│       ├── sceneManager.js      # Motor Three.js, iluminação de estúdio, shaders e raycasting
│       ├── boneGenerators.js    # Gerador paramétrico procedural das geometrias ósseas
│       ├── jointSimulator.js    # Simulador cinemático multi-ossos das articulações
│       └── stlExporter.js       # Exportador STL binário e OBJ com cálculo de volumetria
└── README.md                    # Documentação do projeto
```

### Modelos anatômicos e atribuição

- [Écorché](https://github.com/Charleeh/ecorche), por Charleeh, derivado de [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/) (© Database Center for Life Science) e [Z-Anatomy](https://www.z-anatomy.com/) (Gauthier Kervyn). Os modelos e metadados estão licenciados sob CC BY-SA 4.0.
- A aplicação usa as malhas ósseas individuais de `assets/models/ecorche.glb`, ajusta escala, enquadramento e abertura dos braços em 12° para aproximar a postura de estudo da referência; a atribuição e a licença CC BY-SA 4.0 devem ser mantidas ao redistribuir a adaptação.
- O laboratório de articulações reutiliza essas mesmas malhas reais para mostrar os ossos envolvidos e animar o segmento móvel; as listas laterais do atlas e das articulações rolam com a roda do mouse.
- Créditos completos, fontes dos dados e alterações estão em [ecorche-ATTRIBUTION.md](assets/models/ecorche-ATTRIBUTION.md).
- [Fêmur direito isolado](https://3d.nih.gov/entries/3DPX-016822) e [esqueleto completo derivado de tomografia](https://3d.nih.gov/entries/3DPX-016838), fornecidos por My Segmenter no NIH 3D; ambos CC BY 4.0. O esqueleto de tomografia permanece como referência visual, pois sua malha única não permite o isolamento individual.
- Os ativos e as prévias ficam em `assets/models/`; cada ficha do atlas exibe a fonte e a licença do modelo correspondente.

### Referências de amplitude articular

Os intervalos exibidos são faixas didáticas aproximadas, não limites universais nem valores de diagnóstico. A ficha de cada articulação contém links para os estudos associados. Entre as fontes consultadas:

- Brown et al. [Shoulder pain: the role of the physical examination](https://www.aafp.org/pubs/afp/issues/2000/0515/p3079.html), *American Family Physician* (2000): diferencia o movimento glenoumeral do escapulotorácico e descreve como isolar o ombro durante a avaliação.
- Soucie et al. [Range of motion measurements: reference values and a database for comparison studies](https://pubmed.ncbi.nlm.nih.gov/21070485/), *Haemophilia* (2011): valores de referência e variação na amplitude de movimento.
- Zwerus et al. [Normative values and affecting factors for the elbow range of motion](https://doi.org/10.1177/1758573217728711), *Shoulder & Elbow* (2019): valores normativos do cotovelo.
- Hallaçeli et al. [Normal hip, knee and ankle range of motion in the Turkish population](https://doi.org/10.3944/AOTT.2014.3113), *Acta Orthopaedica et Traumatologica Turcica* (2014): medidas de quadril e joelho e diferenças laterais.
- Cheatham et al. [Hip range of motion in recreational weight training participants](https://pubmed.ncbi.nlm.nih.gov/29181254/), *International Journal of Sports Physical Therapy* (2017): medidas passivas do quadril.
- Xu et al. [The 6 degrees-of-freedom range of motion of the L1-S1 vertebrae in young and middle-aged asymptomatic people](https://pubmed.ncbi.nlm.nih.gov/36386544/), *Frontiers in Surgery* (2022): cinemática segmentar lombar.
- Zawawi et al. [An index for the measurement of normal maximum mouth opening](https://pubmed.ncbi.nlm.nih.gov/14653940/), *Journal of the Canadian Dental Association* (2003): abertura máxima interincisal.
